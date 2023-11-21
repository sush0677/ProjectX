// Checks if the URL ends with '.html' and redirects if necessary
function handleHtmlExtension() {
    var url = window.location.href;
    var hasHtmlExtension = url.endsWith('.html');

    if (hasHtmlExtension) {
        var newUrl = url.substring(0, url.length - 5); // Remove ".html"
        window.location.href = newUrl;
    }
}

// Redirects to '.html' version if it exists for non-html URLs
function redirectToHtmlVersion() {
    var path = window.location.pathname;
    if (path.slice(-1) === '/') path = path.slice(0, -1); // Remove trailing slash

    fetch(path + '.html').then(function(response) {
        if (response.status === 200) {
            window.location.href = path + '.html';
        }
    }).catch(function(error) {
        console.error('Error checking HTML file:', error);
    });
}

// Run these functions on page load
document.addEventListener('DOMContentLoaded', function() {
    handleHtmlExtension();
    redirectToHtmlVersion();
});
