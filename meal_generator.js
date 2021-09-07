// Object that creates and stores a random meal
const mealGenerator = {
    _meal: {
        types: ['breakfast', 'brunch', 'lunch', 'dinner'], 
        locations: [], // name of restaurant or at home 
        dishes: []  // food options
    },

    // getters and setters
    get types() { 
        return this._meal.types; 
    },
    get locations() { return this._meal.locations; },
    get dishes() { return this._meal.dishes; },
    set types(typesArr) { this._meal.types = typesArr; },
    set locations(locationsArr) { this._meal.locations = locationsArr; },
    set dishes(dishesArr) { this._meal.dishes = dishesArr; },
};

