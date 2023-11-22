// const axios = require('axios');

const HttpError = require("../models/http-error");

// const API_KEY = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

// async function getCoordsForAddress(address) {
//   // return {
//   //   lat: 40.7484474,
//   //   lng: -73.9871516
//   // };
//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//       address
//     )}&key=${API_KEY}`
//   );

//   const data = response.data;

//   if (!data || data.status === 'ZERO_RESULTS') {
//     const error = new HttpError(
//       'Could not find location for the specified address.',
//       422
//     );
//     throw error;
//   }

//   const coordinates = data.results[0].geometry.location;

//   return coordinates;
// }

// module.exports = getCoordsForAddress;

// const tokenURL =
//   " https://outpost.mappls.com/api/security/oauth/token?grant_type=client_credentials&client_id=33OkryzDZsIgdX69cldQRfLT5v_GHYSy0v4YrmXQtAcsSfsXWJKH92hOU_uKbK-vHr43AsR621KGI8lbp66wtQ==&client_secret=lrFxI-iSEg-i-ExsXVop3xL3JCYBYnI4zNpH47d2B1bvFu3f_InTjtz5flnxbgINjI8emLKy3GCFi7BnHQ0wJynYE3I89852";

const API_KEY = "b29e3e7ce12a46f19bd6fc7928514b2a";

async function getCoordsForAddress(address) {
  const res2 = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res2.json();

  if (!data || data.total_results === 0) {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  const coordinates = data.results[0].geometry;
  const formattedAddress = data.results[0].formatted;

  return { coordinates, formattedAddress };
}

module.exports = getCoordsForAddress;
