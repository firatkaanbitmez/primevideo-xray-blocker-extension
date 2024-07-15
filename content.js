function disableXRay() {
  const observer = new MutationObserver(() => {
      const xrayElement = document.querySelector('.xrayQuickView');
      if (xrayElement) {
          xrayElement.style.display = 'none';
      }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const xrayElement = document.querySelector('.xrayQuickView');
  if (xrayElement) {
      xrayElement.style.display = 'none';
  }
}

function enableXRay() {
  const observer = new MutationObserver(() => {
      const xrayElement = document.querySelector('.xrayQuickView');
      if (xrayElement) {
          xrayElement.style.display = '';
      }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  const xrayElement = document.querySelector('.xrayQuickView');
  if (xrayElement) {
      xrayElement.style.display = '';
  }
}

chrome.storage.sync.get('xRayDisabled', (data) => {
  if (data.xRayDisabled) {
      disableXRay();
  } else {
      enableXRay();
  }
});
