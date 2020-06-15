var socket = io.connect();
var allVariableConfig = {}
socket.on('loadAllDataConfig',(data)=>{
    allVariableConfig = data ; 
    
})
// Socket with server 
 socket.on('statusClient',(data)=>{
  $('#btnConnect').html('Connect').removeClass('disabled') ;
  $('#btnDisconnect').html('Disconnect').removeClass('disabled') ;
  $('#messageStatusClient').html(data.message).css('color', data.color) ;
  if(data.color === 'red'){
    $('#statusClient').html('<i class="fas fa-times"> </i> No Connection').css('color', 'red') ; 
  }else{
    if(data.message === "Client has been connected to Server"){
      $('#statusClient').html('<i class="fas fa-check-circle"></i> Connected').css('color', 'green') ;
    }else{
      $('#statusClient').html('<i class="fas fa-times"> </i> No Connection').css('color', 'red') ; 
    }
  }
}) ; 

socket.on('loadStatus',(data)=>{
  $('#statusClient').html('<i class="fas fa-check-circle" ></i> Connected').css('color', 'green') ;
   $('#endpoint').html(data.endpoint) ; 
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

// create array options for client connect to server
var options = {} ; 
function applyConnect() {
  $('#btnConnect').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Connecting...').addClass('disabled')
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
  socket.emit("optionsOPC", options);
}
function Disconnect(){
  $('#btnDisconnect').html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Disconnecting...').addClass('disabled')
  setTimeout(() => {
    socket.emit('disConnectToServer', 'ok') ; 
    console.log('ok')
  }, 1000);
  
}
function changeAddress(){
    $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val())
}
function changePort(){
  $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val())
}
function changePath(){
  $('#endpoint').html("opc.tcp://" + $('#addressOfServer').val() + ":" + $("#portOfServer").val() + "/" + $("#pathOfServer").val())
}



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