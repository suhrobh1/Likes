
// var neil = 9;
// var nichole = 12;
// var jim = 9;

const likesBalance = [9, 12, 9];

function likes(id){
    var likesCount = document.getElementById(id);
    if(id=="neilLikes"){
        likesBalance[0]++;
        likesCount.innerText = likesBalance[0] + " like(s)";
        // neil ++;
        // likesCount.innerText = neil + " like(s)";
    }else if(id=="nicholeLikes"){
        likesBalance[1]++;
        likesCount.innerText = likesBalance[1] + " like(s)";
        // nichole++;
        // likesCount.innerText = nichole + " like(s)";
    }else{
        likesBalance[2]++;
        likesCount.innerText = likesBalance[2] + " like(s)";
        // jim++;
        // likesCount.innerText = jim + " like(s)";
    }
}