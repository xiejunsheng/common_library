//事件监听器
var EventUtil = {
    //加载完成后
    readyEvent:function (fn){
        if(fn == null){
            fn = document;
        }
        var  oldonload = window.onload;
        if(typeof window.onload == "function"){
            window.onload = fn;
        }else{
            window.oldload = function (){
                fn();
                oldload();
            };
        }
    },
    //绑定事件
    //参数:操作的元素，事件名称，事件处理的程序
    //addEventListener:true:捕获阶段,   false:冒泡阶段
    //attachEvent:IE8之前的版本支持事件冒泡，所以通过attachEvent()添加的事件处理程序都会被添加到冒泡阶段。
    addEvent: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler,false);  //false表示冒泡阶段，DOM2级方法
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);      //ie方法
        } else {
            element["on" + type] = handler;                 //DOM0级方法
        }
    },
    //移除事件
    removeEvent:function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.datachEvent) {
            element.datachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //取得event对象
    getEvent: function (event) {
        return event ? event : window.event;
    },
    //获得事件目标
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    //取消事件的默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //阻击冒泡事件
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};