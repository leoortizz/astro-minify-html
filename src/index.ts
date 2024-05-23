import type { AstroIntegration } from "astro"
import type { Options } from "html-minifier-terser"
import { minify } from "html-minifier-terser"
import { readdir, readFile, writeFile } from "node:fs/promises"
import { extname, join } from "node:path"
import { fileURLToPath } from "node:url"

export function minifyHtml(options?: Options): AstroIntegration {
  return {
    name: "minify-html",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const dirPath = fileURLToPath(dir)

        const dirFiles = await readdir(dirPath, { recursive: true })
        const htmlFiles = dirFiles.filter((file) => extname(file) === ".html")

        await Promise.all(
          htmlFiles.map(async (file, i) => {
            const htmlFileContents = await readFile(join(dirPath, file), "utf8")

            const minified = await minify(htmlFileContents, options)

            await writeFile(join(dirPath, file), minified, "utf-8")
          })
        )

        logger.info(`${htmlFiles.length} .html files minified`)
      },
    },
  }
}

export default minifyHtml
