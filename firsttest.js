const {Builder,By,Key} = require ("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();

async function example(){

    //Declarar o navegador
    let driver = await new Builder().forBrowser("firefox").build();

    //Navegar até o site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/");
   
   let estudar = ["Aprender Selenium","Aprender JavaScript", "Aprender Java","Aprender C#","Aprender CSS","Aprender HTML","Aprender Cypress","Aprender Metodologia Ágil","Aprender Git","Aprender GitHub"]


    //adicionar 10 tarefas
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[0],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[1],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[2],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[3],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[4],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[5],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[6],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[7],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[8],Key.RETURN);
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[9],Key.RETURN);

    //assert
    let estudar0 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){return value});
    let estudar1 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]/label")).getText().then(function(value){return value});
    let estudar2 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[3]/label")).getText().then(function(value){return value});
    let estudar3 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[4]/label")).getText().then(function(value){return value});
    let estudar4 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[5]/label")).getText().then(function(value){return value});
    let estudar5 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[6]/label")).getText().then(function(value){return value});
    let estudar6 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[7]/label")).getText().then(function(value){return value});
    let estudar7 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[8]/label")).getText().then(function(value){return value});
    let estudar8 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[9]/label")).getText().then(function(value){return value});
    let estudar9 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[10]/label")).getText().then(function(value){return value});


    //assert usando chai should
    estudar0.should.equal("Aprender Selenium")
    estudar1.should.equal("Aprender JavaScript")
    estudar2.should.equal("Aprender Java")
    estudar3.should.equal("Aprender C#")
    estudar4.should.equal("Aprender CSS")
    estudar5.should.equal("Aprender HTML")
    estudar6.should.equal("Aprender Cypress")
    estudar7.should.equal("Aprender Metodologia Ágil")
    estudar8.should.equal("Aprender Git")
    estudar9.should.equal("Aprender GitHub")

    //Fechar o navegador
    await driver.quit()
}

//chamada para ação
example()