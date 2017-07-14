/**
 * Created by wdd on 2017/7/11.
 */
function drawCircle(id,option){
    this.id = id;
    this.option = option;
}
drawCircle.prototype = {
    draw:function(){
        var bgColor = this.option.bgColor;
        var foreColor = this.option.foreColor;
        var percent = this.option.percent;
        var showPercent = this.option.showPercent;
        var canvas = document.getElementById(this.id);
        var width = canvas.width < canvas.height ? canvas.width : canvas.height;
        var context = canvas.getContext('2d');
        var scale = width/160;
        var r = 72*scale;
        var arcWidth = 16*scale;
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        var arcLength = Math.PI/3*5;
        var startAngle = Math.PI/3*2;
        var angleLength = percent/100 * arcLength;

        var cTime = 0;
        var showTimes = angleLength/0.1;
        var gap = percent/showTimes;

        window.requestAnimationFrame(drawAnimation);

        function drawAnimation(){
            context.clearRect(0,0,canvas.width,canvas.height);

            var tempLength = 0.1 *cTime < angleLength ? 0.1 *cTime : angleLength;
            var tempPercent = Math.ceil(cTime * gap);
            tempPercent = tempPercent <percent?tempPercent:percent;
            cTime++;

            context.lineWidth=arcWidth;
            context.beginPath();
            context.strokeStyle=bgColor;
            context.arc(centerX,centerY,r,startAngle,startAngle+arcLength);
            context.stroke();

            context.lineWidth=arcWidth;
            context.beginPath();
            context.strokeStyle=foreColor;
            context.arc(centerX,centerY,r,startAngle,startAngle+tempLength);
            context.stroke();

            context.save();
            context.fillStyle = "#FFF";
            context.font = 40*scale+"px serif";
            context.textBaseline = "middle";
            context.textAlign = 'center';
            context.fillText(tempPercent+ (showPercent?'%':''), centerX , centerY);
            context.restore();

            if(tempLength < angleLength){
                window.requestAnimationFrame(drawAnimation);
            }
        }
    }
};

function drawCircle2(id,option){
    this.id= id;
    this.option = option;
}

drawCircle2.prototype={
    draw:function(){
        var bgColor = this.option.bgColor;
        var foreColor = this.option.foreColor;
        var percent = this.option.percent;
        var showPercent = this.option.showPercent;
        var canvas = document.getElementById(this.id);
        var width = canvas.width < canvas.height ? canvas.width : canvas.height;
        var context = canvas.getContext('2d');
        var scale = width/136;
        var r1 = 60*scale;
        var r2 = 60*scale;
        var arcWidth1 = 16*scale;
        var arcWidth2 = 8*scale;
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        var arcLength = Math.PI*2;
        var startAngle = -Math.PI/2;
        var angleLength = percent/100 * arcLength;
        var cTime = 0;

        var showTimes = angleLength/0.1;
        var gap = percent/showTimes;

        window.requestAnimationFrame(drawAnimation);

        function drawAnimation(){
            context.clearRect(0,0,canvas.width,canvas.height);
            var tempLength = 0.1 * cTime < angleLength ? 0.1 * cTime : angleLength;
            var tempPercent = Math.ceil(gap * cTime);

            tempPercent = tempPercent < percent ? tempPercent : percent;

            cTime++;
            context.lineWidth=arcWidth2;
            context.beginPath();
            context.strokeStyle=bgColor;
            context.arc(centerX,centerY,r2,startAngle,startAngle+arcLength);
            context.stroke();

            context.lineWidth=arcWidth1;
            context.beginPath();
            context.strokeStyle=foreColor;
            context.arc(centerX,centerY,r1,startAngle,startAngle+tempLength);
            context.stroke();

            context.save();
            context.fillStyle = "#FFF";
            context.font = 40*scale+"px serif";
            context.textBaseline = "middle";
            context.textAlign = 'center';
            context.fillText(tempPercent+ (showPercent?'%':''), centerX , centerY);
            context.restore();

            if(tempLength < angleLength){
                window.requestAnimationFrame(drawAnimation);
            }
        }
    }
};

function progressBar(id,option){
    this.id= id;
    this.option = option;
}

progressBar.prototype = {
    draw:function(){
        var bgColor = this.option.bgColor;
        var foreColor = this.option.foreColor;
        var percent = this.option.percent;
        var showPercent = this.option.showPercent;
        var canvas = document.getElementById(this.id);
        var context = canvas.getContext('2d');
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        var width,height;
        if(canvasWidth /7 > canvasHeight){
            width = canvasHeight * 7;
            height = canvasHeight;
        } else {
            width = canvasWidth;
            height = canvasWidth/7;
        }
        var scale = width /160;
        var centerX = canvasWidth/2;
        var centerY = canvasHeight/2;

        var startX = centerX - width/2;
        var startY = centerY - height/2;
        var percentLength = percent/100 * width;
        var cTime = 0;
        var drawTimes = percentLength/2.5;
        var gap = percent/drawTimes;

        window.requestAnimationFrame(drawAnimation);

        function drawAnimation(){
            var tempLength = 2.5*cTime < percentLength ? 2.5 * cTime : percentLength;
            var tempPercent = Math.ceil(gap*cTime);
            tempPercent = tempPercent < percent ? tempPercent : percent;
            cTime++;
            context.clearRect(0,0,canvas.width,canvas.height);
            context.beginPath();
            context.fillStyle = bgColor;
            context.moveTo(startX,startY);
            context.lineTo(startX+width,startY);
            context.lineTo(startX+width,startY+height);
            context.lineTo(startX,startY+height);
            context.lineTo(startX,startY);
            context.fill();
            context.closePath();

            context.beginPath();
            context.fillStyle = foreColor;
            context.moveTo(startX,startY);
            context.lineTo(startX+tempLength,startY);
            context.lineTo(startX+tempLength,startY+height);
            context.lineTo(startX,startY+height);
            context.lineTo(startX,startY);
            context.fill();
            context.closePath();

            context.save();
            context.fillStyle = "#FFF";
            context.font = 20*scale+"px serif";
            context.textBaseline = "middle";
            context.textAlign = 'center';
            context.fillText(tempPercent+ (showPercent?'%':''), centerX , centerY);
            context.restore();

            if(tempLength < percentLength){
                window.requestAnimationFrame(drawAnimation);
            }
        }
    }
};

function drawDoubleCircle(id,option){
    this.id = id;
    this.option = option;
}

drawDoubleCircle.prototype = {
    draw:function(){
        var bgColor = this.option.bgColor;
        var foreColor1 = this.option.foreColor1;
        var foreColor2 = this.option.foreColor2;
        var title1 = this.option.title1;
        var title2 = this.option.title2;
        var percent1 = this.option.percent1;
        var percent2 = this.option.percent2;
        var canvas = document.getElementById(this.id);
        var context = canvas.getContext('2d');
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;

        var width = canvasWidth < canvasHeight ? canvasWidth : canvasHeight;
        var scale = width / 180;
        var r1 = 85*scale;
        var r2 = 60 *scale;
        var lineWidth = 10 * scale;

        var centerX = canvasWidth/2;
        var centerY = canvasWidth/2;

        var cTime = 0;


        window.requestAnimationFrame(drawAnimation);
        function drawAnimation(){
            var tempLength1 = 0.1 * cTime < Math.PI*2*percent1/100 ? 0.1 * cTime : Math.PI*2*percent1/100;
            var tempLength2 = 0.1 *cTime < Math.PI*2*percent2/100 ? 0.1 *cTime : Math.PI*2*percent2/100;
            cTime++;
            context.lineWidth=lineWidth;
            context.beginPath();
            context.strokeStyle=bgColor;
            context.arc(centerX,centerY,r1,0,Math.PI*2);
            context.stroke();

            context.lineWidth=lineWidth;
            context.beginPath();
            context.strokeStyle=foreColor1;
            context.arc(centerX,centerY,r1,Math.PI*1.5-tempLength1,Math.PI*1.5);
            context.stroke();

            context.lineWidth=lineWidth;
            context.beginPath();
            context.strokeStyle=bgColor;
            context.arc(centerX,centerY,r2,0,Math.PI*2);
            context.stroke();

            context.lineWidth=lineWidth;
            context.beginPath();
            context.strokeStyle=foreColor2;
            context.arc(centerX,centerY,r2,-Math.PI/2,-Math.PI/2+tempLength2);
            context.stroke();

            if(tempLength1 < Math.PI*2*percent1/100 ||　tempLength2 < Math.PI*2*percent2/100){
                window.requestAnimationFrame(drawAnimation);
            }
        }
    }
};