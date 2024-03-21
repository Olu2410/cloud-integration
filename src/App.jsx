

import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    // Fetch center coordinates from an API or any other data source
    // For this example, setting a default location
    setCenter({ lat: 59.95, lng: 30.33 });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Our Website</h1>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Replace YOUR_API_KEY with your actual Google Maps API Key
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="Our Location"
          />
        </GoogleMapReact>
      </div>
      <footer>
        <p>Contact us at example@example.com</p>
      </footer>
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import GoogleMapReact from 'google-map-react';
// import './App.css';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function App() {
//   const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
//   const [zoom, setZoom] = useState(11);

//   useEffect(() => {
//     // Fetch center coordinates from an API or any other data source
//     // For this example, setting a default location
//     setCenter({ lat: 59.95, lng: 30.33 });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Welcome to Our Website</h1>
//       <div style={{ height: '50vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Replace YOUR_API_KEY with your actual Google Maps API Key
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <AnyReactComponent
//             lat={center.lat}
//             lng={center.lng}
//             text="Our Location"
//           />
//         </GoogleMapReact>
//       </div>
//       <footer>
//         <p>Contact us at example@example.com</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
