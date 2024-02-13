import RestaurantApp from './restaurantApp.js';


const historyActions = {
    init: () => {
        RestaurantApp.handleInit();
    },
};

window.addEventListener('popstate', (event) => {
    if (event.state) {
        historyActions[event.state.action](event);
    }
});

history.replaceState({ action: 'init' }, null);