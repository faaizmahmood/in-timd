document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

document.querySelectorAll("#menu li").forEach(function (item) {
    item.addEventListener('click', function () {
        if (window.matchMedia("(max-width: 992px)").matches) {
            document.querySelector(".navbar").classList.remove('active');
        }
    });
});
