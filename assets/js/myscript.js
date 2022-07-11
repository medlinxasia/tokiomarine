if('serviceWorker' in navigator){    navigator.serviceWorker.register("./sw.js").then(reg => {
        console.log("Successfully Registered");
    }).catch(err => {
        console.log("Error while registering SW");
    });
}