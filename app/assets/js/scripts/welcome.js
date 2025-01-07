/**
 * Script for welcome.ejs
 */
document.getElementById('welcomeButton').addEventListener('click', e => {
    loginOptionsCancelEnabled(true) // False by default, be explicit.
    loginOptionsViewOnLoginSuccess = VIEWS.landing
    loginOptionsViewOnLoginCancel = VIEWS.loginOptions
    switchView(VIEWS.welcome, VIEWS.loginOptions)
})