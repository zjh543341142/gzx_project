setTimeout(function (){
            scrollLeftToRight();
        },1000);
 
 
function scrollLeftToRight(){
        var $wrap = $('.scrollText');
        var $ul = $wrap.find('ul');
        var wrap_width = $wrap.width();
        var timer = null;
        var li_w = 0;
 
        $ul.find('li').each(function () {
            li_w += $(this).outerWidth();
        });
 
        if (li_w <= wrap_width) {
            return false;
        }
 
        $ul.css('width', li_w);
 
        var i = 0;
        var x = 0;
        function _marquee() {
            var _w = $ul.find('li:eq(0)').outerWidth();
            i ++;
            if (i >= _w) {
                $ul.find('li:eq(0)').remove();
                i = 0;
                x = 0;
            } else {
                $ul.find('li:eq(0)').css('marginLeft', -i);
                if (i >= Math.max(_w - wrap_width, 0)) {
                    if (x === 0) {
                        var _li = $ul.find('li:eq(0)').clone(true);
                        $ul.append(_li.css('marginLeft', 0));
                        x = 1;
                    }
                }
            }
            var _ul_w = 0;
            $ul.find('li').each(function () {
                _ul_w += $(this).outerWidth();
            });
 
            $ul.css('width', _ul_w);
        }
 
        timer = setInterval(_marquee, 20);
    }