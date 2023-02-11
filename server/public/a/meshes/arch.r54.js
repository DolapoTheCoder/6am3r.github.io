{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "arch.blend",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 1,
	"geometries"    : 1,
	"materials"     : 1,
	"textures"      : 1
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Torus.001" : {
		"geometry"  : "geo_Torus.001",
		"groups"    : [  ],
		"material"  : "archmat",
		"position"  : [ 0, 0, 0.306361 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 3, 3, 3 ],
		"visible"       : true,
		"castShadow"    : true,
		"receiveShadow" : true,
		"doubleSided"   : false
	}
},


"geometries" :
{
	"geo_Torus.001" : {
		"type" : "embedded",
		"id"  : "emb_Torus.001"
	}
},


"textures" :
{
	"archtex.jpg" : {
		"url": "../../textures/archtex.jpg",
        "wrap": ["repeat", "repeat"]
	}
},


"materials" :
{
	"archmat" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "opacity": 1, "map": "archtex.jpg", "blending": "NormalBlending" }
	}
},


"embeds" :
{
"emb_Torus.001": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "archmat",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"mapDiffuse" : "archtex.jpg",
		"mapDiffuseWrap" : ["repeat", "repeat"],
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [3.61109,0,0.239966,3.37142,0.497677,0.239966,2.83289,0.620593,0.239966,2.40102,0.27619,0.239966,2.40102,-0.27619,0.239966,2.83289,-0.620593,0.239966,3.37142,-0.497677,0.239966,3.59255,8.55146e-08,-1.41471,3.35411,0.520602,-1.41396,2.81835,0.64918,-1.41227,2.3887,0.288912,-1.41091,2.3887,-0.288912,-1.41091,2.81835,-0.64918,-1.41227,3.35411,-0.520602,-1.41396,-3.59255,8.55147e-08,-1.41471,-3.35411,0.520602,-1.41396,-2.81835,0.64918,-1.41227,-2.3887,0.288912,-1.41091,-2.3887,-0.288912,-1.41091,-2.81835,-0.64918,-1.41227,-3.35411,-0.520602,-1.41396,-3.61109,2.30926e-14,0.239966,-3.37142,0.497677,0.239966,-2.83289,0.620593,0.239966,-2.40102,0.27619,0.239966,-2.40102,-0.27619,0.239966,-2.83289,-0.620593,0.239966,-3.37142,-0.497677,0.239966,-3.43435,-8.42472e-08,1.35585,-3.20641,0.497677,1.28179,-2.69424,0.620593,1.11538,-2.28351,0.27619,0.981923,-2.28351,-0.27619,0.981923,-2.69424,-0.620593,1.11538,-3.20641,-0.497677,1.28179,-2.92144,-1.60248e-07,2.36251,-2.72754,0.497677,2.22164,-2.29186,0.620593,1.9051,-1.94247,0.27619,1.65125,-1.94247,-0.27619,1.65125,-2.29186,-0.620593,1.9051,-2.72754,-0.497677,2.22164,-2.12255,-2.20562e-07,3.1614,-1.98167,0.497677,2.9675,-1.66513,0.620593,2.53182,-1.41129,0.27619,2.18244,-1.41129,-0.27619,2.18244,-1.66513,-0.620593,2.53182,-1.98167,-0.497677,2.9675,-1.34657,-2.72267e-07,3.62415,-1.2572,0.600558,3.31985,-1.05638,0.748884,2.45398,-0.895337,0.333285,2.08775,-0.895337,-0.333285,2.08775,-1.05638,-0.748884,2.45398,-1.2572,-0.600559,3.31985,6.09555e-07,-2.88369e-07,3.70184,1.8166e-07,0.600558,3.38187,2.88633e-07,0.748884,2.48082,1.8166e-07,0.333285,2.08636,1.8166e-07,-0.333285,2.08636,2.88633e-07,-0.748884,2.48082,1.8166e-07,-0.600559,3.38187,1.34657,-2.72267e-07,3.62415,1.2572,0.600558,3.31985,1.05638,0.748884,2.45398,0.895337,0.333285,2.08775,0.895337,-0.333285,2.08775,1.05638,-0.748884,2.45398,1.2572,-0.600559,3.31985,2.12254,-2.20562e-07,3.1614,1.98167,0.497677,2.96751,1.66513,0.620593,2.53183,1.41129,0.27619,2.18244,1.41129,-0.27619,2.18244,1.66513,-0.620593,2.53183,1.98167,-0.497677,2.96751,2.92143,-1.60248e-07,2.36251,2.72754,0.497677,2.22164,2.29186,0.620593,1.9051,1.94247,0.27619,1.65125,1.94247,-0.27619,1.65125,2.29186,-0.620593,1.9051,2.72754,-0.497677,2.22164,3.43435,-8.42473e-08,1.35586,3.20641,0.497677,1.28179,2.69424,0.620593,1.11538,2.28351,0.27619,0.981925,2.28351,-0.27619,0.981925,2.69424,-0.620593,1.11538,3.20641,-0.497677,1.28179,1.66513,0.620593,2.53183,1.66513,0.620593,2.53183,1.66513,0.620593,2.53183,1.41129,0.27619,2.18244,1.41129,0.27619,2.18244,1.41129,0.27619,2.18244,2.12254,-2.20562e-07,3.1614,2.12254,-2.20562e-07,3.1614,2.12254,-2.20562e-07,3.1614,1.98167,0.497677,2.96751,1.98167,0.497677,2.96751,1.98167,0.497677,2.96751,-1.66513,-0.620593,2.53182,-1.66513,-0.620593,2.53182,-1.66513,-0.620593,2.53182,-1.98167,-0.497677,2.9675,-1.98167,-0.497677,2.9675,-1.98167,-0.497677,2.9675,-1.94247,-0.27619,1.65125,-1.94247,-0.27619,1.65125,-1.94247,-0.27619,1.65125,-2.29186,-0.620593,1.9051,-2.29186,-0.620593,1.9051,-2.29186,-0.620593,1.9051,1.2572,0.600558,3.31985,1.2572,0.600558,3.31985,-2.92144,-1.60248e-07,2.36251,-2.92144,-1.60248e-07,2.36251,-2.92144,-1.60248e-07,2.36251,-2.72754,-0.497677,2.22164,-2.72754,-0.497677,2.22164,-2.72754,-0.497677,2.22164,2.40102,-0.27619,0.239966,2.40102,-0.27619,0.239966,2.40102,-0.27619,0.239966,2.83289,-0.620593,0.239966,2.83289,-0.620593,0.239966,2.83289,-0.620593,0.239966,-3.61109,2.30926e-14,0.239966,-3.61109,2.30926e-14,0.239966,-3.61109,2.30926e-14,0.239966,-3.37142,-0.497677,0.239966,-3.37142,-0.497677,0.239966,-3.37142,-0.497677,0.239966,2.40102,0.27619,0.239966,2.40102,0.27619,0.239966,2.40102,0.27619,0.239966,1.41129,-0.27619,2.18244,1.41129,-0.27619,2.18244,1.41129,-0.27619,2.18244,1.66513,-0.620593,2.53183,1.66513,-0.620593,2.53183,1.66513,-0.620593,2.53183,1.05638,0.748884,2.45398,1.05638,0.748884,2.45398,0.895337,0.333285,2.08775,0.895337,0.333285,2.08775,0.895337,0.333285,2.08775,2.29186,-0.620593,1.9051,2.29186,-0.620593,1.9051,2.29186,-0.620593,1.9051,-3.37142,0.497677,0.239966,-3.37142,0.497677,0.239966,-3.37142,0.497677,0.239966,-3.20641,0.497677,1.28179,-3.20641,0.497677,1.28179,-3.20641,0.497677,1.28179,-3.43435,-8.42472e-08,1.35585,-3.43435,-8.42472e-08,1.35585,-3.43435,-8.42472e-08,1.35585,-3.20641,-0.497677,1.28179,-3.20641,-0.497677,1.28179,-3.20641,-0.497677,1.28179,0.895337,-0.333285,2.08775,0.895337,-0.333285,2.08775,0.895337,-0.333285,2.08775,-2.28351,0.27619,0.981923,-2.28351,0.27619,0.981923,-2.28351,0.27619,0.981923,-1.94247,0.27619,1.65125,-1.94247,0.27619,1.65125,-1.94247,0.27619,1.65125,-2.69424,-0.620593,1.11538,-2.69424,-0.620593,1.11538,-2.69424,-0.620593,1.11538,2.83289,0.620593,0.239966,2.83289,0.620593,0.239966,2.83289,0.620593,0.239966,2.69424,-0.620593,1.11538,2.69424,-0.620593,1.11538,2.69424,-0.620593,1.11538,2.28351,0.27619,0.981925,2.28351,0.27619,0.981925,2.28351,0.27619,0.981925,2.28351,-0.27619,0.981925,2.28351,-0.27619,0.981925,2.28351,-0.27619,0.981925,2.92143,-1.60248e-07,2.36251,2.92143,-1.60248e-07,2.36251,2.92143,-1.60248e-07,2.36251,3.43435,-8.42473e-08,1.35586,3.43435,-8.42473e-08,1.35586,3.43435,-8.42473e-08,1.35586,1.34657,-2.72267e-07,3.62415,1.34657,-2.72267e-07,3.62415,1.34657,-2.72267e-07,3.62415,6.09555e-07,-2.88369e-07,3.70184,6.09555e-07,-2.88369e-07,3.70184,6.09555e-07,-2.88369e-07,3.70184,1.8166e-07,0.600558,3.38187,1.8166e-07,0.600558,3.38187,-1.41129,-0.27619,2.18244,-1.41129,-0.27619,2.18244,-1.41129,-0.27619,2.18244,-0.895337,-0.333285,2.08775,-0.895337,-0.333285,2.08775,-0.895337,-0.333285,2.08775,-2.69424,0.620593,1.11538,-2.69424,0.620593,1.11538,-2.69424,0.620593,1.11538,-2.28351,-0.27619,0.981923,-2.28351,-0.27619,0.981923,-2.28351,-0.27619,0.981923,1.98167,-0.497677,2.96751,1.98167,-0.497677,2.96751,1.98167,-0.497677,2.96751,3.37142,0.497677,0.239966,3.37142,0.497677,0.239966,3.37142,0.497677,0.239966,-1.2572,-0.600559,3.31985,-1.2572,-0.600559,3.31985,1.8166e-07,-0.600559,3.38187,1.8166e-07,-0.600559,3.38187,3.20641,0.497677,1.28179,3.20641,0.497677,1.28179,3.20641,0.497677,1.28179,2.69424,0.620593,1.11538,2.69424,0.620593,1.11538,2.69424,0.620593,1.11538,1.8166e-07,-0.333285,2.08636,1.8166e-07,-0.333285,2.08636,1.8166e-07,-0.333285,2.08636,2.88633e-07,-0.748884,2.48082,2.88633e-07,-0.748884,2.48082,1.8166e-07,0.333285,2.08636,1.8166e-07,0.333285,2.08636,1.8166e-07,0.333285,2.08636,-2.12255,-2.20562e-07,3.1614,-2.12255,-2.20562e-07,3.1614,-2.12255,-2.20562e-07,3.1614,3.61109,0,0.239966,3.61109,0,0.239966,3.61109,0,0.239966,-2.72754,0.497677,2.22164,-2.72754,0.497677,2.22164,-2.72754,0.497677,2.22164,-2.40102,0.27619,0.239966,-2.40102,0.27619,0.239966,-2.40102,0.27619,0.239966,-3.35411,-0.520602,-1.41396,1.05638,-0.748884,2.45398,1.05638,-0.748884,2.45398,1.2572,-0.600559,3.31985,1.2572,-0.600559,3.31985,-2.83289,0.620593,0.239966,-2.83289,0.620593,0.239966,-2.83289,0.620593,0.239966,2.72754,-0.497677,2.22164,2.72754,-0.497677,2.22164,2.72754,-0.497677,2.22164,-0.895337,0.333285,2.08775,-0.895337,0.333285,2.08775,-0.895337,0.333285,2.08775,-1.98167,0.497677,2.9675,-1.98167,0.497677,2.9675,-1.98167,0.497677,2.9675,-1.66513,0.620593,2.53182,-1.66513,0.620593,2.53182,-1.66513,0.620593,2.53182,-1.05638,0.748884,2.45398,-1.05638,0.748884,2.45398,-1.41129,0.27619,2.18244,-1.41129,0.27619,2.18244,-1.41129,0.27619,2.18244,3.20641,-0.497677,1.28179,3.20641,-0.497677,1.28179,3.20641,-0.497677,1.28179,2.72754,0.497677,2.22164,2.72754,0.497677,2.22164,2.72754,0.497677,2.22164,2.88633e-07,0.748884,2.48082,2.88633e-07,0.748884,2.48082,-1.2572,0.600558,3.31985,-1.2572,0.600558,3.31985,2.81835,-0.64918,-1.41227,2.29186,0.620593,1.9051,2.29186,0.620593,1.9051,2.29186,0.620593,1.9051,-2.3887,-0.288912,-1.41091,-2.40102,-0.27619,0.239966,-2.40102,-0.27619,0.239966,-2.40102,-0.27619,0.239966,-2.29186,0.620593,1.9051,-2.29186,0.620593,1.9051,-2.29186,0.620593,1.9051,3.37142,-0.497677,0.239966,3.37142,-0.497677,0.239966,3.37142,-0.497677,0.239966,-2.81835,-0.64918,-1.41227,-2.83289,-0.620593,0.239966,-2.83289,-0.620593,0.239966,-2.83289,-0.620593,0.239966,2.3887,0.288912,-1.41091,2.3887,-0.288912,-1.41091,1.94247,-0.27619,1.65125,1.94247,-0.27619,1.65125,1.94247,-0.27619,1.65125,1.94247,0.27619,1.65125,1.94247,0.27619,1.65125,1.94247,0.27619,1.65125,-2.3887,0.288912,-1.41091,-1.05638,-0.748884,2.45398,-1.05638,-0.748884,2.45398,-1.34657,-2.72267e-07,3.62415,-1.34657,-2.72267e-07,3.62415,-1.34657,-2.72267e-07,3.62415,2.81835,0.64918,-1.41227,-3.35411,0.520602,-1.41396,3.59255,8.55146e-08,-1.41471,-2.81835,0.64918,-1.41227,-3.59255,8.55147e-08,-1.41471,3.35411,0.520602,-1.41396,3.35411,-0.520602,-1.41396],

	"morphTargets" : [],

	"normals" : [0.905148,0.425001,-0.006836,0.227912,0.973571,0.01297,-0.633015,0.773949,0.014801,-0.999969,0,0.007447,-0.633015,-0.773949,0.014801,0.227912,-0.973571,0.01297,0.905148,-0.425001,-0.006836,-0.905148,0.425001,-0.006836,-0.227912,0.973571,0.01297,0.633015,0.773949,0.014801,0.999969,0,0.007447,0.633015,-0.773949,0.014801,-0.227912,-0.973571,0.01297,-0.905148,-0.425001,-0.006836,-0.891903,0.429518,0.14124,-0.222358,0.974303,0.035218,0.620472,0.778039,-0.09827,0.987671,0,-0.156407,0.620472,-0.778039,-0.09827,-0.222358,-0.974303,0.035218,-0.891903,-0.429518,0.14124,-0.804621,0.429518,0.409955,-0.200598,0.974303,0.102206,0.559709,0.778039,-0.285195,0.890988,0,-0.453963,0.559709,-0.778039,-0.285195,-0.200598,-0.974303,0.102206,-0.804621,-0.429518,0.409955,-0.638539,0.429518,0.638539,-0.159185,0.974303,0.159185,0.444197,0.778039,-0.444197,0.707083,0,-0.707083,0.444197,-0.778039,-0.444197,-0.159185,-0.974303,0.159185,-0.638539,-0.429518,0.638539,-0.450758,0.445418,0.773553,-0.194494,0.972839,0.125401,-0.100101,0.984191,0.14597,-0.08243,0.98529,0.149663,-0.21717,0.603687,-0.767052,-0.180486,0,-0.983551,-0.21717,-0.603687,-0.767052,-0.194494,-0.972839,0.125401,-0.08243,-0.98529,0.149663,-0.100101,-0.984191,0.14597,-0.450758,-0.445418,0.773553,-0.047456,0.463424,0.884854,0,0.986297,0.164861,0.009583,0.676107,-0.736717,-0.001526,0,-0.999969,0.009583,-0.676107,-0.736717,0,-0.986297,0.164861,-0.047456,-0.463424,0.884854,0.047456,0.463424,0.884854,0.100101,0.984191,0.14597,0.08243,0.98529,0.149663,-0.009583,0.676107,-0.736717,0.001526,0,-0.999969,-0.009583,-0.676107,-0.736717,0.08243,-0.98529,0.149663,0.100101,-0.984191,0.14597,0.047456,-0.463424,0.884854,0.450758,0.445418,0.773553,0.194494,0.972839,0.125401,0.21717,0.603687,-0.767052,0.180486,0,-0.983551,0.21717,-0.603687,-0.767052,0.194494,-0.972839,0.125401,0.450758,-0.445418,0.773553,0.638539,0.429518,0.638539,0.159185,0.974303,0.159185,-0.444197,0.778039,-0.444197,-0.707083,0,-0.707083,-0.444197,-0.778039,-0.444197,0.159185,-0.974303,0.159185,0.638539,-0.429518,0.638539,0.804621,0.429518,0.409955,0.200598,0.974303,0.102206,-0.559709,0.778039,-0.285195,-0.890988,0,-0.453963,-0.559709,-0.778039,-0.285195,0.200598,-0.974303,0.102206,0.804621,-0.429518,0.409955,0.891903,0.429518,0.14124,0.222358,0.974303,0.035218,-0.620472,0.778039,-0.09827,-0.987671,0,-0.156407,-0.620472,-0.778039,-0.09827,0.222358,-0.974303,0.035218,0.891903,-0.429518,0.14124],

	"colors" : [],

	"uvs" : [[0.093662,0.719684,0.029422,0.587105,0.075215,0.564732,0.136996,0.697284,0.119511,0.543626,0.181485,0.677216,0.164955,0.522863,0.226328,0.656562,0.82764,0.046373,0.974063,0.045244,0.974063,0.096492,0.827641,0.095364,0.773137,0.281936,0.834205,0.148125,0.879687,0.168785,0.818013,0.302483,0.924022,0.189792,0.862537,0.322455,0.905913,0.344762,0.969857,0.212062,0.970302,0.587073,0.9061,0.719569,0.862762,0.6972,0.924538,0.564713,0.81832,0.677064,0.880275,0.543613,0.773537,0.656456,0.834867,0.522864,0.029589,0.045242,0.176014,0.04637,0.176014,0.095363,0.029589,0.096491,0.166136,0.148125,0.227087,0.28195,0.182224,0.302426,0.120649,0.168746,0.137708,0.322424,0.076308,0.18972,0.0943,0.344684,0.030462,0.211955,0.85213,0.804532,0.814426,0.774409,0.776679,0.744419,0.738081,0.713505,0.24264,0.046371,0.24264,0.095363,0.262378,0.339136,0.223665,0.36995,0.185795,0.399853,0.148016,0.429941,0.781092,0.876231,0.750369,0.838442,0.719938,0.8004,0.689787,0.760581,0.309267,0.046371,0.309267,0.095363,0.31056,0.386373,0.280275,0.426114,0.249741,0.464089,0.218932,0.501823,0.695999,0.932305,0.672458,0.888716,0.648737,0.843187,0.630724,0.794258,0.375894,0.046371,0.375894,0.095363,0.369155,0.420106,0.351265,0.469066,0.327521,0.514519,0.303934,0.558075,0.621694,0.967297,0.607334,0.91042,0.5924,0.835765,0.582562,0.786004,0.422419,0.041307,0.422419,0.100427,0.417355,0.411818,0.407546,0.461596,0.392625,0.53624,0.378254,0.593113,0.499939,0.977359,0.49993,0.915957,0.499923,0.835138,0.499919,0.782227,0.501829,0.041308,0.501828,0.100427,0.50001,0.408036,0.500013,0.460947,0.500017,0.54176,0.500019,0.603159,0.378155,0.967342,0.392513,0.91045,0.407452,0.835791,0.417245,0.785997,0.581238,0.041308,0.581238,0.100427,0.58267,0.411806,0.592485,0.461587,0.607411,0.536235,0.621785,0.593111,0.303812,0.932335,0.327292,0.888717,0.351222,0.843272,0.369008,0.794308,0.627763,0.046372,0.627763,0.095364,0.630877,0.420088,0.648772,0.469055,0.67252,0.514511,0.696108,0.558073,0.218768,0.876474,0.24945,0.838716,0.280059,0.800687,0.310235,0.7608,0.694389,0.046373,0.694389,0.095364,0.689483,0.386345,0.719769,0.426099,0.750313,0.464074,0.781124,0.501817,0.147697,0.804742,0.185406,0.774531,0.22328,0.744623,0.261905,0.713661,0.761015,0.046373,0.761015,0.095364,0.737696,0.3391,0.77637,0.369966,0.814287,0.399795,0.852059,0.429931]],

	"faces" : [43,0,7,322,217,0,0,1,2,3,0,0,0,0,43,1,8,9,176,0,3,2,4,5,1,1,1,1,43,2,317,10,135,0,5,4,6,7,2,2,2,2,43,3,303,11,123,0,8,9,10,11,3,3,3,3,43,4,304,12,5,0,12,13,14,15,4,4,4,4,43,127,285,13,297,0,15,14,16,17,5,5,5,5,43,241,6,323,319,0,18,17,16,19,6,6,6,6,43,14,129,152,15,0,20,21,22,23,7,7,7,7,43,318,153,256,320,0,23,22,24,25,8,8,8,8,43,16,23,247,311,0,25,24,26,27,9,9,9,9,43,17,248,25,18,0,28,29,30,31,10,10,10,10,43,289,290,26,19,0,32,33,34,35,11,11,11,11,43,299,300,133,20,0,35,34,36,37,12,12,12,12,43,250,27,21,321,0,37,36,38,39,13,13,13,13,43,130,159,29,22,0,21,40,41,22,14,14,14,14,43,154,156,209,255,0,22,41,42,24,15,15,15,15,43,257,30,167,24,0,24,42,43,26,16,16,16,16,43,249,168,212,291,0,29,44,45,30,17,17,17,17,43,292,32,173,301,0,33,46,47,34,18,18,18,18,43,302,174,34,132,0,34,47,48,36,19,19,19,19,43,134,162,158,131,0,36,48,49,38,20,20,20,20,43,28,117,36,155,0,40,50,51,41,21,21,21,21,43,157,245,293,208,0,41,51,52,42,22,22,22,22,43,210,294,38,31,0,42,52,53,43,23,23,23,23,43,169,170,109,211,0,44,54,55,45,24,24,24,24,43,213,39,40,33,0,46,56,57,47,25,25,25,25,43,175,113,120,161,0,47,57,58,48,26,26,26,26,43,163,41,35,160,0,48,58,59,49,27,27,27,27,43,118,42,264,244,0,50,60,61,51,28,28,28,28,43,246,43,44,37,0,51,61,62,52,29,29,29,29,43,295,268,45,171,0,52,62,63,53,30,30,30,30,43,172,272,202,110,0,54,64,65,55,31,31,31,31,43,111,203,103,112,0,56,66,67,57,32,32,32,32,43,114,47,48,121,0,57,67,68,58,33,33,33,33,43,122,106,238,119,0,58,68,69,59,34,34,34,34,43,239,314,283,265,0,60,70,71,61,35,35,35,35,43,266,284,51,267,0,61,71,72,62,36,37,38,36,43,269,270,261,273,0,62,72,73,63,39,39,39,39,43,274,52,53,46,0,64,74,75,65,40,40,40,40,43,204,206,312,104,0,66,76,77,67,41,41,41,41,43,105,54,55,107,0,67,77,78,68,42,43,44,42,43,108,220,315,240,0,68,78,79,69,45,45,45,45,43,49,56,57,50,0,70,80,81,71,46,46,46,46,43,284,200,58,51,0,71,81,82,72,37,47,47,38,43,271,281,235,262,0,72,82,83,73,48,48,48,48,43,263,59,230,205,0,74,84,85,75,49,49,49,49,43,207,60,233,313,0,76,86,87,77,50,50,50,50,43,54,61,62,55,0,77,87,88,78,43,51,51,44,43,221,222,198,316,0,78,88,89,79,52,52,52,52,43,197,63,115,201,0,80,90,91,81,53,53,53,53,43,200,116,144,58,0,81,91,92,82,47,54,55,47,43,282,65,66,236,0,82,92,93,83,56,56,56,56,43,237,147,165,231,0,84,94,95,85,57,57,57,57,43,232,164,251,234,0,86,96,97,87,58,58,58,58,43,61,252,253,62,0,87,97,98,88,51,59,60,51,43,223,69,194,199,0,88,98,99,89,61,61,61,61,43,195,70,71,64,0,90,100,101,91,62,62,62,62,43,116,100,91,144,0,91,101,102,92,54,63,63,55,43,145,72,73,146,0,92,102,103,93,64,64,64,64,43,148,94,138,67,0,94,104,105,95,65,65,65,65,43,166,74,75,68,0,96,106,107,97,66,66,66,66,43,252,142,76,253,0,97,107,108,98,59,67,67,60,43,254,215,98,196,0,98,108,109,99,68,68,68,68,43,97,189,78,101,0,100,110,111,101,69,69,69,69,43,102,278,79,92,0,101,111,112,102,70,70,70,70,43,93,287,308,95,0,102,112,113,103,71,71,71,71,43,96,309,305,139,0,104,114,115,105,72,72,72,72,43,140,306,82,141,0,106,116,117,107,73,73,73,73,43,143,150,259,214,0,107,117,118,108,74,74,74,74,43,216,83,188,99,0,108,118,119,109,75,75,75,75,43,77,84,225,279,0,110,120,121,111,76,76,76,76,43,280,85,86,286,0,111,121,122,112,77,77,77,77,43,288,228,183,80,0,112,122,123,113,78,78,78,78,43,310,87,88,81,0,114,124,125,115,79,79,79,79,43,307,186,179,149,0,116,126,127,117,80,80,80,80,43,151,180,90,258,0,117,127,128,118,81,81,81,81,43,260,276,192,190,0,118,128,129,119,82,82,82,82,43,191,242,218,224,0,120,0,3,121,83,83,83,83,43,226,219,177,227,0,121,3,5,122,84,84,84,84,43,229,178,136,182,0,122,5,7,123,85,85,85,85,43,184,137,124,185,0,124,8,11,125,86,86,86,86,43,187,125,126,89,0,126,12,15,127,87,87,87,87,43,181,128,296,275,0,127,15,17,128,88,88,88,88,43,277,298,243,193,0,128,17,18,129,89,89,89,89],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animation" : {}
}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ 0, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : ""
}

}
