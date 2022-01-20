import AbstractPage from "./AbstractPage";
import * as faker from "@faker-js/faker";
import Utility from "../utility/Utility";

class SignUpPage extends AbstractPage {
  private fullName = ".sgnusrname"
  private email = "#email"
  private password = ".sgnpaswrd"
  private getStarted = "#signupbtn";
  private countryCode = "#country_code";
  private phone = "#mobile";
  private terms = "#signup-termservice";
  private crmWelcomes = "#organi_detail";
  private acceptCookies = "//*[text()='Accept All Cookies']";

  signUp() {
    this.type(this.fullName, faker.name.firstName() + " " + faker.name.lastName(), true);
    this.type(this.email, "lenjatest" + Utility.getRandomId("20") + "@gmail.com", true);
    this.type(this.password, "Test1234#$");
    this.select(this.countryCode, "Portugal (+351)");
    this.type(this.phone, "915224650");
    this.click(this.acceptCookies);
    this.click(this.terms);
    this.click(this.getStarted);
  }

  crmWelcome(){
    this.isDisplayed(this.crmWelcomes);
  }

  open() {
    return super.open("crm");
  }
}

export default new SignUpPage();
