import{i as n}from"./auxiliary-d9d3ef85.js";function o(e,i){const r=parseInt(e),t=parseFloat(i);return n(r)?n(t)?`You ordered ${r} droids worth ${t*r} credits!`:"Error in pricePerDroid":"Error in quantity"}console.log(o(5.2,3e3));console.log(o(3,1e3));console.log(o(10,500));export{o as m};
