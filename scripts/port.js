window.document.getElementById('back').addEventListener('click', function() {
    window.location = "../index.html";
})

function wordpress(){
    window.open("http://askdrsilva.wordpress.com");
}

window.document.getElementById('pizza').addEventListener('click', function() {
    window.open("https://drsilva-clima-temp.netlify.app/");
})

function contact() {
    alert("Ainda está em desenvolvimento. :)");
}

function showText() {
    var text = document.getElementById("text-git-ap");
    text.style.display = "block";
}

function hideText() {
    var text = document.getElementById("text-git-ap");
    text.style.display = "none";
}

function github(){
    window.open("https://github.com/Darlison1398");
}