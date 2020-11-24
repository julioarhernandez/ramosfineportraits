const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const embedJson = require('embed-json');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("myImage", async function(src, alt, className, width=[350], outputFormat = "jpeg") {
        if(alt === undefined) {
          // You bet we throw an error on missing alt (alt="" works okay)
          throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }
        var source = `./src${src}`;
        // returns Promise
        let stats = await Image(source, {
          formats: [outputFormat],
          // This uses the original image width
          widths: width,
          urlPath: "/assets/img/",
          outputDir: "_site/assets/img/",
        });

        let prop = stats[outputFormat].pop();

        return `<img src="${prop.url}" width="${prop.width}" height="${prop.height}" alt="${alt}" class="${className}"/>`;
      });
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            lastModifiedProperty: "modified",
            hostname: "https://ramosfineportraits.com",
        },
    });
    eleventyConfig.addTransform("embedjson", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            let contentEmbedded = embedJson(content);
            return contentEmbedded;
        }
        return content;
    });
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (process.env.ELEVENTY_PRODUCTION && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });


    eleventyConfig
        .addPassthroughCopy("./src/assets/*")
        .addPassthroughCopy("./src/assets/fonts")
        .addPassthroughCopy("./src/assets/css")
        .addPassthroughCopy("./src/assets/js")
        .addPassthroughCopy("./src/robots.txt")
        .addPassthroughCopy("./src/favicon*")
        .addPassthroughCopy("./src/manifest.json")
        .addPassthroughCopy("./src/admin");
    eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
    eleventyConfig.addFilter('dump', obj => {
        const getCircularReplacer = () => {
            const seen = new WeakSet();
            return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                return;
                }
                seen.add(value);
            }
            return value;
            };
        };
        
        return JSON.stringify(obj, getCircularReplacer(), 4);
    });
    eleventyConfig.addFilter("cssmin", function(code) {
        return new cleanCss({}).minify(code).styles;
    });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["md", "njk", "eot", "ttf", "woff", "woff2", "svg", "jpg", "png", "css", "svg", "yml", "gif", "txt"],
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }

    }
};




