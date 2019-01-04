function time_clock(x){
	k = new Date();
	
	etos = k.getFullYear();
	minas = k.getMonth();
	m = k.getDate(); 

	mera = k.getDay();

	hour = k.getHours();
	minute = k.getMinutes();
	second = k.getSeconds();


	mines = new Array('Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος','Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος');
	meres = new Array('Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο');

	
	if (hour < 10){
		hour = "0" + hour;
	}
	if (minute < 10){
		minute = "0" + minute;
	}
	if (second < 10){
		second = "0" + second;
	}

	imerominia = '' + meres[mera] + ' ' + mera + ' ' + mines[minas] + ' ' + etos + ' ' + hour + ':' + minute + ':' + second;

	document.getElementById(x).innerHTML = imerominia;
	setTimeout('time_clock("'+x+'");','1000');

	return true;

}