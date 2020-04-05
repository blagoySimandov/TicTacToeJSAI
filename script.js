
function table_to_array(table_id) {
    myData = document.getElementById(table_id).rows
    //console.log(myData)
    my_liste = []
    for (var i = 0; i < myData.length; i++) {
            el = myData[i].children
            my_el = []
            for (var j = 0; j < el.length; j++) {
                    my_el.push(el[j].innerText);
            }
            my_liste.push(my_el)

    }
    return my_liste
}
let counter = 0;
function player(id){
    let ident = document.getElementById(id + "");
if(ident.innerText != ""){return};
    if(counter ==0){
        ident.innerText = "X";
        counter++;
}else{
    ident.innerText = "O";
    counter--;
}


if(validator()!= undefined){
    setTimeout(function() { alert(validator()); }, 1);
    setTimeout(function() { replay(); }, 2);
}
}
function replay(){
    let tds = document.getElementsByTagName("td");
    for(i of tds){
        i.innerText = "";
    }
}

function validator(){
    let arr = table_to_array("table");
    //rows
    for(var i =0;i<3;i++){
        for(var j = 0;j<3;j++){
            if(arr[i][j]!="" && arr[i][j]==arr[i][j+1] && arr[i][j+2] == arr[i][j]){
 return arr[i][j] + " won!";
            }
        }
    }
    //cols
let l = 0;
        for(var k = 0; k<3; k++){
            if(arr[l][k]!="" && arr[l][k]==arr[l+1][k]){
                if( arr[l+2][k] == arr[l][k]){
                    return arr[l][k] + " won!";
                }
            }    
        
    }
    //diags
    if(arr[0][0]!= ""){
        if(arr[0][0]==arr[1][1] &&arr[1][1] == arr[2][2]){
            return arr[0][0]+" won!";
        }
    }
    if(arr[2][0]!= ""){
        if(arr[2][0]== arr[1][1] && arr[1][1] == arr[0][2]){
            return arr[2][0]+" won!";
        }
    }
}

validator();