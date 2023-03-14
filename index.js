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
    console.log("doesnt have attribute");
  }
});
