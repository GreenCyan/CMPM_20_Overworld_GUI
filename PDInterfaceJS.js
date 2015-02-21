
/**
 * @author jy
 */


// JS: INTERNAL STRUCTURES, CONTENT, "EVENTS" WHEN PLAYER INTERACTS WITH INTERFACE


// ***************** functions that dictate how windows are toggled *******************************/

function toggle(window) {
	
	var el = document.getElementById(window);
	if (el.style.display == 'none') {
		el.style.display = 'block';
		
	} else {
		el.style.display = 'none';
		attachmentCounter = 0;
	
	}
		
}


function openEmail(ID, window) {
	var el = document.getElementById(window);
	if (el.style.display == 'none') {
		el.style.display = 'block';
	}	
}



function popup(window) {
	toggle(window);		
}


//************** special toggle code that dictates how attachment windows are toggled *************************************
//(because players shouldn't be able to "download" the attachment a second time and have the window minimize itself)

var attachmentCounter = 0;
function downloadAttachment(window) {
	if (attachmentCounter != 1) {
	
		attachmentCounter += 1;
		var el = document.getElementById(window);
		if (el.style.display == 'none') {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
			
	}
	
}


// *************make pop ups draggable within gameCanvas**************************************************//

$(function() {
$( "#messagePopUp" ).draggable({
	containment: '#gameCanvas'
	});
});


$(function() {
$( "#terminalPopUp" ).draggable({
	containment: '#gameCanvas'
	});
});


$(function() {
$( "#targetPopUp" ).draggable({
	containment: '#gameCanvas'
	});
});



// ************* AN ARRAY THAT STORES ALL EMAIL CONTENT (STUFF THAT APPEARS IN THE SUBJECT BOX AND THE ACTUAL MAXIMIZED CONTENT) ****************//
var emailPreviewArray = [];

function emailPreview(a,b,c,d) {
	 this.sender = a;
	 this.date = b;
	 this.subject = c;
	 this.content = d;
}

emailPreviewArray.push(new emailPreview("jill ","614 ","fernando ",
	"hi pizzalisia make me a pizza piz pipizpzipizpizza" + 
	"yum hi pizzalinkTextlisia make me a pizza piz pipizpzipizpizza yumhi" + 
	"pizzalisia make me a pizza piz pipizpzipizpizza yum"));
emailPreviewArray.push(new emailPreview("sender ","date ","subject ",
	"content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
	" eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim" + 
	" ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
	" aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" + 
	" in voluptate velit esse cillum dolore eu fugiat nulla pariatur." + 
	" Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
	" deserunt mollit anim id est laborum."));
emailPreviewArray.push(new emailPreview("princess morbucks ","date ","subject ","content "));
emailPreviewArray.push(new emailPreview("sedusa ","date ","subject ","content "));
emailPreviewArray.push(new emailPreview("sailor neptune ","date ","subject ","content "));
emailPreviewArray.push(new emailPreview("juri","taco tuesday ","poopoo ","content "));



// everything beneath this line is just for debugging purposes
printEmails(emailPreviewArray);



function printEmails(emailPreviewArray) {
	for (i=0;i<emailPreviewArray.length;i++) {
		console.log(emailPreviewArray[i].sender);
		console.log(emailPreviewArray[i].date);
		console.log(emailPreviewArray[i].subject);
		console.log(emailPreviewArray[i].content);
	}
}






//***************** (FIXED?): FUNCTION CONTAINING LOGIC FOR WHICH WINDOW WILL APPEAR ON TOP AT ANY TIME ***************************//

function changeZIndex(id) {

	console.log("went into changezindex");


	switch(id) {
	    case "messagePopUp":
	        console.log("id is messagePopUp");
	        //change other window z index to 0
			document.getElementById("terminalPopUp").style.zIndex --;
			document.getElementById("targetPopUp").style.zIndex -- ;
	    	//change z index to 1:
			document.getElementById(id).style.zIndex=50;
			
            break;
	
	    case "terminalPopUp":
	        console.log("id is terminalPopUp");	     
			document.getElementById("messagePopUp").style.zIndex --;
			document.getElementById("targetPopUp").style.zIndex --;
			document.getElementById(id).style.zIndex=50;
			console.log ("message index " + document.getElementById("messagePopUp").style.zIndex);
	        break;
	        
	   case "targetPopUp":
	    	console.log("id is targetPopUp");   	
	    	document.getElementById("messagePopUp").style.zIndex --;
	    	document.getElementById("terminalPopUp").style.zIndex --;
	    	document.getElementById(id).style.zIndex=50;
	      
	    default:
	        console.log("default");
	}


}








//***************************"RENDERING"(appending) DATA FROM JS INTO TEXT OUTPUT ON THE INTERFACE ********************************************************//
// http://www.w3schools.com/js/js_htmldom_nodes.asp
// http://www.w3schools.com/jsref/met_node_appendchild.asp
// VERSATILE METHOD THAT CAN BE ADAPTED!

var para; 
var node;
var element;
	
function appendToMessageWindow(){
	para = document.createElement("p");
	node = document.createTextNode("this is the message window!!!!");
	para.appendChild(node);	
	element = document.getElementById("messagePopUp");
	element.appendChild(para);
	
}



var stuff;
var node2;
var elmnt;
	
function appendToTerminalWindow(){
	stuff = document.createElement("p");
	node2 = document.createTextNode("this is the terminal window!!!");
	stuff.appendChild(node2);
	elmnt = document.getElementById("terminalPopUp");
	elmnt.appendChild(stuff);
}





var targetPro = document.createElement("p");
var targetWindow = document.getElementById('targetPopUp');

function appendToTargetWindow(index, targetArray) {
	/*targetContent = document.createTextNode(targetArray[1].name);
	targetPro.appendChild(targetContent);
	targetWindow.appendChild(targetProa);*/
	console.log("right before targetArray[index]should print");
	console.log(index);
	
	
	targetPro.remove();
	targetPro = document.createElement("p");
	targetContent = document.createTextNode(targetArray[index].name);
	targetPro.appendChild(targetContent);
	targetWindow.appendChild(targetPro);
	
}

var people1d = [];
people1d.push(new Person("Alisia", "5 STARS", "Nerd", "$21847947892", "http://i.imgur.com/3yEtel6.jpg"));
people1d.push(new Person("jill", "5 STARS", "Nerd", "$21847947892", "http://i.imgur.com/3yEtel6.jpg"));
people1d.push(new Person("fernando", "5 STARS", "Nerd", "$21847947892", "http://i.imgur.com/3yEtel6.jpg"));


var people2d = [];

var people3d = [];

var people4d = [];

var people5d = [];


function Person(name, diff, occ, netWorth, IP, image) {
	this.name = name;
	this.diff = diff;
	this.occ = occ;
	this.netWorth = netWorth;
	this.IP = IP;
	this.image = image;

}



//looping function that appends data from emailArray to the email subject boxes and maximized email window

function appendToEmail (emailPreviewArray) {
	var emailSender;
	var emailDate;
	var emailSubject;
	var emailContent;
	var subjectBox;
	var emailButton;
	var emailContent;
	var emailOpen;
	var contentBox;
	var emailContent;
	var j = 10;
	var targetAttachment;
	var infoAttachment;
	
	
    for (i=0;i<emailPreviewArray.length;i++) {   
                   
   
       
        //append to email buttons
        emailButton = document.createElement("p");
        subjectBox = document.getElementById(i);
        emailSender = document.createTextNode(emailPreviewArray[i].sender);
        emailDate = document.createTextNode(emailPreviewArray[i].date);
        emailSubject = document.createTextNode(emailPreviewArray[i].subject);
        emailButton.appendChild(emailSender);
        emailButton.appendChild(document.createElement("br"));
        emailButton.appendChild(emailDate);
        emailButton.appendChild(document.createElement("br"));
        emailButton.appendChild(emailSubject);
        subjectBox.appendChild(emailButton);
       
       
        //actual email window
        contentBox = document.getElementById(j);
        //new div
        emailOpen = document.createElement("p");
        //text from array to put into new div
        emailContent = document.createTextNode(emailPreviewArray[i].content);
        //put text into new div
        emailOpen.appendChild(emailContent);
        //put new div into email window
        contentBox.appendChild(emailOpen);
		//call add attachments
		//addAttachments(event)


		targetAttachment = document.createElement("input");
		targetAttachment.setAttribute("type", "button");
		targetAttachment.setAttribute("value","Target Profile");
		//attachment.setAttribute("name","targetProfile");
		targetAttachment.setAttribute("onclick","downloadAttachment('targetPopUp'),changeZIndex('targetPopUp')");	
		//appendToTargetWindow(targetArray)

		infoAttachment = document.createElement("input");
		infoAttachment.setAttribute("type", "button");
		infoAttachment.setAttribute("value","Supplementary Information");
		//attachment.setAttribute("name","attachment2");
		infoAttachment.setAttribute("onclick","console.log('clicked button 2')");	 //should call funciton that toggles new window


		contentBox.appendChild(targetAttachment);		
		contentBox.appendChild(document.createElement("br"));
		contentBox.appendChild(infoAttachment);
		
		j+=1;


	
	}
	
}



//method calls
appendToMessageWindow();
appendToTerminalWindow();
appendToEmail(emailPreviewArray);






function targetIndex(index) {
				
		console.log("went into targetIndex()");
		//if day = 1 
		appendToTargetWindow(index, people1d);
		//else if 2 else if 3 else if4
}

//appendToTargetWindow(people1d);
