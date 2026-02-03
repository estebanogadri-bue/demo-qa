const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportWidth: 1280,
    viewportHeight: 720,

    retries: {
      runMode: 2,  // cuando corres "cypress run"
      openMode: 0  // cuando corres "cypress open"
    },
    downloadsFolder: 'cypress/downloads',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    
    supportFile: 'cypress/support/e2e.js'
  }
})
