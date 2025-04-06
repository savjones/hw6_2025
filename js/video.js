var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
window.addEventListener('load', () => {
    // Select the video element and control elements
    const video = document.querySelector('video');
    const playButton = document.querySelector('#play');
    const pauseButton = document.querySelector('#pause');
    const slowDownButton = document.querySelector('#slower');
    const speedUpButton = document.querySelector('#faster');
    const skipButton = document.querySelector('#skip');
    const muteButton = document.querySelector('#mute');
    const volumeSlider = document.querySelector('#slider');
    const volumeDisplay = document.querySelector('#volume');
    const oldSchoolButton = document.querySelector('#oldSchool');
    const originalButton = document.querySelector('#orig');
  
    // Initialize the video settings: turn off autoplay and looping
    video.autoplay = false;
    video.loop = false;
    console.log("Autoplay and loop are disabled.");
  
    // Play Button: Play the video and update volume display
    playButton.addEventListener('click', () => {
        video.play();
        volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
        console.log("Video played, current volume:", video.volume);
    });
  
    // Pause Button: Pause the video
    pauseButton.addEventListener('click', () => {
        video.pause();
        console.log("Video paused");
    });
  
    // Slow Down Button: Decrease playback speed by 10%
    slowDownButton.addEventListener('click', () => {
        video.playbackRate *= 0.9;
        console.log("New playback speed:", video.playbackRate);
    });
  
    // Speed Up Button: Increase playback speed (inverse of slow down)
    speedUpButton.addEventListener('click', () => {
        video.playbackRate /= 0.9;
        console.log("New playback speed:", video.playbackRate);
    });
  
    // Skip Ahead: Move forward 10 seconds; if at the end, go back to start
    skipButton.addEventListener('click', () => {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
            console.log("Skipped to beginning.");
        } else {
            video.currentTime += 10;
            console.log("Skipped ahead 10 seconds, new time:", video.currentTime);
        }
    });
  
    // Mute/Unmute: Toggle mute and update button text accordingly
    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? "Unmute" : "Mute";
        console.log(video.muted ? "Video muted" : "Video unmuted");
    });
  
    // Volume Slider: Adjust volume and update volume display
    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value / 100;
        volumeDisplay.textContent = `${volumeSlider.value}%`;
        console.log("Volume set to:", video.volume);
    });
  
    // Old School Style: Add the "oldSchool" class to the video element
    oldSchoolButton.addEventListener('click', () => {
        video.classList.add("oldSchool");
        console.log("Old School style applied.");
    });
  
    // Original Style: Remove the "oldSchool" class to revert to original styling
    originalButton.addEventListener('click', () => {
        video.classList.remove("oldSchool");
        console.log("Original style restored.");
    });
});

