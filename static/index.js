console.log("Ishika Dance Academy website loaded successfully.");

document.querySelectorAll('#navbar a').forEach(function (link) {
    link.addEventListener('click', function () {
        console.log("Navigation:", link.textContent);
    });
});