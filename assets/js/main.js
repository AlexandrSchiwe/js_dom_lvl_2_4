// console.log("works");

// let selection = document.getElementById('farbeAuswahlen');
// // let colors = document.getElementsByTagName('option').value;
// // console.log(colors[0].value);
// let colors = document.getElementsByTagName('option');
// // console.log(colors[0].value);
// // console.log(colors[3].value);


// colors.addEventListener("click", (selection) => {

//     if (colors[0].value) {
//         console.log("Hallo");
//     } else if (colors[1].value) {
//         console.log("Farbe 2");
//     }
// })

// selection.addEventListener("click", (colors) => {

//     switch (colors.value) {
//         case colors[0].value:
//             console.log("Hallo");
//     }

// })


// console.log("works");

// const selection = document.getElementById('farbeAuswahlen').value;

// let colors = document.getElementsByTagName('option');
// console.log(colors[0].value);
// console.log(colors[3].value);

// // console.log(colors);
// // let orchid = document.getElementById('1');

// selection.addEventListener("click", (e) => {

//     switch (e.value) {
//         case colors[0].value:
//             console.log("Medium Orchid");
//             break;
//     }
// })

// Funktioniert alles nicht.

// JS DOM LVL 2.4

// let selection = document.getElementById('farbeAuswahlen').value;
// console.log(selection);

// let colors = document.getElementsByTagName('option');
// console.log(colors[3].value);

// document.getElementsById('farbeAuswahlen').addEventListener("click", () => {
//     if (colors.value === colors[0].value) {
//         console.log("medium Orchid")
//     } else if (colors.value === colors[1].value) {
//         console.log("Mint Cream");
//     }
// })

// Nächster Versuch

let selection = document.getElementsByTagName('select');
console.log(selection);

document.getElementById('button').addEventListener("click", () => {
    // console.log("button works");
    // let selection = document.getElementsByTagName('option');
    // // console.log(selection[2].value);
    event.preventDefault();
    // if (selection[0].value === "Medium Orchid") {
    //     // console.log("medium Orchid");
    //     document.body.style.backgroundColor = "#BA55D3";
    // } else if (selection[1].value) {
    //     console.log("mintcream");
    document.body.style.backgroundColor = selection[0].value.toLowerCase().replace(" ", "");
    // }
    // console.log(selection[0].value.toLowerCase().replace(" ", ""));
});





