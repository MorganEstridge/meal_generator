// Object that creates and stores a random meal
const mealGenerator = {
    
    _types: ['breakfast', 'brunch', 'lunch', 'dinner'], 
    _locations: [], // name of restaurant or at home 
    _dishes: [],  // food options
    

    // getters and setters
    get types() { 
        return this._types; 
    },
    get locations() { return this._locations; },
    get dishes() { return this._dishes; },
    set types(typesArr) { this._types = typesArr; },
    set locations(locationsArr) { this._locations = locationsArr; },
    set dishes(dishesArr) { this._dishes = dishesArr; },

    //Return random items in each _meal array
    getRandomType() {
        const randNum = Math.floor(Math.random() * this._types.length);
        return this._types[randNum]; 
    },
    getRandomLocation() {
        const randNum = Math.floor(Math.random() * this._locations.length);
        return this._locations[randNum]; 
    },
    getRandomDish() {
        const randNum = Math.floor(Math.random() * this._dishes.length);
        return this._dishes[randNum]; 
    },

    //Add new items to arrays
    addType(type) {
        this._types.push(type);
    },
    addLocation(location) {
        this._locations.push(location);
    },
    addDish(dish) {
        this._dishes.push(dish);
    },

    //Use getRandom methods to generate user message
    generateMessage() {
        const type = this.getRandomType();
        const location = this.getRandomLocation();
        const dish = this.getRandomDish();

        return `Your random meal will be ${type}!\nIt will come from ${location}.\nYou will be eating ${dish}!`;
    }

};

mealGenerator.addLocation('your kitchen');
mealGenerator.addLocation('Applebee\'s');
mealGenerator.addLocation('TGI Friday\'s');
mealGenerator.addLocation('McDonald\'s');

mealGenerator.addDish('pancakes');
mealGenerator.addDish('tacos');
mealGenerator.addDish('eggs and bacon');
mealGenerator.addDish('a ham sandwich');
mealGenerator.addDish('meatloaf');
mealGenerator.addDish('spaghetti');
mealGenerator.addDish('fried chicken');
mealGenerator.addDish('pizza');


console.log(mealGenerator.generateMessage())