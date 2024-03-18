"use strict";
let gazStart = document.querySelector("[data-gaz-start]"); // показники газу на початок періоду
let gazEnd = document.querySelector("[data-gaz-end]"); // показники газу на кінець періоду
let gazInputElement = document.querySelector("[data-gaz-price]"); //цена газа за 1 м куб
const gazBtn = document.querySelector("[data-btn-gaz]"); //кнопка
const gazRez = document.querySelector("[data-gaz-rez]"); // окошко расхода газа
let gazTotal = document.querySelector("[data-gaz-total]"); //расход газа
//-----------------------
let lightStart = document.querySelector("[data-light-start]"); // показники газу на початок періоду
let lightEnd = document.querySelector("[data-light-end]"); // показники газу на кінець періоду
let lightInputElement = document.querySelector("[data-light-price]"); //цена газа за 1 м куб
const lightBtn = document.querySelector("[data-btn-light]"); //кнопка
const lightRez = document.querySelector("[data-light-rez]");
let lightTotal = document.querySelector("[data-light-total]"); //расход газа
//----------------------
let waterStart = document.querySelector("[data-water-start]"); // показники газу на початок періоду
let waterEnd = document.querySelector("[data-water-end]"); // показники газу на кінець періоду
let waterInputElement = document.querySelector("[data-water-price]"); //цена газа за 1 м куб
const waterBtn = document.querySelector("[data-btn-water]"); //кнопка
const waterRez = document.querySelector("[data-water-rez]");
let waterTotal = document.querySelector("[data-water-total]"); //расход газа

function getValueGaz() {
  let gazValueStart = gazStart.value;
  let gazValueEnd = gazEnd.value;
  let gazRezult = gazValueStart - gazValueEnd;
  gazRez.innerHTML = gazRezult;
  let gazInputElementValue = gazInputElement.value;
  gazInputElementValue = gazInputElementValue.replace(/,/g, ".");
  let gazTotalPrice = gazRezult * gazInputElementValue;
  gazTotal.innerHTML = gazTotalPrice.toFixed(2);
}
function getValueLight() {
  let lightValueStart = lightStart.value;
  let lightValueEnd = lightEnd.value;
  let lightRezult = lightValueStart - lightValueEnd;
  lightRez.innerHTML = lightRezult;
  let lightInputElementValue = lightInputElement.value;
  lightInputElementValue = lightInputElementValue.replace(/,/g, ".");
  let lightTotalPrice = lightRezult * lightInputElementValue;
  lightTotal.innerHTML = lightTotalPrice.toFixed(2);
}
function getValueWater() {
  let waterValueStart = waterStart.value;
  let waterValueEnd = waterEnd.value;
  let waterRezult = waterValueStart - waterValueEnd;
  waterRez.innerHTML = waterRezult;
  let waterInputElementValue = waterInputElement.value;
  waterInputElementValue = waterInputElementValue.replace(/,/g, ".");
  let waterTotalPrice = waterRezult * waterInputElementValue + 18.2;
  waterTotal.innerHTML = waterTotalPrice.toFixed(2);
}
