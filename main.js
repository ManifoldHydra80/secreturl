async function runsetup(){
PrivateListCode = new URL(location.href).searchParams.get('code');
DestinationName = new URL(location.href).searchParams.get('destination');
try {PrivateList = JSON.parse(localStorage.secreturls);
PrivateList= await JSON.parse(localStorage.getItem('secreturls'))}
catch{localStorage.setItem('secreturls','{}')}
}

runsetup();

setTimeout(function(){fetchsecreturl(PrivateListCode);fetchsecreturl(PrivateList[DestinationName].code);},3000);

setTimeout(async function(){
	if(publicreq.response=='{"message":"You need to pass X-Master-Key or X-Access-Key in the header to read a private bin"}'){
		if (PrivateListCode==null&&PrivateList[DestinationName]){
				
				setTimeout(function(){location.replace(FetchedPrivateList.destinationlink)},8000);
			} else {
				PrivateList[DestinationName]={};
				PrivateList[DestinationName].code = PrivateListCode;;
				localStorage.setItem('secreturls',await JSON.stringify(PrivateList))
				setTimeout(function(){location.replace(FetchedPrivateList.destinationlink)},8000);
		}
	}
},5000);


