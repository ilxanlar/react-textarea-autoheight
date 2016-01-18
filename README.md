# react-textarea-autoheight

**react-textarea-autoheight** adjusts your textareas' height automatically as you type in.

**[See the demo here](http://ilxanlar.github.io/react-textarea-autoheight/)**

## Installation

You can install this package using `npm`:

    npm install --save react-textarea-autoheight

After installation you can import the component:

```es6
import Textarea from 'react-textarea-autoheight';
```

## Usage

You can pass any props as you pass to normal `<textarea/>`.

```es6
<Textarea placeholder="Type your story..."/>
```

Currently it has only one prop:

* wrapperClassName: Use this prop to override default `.textarea-autoheight` class.

## Style

There are some classes that you can use to style your `<textarea>`.
The wrapper has a default class `.textarea-autosize` which you can override using `wrapperClassName` prop.
There is also a `.focus` class which is added to the wrapper when you focus in the textarea.

You can use the following styles for start:
```
.textarea-autoheight {
  border: 1px solid #eeeeee;
  padding: 10px;
}
.textarea-autoheight:hover {
  border-color: #cccccc;
}
.textarea-autoheight.focus {
  border-color: #aaaaaa;
}
```
