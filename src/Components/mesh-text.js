/* global AFRAME, THREE */

import ThreeMeshUI from "three-mesh-ui";

if (typeof AFRAME === "undefined") {
	throw new Error(
		"mesh-text component attempted to register before AFRAME was available.",
	);
}

AFRAME.registerComponent("mesh-text", {
	schema: {
		content: {
			type: "string",
			default: "",
		},
		fontColor: {
			type: "string",
			default: "#FFF",
		},
		fontSize: {
			type: "float",
			default: 0.2,
		},
	},
	init: function () {
		this.text = new ThreeMeshUI.Text({
			content: this.data.content,
			fontColor: new THREE.Color(this.data.fontColor),
			fontSize: this.data.fontSize,
		});
	},
	tick: function () {
		ThreeMeshUI.update();
	},
	registerUIEl: function (parentContainer) {
		parentContainer.add(this.text);
	},
});
