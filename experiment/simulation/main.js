function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2-6      

}



function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        

}



// function navNext3()

// {

//         document.getElementById("canvas3").style.visibility="hidden";

//         document.getElementById("canvas4").style.visibility="visible";


// }




function ok2()
{

var eID = document.getElementById("mat1");
var colorVal = eID.options[eID.selectedIndex].value;

document.getElementById('img4').src=colorVal;
document.getElementById('smsg').innerHTML="&nbsp;";

}



var freq = 0;


function showgraph()

{
	freq = document.getElementById("mat1").value;

if (freq == "images/h1.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/casea.gif";
		document.getElementById('cname').innerHTML="Case A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#969; &#8725; &#969;<sub>1</sub> = 0.5";

	}
else if (freq == "images/h2.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/caseb.gif";
		document.getElementById('cname').innerHTML="Case B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#969; &#8725; &#969;<sub>1</sub> = 0.85";
		
	}

else if (freq == "images/h3.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/casec.gif";
		document.getElementById('cname').innerHTML="Case C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#969; &#8725; &#969;<sub>1</sub> = 1";
		
	}

else if (freq == "images/h4.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/cased.gif";
		document.getElementById('cname').innerHTML="Case D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#969; &#8725; &#969;<sub>1</sub> = 1.3";
		
	}

else if (freq == "images/h5.png")
	{
		document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";
		document.getElementById('gr1').src="images/casee.gif";
		document.getElementById('cname').innerHTML="Case E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#969; &#8725; &#969;<sub>1</sub>= 1.6";
	}

else
	{
		document.getElementById('smsg').innerHTML="Select Frequency";
	}
	

}

function reset()

{
	location.reload();
}


