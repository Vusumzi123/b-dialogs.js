# b-dialogs.js
bootstrap plugin to generate dialogs easily

## Get Started
you just need to add as a dependency in your web page, like this:

```html
<script src="https://cdn.jsdelivr.net/gh/Vusumzi123/b-dialogs.js@master/dist/b-dialog.min.js"></script>
```
* just add it after bootstrap and jquery

or download the package via NPM
```
  npm install b-dialogs
```

to use just call the object with the dislog method like this:

```js
$notifications.dialog()
```

it will show the default dialog template

##Basic Usage
to customize add an object to the parameter of the dialog function with the properties: tittle and body
they are both strings and can have html sintax
like this:

```js
  $notification.dialog({
    tittle: "A title:",
    body: "<h1>This is an HTML body example </h1>"
  });
```

that will generate a dialog with the text yo inserted into the onject's parameters

To add functionality to the buttons you jus need to use the then() and catch() methods, both receive a function as parameter.

like this:
```js
  $notification.dialog({
    tittle: "A title:",
    body: "<h1>This is an HTML body example </h1>"
  }).then(function(){
    /*DO SOMETHING*/
  }).catch(function(){
    /*DO SOMETHING ELSE*/
  });
```

## Advanced usage

the dialog method receives an object, the object needs to have on or any number of the next parameters otherwhise it will take the default values
```js
   {
    tittle: string, //title you want to show in the header of the modal
    body: string, //the body of the modal you want to display, thiscan be HTML or just text
    cancelBtn: string, //text to display in the cancel button
    acceptBtn: strign, //text to display in the accept button
    autoClose: boolean, //wether or not to automaticaly close the modal when pressing any of the footer buttons default true
    isInfo: boolean, //wether or not show the cancel button if set to true only ok button will show default false
    closeOutside: boolean, //whther or not use the background to close de modal default false
    centered: boolean // wether or not the modal should be verticaly centered only works with bootstrap 4 default false
   } 
```

the default values are as follows
```js
  {
    title: the title of the application defined in the tittle text + the word SAYS: 
    size: "modal-sm",
    body: "<i>!--- This is a generic modal body. </br> place your html here --</i>",
    cancelBtn: "Cancel",
    acceptBtn: "OK",
    autoClose: true,
    isInfo: false,
    closeOutside: false,
    centered: true 
  }
```

### Configuring
rigth now the only configuration the plugin suports is language and only supported languages are english and spanish, the default value is Engrish 'EN'

to change the plugin language just execute the next sentence:
```js
$notifications.config({
  lang: 'ES'   //EN ES suported languages
})
```
