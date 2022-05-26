const Calculate = {
    factorial(num) {
        if (num <= 0) {
            return 1;
        }
        let i = num;
        while (i > 1) {
            num *= --i;
        }
        return num;
    }
}

module.exports = Calculate;