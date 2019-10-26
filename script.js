var spec = '!@$%^&*()_+';
var low = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charLength = prompt("How many characters between 8 - 128?");

if (charLength >= 8, charLength <= 128) {
    var lowChar = confirm("Include lowercase letters?");
    var upChar = confirm("Include uppercase letters?");
    var specChar = confirm("Include special characters?");
    var numChar = confirm("Include numbers?");
}

else {
    var charLength = prompt("How many characters between 8 - 128?");
};

var passwords = document.getElementById("password");
var generate = document.getElementById("btnGen");
var copy = document.getElementById("btnCopy");


generate.addEventListener("click", function(){
    var characters = '';
    lowChar ? characters += low : '';
    upChar ? characters += upp : '';
    specChar ? characters += spec : '';
    numChar ? characters += num : '';
    passwords.value = password(charLength, characters)
});


function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return pwd;
};

function clipBoard() {
    passwords.select();
    document.execCommand("copy");
    alert("Copied to clipboard!")
}

copy.addEventListener("click", clipBoard);