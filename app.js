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

//-------------20-------------
let item20 = ""
let n_count20 = 0
let count20 = document.getElementById("count120");
let rbtn20 = document.getElementById("rbtn20");
let abtn20 = document.getElementById("abtn20");

abtn20.addEventListener("click", function () {
    count20.innerText = n_count20 += 1;
    count20.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item20 = "Chizkeyk/14000/" + count20.innerText;

});

rbtn20.addEventListener("click", function () {
    if (n_count20 > 0) {
        count1920.innerText = n_count20 -= 1;
    }

    count20.style.display = "inl+ine-block";
    item20 = "Chizkeyk/14000/" + count20.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let item21 = ""
let n_count21 = 0
let count21 = document.getElementById("count21");
let rbtn21 = document.getElementById("rbtn21");
let abtn21 = document.getElementById("abtn11");

abtn21.addEventListener("click", function () {
    count21.innerText = n_count21 += 1;
    count21.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item121 = "Assalli tort/14000/" + count21.innerText;

});

rbtn21.addEventListener("click", function () {
    if (n_count21 > 0) {
        count21.innerText = n_count21 -= 1;
    }

    count21.style.display = "inl+ine-block";
    item21 = "Assalli tort/14000/" + count21.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let item22 = ""
let n_count22 = 0
let count22 = document.getElementById("count22");
let rbtn22 = document.getElementById("rbtn22");
let abtn22 = document.getElementById("abtn22");

abtn22.addEventListener("click", function () {
    count22.innerText = n_count22 += 1;
    count22.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item22 = "Olchali tort/14000/" + count22.innerText;

});

rbtn22.addEventListener("click", function () {
    if (n_count22 > 0) {
        count22.innerText = n_count22 -= 1;
    }

    count22.style.display = "inl+ine-block";
    item22 = "Olchali tort/14000/" + count22.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let item23 = ""
let n_count23 = 0
let count23 = document.getElementById("count23");
let rbtn23 = document.getElementById("rbtn23");
let abtn23 = document.getElementById("abtn23");

abtn23.addEventListener("click", function () {
    count23.innerText = n_count23 += 1;
    count23.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item23 = "asarti pitsa/78000/" + count23.innerText;

});

rbtn23.addEventListener("click", function () {
    if (n_count23 > 0) {
        count23.innerText = n_count23 -= 1;
    }

    count23.style.display = "inl+ine-block";
    item23 = "asarti pitsa/78000/" + count23.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

let item24 = ""
let n_count24 = 0
let count24 = document.getElementById("count24");
let rbtn24 = document.getElementById("rbtn24");
let abtn24 = document.getElementById("abtn24");

abtn24.addEventListener("click", function () {
    count24.innerText = n_count24 += 1;
    count24.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item24 = "pepperonni pitasa/65000/" + count24.innerText;

});

rbtn24.addEventListener("click", function () {
    if (n_count24 > 0) {
        count24.innerText = n_count24 -= 1;
    }

    count24.style.display = "inl+ine-block";
    item24 = "pepperonni pitsa/65000/" + count24.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________1___________________
let item25 = ""
let n_count25 = 0
let count25 = document.getElementById("count25");
let rbtn25 = document.getElementById("rbtn25");
let abtn25 = document.getElementById("abtn25");

abtn25.addEventListener("click", function () {
    count25.innerText = n_count25 += 1;
    count25.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item25 = "Qoziqorinli pitsa/65000/" + count25.innerText;

});

rbtn25.addEventListener("click", function () {
    if (n_count25 > 0) {
        count25.innerText = n_count25 -= 1;
    }

    count25.style.display = "inl+ine-block";
    item25 = "qoziqorili pitsa/65000/" + count25.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________2___________________
let item26 = ""
let n_count26 = 0
let count26 = document.getElementById("count26");
let rbtn26 = document.getElementById("rbtn26");
let abtn26 = document.getElementById("abtn26");

abtn26.addEventListener("click", function () {
    count26.innerText = n_count26 += 1;
    count26.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item26 = "qahva /7000/" + count26.innerText;

});

rbtn26.addEventListener("click", function () {
    if (n_count26 > 0) {
        count26.innerText = n_count26 -= 1;
    }

    count26.style.display = "inl+ine-block";
    item26 = "qahva/7000/" + count26.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________3___________________
let item27 = ""
let n_count27 = 0
let count27 = document.getElementById("count27");
let rbtn27 = document.getElementById("rbtn27");
let abtn27 = document.getElementById("abtn27");

abtn27.addEventListener("click", function () {
    count27.innerText = n_count27 += 1;
    count27.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item27 = "kok choy/65000/" + count27.innerText;

});

rbtn27.addEventListener("click", function () {
    if (n_count27 > 0) {
        count27.innerText = n_count27 -= 1;
    }

    count27.style.display = "inl+ine-block";
    item27 = "kok choy/65000/" + count27.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________4___________________
let item28 = ""
let n_count28 = 0
let count28 = document.getElementById("count28");
let rbtn28 = document.getElementById("rbtn28");
let abtn28 = document.getElementById("abtn28");

abtn28.addEventListener("click", function () {
    count28.innerText = n_count28 += 1;
    count28.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item28 = "limonli choy/5000/" + count28.innerText;

});

rbtn28.addEventListener("click", function () {
    if (n_count28 > 0) {
        count28.innerText = n_count28 -= 1;
    }

    count28.style.display = "inl+ine-block";
    item28 = "Limonli choy/5000/" + count28.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________5___________________
let item29 = ""
let n_count29 = 0
let count29 = document.getElementById("count29");
let rbtn29 = document.getElementById("rbtn29");
let abtn29 = document.getElementById("abtn29");

abtn29.addEventListener("click", function () {
    count29.innerText = n_count29 += 1;
    count29.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item29 = "Fri/13000/" + count29.innerText;

});

rbtn29.addEventListener("click", function () {
    if (n_count29 > 0) {
        count29.innerText = n_count29 -= 1;
    }

    count29.style.display = "inl+ine-block";
    item29 = "Fri/13000/" + count29.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________6___________________
let item31 = ""
let n_count31 = 0
let count31 = document.getElementById("count31");
let rbtn31 = document.getElementById("rbtn31");
let abtn31 = document.getElementById("abtn31");

abtn31.addEventListener("click", function () {
    count31.innerText = n_count31 += 1;
    count31.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item31 = "mayonez/2000/" + count31.innerText;

});

rbtn31.addEventListener("click", function () {
    if (n_count31 > 0) {
        count31.innerText = n_count31 -= 1;
    }

    count31.style.display = "inl+ine-block";
    item31 = "mayonez/2000/" + count31.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________7___________________
let item32 = ""
let n_count32 = 0
let count32 = document.getElementById("count32");
let rbtn32 = document.getElementById("rbtn32");
let abtn32 = document.getElementById("abtn32");

abtn32.addEventListener("click", function () {
    count32.innerText = n_count24 += 1;
    count32.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item32 = "pepsi/15000/" + count32.innerText;

});

rbtn32.addEventListener("click", function () {
    if (n_count32 > 0) {
        count32.innerText = n_count32 -= 1;
    }

    count32.style.display = "inl+ine-block";
    item32 = "pepsi/15000/" + count32.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
//__________________________8___________________
let item33 = ""
let n_count33 = 0
let count33 = document.getElementById("count33");
let rbtn33 = document.getElementById("rbtn33");
let abtn33 = document.getElementById("abtn33");

abtn33.addEventListener("click", function () {
    count33.innerText = n_count33 += 1;
    count33.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item33 = "lipton/6000/" + count33.innerText;

});

rbtn33.addEventListener("click", function () {
    if (n_count33 > 0) {
        count33.innerText = n_count33 -= 1;
    }

    count33.style.display = "inl+ine-block";
    item33 = "lipton/6000/" + count33.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" + item5 + "|" + item7 + "|" + item8 + "|" + item9 + "|" + item10 + "|" + item11 + "|" + item12 + "|" + item13 + "|" + item14 + "|" + item15 + "|" + item16 + "|" + item17 + "|" + item18 + "|"  + item20 + "|" + item21 + "|" + item22 + "|" + item23 + "|" + item24 + "|" + item25 + "|" + item26 + "|" + item27 + "|" + item28 + "|" + item29 +  "|" + item31  +  "|" + item32
    tg.sendData(data);
});