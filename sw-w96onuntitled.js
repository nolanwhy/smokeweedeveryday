self.addEventListener('fetch', function(event) {
	event.respondWith(fetchInterceptor(event.request));
});

async function fetchInterceptor(request) {
	let url = request.url;
	if (!url.startsWith("https://windows96.net")) {
		url = "https://windows96.net/" + url;
	}
	url = "/proxy?url=" + url;
	url = url.replace('https://untitlednetwork.xyz', '');
	const modifiedRequest = new Request(url, request);
	return fetch(modifiedRequest);
}
