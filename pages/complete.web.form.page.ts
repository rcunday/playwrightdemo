
//complete.web.form.page.ts

import { expect, Locator, Page } from '@playwright/test';
import { formData } from '../data/test.data';

export class CompleteWebFormPage {
    readonly url = formData.url;
    readonly page: Page;
    readonly formyLogo: Locator;
    readonly form: Locator;
    readonly componentsDropdown: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly jobTitle: Locator;

    readonly edHighSchool: Locator;
    readonly edCollege: Locator;
    readonly edGradSchool: Locator;
    
    readonly sexMale: Locator;
    readonly sexFemale: Locator;
    readonly sexNoSay: Locator;
    
    readonly yearsExperience: Locator;
    readonly date: Locator;
    readonly submit: Locator;

    readonly successSubmit: Locator;

    

    constructor(page: Page) {
        this.page = page;
        this.formyLogo = page.getByRole('link', { name: 'Formy' });
        this.form = page.getByRole('link', { name: 'Form', exact: true });
        this.componentsDropdown = page.getByRole('link', { name: 'Components' });
        this.firstName = page.getByPlaceholder('Enter first name');
        this.lastName = page.getByPlaceholder('Enter last name');
        this.jobTitle = page.getByPlaceholder('Enter your job title');
        this.edHighSchool = page.locator('#radio-button-1');
        this.edCollege = page.locator('#radio-button-2');
        this.edGradSchool = page.locator('#radio-button-3');

        this.sexMale = page.locator('#checkbox-1');
        this.sexFemale = page.locator('#checkbox-2');
        this.sexNoSay = page.locator('#checkbox-3');

        this.yearsExperience = page.getByRole('combobox', { name: 'Years of experience:' })
        this.date = page.getByPlaceholder('mm/dd/yyyy')
        this.submit = page.getByRole('button', { name: 'Submit' });

        this.successSubmit = page.getByText('The form was successfully submitted!');

    }

    async goto() {
        await this.page.goto(this.url);
    }
    async clickOnSubmit() {
        await this.submit.waitFor({ state: "visible" });
        await this.submit.click();
    }

}