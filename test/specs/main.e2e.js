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

        await MainPage.communityBtn.scrollIntoView()
        await browser.pause(4000)
        await MainPage.communityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url.includes('https://joinslack.telnyx.com/')).toBe(true);
    
    })

    it('TC #5. Verify navigation to Voice AI Agents', async () => {

        await MainPage.aiAssistant.scrollIntoView()
        await browser.pause(4000)
        await MainPage.aiAssistant.click()
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/products/voice-ai-agents')).toBe(true);
     
    })

    it('TC #6. Verify navigation to the Sign up page by using the Start building button', async () => {

        await MainPage.startBuilding.scrollIntoView()
        await MainPage.startBuilding.click()
        const url = await browser.getUrl()
        expect(url.includes('https://telnyx.com/sign-up')).toBe(true);
    
    })

    it.only('TC #7. Verify navigation to Linkedin', async () => {

        await browser.execute((el) => {
            el.scrollIntoView({block: 'center', inline: 'nearest'})
        }, MainPage.linkedinBtn)

        await MainPage.linkedinBtn.waitForDisplayed({timeout: 4000})
        await MainPage.linkedinBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        const url = await browser.getUrl()
        expect(url).toContain('linkedin')
    })

    it('TC #8. Verify navigation to Twitter', async () => {

        await MainPage.twitterBtn.scrollIntoView()
        await browser.pause(4000)
        await MainPage.twitterBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://www.twitter.com/telnyx')
      
    })

    it('TC #9. Verify navigation to Facebook', async () => {

        await MainPage.facebookBtn.scrollIntoView()
        await MainPage.facebookBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://www.facebook.com/Telnyx/')
       
    })

    it('TC #10. Verify navigation to ChatGpt', async () => {

        await MainPage.chatGpt.scrollIntoView()
        await MainPage.chatGpt.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://chatgpt.com/')
       
    })


    it('TC #11. Verify navigation to Claude', async () => {

        await MainPage.claudeBtn.scrollIntoView()
        await MainPage.claudeBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://claude.ai/')
        
    })


    it('TC #12. Verify navigation to Perplexity', async () => {

        await MainPage.perplexityBtn.scrollIntoView()
        await MainPage.perplexityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://www.perplexity.ai/')
        
    })

    it('TC #13. Verify navigation to Perplexity', async () => {

        await MainPage.perplexityBtn.scrollIntoView()
        await MainPage.perplexityBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://www.perplexity.ai/')
    })

    it('TC #14. Verify navigation to Google', async () => {

        await MainPage.googleBtn.scrollIntoView()
        await MainPage.googleBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://www.google.com/')
        
    })

    it('TC #15. Verify navigation to xCome', async () => {

        await MainPage.xcomBtn.scrollIntoView()
        await MainPage.xcomBtn.click()
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        const url = await browser.getUrl()
        expect(url).toContain('https://x.com/')
        
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
