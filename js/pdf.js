function ShowSelected() 
{
    // Obtener el valor, que se encuentra en el atributo value.
    let valor = document.getElementById("inpTipoDeViaje").value.trim();
    
    // Obtener el texto, que ve el usuario.
    // var comboBox = document.getElementById("inpTipoDeViaje");
    // var selected = comboBox.options[comboBox.selectedIndex].text;
    // console.info(selected);

    return valor;
}

function downloadPDF(puntoDeSalida, destino, tipoDeViaje) 
{
    var doc = new jsPDF();
    var mes = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
        "Septiembre","Octubre","Noviembre","Diciembre");
    var f = new Date(document.getElementById("inpFechaDeViaje").value.trim());

    // Optional - set properties on the document
    doc.setProperties({
        title: 'Reporte de Venta',
        subject: 'This is the subject',
        author: 'James Hall',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'MEEE'
    });

    var posicion = 15;
    doc.text(80, posicion, 'Ventas de Vuelos.');
    doc.setFontSize(16);
    doc.setLineWidth(0.1);
    doc.line(20, 20, 190, 20); // horizontal line (3 parametro en el width)
    posicion += 15;

    doc.text(20, posicion, `Punto de Salida: ${puntoDeSalida}`);
    posicion += 8;
    doc.text(20, posicion, `Destino: ${destino}`);
    posicion += 8;
    doc.text(20, posicion, `Tipo de Viaje: ${tipoDeViaje.toUpperCase()} - Vida Silvestre.`);
    posicion += 8;
    doc.text(20, posicion, `Fecha de Viaje: ${f.getDate()+1} de ${mes[f.getMonth()]} del ${f.getFullYear()}`);
    

    // Output as Data URI
    doc.save('Reporte de Venta.pdf');
}




document.getElementById("btnGenerarPDF").addEventListener('click', function() {
    let puntoDeSalida = document.getElementById("inpSalida").value.trim();
    let destino = document.getElementById("inpDestino").value.trim();
    let tipoDeViaje = ShowSelected();
    let fechaDeViaje = document.getElementById("inpFechaDeViaje").value.trim();

    if (puntoDeSalida == "" || destino == "" || tipoDeViaje == "" || fechaDeViaje == "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    downloadPDF(puntoDeSalida, destino, tipoDeViaje);
    // Limpiamos los campos despues de descargar el pdf
    document.getElementById("inpSalida").value = "";
    document.getElementById("inpDestino").value = "";
    document.getElementById("inpTipoDeViaje").value = "";
    document.getElementById("inpFechaDeViaje").value = "";
});