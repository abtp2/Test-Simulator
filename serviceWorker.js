const staticDevCoffee = "Test-Simulator-Ashutosh_dev";
const assets = [
    "index.html",
    "index.css",
    "logo.png",
    "pdfjs/pdf.js",
    "pdfjs/pdf.worker.js",
    "pdfjs/pdf.min.js",
    "pdfjs/pdf.js.map",
    "pdfjs/pdf.worker.min.js",
    "pdfjs/pdf.worker.entry.js",
    "pdfjs/pdf.worker.js.map.json",
    "icons/boxicons.css",
    "icons/boxicons.ttf",
    "icons/boxicons.woff",
    "icons/boxicons.woff2",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets);
        })
    );
});
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});
