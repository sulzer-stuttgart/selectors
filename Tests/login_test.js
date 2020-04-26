Feature('Successful login');

const rootFolder = __dirname.replace('Tests', '');

Scenario('Test login is successful using hardcoded selectors', (I) => {
    I.amOnPage(`file:///${rootFolder}/Login Page/EN/LoginPage.html`);
    I.waitForVisible('/html/body/div/input[1]', 5);
    I.fillField('//*[@id="email"]', 'mustafa@sulzer.de');
    I.waitForVisible('#password', 5);
    I.fillField('Password', 'Password1!');
    I.click('Login');
    I.see('Mustafa Masetic', '#Title')
});

xScenario('Test login is successful using page objects', (I, LoginPage) => {
    I.amOnPage(`file:///${rootFolder}/Login Page/EN/LoginPage.html`);
    I.waitForVisible(LoginPage.fields.email, 5);
    I.fillField(LoginPage.fields.email, 'mustafa@sulzer.de');
    I.waitForVisible(LoginPage.fields.password, 5);
    I.fillField(LoginPage.fields.password, 'Password1!');
    I.click(LoginPage.buttons.login);
    LoginPage.verifyLoginSuccsessful('Mustafa', 'Masetic');
});
