// @ts-ignore
import pugPlugin from "@11ty/eleventy-plugin-pug";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  eleventyConfig.addPlugin(pugPlugin);

  // Fix for lack of filters access in pug.
  // https://github.com/11ty/eleventy/issues/1523
  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions({
    globals: ['filters'],
    debug: false
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    },
    markdownTemplateEngine: "pug",
  };
};
