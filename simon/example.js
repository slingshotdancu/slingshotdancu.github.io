var digit_name = (function () {
    
    var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    return function (n) {
        return names[n];
    };
}());

alert(digit_name(3));