
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

function yesPage() {
     window.location.href = "yes.html";
}

function noPage() {
    window.location.href = "no.html";
 }

      