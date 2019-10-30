/*
lazyCounter.js
Copyright (c) 2019 Yusaku Ichimura
This is released under the MIT License.
*/
(function($){  
    $.fn.lazyCounter = function(countNow, countNew, dulation) {
        var counter = 0;
        var same    = 0;
        var abs     = 0;
        var _dulation= dulation || 1000;
        for(var i = 0, len = (countNew + "").length; i < len; i++) {
            var abc  = (countNew % (10 ** (i + 1)))/(10 ** i);
            var def  = Math.floor(abc);
            var abc2 = (countNow % (10 ** (i + 1)))/(10 ** i);
            var def2 = Math.floor(abc2);
            var plusMinus = 1;
            abs += Math.abs(def - def2);
            if((def - def2) < 0) {
                plusMinus = -1;
            } else if((def - def2) === 0) {
                plusMinus = 0;
                same++;
            }
            counter += (def2 + plusMinus) * (10 ** i);
        }
        countNow = counter;
        this.text(countNow);
        if(countNew === countNow) {
            return this;
        }
        dulation = dulation/(1 + len - same + abs);
        setTimeout($.lazyCounter(countNow, countNew, _dulation), _dulation);
    };
})(jQuery);
