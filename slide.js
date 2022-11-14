var KichThuoc = document.getElementsByClassName("slide1")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("slide1-chuyen")[0];
var Img = ChuyenSlide.getElementsByTagName('img');
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen =0;
//ham chuyen anh
function Next(){
    if(Chuyen < Max) Chuyen += KichThuoc;
    else Chuyen =0;
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}

function Back(){
    if(Chuyen == 0) Chuyen = Max;
    else Chuyen -= KichThuoc;
    ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
}
//Tu dong chuyen anh sau time (3s);
setInterval(function(){
    Next();
},3000);