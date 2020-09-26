function downloadPDF() 
{
	var doc = new jsPDF();

	// doc.text(20, 20, 'Hello landscape world!'); // doc.text(width, height, <text>)
	// doc.text(20, 20, document.getElementById("inpSalida").value.trim());
	
	doc.setFontSize(16);
	doc.text(80, 15, 'Ventas de Vuelos.');
	doc.setLineWidth(0.1);
	doc.line(20, 20, 190, 20); // horizontal line (3 parametro en el width)

	



	// Optional - set properties on the document
	doc.setProperties({
    	title: 'Reporte de Venta',
    	subject: 'This is the subject',
    	author: 'James Hall',
    	keywords: 'generated, javascript, web 2.0, ajax',
    	creator: 'MEEE'
	});

	// Output as Data URI
	doc.save('Reporte de Venta.pdf');
}

