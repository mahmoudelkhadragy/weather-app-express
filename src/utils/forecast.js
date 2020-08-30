const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/67fa968da48483b374f6197fe603af2d/${latitude},${longitude}?units=si`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        summary: body.daily.data[0].summary,
      });
    }
  });
};

module.exports = forecast;
