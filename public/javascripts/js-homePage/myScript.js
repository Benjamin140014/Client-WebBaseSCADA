/* globals Chart:false, feather:false */
// io socket client
var data_change;
var socket = io.connect();

var allVariableConfig = {}
socket.on('loadAllDataConfig',(data)=>{
    allVariableConfig = data ; 
    
})


$(document).ready(function() {
  
    // Create chartContainer
    var mycharts = document.getElementById("chartContainer");
    var dps1 = [];
    var dps2 = [];
    var chart = new CanvasJS.Chart(mycharts, {
      zoomEnabled: true,
      title: {
        text: "Chart"
      },
      axisY: {
        includeZero: false,
        title: "Number of Viewers",
        suffix: "Don Vi"
      },
      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        fontSize: 22,
        fontColor: "dimGrey",
        itemclick: toggleDataSeries
      },
      data: [
        {
          type: "spline",
          showInLegend: true,
          name: "Line 1",
          markerSize: 0,
          dataPoints: dps1
        },
        {
          type: "spline",
          showInLegend: true,
          name: "Line 2",
          markerSize: 0,
          dataPoints: dps2
        }
      ]
    });
    var yVal = 100;
    var updateInterval = 1000;
    var dataLength = 10; // number of dataPoints visible at any point
    var updateChart = function() {
      var xVal = new Date();
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      dps1.push({
        x: xVal,
        y: yVal
      });
      var xVal1 = xVal + 1;
      var yVal1 = yVal - 1;
      dps2.push({
        x: xVal,
        y: yVal1
      });

      if (dps1.length > dataLength) {
        dps1.shift();
      }
      if (dps2.length > dataLength) {
        dps2.shift();
      }
      chart.options.data[0].legendText = " Line 1 Value : " + yVal;
      chart.options.data[1].legendText = " Line 2 Value :  " + yVal1;
      chart.render();
    };
    updateChart(dataLength);
    setInterval(function() {
      updateChart();
    }, updateInterval);

    // Get Feather
    feather.replace();
 

  var intervalAddData = setInterval(() => {
    myFunction();
  }, 5000);

  var chartdiv = document.getElementById("chartdiv1");
  am4core.ready(function() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // create chart
    var chart = am4core.create(chartdiv, am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.innerRadius = -25;

    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    axis.renderer.grid.template.strokeOpacity = 0.3;

    var colorSet = new am4core.ColorSet();

    var range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(0);
    range0.axisFill.zIndex = -1;

    var range1 = axis.axisRanges.create();
    range1.value = 50;
    range1.endValue = 80;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(2);
    range1.axisFill.zIndex = -1;

    var range2 = axis.axisRanges.create();
    range2.value = 80;
    range2.endValue = 100;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = colorSet.getIndex(10);
    range2.axisFill.zIndex = -1;

    var hand = chart.hands.push(new am4charts.ClockHand());

    // using chart.setTimeout method as the timeout will be disposed together with a chart
    chart.setTimeout(randomValue, 2000);

    function randomValue() {
      hand.showValue(data_change.data , 1000, am4core.ease.cubicOut);
      chart.setTimeout(randomValue, 2000);
    }
  });

  // // Chart div google
  // google.charts.load("current", { packages: ["corechart", "gauge"] });
  // google.charts.setOnLoadCallback(drawChart1);
  // function drawChart1() {
  //   var data = google.visualization.arrayToDataTable([
  //     ["Label", "Value"],
  //     ["Memory", 80]
  //   ]);
  //   var options = {
  //     title: "Random",
  //     width: 200,
  //     height: 200,
  //     redFrom: 90,
  //     redTo: 100,
  //     yellowFrom: 75,
  //     yellowTo: 90,
  //     minorTicks: 5
  //   };
  //   var chart = new google.visualization.Gauge(
  //     document.getElementById("chartdiv2")
  //   );
  //   chart.draw(data, options);
  //   setInterval(function() {
  //     data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
  //     chart.draw(data, options);
  //   }, 1300);
  // }
  // google.charts.setOnLoadCallback(drawChart2);
  // // Draw the chart and set the chart values
  // function drawChart2() {
  //   var data = google.visualization.arrayToDataTable([
  //     ["Variable", "Value"],
  //     ["Variable_1", 8],
  //     ["Varicable_2", 2],
  //     ["Variable_3", 4],
  //     ["Variable_4", 2],
  //     ["Variable_5", 8]
  //   ]);
  //   // Optional; add a title and set the width and height of the chart
  //   var options = { title: "Chart Simulation", width: 300, height: 300 };
  //   // Display the chart inside the <div> element with id="piechart"
  //   var chart = new google.visualization.PieChart(
  //     document.getElementById("piechart")
  //   );
  //   chart.draw(data, options);
  // }
 
});


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



function WriteValue() {
  console.log('ok')
  socket.emit("Write_msg", parseInt($("#msg_write").val()));
}
socket.on("Read_msg", function(data) {
  $("#msg_read").html('value of variable is :' +data);
});
socket.on("Read", function(data) {
  console.log(allVariableConfig) ; 
  for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){
    if(allVariableConfig.nameVariable[i].name === 'random'){
      data_change = data[i];
      var x = document.querySelectorAll("#read");
      for (var j = 0; j < x.length; j++) {
      x[j].innerHTML = data[i].data;
     }
    }
  } 
});

// Add variable in table
function myFunction() {
  if (data_change !== undefined) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = data_change._id;
    cell2.innerHTML = data_change.data;
    cell3.innerHTML = new Date(data_change.date);
    cell4.innerHTML =
      "<button type='button'" +
      "onclick= 'productDelete(this) ;' " +
      "class='btn btn-secondary'>" +
      "Delete" +
      "</button>";

    if (table.rows.length > 5) {
      table.deleteRow(table.rows.length - 1);
    }
  }
}
function productDelete(ctl) {
  $(ctl)
    .parents("tr")
    .remove();
}

function toggleDataSeries(e) {
  if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else {
    e.dataSeries.visible = true;
  }
  chart.render();
}
function findData() {
  var start = new Date($("#starttime").val());
  var stop = new Date($("#endtime").val());
  var dataarr = [start, stop];
  socket.emit("findData", dataarr);
}
socket.on("resultFindData", function(data) {
  for (var i = 0; i < data.length; i++) {
    var table = document.getElementById("resultfindDataTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = data[i]._id;
    cell2.innerHTML = data[i].data;
    cell3.innerHTML = new Date(data[i].date);
  }
});
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