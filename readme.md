# TechNet Wiki November 2018 article

[jQuery – HTML5 Geolocation custom class](https://social.technet.microsoft.com/wiki/contents/articles/52193.jquery-html5-geolocation-custom-class.aspx)

The code presented provided easy to use methods to obtain geolocation information from a web site/web application. For details click on the link above.

Below shows the basics for getting started in your web application.

Geolocation in the sample below passes options for [navigator.geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) followed by calling Execute which prompts for the current location or if cached gets the cached data.
```javascript
$(document).ready(function () {

    var positionOptions = {
        timeout: Infinity,
        maximumAge: 0,
        enableHighAccuracy: true
    };


    $geoLocation.Init(positionOptions);
    $geoLocation.Execute();

    ...

}();
```

