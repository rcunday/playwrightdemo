// complete.web.form.test.ts

import { test, expect } from '@playwright/test';
import { CompleteWebFormPage } from '../pages/complete.web.form.page';
import { formData } from '../data/test.data';

test('Formy Complete Web Form', async ({ page }) => {
    const completeWebFormPage = new CompleteWebFormPage(page);
    await completeWebFormPage.goto();

    await completeWebFormPage.firstName.click();
    await completeWebFormPage.firstName.fill(formData.firstName);

    await completeWebFormPage.lastName.click();
    await completeWebFormPage.lastName.fill(formData.lastName);

    await completeWebFormPage.jobTitle.click();
    await completeWebFormPage.jobTitle.fill(formData.jobTitle);

    switch (formData.education) {
        case 'HS':
            await completeWebFormPage.edHighSchool.check();
            break;
        case 'CO':
            await completeWebFormPage.edCollege.check();
            break;
        case 'GS':
            await completeWebFormPage.edGradSchool.check();
            break;
    }

    switch (formData.sex) {
        case 'M':
            await completeWebFormPage.sexMale.check();
            break;
        case 'F':
            await completeWebFormPage.sexFemale.check();
            break;
        case 'N':
            await completeWebFormPage.sexNoSay.check();
            break;
    }

    switch (formData.yearsExperience) {
        case '0-1':
            await completeWebFormPage.yearsExperience.selectOption('1');
            break;
        case '2-4':
            await completeWebFormPage.yearsExperience.selectOption('2');
            break;
        case '5-9':
            await completeWebFormPage.yearsExperience.selectOption('3');
            break;
        case '10+':
            await completeWebFormPage.yearsExperience.selectOption('4');
            break;
    }

    await completeWebFormPage.date.click();
    await completeWebFormPage.date.fill(formData.date);
    await completeWebFormPage.date.press('Enter');

    await completeWebFormPage.clickOnSubmit();
    await expect(completeWebFormPage.successSubmit).toBeVisible();
    
});