import { Given, When, Then } from "@cucumber/cucumber";
import SignUpPage from "../pages/SignUpPage";

const pages = {
  crm: SignUpPage,
};

Given(/^I am on the (\w+) page$/, (page) => {
  pages[page].open();
});

When(/^I sign up$/, () => {
  SignUpPage.signUp();
});

When(/^CRM welcomes you$/, () => {
  SignUpPage.crmWelcome();
});
