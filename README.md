# Table of сontents
1. [Install via NPM](#npm)
1. [Install via CDN](#cdn)
1. [Component events](#events)
1. [Component response](#response)
1. [Component attributes](#attributes)

---

<a name="npm"></a>
## Install via NPM

On the command line, navigate to the root directory of your project:

```
cd /path/to/project
```

Run the following command:

```
npm init
```
Answer the questions in the command line questionnaire.

Install ```@regulaforensics/vp-frontend-components```:

```
npm i @regulaforensics/vp-frontend-components
```

Create ```index.html``` and ```index.js``` files in the root directory of the project.

Import ```@regulaforensics/vp-frontend-components``` into your ```index.js```:

```javascript
import './node_modules/@regulaforensics/vp-frontend-components/dist/main.js';
```

In ```index.html``` connect ```index.js``` and add the name of the component you want to use. Available components:

1. ```<face-capture-wc></face-capture-wc>```
1. ```<face-liveness-wc></face-liveness-wc>```
1. ```<document-reader-wc></document-reader-wc>```

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My app</title>
  </head>
  <body>
    <face-capture-wc></face-capture-wc>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

An example can be found in the ```npm``` folder

<a name="cdn"></a>
## Install via CDN

Connect the script in your ```.html``` file. CDN link: ```unpkg.com/:package@:version/:file```

Example:

```html
<script src="https://unpkg.com/@regulaforensics/vp-frontend-components@0.0.1-beta.32/dist/main.js"></script>
```

Add the name of the component to the html, as in the example above.

An example can be found in the ```cdn``` folder

<a name="events"></a>
## Component events

You can subscribe to component events. In cases of successful and unsuccessful work, the following events will be triggered:

For the ```face-capture-wc``` component - ```face-capture```  
For the ```face-liveness-wc``` component - ```face-liveness```  
For the ```document-reader-wc``` component - ```document-reader```

Example:

```javascript
const component = document.getElementsByTagName('face-capture-wc')[0];

component.addEventListener('face-capture', () => alert('Event!'));
```

<a name="response"></a>
## Component response

You can get the response of the component in the ```detail``` field of the event object.

Example:

```javascript
const component = document.getElementsByTagName('face-capture-wc')[0];

function listener(event) {
    if (event.detail) {
        const response = event.detail;
        console.log(response);
    }
}

component.addEventListener('face-capture', listener);
```

<a name="attributes"></a>
## Component attributes

### face-capture-wc

| Attribute | Info | Default value | Values |
|:----------|:-----|:-------------:|:------:|
| **locale** | the language of the component | ```en``` | ```en```, ```ru``` |

### face-liveness-wc

| Attribute | Info | Default value | Values |
|:----------|:-----|:-------------:|:------:|
| **locale** | the language of the component | ```en``` | ```en```, ```ru``` |
| **url** | backend url | ```https://test-faceapi.regulaforensics.com/``` | any url |

### document-reader-wc

| Attribute | Info | Default value | Values |
|:----------|:-----|:-------------:|:------:|
| **locale** | the language of the component | ```en``` | ```en```, ```ru``` |
| **scenario** | document verification scenario | ```MrzAndLocate``` | ```MrzAndLocate```, ```MrzOrLocate```, ```Mrz```, ```Locate``` |
| **multipage-processing** | checking multiple pages of a document | ```false``` | ```true```, ```false``` |
| **start-screen** | displaying the start page | ```false``` | ```true```, ```false``` |