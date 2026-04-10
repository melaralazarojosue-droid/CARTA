const correctPassword = '0621';
let input = '';

function enterDigit(digit) {
  if (input.length < 4) {
    input += digit;
  }

  const display = document.getElementById('inputDisplay');
  display.textContent = input.padEnd(4, '•');

  const musica = document.getElementById('musica');
      musica.volume = 0.3; // volumen suave
      musica.play();

  if (input.length === 4) {
    if (input === correctPassword) {
      document.getElementById('passwordScreen').classList.remove('active');
      document.getElementById('notepadScreen').classList.add('active');
    } 


    else {
      alert('Contraseña incorrecta, intenta de nuevo sofi bonita PIENSA EN UNA FECHA IMPORTANTE Y EN ALGUIEN QUE AMES MUCHO');
      input = '';
      display.textContent = '••••';
    }
  }
}