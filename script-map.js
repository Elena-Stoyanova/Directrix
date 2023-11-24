let map;
let newMarkers = [];
const sofia = { lat: 42.6977, lng: 23.3219 };

const locations = [
  {
    position: {
      lat: 42.69812,
      lng: 23.320685,
    },
    title: 'Локация 1',
    filters: ['webDesign', 'frontEnd'],
  },
  {
    position: {
      lat: 42.692981,
      lng: 23.327455,
    },
    title: 'Локация 2',
    filters: ['backEnd', 'webDesign'],
  },
  {
    position: {
      lat: 42.695454,
      lng: 23.314481,
    },
    title: 'Локация 3',
    filters: ['branding', 'consultations'],
  },
  {
    position: {
      lat: 42.687771,
      lng: 23.312513,
    },
    title: 'Локация 4',
    filters: ['backEnd', 'frontEnd'],
  },
  {
    position: {
      lat: 42.693023,
      lng: 23.332575,
    },
    title: 'Локация 5',
    filters: ['branding', 'consultations'],
  },
  {
    position: {
      lat: 42.703275,
      lng: 23.314272,
    },
    title: 'Локация 6',
    filters: ['webDesign', 'frontEnd'],
  },
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: sofia,
    zoom: 14,
  });

  setMarkers(map);
}

function setMarkers(map) {
  const infoWindow = new google.maps.InfoWindow();
  const image = {
    url: './ellipse.png',
    size: new google.maps.Size(30, 32),
    origin: new google.maps.Point(-12, -8),
    anchor: new google.maps.Point(0, 0),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly',
  };

  locations.forEach(({ position, title, filters }, i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      filters,
      icon: image,
      shape: shape,
      title,
      label: `${i + 1}`,
      optimized: false,
    });
    newMarkers.push(marker);
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

function showInfoWindow(id) {
  google.maps.event.trigger(newMarkers[id], 'click');
}

const activeFilters = [];

function filterMarkers(category) {
  let filterButton = document.querySelector(`.${category}`);

  if (activeFilters.includes(category)) {
    const index = activeFilters.indexOf(category);
    activeFilters.splice(index, 1);
    filterButton.classList.remove('clicked');
  } else {
    activeFilters.push(category);
    filterButton.classList.add('clicked');
  }

  for (let i in newMarkers) {
    let marker = newMarkers[i];
    let filters = marker.filters;
    let label = marker.label;
    let location = document.getElementById(label);

    location.classList.add('hide');
    const isVisible = activeFilters.every((f) => filters.includes(f));
    marker.setVisible(isVisible);

    if (isVisible) {
      location.classList.remove('hide');
    }
  }
}

window.initMap = initMap;
