const isiJwbn = document.querySelector("#isi");
const submit = document.querySelector("#submit");

// Clue Menurun
const V1 = document.querySelectorAll(".v1");
const V2 = document.querySelectorAll(".v2");
const V3 = document.querySelectorAll(".v3");

//  Clue Mendatar
const H2 = document.querySelectorAll(".h2");
const H4 = document.querySelectorAll(".h4");
const H5 = document.querySelectorAll(".h5");
const H6 = document.querySelectorAll(".h6");

submit.addEventListener("click", function () {
  // Clue dan jawaban dicek
  let clue = document.getElementById("pilih").value;
  let jwbn = isiJwbn.value.toLowerCase();

  if (clue === "t1" && jwbn === "takjil") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < V1.length; i++) {
      V1[i].innerHTML = jwbn[i];
    }
  } else if (clue === "t2" && jwbn === "tadarus") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < V2.length; i++) {
      V2[i].innerHTML = jwbn[i];
    }
  } else if (clue === "t3" && jwbn === "idulfitri") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < V3.length; i++) {
      V3[i].innerHTML = jwbn[i];
    }
  } else if (clue === "d2" && jwbn === "tarawih") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < H2.length; i++) {
      H2[i].innerHTML = jwbn[i];
    }
  } else if (clue === "d4" && jwbn === "ramadhan") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < H4.length; i++) {
      H4[i].innerHTML = jwbn[i];
    }
  } else if (clue === "d5" && jwbn === "haus") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < H5.length; i++) {
      H5[i].innerHTML = jwbn[i];
    }
  } else if (clue === "d6" && jwbn === "ngabuburit") {
    alert("Jawaban Anda Benar");
    for (let i = 0; i < H6.length; i++) {
      H6[i].innerHTML = jwbn[i];
    }
  } else {
    alert("Jawban Anda Salah");
  }
});
