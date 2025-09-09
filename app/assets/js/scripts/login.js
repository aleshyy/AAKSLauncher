const loginCancelContainer = document.getElementById('loginCancelContainer')
const loginMicrosoft = document.getElementById('loginMicrosoft')
const loginCancelButton = document.getElementById('loginCancelButton')

let loginCancellable = false

let loginViewOnLoginSuccess
let loginViewOnLoginCancel
let loginViewOnCancel
let loginViewCancelHandler

function loginCancelEnabled(val){
    if(val){
        $(loginCancelContainer).show()
    } else {
        $(loginCancelContainer).hide()
    }
}

loginMicrosoft.onclick = (e) => {
    switchView(getCurrentView(), VIEWS.waiting, 500, 500, () => {
        ipcRenderer.send(
            MSFT_OPCODE.OPEN_LOGIN,
            loginViewOnLoginSuccess,
            loginViewOnLoginCancel
        )
    })
}