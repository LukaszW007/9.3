var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.",
    dinosaur = "triceratops";

function changeFirstWord(){
    dinosaur = dinosaur.toUpperCase();
text2 = text.replace(text.substr(0,12),dinosaur);
return text2;
}
function halfSentence(sentence){
    sentenceReplaced = changeFirstWord(sentence);
    lengthSentenceToDevide = sentence.length / 2;
    return sentenceReplaced.slice(0,lengthSentenceToDevide);
}
console.log(halfSentence(text));