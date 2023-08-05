import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	entry: "./src/index.js",
	output: {
		libraryTarget: "umd",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
		filename:
			process.env.NODE_ENV === "production"
				? "aframe-mesh-ui.min.js"
				: "aframe-mesh-ui.js",
	},
	externals: {
		aframe: "AFRAME",
		three: "THREE",
	},
	devtool: "source-map",
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
	devServer: {
		port: process.env.PORT || 5000,
		hot: false,
		liveReload: true,
		server: {
			type: "http",
		},
		static: {
			directory: path.resolve(__dirname),
		},
	},
};
