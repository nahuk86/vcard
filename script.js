document.getElementById('generar').addEventListener('click', function() {
    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const linkedin = document.getElementById('linkedin').value;
    
    // Crear el contenido de la vCard
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${nombre} ${apellido}
N:${apellido};${nombre};;;
EMAIL;TYPE=INTERNET:${correo}
TEL:${telefono}
ADR;TYPE=WORK:${direccion}
URL;TYPE=linkedin:${linkedin}
END:VCARD`;

    // Crear un Blob con los datos
    const blob = new Blob([vCardData], { type: 'text/vcard' });

    // Crear un enlace de descarga
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = `${nombre}_${apellido}.vcf`;

    // Mostrar el enlace de descarga
    downloadLink.style.display = 'block';
});
