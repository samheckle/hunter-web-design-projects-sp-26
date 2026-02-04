# Week 2: 2/4/26

## Agenda

1. Static Site Generators
2. Setting up Class Blog
3. How 2 Research

---

## Static Site Generators

For this class, we will be setting up a class blog. This will be something you design yourself that will host all your written materials for the class. It is common in web development and artistic practices to maintain a blog, since it is a useful way to share resources and information. 

Blogs I enjoy:
- [bront.rodeo](https://blog.bront.rodeo/)
- [maya.land](https://maya.land/)
- [bodypoetic](https://bodypoetic.neocities.org/)
- [vbuckenham](https://blog.vbuckenham.com/)

There are a lot of different tools out there that people use to blog. Sometimes it is plain HTML/CSS and sometimes people use a Static-Site Generator (SSG). When we say the word "static", it means it uses "plain" HTML/CSS with no frameworks. On the flip side, "dynamic" websites have server-side content, either self-hosted back-end or Wordpress, Squarespace, Wix, etc. Tatiana Mac has a pretty good [explainer of the pros/cons of static vs. dynamic sites](https://www.tatianamac.com/posts/beginner-eleventy-tutorial-parti/). 

There are many different SSGs:
- [Gatsby](https://www.gatsbyjs.com/)
    - I used this for [my blog](https://samheckle.github.io/blog/) at one time
- [Ghost](https://ghost.org/)
    - Both [Brent](https://blog.bront.rodeo/) and [V](https://blog.vbuckenham.com/) use Ghost
- [Jekyll](https://jekyllrb.com/)
- [BearBlog](https://bearblog.dev/)
- [Astro](https://docs.astro.build/en/getting-started/)
    - [Meadow](https://meadow.cafe/) builds on Astro
- Eleventy ([11ty.dev](https://www.11ty.dev/))
- And [so many more](https://www.are.na/sam-heckle/blog-tools)....

For this class, we will be creating and using an Eleventy blog. 

## Setting Up a Class Blog

### First Time Setup: Fork

Start by "forking" [my starter blog repository](https://github.com/samheckle/web-design-blog-starter) and rename it to something useful. This will be *in the url of your blog*! So whatever you anem this folder will be in the repository name: `your-username.githib.io/your-repository`. Keep track of this repository name as we will need it later.

Once you have forked the repository, open it in the browser (your URL should look something like `https://github.com/your-username/your-repository`)

### First Time Setup: Github Settings

Open your repository in Github. 

Open the Code tab:
1. Click "1 Branch"

<img src="https://github.com/samheckle/images/blob/main/branches.png?raw=true" style="width: 600px">

2. Press "New Branch"
3. New Branch Name : `gh-pages`

Open the Settings tab:
1. On the left menu, select Actions → General
2. In the first radio button selection, `Allow all actions and reusable workflows`. Press save. 
3. Scroll to the bottom under `Workflow Permissions` and select `Read and write permissions`. Press save.
4. On the left menu, select Pages. 
5. Under Build and Deployment → Branch → Select `gh-pages`. Press Save.

### First Time Setup: Local

You will need to go through the steps to clone this to your computer. This is pretty similar to what we did last time:
1. Copy the `ssh` url from the forked repository. It should look like `git@github.com:your-username/blog.git`
2. Open a Terminal and navigate to the folder where you want this to exist using `cd`. 
3. `git clone` + your url
4. Open the blog folder in VS code. 

Once our folder is opened, we need to modify a few files. 

In `package.json`:

- Line 2: `"name"` should be renamed to your blog with no spaces
- Line 9: `--pathprefix=/` + replace the text with the name of your repository
- Line 11: `--pathprefix=/` + replace the text with the name of your repository
- Line 15: `"url"` include your `ssh` url here
- Line 18-20: Change to your information

## Writing Your Blog Posts

There are obviously a lot of files that exist in this repository. Mainly, you will be creating files that exist in
- `content/blog/` : this is where your `.md` posts for your reading responses and documentation will go
- `content/css/` : this is where your `.css` files will go for styling
- `_includes/layouts` and `content/*.njk` : these are template files (using `.njk`) that are HTML and Nunjucks. It has some weird syntax, but fundamentally it is HTML and easy to modify.

You *will not* be modifying any files in `_site/`. This is what is built from the rest of your blog.

When you are writing your posts, you are welcome to test them live while you are working on them. We do this by building the files, then watching for changes. If we look at the `package.json`, it defines the script for us, but we can just use the shorthand.

```sh
npm run start
```

This runs our local server for testing, and updates whenever we save files. 

## Publishing Your Post

Once we are all set with our changes, we want to publish our new blog post. 

If we are running our blog locally we need to cancel that with CTRL+C. 
    - If you ever have any issues with the Terminal, you can cancel out of any action by using this same hotkey.

Because of all our pre-setup, we just need to push our changes to github:
1. `git add .`
2. `git commit -m "your commit message that you need to replace with your own words"`
3. `git push`

## How 2 Research

Throughout this class you will be expected to research. This will apply to both technical and conceptual topics, from design to readings to code. 

### A Type of Web Design Process

1. Research + Inspiration
2. Concept
3. Information Architecture + User Experience
4. Visual Design
5. Implementation (structure, style, interaction)

#### 1. Research + Inspiration

- [Rhizome Net Art Anthology](https://anthology.rhizome.org/) | [Rhizome Artbase](https://artbase.rhizome.org/wiki/Main_Page)
- [21st Century Digital Art](http://www.digiart21.org/)
- [Creative Applications](https://www.creativeapplications.net/)
- [Artists Featured in Form and Code](http://formandcode.com/links)
- [linci.co Design Bookmarks](https://bookmarks.linci.co/)
- Tumblr, Instagram, Are.na, Social Media etc...
- [This google doc](https://docs.google.com/document/d/1YChLZMa0t8aE5YQGj0BufvFvhxeVhJ7ojORiLU7coj8/edit?usp=sharing)

##### Inspiration

- Where do you find your web inspiration and news? [Add to this doc](https://cryptpad.fr/doc/#/2/doc/edit/Ig+akvVK7c4PkOklxapwc1ki/)

##### How do you organize your research?

In the past I was a Notion enjoyer...

<img src="https://github.com/samheckle/images/blob/main/notion.png?raw=true" style="width: 600px" />

You can add a [notion extension](https://github.com/dvanoni/notero#configure-notion) to your browser for quick bookmarking.

Now I am an [are.na](https://are.na) enjoyer.

##### Keep a research journal!

- digital (pinterest, are.na, google docs / sheet/slides, notion, miro, figma, folder on your computer)
- physical

#### 2. Concept

- spend time [mind-mapping](https://www.gandanet.com.hk/WikIT/index.php?title=How_to_make_a_mind_map) and actually thinking about multiple concepts before implementing them

#### 3. Information Architecture + User Experience

- sitemaps → blueprint / outline for your entire website
  - list with nested items
  - diagram of pen and paper
  - online tools (miro, figma, google doc)
- wireframes → blueprint for individual pages
  - pen + paper
  - figma
  - miro, google slides, adobe

#### 4. Visual Design

- take your wireframe to higher fidelity
- how does the website look?
- how does the design work towards conveying your concept?

color

- color scheme generators: [coolors.co](https://coolors.co/)

typography

- google fonts
- adobe fonts
- [typefoundry](https://typefoundry.directory/)
- github + search of font name

accessibility 

-[w3c accessability guidelines](https://www.w3.org/WAI/standards-guidelines/)

### A Type of Technical Research Process

1. Pick a starting point:
- Developer website: https://www.11ty.dev/
- Github: https://github.com/11ty/eleventy?tab=readme-ov-file
- Read the blog: https://www.11ty.dev/blog/
    - Read the guy who makes 11ty: https://www.zachleat.com/web/eleventy/
- Youtube: https://www.youtube.com/watch?v=kzf9A9tkkl4

Eventually, you will need to look through all of these things to get familiar with the technical tool you are using! For your project, you will conduct a bit of technical research on 11ty to customize your own blog. This will likely be an ongoing project throughout the semester.

2. Click every hyperlink! 

3. If you have questions, search them! Find the related docs.
- What is Nunjucks? → https://mozilla.github.io/nunjucks/

Research takes a long time! Which is why AI tools are so compelling, because they can streamline and "optimize" your time. But we don't want to optimize, we want to be curious! In your blog, take note of each link you clicked on that you spent significant time with. You are going to maintain and create a list of links for every project. 

4. Play with your codebase

What designs are you trying to change? Experiment and write down what worked and what didn't. How did something line up with your original vision, and what surprised you? What weren't you able to figure out? By seeing a live version of the code, you are quickly able to iterate, prototype, and implement your existing HTML/CSS knowledge into this particular framework. It is ok if it is retrofitted, as long as you understand the structure. 