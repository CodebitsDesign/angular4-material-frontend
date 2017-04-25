# Angular 4 Material Frontend
Angular 4 Material Design frontend project
created for Git Submodule of Typescript MEAN Fullstack project.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--------------------------------------------------

## Frontend Setup
The frontend is suggested to be setup with [Angular Cli](https://github.com/angular/angular-cli). 

Prerequisites:
```bash
$ sudo yarn global add @angular/cli
or, 
$ sudo npm install -g @angular/cli
```

### Creating the Angular App:
```bash
$ ng new angular4-material-frontend --skip-npm
$ cd angular4-material-frontend
$ yarn

$ ng serve
// And open http://localhost:4200 in your browser.
```

### Adding Angular Material: 
-   [Material Design components for Angular apps](https://material.angular.io/guide/getting-started)
-   [Getting Started With Angular Material 2](https://alligator.io/angular/angular-material-2/)
-   [Setting up your first Angular 2 Project Using Angular Material 2](https://medium.com/@ladyleet/setting-up-your-first-angular-2-project-using-angular-material2-5db18a174165)

Step 1. Install angular-material & hammerjs
```bash
$ yarn add @angular/material @angular/animations
$ yarn add hammerjs 
$ yarn add @types/hammerjs --dev
```
> `Hammer.js` is an optional dependency and helps with touch support for a few of the components (md-slide-toggle, md-slider, mdTooltip).

In your `app.module.ts`, make sure to `import hammerjs`.
```typescript 
import 'hammerjs';
```

In your `tsconfig.json`, add hammerjs to the types section.
```json 
"types": [
      "hammerjs"
    ]
```


Step 2. `angular-cli.json` 

If you decide to use `Hammer.js`, and given that you’ve started your project with the `Angular CLI`, modify your `angular-cli.json` file to add the Hammer.js library.
```json
...
"apps":[
  {
    ...
    "scripts": [
      "../node_modules/hammerjs/hammer.min.js"  // Add path for hammer.js
    ],
  }
],
```
> You may need to restart your local server for the changes to angular-cli.json to take effect.


Step 3. Add Angular Material to your app module

Import `MaterialModule` and add it to your imports. You’ll also need to import the necessary for animations in your module (e.g: app.module.ts).
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//>> Add Angular Material 
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//<<

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule, // Add Angular Material
    BrowserAnimationsModule   // Add Angular Animations
  ],
  exports: [
    MaterialModule      // Add Angular Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Step 4. Import a pre-built theme and Material icons

There are a few pre-built themes installed automatically with Angular Material. These set the colors and basic styling. 
The available themes are: `indigo-pink`, `deeppurple-amber`, `purple-green` and `pink-bluegrey`.

You can also have access to the `Material Design icons` and use named icons with `<md-icon>` or `<i class="material-icons">`. 
To import both a theme and the Material Design icons to your project, you would add this to your global `styles.css` or `index.html`:

> `@import` prevents parallel downloads, use `<link>` instead.
 
in `src/idex.html`:
```html
<head>
  ...
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="../node_modules/@angular/material/prebuilt-themes/indigo-pink.css" rel="stylesheet">
</head>
```

, or in `src/styles.css`:
```css
@import '~https://fonts.googleapis.com/icon?family=Material+Icons';
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```
Use `LINK` instead of `@import` if you want stylesheets to download in parallel resulting in a faster page.
[don’t use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)


Step 5. Angular Material is ready!

[Material Icons Guide](https://google.github.io/material-design-icons/)
Material icons look best at 24px, to be shown in either 18, 24, 36 or 48px. The default being 24px.
```html
<md-icon>face</md-icon>

<i class="material-icons md-48">face</i>

<i class="material-icons">face</i>

<i class="material-icons md-48" md-tooltip="Android" tooltip-position="above">android</i>

```

Some markup for a template of a sample app.
in `src/app/app.component.html`:
```html
<!doctype html>
<h1>
  {{title}}
</h1>

<h3>Material in Angular 4</h3>
<div>
 <md-icon class="md-48" md-tooltip="Face" tooltip-position="below">face</md-icon>

 <i class="material-icons md-18">face</i>

 <i class="material-icons md-24">face</i>

 <i class="material-icons md-36">android</i>

 <i class="material-icons md-48" md-tooltip="Android" tooltip-position="above">android</i>
</div>

<div> Material Icons:
  <i class="material-icons md-dark">face</i>
  <i class="material-icons md-dark md-inactive">face</i>
  <i class="material-icons md-light">face</i>
  <i class="material-icons md-light md-inactive">face</i>
  <i class="material-icons orange600">face</i>
</div>
<div>
  <md-toolbar color="primary">
    <span><md-icon class="md-48">mood</md-icon></span>

    <span>Yay, Material in Angular 4!</span>

    <button md-icon-button [md-menu-trigger-for]="menu">
      <md-icon>more_vert</md-icon>
    </button>
  </md-toolbar>
  <md-menu x-position="before" #menu="mdMenu">
    <button md-menu-item>Option 1</button>
    <button md-menu-item>Option 2</button>
  </md-menu>

  <md-card>
    <button md-button>All</button>
    <button md-raised-button>Of</button>
    <button md-raised-button color="primary">The</button>
    <button md-raised-button color="accent">Buttons</button>
    <a md-fab color="primary"><md-icon>check</md-icon></a>
    <a md-mini-fab md-tooltip="Material design Mini Fab" tooltip-position="above" color="primary"><md-icon>check</md-icon></a>
    <button md-button md-tooltip="some message" tooltip-position="above">Button</button>
  </md-card>

  <span class="done">
    <button md-fab>
      <md-icon>check circle</md-icon>
    </button>
  </span>
</div>
```

And to this we added only the following CSS to our global `styles.css`.
in `src/styles.css`:
```css
/*csslint adjoining-classes:false, fallback-colors:false */

/* Rules for sizing the icon. */
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

/* Rules for using icons as black on a light background. */
.material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
.material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

/* Rules for using icons as white on a dark background. */
.material-icons.md-light { color: rgba(255, 255, 255, 1); }
.material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

.material-icons.orange600 { color: #FB8C00; }

body {
  margin: 0;
  font-family: Roboto, sans-serif;
}

md-card {
  max-width: 80%;
  margin: 2em auto;
  text-align: center;
}

md-toolbar-row {
  justify-content: space-between;
}

.done {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
}

```
> For ingore CSSLint Waring, include `/*csslint ... */` comment:
>> Note that the lack of `white space` is extremely important: it needs to be `/*csslint`, not `/* csslint`, otherwise it won't work.
 

Step 6. Running unit tests

> ISSUE: Angular2 material 'md-icon' is not a known element with Karma / Jasmine testing

> WARN: 'Could not find Angular Material core theme. Most Material components may not work as expected.

Change the following to add Angular Material
in `src/app/app.component.spec.ts`:
```typescript
import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { AppComponent } from './app.component';
// Add for Angular Material 
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      imports: [
        MaterialModule, // Add Angular Material
        BrowserAnimationsModule   // Add Angular Animations
      ],
    }).compileComponents();
  }));

  ...
```

Modifying `karma.conf.js` to include a theme
```javascript
files: [
  { pattern: './src/test.ts', watched: false },
  { pattern: './src/index.html', watched: true},
  { pattern: './src/styles.css', watched: true},
  // Include a Material theme in the test suite.
  { pattern: './node_modules/@angular/material/prebuilt-themes/indigo-pink.css', included: true, watched: true},
  { pattern: './node_modules/hammerjs/hammer.min.js', included: true, watched: true },
],

```

Then, run `ng serve` or `ng test`.
```bash
$ yarn test
or
$ yarn start
```

## Publish this local project on GitHub using command line
Step 1. [Create a new repository](https://help.github.com/articles/creating-a-new-repository/) on GitHub. To avoid errors, do not initialize the new repository with `README`, `license`, or `gitignore` files. 
```
Repository name: angular4-material-frontend
```

Step 2. Open Terminal and change the current working directory to your local project. 
Then process git commands:

// Show the working tree status:
```bash
$ git status
```

// If you haven’t initialised a Git repository in the project directory, 
use the below command to initialise the local directory as Git repository:
```bash
$ git init 
```

// Add file contents to the index: 
```bash
$ git add .
```

// Record changes to the repository: 
```bash
$ git commit -m "first commit"
```

// Manage set of tracked repositories.
 [Add the URL for the remote repository](https://help.github.com/articles/adding-a-remote) 
created at `Step 1` where your local repository will be pushed:
```bash
$ git remote add origin https://github.com/CodebitsDesign/angular4-material-frontend.git

// Update remote refs along with associated objects: 
$ git push -u origin master
```
> If you use `-u` in the command, it will remember your preferences for remote and branch and you can simply use the command `git push` next time.
