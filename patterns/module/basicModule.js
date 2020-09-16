export let basicModule = (function() {
    let counter = 0;

    return {
        counter,
        increment: function() {
            return counter++;
        },
        reset: function() {
            alert(`Counter (${counter}) will reset`);
            counter = 0;
        }
    }
})();
