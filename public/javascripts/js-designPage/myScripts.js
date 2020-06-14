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
var stateKK = {state: false}
socket.on('Read' , (data)=>{
    for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){

        // sensor be chua
        if(allVariableConfig.nameVariable[i].name === 'Ack1'){
            	if(data[i].data === 1){
                    $("#sensorBeChua").attr("src",'images/symbols/Light/Light_008.png');
                    
                }else{
                    $("#sensorBeChua").attr("src",'images/symbols/Light/Light_007.png');
                }
         }
         //pipe before pump1_1 and pump1_2

         if(allVariableConfig.nameVariable[i].name === 'Pump1_1_Run'){
            if(data[i].data === 1){
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
            if(data[i].data === 1){
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
            if(data[i].data === 1){
                $("#sensorHightBeCanBang").attr("src",'images/symbols/Light/Light_008.png');
                
            }else{
                $("#sensorHightBeCanBang").attr("src",'images/symbols/Light/Light_007.png');
            }}
        if(allVariableConfig.nameVariable[i].name === 'H1_Thres'){
            if(data[i].data === 1){
                 $("#sensorThresBeCanBang").attr("src",'images/symbols/Light/Light_008.png');
                    
            }else{
                $("#sensorThresBeCanBang").attr("src",'images/symbols/Light/Light_007.png');
                } }  
        if(allVariableConfig.nameVariable[i].name === 'L1'){
            if(data[i].data === 1){
                $("#sensorlowBeCanBang").attr("src",'images/symbols/Light/Light_008.png');
                        
            }else{
                $("#sensorlowBeCanBang").attr("src",'images/symbols/Light/Light_007.png');
                }
       }
       // nhiet do T1
       if(allVariableConfig.nameVariable[i].name === 'random'){
          $('#valueNhietDoT1').html('T1 : ' + data[i].data + ' ℃') ;
        }
      //pipe before pump2_1 and pump2_2

      if(allVariableConfig.nameVariable[i].name === 'Pump2_1_Run'){
        if(data[i].data === 1){
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
        if(data[i].data === 1){
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
        if(data[i].data === 1){
            $("#sensorHightBeTrungHoa").attr("src",'images/symbols/Light/Light_008.png');
            
        }else{
            $("#sensorHightBeTrungHoa").attr("src",'images/symbols/Light/Light_007.png');
        }}
    if(allVariableConfig.nameVariable[i].name === 'L2'){
        if(data[i].data === 1){
             $("#sensorLowBeTrungHoa").attr("src",'images/symbols/Light/Light_008.png');
                
        }else{
            $("#sensorLowBeTrungHoa").attr("src",'images/symbols/Light/Light_007.png');
            } }  
    //sensor naoh and hcl
    if(allVariableConfig.nameVariable[i].name === 'L6'){
        if(data[i].data === 1){
            $("#sensorNAOH").attr("src",'images/symbols/Light/Light_008.png');
            
        }else{
            $("#sensorNAOH").attr("src",'images/symbols/Light/Light_007.png');
        }}
    if(allVariableConfig.nameVariable[i].name === 'L7'){
        if(data[i].data === 1){
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
        if(data[i].data === 1){
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
        if(data[i].data === 1){
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
        if(data[i].data === 1){
        $('#pumpNAOHHCL').attr("src",'images/symbols/Pump/Pump_028.png') ;
        }else{
        $('#pumpNAOHHCL').attr("src",'images/symbols/Pump/Pump_027.png') ;   
        }
      } 
      // Mix Run
      if(allVariableConfig.nameVariable[i].name === 'Mix_Run'){
        if(data[i].data === 1){
        $('#mixer_1').attr("src",'images/symbols/Mixer/Mixer_013.png') ;
        }else{
        $('#mixer_2').attr("src",'images/symbols/Mixer/Mixer_012.png') ;   
        }
      }
      // PH 
      if(allVariableConfig.nameVariable[i].name === 'Flow'){
        $('#valuePH').html('PH : ' + data[i].data ) ;
      } 
     
      //pipe before pump3_1 and pump3_2

      if(allVariableConfig.nameVariable[i].name === 'Ack1'){
        if(data[i].data === 1){
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
        if(data[i].data === 1){
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
        if(data[i].data === 1){
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
    if(allVariableConfig.nameVariable[i].name === 'Flow1'){
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
   if(allVariableConfig.nameVariable[i].name === 'Ack1'){
    if(data[i].data === 1){
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
    if(data[i].data === 1){
        $("#sensorHightBeTam").attr("src",'images/symbols/Light/Light_008.png');
        
    }else{
        $("#sensorHightBeTam").attr("src",'images/symbols/Light/Light_007.png');
    }}
    if(allVariableConfig.nameVariable[i].name === 'H3_Thres'){
    if(data[i].data === 1){
        $("#sensorThresBeTam").attr("src",'images/symbols/Light/Light_008.png');
            
    }else{
        $("#sensorThresBeTam").attr("src",'images/symbols/Light/Light_007.png');
    }}
    if(allVariableConfig.nameVariable[i].name === 'L3'){
    if(data[i].data === 1){
        $("#sensorLowBeTam").attr("src",'images/symbols/Light/Light_008.png');
                
    }else{
        $("#sensorLowBeTam").attr("src",'images/symbols/Light/Light_007.png');
    }}
    //pipe before pump4_1 and pump4_2
    
    if(allVariableConfig.nameVariable[i].name === 'Pump4_1_Run'){
        if(data[i].data === 1){
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
        if(data[i].data === 1){
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
    if(allVariableConfig.nameVariable[i].name === 'Flow2'){
        $('#valueFlow2').html('Flow2 : ' + data[i].data ) ;
      }
   //pipe before pump4_1 and pump4_2
    
   if(allVariableConfig.nameVariable[i].name === 'Pump5_1_Run'){
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    $('#valueNhietDoHieuKhi').html('T2 : ' + data[i].data + ' ℃') ;
    }
 // DO
 if(allVariableConfig.nameVariable[i].name === 'DO'){
    $('#valueNongDoOxi').html('T2 : ' + data[i].data ) ;
    }
 // Motor run
 if(allVariableConfig.nameVariable[i].name === 'Motor_Run'){
    if(data[i].data === 1){
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
    if(data[i].data === 1){
        $("#sensorHightBeLang").attr("src",'images/symbols/Light/Light_008.png');
        
    }else{
        $("#sensorHightBeLang").attr("src",'images/symbols/Light/Light_007.png');
    }}
    if(allVariableConfig.nameVariable[i].name === 'H5_Thres'){
    if(data[i].data === 1){
        $("#sensorThresBeLang").attr("src",'images/symbols/Light/Light_008.png');
            
    }else{
        $("#sensorThresBeLang").attr("src",'images/symbols/Light/Light_007.png');
    }}
    if(allVariableConfig.nameVariable[i].name === 'L5'){
    if(data[i].data === 1){
        $("#sensorLowBeLang").attr("src",'images/symbols/Light/Light_008.png');
                
    }else{
        $("#sensorLowBeLang").attr("src",'images/symbols/Light/Light_007.png');
    }}
  // pump6 run
  if(allVariableConfig.nameVariable[i].name === 'Pump6_Run'){
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
    $("#valve_6").attr("src",'images/symbols/Valve/Valve_036.png');
    $("#symbols_7").attr("src",'images/symbols/International_Symbols/International_Symbols_020.png');
   }else{
    $("#valve_6").attr("src",'images/symbols/Valve/Valve_035.png');
    $("#symbols_7").attr("src",'images/symbols/International_Symbols/International_Symbols_004.png');
  }}
 
  // den bao giai doan
  if(allVariableConfig.nameVariable[i].name === 'TH_Done'){
    if(data[i].data === 1){
        $("#TH_Done").attr("src",'images/symbols/Light/Light_014.png');
    }else{
        $("#TH_Done").attr("src",'images/symbols/Light/Light_013.png');
    }
    }
 if(allVariableConfig.nameVariable[i].name === 'KK_Done'){
      if(data[i].data === 1){
            $("#KK_Done").attr("src",'images/symbols/Light/Light_014.png');
      }else{
            $("#KK_Done").attr("src",'images/symbols/Light/Light_013.png');
      }  
        }
 if(allVariableConfig.nameVariable[i].name === 'HK_Done'){
    if(data[i].data === 1){
        $("#HK_Done").attr("src",'images/symbols/Light/Light_014.png');
    }else{
         $("#HK_Done").attr("src",'images/symbols/Light/Light_013.png');
            }
    }
 if(allVariableConfig.nameVariable[i].name === 'BL_Done'){
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
    if(data[i].data === 1){
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
 if(allVariableConfig.nameVariable[i].name === 'random'){
   var progressBarVal= data[i].data;   
   var html="<div class='progress-bar progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='100' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" m</div>";    
   $("#h_Ki_Khi").html(html);   
 }
 // bl
 if(allVariableConfig.nameVariable[i].name === 'random'){
    var progressBarVal= data[i].data;   
    var html="<div class='progress-bar  progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='100' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" m</div>";    
    $("#h_Be_Lang").html(html);   
  }
  // hcl
  if(allVariableConfig.nameVariable[i].name === 'random'){
    var progressBarVal= data[i].data;   
    var html="<div class='progress-bar  progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='100' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" m</div>";    
    $("#h_Hcl").html(html);   
  }
  //naoh
  if(allVariableConfig.nameVariable[i].name === 'random'){
    var progressBarVal= data[i].data;   
    var html="<div class='progress-bar  progress-bar-striped bg-info active' role='progressbar' aria-valuenow="+progressBarVal+" aria-valuemin='0' aria-valuemax='100' style='height:"+progressBarVal+"% ; width: 100%'>"+progressBarVal+" m</div>";    
    $("#h_Naoh").html(html);   
  }

 }
})

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
                    socket.on('Read', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){
                            if(allVariableConfig.nameVariable[i].name === 'random'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                                break ; 
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
                    socket.on('Read', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){
                            if(allVariableConfig.nameVariable[i].name === 'h_CB'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                                break ; 
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
                    socket.on('Read', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){
                            if(allVariableConfig.nameVariable[i].name === 'h_TH'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                                break ; 
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
                    socket.on('Read', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){
                            if(allVariableConfig.nameVariable[i].name === 'h_Temp'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                                break ; 
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
                    socket.on('Read', function(data){
                        for(let i = 0 ; i < allVariableConfig.nameVariable.length ; i++){
                            if(allVariableConfig.nameVariable[i].name === 'h_HK'){
                                evtObj.sender.feedData("&value=" + data[i].data);	
                                break ; 
                             }
                            }
                          } )  
            }
        }
    });
    fusioncharts5.render();
}) ; 

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
    })
    socket.emit(`setConfirm_System_PLC2`,{
        name: 'Confirm_System_PLC2',
        value: true 
    })
    setTimeout(() => {
        socket.emit(`setConfirm_System_PLC1`,{
            name: 'Confirm_System_PLC1',
            value: false 
        })
        socket.emit(`setConfirm_System_PLC2`,{
            name: 'Confirm_System_PLC2',
            value: false 
        })
    }, 100);
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
    setTimeout(() => {
        socket.emit(`setpmp1_Confirm2`,{
            name: 'pmp1_Confirm2',
            value: false 
        })
    }, 100);
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
    setTimeout(() => {
        socket.emit(`setpmp2_Confirm2`,{
            name: 'pmp2_Confirm2',
            value: false 
        })
    }, 100);
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
    setTimeout(() => {
        socket.emit(`setpmp3_Confirm2`,{
            name: 'pmp3_Confirm2',
            value: false 
        })
    }, 100);
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
    setTimeout(() => {
        socket.emit(`setpmp4_Confirm2`,{
            name: 'pmp4_Confirm2',
            value: false 
        })
    }, 100);
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
    setTimeout(() => {
        socket.emit(`setpmp5_Confirm2`,{
            name: 'pmp5_Confirm2',
            value: false 
        })
    }, 100);
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


// get chieu cao kk , bl hcl , naoh
 