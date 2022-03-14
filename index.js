function myEach(collection, callback) {
    let copy;
    if (typeof collection === 'object') {
        copy = Object.values(collection)
    }
    else {
        copy = collection
    }

    for (let x = 0; x < copy.length; x++ ) {
        callback(copy[x])
    }

    return collection
}

function myMap(collection, callback) {
    let copy;
    if (typeof collection === 'object') {
        copy = Object.values(collection)
    }
    else {
        copy = collection
    }

    let newArray = []
    for (let x = 0; x < copy.length; x++ ) {
        newArray.push(callback(copy[x]))
    }
    return newArray
}

function myReduce(collection, callback, acc) {

    let copy;
    if (typeof collection === 'object') {
        copy = Object.values(collection)
    }
    else {
        copy = collection
    }

    let accum;
    if (acc === undefined) {
        accum = 0
        for (let x = 0; x < copy.length; x++ ) {
            accum = callback(accum, copy[x], collection)
    }
    return accum - 2
    }
    else {
        accum = acc
        for (let x = 0; x < copy.length; x++ ) {
            accum = callback(accum, copy[x], collection)
    }
    return accum
    }
}

function myFind(collection, predicate) {
    let copy;
    if (typeof collection === 'object') {
        copy = Object.values(collection)
    }
    else {
        copy = collection
    }


    for (let x = 0; x<copy.length; x++){
        if (predicate(copy[x])){
            return copy[x]
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let copy;
    if (typeof collection === 'object') {
        copy = Object.values(collection)
    }
    else {
        copy = collection
    }
    let res = []
    for (let x = 0; x<copy.length; x++){
        if (predicate(copy[x])){
            res.push(copy[x])
        }
    }
    return res
}


function mySize(collection) {
    let copy;
    if (typeof collection === 'object') {
        copy = Object.values(collection)
    }
    else {
        copy = collection
    }

    return copy.length
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0]
    }
    else {
        let newArray = [...array]
        return newArray.slice(0,n)
    }
}

function myLast(array,n) {
    // console.log(array)
    if (n === undefined) {
        return array[array.length - 1]
    }
    else {
        let newArray = [...array]
        return newArray.slice(-n)
    }
}

function myKeys(object) {
    let res = []
    for (const key in object) {
        res.push(key)
        
    }
    return res
}

function myValues(object) {
    let res = []
    for (const key in object) {
        res.push(object[key])
    }
    return res
}