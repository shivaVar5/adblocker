(function() {
  var adBlockDetected = false;

  // Create a div element to simulate an ad
  var adElement = document.createElement('div');
  adElement.className = 'adsbox';
  adElement.style.height = '1px';  // Give it a size to make it detectable
  adElement.style.width = '1px';  // Similarly, width to make it detectable
  document.body.appendChild(adElement);

  // Wait for the DOM to process the added element
  setTimeout(function() {
    if (adElement.offsetHeight === 0 || adElement.offsetWidth === 0) {
      adBlockDetected = true;
      document.body.setAttribute('data-ad-block', 'true');
      console.log("AdBlock detected");
    } else {
      console.log("No AdBlock detected");
    }
    adElement.remove();  // Clean up after detection
  }, 100);
})();
