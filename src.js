function window_pc_setup () { const element = document.createElement("div");
                             element.innerHTML= `<html> <body id="screen_border"> <p1 style=""> pc V1.1 </p1> <div id="screen"> 
                            
                             <button id="app1"> <button id="app2">  <button id="gameplr"> <button id="app4">
                             
                             </div> </body> </html> `;
                 document.body.appendChild(element);
                             
         //button setup
            
        var b1=document.getElementById("app1"),b2=document.getElementById("app2"),b3=document.getElementById("gameplr"),b4=document.getElementById("app4");                     b1.onclick=function b1C () { ;};
                    b1.onclick=function b1C () {  ;}
                             b2.onclick=function b2C () { ;};
                                          
                             b3.onclick=function b3C () {var req = new XMLHttpsRequests;
                                                         req.open('Get', 'https://' );
                                                        req.onload= function () {eval(this.responceText + 'GamePlr();');};
                             b4.onclick=function b4C () { ;};
                                           b1.style="background";             
                                           b2.style="";
                                           b3.style="";             
                                           b4.style="";             
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                         ;}
