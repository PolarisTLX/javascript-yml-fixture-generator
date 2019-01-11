// This is a collection of words which will be chosen at random.
// These are to be used to fill space for design purposes.
var collectionOfRandomWords = 'lorem ipsum dolor sit amet consectetur adipiscing elit aliquam ac consectetur nibh in semper mi nunc dapibus felis nulla vitae'.split(' ');

// This is the number of fixtures which will be generated
var theNumberOfFixturesIWant = 50;

function format(index) {
  // Fill in your fixture as you'd like it below

  var format = `
    daily_do_hope_${index + 101}:
      author_id: 16
      author_type: Participant
      group_id: 1
      title: "${assembleRandomWordsToTitle(collectionOfRandomWords, 4)}"
      body: "${assembleRandomWords(collectionOfRandomWords)}"
      discussion_type: 0
      created_at: <%= DateTime.now - ${Math.floor(Math.random() * 30)}.days %>
      discussion_topic_id: 3
  `
  return format;
}

function assembleRandomWordsToTitle(arr, titleLength) {
  var sentence = "";

  for (var i = 0; i < titleLength; i += 1) {
    sentence += arr[Math.floor(Math.random() * arr.length)] + ' ';
  }
  sentence = sentence.slice(0, -1);

  return sentence;
}

function assembleRandomWords(arr) {
  var sentence = "";

  for (var i = 0; i < arr.length; i += 1) {
    sentence += arr[Math.floor(Math.random() * arr.length)] + ' ';
  }

  return sentence
}

function generate_comments() {
  var fullString = "";

  for (var i = 0; i < theNumberOfFixturesIWant; i += 1) {

    fullString += format(i)
  }

  return fullString;
}

// To run your fixture, just go to console and type "node <NAMEOFFILE>.js"
// Afterwards, you can copy from the console and paste into fixture file
console.log(generate_comments());
