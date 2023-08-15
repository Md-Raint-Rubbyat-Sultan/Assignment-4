function cubeNumber(number) {
    let result;
    if (typeof number === "number") {
        if (number >= 0) {
            result = Math.pow(number, 3);
        } else {
            result = "please input a positive number";
        }
    } else {
        result = "please input a positive number";
    }
    return result;
}

function matchFinder(string1, string2) {
    if (typeof string1 === "string" && typeof string2 === "string") {
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please input string only.";
    }
}

function sortMaker(arr) {
    if (Array.isArray(arr) && arr.length === 2) {
        let isNegative = false;

        for (let idx = 0; idx < arr.length; idx++) {
            const el = arr[idx];
            if (el < 0) {
                isNegative = true;
                break;
            }
        }

        if (isNegative === false) {
            if (arr[0] !== arr[1]) {
                let sorted = arr.sort((a, b) => b - a);
                return sorted;
            } else {
                return "equal";
            }
        } else {
            return "Invalid Input";
        }

    } else {
        return "Please input an array contains only two positive integer.";
    }
}

function findAddress(obj) {
    let addressArr = [];
    if (obj.street) {
        addressArr.push(obj.street);
    } else {
        addressArr.push("__");
    }

    if (obj.house) {
        addressArr.push(obj.house);
    } else {
        addressArr.push("__");
    }

    if (obj.society) {
        addressArr.push(obj.society);
    } else {
        addressArr.push("__");
    }

    const address = addressArr.join(",");

    return address;
}

function canPay(changeArray, totalDue) {
    if (Array.isArray(changeArray) && changeArray.length > 0) {
        let totalMoney = 0;
        let isPositive = true;

        for (let idx = 0; idx < changeArray.length; idx++) {
            const el = changeArray[idx];
            if (typeof el === 'number') {
                if (el >= 0) {
                    totalMoney += el;
                } else {
                    isPositive = false;
                    break;
                }
            } else {
                return "must provide number as money";
            }
        }

        if (isPositive && totalDue >= 0) {
            if (totalMoney >= totalDue) {
                return true;
            } else {
                return false;
            }
        } else {
            return "can not provide negative number as money.";
        }


    } else {
        return "empty";
    }
}
