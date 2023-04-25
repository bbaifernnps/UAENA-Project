barba.init({
    transitions: [{
        async leave() {
            await loaderIn();
        },
        enter() {
            loaderAway();
        }
    }]
});
