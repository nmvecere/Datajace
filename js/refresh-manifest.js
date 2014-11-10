window.addEventListener('load', function(e) {
  if (window.applicationCache) {
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
          // Browser downloads a new app cache.
          // Swap it in and reload the page.
          if (confirm('Updates are available for this mobile web app. Load them?')) {
            window.applicationCache.swapCache();
            window.location.reload();
          }
        } else {
          // Manifest didn't change.
        }
    }, false);
  }
}, false);
