//back-end
function encryptor(inputSentence) {
 var inputSentence = inputSentence.toLowerCase();
 var inputSentence = "It was a Hard day's night!";
 var lowerSentence=inputSentence.toLowerCase();
 var sentenceRegex = /[a-z]/g;
 sentenceArray = (lowerSentence.match(sentenceRegex));
 sentenceLength = sentenceArray.length;
 var sentenceRoot = Math.sqrt(sentenceLength);
 var sentenceRootProduct =
 Math.ceil(sentenceRoot)

 console.log(sentenceRootProduct);


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
