console.log("Working");

const right11 = document.getElementById("right11");

console.log(right11);

import {mapData} from './Indexi.js';
console.log(mapData);

mapData.maps.forEach(map=>{

    const mapdiv=document.createElement('div');
mapdiv.classList.add('map');

const image = document.createElement('img');
image.classList.add("img1");
image.src=map.imageUrl;
image.alt=map.title;

const heading = document.createElement('h1');
heading.classList.add("h1");
heading.textContent=map.title;
mapdiv.appendChild(image);

mapdiv.appendChild(heading);

right11.appendChild(mapdiv);






})

const divii = document.getElementById("divii");
const image11 = document.getElementById("image11");

image11.addEventListener("click",()=>{
    console.log("divi");
    console.log(divii)
divii.classList.toggle("filter");
    
})