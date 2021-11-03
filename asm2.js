//khai báo object
var testSorce = {
    name:"",
    toan: 0,
    ly: 0,
    hoa: 0
};
var i =0;
function Nhap(){
// khai báo biến
var name = document.getElementById("name");
var toan = document.getElementById("toan");
var ly = document.getElementById("ly");
var hoa = document.getElementById("hoa");
var table = document.getElementById("table");
// lưu trữ dữ liệu từ input vào testSorce
if(toan.value <0){
    toan.value =0;
}
if(toan.value >10){
    toan.value=10;
}
if(ly.value <0){
    ly.value =0;
}
if(ly.value >10){
    ly.value=10;
}
if(hoa.value <0){
    hoa.value =0;
}
if(hoa.value >10){
    hoa.value=10;
}
var save_name = name.value;
var save_toan = toan.value;
var save_ly = ly.value;
var save_hoa = hoa.value;
 testSorce.name= save_name;
 testSorce.toan= save_toan;
 testSorce.ly= save_ly;
 testSorce.hoa= save_hoa; 
 // tạo hàng và cột khi nhấp vào hàm
var row = table.insertRow(++i);
var table_STT = row.insertCell(0);
var table_name = row.insertCell(1);
var table_toan = row.insertCell(2);
var table_ly = row.insertCell(3);
var table_hoa = row.insertCell(4);
var table_tb = row.insertCell(5);
//in giá trị từ ojbect ra cột
table_STT.innerHTML= i;
table_name.innerHTML = save_name;
table_toan.innerHTML= save_toan;
table_ly.innerHTML= save_ly;
table_hoa.innerHTML= save_hoa;
table_tb.innerHTML= "?";
// xóa  dữ liệu tại input
name.value=" ";
 toan.value=" ";
 ly.value=" ";
 hoa.value=" ";
}   
// hàm tính điểm TB
function Tinhdiem(){
    // khai báo biến
    var table = document.getElementById("table");
    var n = table.rows.length;
    // hàm tính điểm tb
    for(var j=1; j<n; j++ ){
        var row_table = table.rows[j].cells
          var sum =  parseFloat(row_table[2].innerHTML)+parseFloat(row_table[3].innerHTML)+
          parseFloat(row_table[4].innerHTML);
           var tb = sum/3;
           row_table[5].innerHTML= tb.toFixed(2);
    }
}
// hàm xđ hs giỏi
function hs(){
    var table = document.getElementById("table");
    var n = table.rows.length;
    for(var k=1; k<n; k++){
        var row_table = table.rows[k].cells
        if(row_table[5].innerHTML>=8){
            table.rows[k].style.background="red";
        }
    }
}
// hàm xđ hs dưới tb
function hs_tb(){
    var table = document.getElementById("table");
    var n = table.rows.length;
    for(var k=1; k<n; k++){
        var row_table = table.rows[k].cells
        if(row_table[5].innerHTML<5){
            table.rows[k].style.background="yellow";
        }
    }
}
// hàm xđ để xóa 
function xoa(){
    var table = document.getElementById("table");
    while(n= table.rows.length>1){
        table.deleteRow(1);
    }
i=0;
}