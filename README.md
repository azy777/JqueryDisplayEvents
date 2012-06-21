JqueryDisplayEvents
===================

Jquery displayEvents Plugin | By Abdul Aziz | @azy777

Jquery Extension to display bound events

Overview:

This plugin displays attached events along with their handlers . 

Features :
Displays the elements based on id / class / any attribute
Html and console display options 

Usage :

// List all elements in the page along with event handlers.
$('*').displayEvents()

// Lists event handlers of div.wrapper.
$('.wrapper').displayEvents()

// List all elements within the wrapper div with event handlers.
$('.wrapper *').displayEvents({ 'mode' : 'console' });

Parameters :

mode [Object] - 'html' by default 
Values : html , console 

  Details :

	There are two modes of dispay - 

	 1 - console : Displays element and event list on the browser console.
	 2 - html : Appends element and event list to the body tag of the page.
<code>
eg: $('*').displayEvents({ 'mode' : 'html' });
    $('*').displayEvents({ 'mode' : 'console' });
    $('.wrapper').displayEvents({ 'mode' : 'console' });
    </code>


