import"./styles-46c5579a.js";import{g as t}from"./task-2-8c6d375a.js";import"./auxiliary-d9d3ef85.js";const e={btnShipping:document.querySelector(".js-btn-shiping"),btnClear:document.querySelector(".js-shiping-clear"),inputPrice:document.querySelector("#shipping-price"),inputCountry:document.querySelector("#shipping-country"),inputFee:document.querySelector("#shipping-fee"),resultShippingLabel:document.querySelector(".js-shiping-result")};e.btnShipping.addEventListener("click",n);e.btnClear.addEventListener("click",i);function n(){e.resultShippingLabel.textContent=t(e.inputCountry.value,e.inputPrice.value,e.inputFee.value)}function i(){e.inputPrice.value="",e.inputCountry.value="",e.inputFee.value="",e.resultShippingLabel.textContent=""}
