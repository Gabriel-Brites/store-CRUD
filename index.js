const crud = require('./crud');

console.log(crud.add('gabriel','arthur','Yasmin'));
console.log(crud.del(1));
crud.read();
console.log(crud.update(1,'Alexandre'));