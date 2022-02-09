var mul = [];
flag = 0;
function aP(){
    var product = fn();
    if (flag == 0){
        mul.push(product);
        display(mul);
    }
}

function fn(){
    var pi = document.getElementById('pi').value;
    var pnam = document.getElementById('pnam').value;
    var pp = document.getElementById('pp').value;
    
    if (cv(pi, pnam, pp) && iprove(pi, mul)){
        flag = 0;
        return {
            'prod_id' : pi,
            'prod_name' : pnam,
            'prod_price' : pp
        };
    }
    else{
        window.alert('Enter Valid Input');
        flag = 1;
    }
    
    
}

function iprove(pi, mul){
    for (var i = 0; i<mul.length; i++){
        if (pi == mul[i].prod_id){
            return false;
        }
    }
    return true;
}

function cv(pi, pnam, pp){
    if (pi == "" || pnam == "" || pp == "" || isNaN(pp)){
        return false;
    }
    else{
        return true;
    }
}
function display(mul){

    var html = '<tr>\
        <th>Product Id</th>\
        <th>Product Name</th>\
        <th>Product Price</th>\
    </tr> ';

    for (var i=0; i < mul.length; i++){
        html += '<tr>\
        <td>'+mul[i].prod_id+'</td>\
        <td>'+mul[i].prod_name+'</td>\
        <td>'+mul[i].prod_price+'</td>\
    </tr>'
    }
    document.getElementById('table').innerHTML = html;
}

function editForm(){

}