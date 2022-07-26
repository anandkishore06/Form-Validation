let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;
function validateForm() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "**Required Field";
        flag = 0;
    }
    else if (username.value.length < 6) {
        document.getElementById("userError").innerHTML = "User Name required min 6 character";
        flag = 0;
    }
    else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if (password.value == "") {
        document.getElementById("passError").innerHTML = "**Required Field,Password is Empty !";
        flag = 0;
    }
    else {
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}
