/*
    Wisdom Generator!
        by @AaronHuggs

    To Do:

    Completed:
        [•]Create three banks of word parts: Beginning, Middle, End.
            For example: |You should| |do jumping jacks| |all over.|
        [•]Randomly select a word part from each bank, combine them, and return the entire string.
            For example: "The ancient ones have spoken! They say: 'You should do jumping jacks all over.'"
        [•]Add another bank for introductions, to randomize the beginning of the message as well.

*/

//Define three banks of word parts to draw response from: Beginning, Middle, End.
const Beginning = ['You should','You must','Why don\'t you','Try to','You can\'t','You shouldn\'t','Don\'t ever','Please don\'t'];
const Middle = ['buy a bicyle','fly a kite','eat too much','be better','pet a cat','love yourself','read books','open your eyes'];
const End = ['today.','tomorrow.','every day.','forever.','for eternity.','or something.','or whatever.','if you want.'];

//Define arrays for introductions.
const Intro = ['The ancient ones have spoken!<br>','The wisened ones grant us with knowledge!<br>','Behold, the wisdom of the ancient ones!<br>','Their voices bellow from the abyss!<br>'];
const Say = ['They say: ','They utter... ','They whisper to you: ','They bellow: '];

/**
 * Generates the wisdom using the sacred magic arts.
 * 
 * Selects a word part from each bank and combines them to form a string.
 * 
 * @returns {string} The combined string to be output.
 */
const GenerateWisdom = () => {
    //Generate random numbers based on the length of each array.
    const randBeg = Math.floor(Math.random() * Beginning.length);
    const randMid = Math.floor(Math.random() * Middle.length);
    const randEnd = Math.floor(Math.random() * End.length);
    const randIntro = Math.floor(Math.random() * Intro.length);
    const randSay = Math.floor(Math.random() * Say.length);

    //Assemble string using random word parts, and return the result.
    const wisdom = `${Intro[randIntro]}\n${Say[randSay]}${Beginning[randBeg]} ${Middle[randMid]} ${End[randEnd]}`;
    document.getElementById("wisdom-section").innerHTML = wisdom;
}


