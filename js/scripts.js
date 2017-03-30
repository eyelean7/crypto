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
  //break string based on square root of input
  var matrixArray = [];
  for (var i=0; i<sentenceLength; i+=sentenceRootProduct) {
    matrixArray.push(sentence.substr(i, sentenceRootProduct));

  }//for loop creates split strings
  var outputArray = [];
  for (var i=0; i<matrixArray.length; i++) {
     outputArray.push(matrixArray[i][0]);
    // for (var i=0; i<=sentenceRootProduct; i++) {
    //   outputArray.push(matrixArray[i][i]);
    // }

  }


  console.log(outputArray);

}//encryptor

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
