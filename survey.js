const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name? Nicknames are also acceptable :)\n`,
  `What's an activity you like doing?\n`,
  `What do you listen to while doing that?\n`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)\n`,
  `What's your favourite thing to eat for that meal?\n`,
  `Which sport is your absolute favourite?\n`,
  `What is your superpower? In a few words, tell us what you are amazing at!\n`
];

let answers = [];

rl.question(questions[0], (answer) => {
  answers.push(answer);
  console.log(`Your answer was: ${answer}\n`);

  rl.question(questions[1], (answer) => {
    answers.push(answer);
    console.log(`Your answer was: ${answer}\n`);

    rl.question(questions[2], (answer) => {
      answers.push(answer);
      console.log(`Your answer was: ${answer}\n`);
      
      rl.question(questions[3], (answer) => {
        answers.push(answer);
        console.log(`Your answer was: ${answer}\n`);

        rl.question(questions[4], (answer) => {
          answers.push(answer);
          console.log(`Your answer was: ${answer}\n`);

          rl.question(questions[5], (answer) => {
            answers.push(answer);
            console.log(`Your answer was: ${answer}\n`);

            rl.question(questions[6], (answer) => {
              answers.push(answer);
              console.log(`Your answer was: ${answer}\n`);
              rl.close();

              console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}\n`);

            });
          });
        });
      });
    });
  });
});