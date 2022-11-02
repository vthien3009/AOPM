"use strict";
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key) {
  // return (abc = localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):[]);
  return localStorage.getItem(key);
  // return (localStorage.getItem(key)!==null?key = JSON.parse(getFromStorage("key")):key = []);
//   if (localStorage.getItem(key) !== null) {
//     key = JSON.parse(getFromStorage("breedArr"));
//   } else {
//     key = [];
//   }
//   return key;
}
