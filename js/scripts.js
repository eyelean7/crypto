//back-end
function encryptor(inputSentence) {
  var inputSentence = inputSentence.toLowerCase();
  var lowerSentence=inputSentence.toLowerCase();
  var sentenceRegex = /[a-z]/g;
  sentenceArray = (lowerSentence.match(sentenceRegex));
  var sentence = sentenceArray.join("");
  sentenceLength = sentenceArray.length;
  var sentenceRoot = Math.sqrt(sentenceLength);
  var sentenceRootProduct = Math.ceil(sentenceRoot);

  for (var i=0; i<sentenceLength; i+=sentenceRootProduct) {
  alert(sentence.substr(i, sentenceRootProduct))
  }



}

//UI

$(document).ready(function() {
  $("form#inputSentence").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#inputSentence").val();
    console.log(inputSentence);


    var result = encryptor(inputSentence);
    $("#result").text(outputFinal);
    $("#result").show();
    // console.log(outputFinal);
    // $("#noresult").text(result);
  });
});
