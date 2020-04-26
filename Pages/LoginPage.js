const { I } = inject();

module.exports = {

  fields: {
    email: '//*[@id="email"]',
    password: '//*[@id="password"]'
  },

  buttons: {
    login: '$login_button'
  },

  elements: {
    title: '#Title'
  },

  verifyLoginSuccsessful(firstName, lastName){
    I.see(`${firstName} ${lastName}`, this.elements.title)
  },

  verifyLoginFailed(){
    I.see('Invalid email or password!', this.elements.title)
  },

  verifyLoginMissingCredentials(){
    I.see('Please enter email and password!', this.elements.title)
  }
}
