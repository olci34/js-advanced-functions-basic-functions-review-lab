// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(thing='go to the office') {
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(str='*') {
    return function(adj='special'){
        return `You are ${str}${adj}${str}!`
    }
}

let Calculator = {
    add : function(n1,n2){ return n1+n2 },
    subtract : (n1,n2) => n1 - n2,
    multiply : (n1,n2) => { return n1*n2 },
    divide : function(n1,n2) { return n1/n2 }
}

function actionApplyer(int, arr) {
    if (arr.length === 0) {
        return int
    } else {
        arr.forEach(fn => { int = fn(int) })
        return int
    }
}