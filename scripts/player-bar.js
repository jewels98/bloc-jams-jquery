$(document).ready(function () {
    $('button#play-pause').click(function () {
        helper.playPauseAndUpdate();
        $(this).attr('playState', player.playState);
    });

    $('button#next').click(function () {
        if (player.playState !== 'playing') {
            return;
        }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) {
            return;
        }
        const nextSong = album.songs[nextSongIndex];
        helper.playPauseAndUpdate(nextSong);
    });

    $('button#previous').click(function () {
        if (player.playState !== 'playing') {
            return;
        }
        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const previousSongIndex = currentSongIndex - 1;
        if (previousSongIndex < 0) {
            return;
        }
        const previousSong = album.songs[previousSongIndex];
        helper.playPauseAndUpdate(previousSong);
    });

    $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
    });

<<<<<<< HEAD
    setInterval(() => {
=======
        setInterval( () => {
>>>>>>> parent of 56bbd5a... Fixed an error checkpoint: completed
        if(player.playState !== 'playing') { return; }
        const currentTime = player.getTime();
        const duration = player.getDuration();
        const percent = (currentTime / duration) * 100;
<<<<<<< HEAD
        $('#time-control .current-time').text(player.prettyTime(currentTime));
=======
        $('time-control.current-time').text(currentTime);
>>>>>>> parent of 56bbd5a... Fixed an error checkpoint: completed
        $('#time-control input').val(percent);
    }, 1000);


    $('#volume-control input').on('input', function (event) {
        player.setVolume(event.target.value);
    });

});

