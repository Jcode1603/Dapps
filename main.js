let accounts;

window.onload = function (){
    this.console.log("App is loaded")
}

const EnableETH = async () => {
    accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err)=>{
        //error handling
        console.log(err.code);
    })
    console.log(accounts)
}