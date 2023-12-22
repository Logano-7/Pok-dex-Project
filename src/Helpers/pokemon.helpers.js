/* function getTypeImages(array) {
  const SRCs = [];
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "Normal":
        SRCs.push("public/t-Normal.png");
        break;
      case "Fighting":
        SRCs.push("public/t-Fighting.png");
        break;
      case "Flying":
        SRCs.push("public/t-Flying.png");
        break;
      case "Poison":
        SRCs.push("public/t-Poison.png");
        break;
      case "Ground":
        SRCs.push("public/t-Ground.png");
        break;
      case "Rock":
        SRCs.push("public/t-Rock.png");
        break;
      case "Bug":
        SRCs.push("public/t-Bug.png");
        break;
      case "Ghost":
        SRCs.push("public/t-Ghost.png");
        break;
      case "Steel":
        SRCs.push("public/t-Steel.png");
        break;
      case "Fire":
        SRCs.push("public/t-Fire.png");
        break;
      case "Water":
        SRCs.push("public/t-Water.png");
        break;
      case "Grass":
        SRCs.push("public/t-Grass.png");
        break;
      case "Electric":
        SRCs.push("public/t-Electric.png");
        break;
      case "Psychic":
        SRCs.push("public/t-Psychic.png");
        break;
      case "Ice":
        SRCs.push("public/t-Ice.png");
        break;
      case "Dragon":
        SRCs.push("public/t-Dragon.png");
        break;
      case "Dark":
        SRCs.push("public/t-Dark.png");
        break;
      case "Fairy":
        SRCs.push("public/t-Fairy.png");
        break;
      default:
        break;
    }
  }
  return SRCs;
}

export default getTypeImages; */

export default function getListOf(list, prop) {
  const listToReturn = [];
  for (let i = 0; i < list.length; i++) {
    listToReturn.push(list[i][prop]);
  }
  return listToReturn;
  
}

export function filterByType(list, type) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].type.includes(type)) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

export function filterByWeakness(list, weakness) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].weaknesses.includes(weakness)) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

export function filterByName(list, name) {
  const filteredList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name=== name) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

