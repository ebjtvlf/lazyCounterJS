                var countUp = function() {
                    var counter = 0;
                    var same    = 0;
                    var abs     = 0;
                    dulation = 1000;
                    var len =  (countNew+"").length;
                    for(var i = 0; i < len; i++) {

                        var abc = (countNew % (10 ** (i + 1)))/(10 ** i);
                        var def = Math.floor(abc);

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
                    $count.text(countNow);
                    if(countNew === countNow) {
                        return;
                    }
                    dulation = dulation/(1 + len - same + abs);
                    console.log("abs:"+abs);
                    console.log("dulation:"+dulation);
                    setTimeout(countUp, dulation);
                };
                countUp();
