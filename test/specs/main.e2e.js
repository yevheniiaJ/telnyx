import { expect, browser } from '@wdio/globals'
import MainPage from '../pageobjects/main.page.js'


describe('My Main Page application', () => {

    beforeEach(async () => {
        await MainPage.open()

    });

    it('TC #1. Verify Data Privacy', async () => {

        await MainPage.dataPrivacyBtn.scrollIntoView()
        await MainPage.dataPrivacyBtn.click()
        const url = await browser.getUrl();
        expect(url.includes('https://telnyx.com/data-privacy')).toBe(true);
    })


    it('TC #2. Verify Explore docs', async () => {

        await MainPage.exploreBtn.scrollIntoView()
        await browser.pause(5000)
        await MainPage.exploreBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url.includes('https://developers.telnyx.com/docs/overview')).toBe(true);
    })


    it('TC #3. Verify Navigation to the Sign up page', async () => {

        await MainPage.signUpBtn.click()
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/sign-up')).toBe(true);

    })

    it('TC #4. Verify our join community', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.communityBtn.waitForDisplayed({ timeout: 4000 })
        await MainPage.communityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url.toContain(joinslack)).toBe(true);

    })

    it('TC #5. Verify navigation to Voice AI Agents', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.aiAssistant.waitForDisplayed({ timeout: 4000 })
        await MainPage.aiAssistant.click()
        const url = await browser.getUrl()
        expect(url).toContain('voice-ai')

    })

    it('TC #6. Verify navigation to the Sign up page by using the Start building button', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.startBuilding.click()
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/sign-up')).toBe(true);

    })

    it('TC #7. Verify navigation to Linkedin', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.linkedinBtn.waitForDisplayed({ timeout: 4000 })
        await MainPage.linkedinBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toContain('linkedin')
    })

    it('TC #8. Verify navigation to Twitter', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.twitterBtn.waitForDisplayed({ timeout: 5000 })
        await MainPage.twitterBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toContain('twitter')

    })
    it('TC #9. Verify navigation to Facebook', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.facebookBtn.waitForDisplayed({ timeout: 5000 })
        await browser.execute((el) => el.removeAttribute('target'), await MainPage.facebookBtn)
        await MainPage.facebookBtn.click()
        const url = await browser.getUrl()
        expect(url).toContain('facebook')
    
    })
    

    it('TC #10. Verify navigation to ChatGpt', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.chatGpt.waitForDisplayed({ timeout: 4000 })
        await MainPage.chatGpt.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('chatgpt')

    })


    it('TC #11. Verify navigation to Claude', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.claudeBtn.waitForDisplayed({ timeout: 4000 })
        await MainPage.claudeBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('claude.ai')

    })


    it('TC #12. Verify navigation to Perplexity', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.perplexityBtn.waitForDisplayed({ timeout: 4000 })
        await MainPage.perplexityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('perplexity')

    })

    it('TC #13. Verify Voice Ai', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.voiceAi.waitForDisplayed({ timeout: 4000 })
        await MainPage.voiceAi.click()
        const url = await browser.getUrl()
        expect(url).toContain('voice-ai')
    })

    it('TC #14. Verify navigation to Google', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.googleBtn.waitForDisplayed({ timeout: 4000 })
        await MainPage.googleBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('google')

    })

    it('TC #15. Verify navigation to xCome', async () => {

        await MainPage.xcomBtn.waitForDisplayed({ timeout: 4000 })
        await MainPage.xcomBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toContain('x.com')

    })

    it('TC #16. Verify Logo', async () => {

        await MainPage.signUpBtn.click()
        console.log('sign up is clicked')
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/sign-up')).toBe(true);
        await MainPage.logo.click()
        expect(MainPage.communityBtn).toBeDisplayed()
    })

    it('TC #17. Verify navigation to the Sign up page by using the sign up for free  button', async () => {

        await MainPage.signUpForFreeBtn.scrollIntoView()
        await MainPage.signUpForFreeBtn.click()
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/sign-up')).toBe(true);

    })

    it('TC #18. Verify Explore stories', async () => {

        await MainPage.exploreStoriesBtn.scrollIntoView()
        await MainPage.exploreStoriesBtn.click()
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/customer-stories')).toBe(true);

    })
})
