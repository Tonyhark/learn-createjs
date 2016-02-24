/**
 * Created by ZhaoYue on 2016/2/25.
 */
var canvas,
    stage,
    text,
    rect,
    count = 0;

canvas = document.querySelector('#gameView');
stage = new createjs.Stage(canvas);

text = new createjs.Text('text on the canvas...0!', '36px Arial', '#fff');
text.x = 0;
text.y = 0;
text.rotation = 5;
stage.addChild(text);

rect = new createjs.Shape();
rect.x = text.x;
rect.y = text.y;


stage.addChildAt(rect, 0);

createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener('tick', handleTick);

function handleTick (e) {
    count++;
    text.text = 'text on the canvas...' + count + '!';
    text.rotation +=5;
    rect.rotation = text.rotation;
    rect.graphics.clear().beginFill('#f00').drawRect(-10,-10,text.getMeasuredWidth()+20, text.getMeasuredLineHeight()+20);
    stage.update(e);
}