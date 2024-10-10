function Ckef(celsius) {
    return celsius * 9/5 + 32;
}

function Fkec(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function reset() {
    document.getElementById('inputcelcius').value = '';
    document.getElementById('inputfarenheit').value = '';
    document.getElementById('kalkulasi').value = '';
}

function reverseCF() {
    var cel = document.getElementById('inputcelcius').value;
    var nilaifaren = Ckef(parseFloat(cel));
    document.getElementById('inputfarenheit').value = nilaifaren;
}

function reverseFC() {
    var far = document.getElementById('inputfarenheit').value;
    var nilaicelcius = Fkec(parseFloat(far));
    document.getElementById('inputcelcius').value = nilaicelcius;
}

function kalkulasicel() {
    var hasilCel = document.getElementById('inputcelcius').value;
    if (hasilCel !== '') {
        var farValue = Ckef(parseFloat(hasilCel));
        var calculationText = hasilCel + " * (9/5) + 32 = " + farValue;
        document.getElementById('kalkulasi').value = calculationText;
    }
}

function kalkulasifar() {
    var hasilFar = document.getElementById('inputfarenheit').value;
    if (hasilFar !== '') {
        var celValue = Fkec(parseFloat(hasilFar));
        var calculationText = hasilFar + " - 32 * (5/9) = " + celValue; 
        document.getElementById('kalkulasi').value = calculationText;
    }
}

document.getElementById('Reset').addEventListener('click', reset);
document.getElementById('Konversi').addEventListener('click', function() {
    reverseCF();
    kalkulasicel();
});
document.getElementById('Reserve').addEventListener('click', function() {
    reverseFC();
    kalkulasifar();
});
