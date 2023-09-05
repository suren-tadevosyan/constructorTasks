function Playlist() {
  this.songs = [];
  this.currentSong = 0;
  Playlist.prototype.add = function (song) {
    this.songs.push(song);
  };
  Playlist.prototype.play = function () {
    if (this.songs.length === 0) {
      return `There is no songs on your playlist!`;
    }
    return `${this.songs[this.currentSong].name} is playing`;
  };
  Playlist.prototype.stop = function () {
    return `${this.songs[this.currentSong].name} stopped`;
  };
  Playlist.prototype.next = function () {
    if (this.songs.length === 0) {
      return `There is no songs on your playlist!`;
    }
    const previousSong = this.songs[this.currentSong].name;
    this.currentSong = (this.currentSong + 1) % this.songs.length;
    return `${previousSong} stopped, ${
      this.songs[this.currentSong].name
    } started to play!`;
  };
}

function Song(songName, artist) {
  this.name = songName;
  this.artist = artist;
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
const imagine = new Song("Imagine", "John Lennon");
// LOGS///////////////////////

// playlist.add(heyJude);
// playlist.add(jaded);
// playlist.add(imagine);

console.log(playlist.songs);
console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.next());
console.log(playlist.next());

// console.log(playlist.next());

// console.log(playlist.play());
// playlist.next();
// console.log(playlist.play());
// console.log(playlist.stop());
// console.log(playlist.play());
