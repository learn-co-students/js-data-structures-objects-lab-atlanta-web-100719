// Write your solution in this file!

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value });
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
function deleteFromDriverByKey(driver, key) {
    const newObj = { ...driver }
    delete newObj[key]
    return newObj
}

const driver = {}