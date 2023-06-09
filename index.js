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
let rotor1top = document.getElementById("rotor0-letter-top");
let rotor1middle = document.getElementById("rotor0-letter-middle");
let rotor1bottom = document.getElementById("rotor0-letter-bottom");
let rotor2top = document.getElementById("rotor1-letter-top");
let rotor2middle = document.getElementById("rotor1-letter-middle");
let rotor2bottom = document.getElementById("rotor1-letter-bottom");
let rotor3top = document.getElementById("rotor2-letter-top");
let rotor3middle = document.getElementById("rotor2-letter-middle");
let rotor3bottom = document.getElementById("rotor2-letter-bottom");
let page = document.getElementById("page");
remove = () => {
  page.style.display = "none";
};
//  this event listener listens to keyPresses on the keyboard and converts a key if its connected to another key

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
      if (
        entries[i][1].pluggedFrom === letter ||
        entries[i][1].pluggedTo === letter
      ) {
        changeBG(entries[i][1].pluggedFrom, "transparent");
        changeBG(entries[i][1].pluggedTo, "transparent");
        entries[i][1].pluggedFrom = "";
        entries[i][1].pluggedTo = "";
        console.log(entries[i][1]);
        break;
      } else {
        continue;
      }
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
    // console.log(
    //   "letter Submitted to Rotor:",
    //   letter.toLowerCase(),
    //   "its alphabetical position is:",
    //   alphabet.indexOf(letter.toLowerCase())
    // );
    return {
      index: alphabet.indexOf(letter.toLowerCase()),
    };
  }
  shift() {
    this.arr.push(this.arr.shift());
  }
  unshift() {
    this.arr.unshift(`${this.arr.pop()}`);
    // console.log("enigma rotor has unshifted, new array:", this.arr);
  }
  convertLetter(position) {
    // console.log("letter converted to:", this.arr[position]);

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
rotor1top.innerText = rotor0.arr[1];
rotor1middle.innerText = rotor0.arr[0];
rotor1bottom.innerText = rotor0.arr[25];
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
rotor2top.innerText = rotor1.arr[1];
rotor2middle.innerText = rotor1.arr[0];
rotor2bottom.innerText = rotor1.arr[25];
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
rotor3top.innerText = rotor2.arr[1];
rotor3middle.innerText = rotor2.arr[0];
rotor3bottom.innerText = rotor2.arr[25];
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

rotor1top.addEventListener("click", () => {
  rotor0.shift();
  rotor1top.innerText = rotor0.arr[1];
  rotor1middle.innerText = rotor0.arr[0];
  rotor1bottom.innerText = rotor0.arr[25];
});
rotor2top.addEventListener("click", () => {
  rotor1.shift();
  rotor2top.innerText = rotor1.arr[1];
  rotor2middle.innerText = rotor1.arr[0];
  rotor2bottom.innerText = rotor1.arr[25];
});
rotor3top.addEventListener("click", () => {
  rotor2.shift();
  rotor3top.innerText = rotor2.arr[1];
  rotor3middle.innerText = rotor2.arr[0];
  rotor3bottom.innerText = rotor2.arr[25];
});
rotor1bottom.addEventListener("click", () => {
  rotor0.unshift();
  rotor1top.innerText = rotor0.arr[1];
  rotor1middle.innerText = rotor0.arr[0];
  rotor1bottom.innerText = rotor0.arr[25];
});
rotor2bottom.addEventListener("click", () => {
  rotor1.unshift();
  rotor2top.innerText = rotor1.arr[1];
  rotor2middle.innerText = rotor1.arr[0];
  rotor2bottom.innerText = rotor1.arr[25];
});
rotor3bottom.addEventListener("click", () => {
  rotor2.unshift();
  rotor3top.innerText = rotor2.arr[1];
  rotor3middle.innerText = rotor2.arr[0];
  rotor3bottom.innerText = rotor2.arr[25];
});

function submitletter0(letter, shift) {
  // rotor0.convertLetter(rotor1.getIndex(`${letter}`).index);

  rotor1top.innerText = rotor0.arr[1];
  rotor1middle.innerText = rotor0.arr[0];
  rotor1bottom.innerText = rotor0.arr[25];
  // console.log("ROTOR0:", rotor0.arr);
  if (shift) {
    rotor0.unshift();
  }
  return {
    newLetter: rotor0.convertLetter(rotor0.getIndex(`${letter}`).index)
      .newLetter,
  };
}
function submitletter1(letter, shift) {
  // rotor1.convertLetter(rotor1.getIndex(`${letter}`).index);

  rotor2top.innerText = rotor1.arr[1];
  rotor2middle.innerText = rotor1.arr[0];
  rotor2bottom.innerText = rotor1.arr[25];
  // console.log("ROTOR1:", rotor1.arr);
  if (shift && rotor0.arr.indexOf("E") === 25) {
    rotor1.unshift();
  }
  return {
    newLetter: rotor1.convertLetter(rotor1.getIndex(`${letter}`).index)
      .newLetter,
  };
}
function submitletter2(letter, shift) {
  // rotor2.convertLetter(rotor1.getIndex(`${letter}`).index);
  rotor3top.innerText = rotor2.arr[1];
  rotor3middle.innerText = rotor2.arr[0];
  rotor3bottom.innerText = rotor2.arr[25];
  // console.log("ROTOR2:", rotor2.arr);
  if (shift && rotor1.arr.indexOf("A") === 25) {
    rotor2.unshift();
  }
  return {
    newLetter: rotor2.convertLetter(rotor2.getIndex(`${letter}`).index)
      .newLetter,
  };
}
function submitletterReflector(letter) {
  // reflector.convertLetter(rotor1.getIndex(`${letter}`).index);
  return {
    newLetter: reflector.convertLetter(reflector.getIndex(`${letter}`).index)
      .newletter,
  };
}
function submitToRotors(letter) {
  return {
    finalLetter: submitletter0(
      submitletter1(
        submitletter2(
          submitletterReflector(
            submitletter2(
              submitletter1(
                submitletter0(letter.toLowerCase(), "shift").newLetter,
                "shift"
              ).newLetter,
              "shift"
            ).newLetter
          ).newLetter
        ).newLetter
      ).newLetter
    ).newLetter,
  };
}

//  now we need to get the id for the bulbs to add class "active"
// we also need to get the id for rotor buttons to change rotor positions

makeActive = (letter) => {
  let button = document.getElementById(`${letter}`);
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
  }, 500);
};
document.addEventListener("keydown", (e) => {
  let input = e.key.toUpperCase();
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].pluggedFrom == input && entries[i][1].pluggedTo) {
      // console.log(
      //   `your original letter is ${input}`,
      //   `and your new letter after plugboard is ${entries[i][1].pluggedTo}`
      // );
      submitToRotors(entries[i][1].pluggedTo);
      break;
    } else {
      makeActive(submitToRotors(input).finalLetter.toLowerCase());
      break;
    }
  }
});
