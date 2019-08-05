# b-dialogs.js
bootstrap plugin to generate dialogs easily

## Get Started
you just need to add as a dependency in your web page, like this:

```html
<script src="https://cdn.jsdelivr.net/gh/Vusumzi123/b-dialogs.js@master/dist/b-dialog.min.js"></script>
```
* just add it after bootstrap and jquery

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

##Advanced usage

//TODO
