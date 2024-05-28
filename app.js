let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

// -----------------------1--------------------------

let item1 = ""
let n_count1 = 0


let count1 = document.getElementById("count1");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item1 = "Original_lavash/25000/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Original_lavash/25000/" + count1.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = "";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "Pishloqli_lavash/28000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn2.addEventListener("click", function () {
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "Pishloqli lavash/28000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = "";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "Tandir Lavash/26000/" + count3.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn3.addEventListener("click", function () {
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "Tandir Lavash/26000/" + count3.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// -------------------4-------------------
let item4 = ""
let n_count4 = 0

let count4 = document.getElementById("count4");
let rbtn4 = document.getElementById("rbtn4");
let abtn4 = document.getElementById("abtn4");
abtn4.addEventListener("click", function () {
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "Xalapenyali Lavash:/26000/" + count4.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item4 = "PIZZA/50000/" + count4.innerText;


});
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "inline-block";
    item4 = "Xalapenyali Lavash:/26000/" + count4.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();


});
//-------------5-------------
let item5 = ""
let n_count5 = 0
let count5 = document.getElementById("count5");
let rbtn5 = document.getElementById("rbtn5");
let abtn5 = document.getElementById("abtn5");
abtn5.addEventListener("click", function () {
    count5.innerText = n_count5 += 1;
    count5.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item5 = "Gamburger/20000/" + count5.innerText;


});
rbtn5.addEventListener("click", function () {
    if (n_count5 > 0) {
        count5.innerText = n_count5 -= 1;
    }

    count5.style.display = "inline-block";
    item5 = "Gamburger/20000/" + count5.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//-------------7-------------
let item7 = ""
let n_count7 = 0
let count7 = document.getElementById("count7");
let rbtn7 = document.getElementById("rbtn7");
let abtn7 = document.getElementById("abtn7");

abtn7.addEventListener("click", function () {
    count7.innerText = n_count7 += 1;
    count7.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item7 = "Big Burger/26000/" + count7.innerText;

});

rbtn7.addEventListener("click", function () {
    if (n_count7 > 0) {
        count7.innerText = n_count7 -= 1;
    }

    count7.style.display = "inl+ine-block";
    item7 = "Big Burger/26000/" + count7.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//-------------8-------------
let item8 = ""
let n_count8 = 0
let count8 = document.getElementById("count8");
let rbtn8 = document.getElementById("rbtn8");
let abtn8 = document.getElementById("abtn8");

abtn8.addEventListener("click", function () {
    count8.innerText = n_count6 += 1;
    count8.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item8 = "chizburger/22000/" + count8.innerText;

});

rbtn8.addEventListener("click", function () {
    if (n_count8 > 0) {
        count8.innerText = n_count8 -= 1;
    }

    count8.style.display = "inl+ine-block";
    item8 = "chizburger/22000/" + count8.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//--------------9------------
let item9 = ""
let n_count9 = 0
let count9 = document.getElementById("count9");
let rbtn9 = document.getElementById("rbtn9");
let abtn9 = document.getElementById("abtn9");

abtn9.addEventListener("click", function () {
    count9.innerText = n_count9 += 1;
    count9.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item9 = "bigchizburger/33000/" + count9.innerText;

});

rbtn9.addEventListener("click", function () {
    if (n_count9 > 0) {
        count9.innerText = n_count9 -= 1;
    }

    count9.style.display = "inl+ine-block";
    item9 = "Big Chizburger/33000/" + count9.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//-------------10-------------
let item10 = ""
let n_count10 = 0
let count10 = document.getElementById("count10");
let rbtn10 = document.getElementById("rbtn10");
let abtn10 = document.getElementById("abtn10");

abtn10.addEventListener("click", function () {
    count10.innerText = n_count10 += 1;
    count10.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item10 = "hotdog/10000/" + count10.innerText;

});

rbtn10.addEventListener("click", function () {
    if (n_count10 > 0) {
        count10.innerText = n_count10 -= 1;
    }

    count10.style.display = "inl+ine-block";
    item10= "Big Burger/26000/" + count10.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//-------------11-------------
let item11 = ""
let n_count11 = 0
let count11 = document.getElementById("count11");
let rbtn11 = document.getElementById("rbtn11");
let abtn11 = document.getElementById("abtn11");

abtn11.addEventListener("click", function () {
    count11.innerText = n_count11 += 1;
    count11.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item11 = "Pishloqli hotdog/12000/" + count11.innerText;

});

rbtn11.addEventListener("click", function () {
    if (n_count11 > 0) {
        count11.innerText = n_count6 -= 1;
    }

    count11.style.display = "inl+ine-block";
    item11 = "Pishloqli hotdog/12000/" + count11.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//-------------12-------------
let item12 = ""
let n_count12 = 0
let count12 = document.getElementById("count12");
let rbtn12 = document.getElementById("rbtn12");
let abtn12 = document.getElementById("abtn12");

abtn12.addEventListener("click", function () {
    count12.innerText = n_count12 += 1;
    count12.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item12 = "Shoxona hotdog/18000/" + count12.innerText;

});

rbtn12.addEventListener("click", function () {
    if (n_count12 > 0) {
        count12.innerText = n_count12 -= 1;
    }

    count12.style.display = "inl+ine-block";
    item12 = "Shoxona hotdog/26000/" + count12.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//-------------13-------------
let item13 = ""
let n_count13 = 0
let count13 = document.getElementById("count13");
let rbtn13 = document.getElementById("rbtn13");
let abtn13 = document.getElementById("abtn13");

abtn13.addEventListener("click", function () {
    count13.innerText = n_count13 += 1;
    count13.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item13 = "Xalapenyali hotdog/14000/" + count13.innerText;

});

rbtn13.addEventListener("click", function () {
    if (n_count13 > 0) {
        count13.innerText = n_count13 -= 1;
    }

    count13.style.display = "inl+ine-block";
    item13 = "Xalapenyali hotdog/14000/" + count13.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//-------------14-------------
let item14 = ""
let n_count14 = 0
let count14 = document.getElementById("count14");
let rbtn14 = document.getElementById("rbtn14");
let abtn14 = document.getElementById("abtn14");

abtn14.addEventListener("click", function () {
    count14.innerText = n_count6 += 1;
    count14.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item14 = "Big donar/24000/" + count14.innerText;

});

rbtn14.addEventListener("click", function () {
    if (n_count14 > 0) {
        count14.innerText = n_count14 -= 1;
    }

    count14.style.display = "inl+ine-block";
    item14 = "Big donar/26000/" + count14.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//-------------15-------------
let item15 = ""
let n_count15 = 0
let count15 = document.getElementById("count15");
let rbtn15 = document.getElementById("rbtn15");
let abtn15 = document.getElementById("abtn15");

abtn15.addEventListener("click", function () {
    count15.innerText = n_count15 += 1;
    count15.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item15 = "Shaurma/20000/" + count15.innerText;

});

rbtn15.addEventListener("click", function () {
    if (n_count15 > 0) {
        count15.innerText = n_count15 -= 1;
    }

    count15.style.display = "inl+ine-block";
    item15 = "Shaurma/26000/" + count6.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//-------------16-------------
let item16 = ""
let n_count16 = 0
let count16 = document.getElementById("count16");
let rbtn16 = document.getElementById("rbtn16");
let abtn16 = document.getElementById("abtn16");

abtn16.addEventListener("click", function () {
    count16.innerText = n_count16 += 1;
    count16.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item16 = "klab/26000/" + count16.innerText;

});

rbtn16.addEventListener("click", function () {
    if (n_count16 > 0) {
        count16.innerText = n_count16 -= 1;
    }

    count16.style.display = "inl+ine-block";
    item16 = "klab/26000/" + count16.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//-------------17-------------
let item17 = ""
let n_count17 = 0
let count17 = document.getElementById("count17");
let rbtn17 = document.getElementById("rbtn17");
let abtn17 = document.getElementById("abtn17");

abtn17.addEventListener("click", function () {
    count17.innerText = n_count16 += 1;
    count17.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item17 = "Xaggi/28000/" + count17.innerText;

});

rbtn17.addEventListener("click", function () {
    if (n_count17 > 0) {
        count17.innerText = n_count17 -= 1;
    }

    count17.style.display = "inl+ine-block";
    item17 = "Xaggi/28000/" + count17.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//-------------18-------------
let item18 = ""
let n_count18 = 0
let count18 = document.getElementById("count18");
let rbtn18 = document.getElementById("rbtn18");
let abtn18 = document.getElementById("abtn18");

abtn18.addEventListener("click", function () {
    count18.innerText = n_count18 += 1;
    count18.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item18 = "mujskoy kapriz/21000/" + count18.innerText;

});

rbtn18.addEventListener("click", function () {
    if (n_count18 > 0) {
        count18.innerText = n_count18 -= 1;
    }

    count18.style.display = "inl+ine-block";
    item18 = "mujskoy kapriz/21000/" + count18.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

//-------------19-------------
let item19 = ""
let n_count19 = 0
let count19 = document.getElementById("count19");
let rbtn19 = document.getElementById("rbtn19");
let abtn19 = document.getElementById("abtn19");

abtn19.addEventListener("click", function () {
    count19.innerText = n_count19 += 1;
    count19.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item19 = "Sezar/20000/" + count19.innerText;

});

rbtn19.addEventListener("click", function () {
    if (n_count19 > 0) {
        count19.innerText = n_count19 -= 1;
    }

    count19.style.display = "inl+ine-block";
    item19 = "Sezar/20000/" + count19.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" + item5 + "|" + item7 + "|" + item8 + "|" + item9 + "|" + item10 + "|" + item11 + "|" + item12 + "|" + item13 + "|" + item14 + "|" + item15 + "|" + item16 + "|" + item17 + "|" + item18 + "|" + item19
    tg.sendData(data);
});