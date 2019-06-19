// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build out functions
function togglePlay(){
  //no playing property, just paused
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(){
  //we use "this" because it is bound to the video itself
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  console.log('update the button');
}

function skip(){
  console.log('skipping')
  video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate(){
  video[this.name] = this.value;
}

function handleProgress(){
  const present = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
//Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));
