webpackJsonp([4],{124:function(o,a,c){"use strict";function e(o){return o&&o.__esModule?o:{default:o}}var r=c(3),t=(e(r),c(1)),i=e(t),n=c(0),u=e(n);(0,i.default)("#sugerir-correcao-noticia").click(function(){(0,i.default)("#form-sugerir-correcao-noticia").show()}),(0,i.default)("#enviar-correcao-noticia").click(function(){(0,i.default)("#form-sugerir-correcao-noticia").hide();var o=(0,i.default)("#correcao-noticia").val();console.log("Enviando correção..."),console.log(o),(0,i.default)("#correcao-noticia").val("")});var l=(0,i.default)(".hora-atualizacao").text();(0,i.default)(".intervalo-atualizacao").text((0,u.default)(l,"DD/MM/YYYY hh:mm").fromNow())},150:function(o,a,c){c(124),o.exports=c(3)},3:function(o,a){}},[150]);