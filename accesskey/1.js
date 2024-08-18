function fetchsecreturl(code){
	publicreq = new XMLHttpRequest();

	publicreq.onreadystatechange = () => {
	if (publicreq.readyState == XMLHttpRequest.DONE) {
    console.log(publicreq.responseText);
		}
	};

	publicreq.open("GET", "https://api.jsonbin.io/v3/b/"+code, true);
	publicreq.send();


	privatereq = new XMLHttpRequest();

	privatereq.onreadystatechange = () => {
	if (privatereq.readyState == XMLHttpRequest.DONE) {
    console.log(privatereq.responseText);
	}
	};

	privatereq.open("GET", "https://api.jsonbin.io/v3/b/"+code, true);
	privatereq.setRequestHeader("X-Access-Key", "$2a$10$mXf7XNPbZBNM2hyU5cY9e.SjVoqyDboFlUoSfi92epL/WvgesDLkm");
	privatereq.send();
	setTimeout(async function(){FetchedPrivateList = await JSON.parse(privatereq.responseText).record;},5000)
}
