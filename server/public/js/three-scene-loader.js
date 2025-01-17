/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.SceneLoader = function () {

  this.onLoadStart = function () {};
  this.onLoadProgress = function() {};
  this.onLoadComplete = function () {};

  this.callbackSync = function () {};
  this.callbackProgress = function () {};

  this.geometryHandlerMap = {};
  this.hierarchyHandlerMap = {};

  this.addGeometryHandler( "ascii", THREE.LegacyJSONLoader );
  // this.addGeometryHandler( "binary", THREE.BinaryLoader );

};

THREE.SceneLoader.prototype.constructor = THREE.SceneLoader;

THREE.SceneLoader.prototype.load = function ( url, callbackFinished ) {

  var scope = this;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {

    if ( xhr.readyState === 4 ) {

      if ( xhr.status === 200 || xhr.status === 0 ) {

        var json = JSON.parse( xhr.responseText );
        scope.parse( json, callbackFinished, url );

      } else {

        console.error( "THREE.SceneLoader: Couldn't load [" + url + "] [" + xhr.status + "]" );

      }

    }

  };

  xhr.open( "GET", url, true );
  xhr.send( null );

};

THREE.SceneLoader.prototype.addGeometryHandler = function ( typeID, loaderClass ) {

  this.geometryHandlerMap[ typeID ] = { "loaderClass": loaderClass };

};

THREE.SceneLoader.prototype.addHierarchyHandler = function ( typeID, loaderClass ) {

  this.hierarchyHandlerMap[ typeID ] = { "loaderClass": loaderClass };

};

THREE.SceneLoader.prototype.parse = function ( json, callbackFinished, url ) {

  var scope = this;

  var urlBase = THREE.LoaderUtils.extractUrlBase( url );

  var geometry, material, camera, fog,
    texture, images, color,
    light, hex, intensity,
    counter_models, counter_textures,
    total_models, total_textures,
    result;

  var target_array = [];

  var data = json;

  // async geometry loaders

  for ( var typeID in this.geometryHandlerMap ) {

    var loaderClass = this.geometryHandlerMap[ typeID ][ "loaderClass" ];
    this.geometryHandlerMap[ typeID ][ "loaderObject" ] = new loaderClass();

  }

  // async hierachy loaders

  for ( var typeID in this.hierarchyHandlerMap ) {

    var loaderClass = this.hierarchyHandlerMap[ typeID ][ "loaderClass" ];
    this.hierarchyHandlerMap[ typeID ][ "loaderObject" ] = new loaderClass();

  }

  counter_models = 0;
  counter_textures = 0;

  result = {

    scene: new THREE.Scene(),
    geometries: {},
    face_materials: {},
    materials: {},
    textures: {},
    objects: {},
    cameras: {},
    lights: {},
    fogs: {},
    empties: {}

  };

  if ( data.transform ) {

    var position = data.transform.position,
      rotation = data.transform.rotation,
      scale = data.transform.scale;

    if ( position )
      result.scene.position.set( position[ 0 ], position[ 1 ], position [ 2 ] );

    if ( rotation )
      result.scene.rotation.set( rotation[ 0 ], rotation[ 1 ], rotation [ 2 ] );

    if ( scale )
      result.scene.scale.set( scale[ 0 ], scale[ 1 ], scale [ 2 ] );

    if ( position || rotation || scale ) {

      result.scene.updateMatrix();
      result.scene.updateMatrixWorld();

    }

  }

  function get_url( source_url, url_type ) {

    if ( url_type == "relativeToHTML" ) {

      return source_url;

    } else {

      return urlBase + "/" + source_url;

    }

  };

  // toplevel loader function, delegates to handle_children

  function handle_objects() {

    handle_children( result.scene, data.objects );

  }

  // handle all the children from the loaded json and attach them to given parent

  function handle_children( parent, children ) {

    var mat, dst, pos, rot, scl, quat;

    for ( var objID in children ) {

      // check by id if child has already been handled,
      // if not, create new object

      if ( result.objects[ objID ] === undefined ) {

        var objJSON = children[ objID ];

        var object = null;

        // meshes

        if ( objJSON.type && ( objJSON.type in scope.hierarchyHandlerMap ) ) {

          if ( objJSON.loading === undefined ) {

            var reservedTypes = { "type": 1, "url": 1, "material": 1,
                        "position": 1, "rotation": 1, "scale" : 1,
                        "visible": 1, "children": 1, "properties": 1,
                        "skin": 1, "morph": 1, "mirroredLoop": 1, "duration": 1 };

            var loaderParameters = {};

            for ( var parType in objJSON ) {

              if ( ! ( parType in reservedTypes ) ) {

                loaderParameters[ parType ] = objJSON[ parType ];

              }

            }

            material = result.materials[ objJSON.material ];

            objJSON.loading = true;

            var loader = scope.hierarchyHandlerMap[ objJSON.type ][ "loaderObject" ];

            // ColladaLoader

            if ( loader.options ) {

              loader.load( get_url( objJSON.url, data.urlBaseType ), create_callback_hierachy( objID, parent, material, objJSON ) );

            // UTF8Loader
            // OBJLoader

            } else {

              loader.load( get_url( objJSON.url, data.urlBaseType ), create_callback_hierachy( objID, parent, material, objJSON ), loaderParameters );

            }

          }

        } else if ( objJSON.geometry !== undefined ) {

          geometry = result.geometries[ objJSON.geometry ];

          // geometry already loaded

          if ( geometry ) {

            var needsTangents = false;

            material = result.materials[ objJSON.material ];
            needsTangents = material instanceof THREE.ShaderMaterial;

            pos = objJSON.position;
            rot = objJSON.rotation;
            scl = objJSON.scale;
            mat = objJSON.matrix;
            quat = objJSON.quaternion;

            // use materials from the model file
            // if there is no material specified in the object

            if ( ! objJSON.material ) {

              material = new THREE.MeshFaceMaterial( result.face_materials[ objJSON.geometry ] );

            }

            // use materials from the model file
            // if there is just empty face material
            // (must create new material as each model has its own face material)

            if ( ( material instanceof THREE.MeshFaceMaterial ) && material.materials.length === 0 ) {

              material = new THREE.MeshFaceMaterial( result.face_materials[ objJSON.geometry ] );

            }

            if ( material instanceof THREE.MeshFaceMaterial ) {

              for ( var i = 0; i < material.materials.length; i ++ ) {

                needsTangents = needsTangents || ( material.materials[ i ] instanceof THREE.ShaderMaterial );

              }

            }

            if ( needsTangents ) {

              geometry.computeTangents();

            }

            if ( objJSON.skin ) {

              object = new THREE.SkinnedMesh( geometry, material );

            } else if ( objJSON.morph ) {

              object = new THREE.MorphAnimMesh( geometry, material );

              if ( objJSON.duration !== undefined ) {

                object.duration = objJSON.duration;

              }

              if ( objJSON.time !== undefined ) {

                object.time = objJSON.time;

              }

              if ( objJSON.mirroredLoop !== undefined ) {

                object.mirroredLoop = objJSON.mirroredLoop;

              }

              if ( material.morphNormals ) {

                geometry.computeMorphNormals();

              }

            } else {

              object = new THREE.Mesh( geometry, material );

            }

            object.name = objID;

            if ( mat ) {

              object.matrixAutoUpdate = false;
              object.matrix.set(
                mat[0],  mat[1],  mat[2],  mat[3],
                mat[4],  mat[5],  mat[6],  mat[7],
                mat[8],  mat[9],  mat[10], mat[11],
                mat[12], mat[13], mat[14], mat[15]
              );

            } else {

              object.position.set( pos[0], pos[1], pos[2] );

              if ( quat ) {

                object.quaternion.set( quat[0], quat[1], quat[2], quat[3] );

              } else {

                object.rotation.set( rot[0], rot[1], rot[2] );

              }

              object.scale.set( scl[0], scl[1], scl[2] );

            }

            object.visible = objJSON.visible;
            object.castShadow = objJSON.castShadow;
            object.receiveShadow = objJSON.receiveShadow;

            parent.add( object );

            result.objects[ objID ] = object;

          }

        // lights

        } else if ( objJSON.type === "DirectionalLight" || objJSON.type === "PointLight" || objJSON.type === "AmbientLight" ) {

          hex = ( objJSON.color !== undefined ) ? objJSON.color : 0xffffff;
          intensity = ( objJSON.intensity !== undefined ) ? objJSON.intensity : 1;

          if ( objJSON.type === "DirectionalLight" ) {

            pos = objJSON.direction;

            light = new THREE.DirectionalLight( hex, intensity );
            light.position.set( pos[0], pos[1], pos[2] );

            if ( objJSON.target ) {

              target_array.push( { "object": light, "targetName" : objJSON.target } );

              // kill existing default target
              // otherwise it gets added to scene when parent gets added

              light.target = null;

            }

          } else if ( objJSON.type === "PointLight" ) {

            pos = objJSON.position;
            dst = objJSON.distance;

            light = new THREE.PointLight( hex, intensity, dst );
            light.position.set( pos[0], pos[1], pos[2] );

          } else if ( objJSON.type === "AmbientLight" ) {

            light = new THREE.AmbientLight( hex );

          }

          parent.add( light );

          light.name = objID;
          result.lights[ objID ] = light;
          result.objects[ objID ] = light;

        // cameras

        } else if ( objJSON.type === "PerspectiveCamera" || objJSON.type === "OrthographicCamera" ) {

          if ( objJSON.type === "PerspectiveCamera" ) {

            camera = new THREE.PerspectiveCamera( objJSON.fov, objJSON.aspect, objJSON.near, objJSON.far );

          } else if ( objJSON.type === "OrthographicCamera" ) {

            camera = new THREE.OrthographicCamera( objJSON.left, objJSON.right, objJSON.top, objJSON.bottom, objJSON.near, objJSON.far );

          }

          pos = objJSON.position;
          camera.position.set( pos[0], pos[1], pos[2] );
          parent.add( camera );

          camera.name = objID;
          result.cameras[ objID ] = camera;
          result.objects[ objID ] = camera;

        // pure Object3D

        } else {

          pos = objJSON.position;
          rot = objJSON.rotation;
          scl = objJSON.scale;
          quat = objJSON.quaternion;

          object = new THREE.Object3D();
          object.name = objID;
          object.position.set( pos[0], pos[1], pos[2] );

          if ( quat ) {

            object.quaternion.set( quat[0], quat[1], quat[2], quat[3] );

          } else {

            object.rotation.set( rot[0], rot[1], rot[2] );

          }

          object.scale.set( scl[0], scl[1], scl[2] );
          object.visible = ( objJSON.visible !== undefined ) ? objJSON.visible : false;

          parent.add( object );

          result.objects[ objID ] = object;
          result.empties[ objID ] = object;

        }

        if ( object ) {

          if ( objJSON.properties !== undefined )  {

            for ( var key in objJSON.properties ) {

              var value = objJSON.properties[ key ];
              object.properties[ key ] = value;

            }

          }

          if ( objJSON.children !== undefined ) {

            handle_children( object, objJSON.children );

          }

        }

      }

    }

  };

  function handle_mesh( geo, mat, id ) {

    result.geometries[ id ] = geo;
    result.face_materials[ id ] = mat;
    handle_objects();

  };

  function handle_hierarchy( node, id, parent, material, obj ) {

    var p = obj.position;
    var r = obj.rotation;
    var q = obj.quaternion;
    var s = obj.scale;

    node.position.set( p[0], p[1], p[2] );

    if ( q ) {

      node.quaternion.set( q[0], q[1], q[2], q[3] );

    } else {

      node.rotation.set( r[0], r[1], r[2] );

    }

    node.scale.set( s[0], s[1], s[2] );

    // override children materials
    // if object material was specified in JSON explicitly

    if ( material ) {

      node.traverse( function ( child )  {

        child.material = material;

      } );

    }

    // override children visibility
    // with root node visibility as specified in JSON

    var visible = ( obj.visible !== undefined ) ? obj.visible : true;

    node.traverse( function ( child )  {

      child.visible = visible;

    } );

    parent.add( node );

    node.name = id;

    result.objects[ id ] = node;
    handle_objects();

  };

  function create_callback_geometry( id ) {

    return function( geo, mat ) {

      handle_mesh( geo, mat, id );

      counter_models -= 1;

      scope.onLoadComplete();

      async_callback_gate();

    }

  };

  function create_callback_hierachy( id, parent, material, obj ) {

    return function( event ) {

      var result;

      // loaders which use EventDispatcher

      if ( event.content ) {

        result = event.content;

      // ColladaLoader

      } else if ( event.dae ) {

        result = event.scene;


      // UTF8Loader

      } else {

        result = event;

      }

      handle_hierarchy( result, id, parent, material, obj );

      counter_models -= 1;

      scope.onLoadComplete();

      async_callback_gate();

    }

  };

  function create_callback_embed( id ) {

    return function( geo, mat ) {

      result.geometries[ id ] = geo;
      result.face_materials[ id ] = mat;

    }

  };

  function async_callback_gate() {

    var progress = {

      totalModels : total_models,
      totalTextures : total_textures,
      loadedModels : total_models - counter_models,
      loadedTextures : total_textures - counter_textures

    };

    scope.callbackProgress( progress, result );

    scope.onLoadProgress();

    if ( counter_models === 0 && counter_textures === 0 ) {

      finalize();
      callbackFinished( result );

    }

  };

  function finalize() {

    // take care of targets which could be asynchronously loaded objects

    for ( var i = 0; i < target_array.length; i ++ ) {

      var ta = target_array[ i ];

      var target = result.objects[ ta.targetName ];

      if ( target ) {

        ta.object.target = target;

      } else {

        // if there was error and target of specified name doesn't exist in the scene file
        // create instead dummy target
        // (target must be added to scene explicitly as parent is already added)

        ta.object.target = new THREE.Object3D();
        result.scene.add( ta.object.target );

      }

      ta.object.target.properties.targetInverse = ta.object;

    }

  };

  var callbackTexture = function ( count ) {

    counter_textures -= count;
    async_callback_gate();

    scope.onLoadComplete();

  };

  // must use this instead of just directly calling callbackTexture
  // because of closure in the calling context loop

  var generateTextureCallback = function ( count ) {

    return function() {

      callbackTexture( count );

    };

  };

  // first go synchronous elements

  // fogs

  var fogID, fogJSON;

  for ( fogID in data.fogs ) {

    fogJSON = data.fogs[ fogID ];

    if ( fogJSON.type === "linear" ) {

      fog = new THREE.Fog( 0x000000, fogJSON.near, fogJSON.far );

    } else if ( fogJSON.type === "exp2" ) {

      fog = new THREE.FogExp2( 0x000000, fogJSON.density );

    }

    color = fogJSON.color;
    fog.color.setRGB( color[0], color[1], color[2] );

    result.fogs[ fogID ] = fog;

  }

  // now come potentially asynchronous elements

  // geometries

  // count how many geometries will be loaded asynchronously

  var geoID, geoJSON;

  for ( geoID in data.geometries ) {

    geoJSON = data.geometries[ geoID ];

    if ( geoJSON.type in this.geometryHandlerMap ) {

      counter_models += 1;

      scope.onLoadStart();

    }

  }

  // count how many hierarchies will be loaded asynchronously

  var objID, objJSON;

  for ( objID in data.objects ) {

    objJSON = data.objects[ objID ];

    if ( objJSON.type && ( objJSON.type in this.hierarchyHandlerMap ) ) {

      counter_models += 1;

      scope.onLoadStart();

    }

  }

  total_models = counter_models;

  for ( geoID in data.geometries ) {

    geoJSON = data.geometries[ geoID ];

    if ( geoJSON.type === "cube" ) {

      geometry = new THREE.CubeGeometry( geoJSON.width, geoJSON.height, geoJSON.depth, geoJSON.widthSegments, geoJSON.heightSegments, geoJSON.depthSegments );
      result.geometries[ geoID ] = geometry;

    } else if ( geoJSON.type === "plane" ) {

      geometry = new THREE.PlaneGeometry( geoJSON.width, geoJSON.height, geoJSON.widthSegments, geoJSON.heightSegments );
      result.geometries[ geoID ] = geometry;

    } else if ( geoJSON.type === "sphere" ) {

      geometry = new THREE.SphereGeometry( geoJSON.radius, geoJSON.widthSegments, geoJSON.heightSegments );
      result.geometries[ geoID ] = geometry;

    } else if ( geoJSON.type === "cylinder" ) {

      geometry = new THREE.CylinderGeometry( geoJSON.topRad, geoJSON.botRad, geoJSON.height, geoJSON.radSegs, geoJSON.heightSegs );
      result.geometries[ geoID ] = geometry;

    } else if ( geoJSON.type === "torus" ) {

      geometry = new THREE.TorusGeometry( geoJSON.radius, geoJSON.tube, geoJSON.segmentsR, geoJSON.segmentsT );
      result.geometries[ geoID ] = geometry;

    } else if ( geoJSON.type === "icosahedron" ) {

      geometry = new THREE.IcosahedronGeometry( geoJSON.radius, geoJSON.subdivisions );
      result.geometries[ geoID ] = geometry;

    } else if ( geoJSON.type in this.geometryHandlerMap ) {

      var loaderParameters = {};

      for ( var parType in geoJSON ) {

        if ( parType !== "type" && parType !== "url" ) {

          loaderParameters[ parType ] = geoJSON[ parType ];

        }

      }

      var loader = this.geometryHandlerMap[ geoJSON.type ][ "loaderObject" ];
      loader.load( get_url( geoJSON.url, data.urlBaseType ), create_callback_geometry( geoID ), loaderParameters );

    } else if ( geoJSON.type === "embedded" ) {

      var modelJson = data.embeds[ geoJSON.id ],
        texture_path = "";

      // pass metadata along to jsonLoader so it knows the format version

      modelJson.metadata = data.metadata;

      if ( modelJson ) {

        var jsonLoader = this.geometryHandlerMap[ "ascii" ][ "loaderObject" ];
        jsonLoader.setPath(texture_path);
        var res = jsonLoader.parse( modelJson );
        create_callback_embed( geoID )(res.geometry, res.geometry);

      }

    }

  }

  // textures

  // count how many textures will be loaded asynchronously

  var textureID, textureJSON;

  for ( textureID in data.textures ) {

    textureJSON = data.textures[ textureID ];

    if ( textureJSON.url instanceof Array ) {

      counter_textures += textureJSON.url.length;

      for( var n = 0; n < textureJSON.url.length; n ++ ) {

        scope.onLoadStart();

      }

    } else {

      counter_textures += 1;

      scope.onLoadStart();

    }

  }

  total_textures = counter_textures;

  for ( textureID in data.textures ) {

    textureJSON = data.textures[ textureID ];

    if ( textureJSON.mapping !== undefined && THREE[ textureJSON.mapping ] !== undefined  ) {

      textureJSON.mapping = new THREE[ textureJSON.mapping ]();

    }

    if ( textureJSON.url instanceof Array ) {

      var count = textureJSON.url.length;
      var url_array = [];

      for( var i = 0; i < count; i ++ ) {

        url_array[ i ] = get_url( textureJSON.url[ i ], data.urlBaseType );

      }

      var isCompressed = url_array[ 0 ].endsWith( ".dds" );

      if ( isCompressed ) {

        texture = THREE.ImageUtils.loadCompressedTextureCube( url_array, textureJSON.mapping, generateTextureCallback( count ) );

      } else {

        texture = THREE.ImageUtils.loadTextureCube( url_array, textureJSON.mapping, generateTextureCallback( count ) );

      }

    } else {

      var isCompressed = textureJSON.url.toLowerCase().endsWith( ".dds" );
      var fullUrl = get_url( textureJSON.url, data.urlBaseType );
      var textureCallback = generateTextureCallback( 1 );

      if ( isCompressed ) {

        texture = THREE.ImageUtils.loadCompressedTexture( fullUrl, textureJSON.mapping, textureCallback );

      } else {

        texture = THREE.ImageUtils.loadTexture( fullUrl, textureJSON.mapping, textureCallback );

      }

      if ( THREE[ textureJSON.minFilter ] !== undefined )
        texture.minFilter = THREE[ textureJSON.minFilter ];

      if ( THREE[ textureJSON.magFilter ] !== undefined )
        texture.magFilter = THREE[ textureJSON.magFilter ];

      if ( textureJSON.anisotropy ) texture.anisotropy = textureJSON.anisotropy;

      if ( textureJSON.repeat ) {

        texture.repeat.set( textureJSON.repeat[ 0 ], textureJSON.repeat[ 1 ] );

        if ( textureJSON.repeat[ 0 ] !== 1 ) texture.wrapS = THREE.RepeatWrapping;
        if ( textureJSON.repeat[ 1 ] !== 1 ) texture.wrapT = THREE.RepeatWrapping;

      }

      if ( textureJSON.offset ) {

        texture.offset.set( textureJSON.offset[ 0 ], textureJSON.offset[ 1 ] );

      }

      // handle wrap after repeat so that default repeat can be overriden

      if ( textureJSON.wrap ) {

        var wrapMap = {
        "repeat"  : THREE.RepeatWrapping,
        "mirror"  : THREE.MirroredRepeatWrapping
        }

        if ( wrapMap[ textureJSON.wrap[ 0 ] ] !== undefined ) texture.wrapS = wrapMap[ textureJSON.wrap[ 0 ] ];
        if ( wrapMap[ textureJSON.wrap[ 1 ] ] !== undefined ) texture.wrapT = wrapMap[ textureJSON.wrap[ 1 ] ];

      }

    }

    result.textures[ textureID ] = texture;

  }

  // materials

  var matID, matJSON;
  var parID;

  for ( matID in data.materials ) {

    matJSON = data.materials[ matID ];

    for ( parID in matJSON.parameters ) {

      if ( parID === "envMap" || parID === "map" || parID === "lightMap" || parID === "bumpMap" || parID === "normalMap" ) {

        matJSON.parameters[ parID ] = result.textures[ matJSON.parameters[ parID ] ];

      } else if ( parID === "shading" ) {

        matJSON.parameters[ parID ] = ( matJSON.parameters[ parID ] === "flat" ) ? THREE.FlatShading : THREE.SmoothShading;

      } else if ( parID === "side" ) {

        if ( matJSON.parameters[ parID ] == "double" ) {

          matJSON.parameters[ parID ] = THREE.DoubleSide;

        } else if ( matJSON.parameters[ parID ] == "back" ) {

          matJSON.parameters[ parID ] = THREE.BackSide;

        } else {

          matJSON.parameters[ parID ] = THREE.FrontSide;

        }

      } else if ( parID === "blending" ) {

        matJSON.parameters[ parID ] = matJSON.parameters[ parID ] in THREE ? THREE[ matJSON.parameters[ parID ] ] : THREE.NormalBlending;

      } else if ( parID === "combine" ) {

        matJSON.parameters[ parID ] = matJSON.parameters[ parID ] in THREE ? THREE[ matJSON.parameters[ parID ] ] : THREE.MultiplyOperation;

      } else if ( parID === "vertexColors" ) {

        if ( matJSON.parameters[ parID ] == "face" ) {

          matJSON.parameters[ parID ] = THREE.FaceColors;

        // default to vertex colors if "vertexColors" is anything else face colors or 0 / null / false

        } else if ( matJSON.parameters[ parID ] )   {

          matJSON.parameters[ parID ] = THREE.VertexColors;

        }

      } else if ( parID === "wrapRGB" ) {

        var v3 = matJSON.parameters[ parID ];
        matJSON.parameters[ parID ] = new THREE.Vector3( v3[ 0 ], v3[ 1 ], v3[ 2 ] );

      }

    }

    if ( matJSON.parameters.opacity !== undefined && matJSON.parameters.opacity < 1.0 ) {

      matJSON.parameters.transparent = true;

    }

    if ( false && matJSON.parameters.normalMap ) {

      var shader = THREE.ShaderUtils.lib[ "normal" ];
      var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

      var diffuse = matJSON.parameters.color;
      var specular = matJSON.parameters.specular;
      // var ambient = matJSON.parameters.ambient;
      var shininess = matJSON.parameters.shininess;

      uniforms[ "tNormal" ].value = result.textures[ matJSON.parameters.normalMap ];

      if ( matJSON.parameters.normalScale ) {

        uniforms[ "uNormalScale" ].value.set( matJSON.parameters.normalScale[ 0 ], matJSON.parameters.normalScale[ 1 ] );

      }

      if ( matJSON.parameters.map ) {

        uniforms[ "tDiffuse" ].value = matJSON.parameters.map;
        uniforms[ "enableDiffuse" ].value = true;

      }

      if ( matJSON.parameters.envMap ) {

        uniforms[ "tCube" ].value = matJSON.parameters.envMap;
        uniforms[ "enableReflection" ].value = true;
        uniforms[ "uReflectivity" ].value = matJSON.parameters.reflectivity;

      }

      if ( matJSON.parameters.lightMap ) {

        uniforms[ "tAO" ].value = matJSON.parameters.lightMap;
        uniforms[ "enableAO" ].value = true;

      }

      if ( matJSON.parameters.specularMap ) {

        uniforms[ "tSpecular" ].value = result.textures[ matJSON.parameters.specularMap ];
        uniforms[ "enableSpecular" ].value = true;

      }

      if ( matJSON.parameters.displacementMap ) {

        uniforms[ "tDisplacement" ].value = result.textures[ matJSON.parameters.displacementMap ];
        uniforms[ "enableDisplacement" ].value = true;

        uniforms[ "uDisplacementBias" ].value = matJSON.parameters.displacementBias;
        uniforms[ "uDisplacementScale" ].value = matJSON.parameters.displacementScale;

      }

      uniforms[ "uDiffuseColor" ].value.setHex( diffuse );
      uniforms[ "uSpecularColor" ].value.setHex( specular );
      // uniforms[ "uAmbientColor" ].value.setHex( ambient );

      uniforms[ "uShininess" ].value = shininess;

      if ( matJSON.parameters.opacity ) {

        uniforms[ "uOpacity" ].value = matJSON.parameters.opacity;

      }

      var parameters = { fragmentShader: shader.fragmentShader, vertexShader: shader.vertexShader, uniforms: uniforms, lights: true, fog: true };

      material = new THREE.ShaderMaterial( parameters );

    } else {

      material = new THREE[ matJSON.type ]( matJSON.parameters );

    }

    result.materials[ matID ] = material;

  }

  // second pass through all materials to initialize MeshFaceMaterials
  // that could be referring to other materials out of order

  for ( matID in data.materials ) {

    matJSON = data.materials[ matID ];

    if ( matJSON.parameters.materials ) {

      var materialArray = [];

      for ( var i = 0; i < matJSON.parameters.materials.length; i ++ ) {

        var label = matJSON.parameters.materials[ i ];
        materialArray.push( result.materials[ label ] );

      }

      result.materials[ matID ].materials = materialArray;

    }

  }

  // objects ( synchronous init of procedural primitives )

  handle_objects();

  // defaults

  if ( result.cameras && data.defaults.camera ) {

    result.currentCamera = result.cameras[ data.defaults.camera ];

  }

  if ( result.fogs && data.defaults.fog ) {

    result.scene.fog = result.fogs[ data.defaults.fog ];

  }

  color = data.defaults.bgcolor;
  result.bgColor = new THREE.Color();
  result.bgColor.setRGB( color[0], color[1], color[2] );

  result.bgColorAlpha = data.defaults.bgalpha;

  // synchronous callback

  scope.callbackSync( result );

  // just in case there are no async elements

  async_callback_gate();

};