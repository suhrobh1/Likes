
const likesBalance = [9, 12, 9]; //Setting up array to keep likes for each

function likes(id){
    var likesCount = document.getElementById(id);
    if(id=="neilLikes"){
        likesBalance[0]++;
        likesCount.innerText = likesBalance[0] + " like(s)";
    }else if(id=="nicholeLikes"){
        likesBalance[1]++;
        likesCount.innerText = likesBalance[1] + " like(s)";
    }else{
        likesBalance[2]++;
        likesCount.innerText = likesBalance[2] + " like(s)";
    }
}