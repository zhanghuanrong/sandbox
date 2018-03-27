"use strict";

setTimeout(()=>{"Will exit node main soon after some wait."}, 100000);

let p = new Promise((resolve, reject) => {
    setTimeout(()=> { resolve(100);}, 200);
});

p.then((value) => {
    console.log(`Promise return ${value}`);
});
