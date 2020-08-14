chrome.runtime.onMessage.addListener(function (request, sender, response) {
	//console.log("intial request: " + request);
	//urlToFile(request, 'file.xml', 'text/xml').then(function(file){newFile = file; var reader = new FileReader(); reader.readAsBinaryString(newFile); console.log("urlToFile result: " + reader.result);});
	//console.log(request[0].size);
	var file = dataURLtoFile(request,'incident_9c573169c611228700193229fff72400.xml');
 //    console.log(file);

	var reader = new FileReader();
    reader.onload = function(e) {
      console.log("result: " + e.target.result)
    }
	reader.readAsText(file);

	var formData = new FormData();
	formData.append("sysparm_upload_prefix", "");
	formData.append("sysparm_referring_url", "incident_list.do");
	formData.append("sysparm_target", "incident");
	formData.append("sysparm_ck", "69cd773277221010e8cc8b0e781061faf9a7ad737eca7d76c9c50bc053a2bc750916fcbf");
	formData.append("attachFile", file);

	var client = new XMLHttpRequest();
	client.open("post","http://localhost:8080/sys_upload.do");
	client.setRequestHeader('Accept','application/json');
	//client.setRequestHeader('Content-Type','application/json');
	//Eg. UserName="admin", Password="admin" for this code sample.
	client.setRequestHeader('Authorization', 'Basic '+btoa('maint'+':'+'maint'));
	client.setRequestHeader("X-CSRF-Token", "69cd773277221010e8cc8b0e781061faf9a7ad737eca7d76c9c50bc053a2bc750916fcbf");
	client.onreadystatechange = function() {
		if(this.readyState == this.DONE) {
			console.log(this.status + this.response);
		}
	};
	client.send(formData);

	return true;
});

// function urlToFile(url, filename, type) {
// 	return (fetch(url)
// 			.then(function(res){return res.arrayBuffer();})
// 			.then(function(buf){return new File([buf], filename, {type: type});})
// 	);
// }

// var formData = new FormData();
// formData.append("sysparm_upload_prefix", "");
// formData.append("sysparm_referring_url", "incident_list.do");
// formData.append("sysparm_target", "incident");
// formData.append("attachFile", request);

//api/now/table/incident

function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            //console.log("bstr: " + bstr);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        var file = new File([u8arr], filename, {type:mime});
        //var reader = new FileReader();
        //reader.readAsText(file);
        //console.log("result: " + reader.result);
        return file;
    }
