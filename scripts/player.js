class Player {
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    return this.soundObject.getDuration();
  }

  getTime() {
    return this.soundObject.getTime();
  }

  prettyTime(timeInSeconds) {
    var seconds = Math.floor(timeInSeconds);
    var minutes = Math.floor(seconds / 60);
      seconds -= minutes*60;
      if(minutes < 10) {minutes = "0"+minutes;}
      if(seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
      
      }

  
  
  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      this.soundObject.stop();
      this.currentlyPlaying.element.removeClass('playing paused');
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume( this.volume );
      this.soundObject.play();
      this.playState = 'playing';
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      this.soundObject.pause();
      this.playState = 'paused';
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
    $('#time-control .total-time').text(player.prettyTime(this.currentlyPlaying.duration));
  }
  
  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }
  
  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();

