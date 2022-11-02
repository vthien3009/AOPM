"use strict";
const importBtn = document.getElementById('import-btn')
const exportBtn = document.getElementById("export-btn");
//goi arr lưu ở localStorage với khóa là abc và lưu vào petArr
let petArr = getFromStorage("abc") ? JSON.parse(getFromStorage("abc")) : [];
//chức năng export file .json
exportBtn.addEventListener("click",function exportPet  (){
    if(petArr!=[]){
        let pet =JSON.stringify(petArr);
        var blob = new Blob([pet],{type:'text/plain;charset=utf-8'});
        saveAs(blob,'dynamic.json')
    }
} );
//chức năng import file .json và lưu dữ liệu vào localStorage với key là petArrImport và save vào localStorage
importBtn.addEventListener('click', function(){
    var file = document.getElementById("input-file").files[0];
    if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
        var petArrImport = JSON.parse(evt.target.result);
        saveToStorage('petArrImport', petArrImport)
    }
}
})