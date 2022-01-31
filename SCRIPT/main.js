// let img_array = [
//     {
//         title: "Kai tavo kodas bjauriai parašytas, bet vis tiek veikia.",
//         src: "./images/6.gif"
//     },
    
//     {
//         title: "If you think you are too small to make a difference, try sleeping with a mosquito.",
//         src: "./images/1.gif"
//     },
    
//     {
//         title: "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.",
//         src: "./images/3.jpg"
//     },
    
//     {
//         title: "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.’  ",
//         src: "./images/4.jpg"
//     },
    
//     {
//         title: "When you have a dream, you’ve got to grab it and never let go.",
//         src: "./images/5.jpg"
//     },
    
//     {
//         title: "The bad news is time flies. The good news is you’re the pilot.",
//         src: "./images/2.gif"
//     },
    
//     {
//         title: "If you win, you need not have to explain...If you lose, you should not be there to explain!",
//         src:"./images/7.gif"
//     },
        
//     {
//       title: "Kai pirmą kartą parašei kodą be klaidų!",
//         src: "https://gifburg.com/images/gifs/shocked/gifs/0001.gif"
//     },

//     {
//       title: "You need to know array in javascript!",
//       src: "https://res.cloudinary.com/practicaldev/image/fetch/s--MTMsl-dz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://media0.giphy.com/media/DHqth0hVQoIzS/200.gif"
//     },

//     {
//       title: "Kai mokytoja pasake: Kas nori, gali eiti..",
//       src: "https://c.tenor.com/_tMorpHF7hQAAAAC/fade-meme.gif"
//     },

//     {
//       title: "Ne gali surasti klaidos kode",
//       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cHOkso__9gAAgRTZPdOhLpvsV5YoLkKQiIVfxQrLYMBhXrGk8LZogD5ByOM18xggVII&usqp=CAU"
//     },
    
//     {
//       title: "WE ALL GONNA MAKE IT BRAH",
//       src: "https://c.tenor.com/baKBrVTtR64AAAAM/zyzz-fistpump.gif"
//     },

//     {
//       title: "Visual Studio Code is not responding",
//       src: "https://media3.giphy.com/media/KpACNEh8jXK2Q/200.gif"
//     }
    
// ]

let img_array;

fetch("https://raw.githubusercontent.com/poiutas/augadam/main/SCRIPT/photos.json").then((response) => response.json())
.then((img_array) => imageLoad(img_array));


function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * img_array.length);
  
  // Display the image
  document.getElementById('image_shower').src = img_array[random_index].src;
  document.getElementById('text_shower').innerHTML = img_array[random_index].title;
}
