/*
 * Class designed to prompt user to allow or block their location. 
 */
var $geoLocation = $geoLocation || {};
$geoLocation = function () {



    /*
     * publicly exposed properties for storing geo location
     * and result codes both for accept and block
     */
    var response = "";
    var responseCodes = new window.Map();
    var responseText = "";
    var latitude = "0";
    var longtitude = "0";
    var _positionOptions;
    // watch properties
    var watchIDmain;

    // intialize map for error codes used in handleLocationError
    var init = function (positionOptions) {

        responseCodes.set("Y", "Allowed");
        responseCodes.set("N", "Blocked");
        responseCodes.set("T", "Timeout");
        responseCodes.set("C", "Could not get data");

        $geoLocation._positionOptions = positionOptions;

        return;

    };


    /*
     * Execute this method to prompt for geo location permission. 
     *      If already replied then this will not show
     */
    var execute = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCurrentLocation, handleLocationError, $geoLocation._positionOptions);
            this.response = 'Y';
            this.responseText = responseCodes.get($geoLocation.response);

        } else {
            document.getElementById("watchLocation").innerHTML = ("<strong>This browser does not support geolocation</strong>");
        }

        return;

    };

    // get geo location and start watch
    var getLocation = function () {
        // Check whether browser supports Geolocation API or not
        if (navigator.geolocation) // Supported
        {
            
            // Set the watchID
            watchIDmain = navigator.geolocation.watchPosition(
                getPositionForWatch,
                catchErrorForWatch,
                $geoLocation._positionOptions
            );

        }
        else // Not supported - either alert the user or simply accept the fact.
        {
            document.getElementById("watchLocation").innerHTML ="This browser does not support HTML5 Geolocation.";
        }
    }

    /*
        * cancel watchPosition call 
        */
    var stopWatch = function () {
        if (typeof navigator.geolocation != 'undefined') {
            if (watchIDmain !== undefined) {
                navigator.geolocation.clearWatch(watchIDmain);
                watchIDmain = null;
                document.getElementById("watchLocation").innerHTML = '';
            }
        }
    };


    // callback for watch success when user is sharing their location
    var getPositionForWatch = function (position) {       
        var today = new Date();
        document.getElementById("watchLocation").innerHTML = "<strong>Latitude:</strong> " +
            position.coords.latitude.toPrecision(6) + "<br>" + "<strong>Longitude:</strong> " +
            position.coords.longitude.toPrecision(6) + "<br><strong>Tiggered at</strong> " + " " +
            today.toLocaleTimeString();
    }

    // callback for errors when obtaining permission to allow or block location for when watch is active
    // this is the very basics, you may have some type of identifier pass in to the page like a transaction number
    // that can be used to identify the person e.g. they are a login shopper with a customer number.
    var catchErrorForWatch = function (error) {
        switch (error.code) {
            case error.TIMEOUT:
                // it's possible this is because there is no cache available, a new request (as done in the execute method) can be made here.
                writeWatchExceptions("The request to get user location has aborted as it has taken too long.", error.code);                
                break;
            case error.POSITION_UNAVAILABLE:
                writeWatchExceptions("Location information is not available.", error.code);
                break;
            case error.PERMISSION_DENIED:
                writeWatchExceptions("Permission to share location information has been denied!", error.code);
                break;
            default:
            writeWatchExceptions("An unknown error occurred.", -1);
        }
    }
    
    /*
     * On accept and no exceptions thrown get coordinates
     */
    var getCurrentLocation = function (myLocation) {

        $geoLocation.latitude = myLocation.coords.latitude.toPrecision(6);
        $geoLocation.longtitude = myLocation.coords.longitude.toPrecision(6);
        $geoLocation.writeResults();

        return;

    };

    /*
     * Callback for navigator.geolocation.getCurrentPosition 
     * two things happen, $geoLocation.response is set
     * and error code returned.
     */
    var handleLocationError = function (error) {

        switch (error.code) {
            case 3:
                // (T)ime out
                $geoLocation.response = "T";
                break;
            case 2:
                // device (C)an't get data
                $geoLocation.response = "C";
                break;
            case 1:
                // user responded (N)o
                $geoLocation.response = "N";
        }

        // here we get user defined messages but error.message can also be used.
        $geoLocation.responseText = responseCodes.get($geoLocation.response);

        return error.code;
    };

    /*
     * Write results to database or other source in the wild, here the results are
     * written to the developer tools console window.
     */
    var writeResults = function() {
        console.log(" Results " + $geoLocation.latitude + " " +
            $geoLocation.longtitude + " " + $geoLocation.response);
    };

    /*
     * write error text and code from watch callback for errors.
     * In this case they are written to the page, in the wild they would be written to a log or database
     */
    function writeWatchExceptions (errorText, errorCode) {
        document.getElementById("watchLocation").innerHTML = errorText + " Code " + errorCode;
    };

    /*
     * This method makes a call to an external site to get location information.
     * Place a break-point on the empty console.log to inspect data returned.
     *
     * Note: This is a paid service over 150 hits in an hour.
     */
    var IpLookup = function() {
        $.ajax('http://ip-api.com/json')
            .then(
                function success(response) {
                    console.log("User's Location Data is ", response);
                    console.log("User's Country", response.country);
                    console.log();
                },

                function fail(data, status) {
                    console.log("Request failed.  Returned status of", status);
                }
            );
    };

    return {
        Init: init,
        Execute: execute,
        GetLocationAndWatch: getLocation,
        StopWatch: stopWatch,
        writeResults: writeResults,
        latitude: latitude,
        longtitude: longtitude,
        response: response,
        responseText: responseText,
        IpLookup: IpLookup
    };
}();