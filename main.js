let Phrase = require("mhartl-palindrome");

let string = prompt("回文かどうかテストしたい文字列を入力してください：");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}"はパリンドロームです`);
} else {
  alert(`"${phrase.content}"はパリンドロームではありません`);
}