Feature('Login failed');

const rootFolder = __dirname.replace('Tests', '');

xScenario('Test login with empty credentials', (I, LoginPage) => {
    I.amOnPage(`file:///${rootFolder}/Login Page/EN/LoginPage.html`);
    I.click(LoginPage.buttons.login);
    LoginPage.verifyLoginMissingCredentials();
});

xScenario('Test login with wrong credentials', (I, LoginPage) => {
    I.amOnPage(`file:///${rootFolder}/Login Page/EN/LoginPage.html`);
    I.waitForVisible(LoginPage.fields.email, 5);
    I.fillField(LoginPage.fields.email, 'mustafa@sulzer.de');
    I.waitForVisible(LoginPage.fields.password, 5);
    I.fillField(LoginPage.fields.password, 'ThisIsNotMyPassword');
    I.click(LoginPage.buttons.login);
    LoginPage.verifyLoginFailed();
});
