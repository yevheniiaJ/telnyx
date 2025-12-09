# telnyxWebdriver
1. • Create separate configs for different browsers. 
- wdio.chrome.conf.js
- wdio.firefox.conf.js
- wdio.safari.conf.js
2. • Create a cross environment for the project.
To run tests on different environments :
Open pagejsjs/page.js , change url
3. • Connect reporting Allure-report.
- Open allure report: npx allure open
4. Make a pipeline on GitHub and deploy the results to GitHub Pages.
- Added tests.yaml
5. Write npm script to run all tests, single file, run tests with chrome browser, firefox browser
Added scripts in package.json file
6. Prepare yourself or find a ready-made docker image to run your project in a docker image, both on the pipeline and locally.
Added ci.yaml, Dockerfile, docker-compose.