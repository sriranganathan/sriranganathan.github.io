function fun(num)
	{ 
	  var headings = ["Hi, I am Sriranganathan.",
	                  "What I Do?",
					  "Looking Forward To." ]; 
      var content  = ["I am an engineering student studying<br> Computer Science and Engg.<br> at the prestigious<br>National Institute of Technology,Trichy.<br><br><br>\n" ,
	                  "I spend a lot of time playing computer games<br>and watching football ( P.S.--> I am a barca fan ).<br>I also like algorithmic coding and<br>web design & development.<br><br><br>\n",
                      "I am looking forward to <br>3 wonderful years of college right now.<br>My short term aim is to get <br>inducted  into one of the technical <br>clubs of my college.<br><br>\n"];					  
	  
	  
	  document.getElementById("data_heading").innerHTML=headings[num];
	  document.getElementById("data_content").innerHTML=content[num];
	}