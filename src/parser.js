let s = "Enfamil";
var test = "   sfvsd   ,Enfamil Neuropro Baby, Enfamil Brain Building (A) Nutrition - Single Serve (Aewfa) Powder Enfamil 14 Packets (Aaesf) Enfamil Formula";

function getGroupWords(string,brandNAme){    
    var str = "";
    var count = 0;
    var x = ""; 
    var y = "";
    var z = "";

    let reg = new RegExp(brandNAme,'g');
    z = string.replace(reg, '').replace(/\(.*?\)/g, '').replace(/[0-9]/g, '');

    x = z.split(',');
    for(var q = 0; q < x.length; q++ ){
        if(!x[q] || x[q].length === 0 || /^\s*$/.test(x[q])){
            
        }else{
            y = x[q].split(' ');
            break;

        }
    }

    if (y.length > 3){
        for( var i= 0; i < y.length && count < 3  ; i++) {
            if (y[i] !== ""){
                str = str + y[i] + " ";
                count ++;
            }
        }
        c = 0;
    }else if (y.length <= 3) {
        for( var i= 0; i < y.length ; i++) {
            if (y[i] !== ""){
                str = str + y[i] + " ";
            }
        }
    }

    return str;
}

//console.log(getGroupWords(test,s));

module.exports = {
    getGroupWords
}