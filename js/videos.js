const videoThumbnails = document.querySelectorAll('.video-thumbnail');
const videoPlayer = document.getElementById('playlist-video');

videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoSrc = thumbnail.getAttribute('data-src');
        videoPlayer.src = videoSrc;
        videoPlayer.play();
    });
});
