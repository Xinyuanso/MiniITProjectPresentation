
function user()
{
    var confirmPassword = "miniitproject"
    var confirmUsername = "1211100165";
    var confirmUsername2 = "1211100598";
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;

        if (username == confirmUsername || username == confirmUsername2 && password == confirmPassword) {
             window.location="BaseNavigation.html";
        }
        else{
            alert("Username or Password do not match.");
        }
}




