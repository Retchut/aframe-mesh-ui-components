# aframe-mesh-ui

**aframe-mesh-ui** is a set of A-Frame components which aid in creating VR UIs for building VR user interfaces.

These components utilize [Felix Mariotto](https://github.com/felixmariotto/)'s [three-mesh-ui](https://github.com/felixmariotto/three-mesh-ui) library under the hood, adapting it to components fit for use with A-Frame.

# Quick Start

## Try it now

Give it a try in [this jsFiddle](https://jsfiddle.net/felixmariotto/y81rf5t2/44/)

Using react-three-fiber ? Here is a [codesandbox](https://codesandbox.io/s/react-three-mesh-ui-forked-v7n0b?file=/src/index.js) to get started.

## Import

### JSM

#### With NPM

`npm install aframe-mesh-ui`

##### ES6

```javascript
import ThreeMeshUI from "aframe-mesh-ui";
```

##### CommonJS

```javascript
const ThreeMeshUI = require("aframe-mesh-ui");
```

### HTML &lt;script&gt; tag

```html
<!-- Make sure to include a-frame's latest build-->
<script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>

<script src="https://unpkg.com/aframe-mesh-ui@0.5.0/dist/main.js"></script>
```

# Usage

## Font files

In order to display text from within the mesh-text component, a parent component must provide a fontFamily file and a fontTexture file.

The two font files used in the examples were taken from Felix Mariotto's [example assets](https://github.com/felixmariotto/three-mesh-ui/tree/master/examples/assets), and you can find their tutorial on how to create new fonts [here](https://github.com/felixmariotto/three-mesh-ui/wiki/Creating-your-own-fonts)

## Simple use case

### Code

```html
<!-- You can mix and match the UI components and any other A-Frame component! -->
<a-scene>
	<a-entity
		position="0 1.5 -1"
		mesh-container
		mesh-block="
			width: 1;
			height: 1;
			fontFamily: ./fonts/Roboto/Roboto-msdf.json;
			fontTexture: ./fonts/Roboto/Roboto-msdf.png;
		"
	>
		<a-entity
			mesh-text="
				content: This is some text;
				fontSize: 0.1
			"
		></a-entity>
	</a-entity>
</a-scene>
```

#### End result

![Basic example](./examples/basic.png)

### Components

#### mesh-container

The parent of a UI element must contain both a `mesh-container` and a `mesh-block` component.

The `mesh-container` component handles the recursive loading of all the `mesh-block` and `mesh-text` components contained in its entity, and all of its children.

#### mesh-block

A `mesh-block` component is equivalent to a `ThreeMeshUI.Block` object.

It receives the exact same properties a ThreeMeshUI Block would.

#### mesh-text

A `mesh-text` component is equivalent to a `ThreeMeshUI.Text` object.

It receives the exact same properties a ThreeMeshUI Text would.

# TODO

There are still some components which are missing implementation:

- Image blocks
- Buttons (also including keyboard utilities)
- Runtime UI modification utilities
