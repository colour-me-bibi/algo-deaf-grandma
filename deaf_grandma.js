/**
 *  This function imitates a conversation between the user with a Grandma who's hard of hearing
 *  and follows these constraints:
 *    If you don't input anything (just hit enter) she responds with WHAT?!
 *    If you ask a question with any lower-case letters, she responds with SPEAK UP, KID!
 *    If you talk to her in all upper-case letters, she responds with NO, NOT SINCE 1946!
 *    The first time you say GOODBYE! she says LEAVING SO SOON?
 *    The second time you say GOODBYE! she says LATER, SKATER! and the program exits.
 */
function deafGrandma() {
  let isLeaving = false;

  let prompt = "HEY KID!";
  while (true) {
    let response = window.prompt(prompt);

    if (!response) {
      prompt = "WHAT?!?";
    } else if (response.toUpperCase() === response) {
      if (response === "GOODBYE!") {
        if (isLeaving) {
          prompt = "LATER, SKATER!";
          break;
        } else {
          prompt = "LEAVING SO SOON?";
          isLeaving = true;
        }
      } else {
        prompt = "NO, NOT SINCE 1946!";
      }
    } else {
      prompt = "SPEAK UP, KID!";
    }
  }
}

deafGrandma();
