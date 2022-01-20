
export const config: WebdriverIO.Config = {
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "tsconfig.json",
    },
  },

  runner: "local",

  specs: [
    "./features/SignUp.feature",

  ],
  // Patterns to exclude.
  exclude: [],

  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {

        args: [
          "--start-maximized",
          "--window-size=2048,1536",
          // "--headless", //comment extensions: [] - it doesn't work in headless mode
          "--no-sandbox",
          "--disable-dev-shm-usage", //for docker space
          "--disable-setuid-sandbox",
          "--disable-gpu", //only for windows
          "--disable-popup-blocking",
          "--disable-notifications"
        ],
      },
      acceptInsecureCerts: true,
    },
  ],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  outputDir: "./logs",

  logLevels: {
    webdriver: "info",
    //     '@wdio/applitools-service': 'info'
    "@wdio/cucumber-framework": "debug",
  },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,

  baseUrl: "https://www.zoho.com/",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 150000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 150000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: ["chromedriver", "shared-store"],

  framework: "cucumber",

  reporters: [
  ],

  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ["./step-definitions/*.ts"],
    // <boolean> show full backtrace for errors
    backtrace: true,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: true,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],
    // <boolean> hide step definition snippets for pending steps
    snippets: false,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    // <number> timeout for step definitions
    timeout: 120000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },

};
