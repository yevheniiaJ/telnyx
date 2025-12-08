import { expect, browser } from '@wdio/globals'
import SignUpPage from '../pageobjects/signUp.page.js'

describe('Sign Up Page application', () => {

    beforeEach(async () => {
        await SignUpPage.open()
   

    });

    it('TC #1. Verify the Sign up flow , empty state', async () => {

        await SignUpPage.signupBtn.scrollIntoView()
        await browser.pause(2000)
        await SignUpPage.signupBtn.click()
        expect(SignUpPage.companyEmailError).toBeDisplayed()
        expect(SignUpPage.firstNameError).toBeDisplayed()
        expect(SignUpPage.lastNameError).toBeDisplayed()

    })


    it('TC #2. Verify the Sign up flow with invalid data', async () => {

        const testData = browser.options.data.invalidDataSignUp;
        await browser.pause(2000)

        await SignUpPage.signUp(
            testData.companyEmail,
            testData.firstName,
            testData.lastName,
            testData.password
        );
        expect(SignUpPage.error).toBeDisplayed()
    })

})