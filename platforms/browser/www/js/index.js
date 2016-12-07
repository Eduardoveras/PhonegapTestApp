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
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });


    $.ajax({
      url: '/js/arrays.json',
      type: 'get',
      dataType: 'json',
      error: function(data){
        console.log(data)
        console.log("ERROR EN AJAX")
      },
      success: function(response){

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
                  $("#exampleTable").append(txt).removeClass("hidden");
              }
          }
         //$('#title').innerHTML=data.toString();


      },
        error: function(request, status, error) {
            console.log("Error status " + status);
            console.log("Error request status text: " + request.statusText);
            console.log("Error request status: " + request.status);
        }
    });

});

