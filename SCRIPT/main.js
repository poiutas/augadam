
let img_array;

fetch("https://raw.githubusercontent.com/poiutas/augadam/main/SCRIPT/photos.json").then((response) => response.json())
.then((img_array) => imageLoad(img_array));

function imageLoad(duomenys) {
img_array = duomenys;
console.log(img_array)
}


function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * img_array.length);
  
  // Display the image
  document.getElementById('image_shower').src = img_array[random_index].src;
  document.getElementById('text_shower').innerHTML = img_array[random_index].title;
}
