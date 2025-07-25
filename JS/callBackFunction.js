function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(data);
    }, 2000);
}
fetchData(function(data){
    console.log(data);
});

function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function calc(a,b, cb){
    return cb(a,b);
}

console.log(calc(5,8,add));
console.log(calc(5,8,sub));

