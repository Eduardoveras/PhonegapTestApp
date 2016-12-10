/**
 * Created by ernesto on 08/12/16.
 */


$(document).ready(function() {
    $("#login").click(function(){

        var email=$("#email").val();
        var password=$("#password").val();

        if($.trim(email).length>0 & $.trim(password).length>0)
        {
            $.ajax({
                type: "GET",
                    url: "https://localhost:8080/rest/login",
                data: {email: email, password: password},
                success: function(data){
                    console.log(data);
                }
            });
        }return false;
    });

});