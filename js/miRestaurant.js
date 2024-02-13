import RestaurantApp from './restaurantApp.js';


const historyActions = {
    init: () => {
        RestaurantApp.handleInit();
    },
    CategoryList: (event) => RestaurantApp.handleDishesCategoryList(event.state.category),
    AllergenList: (event) => RestaurantApp.handleDishesAllergenList(event.state.allergen),
    MenuList: (event) => RestaurantApp.handleDishesMenuList(event.state.menu),
    RestaurantList: (event) => RestaurantApp.handleRestaurantList(event.state.restaurant),
    bindShowDetailsDishes: (event) => RestaurantApp.handleShowDetailsDishes(event.state.category),

};

window.addEventListener('popstate', (event) => {
    if (event.state) {
        historyActions[event.state.action](event);
    }
});

history.replaceState({ action: 'init' }, null);