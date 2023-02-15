console.log("Hallo ini adalah console.log")


var contohstring = "Ini adalah tipe data string";
console.log(contohstring)

var contohinteger = 12345;
console.log(contohinteger)

var contohreal = 12.1234;
console.log(contohreal)

var a = 20 > 5;

if (a == true) {
	console.log("benar")
}else{
	alert("salah")
}

var contoharay = [1,2,3,4,5,"ayam","kambing","sapi"];
console.log(contoharay)


var buah = prompt('Buah apa yang memiliki wangi menyengat', "jawab");

if (buah == "durian") {
	document.write("<h2>Jawaban Benar</h2>");
}else{
	document.write("<h2>Jawaban Salah</h2>");
}


var b = 20 < 5;

if (b != true) {
	document.write("<h2> Benar</h2>");
} else {
	document.write("<h2> Salah </h2>");
}


var pertanyaan = prompt("Buah apa yang harum?");

if (pertanyaan != "durian") {
	document.write("<h2> Jawaban benar </h2>");
} else {
	document.write("<h2> Jawaban salah </h2>");
}


//var angka = 21 <= 21;
//document.write(angka);

//var angka1 = 4 === "4";
//var angka2 = 4 === 4;
//console.log(angka1);
//console.log(angka2);



var c = 20;
var d = 5;

var hasil;
var hasil1 = c > d; //--> true
var hasil2 = c < d; //--> false

hasil = !hasil1;
document.write(hasil);

//LOOPING
var keranjang_buah = ['mangga', 'anggur', 'apel', 'pepaya', 'jeruk'];
console.log(keranjang_buah);

for (var nilaiawal = 1; nilaiawal <= 10; nilaiawal++) {
	console.log(keranjang_buah, [nilaiawal])
}

