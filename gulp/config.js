var app = "./src";
var contents = "./assets";
var dest = "./dist";
var temp = "./_temp";

module.exports = {
    dev:{
        ts: {
            src: [app + "/**/*.ts"],
            dest: app
        },
        js: {
            src: [app + "/libs/**/*.js", contents + "/js/**/*.js", app + "/**/*.js"]
        },
        less: {
            src: [contents + "/styles/**/*.less"],
            dest: contents + "/styles"
        },
        css: {
            src: [contents + "/styles/**/*.css"]
        }
    },
    build: {
        ts: {
            src: [app + "/**/*.ts"],
            dest: temp + "/js"
        },
        js: {
            src: [app + "/libs/**/*.js", contents + "/js/**/*.js", temp + "/**/*.js"],
            dest: dest + "/js/app.js"
        },
        css: {
            src: [contents + "/styles/**/*.css"],
            dest: dest + "/css/styles.js"
        },
        fonts: {
		src: ["bower_components/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}"],
		dest: "./build/fonts"
        },
        imgs: {
            src: ["assets/imgs/*.{png,jpeg,jpg}"],
            dest: "./build/imgs"
        }
    }
};