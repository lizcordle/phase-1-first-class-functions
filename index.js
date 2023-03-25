function receivesAFunction(spy) {
    return spy();
}
function returnsANamedFunction() {
    return function aNamedFunction(fn) {
    console.log(fn);
    }
}
function returnsAnAnonymousFunction() {
    return function(name) {
        console.log(name);
    }
}