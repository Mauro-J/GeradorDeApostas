function geraAposta(tamanho) {
	var text = "";
	for (var i = 0; i < tamanho; i++){
		for(var j = 0; j < 2; j++){
			text += Math.floor(Math.random() * 10);
		}
		text += " ";
	}
	return text;
}
$(function megaSena() {
	var tamanho = 15;
	$(function(){
		$('#megaSena').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function quina() {
	var tamanho = 15;
	$(function(){
		$('#quina').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function lotoMania() {
	var tamanho = 50;
	$(function(){
		$('#lotoMania').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});
$(function lotoFacil() {
	var tamanho = 18;
	$(function(){
		$('#lotoFacil').click(function(){
			$('#aposta').text(geraAposta(tamanho));
		});
	});
});