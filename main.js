//Bài 1
document.getElementById("btnSoND").onclick = function () {
  //Xu ly
  var S = 0;
  var n = 0;
  while (S < 10000) {
    n++;
    S = S + n;
  }
  var kq = "Số nguyên dương nhỏ nhất : " + n;
  //Dau ra
  document.getElementById("footerThongBaoBai1").innerHTML = kq;
};
//Bài 2
document.getElementById("btnTinhTong").onclick = function () {
  //Dau vao
  soX = document.getElementById("txtSoX").value * 1;
  soN = document.getElementById("txtSoN").value * 1;
  //Xu ly
  var S = 0;
  for (var i = 1; i <= soN; i++) {
    S = S + Math.pow(soX, i);
  }
  var kq = "Tổng =  " + S;
  //Dau ra
  document.getElementById("footerThongBaoBai2").innerHTML = kq;
};
//Bài 3
document.getElementById("btnTinhGT").onclick = function () {
  //Dau vao
  soGT = document.getElementById("txtSoGT").value * 1;
  //Xu ly
  var S = 1;
  for (var i = 1; i <= soGT; i++) {
    S = S * i;
  }
  var kq = "Số giai thừa =  " + S;
  //Dau ra
  document.getElementById("footerThongBaoBai3").innerHTML = kq;
};
//Bài 4
document.getElementById("btnTaoDiv").onclick = function () {
  //Xu ly
  // var kq = document.createElement("div");
  // kq.innerHTML = "";
  var kq = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      kq = kq + "<div class='alert alert-danger'> Div chẵn : " + i + "</div>";
    } else {
      kq = kq + "<div class='alert alert-primary'> Div lẻ : " + i + "</div>";
    }
  }

  //Dau ra
  console.log(kq);

  document.getElementById("footerThongBaoBai4").innerHTML = kq;
};
//Bài 5
function soNT(soN) {
  var count = 0;
  for (var i = 1; i <= soN; i++) {
    if (soN % i === 0) {
      count++;
    }
  }
  return count;
}
document.getElementById("btnTinhSoNT").onclick = function () {
  //Dau vao
  soN = document.getElementById("txtSoNT").value * 1;
  //Xu ly
  // var kq = document.createElement("div");
  // kq.innerHTML = "";
  var kq = "";
  // for (var i = 1; i <= 10; i++) {
  //   if (i % 2 == 0) {
  //     kq = kq + "<div class='alert alert-danger'> Div chẵn : " + i + "</div>";
  //   } else {
  //     kq = kq + "<div class='alert alert-primary'> Div lẻ : " + i + "</div>";
  //   }
  // }

  for (var i = 1; i <= soN; i++) {
    var flag = soNT(i);
    if (flag == 2) {
      kq += i + " ";
    }
  }

  //Dau ra

  document.getElementById("footerThongBaoBai5").innerHTML = kq;
};
