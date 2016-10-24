
  var mymap = new L.Map('mapid', {
  center: new L.LatLng(41.028814, 28.948970),
  zoom: 0,
  minZoom: 0,
  maxZoom: 18,
  layers: [
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 4,
      minZoom: 0,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }),
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 9,
      minZoom: 5,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  		id: 'mapbox.satellite'
  }),
      L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      minZoom: 10,
      maxZoom: 18,
      attribution: 'Google Maps',
      subdomains:['mt0','mt1','mt2','mt3']
  })
]});



/*
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    minZoom: 0,
		maxZoom: 8,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.landsat-live'
	}).addTo(mymap);
*/

/* using the zoom button to control satellite layers.
  var classname = document.getElementsByClassName("leaflet-control-zoom-in");

  var myFunction = function() {
    if (mymap.getZoom() < 8) {
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.satellite'
      }).addTo(mymap);
    } else {
      googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
          subdomains:['mt0','mt1','mt2','mt3']
      });
      googleSat.addTo(mymap);
    };
      console.log(mymap.getZoom());
  };

// since the classname returns an HTMLcollection loop through collection and add the eventlistener. from: http://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
  for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('mouseover', myFunction, false);
  }

  var classname2 = document.getElementsByClassName("leaflet-control-zoom-out");

  var myFunction = function() {
    if (mymap.getZoom() < 10) {
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.satellite'
      }).addTo(mymap);
    } else {
      googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
          subdomains:['mt0','mt1','mt2','mt3']
      });
      googleSat.addTo(mymap);
    };
      console.log(mymap.getZoom());
  };

// since the classname returns an HTMLcollection loop through collection and add the eventlistener. from: http://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
  for (var i = 0; i < classname2.length; i++) {
      classname2[i].addEventListener('mouseover', myFunction, false);
  }
  */
