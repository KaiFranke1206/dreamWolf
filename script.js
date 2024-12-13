async function loadText() {
	try {
		const response = await fetch('texte.txt'); // Externe Textdatei
		if (response.ok) {
			const text = await response.text();
			document.getElementById('stories').innerHTML = text.replace(/\n/g, '<br>'); // Text mit Zeilenumbrüchen
		} else {
			document.getElementById('stories').innerHTML = 'Die Texte konnten nicht geladen werden.';
		}
	} catch (error) {
		document.getElementById('stories').innerHTML = 'Ein Fehler ist aufgetreten: ' + error.message;
	}
}