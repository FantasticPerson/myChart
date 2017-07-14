/**
 * Created by wdd on 2017/7/14.
 */
function canvasDrawing(id,recoverData){
    this.id=id;
    this.data=recoverData;

    var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");

    this.canvas = canvas;
    this.context = ctx;

    this.resizeCanvas();
    this.signaturePad = new SignaturePad(canvas);
    if(recoverData){
        signaturePad.fromData(recoverData);
    }
}

canvasDrawing.prototype = {
    draw:function(){

    },
    resizeCanvas:function(){
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
    }
};

