var socket = io.connect();
var allVariableConfig = {} ; 
var statusServer = false ; 

$(document).ready(function(){
  $('a#logout').click(function(){
    if(confirm('Are you sure to logout !')) {
        return true;
    }
    return false;
  });
  socket.on('loadAllDataConfig',(data)=>{
    allVariableConfig = data ; 
  })
  // Socket with server 
  socket.on('statusClient',(data)=>{
    $('#messageStatusClient').html(data.message).css('color', data.color) ;
    $('#spinnerModal').modal('hide') ; 
    if(data.color === 'red'){
      $('#statusClient').html('<i class="fas fa-times"> </i> No Connection').css('color', 'red') ; 
    }else{
      if(data.message === "Client has been connected to Server"){
        $('#statusClient').html('<i class="fas fa-check-circle"></i> Connected').css('color', 'green') ;
      }else{
        $('#statusClient').html('<i class="fas fa-times"> </i> No Connection').css('color', 'red') ; 
      }
    }
  }) 
  socket.on('loadStatus',(data)=>{
    $('#statusClient').html('<i class="fas fa-check-circle" ></i> Connected').css('color', 'green') ;
    $('#endpoint').html(data.endpoint) ; 
    statusServer = true ; 
  })
  socket.on('alertEmail',(data)=>{
    $('#spinnerModal').modal('hide')
    alert(data) ; 
  })
  socket.on('failConnection', (data)=>{
    $('#statusClient').html('<i class="fas fa-times"> </i> No Connection').css('color', 'red') ; 
    alert('Fail connection to Server')
  })
})

// function connect to opc ua
function AuthenticationSetting() {
  if ($("#anonymous").prop("checked")) {
    $("#usernameUser").prop("disabled", true);
    $("#passwordUser").prop("disabled", true);
    $("#authenticationUser").prop("disabled", true);
  } else {
    $("#usernameUser").prop("disabled", false);
    $("#passwordUser").prop("disabled", false);
    $("#authenticationUser").prop("disabled", false);
  }
}
function DisableAnonymous() {
  if ($("#authenticationUser").prop("checked")) {
    $("#anonymous").prop("disabled", true);
  } else {
    $("#anonymous").prop("disabled", false);
  }
}
function disable1() { 
  if ($("#securityModeNone").prop("checked")) {
    $("#securityModeSign").prop("disabled", true);
    $("#securityModeSignEncrypt").prop("disabled", true);
  } else {
    $("#securityModeSign").prop("disabled", false);
    $("#securityModeSignEncrypt").prop("disabled", false);
  }
 }
function disable2(){
  if ($("#securityModeSign").prop("checked")) {
    $("#securityModeNone").prop("disabled", true);
    $("#securityModeSignEncrypt").prop("disabled", true);
  } else {
    $("#securityModeNone").prop("disabled", false);
    $("#securityModeSignEncrypt").prop("disabled", false);
  }
}
function disable3(){
  if ($("#securityModeSignEncrypt").prop("checked")) {
    $("#securityModeNone").prop("disabled", true);
    $("#securityModeSign").prop("disabled", true);
  } else {
    $("#securityModeNone").prop("disabled", false);
    $("#securityModeSign").prop("disabled", false);
  }
}
function disable4(){
  if ($("#securityPoliciesNone").prop("checked")) {
    $("#securityPoliciesBasic128Rsa15").prop("disabled", true);
    $("#securityPoliciesBasic256").prop("disabled", true);
    $("#securityPoliciesBasic256Sha256").prop("disabled", true);
  } else {
    $("#securityPoliciesBasic128Rsa15").prop("disabled", false);
    $("#securityPoliciesBasic256").prop("disabled", false);
    $("#securityPoliciesBasic256Sha256").prop("disabled", false);
  }
}
function disable5(){
  if ($("#securityPoliciesBasic128Rsa15").prop("checked")) {
    $("#securityPoliciesNone").prop("disabled", true);
    $("#securityPoliciesBasic256").prop("disabled", true);
    $("#securityPoliciesBasic256Sha256").prop("disabled", true);
  } else {
    $("#securityPoliciesNone").prop("disabled", false);
    $("#securityPoliciesBasic256").prop("disabled", false);
    $("#securityPoliciesBasic256Sha256").prop("disabled", false);
  }
}
function disable6(){
  if ($("#securityPoliciesBasic256").prop("checked")) {
    $("#securityPoliciesBasic128Rsa15").prop("disabled", true);
    $("#securityPoliciesNone").prop("disabled", true);
    $("#securityPoliciesBasic256Sha256").prop("disabled", true);
  } else {
    $("#securityPoliciesBasic128Rsa15").prop("disabled", false);
    $("#securityPoliciesNone").prop("disabled", false);
    $("#securityPoliciesBasic256Sha256").prop("disabled", false);
  }
}
function disable7(){
  if ($("#securityPoliciesBasic256Sha256").prop("checked")) {
    $("#securityPoliciesBasic128Rsa15").prop("disabled", true);
    $("#securityPoliciesBasic256").prop("disabled", true);
    $("#securityPoliciesNone").prop("disabled", true);
  } else {
    $("#securityPoliciesNone").prop("disabled", false);
    $("#securityPoliciesBasic256").prop("disabled", false);
    $("#securityPoliciesBasic128Rsa15").prop("disabled", false);
  }
}

// Toastify({
//     text: "This is a toast",
//     duration: 3000, 
//     destination: "https://github.com/apvarun/toastify-js",
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: 'right', // `left`, `center` or `right`
//     backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     onClick: function(){} , // Callback after click
//     duration: 3000
//   }).showToast();

function Toast(colorFrom , colorEnd , message){
  Toastify({
    text: message,
    duration: 3000, 
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    backgroundColor: `linear-gradient(to right, ${colorFrom}, ${colorEnd} )`,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} , // Callback after click
    duration: 3000
  }).showToast();
}

// create array options for client connect to server
var options = {} ; 
function applyConnect() {
  var checkValidation = {feild0: false,feild1: false ,feild2: false  , feild3: false , feild4: false }
  if($("#addressOfServer").val() === ""){
    Toast('red' ,'#f06d06' , 'Please fill out Address field !') 
    checkValidation.feild0 = true ; 
  }
  if($("#portOfServer").val() === ""){
    Toast('red' ,'#f06d06' , 'Please fill out port field !') 
    checkValidation.feild1 = true ; 
  }
  if(!$("#securityModeNone").prop("checked") && 
  !$("#securityModeSign").prop("checked") && !$("#securityModeSignEncrypt").prop("checked")){
    Toast('red' ,'#f06d06' , 'You must check at least one checkbox in securityModes field!')
    checkValidation.feild2 = true ; 
  }
  if(!$("#securityPoliciesNone").prop("checked") && !$("#securityPoliciesBasic128Rsa15").prop("checked")
   && !$("#securityPoliciesBasic256").prop("checked") && !$("#securityPoliciesBasic256Sha256").prop("checked")){
    Toast('red' ,'#f06d06' , 'You must check at least one checkbox in securityPolicies field!')
    checkValidation.feild3 = true ; 
  }
  if(!$("#anonymous").prop("checked") && !$("#authenticationUser").prop("checked")){
    Toast('red' ,'#f06d06' , 'You must check 1 of 2 checkbox in authentication field!')
    checkValidation.feild4 = true ; 
  }

  if(checkValidation.feild0 === false &&
    checkValidation.feild1 === false &&
    checkValidation.feild2 === false &&
    checkValidation.feild3 === false &&
    checkValidation.feild4 === false)
  {
  if(!statusServer){

    $('#spinnerModal').modal('show') ;
    if($("#pathOfServer").val() !== ''){
      options.endpoint = "opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val()
    + "/" + $("#pathOfServer").val() ; 
    }else{
      options.endpoint = "opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val(); 
    }
    if ($("#securityModeNone").prop("checked")) {
      options.securityMode = "opcua.MessageSecurityMode.None";
    }
    if ($("#securityModeSign").prop("checked")) {
      options.securityMode = "opcua.MessageSecurityMode.Sign";
    }
    if ($("#securityModeSignEncrypt").prop("checked")) {
      options.securityMode = "opcua.MessageSecurityMode.SignAndEncrypt";
    }
  
    if ($("#securityPoliciesNone").prop("checked")) {
      options.securityPolicy = "opcua.SecurityPolicy.None" ;
    }
    if ($("#securityPoliciesBasic128Rsa15").prop("checked")) {
      options.securityPolicy = "opcua.SecurityPolicy.Basic128Rsa15" ;
    }
    if ($("#securityPoliciesBasic256").prop("checked")) {
      options.securityPolicy = "opcua.SecurityPolicy.Basic256";
    }
    if ($("#securityPoliciesBasic256Sha256").prop("checked")) {
      options.securityPolicy = "opcua.SecurityPolicy.Basic256Sha256";
    }
    if ($("#anonymous").prop("checked")) {
      options.allowAnonymous = true;
    }
    if ($("#authenticationUser").prop("checked")) {
      options.allowAnonymous = false;
      options.user = $("#usernameUser").val();
      options.password = $("#passwordUser").val();
    }
    setTimeout(() => {
      socket.emit("optionsOPC", options);
    },1000);
  }else{
    $('#spinnerModal').modal('show') ;
    setTimeout(() => {
      $('#spinnerModal').modal('hide') ;
      $('#messageStatusClient').html('It seem Client has been connected to Server').css('color','red') ;
    },1000);
  }

 }
}
function Disconnect(){
  $('#spinnerModal').modal('show') ;
  setTimeout(() => {
  socket.emit('disConnectToServer', 'ok') ; 
  }, 1000);
}
function changeAddress(){
    $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val())
}
function changePort(){
  $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val())
}
function changePath(){
  if($("#pathOfServer").val() === ""){
    $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val())
  }
  else{
    $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val() + "/" + $("#pathOfServer").val())
  }
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          event.preventDefault();
          event.stopPropagation();
          $('#spinnerModal').modal('show') ; 
          var informationEmail = {
          name: $('#name').val() , 
          email: $('#email').val() , 
          comments: $('#comments').val(), 
            }
          socket.emit('receiveEmail' , informationEmail)
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// get time and color 
function getTime(data){
  let today = data;
  let date = today.getFullYear() + "-" +  (today.getMonth() + 1) + "-" + today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return dateTime = date + " " + time;
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 // Get Feather
 feather.replace();