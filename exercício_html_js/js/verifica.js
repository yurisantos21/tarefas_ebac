document.getElementById("botao").addEventListener("click", verificaNumero);

function verificaNumero (num_A, num_B) {
	
	num_A = document.getElementById("campoA").value;
	num_B = document.getElementById("campoB").value;

	if (num_B > num_A) {
		alert("Tudo Certo!");
	} else {
		alert("O número B não é maior!");
	}
}