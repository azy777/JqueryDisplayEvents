// Jquery displayEvents Plugin  |  Author: Abdul Azeez | @azy777 

// Jquery Extension to display bound events

(function($){
    $.fn.displayEvents = function(options)
    {
        return this.each(function(i)
        {
            // Create defaults , extending them as required 

            var opt = $.extend({
                'mode' : 'html'
            },options);

            // Get the element, store the events, get the tagName
            var elem = $(this);
            var dEvents = elem.data('events');
            var elemString = elem[0].tagName;
            var elemIdentifier = null;
                  
            // If no events , Goodbye!

            if (!dEvents) {return;}
            
            // figure out a way to target the element - get the following data if available according to priority  
            // id
            // else class 
            // else first attribute
            // else tagname
            
            if(elem.attr('id') !== undefined){
                elemIdentifier = elem[0].tagName+'#'+elem[0].attr('id');
            } else if(elem.attr('class') !== undefined){
                elemIdentifier = elem[0].tagName+'.'+elem[0].className;
            } else if(typeof elem[0].attributes[0] !== 'undefined' && elem[0].attributes[0].name.length >= 1){
                elemIdentifier = elem[0].tagName+'['+elem[0].attributes[0].name+'='+elem[0].attributes[0].nodeValue+']';
            } else {
                elemIdentifier = elem[0].tagName;
            }

            // check the opt.mode for view mode - html or console and display handlers .

            if(opt.mode === 'html' || typeof(console) == 'undefined'){

            var htmlOp = '<table id="eventLogger"><tbody><tr><td style="padding:0px 3px;">'+elemIdentifier+'</td></tr>';

            $.each(dEvents, function(name, handler)
            {
                $.each(handler, function(i,handler)
                {
                   htmlOp += '<tr style="padding-left:10px;"><td style="padding:0px 3px;">'+name+'</td><td style="padding:10px;">'+handler.handler.toString()+'</td></tr>';                 
                });
            });
            
            htmlOp += '</tr></tbody></table>';  
            
            $('body').append(htmlOp);

            } else if(opt.mode === 'console'){
                $.each(dEvents, function(name, handler)
                {
                    $.each(handler, function(i,handler)
                    {
                       console.log(elem,' -- ' + name + ' -- ',handler.handler.toString());
                    });
                });
                            
            }
        });
    };    
})(jQuery);
