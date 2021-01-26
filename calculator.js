
document.getElementById("cal").onclick=function(){
    var s1=Number(document.getElementById("s1").value);
 var s2=Number(document.getElementById("s2").value);
 var s3=Number(document.getElementById("s3").value);
 var s4=Number(document.getElementById("s4").value);
 var result=document.getElementById("result").innerHTML="Result :"+((  s1+s2+s3+s4)/400)*100 +"%";
 if (((  s1+s2+s3+s4)/400)*100<50){
     document.getElementById("pre").innerHTML="<h1>Please try next time</h1>"
     document.getElementById("pre").classList.add("fail");
 
    }
 if (((  s1+s2+s3+s4)/400)*100>=50){
     
    document.getElementById("pre").innerHTML="<h1>CongOo0oooOOOO you Passed</h1>"
    document.getElementById("pre").classList.add("pass");
 }
}
