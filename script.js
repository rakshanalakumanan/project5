var typed = new Typed(".typing", {
  strings: [
    ",",
    "UI/UX DEVELOPER",
    "WEB DEVELOPER",
    "FULL-STACK DEVELOPER",
    "ARTIST",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwE2udM3zcjzLTDLTIre522NfHuE6VaoT8YdQR3wyjFRUxT0a-9YF3xLnSi6VBbqtxt/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
