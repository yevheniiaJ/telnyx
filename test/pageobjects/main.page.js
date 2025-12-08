import { $ } from '@wdio/globals'
import Page from './page.js'

class MainPage extends Page {

    get acceptCookie() {
        return $(`//button[@id='onetrust-accept-btn-handler']`)
    }
    get hamburgerMenu() {
        return $(`//button[@aria-controls='main-menu-content']`)
    }

    get logInBtn() {
        return $(`//div[@id='main-menu']//a[@href='https://portal.telnyx.com']`)
    }

    get exploreBtn() {
        return $(`//span[@data-content='Explore Dev Docs']`)
    }

    get signUpBtn() {
        return $(`//span[@data-content='Sign up']`)
    }

    get communityBtn() {
        return $(`//span[@data-content='Join our Slack community']`)
    }

    get aiAssistant() {
        return $(`//span[@data-content='EXPLORE OUR AI ASSISTANT']`)
    }

    get startBuilding() {
        return $(`//span[@data-content='START BUILDING']`)
    }

    get linkedinBtn() {
        return $(`//*[@aria-describedby='linkedin']`)
    }

    get twitterBtn() {
        return $(`//*[@aria-describedby='twitter']`)
    }

    get facebookBtn() {
        return $(`//*[@aria-describedby='facebook']`)
    }

    get chatGpt() {
        return $(`//ul[@class='flex gap-xs ']/li[1]/a`)
    }

    get claudeBtn() {
        return $(`//ul[@class='flex gap-xs ']/li[2]/a`)
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
