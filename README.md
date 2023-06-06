# PrettyMD

## Resumo

Depois de só achar soluções pagas para converter arquivos MD para PDF, decidi fazer a minha própria solução open source.


####  - Qual a utilidade?

Arquivos MD tem uma sintaxe muito simples, isso pode ser útil para escrever documentos como: currículos, relatórios, documentações de projetos, etc.

####  - Como utilizar? 

Se você tiver familiaridade com projetos Angular, é só clonar e rodar. Mas caso não tenha, coloquei a [documentação padrão do angular](#angular-doc) ao final do arquivo. Caso queira acessar a ultima release basta visitar o link http://prettymd.bastani.com.br/.


#### - Requisitos para rodar o projeto localmente:

- Git
- NodeJS
- Editor de texto (Ex.: VS Code)


#### - Como rodar o projeto?

Apesar da documentação padrão do angular ao final do arquivo, darei uma breve instrução de como rodar o projeto localmente:



1. Clone o projeto  
abra um terminal novo em uma pasta de sua escolha e digite o comando:  

```
git clone https://github.com/Thiago-Bastani/PrettyMD.git
```

2. Navegue até a pasta usando o terminal 

```
cd PrettyMD
```

3. Instale as dependencias

```
npm install
```

4. Rode o projeto

```
npx ng serve
```

5. Abra o navegador no link:

```
http://localhost:4200/
```

<br>

--------

<br>

# Angular doc.:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
