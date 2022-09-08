function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

spinalCase('This Is Spinal Tap'); // should return ==> this-is-spinal-tap
spinalCase('The_Andy_Griffith_Show'); // should return ==> the-andy-griffith-show
