const resource = [ /* --- CSS --- */ '/assets/css/jekyll-theme-chirpy.css', /* --- PWA --- */ '/app.js', '/sw.js', /* --- HTML --- */ '/index.html', '/404.html', '/categories/', '/tags/', '/archives/', '/about/', /* --- Favicons & compressed JS --- */ ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'elvisblue.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [];
