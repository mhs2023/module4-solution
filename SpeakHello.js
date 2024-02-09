(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function (n) {
    console.log(speakWord + " " + n);
  }
  window.helloSpeaker = helloSpeaker;
})(window);
