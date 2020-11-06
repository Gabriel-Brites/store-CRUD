var item = new Array();

function add(){
    for (var i=0;i<arguments.length;i++){
        item.push(arguments[i]);
    }
    return item;
}

function del(index,n=1){
    item.splice(index,n);
    return item;
}

function update(index,newItem,n=1){
    item.splice(index,n,newItem);
    return item;
}

function read(index){
    if (index>=0){
        console.log(item.indexOf(item[index]),item[index]);
    }else{
        item.forEach(function(item, index){
            console.log(index, item);
        });
    }
}

module.exports = {
    add,
    del,
    update,
    read
}