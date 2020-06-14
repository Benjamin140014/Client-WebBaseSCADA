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

      if(allVariableConfig.nameVariable[i].name === 'Pump3_1_Run'){
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
        $("#symbols_4").attr("src",'images/symbols/International_Symbols/International_Symbols_018.png');
    }
    else{
        $("#pipe_31").attr("src",'images/symbols/Pipes/Pipes_112.png');
        $("#pipe_38").attr("src",'images/symbols/Pipes/Pipes_107.png');
        $("#pipe_39").attr("src",'images/symbols/Pipes/Pipes_007.png');
        $("#symbols_4").attr("src",'images/symbols/International_Symbols/International_Symbols_013.png');
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
   if(allVariableConfig.nameVariable[i].name === 'H4'){
    if(data[i].data === 1){
        $("#sensorKiKhi").attr("src",'images/symbols/Light/Light_008.png');
        
    }else{
        $("#sensorKiKhi").attr("src",'images/symbols/Light/Light_007.png');
    }}
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
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_KK_h'){
    $('#set-hour-KK').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_KK_m'){
    $('#set-minute-KK').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_KK_s'){
    $('#set-second-KK').val(data[i].data) 
 }

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
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_HK_h'){
    $('#set-hour-HK').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_HK_m'){
    $('#set-minute-HK').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_HK_s'){
    $('#set-second-HK').val(data[i].data) 
 }

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
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_BL_h'){
    $('#set-hour-BL').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_BL_m'){
    $('#set-minute-BL').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Set_BL_s'){
    $('#set-second-BL').val(data[i].data) 
 }

 if(allVariableConfig.nameVariable[i].name === 'Time_Count_BL_h'){
    $('#count-hour-BL').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Count_BL_m'){
    $('#count-minute-BL').val(data[i].data) 
 }
 if(allVariableConfig.nameVariable[i].name === 'Time_Count_BL_s'){
    $('#count-second-BL').val(data[i].data) 
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
 socket.emit('')
}
function StopControlPanel(){
    
}
function AutoControlPanel(){
    
}
function ManControlPanel(){
    
}
function ConfirmControlPanel(){
    
}
