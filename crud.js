let item = [];

function create(product){
    item.push({id:item.length+1, ...product});
    return item;
}

function remove(id){
    if(id<=0){
        return "Id invalido";
    }else{
        item.splice(id-1,1);
        item.forEach((element,index)=>item[index].id = index+1);
        return item;
    }
}

function update(id,newProduct){
    if(id<=0){
        return "Id invalido";
    }else{
        item.splice(id-1,1,{id:id, ...newProduct});
        return item;
    }
}

function read(id){
    if (id>0){
        return item[id-1];
    }else if (id<=0){
        return "Id invalido";    
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