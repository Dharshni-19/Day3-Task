function compareJSON(obj1, obj2) {
    
    const sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    
    return sortedObj1 === sortedObj2;
}

let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

console.log(compareJSON(obj1, obj2));
