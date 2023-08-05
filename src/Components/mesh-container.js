/* global AFRAME, THREE */

import ThreeMeshUI from "three-mesh-ui";

if (typeof AFRAME === "undefined") {
	throw new Error(
		"mesh-container component attempted to register before AFRAME was available.",
	);
}

AFRAME.registerComponent("mesh-container", {
	init: function () {
		this.registerContainer();
	},
	tick: function () {
		ThreeMeshUI.update();
	},
	registerContainer: function () {
		this.el.addEventListener("loaded", () => {
			const meshblock = this.el.components["mesh-block"];
			if (!meshblock) {
				console.error(
					"A mesh-container component must be attached to an entity with a mesh-block component.",
				);
				return;
			}
			meshblock.registerUIEl(this.el.object3D);
		});
	},
});
