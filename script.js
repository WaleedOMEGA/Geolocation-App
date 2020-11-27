let map;
let marker;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(() => {
         initMap(position)
     }, logError);
} else {
    logError();
}

function initMap(position) {

    const  { latitude, longitude } = position.coords;
    
        
    // console.log(position.coords)
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 14
    })
        
    
       
       
    
}

function logError(err)  {
    console.log('error while fetching location', err);
}

