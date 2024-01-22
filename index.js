var arrSoN = [];

document.getElementById('btn').onclick =
function themSoNVaoMang () {
    var soN = document.getElementById('txt-soN').value * 1;
    arrSoN.push(soN);
    document.querySelector('.render_arr').innerHTML = arrSoN;
}

document.getElementById('btn1').onclick =
function tinhTongSoDuong() {
    var tong = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        tong += arrSoN[i];
    }
    document.getElementById('kq1').innerHTML = ` Tổng 2 số dương là ${tong}`;
}

document.getElementById('btn2').onclick = 
function demSoDuong() {
    var dem = 0;
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] >= 0) {
            dem++;
        }
    }
    document.getElementById('kq2').innerHTML = ` Có tất cả ${dem} số dương`;
}

document.getElementById('btn3').onclick =
function timSoNhoNhat() {
    var min = arrSoN[0];
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] < min) {
            min = arrSoN[i];
        }
    }
    document.getElementById('kq3').innerHTML = ` Số nhất là ${min}`;
}

document.getElementById('btn4').onclick = 
function soDuongNhoNhat() {
    var min = arrSoN[0];
    for (var i = 0; i < arrSoN.length; i++) {
        if (arrSoN[i] <= min) {
            min = arrSoN[i];
        }
        document.getElementById('kq4').innerHTML = ` Số dương nhất là ${min}`;
    }
}

document.getElementById('btn5').onclick = 
function soChanCuoiCung() {
    var soChan = -1;
    for (var i = arrSoN.length - 1; i >= 0; i--) {
        if (arrSoN[i] % 2 == 0) {
            soChan = arrSoN[i];
        }
        document.getElementById('kq5').innerHTML = ` Số chẵn cuối cùng là ${soChan}`;
    }
}

document.getElementById('btn6').onclick =
function sapXepTangDan() {
    daySo = arrSoN.sort((a, b) => a - b);
    document.getElementById('kq6').innerHTML = daySo;
}

