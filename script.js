// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan

console.clear();
// OOPs
let video = {
    name: 'Intro JS',
    format: 'mp4',
    duration: '12.52',
    owner: 'VedaGna',
    getVideoName: function () {
        return this.name;
    },
    getFormat: function () {
        return this.format
    },
    getDuration: function () {
        return this.duration
    },
    getOwner: function () {
        return this.owner
    }
}
console.log(video.getVideoName()); // Intro JS
console.log(video.getFormat()); // mp4
console.log(video.getDuration()); // 12.52
console.log(video.getOwner()); // VedaGna
