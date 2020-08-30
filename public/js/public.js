const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  messageThree.textContent = "";

  if (location != "") {
    fetch(`/weather?address=${location}`).then((response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.address;
          messageTwo.textContent = `Temprature: ${data.forecast.temperature}`;
          messageThree.textContent = `Summary: ${data.forecast.summary}`;
        }
      });
    });
  }
});
