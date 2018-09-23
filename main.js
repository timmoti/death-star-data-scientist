const profile = document.querySelector(".profile");

profile.addEventListener('mouseover', function () {
    profile.setAttribute('src', '/img/palpatine.jpg');
    document.body.style.backgroundImage = "url('/img/purple_lightning.jpg')";
});

profile.addEventListener('mouseout', () => {
    profile.setAttribute('src', '/img/Death-Star-Trooper-05.jpg');
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "rgb(37,37,37)";
});
