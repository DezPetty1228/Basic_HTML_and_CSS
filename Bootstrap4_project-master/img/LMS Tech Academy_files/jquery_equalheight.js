/* 
 /* * @Copyright (c) 2013 James Stoddern - info@jamesstoddern.net  
 * web:jamesstoddern.net  
 *  
 * Permission is hereby granted, free of charge, to any person  
 * obtaining a copy of this software and associated documentation  
 * files (the "Software"), to deal in the Software without  
 * restriction, including without limitation the rights to use,  
 * copy, modify, merge, publish, distribute, sublicense, and/or sell  
 * copies of the Software, and to permit persons to whom the  
 * Software is furnished to do so, subject to the following  
 * conditions:  
 * The above copyright notice and this permission notice shall be  
 * included in all copies or substantial portions of the Software.  
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,  
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES  
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND  
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT  
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,  
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING  
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR  
 * OTHER DEALINGS IN THE SOFTWARE.  
 *  
 * How to use it:  
 *  
 * If you have a series of floated columns, which you wish to make the same height, give them all the same  
 * class, and then run the plugin. It will determine the tallest div, and equalise the height of the rest  
 *  
 * $('.selector').equalHeights();  
 *  
 *  
 */

(function ($) {
    $.fn.equalHeights = function () {
        var tallestElement = 0;
        var startRow = 0;
        var elements = new Array();
        var $currentElement;
        var topPosition = 0;

        this.each(function () {

            $currentElement = $(this);
            topPostion = $currentElement.position().top;

            if (startRow != topPostion) {
                for (currentDiv = 0; currentDiv < elements.length; currentDiv++) {
                    elements[currentDiv].height(tallestElement);
                }

                elements.length = 0;
                startRow = topPostion;
                tallestElement = $currentElement.height();
                elements.push($currentElement);

            } else {
                elements.push($currentElement);
                tallestElement = (tallestElement < $currentElement.height()) ? ($currentElement.height()) : (tallestElement);

            }

            for (currentDiv = 0; currentDiv < elements.length; currentDiv++) {
                elements[currentDiv].height(tallestElement);
            }

        });

    };
})(jQuery);