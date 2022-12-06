;(function () {
  'use strict'

  const currentDate = new Date()
  console.log(currentDate.toLocaleDateString())
  //var d = document.querySelector('input#data').value;
  //var [ano, mes, dia] = d.split('-');

  //var d = document.querySelector('input#data').value;
  //var [ano, mes, dia] = d.split('-').map(Number);

 // var d = document.querySelector('input#data').valueAsDate;
  //var dia = d.getUTCDate();
  //var mes = d.getUTCMonth() + 1; // meses iniciam com o valor 0 ¯\_(ツ)_/¯
  //var ano = d.getUTCFullYear();

  function wesleySafadao(day, month, year) {
    var safadeza,
      anjo,
      sum = 0
    for (; +month--; ) sum += month
    safadeza = sum + (+year / 100) * (50 - +day)
    anjo = 100 - safadeza
    return (
      'Hoje você está ' +
      anjo.toFixed(2) +
      '% anjo e ' +
      safadeza.toFixed(2) +
      '% vagabundo!'
    )
  }

  window.wesleySafadao = wesleySafadao
})()
