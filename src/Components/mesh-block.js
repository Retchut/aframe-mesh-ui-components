/* global AFRAME, THREE */

import ThreeMeshUI from "three-mesh-ui";

if (typeof AFRAME === "undefined") {
	throw new Error(
		"mesh-block component attempted to register before AFRAME was available.",
	);
}

AFRAME.registerComponent("mesh-block", {
	schema: {
		width: { type: "float", default: 1 },
		height: { type: "float", default: 1 },
		margin: { type: "float", default: 0.0 },
		padding: { type: "float", default: 0.0 },
		backgroundOpacity: { type: "float", default: 0.7 },
		fontFamily: {
			type: "string",
		},
		fontTexture: {
			type: "string",
		},
		justifyContent: { type: "string", default: "center" },
		textAlign: { type: "string", default: "center" },
		contentDirection: { type: "string", default: "column" },
	},
	init: function () {
		this.container = new ThreeMeshUI.Block({
			width: this.data.width,
			height: this.data.height,
			margin: this.data.margin,
			padding: this.data.padding,
			backgroundOpacity: this.data.backgroundOpacity,
			fontFamily: this.data.fontFamily,
			fontTexture: this.data.fontTexture,
			justifyContent: this.data.justifyContent,
			textAlign: this.data.textAlign,
			contentDirection: this.data.contentDirection,
		});
	},
	tick: function () {
		ThreeMeshUI.update();
	},
	registerUIEl: function (parentContainer) {
		parentContainer.add(this.container);
		this.registerChildren(parentContainer);
	},
	registerChildren: function () {
		const children = this.el.children;
		for (const key in Object.keys(children)) {
			const child = children[key];
			const meshblock = child.components["mesh-block"];
			const meshtext = child.components["mesh-text"];

			// check for both mesh-block and mesh-text components
			if (meshblock && meshtext) {
				console.error(
					"Entity inside a mesh-container component cannot have both a mesh-block component or a mesh-text component",
				);
				console.error(child);
				continue;
			}
			// check for neither mesh-block and mesh-text components
			else if (!meshblock && !meshtext) {
				console.error(
					"Entity inside a mesh-container component must have either a mesh-block component or a mesh-text component",
				);
				console.error(child);
				continue;
			}

			const uiComponent = meshblock ? meshblock : meshtext;
			uiComponent.registerUIEl(this.container);
		}
	},
});
