function introduction(name ="Aki"){
    return `Hi, my name is ${name}.`;
};
console.log(introduction());
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  };
  console.log(introductionWithLanguage("Ivy", "Python")); 
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  };
 console.log(introductionWithLanguageOptional("Gracie","Javascript"));