// Funtion Chart
//inline_1
var socket = io.connect();
FusionCharts.ready(function () {
    var fusioncharts1 = new FusionCharts({
        "type": "cylinder",
        "dataFormat": "json",
        "id": "fuelMeter1",
        "renderAt": "chart-container1",
        "width": "240",
        "height": "280",
        "dataSource": {
            "chart": {
                "theme": "carbon",
                "caption": "Bể Chứa",
                //"subcaption": "at my Home",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " lit",
                "showValue": "10",
                "chartBottomMargin": "25",
                "bgColor": "#0000" ,

                "majorTMColor": "#1aaf5d",
                "majorTMAlpha": "100",
                "majorTMHeight": "10",
                "majorTMThickness": "2",
                "minorTMColor": "red",
                "minorTMAlpha": "100",
                "minorTMHeight": "7",
                "minorTMThickness": "1",
                "tickmarkDistance": "5"
            },
            "value": "10"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                setInterval(function () {
                    socket.on('Read', function(data){
                       evtObj.sender.feedData("&value=" + data.data);	  
                    }) ;  
                }, 100);
            }
        }
    });
    fusioncharts1.render();
}) ;  
//inline_2
// Funtion Chart
FusionCharts.ready(function () {
    var fusioncharts2 = new FusionCharts({
        "type": "cylinder",
        "dataFormat": "json",
        "id": "fuelMeter2",
        "renderAt": "chart-container2",
        "width": "320",
        "height": "280",
        "dataSource": {
            "chart": {
                "theme": "carbon",
                "caption": "Bể Cân Bằng",
                //"subcaption": "at my Home",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " lit",
                "showValue": "10",
                "chartBottomMargin": "25",
                "bgColor": "#0000",

                "majorTMColor": "#1aaf5d",
                "majorTMAlpha": "100",
                "majorTMHeight": "10",
                "majorTMThickness": "2",
                "minorTMColor": "blue",
                "minorTMAlpha": "100",
                "minorTMHeight": "7",
                "minorTMThickness": "1",
                "tickmarkDistance": "5"
            },
            "value": "10"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                setInterval(function () {
                    socket.on('Read', function(data){
                       evtObj.sender.feedData("&value=" + data.data);	  
                    }) ;  
                }, 100);
            }
        }
    });
    fusioncharts2.render();
}) ;  
//inline_3
// Funtion Chart
FusionCharts.ready(function () {
    var fusioncharts3 = new FusionCharts({
        "type": "cylinder",
        "dataFormat": "json",
        "id": "fuelMeter3",
        "renderAt": "chart-container3",
        "width": "550",
        "height": "330",
        "dataSource": {
            "chart": {
                "theme": "ocean",
                "caption": "Bể Trung Hòa",
                //"subcaption": "at my Home",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " lit",
                "showValue": "10",
                "chartBottomMargin": "25",
                "bgColor": "#0000" ,

                "majorTMColor": "#1aaf5d",
                "majorTMAlpha": "100",
                "majorTMHeight": "10",
                "majorTMThickness": "2",
                "minorTMColor": "yelow",
                "minorTMAlpha": "100",
                "minorTMHeight": "7",
                "minorTMThickness": "1",
                "tickmarkDistance": "5"
            },
            "value": "10"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                setInterval(function () {
                    socket.on('Read', function(data){
                       evtObj.sender.feedData("&value=" + data.data);	  
                    }) ;  
                }, 100);
            }
        }
    });
    fusioncharts3.render();
}) ;  

//inline_4
// Funtion Chart
FusionCharts.ready(function () {
    var fusioncharts4 = new FusionCharts({
        "type": "cylinder",
        "dataFormat": "json",
        "id": "fuelMeter4",
        "renderAt": "chart-container4",
        "width": "300",
        "height": "330",
        "dataSource": {
            "chart": {
                "theme": "fint",
                "caption": "Bể Tạm",
                //"subcaption": "at my Home",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " lit",
                "showValue": "10",
                "chartBottomMargin": "25",
                "bgColor": "#0000",

                "majorTMColor": "#1aaf5d",
                "majorTMAlpha": "100",
                "majorTMHeight": "10",
                "majorTMThickness": "2",
                "minorTMColor": "#F80000",
                "minorTMAlpha": "100",
                "minorTMHeight": "7",
                "minorTMThickness": "1",
                "tickmarkDistance": "5"
            },
            "value": "10"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                setInterval(function () {
                    socket.on('Read', function(data){
                       evtObj.sender.feedData("&value=" + data.data);	  
                    }) ;  
                }, 100);
            }
        }
    });
    fusioncharts4.render();
}) ; 

//inline_5
// Funtion Chart
FusionCharts.ready(function () {
    var fusioncharts5 = new FusionCharts({
        "type": "cylinder",
        "dataFormat": "json",
        "id": "fuelMeter5",
        "renderAt": "chart-container5",
        "width": "300",
        "height": "290",
        "dataSource": {
            "chart": {
                "theme": "fint",
                "caption": "Bể Hiếu Khí",
                //"subcaption": "at my Home",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": " lit",
                "showValue": "10",
                "chartBottomMargin": "25" ,
                "bgColor": "#0000" ,

                "majorTMColor": "#1aaf5d",
                "majorTMAlpha": "100",
                "majorTMHeight": "10",
                "majorTMThickness": "2",
                "minorTMColor": "#6431ED",
                "minorTMAlpha": "100",
                "minorTMHeight": "7",
                "minorTMThickness": "1",
                "tickmarkDistance": "5"
            },
            "value": "10"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                setInterval(function () {
                    socket.on('Read', function(data){
                       evtObj.sender.feedData("&value=" + data.data);	  
                    }) ;  
                }, 100);
            }
        }
    });
    fusioncharts5.render();
}) ; 
