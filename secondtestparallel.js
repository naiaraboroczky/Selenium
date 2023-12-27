const {Builder,By,Key} = require ("selenium-webdriver");
const assert = require ("assert");
var should = require("chai").should();

//Bloco describe - Agrupamento de casos de testes Funcionalidade a ser testada.
describe ("Segundo teste", function(){
// Bloco IT - Teste individual
it ("Segundo local de teste",async function() {

//Declarar o navegador
let driver = await new Builder().forBrowser("firefox").build();

//Navegar até o site
await driver.get("https://herziopinto.github.io/lista-de-tarefas/");

//Lista de iténs
let estudar = ["Aprender Selenium"]

//adicionar 10 tarefas
await driver.findElement(By.id("inputTask")).sendKeys(estudar[0],Key.RETURN);

//assert
let estudar0 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){return value});

 //assert usando chai should
 estudar0.should.equal("Aprender Selenium")

//Fechar browser
await driver.quit()

});
it ("Segundo local de teste",async function() {

    //Declarar o navegador
    let driver = await new Builder().forBrowser("firefox").build();
    
    //Navegar até o site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/");
    
    //Lista de iténs
    let estudar = ["Aprender Selenium"]
    
    //adicionar 10 tarefas
    await driver.findElement(By.id("inputTask")).sendKeys(estudar[0],Key.RETURN);
    
    //assert
    let estudar0 = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){return value});
    
     //assert usando chai should
     estudar0.should.equal("Aprender JavaScript")
    
    //Fechar browser
    await driver.quit()
    
    });

});
