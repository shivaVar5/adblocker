(function() {
  var adBlockDetected = false;
  var adElement = document.createElement('div');
  adElement.className = 'adsbox';
  document.body.appendChild(adElement);

  setTimeout(function() {
    if (adElement.offsetHeight === 0) {
      adBlockDetected = true;
      document.body.setAttribute('data-ad-block', 'true');
    }
    adElement.remove();
  }, 100);
console.log("executed");
  // You can log or trigger other actions based on the result
})();
