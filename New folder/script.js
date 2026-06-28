/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 2200);
});

/* ==========================
   MUSIK
========================== */

const music = document.getElementById("music");

function playMusic() {
    music.play().catch(() => {});
}

document.addEventListener("click", playMusic, { once: true });
document.addEventListener("touchstart", playMusic, { once: true });

/* ==========================
   LOVE LETTER
========================== */

const text = `Hai Andis Kartika Putri 🤍

Terima kasih ya sudah hadir di hidup aku.

Mungkin aku belum sempurna.

Masih banyak kurangnya.

Masih sering bikin kamu kesel.

Masih sering bikin kamu ngambek.

Tapi satu hal yang selalu aku usahain...

Aku selalu ingin jadi orang yang bisa bikin kamu bahagia.

Aku ingin selalu ada ketika kamu capek.

Aku ingin jadi tempat pulang kamu.

Aku ingin tetap menggenggam tangan kamu saat keadaan sedang tidak baik-baik saja.

Semoga hubungan kita selalu diberi kebahagiaan.

Aku sayang kamu lebih dari yang bisa dijelaskan dengan kata-kata.

Happy forever, Princess 🤍

I Love You ❤️

— Ikram Fansuri`;

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

document.getElementById("openLetter").onclick = () => {
    document.getElementById("letter").classList.remove("hidden");
    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

    if (i === 0) {
        typeWriter();
    }
};

/* ==========================
   RELATIONSHIP COUNTER
========================== */

const startDate = new Date("2026-05-01T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const day = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hour = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minute = Math.floor(diff / (1000 * 60)) % 60;

    const second = Math.floor(diff / 1000) % 60;

    document.getElementById("timer").innerHTML =
        `${day} Hari ${hour} Jam ${minute} Menit ${second} Detik`;

}

setInterval(updateCounter,1000);

updateCounter();

/* ==========================
   LOVE BUTTON
========================== */

document.getElementById("loveBtn").onclick = () => {

document.getElementById("popup").classList.remove("hidden");

};

document.getElementById("closePopup").onclick = () => {

document.getElementById("popup").classList.add("hidden");

};

/* ==========================
   HEART RAIN
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=(Math.random()*20+15)+"px";

heart.style.color="#ff4d88";

heart.style.opacity=Math.random();

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=-30;

const speed=Math.random()*3+2;

const drift=(Math.random()-0.5)*2;

const interval=setInterval(()=>{

pos+=speed;

heart.style.top=pos+"px";

heart.style.left=(parseFloat(heart.style.left)+drift)+"px";

if(pos>window.innerHeight){

heart.remove();

clearInterval(interval);

}

},20);

}

setInterval(createHeart,350);

/* ==========================
   SAKURA
========================== */

function sakura(){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-20px";

flower.style.fontSize=(Math.random()*15+15)+"px";

flower.style.pointerEvents="none";

flower.style.zIndex="998";

document.body.appendChild(flower);

let y=-20;

const speed=Math.random()*2+1;

const x=(Math.random()-0.5)*1.5;

const run=setInterval(()=>{

y+=speed;

flower.style.top=y+"px";

flower.style.left=(parseFloat(flower.style.left)+x)+"px";

flower.style.transform=`rotate(${y}deg)`;

if(y>window.innerHeight){

flower.remove();

clearInterval(run);

}

},20);

}

setInterval(sakura,700);

/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

/* ==========================
   ENDING MESSAGE
========================== */

setTimeout(()=>{

console.log("Forever Yours ❤️");

},5000);