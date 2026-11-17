
let recipes = [
  {
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&q=80",
    rating: 4.7,
    reviews: 389,
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Intermediate",
    cuisine: "Asian",
    title: "Chicken Tikka Masala",
    subtitle: "Rich and creamy Indian curry with tender chicken pieces",
    showWarning: true,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate the chicken with yogurt, tikka masala paste, and a pinch of salt for at least 30 minutes.",
      "Heat oil in a pan and sauté the onion, garlic, and ginger until fragrant.",
      "Add the marinated chicken and cook until lightly browned on all sides.",
      "Stir in the canned tomatoes and simmer for 10 minutes.",
      "Pour in the coconut cream and simmer until the chicken is cooked through and the sauce thickens.",
      "Garnish with fresh cilantro and serve hot with rice or naan."
    ],
    nutrition: [
      { value: "520", label: "Calories" },
      { value: "38g", label: "Protein" },
      { value: "32g", label: "Fat" },
      { value: "18g", label: "Carbs" }
    ],
    tips: [
      "Marinate the chicken overnight for deeper flavor.",
      "Use full-fat coconut cream for a richer, creamier sauce.",
      "Grill or broil the chicken briefly before adding it to the sauce for a smoky char."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=900&q=80",
    rating: 4.6,
    reviews: 278,
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    cuisine: "American",
    title: "Beef Tacos",
    subtitle: "Flavorful Mexican tacos with seasoned ground beef",
    showWarning: false,
    ingredients: [
      "500g ground beef",
      "8 small taco shells",
      "1 tablespoon taco seasoning",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tomato, diced",
      "1/2 cup shredded lettuce",
      "1/2 cup shredded cheddar cheese",
      "1 avocado, sliced",
      "Sour cream, to serve"
    ],
    instructions: [
      "Heat a pan over medium heat and sauté the onion and garlic until soft.",
      "Add the ground beef and cook until browned, breaking it apart as it cooks.",
      "Stir in the taco seasoning and a splash of water, then simmer for 5 minutes.",
      "Warm the taco shells in the oven for a few minutes until crisp.",
      "Fill each shell with the beef mixture, then top with tomato, lettuce, and cheese.",
      "Finish with avocado slices and a dollop of sour cream before serving."
    ],
    nutrition: [
      { value: "420 kcal", label: "Calories" },
      { value: "26g", label: "Protein" },
      { value: "32g", label: "Carbohydrates" },
      { value: "20g", label: "Fat" },
      { value: "4g", label: "Fiber" },
      { value: "780mg", label: "Sodium" }
    ],
    tips: [
      "Drain excess fat from beef for healthier tacos.",
      "Warm shells in oven for better texture.",
      "Prepare all toppings before cooking beef.",
      "Use ground turkey for a lighter option."
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&q=80",
    rating: 4.8,
    reviews: 214,
    prepTime: "15 min",
    cookTime: "1 hr",
    servings: "4 people",
    difficulty: "Intermediate",
    cuisine: "French",
    title: "French Onion Soup",
    subtitle: "Classic caramelized onion soup topped with toasted bread and melted cheese",
    showWarning: true,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated"
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil until the cheese is melted and bubbly, then serve hot."
    ],
    nutrition: [
      { value: "310 kcal", label: "Calories" },
      { value: "12g", label: "Protein" },
      { value: "28g", label: "Carbohydrates" },
      { value: "16g", label: "Fat" },
      { value: "2g", label: "Fiber" },
      { value: "890mg", label: "Sodium" }
    ],
    tips: [
      "Don't rush the caramelization — low and slow gives the best flavor.",
      "Use a dry white wine for deglazing to balance the sweetness of the onions.",
      "Broil just until the cheese browns to avoid burning the bread.",
      "Homemade beef broth gives a richer, deeper taste than store-bought."
    ]
  }
];

let currentRecipeIndex = 0;

function renderRecipe(recipe) {
  document.getElementById("recipe-image").style.backgroundImage = `url('${recipe.image}')`;
  document.getElementById("recipe-rating").textContent = recipe.rating;
  document.getElementById("recipe-reviews").textContent = recipe.reviews;
  document.getElementById("recipe-prep").textContent = recipe.prepTime;
  document.getElementById("recipe-cook").textContent = recipe.cookTime;
  document.getElementById("recipe-servings").textContent = recipe.servings;
  document.getElementById("recipe-difficulty").textContent = recipe.difficulty;
  document.getElementById("recipe-cuisine").textContent = recipe.cuisine;
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-subtitle").textContent = recipe.subtitle;
  document.getElementById("recipe-warning").style.display = recipe.showWarning ? "flex" : "none";

  let ingredientsList = document.getElementById("ingredients-list");
  ingredientsList.innerHTML = recipe.ingredients.map((item, i) => `
    <div class="ingredient-row">
      <div class="ingredient-num">${i + 1}</div>
      <div class="ingredient-text">${item}</div>
    </div>
  `).join("");


  let instructionsList = document.getElementById("instructions-list");
  instructionsList.innerHTML = recipe.instructions.map((step, i) => `
    <div class="instruction-step">
      <div class="step-num">${i + 1}</div>
      <div class="ingredient-text">${step}</div>
    </div>
  `).join("");


  let nutritionList = document.getElementById("nutrition-list");
  nutritionList.innerHTML = recipe.nutrition.map(n => `
    <div class="col-6 col-md-3">
      <div class="nutrition-item">
        <div class="nutrition-value">${n.value}</div>
        <div class="nutrition-label">${n.label}</div>
      </div>
    </div>
  `).join("");


  let tipsList = document.getElementById("tips-list");
  tipsList.innerHTML = recipe.tips.map(tip => `
    <div class="tip-row">
      <i class="fa-regular fa-lightbulb"></i>
      <div class="ingredient-text">${tip}</div>
    </div>
  `).join("");

  document.querySelectorAll(".recipe-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelector('.recipe-tab[data-tab="ingredients"]').classList.add("active");
  document.getElementById("panel-ingredients").classList.add("active");
}

document.querySelectorAll(".recipe-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".recipe-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById("panel-" + tab.dataset.tab).classList.add("active");
  });
});

let tryAnotherBtn = document.getElementById("try-another-btn");

tryAnotherBtn.addEventListener("click", () => {
  if (recipes.length <= 1) {

    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * recipes.length);
  } while (randomIndex === currentRecipeIndex);

  currentRecipeIndex = randomIndex;

  tryAnotherBtn.classList.add("is-loading");
  setTimeout(() => {
    renderRecipe(recipes[currentRecipeIndex]);
    tryAnotherBtn.classList.remove("is-loading");
  }, 350);
});

renderRecipe(recipes[currentRecipeIndex]);