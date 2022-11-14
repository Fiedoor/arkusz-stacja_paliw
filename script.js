const koszt = [0, 4, 3.5]
const przycisk = document.getElementById('przycisk')

//funkcja
przycisk.addEventListener('click', function () {
  var a = parseInt(document.getElementById('rdz').value)
  if (a != 1 && a != 2) {
    a = 0
  }
  var b = parseInt(document.getElementById('ile').value)
  var c = koszt[a] * b
  document.getElementById('wynik').innerText = 'Koszt paliwa: ' + c + ' zł'
})
