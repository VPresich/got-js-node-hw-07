import"./styles-a9c00350.js";const c=document.querySelector("#categories"),t=c.querySelectorAll(".item");console.log(`Number of categories: ${t.length}`);t.forEach(e=>{const o=e.firstElementChild.textContent,l=e.lastElementChild.children;console.log(`Category: ${o}`),console.log(`Elements: ${l.length}`)});