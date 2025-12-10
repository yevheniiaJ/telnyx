import { $ } from '@wdio/globals'
import Page from './page.js'

class MainPage extends Page {

    get acceptCookie() {
        return $(`//button[@id='onetrust-accept-btn-handler']`)
    }

    get exploreBtn() {
        return $(`//span[@data-content='Explore Dev Docs']`)
    }

    get signUpBtn() {
        return $(`//span[@data-content='Sign up']`)
    }

    get communityBtn() {
        return $(`//a[@href='https://joinslack.telnyx.com/']`)
    }

    get aiAssistant() {
        return $(`//div[@class='flex gap-md flex-wrap justify-center']//a[@href='https://telnyx.com/products/voice-ai-agents']`)
    }

    get startBuilding() {
        return $(`//span[@data-content='START BUILDING']`)
    }

    get linkedinBtn() {
        return $(`//a[@href='https://www.linkedin.com/company/telnyx']`)
    }

    get twitterBtn() {
        return $(`//a[@href='https://x.com/telnyx']`)
    }

    get facebookBtn() {
        return $(`//a[@href='https://www.facebook.com/Telnyx/']`)
    }

    get chatGpt() {
        return $(`//ul[@class='flex gap-xs ']/li[1]/a`)
    }

    get claudeBtn() {
        return $(`//ul[@class='flex gap-xs ']/li[2]/a`)
    }

    get voiceAi() {
        return $(`//a[@href='/products/voice-ai-agents']`)
    }

    get perplexityBtn() {
        return $(`//ul[@class='flex gap-xs ']/li[3]/a`)
    }

    get googleBtn() {
        return $(`//ul[@class='flex gap-xs ']/li[4]/a`)
    }

    get xcomBtn() {
        return $(`//ul[@class='flex gap-xs ']/li[5]/a`)
    }

    get logo() {

        return $(`//img[@src='/images/telnyx-logo-with-text-cream.svg']`)
    }

    get signUpForFreeBtn() {
        return $(`//span[@data-content='SIGN UP FOR FREE']`)
    }

    get exploreStoriesBtn() {
        return $(`//span[@data-content='EXPLORE STORIES']`)
    }

    get dataPrivacyBtn() {
        return $(`//a[@href='/data-privacy']`)
    }

    open() {
        return super.open('')
    }
}

export default new MainPage();
