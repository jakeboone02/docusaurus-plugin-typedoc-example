// @ts-check
import * as fs from "fs";
import * as path from "path";
import { MarkdownHooks } from "typedoc-plugin-markdown";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.markdownHooks.on(
    MarkdownHooks.INDEX_CONTENT_BEGIN,
    () => "![Coverage Badge](/img/coverage.svg)"
  );

  app.renderer.postRenderAsyncJobs.push(async (output) => {
    fs.copyFileSync(
      `${output.outputDirectory}/coverage.svg`,
      path.join(path.resolve(), "static", "img", "coverage.svg")
    );
    app.logger.info("Copied coverage.svg to static directory");
  });
}
