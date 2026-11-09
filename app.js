const products = [
 {name:["Sea","Salt"],edition:"01 / SIGNATURE SERIES",subtitle:"DARK CHOCOLATE · SEA SALT FLAKES",description:"A beautiful balance of deep cocoa and delicate mineral sea salt. Crafted slowly, finished by hand.",rating:"4.9",reviews:"(128 reviews)",price:"₹799",weight:"80 g · 4 bars"},
 {name:["Orange",""],edition:"02 / CITRUS COLLECTION",subtitle:"DARK CHOCOLATE · SICILIAN ORANGE",description:"Bright notes of sun-ripened orange meet rich, slow-melt dark chocolate. A little unexpected, entirely irresistible.",rating:"4.6",reviews:"(96 reviews)",price:"₹749",weight:"80 g · 4 bars"},
 {name:["Noir","85%"],edition:"03 / INTENSE COLLECTION",subtitle:"SINGLE ORIGIN · 85% CACAO",description:"Deep, bold and beautifully complex. An intense expression of cacao with a long, elegant finish.",rating:"4.7",reviews:"(114 reviews)",price:"₹899",weight:"80 g · 4 bars"},
 {name:["Origin","72%"],edition:"04 / ORIGIN COLLECTION",subtitle:"SINGLE ESTATE · 72% CACAO",description:"A silky, rounded chocolate that celebrates its origin. Notes of toasted nuts, red fruit and warm spice.",rating:"4.8",reviews:"(142 reviews)",price:"₹849",weight:"80 g · 4 bars"}
];
const store=document.querySelector("#store");
const art=document.querySelector("#chocolateArt");
let selected=0,bag=0,toastTimer;
function drawBar(){
  art.innerHTML='<div class="bar">'+Array.from({length:12},()=>'<span class="piece"></span>').join("")+'</div>';
}
function selectProduct(index){
  selected=index;const p=products[index];
  store.dataset.product=index;
  document.querySelector("#titleTop").textContent=p.name[0];
  document.querySelector("#titleBottom").textContent=p.name[1];
  document.querySelector("#edition").textContent=p.edition;
  document.querySelector("#subtitle").textContent=p.subtitle;
  document.querySelector("#description").textContent=p.description;
  document.querySelector("#rating").textContent=p.rating;
  document.querySelector("#reviews").textContent=p.reviews;
  document.querySelector("#price").textContent=p.price;
  document.querySelector(".weight").textContent="/ "+p.weight;
  document.querySelector("#productIndex").innerHTML=`0${index+1} <span>—</span> 04`;
  document.querySelector("#ghostWord").textContent=index===2?"NÉRO":p.name[0].toUpperCase();
  document.querySelectorAll(".thumb").forEach((el,i)=>el.classList.toggle("active",i===index));
  art.style.transform="rotate(-17deg) rotateY(-15deg) scale(.94)";
  setTimeout(()=>art.style.transform="rotate(-17deg) rotateY(-15deg) scale(1)",100);
}
drawBar();
document.querySelectorAll(".thumb").forEach(btn=>btn.addEventListener("click",()=>selectProduct(Number(btn.dataset.index))));
document.querySelector("#addBtn").addEventListener("click",()=>{
  bag++;document.querySelector("#bagCount").textContent=bag;
  const toast=document.querySelector("#toast");
  toast.textContent=`${products[selected].name.join(" ")} added to your bag`;
  toast.classList.add("show");clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove("show"),2100);
});
document.querySelector("#bagBtn").addEventListener("click",()=>{
  const toast=document.querySelector("#toast");
  toast.textContent=bag?`Your bag has ${bag} ${bag===1?"item":"items"}`:"Your bag is currently empty";
  toast.classList.add("show");clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove("show"),2100);
});
// Keyboard navigation across the four products.
document.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight")selectProduct((selected+1)%products.length);
  if(e.key==="ArrowLeft")selectProduct((selected+products.length-1)%products.length);
});
