console.log('Lesson 4');


// Objects

// x = 10;
// str = 'Hello';

// data = {
//     name: 'Example',
//     age: 38,
//     address: 'Test city.',
//     position: {
//         x: 23,
//         y: 175
//     }
// }

// console.log(data);

// Create
// data1 = {};
// data2 = new Object();

// // Update
// data1.x = 10;
// data2['x'] = 10;

// console.log(data1, data2);

// // Update existing field
// data1.x = 'Updated 10.';

// console.log(data1, data2);

// // Delete
// delete data1.x;

// console.log(data1, data2);


// ---------------------------------------

// data = {
//     name: 'Example',
//     age: 38,
//     address: 'Test city.',
//     position: {
//         x: 23,
//         y: 175
//     }
// }

// for(let myKey in data) {
//     console.log(myKey, data[myKey]);
// }


// ---------------------------------------

// data1 = { x: 10, y: 20 }
// data2 = { p: 'Hi', k: 120, x: 99 }

// mergedData = Object.assign({}, data1, data2);
// mergedData2 = { ...data1, ...data2 };

// console.log(mergedData, mergedData2)




// Functions



function f(x, y) {    
    return x + y;
}


a = 10;
b = 22;

f(a, b);
f(5, 9);

result = f(2, 9) + f(6, 10);
console.log(result);
