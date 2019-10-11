// import {helloWorld, test} from "./JSModular_Ov2_Module.js";

// console.log(helloWorld());
// test();

import life from "./JSModular_Ov2_Module.js"

console.log(life.meaning);

life.createNew('Hannah', 'female');
life.createNew('Alex');
life.createNew('Josh', 'male');
life.createNew('Izzy', 'female');
life.createNew('Yosri', 'male');
life.createNew('Quinn');

console.log(life.getAll);;