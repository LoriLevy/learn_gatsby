
<style>
h4 { font-weight: normal; }
</style>

# Learning How Gatsby Works with this starter kit
This is a sample Gatsby website with a Markdown blog.
It is origninated from the project from the Gatsby JS Crash Course on YouTube by Traversy Media

## Install
If you don't already have the Gatsby CLI program installed, install it with this command at the terminal:

```sh
npm install -g gatsby-cli
```

the result:
```css
Usage: gatsby <command> [options]

Commands:
  gatsby develop                   Start development server. Watches files, rebuilds, and hot reloads if something changes
  gatsby build                     Build a Gatsby project.
  gatsby serve                     Serve previously built Gatsby site.
  gatsby info                      Get environment information for debugging and issue reporting
  gatsby clean                     Wipe the local gatsby environment including built assets and cache
  gatsby repl                      Get a node repl with context of Gatsby environment, see (https://www.gatsbyjs.org/docs/gatsby-repl/)
  gatsby new [rootPath] [starter]  Create new Gatsby project.
  gatsby plugin                    Useful commands relating to Gatsby plugins
  gatsby telemetry                 Enable or disable Gatsby anonymous analytics collection.

Options:
  --verbose                Turn on verbose output                                                                                                                                                    [boolean] [default: false]
  --no-color, --no-colors  Turn off the color in output                                                                                                                                              [boolean] [default: false]
  -h, --help               Show help                                                                                                                                                                                  [boolean]
  -v, --version            Show the version of the Gatsby CLI and the Gatsby package in the current project                                                                                                           [boolean]
+ gatsby-cli@2.8.1
```

### Clone the crash course repository:
```sh
git clone https://github.com/LoriLevy/learn_gatsby.git
```
#### cd into the new cloned project
```sh
cd learn_gatsby
```
#### Install the dependencies:
```sh
npm install
```

#### Build the site:
```sh
gatsby develop
```
output expected:
```css
Eppes-MBP:learn_gatsby Eppes$ gatsby develop
success delete html and css files from previous builds — 0.010 s
success open and validate gatsby-config.js — 0.007 s
success copy gatsby files — 0.018 s
success onPreBootstrap — 0.314 s
success source and transform nodes — 0.078 s
success building schema — 0.225 s
success createLayouts — 0.010 s
success createPages — 0.038 s
success createPagesStatefully — 0.023 s
success onPreExtractQueries — 0.000 s
success update schema — 0.152 s
success extract queries from components — 0.065 s
success run graphql queries — 0.026 s
success write out page data — 0.003 s
success write out redirect data — 0.001 s
success onPostBootstrap — 0.001 s

info bootstrap finished - 3.514 s

 DONE  Compiled successfully in 3366ms                                                                                                                                                                               3:08:36 PM
⠀You can now view gatsby-starter-default in the browser.
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
 WAIT  Compiling.                                                                                                                            3:08:36 PM
⠀
 DONE  Compiled successfully in 184ms
 ```

## Making Updates to styles and content
Change the background of the header:
  Open the file : learn_gatsby/src/components/header.js and change the style for the background to a nice gradient:
  ```js
   <div
    style={{
      backgroundImage: 'linear-gradient(to right, rgb(0, 159, 255), rgb(236, 47, 75))',
      backgroundPosition: 'initial initial; background-repeat: initial initial',
      marginBottom: '0',
    }}
  >
```

Change the Site Title text in the header:
  Open the file : learn_gatsby/gatsby-config.js and change the text in the siteMetaData for the title:
  ```js
  module.exports = {
  siteMetadata: {
      title: 'My Very Own Gatsby Course Work',
  },
```

## Add VS Code Extensions
For syntax:
ES7 React/Redux/GraphQL/React-Native snippets

For Placeholder text content:
Lorem ipsum

For Emmet Syntax Shorthand:
EmmetJSS
This extension allows you to type nav>ul>li and the press tab and it will generate the html

## Install a plugin to allow you to work with data on your hard drive

This is handy to be able to query our blog posts from the file system.
Since the blog files are all in Markdown, install gatsby-transformer-remark.
To intercept local links for Markdown and other non-React pages and avoid the browser having to do a page refresh, install gatsby-plugin-catch-links
```
npm i gatsby-source-filesystem gatsby-transformer-remark gatsby-plugin-catch-links
```

## Set up Query in GraphQL
```html
http://localhost:8000/___graphql
```

Add and then run this query to see a list of pages that came with the project:
```sh
{
  allFile {
    edges {
      node {
        id
      }
    }
  }
}
```
To get just the markdown content for <b>frontmatter</b> use this query:
```sh
{
	allMarkdownRemark {
		edges {
      node {
				frontmatter{
          path
          title
          date
          author
      }
      excerpt
      }
    }
  }
}
```
