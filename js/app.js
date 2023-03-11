'use strict'

const sun = document.querySelector("#sun");
// const electron = document.querySelector("#electron");

const px = (n) => n + 'px';
// const rad = (deg, speed) => deg * speed * Math.PI / 180;
const rad = (deg, speed) => deg * speed / 180;

const sunX = 700;
const sunY = 350;

sun.style.left = px(sunX);
sun.style.top =  px(sunY);

const radius = 200;

// const electronX = protonX + radius;
// const electronY = protonY;

// electron.style.left =  px(electronX);
// electron.style.top =  px(electronY);


function setPlanet(id, radius, speed, startDeg = 0,  direction = "noclock",){
    let deg = startDeg;
    const planet = document.querySelector("#" + id);
    const increment = direction == 'noclock' ? -1 : 1;
    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed));
        const y = sunY + radius * Math.sin(rad(deg, speed));
        planet.style.left = px(x);
        planet.style.top = px(y);
        deg += increment;
    }, 10);

}


function setSatellite(id, planetId , radius, speed, startDeg = 0,  direction = "noclock",){
    let deg = startDeg;
    const satellite = document.querySelector("#" + id);
    const increment = direction == 'noclock' ? -1 : 1;
    const planet = document.querySelector("#" + planetId);
    setInterval(() => {
        const planetX = Number(planet.style.left.slice(0,-2));
        const planetY = Number(planet.style.top.slice(0,-2));
        const x = planetX + radius * Math.cos(rad(deg, speed));
        const y = planetY + radius * Math.sin(rad(deg, speed));
        satellite.style.left = px(x);
        satellite.style.top = px(y);
        deg += increment;
    }, 10);

}


setPlanet('mercury', 100, 1, 200)
setPlanet('venus', 130, 2, 100)
setPlanet('earth', 160, 3, 150)
setPlanet('mars', 190, 4, 350)
setPlanet('jupyter', 210, 5, 0)
setPlanet('saturn', 240, 6, 50)
setPlanet('uranus', 270, 7, 300)
setPlanet('neptun', 300, 8, 220)
setSatellite('moon', 'earth', 50, 10)

const stars = document.querySelector('#stars');
let screenWidth = window.innerWidth + 500;
let screenHeight = window.innerHeight + 500;

for (let i = 0; i < 1000; i++) {
    const star = document.createElement('div');
    
    const x = Math.round(Math.random() * screenWidth);
    const y = Math.round(Math.random() * screenHeight);
    const size = Math.floor(Math.random() * 4 + 1);
    const delay = Math.round(Math.random() * 200) / 100;


    star.style.left = px(x);
    star.style.top = px(y);
    star.style.width = px(size);
    star.style.height = px(size);
    star.style.animationDelay = delay + 's';

    star.classList.add('star');
    stars.append(star)    
}