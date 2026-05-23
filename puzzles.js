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
      ['H', 'E', 'A', 'R', 'T'],
      ['E', 'M', 'B', 'E', 'R'],
      ['A', 'B', 'U', 'S', 'E'],
      ['R', 'E', 'S', 'I', 'N'],
      ['T', 'R', 'E', 'N', 'D']
    ],
    clues: {
      across: {
        1: "Vital organ that beats in the chest",
        6: "Glowing coal in a dying fire",
        7: "Treat cruelly or mistreat",
        8: "Sticky substance secreted by pine trees",
        9: "Current fashion, style, or fad"
      },
      down: {
        1: "Universal symbol of love and affection",
        2: "Smoldering remains of a campfire",
        3: "Unfair or harmful treatment",
        4: "Material used in 3D printing and varnishes",
        5: "General direction in which things are developing"
      }
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
      ['A', 'S', 'C', 'O', 'T'],
      ['S', 'H', 'O', 'R', 'E'],
      ['C', 'O', 'D', 'E', 'X'],
      ['O', 'R', 'E', 'O', 'S'],
      ['T', 'E', 'X', 'T', 'S']
    ],
    clues: {
      across: {
        1: "Broad necktie folded under the chin",
        6: "Land along the edge of an ocean or lake",
        7: "Ancient manuscript in book form",
        8: "Popular cream-filled chocolate cookies",
        9: "Sends a message on a mobile phone"
      },
      down: {
        1: "Classic high-class neckband",
        2: "Coastline or beach area",
        3: "Ancient historical volume",
        4: "Milk's favorite sandwich snacks",
        5: "Written messages sent digitally"
      }
    }
  },
  {
    id: 3,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['B', 'A', 'S', 'I', 'S'],
      ['A', 'G', 'E', 'N', 'T'],
      ['S', 'E', 'N', 'S', 'E'],
      ['I', 'N', 'T', 'R', 'O'],
      ['S', 'T', 'E', 'E', 'L']
    ],
    clues: {
      across: {
        1: "Foundation or underlying support",
        6: "Undercover spy or representative",
        7: "Sight, sound, smell, taste, or touch",
        8: "Short opening section of a song",
        9: "Strong alloy of iron and carbon"
      },
      down: {
        1: "Starting point or core rationale",
        2: "Secret service operative",
        3: "Make head or tail of, or rational feeling",
        4: "Prefatory part or musical lead-in",
        5: "Heavy metal used to build skyscrapers"
      }
    }
  },
  {
    id: 4,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['G', 'R', 'A', 'C', 'E'],
      ['R', 'U', 'L', 'E', 'R'],
      ['A', 'L', 'O', 'N', 'E'],
      ['C', 'E', 'N', 'T', 'S'],
      ['E', 'R', 'E', 'C', 'T']
    ],
    clues: {
      across: {
        1: "Elegance, beauty of movement, or prayer before meals",
        6: "King, queen, or a straight-edged measuring tool",
        7: "Isolated or by oneself",
        8: "Coins that make up a dollar",
        9: "Build, construct, or stand upright"
      },
      down: {
        1: "Poise, charm, or a brief delay allowed for payment",
        2: "Sovereign monarch or classroom measure",
        3: "Without anyone else present",
        4: "Pennies in US currency",
        5: "Set up vertically, or upright in posture"
      }
    }
  },
  {
    id: 5,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['W', 'A', 'T', 'E', 'R'],
      ['A', 'L', 'I', 'V', 'E'],
      ['T', 'I', 'L', 'E', 'S'],
      ['E', 'V', 'E', 'N', 'T'],
      ['R', 'E', 'S', 'T', 'S']
    ],
    clues: {
      across: {
        1: "H2O, essential liquid for all life",
        6: "Living, breathing, and not dead",
        7: "Flat pieces of baked clay on a floor or roof",
        8: "Happening, competition, or social occasion",
        9: "Takes a break or lies down to sleep"
      },
      down: {
        1: "Rain, ocean, or tap fluid",
        2: "Active, animated, or full of life",
        3: "Ceramic squares in a bathroom",
        4: "Significant occurrence or party",
        5: "Stops working to recover energy"
      }
    }
  },
  {
    id: 6,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['S', 'T', 'A', 'R', 'E'],
      ['T', 'O', 'N', 'E', 'R'],
      ['A', 'N', 'I', 'M', 'E'],
      ['R', 'E', 'M', 'I', 'T'],
      ['E', 'R', 'E', 'C', 'T']
    ],
    clues: {
      across: {
        1: "Look fixedly or vacantly with eyes wide open",
        6: "Liquid or powder used in laser printers",
        7: "Japanese style of hand-drawn or computer animation",
        8: "Cancel or send money in payment",
        9: "Rigidly upright, or build a structure"
      },
      down: {
        1: "Long, intense gaze",
        2: "Cosmetic skin fluid, or printer cartridge ink",
        3: "Japanese cartoon art genre",
        4: "Pardon a debt, or transfer funds",
        5: "Raise a monument, or straight and stiff"
      }
    }
  },
  {
    id: 7,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['P', 'L', 'A', 'T', 'E'],
      ['L', 'I', 'V', 'E', 'N'],
      ['A', 'V', 'E', 'R', 'T'],
      ['T', 'E', 'R', 'S', 'E'],
      ['E', 'N', 'T', 'E', 'R']
    ],
    clues: {
      across: {
        1: "Flat dish from which food is eaten",
        6: "Make more cheerful or animated (with 'up')",
        7: "Turn away one's eyes, or prevent a disaster",
        8: "Sparing in the use of words; concise",
        9: "Go or come into a room, or press this key"
      },
      down: {
        1: "Home plate in baseball, or a serving platter",
        2: "Brighten or make lively",
        3: "Ward off, turn aside, or bypass",
        4: "Brief, abrupt, or to the point in speech",
        5: "Type in data, or pass through a doorway"
      }
    }
  },
  {
    id: 8,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['F', 'E', 'A', 'S', 'T'],
      ['E', 'A', 'R', 'T', 'H'],
      ['A', 'R', 'E', 'N', 'A'],
      ['S', 'T', 'E', 'E', 'R'],
      ['T', 'H', 'E', 'S', 'E']
    ],
    clues: {
      across: {
        1: "Large, celebratory meal for many guests",
        6: "Third planet from the Sun; our home",
        7: "Level area surrounded by seats for sports or shows",
        8: "Guide, direct, or control a vehicle's path",
        9: "Referring to the specific items nearby"
      },
      down: {
        1: "Abundant banquet or eat sumptuously",
        2: "Soil, ground, or the globe we live on",
        3: "Circular stadium or battlefield",
        4: "Ox raised for beef, or pilot a ship",
        5: "The plural of 'this'"
      }
    }
  },
  {
    id: 9,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['S', 'C', 'A', 'L', 'E'],
      ['C', 'A', 'B', 'I', 'N'],
      ['A', 'B', 'O', 'D', 'E'],
      ['L', 'I', 'M', 'B', 'O'],
      ['E', 'N', 'E', 'M', 'Y']
    ],
    clues: {
      across: {
        1: "Weighing device, or climb to the top of",
        6: "Small wooden shelter in the wild",
        7: "Place of residence; home or dwelling",
        8: "State of neglect, oblivion, or dance under a low bar",
        9: "Hostile opponent or foe in a conflict"
      },
      down: {
        1: "Flake on a fish, or musical sequence of notes",
        2: "Cozy log house, or aircraft passenger area",
        3: "Dwelling place, or 'humble' home",
        4: "Unresolved state, or classic party dance",
        5: "Adversary or archenemy"
      }
    }
  },
  {
    id: 10,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['F', 'L', 'O', 'O', 'D'],
      ['L', 'E', 'A', 'V', 'E'],
      ['O', 'A', 'S', 'I', 'S'],
      ['O', 'V', 'E', 'N', 'S'],
      ['D', 'E', 'S', 'K', 'S']
    ],
    clues: {
      across: {
        1: "Overflow of a large amount of water",
        6: "Go away from, depart, or vacation time",
        7: "Fertile spot in a desert where water is found",
        8: "Kitchen appliances used for baking or roasting",
        9: "School or office writing tables"
      },
      down: {
        1: "Deluge or inundate with water",
        2: "Exit, quit, or permission to be absent",
        3: "Green haven in a dry sandy desert",
        4: "Pizza cooking chambers",
        5: "Furniture pieces for computer work"
      }
    }
  },
  {
    id: 11,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['C', 'R', 'A', 'F', 'T'],
      ['R', 'U', 'L', 'E', 'R'],
      ['A', 'L', 'I', 'B', 'I'],
      ['F', 'E', 'E', 'D', 'S'],
      ['T', 'R', 'I', 'P', 'S']
    ],
    clues: {
      across: {
        1: "Skill in making things by hand, or a boat",
        6: "Measuring tool, or sovereign of a kingdom",
        7: "Claim or piece of evidence that one was elsewhere",
        8: "Gives food to, or live social media streams",
        9: "Journeys, voyages, or stumbles and falls"
      },
      down: {
        1: "Handmade trade, or spaceship",
        2: "King, emperor, or standard measuring stick",
        3: "Suspect's legal excuse or defense",
        4: "Supplies meals to, or RSS web updates",
        5: "Catching one's foot, or short vacations"
      }
    }
  },
  {
    id: 12,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['T', 'R', 'A', 'C', 'K'],
      ['R', 'E', 'A', 'C', 'H'],
      ['A', 'C', 'O', 'R', 'N'],
      ['C', 'H', 'O', 'I', 'R'],
      ['K', 'N', 'E', 'E', 'L']
    ],
    clues: {
      across: {
        1: "Running path, footprint, or train rail",
        6: "Stretch out an arm, or arrive at a goal",
        7: "Fruit of the oak tree; small nut",
        8: "Group of singers, often in a church",
        9: "Go down on one's knees as a sign of respect"
      },
      down: {
        1: "Follow someone's scent, or athletic oval",
        2: "Achieve, contact, or range of influence",
        3: "Oak nut with a woody cupule",
        4: "Choral ensemble that sings hymns",
        5: "Get down on the floor on two joints"
      }
    }
  },
  {
    id: 13,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['A', 'S', 'H', 'E', 'S'],
      ['S', 'H', 'O', 'R', 'E'],
      ['H', 'O', 'T', 'E', 'L'],
      ['E', 'R', 'E', 'C', 'T'],
      ['S', 'L', 'E', 'P', 'T']
    ],
    clues: {
      across: {
        1: "Powdery residue left after a fire",
        6: "Land along the edge of a sea or lake",
        7: "Establishment providing lodging for travelers",
        8: "Rigidly straight, or build a tower",
        9: "Slept, dozed, or rested in slumber"
      },
      down: {
        1: "Fireplace sweepings",
        2: "Coast, beach, or waterfront",
        3: "Inn, motel, or luxury lodging",
        4: "Construct, put up, or vertical in posture",
        5: "Took a nap or slumbered"
      }
    }
  },
  {
    id: 14,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['B', 'L', 'A', 'N', 'D'],
      ['L', 'O', 'V', 'E', 'R'],
      ['A', 'V', 'O', 'I', 'D'],
      ['N', 'E', 'R', 'V', 'Y'],
      ['D', 'R', 'Y', 'L', 'Y']
    ],
    clues: {
      across: {
        1: "Lacking strong features or flavor; mild",
        6: "Partner in a romantic relationship",
        7: "Keep away from or shun",
        8: "Bold, cheeky, audacious, or tense",
        9: "In a dry, sarcastic, or ironic manner"
      },
      down: {
        1: "Tasteless, dull, or boring in taste",
        2: "Sweetheart, admirer, or beloved",
        3: "Elude, bypass, or stay clear of",
        4: "Brazen, brassy, or highly anxious",
        5: "Wryly, sarcastically, or without moisture"
      }
    }
  },
  {
    id: 15,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['M', 'O', 'T', 'E', 'L'],
      ['O', 'P', 'E', 'R', 'A'],
      ['T', 'E', 'N', 'E', 'T'],
      ['E', 'R', 'E', 'C', 'T'],
      ['L', 'A', 'T', 'E', 'S']
    ],
    clues: {
      across: {
        1: "Roadside hotel designed for motorists",
        6: "Dramatic musical work sung by actors",
        7: "Principle, belief, or core doctrine",
        8: "Upright in posture, or construct",
        9: "Shifts that end after dark, or tardy arrivals"
      },
      down: {
        1: "Motor inn with parking",
        2: "Theatrical show with a soprano aria",
        3: "Dogma, conviction, or central tenet",
        4: "Set up, assemble, or vertical",
        5: "Tardy employees, or late-night schedules"
      }
    }
  },
  {
    id: 16,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['A', 'S', 'S', 'E', 'T'],
      ['S', 'H', 'O', 'R', 'E'],
      ['S', 'O', 'L', 'A', 'R'],
      ['E', 'R', 'A', 'S', 'E'],
      ['T', 'E', 'R', 'S', 'E']
    ],
    clues: {
      across: {
        1: "Valuable person, thing, or resource",
        6: "Land along the edge of water; beach",
        7: "Relating to or determined by the Sun",
        8: "Rub out, delete, or wipe away",
        9: "Sparing in the use of words; concise"
      },
      down: {
        1: "Beneficial holding or positive quality",
        2: "Coastline or lake border",
        3: "Powered by the Sun's rays",
        4: "Remove pencil marks or data",
        5: "Brief, direct, or abrupt in writing"
      }
    }
  },
  {
    id: 17,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['S', 'W', 'E', 'E', 'T'],
      ['W', 'R', 'I', 'T', 'E'],
      ['E', 'I', 'G', 'H', 'T'],
      ['E', 'T', 'H', 'E', 'R'],
      ['T', 'E', 'T', 'E', 'S']
    ],
    clues: {
      across: {
        1: "Having the pleasant taste of sugar",
        6: "Compose text on paper or type",
        7: "Number between seven and nine",
        8: "Anesthetic gas, or the clear upper air",
        9: "Heads in French (as in private talks)"
      },
      down: {
        1: "Sugary, sugary-tasting, or kind",
        2: "Pen a letter or script",
        3: "One more than seven",
        4: "Classic operating room gas",
        5: "French heads, or private chats"
      }
    }
  },
  {
    id: 18,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['C', 'H', 'E', 'A', 'P'],
      ['H', 'E', 'A', 'V', 'E'],
      ['E', 'A', 'S', 'E', 'L'],
      ['A', 'V', 'E', 'R', 'S'],
      ['P', 'E', 'L', 'T', 'S']
    ],
    clues: {
      across: {
        1: "Low in price or value; inexpensive",
        6: "Lift or haul with great effort, or sigh",
        7: "Wooden frame to hold an artist's canvas",
        8: "Asserts or declares something to be true",
        9: "Animal skins, or throws stones at"
      },
      down: {
        1: "Bargain-priced or poorly made",
        2: "Lift with effort, or throw heavily",
        3: "Stand in an art studio",
        4: "Formally declares or states",
        5: "Hurls objects at, or raw furs"
      }
    }
  },
  {
    id: 19,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['A', 'S', 'P', 'E', 'N'],
      ['S', 'H', 'A', 'V', 'E'],
      ['P', 'A', 'T', 'E', 'S'],
      ['E', 'V', 'E', 'N', 'T'],
      ['N', 'E', 'S', 'T', 'S']
    ],
    clues: {
      across: {
        1: "Poplar tree with leaves that flutter in the breeze",
        6: "Cut hair from the face with a razor",
        7: "Heads, or savory meat pastes",
        8: "Occurring event or social occasion",
        9: "Structures built by birds to hold eggs"
      },
      down: {
        1: "Famous Colorado ski resort city",
        2: "Groom facial hair, or slice thin slices",
        3: "Meat spreads, or crowns of heads",
        4: "Special happening or athletic match",
        5: "Cozy twigs beds in trees"
      }
    }
  },
  {
    id: 20,
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    answers: [
      ['S', 'T', 'R', 'A', 'P'],
      ['T', 'R', 'I', 'P', 'E'],
      ['R', 'I', 'G', 'O', 'R'],
      ['A', 'P', 'O', 'R', 'T'],
      ['P', 'E', 'R', 'T', 'S']
    ],
    clues: {
      across: {
        1: "Strip of leather or fabric used for fastening",
        6: "Cow stomach lining eaten as food, or rubbish",
        7: "Severity, strictness, or logical precision",
        8: "Toward the port side of a ship",
        9: "Cheeky, forward, or saucy individuals"
      },
      down: {
        1: "Fasten with a band, or a watchband",
        2: "Edible offal, or complete nonsense",
        3: "Strict accuracy, hardness, or harshness",
        4: "On the left side of a vessel",
        5: "Lively, bold, or insolent folks"
      }
    }
  }
];
