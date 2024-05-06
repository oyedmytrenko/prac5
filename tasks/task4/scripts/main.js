function calculate() {
  const start = parseFloat(document.getElementById('start').value);
  const end = parseFloat(document.getElementById('end').value);
  const step = parseFloat(document.getElementById('step').value);
  let results = '<h2>Результати:</h2><ul>';

  for (let x = start; x <= end; x += step) {
      let w = 0;
      if (x < 2) {
          w = Math.pow(Math.cos(x), 2);
      } else if (x === 0) {
          w = Math.tan(x) + Math.pow(x, 3.7);
      } else {
          w = Math.abs(1 - Math.pow(x, 2));
      }
      results += `<li>W(${x.toFixed(2)}) = ${w}</li>`;
  }
  results += '</ul>';
  document.getElementById('results').innerHTML = results;
}
