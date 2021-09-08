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

    //Return random items in each _meal array
    getRandomType() {
        const randNum = Math.floor(Math.random() * this._meal.types.length);
        return this._meal.types[randNum]; 
    },
    getRandomLocation() {
        const randNum = Math.floor(Math.random() * this._meal.locations.length);
        return this._meal.locations[randNum]; 
    },
    getRandomDish() {
        const randNum = Math.floor(Math.random() * this._meal.dishes.length);
        return this._meal.dishes[randNum]; 
    },

    //Add new items to arrays
    addType(type) {
        this._meal.types.push(type);
    },
    addLocation(location) {
        this._meal.locations.push(location);
    },
    addDish(dish) {
        this._meal.dishes.push(dish);
    },

    //Use getRandom methods to generate user message
    generateMessage() {
        const type = this.getRandomType;
        const location = this.getRandomLocation;
        const dish = this.getRandomDish;

        return `Your random meal will be ${type}!\nIt will come from ${location}.\nYou will be eating ${dish}!`;
    }

};

