// Initial Menu
const rUHungryMenu = {
  starters: {
    item: [
      "Giant champagne and lemon prawn vol-au-vents",
      "Grilled scallops with ’nduja butter",
      "Herb and chilli calamari",
      "Scallop shell pies",
      "Brown shrimp Ranhofer",
      "Moules marinière",
      "Prawn cocktail",
    ],
    link: [
      "https://www.olivemagazine.com/recipes/family/giant-champagne-and-lemon-prawn-vol-au-vents/",
      "https://www.olivemagazine.com/recipes/fish-and-seafood/grilled-scallops-with-nduja-butter/",
      "https://www.olivemagazine.com/recipes/quick-and-easy/herb-and-chilli-calamari/",
      "https://www.olivemagazine.com/recipes/fish-and-seafood/scallop-shell-pies/",
      "https://www.olivemagazine.com/recipes/fish-and-seafood/brown-shrimp-ranhofer/",
      "http://www.olivemagazine.com/recipes/fish-and-seafood/moules-mariniere/",
      "https://www.olivemagazine.com/recipes/family/prawn-cocktail/",
    ],
  },
  mains: {
    item: [
      "Mustard-stuffed chicken",
      "Spicy root & lentil casserole",
      "Chicken biryani",
      "One-pot chicken chasseur",
      "Creamy courgette lasagne",
      "Oven-baked risotto",
      "Veggie shepherd’s pie with sweet potato mash",
    ],
    link: [
      "https://www.bbcgoodfood.com/recipes/mustard-stuffed-chicken",
      "https://www.bbcgoodfood.com/recipes/spicy-root-lentil-casserole",
      "https://www.bbcgoodfood.com/recipes/chicken-biryani",
      "https://www.bbcgoodfood.com/recipes/one-pot-chicken-chasseur",
      "https://www.bbcgoodfood.com/recipes/creamy-courgette-lasagne",
      "https://www.bbcgoodfood.com/recipes/oven-baked-risotto",
      "https://www.bbcgoodfood.com/recipes/veggie-shepherds-pie-sweet-potato-mash",
    ],
  },
  desserts: {
    item: [
      "Torrijas",
      "Churros with hot chocolate sauce",
      "Crema Catalana",
      "Spanish flan with orange and cinnamon",
      "Churros with salted caramel chocolate sauce",
      "Eton mess",
      "The best victoria sponge",
      "Old-fashioned treacle sponge",
      "Sticky toffee pudding",
    ],
    link: [
      "https://www.olivemagazine.com/recipes/chef-recipes/torrijas/",
      "https://www.olivemagazine.com/recipes/family/churros-with-hot-chocolate-sauce/",
      "https://www.olivemagazine.com/recipes/entertain/crema-catalana/",
      "https://www.olivemagazine.com/recipes/baking-and-desserts/spanish-flan-with-orange-cinnamon/",
      "https://www.olivemagazine.com/recipes/baking-and-desserts/churros-with-salted-caramel-chocolate-sauce/",
      "https://www.olivemagazine.com/recipes/eton-mess/",
      "https://www.olivemagazine.com/recipes/family/the-lightest-victoria-sponge/",
      "https://www.olivemagazine.com/recipes/old-fashioned-treacle-sponge/",
      "https://www.olivemagazine.com/recipes/sticky-toffee-pudding/",
    ],
  },
};

// Emojis
const dessertEmojis = [
  "🍡",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🎂",
  "🍰",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
];
const mainsEmojis = ["🍖", "🍗", "🍔", "🍲", "🥙", "🍝", "🍜", "🍴"];
const starterEmojis = ["🥜", "🫘", "🍞", "🥐", "🥖", "🍤", "🦐", "🍟"];

// Check Local Storage
localMenu = JSON.parse(localStorage.getItem("rUHungryMenu"));
if (!localMenu) {
  console.log("No local storage, setting menu");
  localStorage.setItem("rUHungryMenu", JSON.stringify(rUHungryMenu));
  localMenu = rUHungryMenu;
} else {
  console.log("Local storage used");
}

// Element selectors
const defaultContainerEl = document.querySelector(".default-container");
const menuContainerEl = document.querySelector(".menu-container");
const infoEl = document.querySelector(".info");
const genBtn = document.querySelector(".generate-menu-btn");
const addBtn = document.querySelector(".add-item-btn");
const viewBtn = document.querySelector(".view-menu-btn");
const starterEl = document.querySelector(".starter");
const mainEl = document.querySelector(".main");
const dessertEl = document.querySelector(".dessert");
const addItemEl = document.querySelector(".add-item-container");
const courseEl = document.querySelector(".course");
const dishNameEl = document.querySelector(".dish-name");
const dishLinkEl = document.querySelector(".dish-link");
const submitBtn = document.querySelector(".submit-btn");

// default
menuContainerEl.style.display = "none";
addItemEl.style.display = "none";

// declare menu links list
let menuLinks;

const genMenu = () => {
  const starterRand = Math.floor(
    Math.random() * localMenu.starters.item.length
  );
  const mainRand = Math.floor(Math.random() * localMenu.mains.item.length);
  const dessertRand = Math.floor(
    Math.random() * localMenu.desserts.item.length
  );
  const starterEmojiRand = Math.floor(Math.random() * starterEmojis.length);
  const mainEmojiRand = Math.floor(Math.random() * mainsEmojis.length);
  const dessertEmojiRand = Math.floor(Math.random() * dessertEmojis.length);

  //  Change state
  defaultContainerEl.style.display = "none";
  addItemEl.style.display = "none";
  menuContainerEl.style.display = "flex";
  infoEl.innerHTML =
    "Here is a 3 course menu just for you! Click <span>'View Menu'</span> to see your recipes and get cooking! <br> Not happy with the suggestions? Click <span>'Generate New Menu'</span> to get more suggestions";
  genBtn.textContent = "Generate New Menu";
  viewBtn.style.display = "block";
  // display menu
  starterEl.textContent = `${starterEmojis[starterEmojiRand]} Starter: ${localMenu.starters.item[starterRand]}`;
  mainEl.textContent = `${mainsEmojis[mainEmojiRand]} Main: ${localMenu.mains.item[mainRand]}`;
  dessertEl.textContent = `${dessertEmojis[dessertEmojiRand]} Dessert: ${localMenu.desserts.item[dessertRand]}`;

  // menu links
  menuLinks = [
    localMenu.starters.link[starterRand],
    localMenu.mains.link[mainRand],
    localMenu.desserts.link[dessertRand],
  ];
};

const viewMenu = () => {
  for (const link of menuLinks) {
    window.open(link);
  }
};

const addItem = () => {
  defaultContainerEl.style.display = "none";
  menuContainerEl.style.display = "none";
  addItemEl.style.display = "block";
  infoEl.textContent = "Add a menu item below";
  infoEl.style.color = "#fff";
};

const submitItem = () => {
  const courseName = courseEl.value;
  const dishName = dishNameEl.value;
  const dishUrl = dishLinkEl.value;

  if (
    courseName.toLowerCase().trim() === "main" ||
    courseName.toLowerCase().trim() === "mains"
  ) {
    localMenu.mains.item.push(dishName);
    localMenu.mains.link.push(dishUrl);
    localStorage.setItem("rUHungryMenu", JSON.stringify(localMenu));
  } else if (
    courseName.toLowerCase().trim() === "starter" ||
    courseName.toLowerCase().trim() === "starters"
  ) {
    localMenu.starters.item.push(dishName);
    localMenu.starters.link.push(dishUrl);
    localStorage.setItem("rUHungryMenu", JSON.stringify(localMenu));
  } else if (
    courseName.toLowerCase().trim() === "dessert" ||
    courseName.toLowerCase().trim() === "desserts"
  ) {
    localMenu.desserts.item.push(dishName);
    localMenu.desserts.link.push(dishUrl);
    localStorage.setItem("rUHungryMenu", JSON.stringify(localMenu));
  } else {
    infoEl.innerHTML =
      "<p>You did not enter a valid course name<br>Enter starter, main or dessert. <br>To retry click 'Add Menu Item'</p>";
    infoEl.style.color = "red";
  }

  courseEl.value = "";
  dishNameEl.value = "";
  dishLinkEl.value = "";
};

genBtn.addEventListener("click", genMenu);
viewBtn.addEventListener("click", viewMenu);
addBtn.addEventListener("click", addItem);
submitBtn.addEventListener("click", submitItem);
