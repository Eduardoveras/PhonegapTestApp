/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


$(document).ready(function() {

    $(document).ready(function() {
        $("#login").click(function(){

            var email=$("#email").val();
            var password=$("#password").val();//ev@gmail.com
            var url = "http://amazon-platano.herokuapp.com/rest/login?email=" + email + "&password=" + password;

            if($.trim(email).length>0 & $.trim(password).length>0)
            {

                /*

                var req = createRequest(); // defined above
                // Create the callback:
                req.onreadystatechange = function() {
                    if (req.readyState != 4) return; // Not there yet
                    if (req.status != 200) {
                        // Handle request failure here...
                        return;
                    }
                    // Request successful, read the response
                    var resp = req.responseText;


                    req.open("GET",url , true);
                    req.send();
                }*/
                $.ajax({
                    url:url
                }).then(function(data) {
                    console.log(data);
                });
            }

        });

    });


    $.ajax({
        url: '/js/arrays.json',
        type: 'get',
        dataType: 'json',
        success: function(response){
            console.log(response);

            var len = response.data.length;
            var data = response.data;
            var txt = "";
            if(len > 0) {
                for (var i = 0; i < len; i++) {
                    txt += "<tr>"

                    for(var j = 0 ; j < 6 ;j++)
                    {
                        txt += "<td>" + data[i][j]+ "</td>";
                    }
                    txt += "</tr>"
                }
                if (txt != "") {
                    $("#exampleTable").append(txt);
                }
            }
            //$('#title').innerHTML=data.toString();


        },
        error: function(request, status, error) {
            alert("Error");
            console.log("Error status " + status);
        }
    });

});




$(document).ready(function() {
    $("#login").click(function(){

        var email=$("#email").val();
        var password=$("#password").val();

        $.ajax({
            dataType: 'jsonp',
            url: "http://amazon-platano.herokuapp.com/rest/login?email="+email+"&password="+password
        }).then(function(data) {
            console.log(data);
        });



    });

});