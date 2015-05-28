var viewPortWidth;
 var no_of_display=18;

 if (typeof window.innerWidth != 'undefined')
    viewPortWidth = window.innerWidth;
	
 if(viewPortWidth>=450)
 {
 no_of_display=27;
 document.getElementById('input').style.width="450px";
 document.getElementById('output').style.width="450px";
 document.getElementById('rippleboxforsciop').style.width="150px";
 document.getElementById('rippleboxforsciop').style.height="300px";
 var i;
 for(i=0;i<6;i++)
 { 
 document.getElementsByClassName("scientificop")[i].style.height="100px";
 document.getElementsByClassName("scientificop")[i].style.width="75px";
 
 }
 }
 window.addEventListener("resize", scidis);
 function scidis()
 {
 var viewPortWidth;
 if (typeof window.innerWidth != 'undefined')
    viewPortWidth = window.innerWidth;
	
 if(viewPortWidth>=450)
 {
 no_of_display=27;
 document.getElementById('input').style.width="450px";
 document.getElementById('output').style.width="450px";
 document.getElementById('rippleboxforsciop').style.width="150px";
 document.getElementById('rippleboxforsciop').style.height="300px";
 var i;
 for(i=0;i<6;i++)
 { 
 document.getElementsByClassName("scientificop")[i].style.height="100px";
 document.getElementsByClassName("scientificop")[i].style.width="75px";
 }
 }
 else
 {
 no_of_display=18;
 document.getElementById('input').style.width="300px";
 document.getElementById('output').style.width="300px";
 document.getElementById('rippleboxforsciop').style.width="0px";
 document.getElementById('rippleboxforsciop').style.height="0px";
 
 
 var i;
 for(i=0;i<6;i++)
 { 
 document.getElementsByClassName("scientificop")[i].style.height="0px";
 document.getElementsByClassName("scientificop")[i].style.width="0px";
 }
 }
} 
 var inp=new String();
 var separated=[];
function fun(input)
   { 
     if(input=='d')
	 {
	 inp=inp.substring(0,inp.length-1);
	 }
	 else if(input=='=')
	 {
	 inp=document.getElementById("outputpa").innerHTML;
	 }
	 else
     {inp=inp.concat(input);}
	 var sizeprop= no_of_display*200/inp.length;
     if(sizeprop>200)
     sizeprop=200;	 
	 var sizestr= sizeprop.toString()+"%";
	 document.getElementById("input").style.fontSize=sizestr;
	 document.getElementById("inputpa").innerHTML=inp;
	 var separated=[];
	 var i,j=0;
	 var temp="";
	 for(i=0;i<inp.length;i++)
	 {
	 if(!isNaN(inp[i]))
	 {
	  temp=temp.concat(inp[i]);
	 }
	 else
	 { 
	 separated[j]=temp;
	 j++;
	 separated[j]=inp[i];
	 j++;
	 var temp="";
	 }
	 }
	 if(temp!="")
	 separated[j]=temp;
	 
	  
	 for(i=0;i<separated.length;i++)
	 { 
	  if(separated[i]=="x")
	 separated[i]="*"; 
	  else if(separated[i]=="e")
	  {
	  separated[i]=Math.E;
	  }
	  else if(separated[i]=="Π")
	  {
	  separated[i]=Math.PI;
	  }
	  }
	  for(i=0;i<separated.length-1;i++)
	  if(separated[i]=="")
	  separated.splice(i,1);
	  for(i=0;i<separated.length;i++)
	 {  
      if(separated[i]=="^")
      {
	  if(i!=0&&!isNaN(separated[i-1])&&!isNaN(separated[i+1])&&i!=separated.length-1)
	  {
	  var tempstr="Math.pow("+separated[i-1]+","+separated[i+1]+")";
	  separated.splice(i-1,3,tempstr);
	  }
	  }	
	  else if(separated[i]=="√")
      {
	  if(!isNaN(separated[i+1])&&i!=separated.length-1)
	  {
	  var tempstr="Math.pow("+separated[i+1]+",0.5)";
	  separated.splice(i,2,tempstr);
	  }
	  }
	  else if(separated[i]=="!")
	  {
	  if(i!=0&&!isNaN(separated[i-1]))
	  {
	  var tempnum,factvalue=1;
	  for(tempnum=separated[i-1];tempnum>0;tempnum--)
	  factvalue*=tempnum;
	  separated.splice(i-1,2,factvalue);
	  }
	  }
	  }

	 
		
	    var evalstr="";
		for(i=0;i<separated.length;i++)
		{
		  evalstr=evalstr.concat(separated[i]);
		  
		}
		
		var result= eval(evalstr);
		if(result!==undefined)
		document.getElementById("outputpa").innerHTML=result;
		else
		document.getElementById("outputpa").innerHTML="Try me,I am a nice little calculator";
		
	  
	  
	 }
	 
	 