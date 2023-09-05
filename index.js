// Buttons 

var CV_link = document.querySelector(".CV_link");
var bogota_link = document.querySelector(".bogota_link");
var rotterdam_link = document.querySelector(".rotterdam_link");
var systems_link = document.querySelector(".systems_link");
var books_link = document.querySelector(".books_link");
var images_link = document.querySelector(".images_link");
var objects_link = document.querySelector(".objects_link");
var verbs_link = document.querySelector(".verbs_link");
var process_link = document.querySelector(".process_link");
var pub_link = document.querySelector(".pub_link")

var close_btn = document.querySelector(".close-btn");
close_btn.addEventListener("click", function(){
    document.querySelector(".CV").style.display = "none"; 
})

////// hide section when clicking ouotside 

var body = document.body;
// body.eddEventListener("click", function(){
//     if (bogota_link.style.display = "inline-block"){
//         bogota_link.style.display = "none";
//     }

//     if (rotterdam_link.style.display = "inline-block"){
//         rotterdam_link.style.display = "none";
//     }

//     systems_link.style.display = "none";
//     books_link.style.display = "none";
//     images_link.style.display = "none";
//     websites_link.style.display = "none";
//     objects_link.style.display = "none";
//     verbs_link.style.display = "none";
//     process_link.style.display = "none";

// })

//// paragraph links 

var pub_e = false;
pub_link.addEventListener("click", function() {
    pub_e = true;
    if (pub_e){
        document.querySelector(".pub-hidden").style.display = "inline-block";
    } 
});

var process_e = false;
process_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    process_e = true;
    if (process_e){
        document.querySelector(".process").style.display = "flex";
        hideExecuted = true;
        setTimeout(hide, 500); 
    } 
});


var cv_e = false;
CV_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    cv_e = true;
    if (cv_e){
        document.querySelector(".CV").style.display = "inline-block";
        hideExecuted = true;
        setTimeout(hide, 500); 
    }
});


var bog_e = false;
bogota_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    bog_e = true;
    if (bog_e){
        document.querySelector(".bogota").style.display = "inline-block";
        hideExecuted = true;
        setTimeout(hide, 500); 
    }

});


var rot_e = false;
rotterdam_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    rot_e = true;
    if(rot_e){
        document.querySelector(".rotterdam").style.display = "inline-block";
        hideExecuted = true;
        setTimeout(hide, 500); 
    } 

});


var sys_e = false;
systems_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    sys_e = true;
    if(sys_e){
        var systems = document.querySelectorAll(".systems");
        for(var i=0; i<systems.length; i++){
            systems[i].style.display = "block";
        }
        hideExecuted = true;
        setTimeout(hide, 500); 
    } 
});


var books_e = false;
books_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    books_e = true;
    if(books_e){
        var books = document.querySelectorAll(".books");
        for(var i=0; i<books.length; i++){
            books[i].style.display = "inline-block";
        }
        hideBookExecuted = true;
        setTimeout(hideBook, 500); 
    }
});

var obj_e = false;
objects_link.addEventListener("click", function() {
    var section = document.querySelectorAll(".section");
    for(var i=0; i<section.length; i++){
        section[i].style.display = "none";
    }

    obj_e = true;
    if(obj_e){
        var objects = document.querySelectorAll(".objects");
        for(var i=0; i<objects.length; i++){
            objects[i].style.display = "inline-block";
        }
        hideExecuted = true;
        setTimeout(hide, 500); 
    } 
});


var hideExecuted = false;
var hideBookExecuted = false;

function hide() {
    if (hideExecuted) {
        document.addEventListener('click', handleClickOutsideBox);
    }
}

function handleClickOutsideBox(event) {
    // console.log('user clicked: ', event.target);
    var section = document.querySelectorAll(".section");
    for (var i = 0; i < section.length; i++) {
        if (!section[i].contains(event.target) && section[i].style.display !== "none") {
            section[i].style.display = 'none'; 
        }
    }
    [pub_e, process_e, web_e, cv_e, bog_e, rot_e, sys_e, books_e, obj_e] = [false, false, false, false, false, false, false, false, false];
    document.removeEventListener('click', handleClickOutsideBox);
}

function hideBook() {
    if (hideBookExecuted) {
        document.addEventListener('click', handleClickOutsideBoxBook);
    }
}

function handleClickOutsideBoxBook(event) {
    console.log('user clicked: ', event.target);
    console.log(event.target.tagName);

    var books = document.querySelectorAll(".books");
    if (event.target.tagName !== "IMG" && event.target.tagName !== "SUMMARY"){
        for (var i = 0; i < books.length; i++) {
            books[i].style.display = 'none';
        } 
    } 
    
    if (event.target.tagName == "IMG"){
        hideBookExecuted = true;
        setTimeout(hideBook, 500); 
    }

    if (event.target.tagName == "SUMMARY"){
        hideBookExecuted = true;
        setTimeout(hideBook, 500); 
    }
    
    [pub_e, process_e, web_e, cv_e, bog_e, rot_e, sys_e, books_e, obj_e] = [false, false, false, false, false, false, false, false, false];
    document.removeEventListener('click', handleClickOutsideBoxBook);
}



/////////////////////////////////////// books //////////////////////////////////////////

//// writing

let event_cure = false;

document.querySelector("#cure_cover").addEventListener("click", function(){
    document.querySelector("#cure_1").style.display = "initial";
    event_cure = false;
});

document.querySelector("#cure_1").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_2").style.display = "initial";
    } else {
        document.querySelector("#cure_1").style.display = "none";

    }
});

document.querySelector("#cure_2").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_3").style.display = "initial";
    } else {
        document.querySelector("#cure_2").style.display = "none";

    }
});

document.querySelector("#cure_3").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_4").style.display = "initial";
    } else {
        document.querySelector("#cure_3").style.display = "none";

    }
});

document.querySelector("#cure_4").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_5").style.display = "initial";
    } else {
        document.querySelector("#cure_4").style.display = "none";

    }
});

document.querySelector("#cure_5").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_6").style.display = "initial";
    } else {
        document.querySelector("#cure_5").style.display = "none";

    }
});

document.querySelector("#cure_6").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_7").style.display = "initial";
    } else {
        document.querySelector("#cure_6").style.display = "none";

    }
});

document.querySelector("#cure_7").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_8").style.display = "initial";
    } else {
        document.querySelector("#cure_7").style.display = "none";

    }
});

document.querySelector("#cure_8").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_9").style.display = "initial";
    } else {
        document.querySelector("#cure_8").style.display = "none";

    }
});

document.querySelector("#cure_9").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_10").style.display = "initial";
    } else {
        document.querySelector("#cure_9").style.display = "none";

    }
});

document.querySelector("#cure_10").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_11").style.display = "initial";
    } else {
        document.querySelector("#cure_10").style.display = "none";

    }
});

document.querySelector("#cure_11").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_12").style.display = "initial";
    } else {
        document.querySelector("#cure_11").style.display = "none";

    }
});

document.querySelector("#cure_12").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_13").style.display = "initial";
    } else {
        document.querySelector("#cure_12").style.display = "none";

    }
});

document.querySelector("#cure_13").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_14").style.display = "initial";
    } else {
        document.querySelector("#cure_13").style.display = "none";

    }
});

document.querySelector("#cure_14").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_15").style.display = "initial";
    } else {
        document.querySelector("#cure_14").style.display = "none";

    }
});

document.querySelector("#cure_15").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_16").style.display = "initial";
    } else {
        document.querySelector("#cure_15").style.display = "none";

    }
});

document.querySelector("#cure_16").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_17").style.display = "initial";
    } else {
        document.querySelector("#cure_16").style.display = "none";

    }
});

document.querySelector("#cure_17").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_18").style.display = "initial";
    } else {
        document.querySelector("#cure_17").style.display = "none";

    }
});

document.querySelector("#cure_18").addEventListener("click", function(){
    if(event_cure == false){
        document.querySelector("#cure_back").style.display = "initial";
    } else {
        document.querySelector("#cure_18").style.display = "none";

    }
});

document.querySelector("#cure_back").addEventListener("click", function(){
    document.querySelector("#cure_back").style.display = "none";
    event_cure = true;
});

//// morph

let event_morph = false;

document.querySelector("#morph_cover").addEventListener("click", function(){
    document.querySelector("#morph_1").style.display = "initial";
    event_morph = false;
});

document.querySelector("#morph_1").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_2").style.display = "initial";
    } else {
        document.querySelector("#morph_1").style.display = "none";

    }
});

document.querySelector("#morph_2").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_3").style.display = "initial";
    } else {
        document.querySelector("#morph_2").style.display = "none";

    }
});

document.querySelector("#morph_3").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_4").style.display = "initial";
    } else {
        document.querySelector("#morph_3").style.display = "none";

    }
});

document.querySelector("#morph_4").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_5").style.display = "initial";
    } else {
        document.querySelector("#morph_4").style.display = "none";

    }
});

document.querySelector("#morph_5").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_6").style.display = "initial";
    } else {
        document.querySelector("#morph_5").style.display = "none";

    }
});

document.querySelector("#morph_6").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_7").style.display = "initial";
    } else {
        document.querySelector("#morph_6").style.display = "none";

    }
});

document.querySelector("#morph_7").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_8").style.display = "initial";
    } else {
        document.querySelector("#morph_7").style.display = "none";

    }
});

document.querySelector("#morph_8").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_9").style.display = "initial";
    } else {
        document.querySelector("#morph_8").style.display = "none";

    }
});

document.querySelector("#morph_9").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_10").style.display = "initial";
    } else {
        document.querySelector("#morph_9").style.display = "none";

    }
});

document.querySelector("#morph_10").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_11").style.display = "initial";
    } else {
        document.querySelector("#morph_10").style.display = "none";

    }
});

document.querySelector("#morph_11").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_12").style.display = "initial";
    } else {
        document.querySelector("#morph_11").style.display = "none";

    }
});

document.querySelector("#morph_12").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_13").style.display = "initial";
    } else {
        document.querySelector("#morph_12").style.display = "none";

    }
});

document.querySelector("#morph_13").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_14").style.display = "initial";
    } else {
        document.querySelector("#morph_13").style.display = "none";

    }
});

document.querySelector("#morph_14").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_15").style.display = "initial";
    } else {
        document.querySelector("#morph_14").style.display = "none";

    }
});

document.querySelector("#morph_15").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_16").style.display = "initial";
    } else {
        document.querySelector("#morph_15").style.display = "none";

    }
});

document.querySelector("#morph_16").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_17").style.display = "initial";
    } else {
        document.querySelector("#morph_16").style.display = "none";

    }
});

document.querySelector("#morph_17").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_18").style.display = "initial";
    } else {
        document.querySelector("#morph_17").style.display = "none";

    }
});

document.querySelector("#morph_18").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_19").style.display = "initial";
    } else {
        document.querySelector("#morph_18").style.display = "none";

    }
});

document.querySelector("#morph_19").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_20").style.display = "initial";
    } else {
        document.querySelector("#morph_19").style.display = "none";

    }
});

document.querySelector("#morph_20").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_21").style.display = "initial";
    } else {
        document.querySelector("#morph_20").style.display = "none";

    }
});

document.querySelector("#morph_21").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_22").style.display = "initial";
    } else {
        document.querySelector("#morph_21").style.display = "none";

    }
});

document.querySelector("#morph_22").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_23").style.display = "initial";
    } else {
        document.querySelector("#morph_22").style.display = "none";

    }
});

document.querySelector("#morph_23").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_24").style.display = "initial";
    } else {
        document.querySelector("#morph_23").style.display = "none";

    }
});

document.querySelector("#morph_24").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_25").style.display = "initial";
    } else {
        document.querySelector("#morph_24").style.display = "none";

    }
});

document.querySelector("#morph_25").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_26").style.display = "initial";
    } else {
        document.querySelector("#morph_25").style.display = "none";

    }
});

document.querySelector("#morph_26").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_27").style.display = "initial";
    } else {
        document.querySelector("#morph_26").style.display = "none";

    }
});

document.querySelector("#morph_27").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_28").style.display = "initial";
    } else {
        document.querySelector("#morph_27").style.display = "none";

    }
});

document.querySelector("#morph_28").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_29").style.display = "initial";
    } else {
        document.querySelector("#morph_28").style.display = "none";

    }
});

document.querySelector("#morph_29").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_30").style.display = "initial";
    } else {
        document.querySelector("#morph_29").style.display = "none";

    }
});

document.querySelector("#morph_30").addEventListener("click", function(){
    if(event_morph == false){
        document.querySelector("#morph_back").style.display = "initial";
    } else {
        document.querySelector("#morph_30").style.display = "none";

    }
});

document.querySelector("#morph_back").addEventListener("click", function(){
    document.querySelector("#morph_back").style.display = "none";
    event_morph = true;
});

// Particulas

let event_particulas = false;

document.querySelector("#particulas_cover").addEventListener("click", function(){
    document.querySelector("#particulas_1").style.display = "initial";
    event_particulas = false;
});

document.querySelector("#particulas_1").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_2").style.display = "initial";
    } else {
        document.querySelector("#particulas_1").style.display = "none";

    }
});

document.querySelector("#particulas_2").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_3").style.display = "initial";
    } else {
        document.querySelector("#particulas_2").style.display = "none";

    }
});

document.querySelector("#particulas_3").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_4").style.display = "initial";
    } else {
        document.querySelector("#particulas_3").style.display = "none";

    }
});

document.querySelector("#particulas_4").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_5").style.display = "initial";
    } else {
        document.querySelector("#particulas_4").style.display = "none";

    }
});

document.querySelector("#particulas_5").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_6").style.display = "initial";
    } else {
        document.querySelector("#particulas_5").style.display = "none";

    }
});

document.querySelector("#particulas_6").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_7").style.display = "initial";
    } else {
        document.querySelector("#particulas_6").style.display = "none";

    }
});

document.querySelector("#particulas_7").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_8").style.display = "initial";
    } else {
        document.querySelector("#particulas_7").style.display = "none";

    }
});

document.querySelector("#particulas_8").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_9").style.display = "initial";
    } else {
        document.querySelector("#particulas_8").style.display = "none";

    }
});

document.querySelector("#particulas_9").addEventListener("click", function(){
    if(event_particulas == false){
        document.querySelector("#particulas_back").style.display = "initial";
    } else {
        document.querySelector("#particulas_9").style.display = "none";

    }
});

document.querySelector("#particulas_back").addEventListener("click", function(){
    document.querySelector("#particulas_back").style.display = "none";
    event_particulas = true;
});

// From-dawn

let event_from = false;

document.querySelector("#from_cover").addEventListener("click", function(){
    document.querySelector("#from_1").style.display = "initial";
    event_from = false;
});

document.querySelector("#from_1").addEventListener("click", function(){
    if(event_from == false){
        document.querySelector("#from_2").style.display = "initial";
    } else {
        document.querySelector("#from_1").style.display = "none";

    }
});

document.querySelector("#from_2").addEventListener("click", function(){
    if(event_from == false){
        document.querySelector("#from_3").style.display = "initial";
    } else {
        document.querySelector("#from_2").style.display = "none";

    }
});

document.querySelector("#from_3").addEventListener("click", function(){
    if(event_from == false){
        document.querySelector("#from_4").style.display = "initial";
    } else {
        document.querySelector("#from_3").style.display = "none";

    }
});

document.querySelector("#from_4").addEventListener("click", function(){
    if(event_from == false){
        document.querySelector("#from_5").style.display = "initial";
    } else {
        document.querySelector("#from_4").style.display = "none";

    }
});

document.querySelector("#from_5").addEventListener("click", function(){
    if(event_from == false){
        document.querySelector("#from_back").style.display = "initial";
    } else {
        document.querySelector("#from_5").style.display = "none";

    }
});

document.querySelector("#from_back").addEventListener("click", function(){
    document.querySelector("#from_back").style.display = "none";
    event_from = true;
});

// Diff

let event_diff = false;

document.querySelector("#diff_cover").addEventListener("click", function(){
    document.querySelector("#diff_1").style.display = "initial";
    event_diff = false;
});

document.querySelector("#diff_1").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_2").style.display = "initial";
    } else {
        document.querySelector("#diff_1").style.display = "none";

    }
});

document.querySelector("#diff_2").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_3").style.display = "initial";
    } else {
        document.querySelector("#diff_2").style.display = "none";

    }
});

document.querySelector("#diff_3").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_4").style.display = "initial";
    } else {
        document.querySelector("#diff_3").style.display = "none";

    }
});

document.querySelector("#diff_4").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_5").style.display = "initial";
    } else {
        document.querySelector("#diff_4").style.display = "none";

    }
});

document.querySelector("#diff_5").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_6").style.display = "initial";
    } else {
        document.querySelector("#diff_5").style.display = "none";

    }
});

document.querySelector("#diff_6").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_7").style.display = "initial";
    } else {
        document.querySelector("#diff_6").style.display = "none";

    }
});

document.querySelector("#diff_7").addEventListener("click", function(){
    if(event_diff == false){
        document.querySelector("#diff_back").style.display = "initial";
    } else {
        document.querySelector("#diff_7").style.display = "none";

    }
});

document.querySelector("#diff_back").addEventListener("click", function(){
    document.querySelector("#diff_back").style.display = "none";
    event_diff = true;
});

// 500


let event_500 = false;

document.querySelector("#cover_500").addEventListener("click", function(){
    document.querySelector("#uno_500").style.display = "initial";
    event_500 = false;
});

document.querySelector("#uno_500").addEventListener("click", function(){
    if(event_500 == false){
        document.querySelector("#dos_500").style.display = "initial";
    } else {
        document.querySelector("#uno_500").style.display = "none";

    }
});

document.querySelector("#dos_500").addEventListener("click", function(){
    if(event_500 == false){
        document.querySelector("#tres_500").style.display = "initial";
    } else {
        document.querySelector("#dos_500").style.display = "none";

    }
});

document.querySelector("#tres_500").addEventListener("click", function(){
    if(event_500 == false){
        document.querySelector("#cuatro_500").style.display = "initial";
    } else {
        document.querySelector("#tres_500").style.display = "none";

    }
});

document.querySelector("#cuatro_500").addEventListener("click", function(){
    if(event_500 == false){
        document.querySelector("#cinco_500").style.display = "initial";
    } else {
        document.querySelector("#cuatro_500").style.display = "none";

    }
});

document.querySelector("#cinco_500").addEventListener("click", function(){
    if(event_500 == false){
        document.querySelector("#backcover_500").style.display = "initial";
    } else {
        document.querySelector("#cinco_500").style.display = "none";

    }
});

document.querySelector("#backcover_500").addEventListener("click", function(){
    document.querySelector("#backcover_500").style.display = "none";
    event_500 = true;
});


//Encuentro

let event_encuentro = false;

document.querySelector("#cover_encuentro").addEventListener("click", function(){
    document.querySelector("#uno_encuentro").style.display = "initial";
    event_encuentro = false;
});

document.querySelector("#uno_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#dos_encuentro").style.display = "initial";
    } else {
        document.querySelector("#uno_encuentro").style.display = "none";
    }
});

document.querySelector("#dos_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#tres_encuentro").style.display = "initial";
    } else {
        document.querySelector("#dos_encuentro").style.display = "none";

    }
});

document.querySelector("#tres_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#cuatro_encuentro").style.display = "initial";
    } else {
        document.querySelector("#tres_encuentro").style.display = "none";
    }
});

document.querySelector("#cuatro_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#cinco_encuentro").style.display = "initial";
    } else {
        document.querySelector("#cuatro_encuentro").style.display = "none";
    }
});

document.querySelector("#cinco_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#seis_encuentro").style.display = "initial";
    } else {
        document.querySelector("#cinco_encuentro").style.display = "none";
    }
});

document.querySelector("#seis_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#siete_encuentro").style.display = "initial";
    } else {
        document.querySelector("#seis_encuentro").style.display = "none";
    }
});

document.querySelector("#seis_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#siete_encuentro").style.display = "initial";
    } else {
        document.querySelector("#seis_encuentro").style.display = "none";
    }
});

document.querySelector("#siete_encuentro").addEventListener("click", function(){
    console.log("7");
    if(event_encuentro == false){
        document.querySelector("#ocho_encuentro").style.display = "initial";
    } else {
        document.querySelector("#siete_encuentro").style.display = "none";
    }
});

document.querySelector("#ocho_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#nueve_encuentro").style.display = "initial";
    } else {
        document.querySelector("#ocho_encuentro").style.display = "none";
    }
});

document.querySelector("#nueve_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#diez_encuentro").style.display = "initial";
    } else {
        document.querySelector("#nueve_encuentro").style.display = "none";
    }
});

document.querySelector("#diez_encuentro").addEventListener("click", function(){
    if(event_encuentro == false){
        document.querySelector("#backcover_encuentro").style.display = "initial";
    } else {
        document.querySelector("#diez_encuentro").style.display = "none";
    }
});


document.querySelector("#backcover_encuentro").addEventListener("click", function(){
    document.querySelector("#backcover_encuentro").style.display = "none";
    event_encuentro = true;
});

// Staring

let event_staring = false;

document.querySelector("#cover_staring").addEventListener("click", function(){
    document.querySelector("#uno_staring").style.display = "initial";
    event_staring = false;
});

document.querySelector("#uno_staring").addEventListener("click", function(){
    if(event_staring == false){
        document.querySelector("#dos_staring").style.display = "initial";
    } else {
        document.querySelector("#uno_staring").style.display = "none";
    }
});

document.querySelector("#dos_staring").addEventListener("click", function(){
    if(event_staring == false){
        document.querySelector("#backcover_staring").style.display = "initial";
    } else {
        document.querySelector("#dos_staring").style.display = "none";
    }
});

document.querySelector("#backcover_staring").addEventListener("click", function(){
    document.querySelector("#backcover_staring").style.display = "none";
    event_staring = true;
});

// libroforma

let event_libro = false;

document.querySelector("#cover_libro").addEventListener("click", function(){
    document.querySelector("#uno_libro").style.display = "initial";
    event_libro = false;
});

document.querySelector("#uno_libro").addEventListener("click", function(){
    if(event_libro == false){
        document.querySelector("#dos_libro").style.display = "initial";
    } else {
        document.querySelector("#uno_libro").style.display = "none";
    }
});

document.querySelector("#dos_libro").addEventListener("click", function(){
    if(event_libro == false){
        document.querySelector("#tres_libro").style.display = "initial";
    } else {
        document.querySelector("#dos_libro").style.display = "none";
    }
});

document.querySelector("#tres_libro").addEventListener("click", function(){
    if(event_libro == false){
        document.querySelector("#cuatro_libro").style.display = "initial";
    } else {
        document.querySelector("#tres_libro").style.display = "none";
    }
});

document.querySelector("#cuatro_libro").addEventListener("click", function(){
    if(event_libro == false){
        document.querySelector("#cinco_libro").style.display = "initial";
    } else {
        document.querySelector("#cuatro_libro").style.display = "none";
    }
});

document.querySelector("#cinco_libro").addEventListener("click", function(){
    if(event_libro == false){
        document.querySelector("#backcover_libro").style.display = "initial";
    } else {
        document.querySelector("#cinco_libro").style.display = "none";
    }
});

document.querySelector("#backcover_libro").addEventListener("click", function(){
    document.querySelector("#backcover_libro").style.display = "none";
    event_libro = true;
});


const verbs = ['observe', 'read' ,'reflect','get lost','write','doddle','speculate','bind','derive','draw','design','converse','question','diffract','publish']

console.log(document.querySelector("#verbs"))

document.querySelector("#verbs").addEventListener("click", function (){
    verb = verbs[Math.floor(Math.random() * verbs.length)];
    document.querySelector("#verbs").innerHTML = `${verb}`
});