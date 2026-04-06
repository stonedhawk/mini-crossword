const puzzles = [
  {
    id: 1,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['A', 'C', 'O', 'R', 'N'],
      ['C', 'O', 'L', 'O', 'R'],
      ['O', 'L', 'I', 'V', 'E'],
      ['R', 'O', 'V', 'E', 'R'],
      ['N', 'E', 'R', 'D', 'S']
    ],
    clues: {
      across: { 1: "Oak tree nut", 6: "Red or blue", 7: "Martini garnish", 8: "Mars explorer", 9: "Geeks" },
      down: { 1: "Oak tree nut", 2: "Red or blue", 3: "Martini garnish", 4: "Mars explorer", 5: "Geeks" }
    }
  },
  {
    id: 2,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['S', 'P', 'A', 'R', 'E'],
      ['P', 'A', 'N', 'E', 'L'],
      ['A', 'N', 'G', 'L', 'E'],
      ['R', 'E', 'L', 'I', 'C'],
      ['E', 'L', 'E', 'C', 'T']
    ],
    clues: {
      across: { 1: "Bowling achievement", 6: "Comic strip box", 7: "Geometry topic", 8: "Historical object", 9: "Choose in a voting booth" },
      down: { 1: "Bowling achievement", 2: "Comic strip box", 3: "Geometry topic", 4: "Historical object", 5: "Choose in a voting booth" }
    }
  },
  {
    id: 3,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ],
    answers: [
      ['F', 'L', 'O', 'W', 'S'],
      ['O', 'P', 'E', 'R', 'A'],
      ['C', 'A', 'B', 'I', 'N'],
      ['U', 'S', 'E', 'R', 'S'],
      ['.', 'S', 'Y', 'N', '.']
    ],
    clues: {
      across: { 1: "Moves like a river", 6: "Place for an aria", 7: "Log house", 8: "App customers", 9: "Abbr. for synonym" },
      down: { 1: "Pay attention", 2: "Spanish plurals", 3: "Follows rules", 4: "Write incorrectly", 5: "Socially awkward" }
    }
  },
  {
    id: 4,
    layout: [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0]
    ],
    answers: [
      ['M', 'A', 'P', 'S', '.'],
      ['O', 'B', 'O', 'E', 'S'],
      ['S', 'L', 'A', 'N', 'G'],
      ['S', 'E', 'N', 'S', 'E'],
      ['.', 'M', 'E', 'E', 'T']
    ],
    clues: {
      across: { 1: "Cartographer's tools", 5: "Woodwinds", 6: "Informal speech", 7: "Common ___", 8: "Introduce" },
      down: { 1: "Plant on a rock", 2: "Competent", 3: "Poem form", 4: "School subj.", 5: "Gets" }
    }
  },
  {
    id: 5,
    layout: [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ],
    answers: [
      ['.', 'C', 'A', 'T', '.'],
      ['W', 'A', 'L', 'E', 'S'],
      ['O', 'M', 'E', 'N', 'S'],
      ['R', 'E', 'N', 'T', 'S'],
      ['.', 'S', 'A', 'T', '.']
    ],
    clues: {
      across: { 1: "Feline", 4: "UK nation", 6: "Signs of the future", 7: "Leases", 8: "Took a chair" },
      down: { 1: "Desert animal", 2: "Extraterrestrial", 3: "Camp shelters", 4: "Conflict", 5: "Snake sound" }
    }
  },
  {
    id: 6,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['P','A','S','T','A'], ['A','L','I','E','N'], ['P','I','G','M','Y'], ['E','V','H','P','A'], ['R','E','S','T','S'] ],
    clues: {
      across: { 1: "Italian noodles", 6: "Extraterrestrial", 7: "Pygmy spelling var", 8: "Ev HPA (random info)", 9: "Takes a break" },
      down: { 1: "Writing material", 2: "Living", 3: "Sighs", 4: "Tempo", 5: "Anyways" }
    }
  },
  {
    id: 7,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['B','A','S','I','S'], ['A','G','E','N','T'], ['T','R','A','C','E'], ['H','E','V','H','P'], ['S','E','E','M','S'] ],
    clues: {
      across: { 1: "Foundation", 6: "Spy", 7: "Outline", 8: "Hev HP (abbr)", 9: "Appears to be" },
      down: { 1: "Tub fixtures", 2: "Agree", 3: "Sea v", 4: "Inch", 5: "Steps" }
    }
  },
  {
    id: 8,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['S','L','I','D','E'], ['L','O','G','I','C'], ['I','D','E','A','S'], ['D','G','A','R','S'], ['E','E','S','T','S'] ],
    clues: {
      across: { 1: "Playground fixture", 6: "Reasoning", 7: "Thoughts", 8: "D Gars (name)", 9: "Eests (directions)" },
      down: { 1: "Slide down", 2: "Lodge", 3: "Ideas up", 4: "Diary", 5: "ECSS" }
    }
  },
  {
    id: 9,
    layout: [ [1,0,0,0,1], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,0,0,0,1] ],
    answers: [ ['.','B','O','W','.'], ['M','O','V','I','E'], ['A','X','E','L','S'], ['C','E','N','T','S'], ['.','S','S','O','.'] ],
    clues: {
      across: { 1: "Archery weapon", 3: "Cinema film", 5: "Ice skating jumps", 6: "Pennies", 7: "SSO login" },
      down: { 1: "Boxer", 2: "Ovens", 3: "Wilts", 4: "Mac OS" }
    }
  },
  {
    id: 10,
    layout: [ [0,0,0,0,1], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,0,0,0,0] ],
    answers: [ ['T','R','E','E','.'], ['H','O','V','E','R'], ['A','V','E','R','T'], ['N','E','R','V','E'], ['.','R','E','E','D'] ],
    clues: {
      across: { 1: "Pine or oak", 5: "Float in place", 6: "Look away", 7: "Audacity", 8: "Woodwind mouthpiece" },
      down: { 1: "More than", 2: "Robot", 3: "Ever", 4: "Served", 5: "Red" }
    }
  },
  {
    id: 11,
    layout: [ [1,0,0,0,1], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,0,0,0,1] ],
    answers: [ ['.','P','A','Y','.'], ['S','A','L','E','S'], ['P','L','I','A','T'], ['O','M','E','N','S'], ['.','S','N','S','.'] ],
    clues: {
      across: { 1: "Give money", 4: "Retail business", 6: "Pliat (word)", 7: "Portents", 8: "Social Networks" },
      down: { 1: "Hands", 2: "Alien", 3: "Years", 4: "Spo", 5: "Sts" }
    }
  },
  {
    id: 12,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,0,0,0,1], [1,1,0,1,1] ],
    answers: [ ['S','C','A','R','F'], ['C','H','O','I','R'], ['O','U','N','C','E'], ['.','G','E','E','.'], ['.','.','S','.','.'] ],
    clues: {
      across: { 1: "Winter neckwear", 6: "Singing group", 7: "1/16 of a pound", 8: "Hmm..." },
      down: { 1: "Scots", 2: "Chugs", 3: "Aones", 4: "Rice", 5: "Free" }
    }
  },
  {
    id: 13,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['W','H','A','L','E'], ['H','O','U','S','E'], ['A','U','D','I','O'], ['T','N','I','O','N'], ['S','D','O','N','E'] ],
    clues: {
      across: { 1: "Ocean giant", 6: "Home", 7: "Sound", 8: "Tnion (jargon)", 9: "Sdone (slang)" },
      down: { 1: "Whats", 2: "Hound", 3: "Audio", 4: "Lsion", 5: "Eeone" }
    }
  },
  {
    id: 14,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['B','R','A','I','N'], ['R','O','B','O','T'], ['O','Z','O','N','E'], ['W','E','I','R','D'], ['N','S','E','E','S'] ],
    clues: {
      across: { 1: "Organ of thought", 6: "Automaton", 7: "Atmospheric layer", 8: "Strange", 9: "Sees" },
      down: { 1: "Brown", 2: "Rozes", 3: "Aboie", 4: "Ioner", 5: "NTeds" }
    }
  },
  {
    id: 15,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['O','P','E','R','A'], ['P','A','N','I','C'], ['E','N','T','E','R'], ['R','E','S','T','S'], ['A','L','T','S','S'] ],
    clues: {
      across: { 1: "Phantom of the...", 6: "Freak out", 7: "Keyboard key", 8: "Takes a break", 9: "Alt keys" },
      down: { 1: "Opera", 2: "Panel", 3: "Entst", 4: "Rires", 5: "ACRSs" }
    }
  },
  {
    id: 16,
    layout: [ [1,1,0,1,1], [1,0,0,0,1], [0,0,0,0,0], [1,0,0,0,1], [1,1,0,1,1] ],
    answers: [ ['.','.','Y','.','.'], ['.','S','A','Y','.'], ['T','R','A','C','K'], ['.','I','N','K','.'], ['.','.','S','.','.'] ],
    clues: {
      across: { 1: "Speak", 3: "Race path", 5: "Squid spray" },
      down: { 2: "Sri", 3: "Yaanks", 4: "Yck" }
    }
  },
  {
    id: 17,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['S','K','A','T','E'], ['M','O','T','O','R'], ['A','A','R','O','N'], ['R','L','I','T','E'], ['T','A','P','E','S'] ],
    clues: {
      across: { 1: "Rollershoes", 6: "Engine", 7: "Moses' brother", 8: "Light var", 9: "Cassettes" },
      down: { 1: "Smart", 2: "Koala", 3: "Atrip", 4: "Toote", 5: "Ernes" }
    }
  },
  {
    id: 18,
    layout: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
    answers: [ ['C','L','E','A','R'], ['L','E','A','V','E'], ['E','N','T','E','R'], ['A','D','E','P','T'], ['R','S','S','S','S'] ],
    clues: {
      across: { 1: "Transparent", 6: "Depart", 7: "Go in", 8: "Skilled", 9: "Snakes" },
      down: { 1: "Clear", 2: "Lends", 3: "Eates", 4: "Aveys", 5: "Rerts" }
    }
  },
  {
    id: 19,
    layout: [ [0,0,0,0,1], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,0,0,0,0] ],
    answers: [ ['N','E','R','D','.'], ['O','X','I','D','E'], ['V','I','V','I','D'], ['A','L','E','R','T'], ['.','E','N','T','S'] ],
    clues: {
      across: { 1: "Geek", 5: "Chemical compound", 6: "Brightly colored", 7: "Wide awake", 8: "Tree herders" },
      down: { 1: "Nova", 2: "Exile", 3: "Riven", 4: "DIdrt", 5: "EDTS" }
    }
  },
  {
    id: 20,
    layout: [ [1,0,0,0,1], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [1,0,0,0,1] ],
    answers: [ ['.','B','L','U','.'], ['C','R','A','Z','E'], ['L','O','C','A','L'], ['A','W','E','R','S'], ['.','N','Y','S','.'] ],
    clues: {
      across: { 1: "Blu-ray", 4: "Fad", 6: "Nearby", 7: "Awers", 8: "NY State abbr" },
      down: { 1: "Brown", 2: "Lacey", 3: "Uzars", 4: "Cla", 5: "Els" }
    }
  }
];
