function rot13(str) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decrypted = [];
    let isLetter = /[A-Z]/;
    for(let i in str){
        //Is a letter of an alphabet
        if(isLetter.test(str[i])){
            //Finding index of decoded letter
            let decIndex = abc.indexOf(str[i])-13;
            if(decIndex<0){
                decIndex+=abc.length;
            }
            decrypted.push(abc[decIndex]);
        }
        //Not a letter of an alphabet
        else{decrypted.push(str[i]);}
    }
    return decrypted.join("");
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
//returns THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
