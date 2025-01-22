(function() {
  var adBlockDetected = false;

  // Create a test ad element
  var adElement = document.createElement('div');
  adElement.className = 'adsbox';
  adElement.style.width = '1px';  // Set a tiny size to ensure it should be blocked
  adElement.style.height = '1px';  // Set a tiny size to ensure it should be blocked
  document.body.appendChild(adElement);

  setTimeout(function() {
    // Check if the ad element is being blocked (its size should be 0)
    if (adElement.offsetHeight === 0 || adElement.offsetWidth === 0) {
      adBlockDetected = true;
      document.body.setAttribute('data-ad-block', 'true');
    }
    adElement.remove();
  }, 100);

  // You can log or trigger other actions based on the result
  console.log("AdBlock detection executed");
})();
