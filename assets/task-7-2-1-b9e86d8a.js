import"./styles-1ecb74e5.js";const m=[{url:"/img/photo-1-1.jpg",alt:"photo-1-1"},{url:"/img/photo-1-2.jpg",alt:"photo-1-2"},{url:"/img/photo-1-3.jpg",alt:"photo-1-3"},{url:"/img/photo-2-1.jpg",alt:"photo-2-1"},{url:"/img/photo-2-2.jpg",alt:"photo-2-2"},{url:"/img/photo-2-3.jpg",alt:"photo-2-3"}],g=document.querySelector("#gallery"),i=({url:e,alt:p,width:l=360,height:a=300})=>{const o=document.createElement("li");o.classList.add("photo-item");const t=document.createElement("img");return t.classList.add("photo"),t.src=e,t.alt=p,t.width=l,t.height=a,o.append(t),o},h=m.map(i);g.append(...h);
