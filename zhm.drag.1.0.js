/**
 * Created by zhm on 17.1.9.
 */
var params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
};

//1.获取相关CSS属性(考虑兼容)
var getCss = function(obj,key){
//        return obj.currentStyle? obj.currentStyle[key] : document.defaultView.getComputedStyle(obj,false)[key];
    if(obj.currentStyle){
        return obj.currentStyle[key];
    }else{
        return document.defaultView.getComputedStyle(obj,false)[key];
    }
};

//拖拽的实现
var startDrag = function(bar, target, callback){

    if(getCss(target, "left") !== "auto"){
        params.left = getCss(target, "left");
    }
    if(getCss(target, "top") !== "auto"){
        params.top = getCss(target, "top");
    }

    //obj是移动对象
    bar.onmousedown = function(event){
        params.flag = true;
        if(!event){
            event = window.event;
            //防止IE文字选中
            bar.onselectstart = function(){
                return false;
            }
        }
        var e = event;
        params.currentX = e.clientX;
        params.currentY = e.clientY;
    };
    //鼠标左键按下
    document.onmouseup = function(){
        params.flag = false;
        if(getCss(target, "left") !== "auto"){
            params.left = getCss(target, "left");
        }
        if(getCss(target, "top") !== "auto"){
            params.top = getCss(target, "top");
        }
    };
    //鼠标左键按下，并拖动
    document.onmousemove = function(event){
        var e = event ? event: window.event;
        if(params.flag){
            var nowX = e.clientX;
            var nowY = e.clientY;
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            target.style.left = parseInt(params.left) + disX + "px";
            target.style.top = parseInt(params.top) + disY + "px";
        }

        if (typeof callback == "function") {
            callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
        }
    }

}