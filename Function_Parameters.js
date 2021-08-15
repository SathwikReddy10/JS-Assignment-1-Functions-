//passing a function as param and calling that function
function goToWork(myCallBackFunction) {
    //do some work here
    myCallBackFunction();
}

function refreshPage() {
    console.log("I should be refreshing the page");
}

goToWork(refreshPage);
