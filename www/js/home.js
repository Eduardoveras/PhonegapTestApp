/**
 * Created by ernesto on 08/12/16.
 */


$(document).ready(function() {

    console.log("Aqui funciona");
    var email = window.localStorage.getItem("email");
    var url = "http://amazon-platano.herokuapp.com/rest/transactions?email=" + email ;

    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function(response){
            console.log(response);

            var len = response.length;
            var data = response;
            var txt = "";
            if(len > 0) {
                for (var i = 0; i < len; i++) {
                    txt += "<tr>";

                    txt += "<td>" + data[i].fiscalCode + "</td>" + "<td>" + data[i].user.firstName + "</td>" +
                        "<td>" + data[i].user.lastName + "</td>" + "<td>" + data[i].total + "</td>" +
                        "<td>" + data[i].status + "</td>" ;

                    txt += "</tr>"
                }
                if (txt != "") {
                    $("#exampleTable").append(txt);
                }
            }


        },
        error: function(request, status, error) {
            alert("Error");
            console.log("Error status " + status);
        }
    });
});