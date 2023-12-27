const {Builder,By,Key} = require ("selenium-webdriver");

//Bloco describe - Agrupamento de casos de testes Funcionalidade a ser testada.
describe ("Funcionalidade adicionar tarefas", function(){
// Bloco IT - Teste individual
it ("Adicionar 10 tarefas a nossa lista com sucesso",async function() {

//Declarar o navegador
let driver = await new Builder().forBrowser("firefox").build();

//Navegar até o site
await driver.get("https://herziopinto.github.io/lista-de-tarefas/");

//Lista de iténs
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

//Fechar browser
await driver.quit()

});
});
