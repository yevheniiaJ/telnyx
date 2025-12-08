import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {

    get companyEmail() {
        return $(`//input[@id='email']`);
    }

    get firstName() {
        return $(`//input[@id='first_name']`);
    }

    get lastName() {
        return $(`//input[@id='last_name']`);
    }

    get password() {
        return $(`//input[@id='password']`)
    }

    get termCheckbox() {
        return $(`//input[@id='terms_and_conditions']`)
    }

    get subscriptionCheckbox() {
        return $(`//input[@id='subscription_opt_in']`)
    }

    get signupBtn() {
        return $(`//span[@data-content='SIGN UP']`)
    }

    get firstNameError() {
        return $(`//div[@id='first_name_message']`)
    }

    get companyEmailError() {
        return $(`//div[@id='email_message']`)
    }

    get lastNameError() {
        return $(`//div[@id='last_name_message']`)
    }

    get error() {
        return $(`//div[@class='c-UUKrH c-UUKrH-kDyeyw-type-error']`)
    }

    async signUp(companyEmail, firstName, lastName, password) {
        await this.companyEmail.setValue(companyEmail);
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.password.setValue(password)
        await this.termCheckbox.click()
        await this.subscriptionCheckbox.scrollIntoView()
        await this.subscriptionCheckbox.click()
        await this.signupBtn.scrollIntoView()
        await this.signupBtn.click();
    }

    open() {
        return super.open('sign-up');
    }
}

export default new SignUpPage();
