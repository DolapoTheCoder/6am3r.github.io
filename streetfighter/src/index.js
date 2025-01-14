import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { Stage } from "./entities/Stage.js";
import { FpsCounter } from "./entities/FpsCounter.js";

const GameViewport = {
    width: 384,
    height: 224,
};

window.addEventListener('load', function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');
    canvasEl.width = GameViewport.width;
    canvasEl.height = GameViewport.height;

    const entities = [
        new Stage(),
        new Ken(80, 110, 150),
        new Ryu(80, 110, -150),
        new FpsCounter(),
];
    let frameTime = {
    previous: 0,
    secondsPassed: 0,
    }
    function frame(time){
        window.requestAnimationFrame(frame);

        frameTime = {
        secondsPassed: (time - frameTime.previous) / 1000,
        previousTime: time,
        }

        for (const entity of entities) {
            entity.update(frameTime, context);
        }

        for (const entity of entities) {
            entity.draw(context);
        }

    
}
window.requestAnimationFrame(frame);
}
)