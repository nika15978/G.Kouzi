const video = document.querySelector("#video");
const video1 = document.querySelector("#video1");
const video2 = document.querySelector("#video2");
const video3 = document.querySelector("#video3");
const desktopVideo = document.querySelector("#desktop-video")
const desktopVideo2 = document.querySelector("#desktop-video2")
//const humburger = document.querySelector('.hamburger')
// console.log(player);
let player2 = document.getElementById("video1")
console.log(player2);

let width = window.innerWidth;
console.log(width);
video.addEventListener("click", (e) => {
    if (e) {
        video1.pause()
        video2.pause()
        desktopVideo.pause()
        desktopVideo2.pause()
    }
})
video1.addEventListener("click", (e) => {

})
video2.addEventListener("click", (e) => {

})
desktopVideo.addEventListener("click", (e) => {
    if (e) {
        video1.pause()
        video2.pause()
        video.pause()
        desktopVideo2.pause()
    }
})
desktopVideo2.addEventListener("click", (e) => {

})
// if (width < 600) {

//     function updateheight() {
//         let sqrol = window.scrollY;


//         if (sqrol >= 800 || sqrol <= 200) {
//             // const player = videojs(video, {
//             //     autoplay: true,
//             //     controls: true,
//             //     poster: "./imges/4bsu36wbwimsgl4w0nh5zyeelaatru70.png",

//             // })
//             video.pause()

//         }




//         if (sqrol <= 730 || sqrol >= 1200) {
//             video1.pause()
//         }
//         if (sqrol <= 1195) {
//             video2.pause()


//         }
//     }
// }
// window.addEventListener("scroll", (e) => {
//     updateheight()


// })
