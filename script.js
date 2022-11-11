const aliceDecrypt = (message) => {
    const length = 100000;
    let answer = message;
  
    (/^[a-z]+$/.test(message) &&
      message.length <= length) &&
      [...new Set(message.split(""))].map(
        (letter) =>
          answer.includes((letter = letter.repeat(2))) &&
          (answer = answer.replaceAll(letter, ""))
      );
  
    document.getElementById("answer").innerHTML = `Ответ: ${answer}`;
  };
  
  const textarea = document.querySelector("textarea");
  textarea.addEventListener("input", (event) => event.target.value);
  
  document.getElementById("decrypt").addEventListener("click", function () {
    aliceDecrypt(textarea.value);
  });
  
  