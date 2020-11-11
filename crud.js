let item = [];

function create(product){
    item.push({id:item.length+1, ...product});
    return item;
}

function remove(index){
    item.splice(index,1);
    return item;
}

function update(index,newProduct){
    item.splice(index,1,newProduct);
    return item;
}

function read(index){
    if (index>=0){
        return item[index];
    }else if (index<0){
        console.log("valor invalido");    
    }else{
      return item;  
    } 
}

module.exports = {
    create,
    remove,
    update,
    read
}