let plugs = {
  plug1: {
    color: "red",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug2: {
    color: "yellow",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug3: {
    color: "blue",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug4: {
    color: "green",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug5: {
    color: "magenta",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug6: {
    color: "cyan",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug7: {
    color: "orangered",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug8: {
    color: "maroon",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug9: {
    color: "indigo",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug10: {
    color: "olive",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug11: {
    color: "sienna",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug12: {
    color: "lime",
    pluggedFrom: "",
    pluggedTo: "",
  },
  plug13: {
    color: "tea",
    pluggedFrom: "",
    pluggedTo: "",
  },
};
let entries = Object.entries(plugs);
// console.log(entries[0][1].pluggedFrom);

//  this event listener listens to keyPresses on the keyboard and converts a key if its connected to another key
document.addEventListener("keydown", (e) => {
  let input = e.key.toUpperCase();
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].pluggedFrom == input && entries[i][1].pluggedTo) {
      console.log(
        `your original letter is ${input}`,
        `and your new letter is ${entries[i][1].pluggedTo}`
      );
    }
  }
});

changeBG = (letter, color) => {
  let button = document.getElementById(`${letter}`);
  button.style.backgroundColor = `${color}`;
};

plug = (letter) => {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].pluggedFrom == "") {
      entries[i][1].pluggedFrom = `${letter}`;
      changeBG(entries[i][1].pluggedFrom, entries[i][1].color);
      break;
    } else if (
      entries[i][1].pluggedFrom !== "" &&
      entries[i][1].pluggedTo == ""
    ) {
      entries[i][1].pluggedTo = `${letter}`;
      changeBG(entries[i][1].pluggedTo, entries[i][1].color);

      console.log(entries[i][1]);

      break;
    } else if (entries[i][1].pluggedFrom && entries[i][1].pluggedTo) {
      continue;
    }
  }
};

document.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-letter")) {
    if (e.target.dataset.isPlugged == "false") {
      e.target.dataset.isPlugged = "true";
    } else {
      e.target.dataset.isPlugged = "false";
    }
  } else {
    return;
  }
});

// now we need to create rotors and the rotor mechanism. as such we are going to make a class constructor

//A rotor should have 4 functions, first:you submit a letter =>{   1- find the index 2- convert letter, 3- unshift};
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let key;
class Rotors {
  constructor(arr) {
    this.arr = arr;
  }

  getIndex(letter) {
    console.log(
      "letter Submitted to Rotor:",
      letter.toUpperCase(),
      "its alphabetical position is:",
      alphabet.indexOf(letter)
    );
    return {
      index: alphabet.indexOf(letter),
    };
  }
  unshift() {
    this.arr.unshift(`${this.arr.pop()}`);
    console.log("enigma rotor has unshifted, new array:", this.arr);
  }
  convertLetter(position) {
    console.log("letter converted to:", this.arr[position]);
    this.unshift();
    return {
      newLetter: this.arr[position + 1],
    };
  }
}

let rotor0 = new Rotors([
  "E",
  "K",
  "M",
  "F",
  "L",
  "G",
  "D",
  "Q",
  "V",
  "Z",
  "N",
  "T",
  "O",
  "W",
  "Y",
  "H",
  "X",
  "U",
  "S",
  "P",
  "A",
  "I",
  "B",
  "R",
  "C",
  "J",
]);
let rotor1 = new Rotors([
  "A",
  "J",
  "D",
  "K",
  "S",
  "I",
  "R",
  "U",
  "X",
  "B",
  "L",
  "H",
  "W",
  "T",
  "M",
  "C",
  "Q",
  "G",
  "Z",
  "N",
  "P",
  "Y",
  "F",
  "V",
  "O",
  "E",
]);
let rotor2 = new Rotors([
  "B",
  "D",
  "F",
  "H",
  "J",
  "L",
  "C",
  "P",
  "R",
  "T",
  "X",
  "V",
  "Z",
  "N",
  "Y",
  "E",
  "I",
  "W",
  "G",
  "A",
  "K",
  "M",
  "U",
  "S",
  "Q",
  "O",
]);
let reflector = new Rotors([
  "E",
  "J",
  "M",
  "Z",
  "A",
  "L",
  "Y",
  "X",
  "V",
  "B",
  "W",
  "F",
  "C",
  "R",
  "Q",
  "U",
  "O",
  "N",
  "T",
  "S",
  "P",
  "I",
  "K",
  "H",
  "G",
  "D",
]);

function submitletter0(letter) {
  // rotor0.convertLetter(rotor1.getIndex(`${letter}`).index);
  return {
    newLetter: rotor0.convertLetter(rotor0.getIndex(`${letter}`).index)
      .newLetter,
  };
}
async function submitletter1(letter) {
  // rotor1.convertLetter(rotor1.getIndex(`${letter}`).index);
  return {
    newLetter: rotor1.convertLetter(rotor1.getIndex(`${letter}`).index),
  };
}
function submitletter2(letter) {
  // rotor2.convertLetter(rotor1.getIndex(`${letter}`).index);
  return {
    newLetter: rotor2.convertLetter(rotor2.getIndex(`${letter}`).index),
  };
}
function submitletterReflector(letter) {
  // reflector.convertLetter(rotor1.getIndex(`${letter}`).index);
  return {
    newLetter: reflector.convertLetter(reflector.getIndex(`${letter}`).index),
  };
}
async function submitToEnigma(letter) {
  console.log("sex");
  console.log("sex2");
  await submitletter0(letter).newLetter;
}
