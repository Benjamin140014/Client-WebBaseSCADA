
//inline_1
var socket = io.connect();
var allVariableConfig = {}
socket.on('loadAllDataConfig',(data)=>{
    allVariableConfig = data ; 
}) ;
// read all Data 
var pump1 = {pump1_1: false , pump1_2: false} ; 
var pump2 = {pump2_1: false , pump2_2: false} ; 
var pump3 = {pump3_1: false , pump3_2: false} ; 
var pump4 = {pump4_1: false , pump4_2: false} ; 
var pump5 = {pump5_1: false , pump5_2: false} ; 
var stateKK = {state: false} ;
var stateEmergency = false ; 
var toggleWarning , toggleOverload1 ,toggleOverload2 , toggleOverload3 
,toggleOverload4 , toggleOverload5 ,toggleOverloadTH , toggleOverloadMix ,toggleOverloadBun, toggleOverloadGatBun 
,toggleErrorPump1_1 , toggleErrorPump1_2 ,toggleErrorPump2_1 , toggleErrorPump2_2 ,toggleErrorPump3_1, toggleErrorPump3_2 
,toggleErrorPump4_1 , toggleErrorPump4_2 ,toggleErrorPump5_1 , toggleErrorPump5_2 ,toggleErrorTH, toggleErrorBun ,
toggleErrorGatBun ,toggleErrorValve_1  , toggleErrorValve_2, toggleErrorValve_3, toggleErrorValve_4, toggleErrorValve_5 , 
toggleErrorValve_6  ; 
var sttRowAlarm = 0 ; 
var arrayAlarm = [] ; 
var stateAlarm = {H1: false ,L1: false , H2: false , L2: false , H3: false , L3: false , H5: false , L5: false} ;


function ObjectAlarm(Source ,Value , Message , State ){
    this.Date = getTime(new Date()).date ;
    this.Time = getTime(new Date()).time ; 
    this.Source = Source ; 
    this.Type = "Analog"
    this.Message = Message ;
    this.Value = Value ; 
    this.State = State ;
}

$(document).ready(function(){
    socket.on('loadAlarmAck',(data)=>{
        sttRowAlarm = data.length ; 
        for(let i =0 ; i < data.length ; i++){
        var table = document.getElementById("tableAlarm");
        var row = table.insertRow(0);
        row.style.color = 'aliceblue' ; 
        var cellstt = row.insertCell(0);
        cellstt.id = `circle-State${i}`; 
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        cell7.id = `stateAck${i}`; 
        cell1.innerHTML = data[i].Date ;
        cell2.innerHTML = data[i].Time ;
        cell3.innerHTML = data[i].Source;
        cell4.innerHTML = data[i].Value ;
        cell5.innerHTML = data[i].Message ;
        cell6.innerHTML = data[i].Type;
        cell7.innerHTML = data[i].State ;
        $(`#circle-State${i}`).html(`<div class = "status-circle" style = "width: 20px ; height: 20px ; border-radius: 50%;
        background-color: green;">  </div>`) ;
       }

    })
    
    socket.on('changeData' , (data)=>{
        var t0 = performance.now() ; 
        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
            // sensor be chua
            if(allVariableConfig.nameVariable[i].name === 'H6'){
                    if(data[i].data === 'true'){
                        $("#sensorBeChua").attr("src",'images/symbols/Light/Light_008.png');
                    }else{
                        $("#sensorBeChua").attr("src",'images/symbols/Light/Light_007.png');
                    }   
             }
             //pipe before pump1_1 and pump1_2
             if(allVariableConfig.nameVariable[i].name === 'Pump1_1_Run'){
                if(data[i].data === 'true'){
                    pump1.pump1_1 = true
                    $("#pipe_7").attr("src",'images/symbols/Pipes/Pipes_013.png');
                    $('#pump1_1').attr("src",'images/symbols/Pump/Pump_013.png') ;
                    $("#pipe_8").attr("src",'images/symbols/Pipes/Pipes_053.png');
                    $("#pipe_10").attr("src",'images/symbols/Pipes/Pipes_018.png');
                }else{
                    pump1.pump1_1 = false
                    $("#pipe_7").attr("src",'images/symbols/Pipes/Pipes_012.png');
                    $('#pump1_1').attr("src",'images/symbols/Pump/Pump_012.png') ;
                    $("#pipe_8").attr("src",'images/symbols/Pipes/Pipes_052.png');
                    $("#pipe_10").attr("src",'images/symbols/Pipes/Pipes_017.png');
                }
             }
             if(allVariableConfig.nameVariable[i].name === 'Pump1_2_Run'){
                if(data[i].data === 'true'){
                    pump1.pump1_2 = true
                    $("#pipe_6").attr("src",'images/symbols/Pipes/Pipes_003.png');
                    $('#pump1_2').attr("src",'images/symbols/Pump/Pump_013.png') ;
                    $("#pipe_9").attr("src",'images/symbols/Pipes/Pipes_053.png');
                    $("#pipe_11").attr("src",'images/symbols/Pipes/Pipes_008.png');        
                }else{
                    pump1.pump1_2 = false
                    $("#pipe_6").attr("src",'images/symbols/Pipes/Pipes_002.png');
                    $('#pump1_2').attr("src",'images/symbols/Pump/Pump_012.png') ;
                    $("#pipe_9").attr("src",'images/symbols/Pipes/Pipes_052.png');
                    $("#pipe_11").attr("src",'images/symbols/Pipes/Pipes_007.png');
                }
            }
            if( pump1.pump1_1 === true ||  pump1.pump1_2 === true ){
                $("#pipe_3").attr("src",'images/symbols/Pipes/Pipes_098.png');
                $("#pipe_4").attr("src",'images/symbols/Pipes/Pipes_013.png');
                $("#pipe_5").attr("src",'images/symbols/Pipes/Pipes_113.png');
                $("#pipe_12").attr("src",'images/symbols/Pipes/Pipes_108.png');
                $("#pipe_13").attr("src",'images/symbols/Pipes/Pipes_018.png');
                $("#symbols_2").attr("src",'images/symbols/International_Symbols/International_Symbols_018.png');
            }else{
                $("#pipe_3").attr("src",'images/symbols/Pipes/Pipes_097.png');
                $("#pipe_4").attr("src",'images/symbols/Pipes/Pipes_012.png');
                $("#pipe_5").attr("src",'images/symbols/Pipes/Pipes_112.png');
                $("#pipe_12").attr("src",'images/symbols/Pipes/Pipes_107.png');
                $("#pipe_13").attr("src",'images/symbols/Pipes/Pipes_017.png');
                $("#symbols_2").attr("src",'images/symbols/International_Symbols/International_Symbols_013.png');
            }
    
            // sensor be can bang
            if(allVariableConfig.nameVariable[i].name === 'H1'){
                if(data[i].data === 'true'){
                    $("#sensorHightBeCanBang").attr("src",'images/symbols/Light/Light_008.png');
                    
                }else{
                    $("#sensorHightBeCanBang").attr("src",'images/symbols/Light/Light_007.png');
                }}
            if(allVariableConfig.nameVariable[i].name === 'H1_Thres'){
                if(data[i].data === 'true'){
                     $("#sensorThresBeCanBang").attr("src",'images/symbols/Light/Light_008.png');
                        
                }else{
                    $("#sensorThresBeCanBang").attr("src",'images/symbols/Light/Light_007.png');
                    } }  
            if(allVariableConfig.nameVariable[i].name === 'L1'){
                if(data[i].data === 'true'){
                    $("#sensorlowBeCanBang").attr("src",'images/symbols/Light/Light_008.png');
                            
                }else{
                    $("#sensorlowBeCanBang").attr("src",'images/symbols/Light/Light_007.png');
                    }
           }
           // nhiet do T1
           if(allVariableConfig.nameVariable[i].name === 'T1'){
              $('#valueNhietDoT1').html('T1 : ' + data[i].data + ' ℃') ;
            }
          //pipe before pump2_1 and pump2_2
    
          if(allVariableConfig.nameVariable[i].name === 'Pump2_1_Run'){
            if(data[i].data === 'true'){
                pump2.pump2_1 = true
                $("#pipe_17").attr("src",'images/symbols/Pipes/Pipes_013.png');
                $("#pipe_18").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_20").attr("src",'images/symbols/Pipes/Pipes_018.png');
                $('#pump2_1').attr("src",'images/symbols/Pump/Pump_013.png') ;
               
            }else{
                pump2.pump2_1 = false
                $("#pipe_17").attr("src",'images/symbols/Pipes/Pipes_012.png');
                $("#pipe_18").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_20").attr("src",'images/symbols/Pipes/Pipes_017.png');
                $('#pump2_1').attr("src",'images/symbols/Pump/Pump_012.png') ;
    
            }
         }
         if(allVariableConfig.nameVariable[i].name === 'Pump2_2_Run'){
            if(data[i].data === 'true'){
                pump2.pump2_2 = true
                $("#pipe_16").attr("src",'images/symbols/Pipes/Pipes_003.png');
                $("#pipe_19").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_21").attr("src",'images/symbols/Pipes/Pipes_008.png');
                $('#pump2_2').attr("src",'images/symbols/Pump/Pump_013.png') ;
               
            }else{
                pump2.pump2_2 = false
                $("#pipe_16").attr("src",'images/symbols/Pipes/Pipes_002.png');
                $("#pipe_19").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_21").attr("src",'images/symbols/Pipes/Pipes_007.png');
                $('#pump2_2').attr("src",'images/symbols/Pump/Pump_012.png') ;
                
            }
        }
        if( pump2.pump2_1 === true ||  pump2.pump2_2 === true ){
            $("#pipe_14").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#pipe_15").attr("src",'images/symbols/Pipes/Pipes_113.png');
            $("#pipe_22").attr("src",'images/symbols/Pipes/Pipes_108.png');
            $("#pipe_23").attr("src",'images/symbols/Pipes/Pipes_008.png');
            $("#pipe_24").attr("src",'images/symbols/Pipes/Pipes_098.png');
            $("#pipe_25").attr("src",'images/symbols/Pipes/Pipes_013.png');
            $("#pipe_26").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#symbols_3").attr("src",'images/symbols/International_Symbols/International_Symbols_018.png');
        }else{
            $("#pipe_14").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#pipe_15").attr("src",'images/symbols/Pipes/Pipes_112.png');
            $("#pipe_22").attr("src",'images/symbols/Pipes/Pipes_107.png');
            $("#pipe_23").attr("src",'images/symbols/Pipes/Pipes_007.png');
            $("#pipe_24").attr("src",'images/symbols/Pipes/Pipes_097.png');
            $("#pipe_25").attr("src",'images/symbols/Pipes/Pipes_012.png');
            $("#pipe_26").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#symbols_3").attr("src",'images/symbols/International_Symbols/International_Symbols_013.png');
    
        }
        // sensor be trung hoa
        if(allVariableConfig.nameVariable[i].name === 'H2'){
            if(data[i].data === 'true'){
                $("#sensorHightBeTrungHoa").attr("src",'images/symbols/Light/Light_008.png');
                
            }else{
                $("#sensorHightBeTrungHoa").attr("src",'images/symbols/Light/Light_007.png');
            }}
        if(allVariableConfig.nameVariable[i].name === 'L2'){
            if(data[i].data === 'true'){
                 $("#sensorLowBeTrungHoa").attr("src",'images/symbols/Light/Light_008.png');
                    
            }else{
                $("#sensorLowBeTrungHoa").attr("src",'images/symbols/Light/Light_007.png');
                } }  
        //sensor naoh and hcl
        if(allVariableConfig.nameVariable[i].name === 'L6'){
            if(data[i].data === 'true'){
                $("#sensorNAOH").attr("src",'images/symbols/Light/Light_008.png');
                
            }else{
                $("#sensorNAOH").attr("src",'images/symbols/Light/Light_007.png');
            }}
        if(allVariableConfig.nameVariable[i].name === 'L7'){
            if(data[i].data === 'true'){
                 $("#sensorHCL").attr("src",'images/symbols/Light/Light_008.png');
                    
            }else{
                $("#sensorHCL").attr("src",'images/symbols/Light/Light_007.png');
                } }  
         // chieu cao naoh va hcl
         if(allVariableConfig.nameVariable[i].name === 'h_NaOH'){
            $('#HighNaoh').html('h_NaOH : ' + data[i].data + ' m') ;
          }
        if(allVariableConfig.nameVariable[i].name === 'h_HCL'){
            $('#HighHcl').html('h_HCL : ' + data[i].data + ' m') ;
          }
          // Valve naoh va Val Hcl
          if(allVariableConfig.nameVariable[i].name === 'Val1_FB'){
            if(data[i].data === 'true'){
                $("#valveNAOH").attr("src",'images/symbols/Valve/Valve_036.png');
                $("#pipe_naoh1").attr("src",'images/symbols/Pipes/Pipes_003.png');
                $("#pipe_naoh2").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_pump_naoh_hcl").attr("src",'images/symbols/Pipes/Pipes_123.png');
                
            }else{
                $("#valveNAOH").attr("src",'images/symbols/Valve/Valve_035.png');
                $("#pipe_naoh1").attr("src",'images/symbols/Pipes/Pipes_002.png');
                $("#pipe_naoh2").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_pump_naoh_hcl").attr("src",'images/symbols/Pipes/Pipes_122.png');
            }}
        if(allVariableConfig.nameVariable[i].name === 'Val2_FB'){
            if(data[i].data === 'true'){
                $("#valveHCL").attr("src",'images/symbols/Valve/Valve_036.png');
                $("#pipe_hcl1").attr("src",'images/symbols/Pipes/Pipes_008.png');
                $("#pipe_hcl2").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_pump_naoh_hcl").attr("src",'images/symbols/Pipes/Pipes_123.png');
                    
            }else{
                $("#valveHCL").attr("src",'images/symbols/Valve/Valve_035.png');
                $("#pipe_hcl1").attr("src",'images/symbols/Pipes/Pipes_007.png');
                $("#pipe_hcl2").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_pump_naoh_hcl").attr("src",'images/symbols/Pipes/Pipes_122.png');
            }}
           // pump naoh and hcl
           if(allVariableConfig.nameVariable[i].name === 'Pump7_Run'){
            if(data[i].data === 'true'){
            $('#pumpNAOHHCL').attr("src",'images/symbols/Pump/Pump_028.png') ;
            }else{
            $('#pumpNAOHHCL').attr("src",'images/symbols/Pump/Pump_027.png') ;   
            }
          } 
          // Mix Run
          if(allVariableConfig.nameVariable[i].name === 'MIX_Run'){
            if(data[i].data === 'true'){
            $('#mixer_1').attr("src",'images/symbols/Mixer/Mixer_013.png') ;
            }else{
            $('#mixer_2').attr("src",'images/symbols/Mixer/Mixer_012.png') ;   
            }
          }
          // PH 
          if(allVariableConfig.nameVariable[i].name === 'pH'){
            $('#valuePH').html('PH : ' + data[i].data ) ;
          } 
         
          //pipe before pump3_1 and pump3_2
    
          if(allVariableConfig.nameVariable[i].name === 'Pump3_1_Run'){
            if(data[i].data === 'true'){
                pump3.pump3_1 = true ;
                $("#pipe_33").attr("src",'images/symbols/Pipes/Pipes_013.png');
                $('#pump3_1').attr("src",'images/symbols/Pump/Pump_013.png') ;
                $("#pipe_34").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_36").attr("src",'images/symbols/Pipes/Pipes_018.png');
               
            }else{
                pump3.pump3_1 = false ;
                $("#pipe_31").attr("src",'images/symbols/Pipes/Pipes_112.png');
                $("#pipe_33").attr("src",'images/symbols/Pipes/Pipes_012.png');
                $('#pump3_1').attr("src",'images/symbols/Pump/Pump_012.png') ;
                $("#pipe_34").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_36").attr("src",'images/symbols/Pipes/Pipes_017.png');
            }
         }
         if(allVariableConfig.nameVariable[i].name === 'Pump3_2_Run'){
            if(data[i].data === 'true'){
                pump3.pump3_2 = true ;
                $("#pipe_32").attr("src",'images/symbols/Pipes/Pipes_003.png');
                $('#pump3_2').attr("src",'images/symbols/Pump/Pump_013.png') ;
                $("#pipe_35").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_37").attr("src",'images/symbols/Pipes/Pipes_008.png');
            }else{
                pump3.pump3_2 = false ;
                $("#pipe_32").attr("src",'images/symbols/Pipes/Pipes_002.png');
                $('#pump3_2').attr("src",'images/symbols/Pump/Pump_012.png') ;
                $("#pipe_35").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_37").attr("src",'images/symbols/Pipes/Pipes_007.png'); 
            }
        }
        if( pump3.pump3_1 === true || pump3.pump3_2 === true ){
            $("#pipe_31").attr("src",'images/symbols/Pipes/Pipes_113.png');
            $("#pipe_38").attr("src",'images/symbols/Pipes/Pipes_108.png');
            $("#pipe_39").attr("src",'images/symbols/Pipes/Pipes_008.png');
            $("#symbols_4").attr("src",'images/symbols/International_Symbols/International_Symbols_019.png');
        }
        else{
            $("#pipe_31").attr("src",'images/symbols/Pipes/Pipes_112.png');
            $("#pipe_38").attr("src",'images/symbols/Pipes/Pipes_107.png');
            $("#pipe_39").attr("src",'images/symbols/Pipes/Pipes_007.png');
            $("#symbols_4").attr("src",'images/symbols/International_Symbols/International_Symbols_014.png');
        }
        // Val3_Fb
        if(allVariableConfig.nameVariable[i].name === 'Val3_FB'){
            if(data[i].data === 'true'){
                $('#valve_3').attr("src",'images/symbols/Valve/Valve_036.png') ;
                $("#pipe_40").attr("src",'images/symbols/Pipes/Pipes_098.png');
                $("#pipe_41").attr("src",'images/symbols/Pipes/Pipes_013.png');
                $("#pipe_42").attr("src",'images/symbols/Pipes/Pipes_053.png');
            }else{
                $('#valve_3').attr("src",'images/symbols/Valve/Valve_035.png') ;
                $("#pipe_40").attr("src",'images/symbols/Pipes/Pipes_097.png');
                $("#pipe_41").attr("src",'images/symbols/Pipes/Pipes_012.png');
                $("#pipe_42").attr("src",'images/symbols/Pipes/Pipes_052.png');
            }
        }
        // Flow1
        if(allVariableConfig.nameVariable[i].name === 'Flow'){
            $('#valueFlow1').html('Flow1 : ' + data[i].data ) ;
          }
          // High Ki Khi
        if(allVariableConfig.nameVariable[i].name === 'h_KK'){
            $('#HighKK').html('h_KK : ' + data[i].data ) ;
          }
       // nhiet do T1
       if(allVariableConfig.nameVariable[i].name === 'T2'){
        $('#valueNhietDoKiKhi').html('T2 : ' + data[i].data + ' ℃') ;
        }
       //sensor ki khi 
       if(allVariableConfig.nameVariable[i].name === 'H4'){
        if(data[i].data === 'true'){
            stateKK.state = true ; 
            $("#sensorKiKhi").attr("src",'images/symbols/Light/Light_008.png');
            
        }else{
            stateKK.state = false ; 
            $("#sensorKiKhi").attr("src",'images/symbols/Light/Light_007.png');
        }}
        // pipe vao be tam
        if((pump3.pump3_1 === true || pump3.pump3_2 === true) && stateKK.state === true ){
            $("#pipe_43").attr("src",'images/symbols/Pipes/Pipes_053.png');
        }else{
            $("#pipe_43").attr("src",'images/symbols/Pipes/Pipes_052.png');
        }
       //sensor be tam 
       if(allVariableConfig.nameVariable[i].name === 'H3'){
        if(data[i].data === 'true'){
            $("#sensorHightBeTam").attr("src",'images/symbols/Light/Light_008.png');
            
        }else{
            $("#sensorHightBeTam").attr("src",'images/symbols/Light/Light_007.png');
        }}
        if(allVariableConfig.nameVariable[i].name === 'H3_Thres'){
        if(data[i].data === 'true'){
            $("#sensorThresBeTam").attr("src",'images/symbols/Light/Light_008.png');
                
        }else{
            $("#sensorThresBeTam").attr("src",'images/symbols/Light/Light_007.png');
        }}
        if(allVariableConfig.nameVariable[i].name === 'L3'){
        if(data[i].data === 'true'){
            $("#sensorLowBeTam").attr("src",'images/symbols/Light/Light_008.png');
                    
        }else{
            $("#sensorLowBeTam").attr("src",'images/symbols/Light/Light_007.png');
        }}
        //pipe before pump4_1 and pump4_2
        
        if(allVariableConfig.nameVariable[i].name === 'Pump4_1_Run'){
            if(data[i].data === 'true'){
                pump4.pump4_1 = true ;
                
                $("#pipe_47").attr("src",'images/symbols/Pipes/Pipes_013.png');
                $('#pump4_1').attr("src",'images/symbols/Pump/Pump_013.png') ;
                $("#pipe_48").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_50").attr("src",'images/symbols/Pipes/Pipes_018.png');
               
               
            }else{
                pump4.pump4_1 = false ;
                
                $("#pipe_47").attr("src",'images/symbols/Pipes/Pipes_012.png');
                $('#pump4_1').attr("src",'images/symbols/Pump/Pump_012.png') ;
                $("#pipe_48").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_50").attr("src",'images/symbols/Pipes/Pipes_017.png');
                
            }
         }
         if(allVariableConfig.nameVariable[i].name === 'Pump4_2_Run'){
            if(data[i].data === 'true'){
                pump4.pump4_2 = true ;
                $("#pipe_46").attr("src",'images/symbols/Pipes/Pipes_003.png');
                $('#pump4_2').attr("src",'images/symbols/Pump/Pump_013.png') ;
                $("#pipe_49").attr("src",'images/symbols/Pipes/Pipes_053.png');
                $("#pipe_51").attr("src",'images/symbols/Pipes/Pipes_008.png');
            }else{
                pump4.pump4_2 = false ;
                $("#pipe_46").attr("src",'images/symbols/Pipes/Pipes_002.png');
                $('#pump4_2').attr("src",'images/symbols/Pump/Pump_012.png') ;
                $("#pipe_49").attr("src",'images/symbols/Pipes/Pipes_052.png');
                $("#pipe_51").attr("src",'images/symbols/Pipes/Pipes_007.png');
               
            }
        }
        if( pump4.pump4_1 === true ||  pump4.pump4_2 === true ){
            $("#pipe_44").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#pipe_45").attr("src",'images/symbols/Pipes/Pipes_113.png');
            $("#pipe_52").attr("src",'images/symbols/Pipes/Pipes_108.png');
            $("#pipe_53").attr("src",'images/symbols/Pipes/Pipes_008.png');
            $("#pipe_54").attr("src",'images/symbols/Pipes/Pipes_098.png');
            $("#pipe_55").attr("src",'images/symbols/Pipes/Pipes_013.png');
            $("#pipe_56").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#symbols_5").attr("src",'images/symbols/International_Symbols/International_Symbols_019.png');
        }else{
            $("#pipe_44").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#pipe_45").attr("src",'images/symbols/Pipes/Pipes_112.png');
            $("#pipe_52").attr("src",'images/symbols/Pipes/Pipes_107.png');
            $("#pipe_53").attr("src",'images/symbols/Pipes/Pipes_007.png');
            $("#pipe_54").attr("src",'images/symbols/Pipes/Pipes_097.png');
            $("#pipe_55").attr("src",'images/symbols/Pipes/Pipes_012.png');
            $("#pipe_56").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#symbols_5").attr("src",'images/symbols/International_Symbols/International_Symbols_014.png');
        }
    
        // Flow 2 
        if(allVariableConfig.nameVariable[i].name === 'flow2'){
            $('#valueFlow2').html('Flow2 : ' + data[i].data ) ;
          }
       //pipe before pump4_1 and pump4_2
        
       if(allVariableConfig.nameVariable[i].name === 'Pump5_1_Run'){
        if(data[i].data === 'true'){
            pump5.pump5_1 = true ;
            $("#pipe_68").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $('#pump5_1').attr("src",'images/symbols/Pump/Pump_048.png') ;
            $("#pipe_70").attr("src",'images/symbols/Pipes/Pipes_018.png');
        }else{
            pump5.pump5_1 = false ;
            $("#pipe_68").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $('#pump5_1').attr("src",'images/symbols/Pump/Pump_047.png') ;
            $("#pipe_70").attr("src",'images/symbols/Pipes/Pipes_017.png');   
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'Pump5_2_Run'){
        if(data[i].data === 'true'){
            pump5.pump5_2 = true ;
            $("#pipe_69").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $('#pump5_2').attr("src",'images/symbols/Pump/Pump_048.png') ;
            $("#pipe_71").attr("src",'images/symbols/Pipes/Pipes_008.png'); 
        }else{
            pump5.pump5_2 = false ;
            $("#pipe_69").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $('#pump5_2').attr("src",'images/symbols/Pump/Pump_047.png') ;
            $("#pipe_71").attr("src",'images/symbols/Pipes/Pipes_007.png'); 
        }
      }
     if( pump5.pump5_1 === true ||  pump5.pump5_2 === true ){
        $("#pipe_72").attr("src",'images/symbols/Pipes/Pipes_108.png');
        $("#pipe_73").attr("src",'images/symbols/Pipes/Pipes_018.png');
        $("#pipe_74").attr("src",'images/symbols/Pipes/Pipes_098.png');
      }else{
        $("#pipe_72").attr("src",'images/symbols/Pipes/Pipes_107.png');
        $("#pipe_73").attr("src",'images/symbols/Pipes/Pipes_017.png');
        $("#pipe_74").attr("src",'images/symbols/Pipes/Pipes_097.png');
      }
      
      // T3 
      if(allVariableConfig.nameVariable[i].name === 'T3'){
        $('#valueNhietDoHieuKhi').html('T3 : ' + data[i].data + ' ℃') ;
        }
     // DO
     if(allVariableConfig.nameVariable[i].name === 'DO'){
        $('#valueNongDoOxi').html('DO : ' + data[i].data ) ;
        }
     // Motor run
     if(allVariableConfig.nameVariable[i].name === 'Motor_Run'){
        if(data[i].data === 'true'){
            $("#pipe_66").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#pipe_67").attr("src",'images/symbols/Pipes/Pipes_018.png');
            $('#pumpBeLang').attr("src",'images/symbols/Pump/Pump_008.png') ;
            $("#symbols_9").attr("src",'images/symbols/International_Symbols/International_Symbols_018.png');
        }else{
            $("#pipe_66").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#pipe_67").attr("src",'images/symbols/Pipes/Pipes_017.png');
            $('#pumpBeLang').attr("src",'images/symbols/Pump/Pump_007.png') ; 
            $("#symbols_9").attr("src",'images/symbols/International_Symbols/International_Symbols_013.png');
        }
     }
      // High Be Lang
      if(allVariableConfig.nameVariable[i].name === 'h_Lang'){
        $('#HighBL').html('h_Lang : ' + data[i].data ) ;
      }
     // sensor be lang
     if(allVariableConfig.nameVariable[i].name === 'H5'){
        if(data[i].data === 'true'){
            $("#sensorHightBeLang").attr("src",'images/symbols/Light/Light_008.png');
            
        }else{
            $("#sensorHightBeLang").attr("src",'images/symbols/Light/Light_007.png');
        }}
        if(allVariableConfig.nameVariable[i].name === 'H5_Thres'){
        if(data[i].data === 'true'){
            $("#sensorThresBeLang").attr("src",'images/symbols/Light/Light_008.png');
                
        }else{
            $("#sensorThresBeLang").attr("src",'images/symbols/Light/Light_007.png');
        }}
        if(allVariableConfig.nameVariable[i].name === 'L5'){
        if(data[i].data === 'true'){
            $("#sensorLowBeLang").attr("src",'images/symbols/Light/Light_008.png');
                    
        }else{
            $("#sensorLowBeLang").attr("src",'images/symbols/Light/Light_007.png');
        }}
      // pump6 run
      if(allVariableConfig.nameVariable[i].name === 'Pump6_Run'){
        if(data[i].data === 'true'){
            $("#pipe_63").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#pipe_64").attr("src",'images/symbols/Pipes/Pipes_008.png');
            $("#pipe_65").attr("src",'images/symbols/Pipes/Pipes_098.png');
            $('#pump6').attr("src",'images/symbols/Pump/Pump_018.png');
            $("#pipe_59").attr("src",'images/symbols/Pipes/Pipes_098.png');
            $("#pipe_60").attr("src",'images/symbols/Pipes/Pipes_108.png');
            $("#pipe_61").attr("src",'images/symbols/Pipes/Pipes_098.png');
            $("#pipe_62").attr("src",'images/symbols/Pipes/Pipes_053.png');
            $("#symbols_8").attr("src",'images/symbols/International_Symbols/International_Symbols_017.png');
        }else{
            $("#pipe_63").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#pipe_64").attr("src",'images/symbols/Pipes/Pipes_007.png');
            $("#pipe_65").attr("src",'images/symbols/Pipes/Pipes_097.png');
            $('#pump6').attr("src",'images/symbols/Pump/Pump_017.png');
            $("#pipe_59").attr("src",'images/symbols/Pipes/Pipes_097.png');
            $("#pipe_60").attr("src",'images/symbols/Pipes/Pipes_107.png');
            $("#pipe_61").attr("src",'images/symbols/Pipes/Pipes_097.png');
            $("#pipe_62").attr("src",'images/symbols/Pipes/Pipes_052.png');
            $("#symbols_8").attr("src",'images/symbols/International_Symbols/International_Symbols_008.png');
        }
     }
        // valve 5 fb
       if(allVariableConfig.nameVariable[i].name === 'Val5_FB'){
        if(data[i].data === 'true'){
        $("#pipe_57").attr("src",'images/symbols/Pipes/Pipes_098.png');
        $("#pipe_58").attr("src",'images/symbols/Pipes/Pipes_013.png');
        $("#valve_5").attr("src",'images/symbols/Valve/Valve_036.png');
        $("#symbols_6").attr("src",'images/symbols/International_Symbols/International_Symbols_019.png');
       }else{
        $("#pipe_57").attr("src",'images/symbols/Pipes/Pipes_097.png');
        $("#pipe_58").attr("src",'images/symbols/Pipes/Pipes_012.png');
        $("#valve_5").attr("src",'images/symbols/Valve/Valve_035.png');
        $("#symbols_6").attr("src",'images/symbols/International_Symbols/International_Symbols_014.png');
       }}
        // valve 6 fb
       if(allVariableConfig.nameVariable[i].name === 'Val6_FB'){
        if(data[i].data === 'true'){
        $("#valve_6").attr("src",'images/symbols/Valve/Valve_036.png');
        $("#symbols_7").attr("src",'images/symbols/International_Symbols/International_Symbols_020.png');
       }else{
        $("#valve_6").attr("src",'images/symbols/Valve/Valve_035.png');
        $("#symbols_7").attr("src",'images/symbols/International_Symbols/International_Symbols_004.png');
      }}
     
      // den bao giai doan
      if(allVariableConfig.nameVariable[i].name === 'TH_Done'){
        if(data[i].data === 'true'){
            $("#TH_Done").attr("src",'images/symbols/Light/Light_014.png');
        }else{
            $("#TH_Done").attr("src",'images/symbols/Light/Light_013.png');
        }
        }
     if(allVariableConfig.nameVariable[i].name === 'KK_Done'){
          if(data[i].data === 'true'){
                $("#KK_Done").attr("src",'images/symbols/Light/Light_014.png');
          }else{
                $("#KK_Done").attr("src",'images/symbols/Light/Light_013.png');
          }  
            }
     if(allVariableConfig.nameVariable[i].name === 'HK_Done'){
        if(data[i].data === 'true'){
            $("#HK_Done").attr("src",'images/symbols/Light/Light_014.png');
        }else{
             $("#HK_Done").attr("src",'images/symbols/Light/Light_013.png');
                }
        }
     if(allVariableConfig.nameVariable[i].name === 'BL_Done'){
        if(data[i].data === 'true'){
            $("#BL_Done").attr("src",'images/symbols/Light/Light_014.png');
        }else{
            $("#BL_Done").attr("src",'images/symbols/Light/Light_013.png');
        }
        }
      
    
     // display time and speed pump 1,2,3,4, sut khi
     // pump1_1
     if(allVariableConfig.nameVariable[i].name === 'Pump1_1_RPM'){ 
        $('#RPM-Pump1_1').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump1_1_h'){ 
        $('#Time-Pump1_1_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump1_1_m'){ 
        $('#Time-Pump1_1_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump1_1_s'){ 
        $('#Time-Pump1_1_s').html(data[i].data + ' s')
     }
     // pump1_2
     if(allVariableConfig.nameVariable[i].name === 'Pump1_2_RPM'){ 
        $('#RPM-Pump1_2').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump1_2_h'){ 
        $('#Time-Pump1_2_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump1_2_m'){ 
        $('#Time-Pump1_2_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump1_2_s'){ 
        $('#Time-Pump1_2_s').html(data[i].data + ' s')
     }
     // pump2_1
     if(allVariableConfig.nameVariable[i].name === 'Pump2_1_RPM'){ 
        $('#RPM-Pump2_1').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump2_1_h'){ 
        $('#Time-Pump2_1_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump2_1_m'){ 
        $('#Time-Pump2_1_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump2_1_s'){ 
        $('#Time-Pump2_1_s').html(data[i].data + ' s')
     }
     // pump2_2
     if(allVariableConfig.nameVariable[i].name === 'Pump2_2_RPM'){ 
        $('#RPM-Pump2_2').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump2_2_h'){ 
        $('#Time-Pump2_2_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump2_2_m'){ 
        $('#Time-Pump2_2_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump2_2_s'){ 
        $('#Time-Pump2_2_s').html(data[i].data + ' s')
     }
     // pump3_1
     if(allVariableConfig.nameVariable[i].name === 'Pump3_1_RPM'){ 
        $('#RPM-Pump3_1').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump3_1_h'){ 
        $('#Time-Pump3_1_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump3_1_m'){ 
        $('#Time-Pump3_1_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump3_1_s'){ 
        $('#Time-Pump3_1_s').html(data[i].data + ' s')
     }
     // pump3_2
     if(allVariableConfig.nameVariable[i].name === 'Pump3_2_RPM'){ 
        $('#RPM-Pump3_2').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump3_2_h'){ 
        $('#Time-Pump3_2_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump3_2_m'){ 
        $('#Time-Pump3_2_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump3_2_s'){ 
        $('#Time-Pump3_2_s').html(data[i].data + ' s')
     }
     // pump4_1
     if(allVariableConfig.nameVariable[i].name === 'Pump4_1_RPM'){ 
        $('#RPM-Pump4_1').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump4_1_h'){ 
        $('#Time-Pump4_1_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump4_1_m'){ 
        $('#Time-Pump4_1_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump4_1_s'){ 
        $('#Time-Pump4_1_s').html(data[i].data + ' s')
     }
     // pump4_2
     if(allVariableConfig.nameVariable[i].name === 'Pump4_2_RPM'){ 
        $('#RPM-Pump4_2').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump4_2_h'){ 
        $('#Time-Pump4_2_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump4_2_m'){ 
        $('#Time-Pump4_2_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump4_2_s'){ 
        $('#Time-Pump4_2_s').html(data[i].data + ' s')
     }
      // pump5_1
      if(allVariableConfig.nameVariable[i].name === 'Pump5_1_RPM'){ 
        $('#RPM-Pump5_1').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump5_1_h'){ 
        $('#Time-Pump5_1_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump5_1_m'){ 
        $('#Time-Pump5_1_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump5_1_s'){ 
        $('#Time-Pump5_1_s').html(data[i].data + ' s')
     }
     // pump5_2
     if(allVariableConfig.nameVariable[i].name === 'Pump5_2_RPM'){ 
        $('#RPM-Pump5_2').html(data[i].data )
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump5_2_h'){ 
        $('#Time-Pump5_2_h').html(data[i].data + ' h')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump5_2_m'){ 
        $('#Time-Pump5_2_m').html(data[i].data + ' m')
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_Pump5_2_s'){ 
        $('#Time-Pump5_2_s').html(data[i].data + ' s')
     }
    
     // time count and time set kk , hk , l
     // KK
    
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_KK_h'){
    //     $('#set-hour-KK').val(data[i].data) 
    //  }
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_KK_m'){
    //     $('#set-minute-KK').val(data[i].data) 
    //  }
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_KK_s'){
    //     $('#set-second-KK').val(data[i].data) 
    //  }
    
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_KK_h'){
        $('#count-hour-KK').val(data[i].data) 
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_KK_m'){
        $('#count-minute-KK').val(data[i].data) 
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_KK_s'){
        $('#count-second-KK').val(data[i].data) 
     }
    
     // HK
     
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_HK_h'){
    //     $('#set-hour-HK').val(data[i].data) 
    //  }
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_HK_m'){
    //     $('#set-minute-HK').val(data[i].data) 
    //  }
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_HK_s'){
    //     $('#set-second-HK').val(data[i].data) 
    //  }
    
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_HK_h'){
        $('#count-hour-HK').val(data[i].data) 
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_HK_m'){
        $('#count-minute-HK').val(data[i].data) 
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_HK_s'){
        $('#count-second-HK').val(data[i].data) 
     }
     // BL
    
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_BL_h'){
    //     $('#set-hour-BL').val(data[i].data) 
    //  }
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_BL_m'){
    //     $('#set-minute-BL').val(data[i].data) 
    //  }
    //  if(allVariableConfig.nameVariable[i].name === 'Time_Set_BL_s'){
    //     $('#set-second-BL').val(data[i].data) 
    //  }
    
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_BL_h'){
        $('#count-hour-BL').val(data[i].data) 
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_BL_m'){
        $('#count-minute-BL').val(data[i].data) 
     }
     if(allVariableConfig.nameVariable[i].name === 'Time_Count_BL_s'){
        $('#count-second-BL').val(data[i].data) 
     }
    
     // execute control system
     if(allVariableConfig.nameVariable[i].name === 'Run_System_PLC1'){
        if(data[i].data === 'true'){
             $('#start-in-system').removeClass('btn btn-primary') ;
             $('#start-in-system').addClass('btn btn-danger') ;
             $('#stop-in-system').removeClass('btn btn-danger') ;
             $('#stop-in-system').addClass('btn btn-primary') ;
        }else{
            $('#start-in-system').removeClass('btn btn-danger') ;
            $('#start-in-system').addClass('btn btn-primary') ;
            $('#stop-in-system').removeClass('btn btn-primary') ;
            $('#stop-in-system').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'Auto-Man_System_PLC1'){
        if(data[i].data === 'true'){
             $('#auto-in-system').removeClass('btn btn-primary') ;
             $('#auto-in-system').addClass('btn btn-danger') ;
             $('#man-in-system').removeClass('btn btn-danger') ;
             $('#man-in-system').addClass('btn btn-primary') ;
        }else{
            $('#auto-in-system').removeClass('btn btn-danger') ;
            $('#auto-in-system').addClass('btn btn-primary') ;
            $('#man-in-system').removeClass('btn btn-primary') ;
            $('#man-in-system').addClass('btn btn-danger') ;
        }
     }
    
     // execute each pump 
     // pump 1
     if(allVariableConfig.nameVariable[i].name === 'pmp1_Auto-Man'){
        if(data[i].data === 'true'){
             $('#pump1-auto-in').removeClass('btn btn-primary') ;
             $('#pump1-auto-in').addClass('btn btn-danger') ;
             $('#pump1-man-in').removeClass('btn btn-danger') ;
             $('#pump1-man-in').addClass('btn btn-primary') ;
        }else{
            $('#pump1-auto-in').removeClass('btn btn-danger') ;
            $('#pump1-auto-in').addClass('btn btn-primary') ;
            $('#pump1-man-in').removeClass('btn btn-primary') ;
            $('#pump1-man-in').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp1_Motor1_Run'){
        if(data[i].data === 'true'){
             $('#pump1-start-motor1').removeClass('btn btn-primary') ;
             $('#pump1-start-motor1').addClass('btn btn-danger') ;
             $('#pump1-stop-motor1').removeClass('btn btn-danger') ;
             $('#pump1-stop-motor1').addClass('btn btn-primary') ;
        }else{
            $('#pump1-start-motor1').removeClass('btn btn-danger') ;
            $('#pump1-start-motor1').addClass('btn btn-primary') ;
            $('#pump1-stop-motor1').removeClass('btn btn-primary') ;
            $('#pump1-stop-motor1').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp1_Motor2_Run'){
        if(data[i].data === 'true'){
             $('#pump1-start-motor2').removeClass('btn btn-primary') ;
             $('#pump1-start-motor2').addClass('btn btn-danger') ;
             $('#pump1-stop-motor2').removeClass('btn btn-danger') ;
             $('#pump1-stop-motor2').addClass('btn btn-primary') ;
        }else{
            $('#pump1-start-motor2').removeClass('btn btn-danger') ;
            $('#pump1-start-motor2').addClass('btn btn-primary') ;
            $('#pump1-stop-motor2').removeClass('btn btn-primary') ;
            $('#pump1-stop-motor2').addClass('btn btn-danger') ;
        }
     }
     // pump 2
     if(allVariableConfig.nameVariable[i].name === 'pmp2_Auto-Man'){
        if(data[i].data === 'true'){
             $('#pump2-auto-in').removeClass('btn btn-primary') ;
             $('#pump2-auto-in').addClass('btn btn-danger') ;
             $('#pump2-man-in').removeClass('btn btn-danger') ;
             $('#pump2-man-in').addClass('btn btn-primary') ;
        }else{
            $('#pump2-auto-in').removeClass('btn btn-danger') ;
            $('#pump2-auto-in').addClass('btn btn-primary') ;
            $('#pump2-man-in').removeClass('btn btn-primary') ;
            $('#pump2-man-in').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp2_Motor1_Run'){
        if(data[i].data === 'true'){
             $('#pump2-start-motor1').removeClass('btn btn-primary') ;
             $('#pump2-start-motor1').addClass('btn btn-danger') ;
             $('#pump2-stop-motor1').removeClass('btn btn-danger') ;
             $('#pump2-stop-motor1').addClass('btn btn-primary') ;
        }else{
            $('#pump2-start-motor1').removeClass('btn btn-danger') ;
            $('#pump2-start-motor1').addClass('btn btn-primary') ;
            $('#pump2-stop-motor1').removeClass('btn btn-primary') ;
            $('#pump2-stop-motor1').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp2_Motor2_Run'){
        if(data[i].data === 'true'){
             $('#pump2-start-motor2').removeClass('btn btn-primary') ;
             $('#pump2-start-motor2').addClass('btn btn-danger') ;
             $('#pump2-stop-motor2').removeClass('btn btn-danger') ;
             $('#pump2-stop-motor2').addClass('btn btn-primary') ;
        }else{
            $('#pump2-start-motor2').removeClass('btn btn-danger') ;
            $('#pump2-start-motor2').addClass('btn btn-primary') ;
            $('#pump2-stop-motor2').removeClass('btn btn-primary') ;
            $('#pump2-stop-motor2').addClass('btn btn-danger') ;
        }
     }
     //pump 3
     if(allVariableConfig.nameVariable[i].name === 'pmp3_Auto-Man'){
        if(data[i].data === 'true'){
             $('#pump3-auto-in').removeClass('btn btn-primary') ;
             $('#pump3-auto-in').addClass('btn btn-danger') ;
             $('#pump3-man-in').removeClass('btn btn-danger') ;
             $('#pump3-man-in').addClass('btn btn-primary') ;
        }else{
            $('#pump3-auto-in').removeClass('btn btn-danger') ;
            $('#pump3-auto-in').addClass('btn btn-primary') ;
            $('#pump3-man-in').removeClass('btn btn-primary') ;
            $('#pump3-man-in').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp3_Motor1_Run'){
        if(data[i].data === 'true'){
             $('#pump3-start-motor1').removeClass('btn btn-primary') ;
             $('#pump3-start-motor1').addClass('btn btn-danger') ;
             $('#pump3-stop-motor1').removeClass('btn btn-danger') ;
             $('#pump3-stop-motor1').addClass('btn btn-primary') ;
        }else{
            $('#pump3-start-motor1').removeClass('btn btn-danger') ;
            $('#pump3-start-motor1').addClass('btn btn-primary') ;
            $('#pump3-stop-motor1').removeClass('btn btn-primary') ;
            $('#pump3-stop-motor1').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp3_Motor2_Run'){
        if(data[i].data === 'true'){
             $('#pump3-start-motor2').removeClass('btn btn-primary') ;
             $('#pump3-start-motor2').addClass('btn btn-danger') ;
             $('#pump3-stop-motor2').removeClass('btn btn-danger') ;
             $('#pump3-stop-motor2').addClass('btn btn-primary') ;
        }else{
            $('#pump3-start-motor2').removeClass('btn btn-danger') ;
            $('#pump3-start-motor2').addClass('btn btn-primary') ;
            $('#pump3-stop-motor2').removeClass('btn btn-primary') ;
            $('#pump3-stop-motor2').addClass('btn btn-danger') ;
        }
     }
     //pump4
     if(allVariableConfig.nameVariable[i].name === 'pmp4_Auto-Man'){
        if(data[i].data === 'true'){
             $('#pump4-auto-in').removeClass('btn btn-primary') ;
             $('#pump4-auto-in').addClass('btn btn-danger') ;
             $('#pump4-man-in').removeClass('btn btn-danger') ;
             $('#pump4-man-in').addClass('btn btn-primary') ;
        }else{
            $('#pump4-auto-in').removeClass('btn btn-danger') ;
            $('#pump4-auto-in').addClass('btn btn-primary') ;
            $('#pump4-man-in').removeClass('btn btn-primary') ;
            $('#pump4-man-in').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp4_Motor1_Run'){
        if(data[i].data === 'true'){
             $('#pump4-start-motor1').removeClass('btn btn-primary') ;
             $('#pump4-start-motor1').addClass('btn btn-danger') ;
             $('#pump4-stop-motor1').removeClass('btn btn-danger') ;
             $('#pump4-stop-motor1').addClass('btn btn-primary') ;
        }else{
            $('#pump4-start-motor1').removeClass('btn btn-danger') ;
            $('#pump4-start-motor1').addClass('btn btn-primary') ;
            $('#pump4-stop-motor1').removeClass('btn btn-primary') ;
            $('#pump4-stop-motor1').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp4_Motor2_Run'){
        if(data[i].data === 'true'){
             $('#pump4-start-motor2').removeClass('btn btn-primary') ;
             $('#pump4-start-motor2').addClass('btn btn-danger') ;
             $('#pump4-stop-motor2').removeClass('btn btn-danger') ;
             $('#pump4-stop-motor2').addClass('btn btn-primary') ;
        }else{
            $('#pump4-start-motor2').removeClass('btn btn-danger') ;
            $('#pump4-start-motor2').addClass('btn btn-primary') ;
            $('#pump4-stop-motor2').removeClass('btn btn-primary') ;
            $('#pump4-stop-motor2').addClass('btn btn-danger') ;
        }
     }
     //pump5
     if(allVariableConfig.nameVariable[i].name === 'pmp5_Auto-Man'){
        if(data[i].data === 'true'){
             $('#pump5-auto-in').removeClass('btn btn-primary') ;
             $('#pump5-auto-in').addClass('btn btn-danger') ;
             $('#pump5-man-in').removeClass('btn btn-danger') ;
             $('#pump5-man-in').addClass('btn btn-primary') ;
        }else{
            $('#pump5-auto-in').removeClass('btn btn-danger') ;
            $('#pump5-auto-in').addClass('btn btn-primary') ;
            $('#pump5-man-in').removeClass('btn btn-primary') ;
            $('#pump5-man-in').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp1_Motor1_Run'){
        if(data[i].data === 'true'){
             $('#pump5-start-motor1').removeClass('btn btn-primary') ;
             $('#pump5-start-motor1').addClass('btn btn-danger') ;
             $('#pump5-stop-motor1').removeClass('btn btn-danger') ;
             $('#pump5-stop-motor1').addClass('btn btn-primary') ;
        }else{
            $('#pump5-start-motor1').removeClass('btn btn-danger') ;
            $('#pump5-start-motor1').addClass('btn btn-primary') ;
            $('#pump5-stop-motor1').removeClass('btn btn-primary') ;
            $('#pump5-stop-motor1').addClass('btn btn-danger') ;
        }
     }
     if(allVariableConfig.nameVariable[i].name === 'pmp5_Motor2_Run'){
        if(data[i].data === 'true'){
             $('#pump5-start-motor2').removeClass('btn btn-primary') ;
             $('#pump5-start-motor2').addClass('btn btn-danger') ;
             $('#pump5-stop-motor2').removeClass('btn btn-danger') ;
             $('#pump5-stop-motor2').addClass('btn btn-primary') ;
        }else{
            $('#pump5-start-motor2').removeClass('btn btn-danger') ;
            $('#pump5-start-motor2').addClass('btn btn-primary') ;
            $('#pump5-stop-motor2').removeClass('btn btn-primary') ;
            $('#pump5-stop-motor2').addClass('btn btn-danger') ;
        }
     }
      
     // display chieu cao be kk , bl hcl , naoh
     // kk
     if(allVariableConfig.nameVariable[i].name === 'h_KK'){
       var progressBarVal= data[i].data;   
       var html="<div class='progress-bar progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='4' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" </div>";    
       $("#h_Ki_Khi").html(html);   
     }
     // bl
     if(allVariableConfig.nameVariable[i].name === 'h_Lang'){
        var progressBarVal= data[i].data;   
        var html="<div class='progress-bar  progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='4' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" </div>";    
        $("#h_Be_Lang").html(html);   
      }
      // hcl
      if(allVariableConfig.nameVariable[i].name === 'h_HCL'){
        var progressBarVal= data[i].data;   
        var html="<div class='progress-bar  progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='5' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" </div>";    
        $("#h_Hcl").html(html);   
      }
      //naoh
      if(allVariableConfig.nameVariable[i].name === 'h_NaOH'){
        var progressBarVal= data[i].data;   
        var html="<div class='progress-bar  progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='5' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+"</div>";    
        $("#h_Naoh").html(html);   
      }
      // emg
      if(allVariableConfig.nameVariable[i].name === 'Emg_Scada1'){
          if(data[i].data === 'true'){
            stateEmergency = true ; 
          }else{
            stateEmergency = false ; 
          }
      }

      // lamp run error and waring
      if(allVariableConfig.nameVariable[i].name === 'Lamp_Run'){
        if(data[i].data === 'true'){
          $('#lampRun').css('background-color','green')
        }else{
         $('#lampRun').css('background-color','aliceblue')
        }
      }
      if(allVariableConfig.nameVariable[i].name === 'Lamp_Stop'){
        if(data[i].data === 'true'){
            $('#lampStop').css('background-color','red')
          }else{
           $('#lampStop').css('background-color','aliceblue')
          }
      }
      if(allVariableConfig.nameVariable[i].name === 'Lamp_Warr'){
        if(data[i].data === 'true'){
            if(toggleWarning === undefined){
                var state = false ; 
                toggleWarning = setInterval(() => {
                    if(state){
                        $('#lampWarning').css('background-color','yellow')
                        state = false
                    }else{
                        $('#lampWarning').css('background-color','aliceblue') ;
                        state = true
                    }
                }, 500);
            }
        }else{
            if(toggleWarning !== undefined){
                $('#lampWarning').css('background-color','aliceblue') ;
                clearInterval(toggleWarning)
                toggleWarning = undefined ; 
            } ;
        }
       }

       // overload and error all of pump 
       // pump1 
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_1'){
        if(data[i].data === 'true'){
            if(toggleOverload1 === undefined){
                var state = false ; 
                toggleOverload1 = setInterval(() => {
                    if(state){
                        $('#pump1_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        $('#pump1_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump1_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        $('#pump1_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPump1').html('Overload Pump1') ; 
            }
        }else{
            if(toggleOverload1 !== undefined){
                $('#pump1_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#pump1_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#overloadPump1').html('') ; 
                clearInterval(toggleOverload1)
                toggleOverload1 = undefined ; 
            } ;
        }
       }

       if(allVariableConfig.nameVariable[i].name === 'Pump1_1_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump1_1 === undefined){
                var state = false ; 
                toggleErrorPump1_1 = setInterval(() => {
                    if(state){
                        $('#pump1_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump1_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump1_1').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump1_1 !== undefined){
                $('#pump1_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump1_1').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump1_1)
                toggleErrorPump1_1 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump1_2_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump1_2 === undefined){
                var state = false ; 
                toggleErrorPump1_2 = setInterval(() => {
                    if(state){
                        $('#pump1_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump1_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump1_2').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump1_2 !== undefined){
                $('#pump1_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump1_2').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump1_2)
                toggleErrorPump1_2 = undefined ; 
            } ;
        }
       }
       // pump 2
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_2'){
        if(data[i].data === 'true'){
            if(toggleOverload2 === undefined){
                var state = false ; 
                toggleOverload2 = setInterval(() => {
                    if(state){
                        $('#pump2_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        $('#pump2_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump2_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        $('#pump2_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPump2').html('Overload Pump2') ; 
            }
        }else{
            if(toggleOverload2 !== undefined){
                $('#pump2_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#pump2_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#overloadPump2').html('') ; 
                clearInterval(toggleOverload2)
                toggleOverload2 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump2_1_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump2_1 === undefined){
                var state = false ; 
                toggleErrorPump2_1 = setInterval(() => {
                    if(state){
                        $('#pump2_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump2_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump2_1').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump2_1 !== undefined){
                $('#pump2_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump2_1').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump2_1)
                toggleErrorPump2_1 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump2_2_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump2_2 === undefined){
                var state = false ; 
                toggleErrorPump2_2 = setInterval(() => {
                    if(state){
                        $('#pump2_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump2_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump2_2').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump2_2 !== undefined){
                $('#pump2_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump2_2').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump2_2)
                toggleErrorPump2_2 = undefined ; 
            } ;
        }
       }
       // pump 3 
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_3'){
        if(data[i].data === 'true'){
            if(toggleOverload3 === undefined){
                var state = false ; 
                toggleOverload3 = setInterval(() => {
                    if(state){
                        $('#pump3_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        $('#pump3_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump3_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        $('#pump3_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPump3').html('Overload Pump3') ; 
            }
        }else{
            if(toggleOverload3 !== undefined){
                $('#pump3_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#pump3_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#overloadPump3').html('') ; 
                clearInterval(toggleOverload3)
                toggleOverload3 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump3_1_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump3_1 === undefined){
                var state = false ; 
                toggleErrorPump3_1 = setInterval(() => {
                    if(state){
                        $('#pump3_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump3_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump3_1').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump3_1 !== undefined){
                $('#pump3_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump3_1').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump3_1)
                toggleErrorPump3_1 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump3_2_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump3_2 === undefined){
                var state = false ; 
                toggleErrorPump3_2 = setInterval(() => {
                    if(state){
                        $('#pump3_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump3_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump3_2').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump3_2 !== undefined){
                $('#pump3_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump3_2').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump3_2)
                toggleErrorPump3_2 = undefined ; 
            } ;
        }
       }
       // pump 4 
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_4'){
        if(data[i].data === 'true'){
            if(toggleOverload4 === undefined){
                var state = false ; 
                toggleOverload4 = setInterval(() => {
                    if(state){
                        $('#pump4_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        $('#pump4_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump4_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        $('#pump4_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPump4').html('Overload Pump4') ; 
            }
        }else{
            if(toggleOverload1 !== undefined){
                $('#pump4_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#pump4_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#overloadPump4').html('') ; 
                clearInterval(toggleOverload4)
                toggleOverload4 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump4_1_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump4_1 === undefined){
                var state = false ; 
                toggleErrorPump4_1 = setInterval(() => {
                    if(state){
                        $('#pump4_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump4_1').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump4_1').css('background-color','red') ;  
            }
        }else{
            if(toggleErrorPump4_1 !== undefined){
                $('#pump4_1').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump4_1').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump4_1)
                toggleErrorPump4_1 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump4_2_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump4_2 === undefined){
                var state = false ; 
                toggleErrorPump4_2 = setInterval(() => {
                    if(state){
                        $('#pump4_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                        state = false
                    }else{
                        $('#pump4_2').attr('src','images/symbols/Pump/Pump_014.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump4_2').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump4_2 !== undefined){
                $('#pump4_2').attr('src','images/symbols/Pump/Pump_012.png') ;
                $('#ErrorPump4_2').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump4_2)
                toggleErrorPump4_2 = undefined ; 
            } ;
        }
       }
       // pump 5
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_5'){
        if(data[i].data === 'true'){
            if(toggleOverload5 === undefined){
                var state = false ; 
                toggleOverload5 = setInterval(() => {
                    if(state){
                        $('#pump5_1').attr('src','images/symbols/Pump/Pump_049.png') ;
                        $('#pump5_2').attr('src','images/symbols/Pump/Pump_049.png') ;
                        state = false
                    }else{
                        $('#pump5_1').attr('src','images/symbols/Pump/Pump_047.png') ;
                        $('#pump5_2').attr('src','images/symbols/Pump/Pump_047.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPump5').html('Overload Pump5') ; 
            }
        }else{
            if(toggleOverload5 !== undefined){
                $('#pump5_1').attr('src','images/symbols/Pump/Pump_047.png') ;
                $('#pump5_2').attr('src','images/symbols/Pump/Pump_047.png') ;
                $('#overloadPump5').html('') ; 
                clearInterval(toggleOverload5)
                toggleOverload5 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump5_1_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump5_1 === undefined){
                var state = false ; 
                toggleErrorPump5_1 = setInterval(() => {
                    if(state){
                        $('#pump5_1').attr('src','images/symbols/Pump/Pump_049.png') ;
                        state = false
                    }else{
                        $('#pump5_1').attr('src','images/symbols/Pump/Pump_047.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump5_1').css('background-color','red') ;  
            }
        }else{
            if(toggleErrorPump5_1 !== undefined){
                $('#pump5_1').attr('src','images/symbols/Pump/Pump_047.png') ;
                $('#ErrorPump5_1').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump5_1)
                toggleErrorPump5_1 = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump5_2_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorPump5_2 === undefined){
                var state = false ; 
                toggleErrorPump5_2 = setInterval(() => {
                    if(state){
                        $('#pump5_2').attr('src','images/symbols/Pump/Pump_049.png') ;
                        state = false
                    }else{
                        $('#pump5_2').attr('src','images/symbols/Pump/Pump_047.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPump5_2').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorPump5_2 !== undefined){
                $('#pump5_2').attr('src','images/symbols/Pump/Pump_047.png') ;
                $('#ErrorPump5_2').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorPump5_2)
                toggleErrorPump5_2 = undefined ; 
            } ;
        }
       }
       // pump trung hoa 7
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_7'){
        if(data[i].data === 'true'){
            if(toggleOverloadTH === undefined){
                var state = false ; 
                toggleOverloadTH = setInterval(() => {
                    if(state){
                        $('#pumpNAOHHCL').attr('src','images/symbols/Pump/Pump_029.png') ;
                        state = false
                    }else{
                        $('#pumpNAOHHCL').attr('src','images/symbols/Pump/Pump_027.png') ;
                        state = true
                    }
                },900);
                $('#overloadTH').html('Overload Trung Hoa') ; 
            }
        }else{
            if(toggleOverloadTH !== undefined){
                $('#pumpNAOHHCL').attr('src','images/symbols/Pump/Pump_027.png') ;
                $('#overloadTH').html('') ; 
                clearInterval(toggleOverloadTH)
                toggleOverloadTH = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump7_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorTH === undefined){
                var state = false ; 
                toggleErrorTH = setInterval(() => {
                    if(state){
                        $('#pumpNAOHHCL').attr('src','images/symbols/Pump/Pump_029.png') ;
                        state = false
                    }else{
                        $('#pumpNAOHHCL').attr('src','images/symbols/Pump/Pump_027.png') ;
                        state = true
                    }
                },900);
                $('#ErrorPumpTH').css('background-color','red') ;  
            }
        }else{
            if(toggleErrorTH !== undefined){
                $('#pumpNAOHHCL').attr('src','images/symbols/Pump/Pump_027.png') ;
                $('#ErrorPumpTH').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorTH)
                toggleErrorTH = undefined ; 
            } ;
        }
       }
       // pump Mix 9
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_9'){
        if(data[i].data === 'true'){
            if(toggleOverloadMix === undefined){
                var state = false ; 
                toggleOverloadMix = setInterval(() => {
                    if(state){
                        $('#mixer_1').attr('src','images/symbols/Mixer/Mixer_014.png') ;
                        state = false
                    }else{
                        $('#mixer_1').attr('src','images/symbols/Mixer/Mixer_012.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadMix').html('Overload Mixer') ; 
            }
        }else{
            if(toggleOverloadMix !== undefined){
                $('#mixer_1').attr('src','images/symbols/Mixer/Mixer_012.png') ;
                $('#overloadMix').html('') ; 
                clearInterval(toggleOverloadMix)
                toggleOverloadMix = undefined ; 
            } ;
        }
       }
       //pump Bun 6
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_6'){
        if(data[i].data === 'true'){
            if(toggleOverloadBun === undefined){
                var state = false ; 
                toggleOverloadBun= setInterval(() => {
                    if(state){
                        $('#pump6').attr('src','images/symbols/Pump/Pump_019.png') ;
                        state = false
                    }else{
                        $('#pump6').attr('src','images/symbols/Pump/Pump_017.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPumpBun').html('Overload Pump Bun') ; 
            }
        }else{
            if(toggleOverloadBun !== undefined){
                $('#pump6').attr('src','images/symbols/Pump/Pump_017.png') ;
                $('#overloadPumpBun').html('') ; 
                clearInterval(toggleOverloadBun)
                toggleOverloadBun = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Pump6_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorBun === undefined){
                var state = false ; 
                toggleErrorBun= setInterval(() => {
                    if(state){
                        $('#pump6').attr('src','images/symbols/Pump/Pump_019.png') ;
                        state = false
                    }else{
                        $('#pump6').attr('src','images/symbols/Pump/Pump_017.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPumpBun').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorBun !== undefined){
                $('#pump6').attr('src','images/symbols/Pump/Pump_017.png') ;
                $('#ErrorPumpBun').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorBun)
                toggleErrorBun = undefined ; 
            } ;
        }
       }
       //pump gat bun 8
       if(allVariableConfig.nameVariable[i].name === 'OverLoad_7'){
        if(data[i].data === 'true'){
            if(toggleOverloadGatBun === undefined){
                var state = false ; 
                toggleOverloadGatBun = setInterval(() => {
                    if(state){
                        $('#pumpBeLang').attr('src','images/symbols/Pump/Pump_009.png') ;
                        state = false
                    }else{
                        $('#pumpBeLang').attr('src','images/symbols/Pump/Pump_007.png') ;
                        state = true
                    }
                }, 500);
                $('#overloadPumpGatBun').html('Overload Pump Gat Bun') ; 
            }
        }else{
            if(toggleOverloadGatBun !== undefined){
                $('#pumpBeLang').attr('src','images/symbols/Pump/Pump_007.png') ;
                $('#overloadPumpGatBun').html('') ; 
                clearInterval(toggleOverloadGatBun)
                toggleOverloadGatBun = undefined ; 
            } ;
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'Motor_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorGatBun === undefined){
                var state = false ; 
                toggleErrorGatBun = setInterval(() => {
                    if(state){
                        $('#pumpBeLang').attr('src','images/symbols/Pump/Pump_009.png') ;
                        state = false
                    }else{
                        $('#pumpBeLang').attr('src','images/symbols/Pump/Pump_007.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorPumpGatBun').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorGatBun !== undefined){
                $('#pumpBeLang').attr('src','images/symbols/Pump/Pump_007.png') ;
                $('#ErrorPumpGatBun').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorGatBun)
                toggleErrorGatBun = undefined ; 
            } ;
        }
       }
       //  error Valve 
       // valve 1
       if(allVariableConfig.nameVariable[i].name === 'Val_1_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorValve_1 === undefined){
                var state = false ; 
                toggleErrorValve_1 = setInterval(() => {
                    if(state){
                        $('#valveNAOH').attr('src','images/symbols/Valve/Valve_037.png') ;
                        state = false
                    }else{
                        $('#valveNAOH').attr('src','images/symbols/Valve/Valve_035.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorValve_1').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorValve_1 !== undefined){
                $('#valveNAOH').attr('src','images/symbols/Valve/Valve_035.png') ;
                $('#ErrorValve_1').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorValve_1)
                toggleErrorValve_1 = undefined ; 
            } ;
        }
       }
       // valve 2
       if(allVariableConfig.nameVariable[i].name === 'Val_2_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorValve_2 === undefined){
                var state = false ; 
                toggleErrorValve_2 = setInterval(() => {
                    if(state){
                        $('#valveHCL').attr('src','images/symbols/Valve/Valve_037.png') ;
                        state = false
                    }else{
                        $('#valveHCL').attr('src','images/symbols/Valve/Valve_035.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorValve_2').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorValve_2 !== undefined){
                $('#valveHCL').attr('src','images/symbols/Valve/Valve_035.png') ;
                $('#ErrorValve_2').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorValve_2)
                toggleErrorValve_2 = undefined ; 
            } ;
        }
       }
       // valve 3
       if(allVariableConfig.nameVariable[i].name === 'Val_3_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorValve_3 === undefined){
                var state = false ; 
                toggleErrorValve_3 = setInterval(() => {
                    if(state){
                        $('#valve_3').attr('src','images/symbols/Valve/Valve_037.png') ;
                        state = false
                    }else{
                        $('#valve_3').attr('src','images/symbols/Valve/Valve_035.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorValve_3').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorValve_3 !== undefined){
                $('#valve_3').attr('src','images/symbols/Valve/Valve_035.png') ;
                $('#ErrorValve_3').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorValve_3)
                toggleErrorValve_3 = undefined ; 
            } ;
        }
       }
       // valve 5
       if(allVariableConfig.nameVariable[i].name === 'Val_5_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorValve_5 === undefined){
                var state = false ; 
                toggleErrorValve_5 = setInterval(() => {
                    if(state){
                        $('#valve_5').attr('src','images/symbols/Valve/Valve_037.png') ;
                        state = false
                    }else{
                        $('#valve_5').attr('src','images/symbols/Valve/Valve_035.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorValve_5').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorValve_5 !== undefined){
                $('#valve_5').attr('src','images/symbols/Valve/Valve_035.png') ;
                $('#ErrorValve_5').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorValve_5)
                toggleErrorValve_5 = undefined ; 
            } ;
        }
       }
       // valve 6
       if(allVariableConfig.nameVariable[i].name === 'Val_6_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorValve_6 === undefined){
                var state = false ; 
                toggleErrorValve_6 = setInterval(() => {
                    if(state){
                        $('#valve_6').attr('src','images/symbols/Valve/Valve_037.png') ;
                        state = false
                    }else{
                        $('#valve_6').attr('src','images/symbols/Valve/Valve_035.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorValve_6').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorValve_6 !== undefined){
                $('#valve_6').attr('src','images/symbols/Valve/Valve_035.png') ;
                $('#ErrorValve_6').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorValve_6)
                toggleErrorValve_6 = undefined ; 
            } ;
        }
       }
       // valve 4
       if(allVariableConfig.nameVariable[i].name === 'Val_4_Err'){
        if(data[i].data === 'true'){
            if(toggleErrorValve_4 === undefined){
                var state = false ; 
                toggleErrorValve_4 = setInterval(() => {
                    if(state){
                        $('#valve4_fb').attr('src','images/symbols/Valve/Valve_052.png') ;
                        state = false
                    }else{
                        $('#valve4_fb').attr('src','images/symbols/Valve/Valve_050.png') ;
                        state = true
                    }
                }, 500);
                $('#ErrorValve_4').css('background-color','red') ; 
            }
        }else{
            if(toggleErrorValve_4 !== undefined){
                $('#valve4_fb').attr('src','images/symbols/Valve/Valve_050.png') ;
                $('#ErrorValve_4').css('background-color','#cdcdcd') ; 
                clearInterval(toggleErrorValve_4)
                toggleErrorValve_4 = undefined ; 
            } ;
        }
       }
    // get alarm 
       if(allVariableConfig.nameVariable[i].name === 'H1'){
        if(data[i].data === 'true'){
           stateAlarm.H1 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Cân Bằng", "High", "Cảnh báo mực nước ở mức High" , "NACK") ; 
            blinkAlarm(false) ; 
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0],0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Cân Bằng" && arrayAlarm[i].Value === "High" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length - 1 === i ){
                            var object = new ObjectAlarm("Bể Cân Bằng", "High", "Cảnh báo mực nước ở mức High" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                           addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.H1 = false ; 
        }
       }
        if(allVariableConfig.nameVariable[i].name === 'L1'){
        if(data[i].data === 'true'){
           stateAlarm.L1 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Cân Bằng", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Cân Bằng" && arrayAlarm[i].Value === "Low" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length -1 === i ){
                            var object = new ObjectAlarm("Bể Cân Bằng", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.L1 = false ; 
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'H2'){
        if(data[i].data === 'true'){
            
           stateAlarm.H2 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Trung Hòa", "High", "Cảnh báo mực nước ở mức High" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Trung Hòa" && arrayAlarm[i].Value === "High" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length - 1 === i ){
                            var object = new ObjectAlarm("Bể Trung Hòa", "High", "Cảnh báo mực nước ở mức High" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.H2 = false ; 
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'L2'){
        if(data[i].data === 'true'){
           stateAlarm.L2 = true ; 
           if(arrayAlarm.length === 0 ){
            var object = new ObjectAlarm("Bể Trung Hòa", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i = 0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Trung Hòa" && arrayAlarm[i].Value === "Low" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length -1 === i ){
                            
                            var object = new ObjectAlarm("Bể Trung Hòa", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.L2 = false ; 
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'H3'){
        if(data[i].data === 'true'){
           stateAlarm.H3 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Tạm", "High", "Cảnh báo mực nước ở mức High" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Tạm" && arrayAlarm[i].Value === "High" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length -1 === i ){
                            var object = new ObjectAlarm("Bể Tạm", "High", "Cảnh báo mực nước ở mức High" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.H3 = false ; 
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'L3'){
        if(data[i].data === 'true'){
           stateAlarm.L3 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Tạm", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Tạm" && arrayAlarm[i].Value === "Low"){
                     break ; 
                    }else{
                        if(arrayAlarm.length -1 === i ){
                            var object = new ObjectAlarm("Bể Tạm", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.L3 = false ; 
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'H5'){
        if(data[i].data === 'true'){
           stateAlarm.H5 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Lắng", "High", "Cảnh báo mực nước ở mức High" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Lắng" && arrayAlarm[i].Value === "High" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length -1 === i ){
                            var object = new ObjectAlarm("Bể Lắng", "High", "Cảnh báo mực nước ở mức High" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1], i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.H5 = false ; 
        }
       }
       if(allVariableConfig.nameVariable[i].name === 'L5'){
        if(data[i].data === 'true'){
           stateAlarm.L5 = true ; 
           if(arrayAlarm.length ===0 ){
            var object = new ObjectAlarm("Bể Lắng", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
            blinkAlarm(false)
            arrayAlarm.push(object) ; 
            addRowAlarm(arrayAlarm[0], 0)
           }else{
               for(let i =0 ; i < arrayAlarm.length ; i++){
                   if( arrayAlarm[i].Source === "Bể Lắng" && arrayAlarm[i].Value === "Low" ){
                     break ; 
                    }else{
                        if(arrayAlarm.length -1 === i ){
                            var object = new ObjectAlarm("Bể Lắng", "Low", "Cảnh báo mực nước ở mức Low" , "NACK")
                            blinkAlarm(false)
                            arrayAlarm.push(object) ; 
                            addRowAlarm(arrayAlarm[i+1],i+1)
                        }
                    }
               }
           }
        }else{
            stateAlarm.L5 = false ; 
        }
       }
    
    } 
    // display alarm run time 
    var t1 = performance.now() ; 
}) ; 


// all function chart 
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
                "upperLimit": "3",
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
            "value": "0"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                    socket.on('changeData', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                            if(allVariableConfig.nameVariable[i].name === 'h_HoChua'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                             }
                            }
                    })
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
                "upperLimit": "3",
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
            "value": "0"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                    socket.on('changeData', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                            if(allVariableConfig.nameVariable[i].name === 'h_CB'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                             }
                            }
                            
                          } )  
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
                "upperLimit": "3",
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
            "value": "0"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                    socket.on('changeData', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                            if(allVariableConfig.nameVariable[i].name === 'h_TH'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                             }
                        }
                          } ) 
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
                "upperLimit": "3",
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
            "value": "0"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                    socket.on('changeData', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                            if(allVariableConfig.nameVariable[i].name === 'h_Temp'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                             }
                        }
                          } )
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
                "upperLimit": "3",
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
            "value": "0"
        },
        "events": {
            "rendered": function (evtObj, argObj) {
                    socket.on('changeData', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                            if(allVariableConfig.nameVariable[i].name === 'h_HK'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                             }
                        }
                          } )  
            }
        }
    });
    fusioncharts5.render();
}) ; 

// Dash board tab
    var mychartsT1 = document.getElementById("ChartT1");
    var pointT1 = [];
    var chartT1 = new CanvasJS.Chart(mychartsT1, {
      zoomEnabled: true,
      theme: 'dark1' ,
      title: {
        text: "T1"
      },
      axisY: {
        includeZero: false,
        suffix: "℃"
      },
      toolTip: {
        shared: "true"
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        fontSize: 22,
        fontColor: "dimGrey"
      },
      data: [
        {
          type: "spline",
          showInLegend: true,
          name: "Line 1",
          markerSize: 0,
          dataPoints: pointT1
        }
      ]
    });
    function renderChartT1() {
      var xVal = new Date();
      yVal = 100 + Math.round(5 + Math.random() * (-5 - 5));
      pointT1.push({
        x: xVal,
        y: yVal
      });
      if (pointT1.length > 10) {
        pointT1.shift();
      }
      chartT1.options.data[0].legendText = " Value T1 : " + yVal;
      chartT1.render();
    };
    setInterval(function() {
    renderChartT1();
    }, 1000);
  
   // End chart container
   
   // fusion chart thermometer
   FusionCharts.ready(function(){
   var chartObjT1 = new FusionCharts({
   type: 'thermometer',
   renderAt: 'ThermometerT1',
   width: '220',
   height: '300',
   dataFormat: 'json',
   dataSource: {
   "chart": {
       "caption": "Temperature Monitor",
       "lowerLimit": "0",
       "upperLimit": "0",
       "bgColor": "#697179" ,
   
       "decimals": "1",
       "numberSuffix": "°C",
       "showhovereffect": "1",
       "thmFillColor": "#008ee4",
       "showGaugeBorder": "1",
       "gaugeBorderColor": "#008ee4",
       "gaugeBorderThickness": "2",
       "gaugeBorderAlpha": "30",
       "thmOriginX": "100",
       "chartBottomMargin": "20",
       "valueFontColor": "#000000",
       "theme": "fusion"
   },
   "value": "0",
   
   },
   "events": {
    "rendered": function (evtObj, argObj) {
        socket.on('changeData', function(data){
            for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                if(allVariableConfig.nameVariable[i].name === 'T1'){
                    evtObj.sender.feedData("&value=" + data[i].data);	
                 } 
                } 
              } )  
    }
   }
   }
   );
       chartObjT1.render();
   });
   

// fusion chart nhietj do T2

var mychartsT2 = document.getElementById("ChartT2");
var pointT2 = [];
var chartT2 = new CanvasJS.Chart(mychartsT2, {
  zoomEnabled: true,
  theme: 'dark1' ,
  title: {
    text: "T2"
  },
  axisY: {
    includeZero: false,
    suffix: "℃"
  },
  toolTip: {
    shared: "true"
  },
  legend: {
    cursor: "pointer",
    verticalAlign: "top",
    fontSize: 22,
    fontColor: "dimGrey"
  },
  data: [
    {
      type: "spline",
      showInLegend: true,
      name: "Line 1",
      markerSize: 0,
      dataPoints: pointT2
    }
  ]
});
function renderChartT2() {
  var xVal = new Date();
  yVal = 100 + Math.round(5 + Math.random() * (-5 - 5));
  pointT2.push({
    x: xVal,
    y: yVal
  });
  if (pointT2.length > 10) {
    pointT2.shift();
  }
  chartT2.options.data[0].legendText = " Value T2 : " + yVal;
  chartT2.render();
};
setInterval(function() {
renderChartT2();
}, 1000);
// End chart container

// fusion chart thermometer
FusionCharts.ready(function(){
var chartObjT2 = new FusionCharts({
type: 'thermometer',
renderAt: 'ThermometerT2',
width: '220',
height: '300',
dataFormat: 'json',
dataSource: {
"chart": {
    "caption": "Temperature Monitor",
    "lowerLimit": "0",
    "upperLimit": "0",
    "bgColor": "#697179" ,

    "decimals": "1",
    "numberSuffix": "°C",
    "showhovereffect": "1",
    "thmFillColor": "#008ee4",
    "showGaugeBorder": "1",
    "gaugeBorderColor": "#008ee4",
    "gaugeBorderThickness": "2",
    "gaugeBorderAlpha": "30",
    "thmOriginX": "100",
    "chartBottomMargin": "20",
    "valueFontColor": "#000000",
    "theme": "fusion"
},
"value": "0",

},
"events": {
    "rendered": function (evtObj, argObj) {
        socket.on('changeData', function(data){
            for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                if(allVariableConfig.nameVariable[i].name === 'T2'){
                    evtObj.sender.feedData("&value=" + data[i].data);	
                 } 
                } 
              } )  
    }
   }
}
);
    chartObjT2.render();
});


// fusion chart nhiet do T3

var mychartsT3 = document.getElementById("ChartT3");
 var dps1 = [];
 var dps2 = [];
 var chartT3 = new CanvasJS.Chart(mychartsT3, {
   zoomEnabled: true,
   theme: 'dark1' ,
   title: {
     text: "T3"
   },
   axisY: {
    includeZero: false,
    suffix: "℃"
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
   chartT3.options.data[0].legendText = " Line 1 Value : " + yVal;
   chartT3.options.data[1].legendText = " Line 2 Value :  " + yVal1;
   chartT3.render();
 };
 updateChart(dataLength);
 setInterval(function() {
   updateChart();
 }, updateInterval);
function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartT3.render();
}
// End chart container

// fusion chart thermometer
FusionCharts.ready(function(){
var chartObjT3 = new FusionCharts({
type: 'thermometer',
renderAt: 'ThermometerT3',
width: '220',
height: '300',
dataFormat: 'json',
dataSource: {
"chart": {
    "caption": "Temperature Monitor",
    "lowerLimit": "0",
    "upperLimit": "0",
    "bgColor": "#697179" ,

    "decimals": "1",
    "numberSuffix": "°C",
    "showhovereffect": "1",
    "thmFillColor": "#008ee4",
    "showGaugeBorder": "1",
    "gaugeBorderColor": "#008ee4",
    "gaugeBorderThickness": "2",
    "gaugeBorderAlpha": "30",
    "thmOriginX": "100",
    "chartBottomMargin": "20",
    "valueFontColor": "#000000",
    "theme": "fusion"
},
"value": "0",

},
"events": {
    "rendered": function (evtObj, argObj) {
        socket.on('changeData', function(data){
            for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                if(allVariableConfig.nameVariable[i].name === 'T3'){
                    evtObj.sender.feedData("&value=" + data[i].data);	
                 }  
                }
              } )  
    }
   }
}
);
    chartObjT3.render();
});


// fusion chart speedometer DO
const dataSource = {
    chart: {
      bgColor: "#697179" ,
      captionpadding: "0",
      origw: "320",
      origh: "300",
      gaugeouterradius: "115",
      gaugestartangle: "270",
      gaugeendangle: "-25",
      showvalue: "1",
      valuefontsize: "30",
      majortmnumber: "13",
      majortmthickness: "2",
      majortmheight: "13",
      minortmheight: "7",
      minortmthickness: "1",
      minortmnumber: "1",
      showgaugeborder: "0",
      theme: "fusion"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "300",
          code: "#F6F6F6"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "110",
          bgcolor: "#F20F2F",
          basewidth: "8"
        }
      ]
    },
    annotations: {
      groups: [
        {
          items: [
            {
              type: "text",
              id: "text",
              text: "mph",
              x: "$gaugeCenterX",
              y: "$gaugeCenterY + 40",
              fontsize: "20",
              color: "#555555"
            }
          ]
        }
      ]
    }
  };
FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "angulargauge",
      renderAt: "Container_DO",
      width: "400",
      height: "400",
      dataFormat: "json",
      dataSource ,
      events: {
        "rendered": function (evtObj, argObj) {
                socket.on('changeData', function(data){  
                    for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i ++){
                        if(allVariableConfig.nameVariable[i].name === 'DO'){
                            evtObj.sender.feedData("&value=" + data[i].data);
                         }
                        }
                      } )
        }
     }
    }).render();
  });

 // PH chart and Flow chart 

 // ph
 var opts = {
    // color configs
    colorStart: "#6fadcf",
    colorStop: void 0,
    gradientType: 0,
    strokeColor: "#e0e0e0",
    generateGradient: true,
    percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],

    // customize pointer
    pointer: {
      length: 0.8,
      strokeWidth: 0.035,
      iconScale: 1.0
    },

    // static labels
    staticLabels: {
      font: "10px sans-serif",
      labels: [0.7, 1.7, 7, 9.3],
      fractionDigits: 0
    },

    // static zones
    staticZones: [
      {strokeStyle: "#F03E3E", min: 0, max: 0.7},
      {strokeStyle: "#FFDD00", min: 0.7, max: 1.7},
      {strokeStyle: "#30B32D", min: 1.7, max: 7},
      {strokeStyle: "#FFDD00", min: 7, max: 9.3},
      {strokeStyle: "#F03E3E", min: 9.3, max: 10}
    ],

    // render ticks
    renderTicks: {
      divisions: 5,
      divWidth: 1.1,
      divLength: 0.7,
      divColor: '#333333',
      subDivisions: 3,
      subLength: 0.5,
      subWidth: 0.6,
      subColor: '#666666'
    },

    // the span of the gauge arc
    angle: 0.15,

    // line thickness
    lineWidth: 0.44,

    // radius scale
    radiusScale: 1.0,

    // font size
    fontSize: 40,

    // if false, max value increases automatically if value > maxValue
    limitMax: false,

    // if true, the min value of the gauge will be fixed
    limitMin: false,

    // High resolution support
    highDpiSupport: true
};
var target = document.getElementById('Container-PH'); 
var gauge = new Gauge(target).setOptions(opts);
document.getElementById("preview-textfield").className = "preview-textfield";
gauge.setTextField(document.getElementById("preview-textfield"));
gauge.maxValue = 10;
gauge.setMinValue(0); 
socket.on('changeData',(data)=>{
    for(let i =0 ; i < allVariableConfig.nameVariable.length ; i++){
        if(allVariableConfig.nameVariable[i].name === 'pH'){
            gauge.set(data[i].data);
        }
    }
})
gauge.animationSpeed = 32

// flow1 va Flow 2
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
          
  var Trefresh = 100; //ms
  
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Flow1', 0],
    ['Flow2', 0]
  ]);

  var options = {
    width: 700, height: 240,
    redFrom: 80, redTo: 100,
    yellowFrom:55, yellowTo: 90,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, options);
  var getValueFlow1 = 0 
  var getValueFlow2 = 0 
  setInterval(function() {
    socket.on('changeData',(data)=>{
        for(let i =0 ; i < allVariableConfig.nameVariable.length ; i++){
            if(allVariableConfig.nameVariable[i].name === 'Flow'){
                getValueFlow1 = data[i].data ; 
            }
        }
    })
    data.setValue(0,1,getValueFlow1);
    chart.draw(data, options);
  }, Trefresh);
  setInterval(function() {
    socket.on('changeData',(data)=>{
        for(let i =0 ; i < allVariableConfig.nameVariable.length ; i++){
            if(allVariableConfig.nameVariable[i].name === 'flow2'){
                getValueFlow2 = data[i].data
            }
        }
    })
    data.setValue(1, 1,getValueFlow2);
    chart.draw(data, options);
  }, Trefresh);
}

// data history 
var previousData = {} ; 
socket.on('historyChange',(data)=>{
    var nextData = data ; 
    if(Object.keys(previousData).length === 0 || previousData.name !== nextData.name || previousData.data !== nextData.data){
        myFunction(data) ; 
        previousData = nextData ; 
    }
})
  // Add variable in table
function myFunction(data_change) {
    if (data_change !== undefined) {
      var table = document.getElementById("tableDataChange");
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = data_change.name;
      cell2.innerHTML = data_change.dataType;
      cell3.innerHTML = data_change.data;
      cell4.innerHTML = getTime(new Date(data_change.date)).dateTime ; 
      if (table.rows.length > 10) {
        table.deleteRow(table.rows.length - 1);
      }
    }
  }
function productDelete(ctl) {
    $(ctl)
      .parents("tr")
      .remove();
  }
})

// add row alarm funtion
function addRowAlarm(data,index){
        var table = document.getElementById("tableAlarm");
        var row = table.insertRow(0);
        row.style.color = 'red'
        var cellstt = row.insertCell(0);
        cellstt.id = `circle-State${index + sttRowAlarm}`; 
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);
        var cell7 = row.insertCell(7);
        cell7.id = `stateAck${index + sttRowAlarm}`; 
        cell1.innerHTML = data.Date ;
        cell2.innerHTML = data.Time ;
        cell3.innerHTML = data.Source;
        cell4.innerHTML = data.Value ;
        cell5.innerHTML = data.Message ;
        cell6.innerHTML = data.Type;
        cell7.innerHTML = data.State ;
        $(`#circle-State${index + sttRowAlarm}`).html(`<div class = "status-circle" style = "width: 20px ; height: 20px ; border-radius: 50%;
        background-color: red;">  </div>`) ;
}


// Write value
// control panel 
function StartControlPanel(){
 socket.emit(`setStart-Stop_In_System_PLC1`,{
     name: 'Start-Stop_In_System_PLC1',
     value: true 
 })
 socket.emit(`setStart-Stop_In_System_PLC2`,{
    name: 'Start-Stop_In_System_PLC2',
    value: true 
})
}
function StopControlPanel(){
    socket.emit(`setStart-Stop_In_System_PLC1`,{
        name: 'Start-Stop_In_System_PLC1',
        value: false 
    })
    socket.emit(`setStart-Stop_In_System_PLC2`,{
        name: 'Start-Stop_In_System_PLC2',
        value: false 
    })
}
function AutoControlPanel(){
    socket.emit(`setAuto-Man_In_System_PLC1`,{
        name: 'Auto-Man_In_System_PLC1',
        value: true 
    }) ;
    socket.emit(`setAuto-Man_In_System_PLC2`,{
        name: 'Auto-Man_In_System_PLC2',
        value: true 
    }) ;
}
function ManControlPanel(){
    socket.emit(`setAuto-Man_In_System_PLC1`,{
        name: 'Auto-Man_In_System_PLC1',
        value: false 
    }) ;
    socket.emit(`setAuto-Man_In_System_PLC2`,{
        name: 'Auto-Man_In_System_PLC2',
        value: false 
    }) ;

}
function ConfirmControlPanel(){
    socket.emit(`setConfirm_System_PLC1`,{
        name: 'Confirm_System_PLC1',
        value: true 
    }) ;
    socket.emit(`setConfirm_System_PLC2`,{
        name: 'Confirm_System_PLC2',
        value: true 
    }) ;
    setTimeout(() => {
        socket.emit(`setConfirm_System_PLC1`,{
            name: 'Confirm_System_PLC1',
            value: false 
        })
        socket.emit(`setConfirm_System_PLC2`,{
            name: 'Confirm_System_PLC2',
            value: false 
        })
    },500);
}
// set time all tank 
//KK
$('#set-hour-KK').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_KK_h`,{
            name: 'Time_Set_KK_h',
            value: $('#set-hour-KK').val()
        })
    }
});
$('#set-minute-KK').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_KK_m`,{
            name: 'Time_Set_KK_m',
            value: $('#set-minute-KK').val()
        })
    }
});
$('#set-second-KK').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_KK_s`,{
            name: 'Time_Set_KK_s',
            value: $('#set-second-KK').val()
        })
    }
});
// HK
$('#set-hour-HK').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_HK_h`,{
            name: 'Time_Set_HK_h',
            value: $('#set-hour-HK').val()
        })
    }
});
$('#set-minute-HK').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_HK_m`,{
            name: 'Time_Set_HK_m',
            value: $('#set-minute-HK').val()
        })
    }
});
$('#set-second-HK').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_HK_s`,{
            name: 'Time_Set_HK_s',
            value: $('#set-second-HK').val()
        })
    }
});
// BL
$('#set-hour-BL').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_BL_h`,{
            name: 'Time_Set_BL_h',
            value: $('#set-hour-BL').val()
        })
    }
});
$('#set-minute-BL').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_BL_m`,{
            name: 'Time_Set_BL_m',
            value: $('#set-minute-BL').val()
        })
    }
});
$('#set-second-BL').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setTime_Set_BL_s`,{
            name: 'Time_Set_BL_s',
            value: $('#set-second-BL').val()
        })
    }
});

// set value eacch modal 

// pump1 
$('#pump1-auto-in').on("click", function(){
    socket.emit(`setpmp1_Auto-Man_In`,{
        name: 'pmp1_Auto-Man_In',
        value: true 
    })
})
$('#pump1-man-in').on("click", function(){
    socket.emit(`setpmp1_Auto-Man_In`,{
        name: 'pmp1_Auto-Man_In',
        value: false 
    })
})
$('#pump1-confirm-in').on("click",function(){
    socket.emit(`setpmp1_Confirm2`,{
        name: 'pmp1_Confirm2',
        value: true 
    })
    socket.emit(`setpmp1_Confirm1`,{
        name: 'pmp1_Confirm1',
        value: true 
    })
    setTimeout(() => {
        socket.emit(`setpmp1_Confirm2`,{
            name: 'pmp1_Confirm2',
            value: false 
        })
        socket.emit(`setpmp1_Confirm1`,{
            name: 'pmp1_Confirm1',
            value: false 
        })
    }, 500);
})
$('#pump1-start-motor1').on("click", function(){
    socket.emit(`setpmp1_Start-Stop_Motor1`,{
        name: 'pmp1_Start-Stop_Motor1',
        value: true 
    })
})
$('#pump1-stop-motor1').on("click", function(){
    socket.emit(`setpmp1_Start-Stop_Motor1`,{
        name: 'pmp1_Start-Stop_Motor1',
        value: false 
    })
})
$('#pump1-start-motor2').on("click", function(){
    socket.emit(`setpmp1_Start-Stop_Motor2`,{
        name: 'pmp1_Start-Stop_Motor2',
        value: true 
    })
})
$('#pump1-stop-motor2').on("click", function(){
    socket.emit(`setpmp1_Start-Stop_Motor2`,{
        name: 'pmp1_Start-Stop_Motor2',
        value: false 
    })
})
$('#hour-pump1_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp1_TimeSet1h`,{
            name: 'pmp1_TimeSet1h',
            value: $('#hour-pump1_1').val()
        })
    }
});
$('#minute-pump1_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp1_TimeSet1m`,{
            name: 'pmp1_TimeSet1m',
            value: $('#minute-pump1_1').val()
        })
    }
});

$('#hour-pump1_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp1_TimeSet2h`,{
            name: 'pmp1_TimeSet2h',
            value: $('#hour-pump1_2').val()
        })
    }
});
$('#minute-pump1_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp1_TimeSet2m`,{
            name: 'pmp1_TimeSet2h',
            value: $('#minute-pump1_2').val()
        })
    }
});

$('#RPM-pump1_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp1_W1`,{
            name: 'pmp1_W1',
            value: $('#RPM-pump1_1').val()
        })
    }
});
$('#RPM-pump1_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp1_W2`,{
            name: 'pmp1_W2',
            value: $('#RPM-pump1_2').val()
        })
    }
});
// pump2
$('#pump2-auto-in').on("click", function(){
    socket.emit(`setpmp2_Auto-Man_In`,{
        name: 'pmp2_Auto-Man_In',
        value: true 
    })
})
$('#pump2-man-in').on("click", function(){
    socket.emit(`setpmp2_Auto-Man_In`,{
        name: 'pmp2_Auto-Man_In',
        value: false 
    })
})
$('#pump2-confirm-in').on("click",function(){
    socket.emit(`setpmp2_Confirm2`,{
        name: 'pmp2_Confirm2',
        value: true 
    })
    socket.emit(`setpmp2_Confirm1`,{
        name: 'pmp2_Confirm1',
        value: true 
    })
    setTimeout(() => {
        socket.emit(`setpmp2_Confirm2`,{
            name: 'pmp2_Confirm2',
            value: false 
        })
        socket.emit(`setpmp2_Confirm1`,{
            name: 'pmp2_Confirm1',
            value: false 
        })
    }, 500);
})
$('#pump2-start-motor1').on("click", function(){
    socket.emit(`setpmp2_Start-Stop_Motor1`,{
        name: 'pmp2_Start-Stop_Motor1',
        value: true 
    })
})
$('#pump2-stop-motor1').on("click", function(){
    socket.emit(`setpmp2_Start-Stop_Motor1`,{
        name: 'pmp2_Start-Stop_Motor1',
        value: false 
    })
})
$('#pump2-start-motor2').on("click", function(){
    socket.emit(`setpmp2_Start-Stop_Motor2`,{
        name: 'pmp2_Start-Stop_Motor2',
        value: true 
    })
})
$('#pump2-stop-motor2').on("click", function(){
    socket.emit(`setpmp2_Start-Stop_Motor2`,{
        name: 'pmp2_Start-Stop_Motor2',
        value: false 
    })
})
$('#hour-pump2_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp2_TimeSet1h`,{
            name: 'pmp2_TimeSet1h',
            value: $('#hour-pump2_1').val()
        })
    }
});
$('#minute-pump2_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp2_TimeSet1m`,{
            name: 'pmp2_TimeSet1m',
            value: $('#minute-pump2_1').val()
        })
    }
});

$('#hour-pump2_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp2_TimeSet2h`,{
            name: 'pmp2_TimeSet2h',
            value: $('#hour-pump2_2').val()
        })
    }
});
$('#minute-pump2_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp2_TimeSet2m`,{
            name: 'pmp2_TimeSet2h',
            value: $('#minute-pump2_2').val()
        })
    }
});

$('#RPM-pump2_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp2_W1`,{
            name: 'pmp2_W1',
            value: $('#RPM-pump2_1').val()
        })
    }
});
$('#RPM-pump2_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp2_W2`,{
            name: 'pmp2_W2',
            value: $('#RPM-pump2_2').val()
        })
    }
});
//pump3
$('#pump3-auto-in').on("click", function(){
    socket.emit(`setpmp3_Auto-Man_In`,{
        name: 'pmp3_Auto-Man_In',
        value: true 
    })
})
$('#pump3-man-in').on("click", function(){
    socket.emit(`setpmp3_Auto-Man_In`,{
        name: 'pmp3_Auto-Man_In',
        value: false 
    })
})
$('#pump3-confirm-in').on("click",function(){
    socket.emit(`setpmp3_Confirm2`,{
        name: 'pmp3_Confirm2',
        value: true 
    })
    socket.emit(`setpmp3_Confirm1`,{
        name: 'pmp3_Confirm1',
        value: true 
    })
    setTimeout(() => {
        socket.emit(`setpmp3_Confirm2`,{
            name: 'pmp3_Confirm2',
            value: false 
        })
        socket.emit(`setpmp3_Confirm1`,{
            name: 'pmp3_Confirm1',
            value: false 
        })
    }, 500);
})
$('#pump3-start-motor1').on("click", function(){
    socket.emit(`setpmp3_Start-Stop_Motor1`,{
        name: 'pmp3_Start-Stop_Motor1',
        value: true 
    })
})
$('#pump3-stop-motor1').on("click", function(){
    socket.emit(`setpmp3_Start-Stop_Motor1`,{
        name: 'pmp3_Start-Stop_Motor1',
        value: false 
    })
})
$('#pump3-start-motor2').on("click", function(){
    socket.emit(`setpmp3_Start-Stop_Motor2`,{
        name: 'pmp3_Start-Stop_Motor2',
        value: true 
    })
})
$('#pump3-stop-motor2').on("click", function(){
    socket.emit(`setpmp3_Start-Stop_Motor2`,{
        name: 'pmp3_Start-Stop_Motor2',
        value: false 
    })
})
$('#hour-pump3_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp3_TimeSet1h`,{
            name: 'pmp3_TimeSet1h',
            value: $('#hour-pump3_1').val()
        })
    }
});
$('#minute-pump3_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp3_TimeSet1m`,{
            name: 'pmp3_TimeSet1m',
            value: $('#minute-pump3_1').val()
        })
    }
});

$('#hour-pump3_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp3_TimeSet2h`,{
            name: 'pmp3_TimeSet2h',
            value: $('#hour-pump3_2').val()
        })
    }
});
$('#minute-pump3_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp3_TimeSet2m`,{
            name: 'pmp3_TimeSet2h',
            value: $('#minute-pump3_2').val()
        })
    }
});

$('#RPM-pump3_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp3_W1`,{
            name: 'pmp3_W1',
            value: $('#RPM-pump3_1').val()
        })
    }
});
$('#RPM-pump3_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp3_W2`,{
            name: 'pmp3_W2',
            value: $('#RPM-pump3_2').val()
        })
    }
});
//pump4
$('#pump4-auto-in').on("click", function(){
    socket.emit(`setpmp4_Auto-Man_In`,{
        name: 'pmp4_Auto-Man_In',
        value: true 
    })
})
$('#pump4-man-in').on("click", function(){
    socket.emit(`setpmp4_Auto-Man_In`,{
        name: 'pmp4_Auto-Man_In',
        value: false 
    })
})
$('#pump4-confirm-in').on("click",function(){
    socket.emit(`setpmp4_Confirm2`,{
        name: 'pmp4_Confirm2',
        value: true 
    })
    socket.emit(`setpmp4_Confirm1`,{
        name: 'pmp4_Confirm1',
        value: true 
    })
    setTimeout(() => {
        socket.emit(`setpmp4_Confirm2`,{
            name: 'pmp4_Confirm2',
            value: false 
        })
        socket.emit(`setpmp4_Confirm1`,{
            name: 'pmp4_Confirm1',
            value: false 
        })
    }, 500);
})
$('#pump4-start-motor1').on("click", function(){
    socket.emit(`setpmp4_Start-Stop_Motor1`,{
        name: 'pmp4_Start-Stop_Motor1',
        value: true 
    })
})
$('#pump4-stop-motor1').on("click", function(){
    socket.emit(`setpmp4_Start-Stop_Motor1`,{
        name: 'pmp4_Start-Stop_Motor1',
        value: false 
    })
})
$('#pump4-start-motor2').on("click", function(){
    socket.emit(`setpmp4_Start-Stop_Motor2`,{
        name: 'pmp4_Start-Stop_Motor2',
        value: true 
    })
})
$('#pump4-stop-motor2').on("click", function(){
    socket.emit(`setpmp4_Start-Stop_Motor2`,{
        name: 'pmp4_Start-Stop_Motor2',
        value: false 
    })
})
$('#hour-pump4_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp4_TimeSet1h`,{
            name: 'pmp4_TimeSet1h',
            value: $('#hour-pump4_1').val()
        })
    }
});
$('#minute-pump4_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp4_TimeSet1m`,{
            name: 'pmp4_TimeSet1m',
            value: $('#minute-pump4_1').val()
        })
    }
});

$('#hour-pump4_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp4_TimeSet2h`,{
            name: 'pmp4_TimeSet2h',
            value: $('#hour-pump4_2').val()
        })
    }
});
$('#minute-pump4_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp4_TimeSet2m`,{
            name: 'pmp4_TimeSet2h',
            value: $('#minute-pump4_2').val()
        })
    }
});

$('#RPM-pump4_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp4_W1`,{
            name: 'pmp4_W1',
            value: $('#RPM-pump4_1').val()
        })
    }
});
$('#RPM-pump4_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp4_W2`,{
            name: 'pmp4_W2',
            value: $('#RPM-pump4_2').val()
        })
    }
});
//pump5
$('#pump5-auto-in').on("click", function(){
    socket.emit(`setpmp5_Auto-Man_In`,{
        name: 'pmp5_Auto-Man_In',
        value: true 
    })
})
$('#pump5-man-in').on("click", function(){
    socket.emit(`setpmp5_Auto-Man_In`,{
        name: 'pmp5_Auto-Man_In',
        value: false 
    })
})
$('#pump5-confirm-in').on("click",function(){
    socket.emit(`setpmp5_Confirm2`,{
        name: 'pmp5_Confirm2',
        value: true 
    })
    socket.emit(`setpmp5_Confirm1`,{
        name: 'pmp5_Confirm1',
        value: true 
    })
    setTimeout(() => {
        socket.emit(`setpmp5_Confirm2`,{
            name: 'pmp5_Confirm2',
            value: false 
        })
        socket.emit(`setpmp5_Confirm1`,{
            name: 'pmp5_Confirm1',
            value: false 
        })
    }, 500);
})
$('#pump5-start-motor1').on("click", function(){
    socket.emit(`setpmp5_Start-Stop_Motor1`,{
        name: 'pmp5_Start-Stop_Motor1',
        value: true 
    })
})
$('#pump5-stop-motor1').on("click", function(){
    socket.emit(`setpmp5_Start-Stop_Motor1`,{
        name: 'pmp5_Start-Stop_Motor1',
        value: false 
    })
})
$('#pump5-start-motor2').on("click", function(){
    socket.emit(`setpmp5_Start-Stop_Motor2`,{
        name: 'pmp5_Start-Stop_Motor2',
        value: true 
    })
})
$('#pump5-stop-motor2').on("click", function(){
    socket.emit(`setpmp5_Start-Stop_Motor2`,{
        name: 'pmp5_Start-Stop_Motor2',
        value: false 
    })
})
$('#hour-pump5_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp5_TimeSet1h`,{
            name: 'pmp5_TimeSet1h',
            value: $('#hour-pump5_1').val()
        })
    }
});
$('#minute-pump5_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp5_TimeSet1m`,{
            name: 'pmp5_TimeSet1m',
            value: $('#minute-pump5_1').val()
        })
    }
});

$('#hour-pump5_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp5_TimeSet2h`,{
            name: 'pmp5_TimeSet2h',
            value: $('#hour-pump5_2').val()
        })
    }
});
$('#minute-pump5_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp5_TimeSet2m`,{
            name: 'pmp5_TimeSet2h',
            value: $('#minute-pump5_2').val()
        })
    }
});

$('#RPM-pump5_1').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp5_W1`,{
            name: 'pmp5_W1',
            value: $('#RPM-pump5_1').val()
        })
    }
});
$('#RPM-pump5_2').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit(`setpmp5_W2`,{
            name: 'pmp5_W2',
            value: $('#RPM-pump5_2').val()
        })
    }
});

var interval ; 
// emerrgency 
$('#btnEmergency').on('click', function () { 
         if(stateEmergency === true){
            socket.emit(`setEmg_Scada1`,{
                name: 'Emg_Scada1',
                value: false
            })
            socket.emit(`setEmg_Scada2`,{
                name: 'Emg_Scada2',
                value: false
            })
            clearInterval(interval) ;
            $('#emergencyCircle').css({"background-color":""});
         }else{
            socket.emit(`setEmg_Scada2`,{
                name: 'Emg_Scada2',
                value: true 
            })
            socket.emit(`setEmg_Scada1`,{
                name: 'Emg_Scada1',
                value: true 
            }) ;
            var state = false ; 
            interval =  setInterval(() => {
                if(state){
                    $('#emergencyCircle').css({"background-color":"red"});
                    state = false ; 
                }else{
                    $('#emergencyCircle').css({"background-color":"yellow"});
                    state = true
                }   
            }, 700);
         }
})


function findData() {
    $("#tableFindData").empty();
    var start = new Date($("#starttime").val());
    var stop = new Date($("#endtime").val());
    var dataarr = [start, stop];
    var name = $('#tagNameFind').val() ; 
    socket.emit("findData", {dataarr , name});
    console.log({dataarr , name})
}
socket.on("resultFindData", function(data) {
    if(data.length === 0 ){
        console.log('ok')
        $('#messageFindVariable').html('No Result').css('color','red')
    }
    for (var i = 0; i < data.length; i++) {  
      var table = document.getElementById("tableFindData");
      var row = table.insertRow(0);
      var cellstt = row.insertCell(0);
      cellstt.id = "stt" ; 
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      cell1.innerHTML = data[i].name;
      cell2.innerHTML = data[i].dataType;
      cell3.innerHTML = data[i].data;
      cell4.innerHTML = getTime(new Date(data[i].date)).dateTime;
      $('#stt').html(data.length - i) ; 
    }
  });

// reload Alarm 


 // Alarm 
$('#Acknowledge').on("click", function(){
    socket.emit(`setAck1`,{
        name: 'Ack1',
        value: true 
    });
    socket.emit(`setAck2`,{
        name: 'Ack2',
        value: true 
    }) ;
    setTimeout(() => {
        socket.emit(`setAck1`,{
            name: 'Ack1',
            value: false 
        });
        socket.emit(`setAck2`,{
            name: 'Ack2',
            value: false 
        }) ; 
    }, 500);
   for(let i =0 ; i < arrayAlarm.length ; i++){
    $(`#stateAck${i + sttRowAlarm}`).html('ACK') ; 
    $(`#circle-State${i +sttRowAlarm}`).html(`<div class = "status-circle" style = "width: 20px ; height: 20px ; border-radius: 50%;
        background-color: green;">  </div>`) ;
        arrayAlarm[i].State = 'ACK'
   }
    $('#tableAlarm').css('color','aliceblue') ; 
    socket.emit('tableAck',arrayAlarm) ; 
    blinkAlarm(true) ; 
})

// funtion blink Alarm
var arrayAllAlarm = [] ; 
function blinkAlarm(state){
    var stateLamp = false ;
    var intervalAlarm = setInterval(() => {
        if(stateLamp){
            $('#nav-alarm-tab').css('background-color', 'yellow') ;
            stateLamp = false ; 
        }else{
            $('#nav-alarm-tab').css('background-color', 'blue') ;
            stateLamp = true ; 
        }
    }, 1000); 
    arrayAllAlarm.push(intervalAlarm) ; 
    if(state === true ){
        for(let i= 0 ; i < arrayAllAlarm.length ; i++){
            clearInterval(arrayAllAlarm[i]); 
        } 
        $('#nav-alarm-tab').css('background-color', '') ;
    }
}

// get time and color 
function getTime(data){
    let today = data;
    let date = today.getFullYear() + "-" +  (today.getMonth() + 1) + "-" + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return {dateTime: date + " " + time , date: date , time: time};
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


// clock 
/**
 * Get the current time
 */
function getNow() {
    var now = new Date();
    return {
      hours: now.getHours() + now.getMinutes() / 60,
      minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
      seconds: now.getSeconds() * 12 / 60
    };
  }
  
  /**
   * Pad numbers
   */
function pad(number, length) {
    // Create an array of the remaining length + 1 and join it with 0's
    return new Array((length || 2) + 1 - String(number).length).join(0) + number;
  }
  var now = getNow();
  // Create the chart
  Highcharts.chart('clock-display', {
    chart: {
      type: 'gauge',
      backgroundColor: "#0000" ,
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height: '100%',
     
    },
    exporting: { enabled: false } ,
    credits: {
      enabled: false
    },
  
    title: {
      text: 'Clock',
      style: {
        color: '#0000',
        font: 'bold 18px "Trebuchet MS", Verdana, sans-serif'
     }
    },
  
    pane: {
      background: [{
        // default background
      }, {
        // reflex for supported browsers
        backgroundColor: Highcharts.svg ? {
          radialGradient: {
            cx: 0.5,
            cy: -0.4,
            r: 1.9
          },
          stops: [
            [0.5, 'rgba(255, 255, 255, 0.2)'],
            [0.5, 'rgba(200, 200, 200, 0.2)']
          ]
        } : null
      }]
    },
  
    yAxis: {
      labels: {
        distance: -20
      },
      min: 0,
      max: 12,
      lineWidth: 0,
      showFirstLabel: false,
  
      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 5,
      minorTickPosition: 'inside',
      minorGridLineWidth: 0,
      minorTickColor: '#666',
  
      tickInterval: 1,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      title: {
        text: 'Powered by<br/>Highcharts',
        style: {
          color: '#BBB',
          fontWeight: 'normal',
          fontSize: '8px',
          lineHeight: '10px'
        },
        y: 10
      }
    },
    tooltip: {
      formatter: function () {
        return this.series.chart.tooltipText;
      }
    },
    series: [{
      data: [{
        id: 'hour',
        y: now.hours,
        dial: {
          radius: '60%',
          baseWidth: 4,
          baseLength: '95%',
          rearLength: 0
        }
      }, {
        id: 'minute',
        y: now.minutes,
        dial: {
          baseLength: '95%',
          rearLength: 0
        }
      }, {
        id: 'second',
        y: now.seconds,
        dial: {
          radius: '100%',
          baseWidth: 1,
          rearLength: '20%'
        }
      }],
      animation: false,
      dataLabels: {
        enabled: false
      }
    }]
  },
  // Move
  function (chart) {
    setInterval(function () {
      now = getNow();
      if (chart.axes) { // not destroyed
        var hour = chart.get('hour'),
          minute = chart.get('minute'),
          second = chart.get('second'),
          // run animation unless we're wrapping around from 59 to 0
          animation = now.seconds === 0 ?
            false : {
              easing: 'easeOutBounce'
            };
        chart.tooltipText =
            pad(Math.floor(now.hours), 2) + ':' +
            pad(Math.floor(now.minutes * 5), 2) + ':' +
            pad(now.seconds * 5, 2);
        hour.update(now.hours, true, animation);
        minute.update(now.minutes, true, animation);
        second.update(now.seconds, true, animation);
      }
  
    }, 1000);
  
  });
Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
      return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
      return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
      return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
  };
  