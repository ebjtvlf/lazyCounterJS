/*
lazyCounter.js
Copyright (c) 2019 Yusaku Ichimura
This is released under the MIT License.
*/
(function($) {
    $.fn.lazyCounter = function(option) {
        var d       = option.deferred || new $.Deferred();
        var $that   = option.that || $(this);
        var count   = option.countNow || $that.text() * 1;
        var countNew= option.countNew * 1;
        var dulation= option.dulation || 1000;
        var same    = 0;
        var abs     = 0;
        var num     = 0;
        var len     = (countNew + "").length;
        for(var i = 0; i < len; i++) {
            var def  = Math.floor((countNew % (10 ** (i + 1))) / (10 ** i));
            var def2 = Math.floor((count % (10 ** (i + 1))) / (10 ** i));
            var plusMinus = 1;
            abs += Math.abs(def - def2);
            if((def - def2) < 0) {
                plusMinus = -1;
            } else if((def - def2) === 0) {
                plusMinus = 0;
                same++;
            }
            num += (def2 + plusMinus) * (10 ** i);
        }
        setTimeout(function(){
            $that.text(num);
            if(countNew === num) {
                d.resolve($that);
            } else {
                $.fn.lazyCounter({
                    "countNow" : num,
                    "countNew" : countNew,
                    "dulation" : option.dulation,
                    "that"     : $that,
                    "deferred" : d
                });
            }
        }, dulation/(1 + len - same + abs));
        return d.promise();
    };
})(jQuery);
