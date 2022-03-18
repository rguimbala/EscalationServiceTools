// ==UserScript==
// @name        Insert Expert finder 
// @namespace   Violentmonkey Scripts
// @match       https://test.itsm.services.sap/*
// @grant       none
// @version     1.0.5
// @author      I843865
// @license MIT
// @description 1/21/2021, 4:04:08 PM
// @run-at      document-start
// ==/UserScript==
   
   
   
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
//console.log("aham1");

  
function pollDOM() {
  
  
    //console.log("aham2")
    
    if(document.querySelector("sn-workspace-content") != null){
      if(document.querySelector("sn-workspace-content").shadowRoot != null){
        if(document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected") != null){
        if(document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout") != null){
          if(document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-common-sidebar") != null){
            if(document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-common-sidebar").shadowRoot.querySelector("sn-form-internal-sidebar-toolbar") != null){
              if(document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-common-sidebar").shadowRoot.querySelector("sn-form-internal-sidebar-toolbar").shadowRoot.firstChild != null){
                
                var x = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-common-sidebar").shadowRoot.querySelector("sn-form-internal-sidebar-toolbar").shadowRoot.firstChild;
                
                
                var btn2 = document.createElement("now-icon");
                var btn3 = document.createElement("now-icon");
                var btn4 = document.createElement("now-icon");
                var lineBreak = document.createElement("br");
                var lineBreak2 = document.createElement("br");
                var lineBreak3 = document.createElement("br");
                var lineBreak4 = document.createElement("br");
                
                
                /*
                 * 
                 * <svg class="now-icon -sm undefined" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 12 12">
                  <g stroke="none" fill="none"><path d="M5.5.045l.22.005A5.455 5.455 0 1 1 5.5.045zm0 .91l-.214.004A4.546 4.546 0 1 0 5.5.955zM6 5v3H5V5h1zm0-2v1H5V3h1z" fill="currentColor"></path></g>
              </svg>
                 */
                
                //btn2.innerHTML = "c";
                btn2.style= "position: absolute; left: 50%; transform: translateX(-50%);";
                btn2.icon = "sync-outline";
                btn2.xmlns = "http://www.w3.org/2000/svg";
                
                btn4.style= "position: absolute; left: 50%; transform: translateX(-50%);";
                btn4.icon = "send-fill";
                btn4.xmlns = "http://www.w3.org/2000/svg";
                //btn2.dir = "ltr";
                
                //btn3.innerHTML = "i";
                btn3.style= "position: absolute; left: 50%; transform: translateX(-50%);";
                btn3.icon = "circle-info-outline";
                btn3.xmlns = "http://www.w3.org/2000/svg";
                //btn3.dir = "ltr";
                
                
                x.appendChild(btn2);
                x.appendChild(lineBreak);
                x.appendChild(lineBreak2);
                x.appendChild(btn3);
                x.appendChild(lineBreak3);
                x.appendChild(lineBreak4);
                x.appendChild(btn4);
                
                
                btn2.onclick = function () {
                    var getText = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-form-blob").shadowRoot.querySelector("sn-form-internal-tabs").shadowRoot.querySelector("sn-form-internal-tab-contents").shadowRoot.querySelector("now-record-form-section-column-layout").shadowRoot.querySelector("now-activity-combo").shadowRoot.querySelector("now-activity-stream-connected").shadowRoot.firstChild.getElementsByClassName("tile");
                  //.item(1).value;
                    var iframeText = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-form-blob").shadowRoot.querySelector("sn-form-internal-tabs").shadowRoot.querySelector("sn-form-internal-tab-contents").shadowRoot.querySelector("now-record-form-section-column-layout").shadowRoot.querySelector("now-activity-combo").shadowRoot.querySelector("now-activity-stream-compose-connected").shadowRoot.querySelector("now-record-html-editor").shadowRoot.querySelector("iframe").contentWindow.document;
                  
                    var naoachou = 0;
                    //console.log(getText);
                    for (var i = 0; i < getText.length; i++) {
                        if (typeof getText.item(i).value !== 'undefined'){
                          if(getText.item(i).value.indexOf("#Management Summary") !== -1){
                          //console.log("ACHEIIIIIII");
                            if (naoachou == 0){
                              //console.log("troquei");
                              iframeText.body.innerHTML+= getText.item(i).value;
                              naoachou = 1;
                            }
                          }
                        }//second console output
                    }
                  
                  var template = '<p>Management Summary of Technical Problem:</p><p>[1]<br />[2]</p><p>#Current Business Impact:<br />[1] name and function of core business process(es) affected:<br />[2] deadline to fix/workaround incident (asap/date&#43;time&#43;timezone):<br />[3] workaround available (Y/N):<br />[4] number of users affected:<br />[5] financial loss:<br />[6] 24/7 contact available (Y/N):<br />[7] senior management involved (SAP/Customer) &#43; role:<br />[8] political background:<br />[9] additional information:</p><p>#Changes applied to system before incident:<br />[Use change analysis tool for ABAP stack systems. Refer to link<br /><a href="https://mcc-agsdev.dispatcher.hana.ondemand.com/index.html#/services/4ba798bb-6ee9-2dae-37b3-ff713770d993" rel="nofollow">https://mcc-agsdev.dispatcher.hana.ondemand.com/index.html#/services/4ba798bb-6ee9-2dae-37b3-ff713770d993</a>]</p><p>[1] …<br />[2]</p><p>#Actions Taken:<br />[1]<br />[2]</p><p>#Action Plan to customer/partner:<br />[1] …<br />[2]</p><p>#Action Plan to SAP:<br />[1] …<br />[2] …<br />[lookup actions plan templates at <a href="https://mcc-agsdev.dispatcher.hana.ondemand.com/index.html#/services?filter&#61;1000" rel="nofollow">https://mcc-agsdev.dispatcher.hana.ondemand.com/index.html#/services?filter&#61;1000</a>]</p><p>#Contact information:<br />Customer:<br />Name:<br />Function:<br />Tel:<br />Available from: to:</p><p>Bridge call:<br />schedule<br />access code<br />number</p><p>SAP<br />Name:<br />Function:<br />Tel</p>'; 
                  
                  if(naoachou == 0){
                    //console.log("nao achei")
                    iframeText.body.innerHTML+= template;
                  }
                  
                }  
                  
                 // function sendMail() {
               
                btn4.onclick = function (){
                  
                  var getText = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-form-blob").shadowRoot.querySelector("sn-form-internal-tabs").shadowRoot.querySelector("sn-form-internal-tab-contents").shadowRoot.querySelector("now-record-form-section-column-layout").shadowRoot.querySelector("now-activity-combo").shadowRoot.querySelector("now-activity-stream-connected").shadowRoot.firstChild.getElementsByClassName("tile");
                  
                  
                  for (var i = 0; i < getText.length; i++) {
                        if (typeof getText.item(i).value !== 'undefined'){
                          if(getText.item(i).value.indexOf("Account: ") !== -1){
                          //console.log("ACHEIIIIIII");
                            //console.log(getText.item(i).value);
                            //console.log(getText.item(i).value.indexOf("Account: "));
                            //console.log(getText.item(i).value.substring(getText.item(i).value.indexOf("<br />Contact")-12, getText.item(i).value.indexOf("<br />Contact")-2));
                            //console.log(getText.item(i).value);
                            const myArray = getText.item(i).value.split("<br />");
                            
                            //console.log(myArray[0]);
                            var caseNumber = myArray[0];
                            
                            //console.log(myArray[1]);
                            var caseShortDescription = myArray[1];
                            
                            //console.log(myArray[2]);
                            var account = myArray[2];
                            
                            //console.log(myArray[3]);
                            var contact = myArray[3];
                            
                            //console.log(myArray[4]);
                            var escalationPhase = myArray[4];
                            
                            
                            var custNumber = getText.item(i).value.substring(getText.item(i).value.indexOf("Contact")+8, getText.item(i).value.indexOf("Contact")+28);
                            
                            
                        }//second console output
                    }
  
                  }
                      var hotText = 'Escalation Link:';
                  
                     //var escNumber = document.querySelector("sn-workspace-tabs").shadowRoot.querySelector("sn-workspace-tab-bar").shadowRoot.firstChild.firstChild.firstChild.childNodes[1].shadowRoot.firstChild.getElementsByClassName("sn-chrome-one-tab-content").item(1).innerText;
                  
                      
                  
                  var link = "mailto:frontoffice@sap.com" + "?cc=teamlead@sap.com" + "&subject=" +caseNumber.replace("Case: ", "") +" "+ caseShortDescription.replace("Case Short Description: ", "") + "&body=" + "Dear <Front-office team member>,%0D%0A %0D%0A %0D%0A %0D%0A Please see the latest status regarding this critical issue related to your customer " + account.replace("Account: ", "") +". %0D%0A %0D%0A Executive Summary:%0D%0A Provide a situation summary, including impacts for SAP and the Customer.%0D%0A %0D%0A Do%0D%0A- Focus in the current situation and facts (no copy/pasting from the previous status), including the business impact;%0D%0A - Focus in storytelling in chronological order.%0D%0A %0D%0A Don’t %0D%0A- Do not paste the MCC handover template; %0D%0A- Do not include technical logs or technical terms.%0D%0A %0D%0A Status Details: %0D%0A - Provide a short status detail, with information about the current situation on the activity.%0D%0A %0D%0A Next Steps:%0D%0A %0D%0A - Outline the actions from front-office or customer side Escalation Record: "+document.title.replace(" | Agent Workspace | ServiceNow", "") + "%0D%0A %0D%0A " + document.URL+"%0D%0A %0D%0A Best Regards,%0D%0A %0D%0A <DEA’s name>%0D%0A %0D%0A MCC Business Down Management ";
                  
                  
                      window.location.href = link;
    
    
                  }
                  
                //}
                 btn3.onclick = function () {
                  var getText = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-form-blob").shadowRoot.querySelector("sn-form-internal-tabs").shadowRoot.querySelector("sn-form-internal-tab-contents").shadowRoot.querySelector("now-record-form-section-column-layout").shadowRoot.querySelector("now-activity-combo").shadowRoot.querySelector("now-activity-stream-connected").shadowRoot.firstChild.getElementsByClassName("tile");
                  
                  
                  for (var i = 0; i < getText.length; i++) {
                        if (typeof getText.item(i).value !== 'undefined'){
                          if(getText.item(i).value.indexOf("Account: ") !== -1){
                          //console.log("ACHEIIIIIII");
                            //console.log(getText.item(i).value);
                            //console.log(getText.item(i).value.indexOf("Account: "));
                            //console.log(getText.item(i).value.substring(getText.item(i).value.indexOf("<br />Contact")-12, getText.item(i).value.indexOf("<br />Contact")-2));
                            
                            var custNumber = getText.item(i).value.substring(getText.item(i).value.indexOf("<br />Contact")-12, getText.item(i).value.indexOf("<br />Contact")-2);
                            
                            window.open('https://reporting.ondemand.com/sap/bc/mdrs/cdo?type=crp_c&id=' + custNumber);
                            
                            
                        }//second console output
                    }
  
                  }
                 }
                /*
                var getText = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-form-blob").shadowRoot.querySelector("sn-form-internal-tabs").shadowRoot.querySelector("sn-form-internal-tab-contents").shadowRoot.querySelector("now-record-form-section-column-layout").shadowRoot.querySelector("now-activity-combo").shadowRoot.querySelector("now-activity-stream-connected").shadowRoot.firstChild.getElementsByClassName("tile");
                var iframeText = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-form-blob").shadowRoot.querySelector("sn-form-internal-tabs").shadowRoot.querySelector("sn-form-internal-tab-contents").shadowRoot.querySelector("now-record-form-section-column-layout").shadowRoot.querySelector("now-activity-combo").shadowRoot.querySelector("now-activity-stream-compose-connected").shadowRoot.querySelector("now-record-html-editor").shadowRoot.querySelector("iframe").contentWindow.document;
                iframeText.open();
                iframeText.write('test');
                iframeText.close();
  */
                
               // console.log(xy.item(0).value);
                
                //console.log("aquiiiii")
                   /*document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-common-sidebar").shadowRoot.querySelector("sn-form-internal-sidebar-toolbar").shadowRoot.firstChild*/
  
    /*                
  var x = document.querySelector("sn-workspace-content").shadowRoot.querySelector("now-record-form-connected").shadowRoot.querySelector("sn-form-internal-workspace-form-layout").shadowRoot.querySelector("now-record-common-sidebar").shadowRoot.querySelector("sn-form-internal-sidebar-panel").shadowRoot.querySelector("now-agent-assist").shadowRoot.firstChild;
                x.firstChild.remove();
                x.firstChild.remove();
                    
    var iframe = document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.height = "100%";
    //iframe.style.width = "550";
    //iframe.style.frameborder = "0";
                    
    iframe.src = "https://zqueuemonitor-supportportal.dispatcher.hana.ondemand.com/?hc_reset";
    x.appendChild(iframe);
    */
                
                    
              }else {
    setTimeout(pollDOM, 500);
    //console.log("not now1"); // try again in 300 milliseconds
  }
              }else {
    setTimeout(pollDOM, 500);
    //console.log("not now1"); // try again in 300 milliseconds
  }
              } else {
    setTimeout(pollDOM, 800);
    //console.log("not now2"); // try again in 300 milliseconds
  }
            } else {
    setTimeout(pollDOM, 800);
    //console.log("not now3"); // try again in 300 milliseconds
  }
          } else {
    setTimeout(pollDOM, 800);
    //console.log("not now4"); // try again in 300 milliseconds
  }
        } else {
    setTimeout(pollDOM, 300);
    //console.log("not now5"); // try again in 300 milliseconds
  }
    } else {
    setTimeout(pollDOM, 300);
    //console.log("not now6"); // try again in 300 milliseconds
  }
  }
  
  pollDOM();
  
        
  
  /******/ })()
