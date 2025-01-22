const testAd = document.createElement('div');
testAd.className = 'adsbox';
testAd.style.display = 'none';
document.body.appendChild(testAd);

window.setTimeout(() => {
  const adBlocked = testAd.offsetHeight === 0;
  AMP.setState({ adBlocked });
}, 100);
