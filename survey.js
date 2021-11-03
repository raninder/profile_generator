const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let response = [];
rl.question('What\'s your name? ', (answer0) => {
    //console.log(`Thank you for your valuable feedback: ${answer1}`);
    response.push(answer0);

    rl.question('What\'s an activity you like doing?', (answer1) => {
        //console.log(`Thank you for your valuable feedback: ${answer2}`);
        response.push(answer1);

        rl.question('What do you listen to while doing that?', (answer2) => {
            response.push(answer2);

            rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer3) => {
                response.push(answer3);

                rl.question('What\'s your favourite thing to eat for that meal?', (answer4) => {
                    response.push(answer4);

                    rl.question('Which sport is your absolute favourite?', (answer5) => {
                        response.push(answer5);

                        rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer6) => {
                            response.push(answer6);

                            console.log(`${response[0]} loves listening to ${response[2]} while doing ${response[1]}, devouring ${response[4]} for ${response[3]}, prefers ${response[5]} over any other sport, and is amazing at ${response[6]} at inopportune times.`);
                            
                            rl.close();
                        })
                    })
                })
            })
        })
    })

});
