const { Builder, By, Key, util } = require('selenium-webdriver');

async function generateTest() {
    // Constroi 
    var driver = await new Builder().forBrowser('firefox').build();

    await driver.get('http://localhost:8080/#/cadcidadao');

    await driver.sleep('1000');
    let name = await driver.findElement(By.id('name')).sendKeys('Edicleiton Rasta');

    await driver.sleep('1000');
    await driver.findElement(By.id('data')).sendKeys('22/05/1990');

    await driver.sleep('1000');
    await driver.findElement(By.id('CPF')).sendKeys('43137135060');

    await driver.sleep('1000');
    await driver.findElement(By.id('telefone')).sendKeys('(77) 56575-8801');
    
    await driver.sleep('1000');
    await driver.findElement(By.id('btnSave')).click();

    await driver.sleep('1000');
    await driver.findElement(By.id('email')).sendKeys('EdicleitonRasta@gmail.com');

    await driver.sleep('1000');
    await driver.findElement(By.id('senha')).sendKeys('3d1cl31t0n');

    await driver.sleep('1000');
    await driver.findElement(By.id('senha2')).sendKeys('3d1cl31t0n');  

    await driver.sleep('1000');
    await driver.findElement(By.id('btnSave1')).click();

    if (await driver.findElement(By.id('senha')).getAttribute('value') != '') {
        console.log(await driver.findElement(By.id('name')).getAttribute('value'))
        console.log(await driver.findElement(By.id('data')).getAttribute('value'))
        console.log('SEU CADASTRO FOI REALIZADO COM SUCESSO.')
    }else{
        console.log('error')
    }
}

generateTest();