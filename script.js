document.getElementById('generateButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const outputText = generateGlitchMessage(inputText);
  document.getElementById('outputText').innerText = outputText;
});

function generateGlitchMessage(text) {
  const diacritics = [
    '\u0300', '\u0301', '\u0302', '\u0303', '\u0304',
    '\u0305', '\u0306', '\u0307', '\u0308', '\u0309',
    '\u030A', '\u030B', '\u030C', '\u030D', '\u030E',
    '\u030F', '\u0310', '\u0311', '\u0312', '\u0313',
    '\u0314', '\u0315', '\u0316', '\u0317', '\u0318',
    '\u0319', '\u031A', '\u031B', '\u031C', '\u031D',
    '\u031E', '\u031F', '\u0320', '\u0321', '\u0322',
    '\u0323', '\u0324', '\u0325', '\u0326', '\u0327',
    '\u0328', '\u0329', '\u032A', '\u032B', '\u032C',
    '\u032D', '\u032E', '\u032F', '\u0330', '\u0331',
    '\u0332', '\u0333', '\u0334', '\u0335', '\u0336',
    '\u0337', '\u0338', '\u0339', '\u033A', '\u033B',
    '\u033C', '\u033D', '\u033E', '\u033F', '\u0340',
    '\u0341', '\u0342', '\u0343', '\u0344', '\u0345',
  ];

  const unicodeChars = [
    '\u030d', '\u030e', '\u0304', '\u0305',
    '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307',
    '\u0308', '\u0342', '\u0343', '\u033d',
    '\u033e', '\u0325', '\u0326', '\u031d',
    '\u031e', '\u031f', '\u0320', '\u0324',
    '\u032a', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336',
    '\u034f', '\u0350', '\u0351', '\u0357',
  ];

  let glitchText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let glitchChar = char;

    const numDiacritics = Math.floor(Math.random() * 4);
    for (let j = 0; j < numDiacritics; j++) {
      glitchChar += diacritics[Math.floor(Math.random() * diacritics.length)];
    }

    glitchChar += unicodeChars[Math.floor(Math.random() * unicodeChars.length)];
    glitchText += glitchChar;
  }
  return glitchText;
}
