import { expect, browser } from '@wdio/globals'
import MainPage from '../pageobjects/main.page.js'


describe('My Main Page application', () => {

    beforeEach(async () => {
        await MainPage.open()

    });

    it('TC #1. Verify Data Privacy', async () => {

        await MainPage.dataPrivacyBtn.scrollIntoView()
        await MainPage.dataPrivacyBtn.click()
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/data-privacy')
    })


    it('TC #2. Verify Explore docs', async () => {

        await MainPage.exploreBtn.scrollIntoView()
        await browser.pause(2000)
        await MainPage.exploreBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://developers.telnyx.com/docs/overview')
    })


    it('TC #3. Verify Navigation to the Sign up page', async () => {

        await MainPage.signUpBtn.click()
        console.log('sign up is clicked')
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/sign-up')
    })

    it('TC #4. Verify our join community', async () => {

        await MainPage.communityBtn.scrollIntoView()
        await MainPage.communityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://joinslack.telnyx.com/')
    })

    it('TC #5. Verify navigation to Voice AI Agents', async () => {

        await MainPage.aiAssistant.scrollIntoView()
        await MainPage.aiAssistant.click()
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/products/voice-ai-agents')
    })

    it('TC #6. Verify navigation to the Sign up page by using the Start building button', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.startBuilding.click()
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/sign-up')
    })

    it('TC #7. Verify navigation to Linkedin', async () => {

        await MainPage.linkedinBtn.scrollIntoView()
        await MainPage.linkedinBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://www.linkedin.com/company/telnyx')
    })

    it('TC #8. Verify navigation to Twitter', async () => {

        await MainPage.twitterBtn.scrollIntoView()
        await MainPage.twitterBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://x.com/telnyx')
    })

    it('TC #9. Verify navigation to Facebook', async () => {

        await MainPage.facebookBtn.scrollIntoView()
        await MainPage.facebookBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://www.facebook.com/Telnyx/')
    })

    it('TC #10. Verify navigation to ChatGpt', async () => {

        await MainPage.chatGpt.scrollIntoView()
        await MainPage.chatGpt.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://chatgpt.com/')
    })


    it('TC #11. Verify navigation to Claude', async () => {

        await MainPage.claudeBtn.scrollIntoView()
        await MainPage.claudeBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://claude.ai/')
    })


    it('TC #12. Verify navigation to Perplexity', async () => {

        await MainPage.perplexityBtn.scrollIntoView()
        await MainPage.perplexityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://www.perplexity.ai/')
    })

    it('TC #13. Verify navigation to Perplexity', async () => {

        await MainPage.perplexityBtn.scrollIntoView()
        await MainPage.perplexityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://www.perplexity.ai/')
    })

    it('TC #14. Verify navigation to Google', async () => {

        await MainPage.googleBtn.scrollIntoView()
        await MainPage.googleBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://www.google.com/')
    })

    it('TC #15. Verify navigation to xCome', async () => {

        await MainPage.xcomBtn.scrollIntoView()
        await MainPage.xcomBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://x.com/')
    })

    it('TC #16. Verify Logo', async () => {

        await MainPage.signUpBtn.click()
        console.log('sign up is clicked')
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/sign-up')
        await MainPage.logo.click()
        expect(MainPage.communityBtn).toBeDisplayed()
    })

    it('TC #17. Verify navigation to the Sign up page by using the sign up for free  button', async () => {

        await MainPage.signUpForFreeBtn.scrollIntoView()
        await MainPage.signUpForFreeBtn.click()
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/sign-up')
    })

    it('TC #18. Verify Explore stories', async () => {

        await MainPage.exploreStoriesBtn.scrollIntoView()
        await MainPage.exploreStoriesBtn.click()
        const url = await browser.getUrl()
        expect(url).toHaveUrlContaining('https://telnyx.com/customer-stories')
    })
})
