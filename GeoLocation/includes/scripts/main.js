$(document).ready(function () {

    /*
     * This is one configuration for getting geo location.
     * Alternates are to set maximumAge to not accept cached values past n minutes e.g. use 600000 for ten miutes
     */
    var positionOptions = {
        timeout: Infinity,
        maximumAge: 0,
        enableHighAccuracy: true
    };


    $geoLocation.Init(positionOptions);
    $geoLocation.Execute();

    // when watching, show location and response code
    $("#btnGeoLocation").click(function () {
        $('input[id="longtitude"]').val($geoLocation.longtitude);
        $('input[id="latitude"]').val($geoLocation.latitude);
        $('input[id="response"]').val($geoLocation.responseText);
        $('input[id="responseCode"]').val($geoLocation.response);
    });


    $("#btnGeoLocationManual").click(function (ev) {
        $geoLocation.GetLocationAndWatch();
    });

    $("#btnGeoLocationManualStop").click(function (ev) {
        $geoLocation.StopWatch();
    });

    // initialize bootstrap tooltips
    // https://getbootstrap.com/docs/4.1/components/tooltips/
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // configure input buttons for tooltips
    $("#btnGeoLocation").tooltip({ title: "Get Geo location information", placement: "right", delay: { show: 200, hide: 100 } }); 
    $("#btnGeoLocationManual").tooltip({ title: "Start watching", placement: "right", delay: { show: 200, hide: 100 } }); 
    $("#btnGeoLocationManualStop").tooltip({ title: "Stop watching", placement: "right", delay: { show: 200, hide: 100 } }); 

});


