function playVideo() {
    var video = document.getElementById('myVideo');
    video.play();
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
 });

const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.classList.add('clicked');
});
