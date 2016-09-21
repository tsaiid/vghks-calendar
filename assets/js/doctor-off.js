var calGoogleCalendarApiKey = 'AIzaSyCutCianVgUaWaCHeTDMk2VzyZ8bcNUdOY';
$(document).ready(function() {
    var calEventSources = [{
      googleCalendarId: 'jsffraabejv47k9s1o4k3b5bko@group.calendar.google.com',
      //backgroundColor: "#f5dfe2",
      className: 'gcal-holiday'
    }];

    $("#calendar").fullCalendar({
        lang: 'zh-tw',
        header: {
            left: 'title',
            center: '',
            right: 'agendaWeek month today prev,next'
        },
        height: 680,
        aspectRatio: 1,
        firstDay: 1,
        theme: true,
        eventLimit: true, // strang bug, without this, bottom border disappears in firefox
        googleCalendarApiKey: calGoogleCalendarApiKey,
        eventSources: calEventSources,
        eventClick: function(calEvent, jsEvent, view) {
            $('#calEventDescription').text(calEvent.description === undefined ? '代理人不明，請洽總醫師辦公室' : calEvent.description);
            $("#calEventDialog").dialog("option", "title", calEvent.title);
            $('#calEventDialog').dialog('open');
            return false;   // do not follow event.url
        },
        eventRender: function(event, element) {
            if (event.title.search(/主任|潘慧本|梁慧隆|吳銘庭|賴炳宏|黃哲勳|楊宗龍|周春平/) != -1) {
                element.css('background-color', '#F44336');
                element.css('border-color', '#F44336');
            } else if (event.title.search(/林益輝|黃逸倫|傅瑞勛|蔡孟原|王柏欽|王俊傑|吳輔榮|江佳陵|許碩修|王威登|李明峰|何品萱/) != -1) {
                element.css('background-color', '#009688');
                element.css('border-color', '#009688');
            }
        }
    });

    $('#calEventDialog').dialog({
        resizable: false,
        autoOpen: false,
        width: 400,
        modal: true,
        open: function( e, ui ) {   // ref: https://jsfiddle.net/adamboduch/ekaW6/
            $( this ).siblings( ".ui-dialog-titlebar" )
                     .find( "button" ).blur(); 
        }
    });
});
