function playVideo() {
    var video = document.getElementById('myVideo');
    video.play();
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.classList.add('clicked');
});
