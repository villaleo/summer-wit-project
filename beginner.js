/*
 * # Madlibs
 *
 * # Problem Description:
 * A Madlib is a phrasal template word game. It consists of one player
 * prompting others for a list of words to substitute for blanks in a
 * story before reading aloud.
 *
 * You and Mayra play Madlibs all the time, but you notice that you are
 * wasting lots of paper in playing the game. You had a brilliant idea
 * of writing a program to solve this problem. Mayra will be using your
 * program to play Madlibs, saving lots of paper.
 *
 * Mayra should be able to run your program and prompted to enter a noun (N),
 * plural noun (PN), and a verb in the present tense (V). After Mayra enters
 * the words, alert her displaying the Madlib:
 *     "Today, every student has a computer small enough to fit into his or
 *     her N. A student can solve any math problem by simply pushing the
 *     computer's little PN. Computers can add, multiply, divide, and V."
 * were N is the noun, PN is the plural noun, and V is the verb in the
 * present tense.
 *
 * # Notes:
 * A noun is a person, place, or thing.
 * Examples: cat, school, pencil, sky
 *
 * A plural noun is the plural equivalent of a noun.
 * Examples: cats, schools, pencils, skies
 *
 * A verb is an action word.
 * Examples: run, jump, climb, grab
 *
 * # Resources:
 * Here are some resources in case you get stuck
 * - Variables: https://www.w3schools.com/js/js_variables.asp
 * - Strings: https://www.w3schools.com/js/js_string_templates.asp
 * - Function alert(): https://www.w3schools.com/jsref/met_win_alert.asp
 * - Function prompt(): https://www.w3schools.com/jsref/met_win_prompt.asp
 */

function beginner() {
  let noun = prompt("Enter a noun");
  let pluralNoun = prompt("Enter a plural noun:");
  let verb = prompt("Enter a verb in the present tense:");

  alert(
    "Today, every student has a computer small enough to fit into his or her " +
      noun +
      ". A student can solve any math problem by simply pushing the computer's little " +
      pluralNoun +
      ". Computers can add, multiply, divide, and " +
      verb +
      "."
  );
}

function experienced() {
  let tasks = [];
  let choice = "y";

  while (choice.startsWith("y") || choice.startsWith("Y")) {
    let task = prompt("Enter a task:");
    tasks.push(task);
    choice = prompt("Enter another?");
  }

  alert(`You entered ${tasks.length} tasks: ${tasks}`);
}

experienced();
