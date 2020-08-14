var submitCatch = document.getElementById("submit");
var fileInput = document.getElementById("attachFile");
var fileList = [];
var reader = new FileReader();

fileInput.addEventListener('change', function(evnt) {
	for (var i = 0; i < fileInput.files.length; i++) {
		//var data = buildMessage(fileInput.files[i])
		// console.log(fileInput.files[i]);
	 //    reader.onload = function(e) {
  // 			console.log("line 11 result" + i + ": " + e.target.result)
		// }
		reader.readAsDataURL(fileInput.files[0]);
		//console.log("line 14 result" + i + ": " + reader.result);
		//fileList.push(reader.result);
		// console.log("plain file: ");
		// console.log(fileInput.files[0]);
		// var reader2 = new FileReader();
		// reader2.readAsText(fileInput.files[0]);
		// console.log("result of reader2: " + reader2.result)
		//console.log(reader.result);
		//fileList.push(fileInput.files[0]);
		//console.log("file index: " + i);
	}
	// var newFile;
	// console.log("intial request: " + reader.result);
	// urlToFile(reader.result, 'file.xml', 'text/xml').then(function(file){newFile = file; var reader = new FileReader(); reader.readAsBinaryString(newFile); console.log("urlToFile result: " + reader.result);});
	// // var file = dataURLtoFile(request,'file.xml');
 // //    console.log(file);

	// var reader2 = new FileReader();
	// reader2.readAsText(newFile);
	// console.log("result: " + reader2.result)
	// //console.log(reader.result);
	// //fileList.push(data);
});


submitCatch.addEventListener("click", function(evnt) {
	//console.log(reader.result)
	evnt.preventDefault();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, reader.result);
	});
});

// function urlToFile(url, filename, type) {
// 	return (fetch(url)
// 			.then(function(res){return res.arrayBuffer();})
// 			.then(function(buf){return new File([buf], filename, {type: type});})
// 	);
// }


// buildMessage = function(file) {
// 	var formData = new FormData();
// 	formData.append("sysparm_upload_prefix", "");
// 	formData.append("sysparm_referring_url", "incident_list.do");
// 	formData.append("sysparm_target", "incident");
// 	formData.append("attachFile", file);
// 	return formData;
// }

	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	// 	chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	// 			console.log(response.farewell);
	// 	});
	// });

// fileInput.addEventListener('change', function(evnt) {
// 	fileList = [];
// 	for (var i = 0; i < fileInput.files.length; i++) {
// 		fileList.push(fileInput.files[i]);
// 	}
// });
//  //catch the submission event to upload files in file list 
// var submitCatch = document.getElementById("submit");
// submitCatch.addEventListener("click", function(evnt) {
// 	//evnt.preventDefault();
// 	fileList.forEach(function(file) {
// 		sendFile(file);
// 	})
// });
// sendFile = function(file) {
// 	var formData = new FormData();
// 	formData.append("sysparm_upload_prefix", "");
// 	formData.append("sysparm_referring_url", "incident_list.do");
// 	formData.append("sysparm_target", "incident");
// 	formData.append("attachFile", file);
// 	var request = new XMLHttpRequest();
// 	request.open("POST", "http://localhost:8080/sys_upload.do");
// 	request.setRequestHeader("Accept", "application/json");
//  request.setRequestHeader("Content-Type", "application/json");
// 	request.setRequestHeader("X-CSRF-Token", window.g_ck);
// 	request.send(formData);
// };






// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
// 	changeColor.style.backgroundColor = data.color;
// 	changeColor.setAttribute('value', data.color);
// });

// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', '#ffffff', '#000000'];
// function constructOptions(kButtonColors) {
// 	for (let item of kButtonColors) {
// 		let button = document.createElement('button');
// 		button.style.backgroundColor = item;
// 		button.addEventListener('click', function() {
// 			chrome.storage.sync.set({color: item}, function() {
// 				console.log('color is ' + item);
// 			})
// 			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 			chrome.tabs.executeScript(
// 				tabs[0].id,
// 				{code: 'document.body.style.backgroundColor = "' + item + '";'});
// 			});
// 		});
// 		changeColor.appendChild(button);
// 	}
// }
// constructOptions(kButtonColors);

//let fileUpload = document.getElementById('file');