# Week 1: 1/28/26

## Agenda

1. Syllabus and Introductions
2. Setting Up Github

---

## Syllabus

1. [Syllabus](../../readme.md)
2. Any questions, needs, concerns? Send an email. I cannot help if you don't ask for help.

## Introductions

### me

| sam heckle (they/she)                                                                                                                                                                          |                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| software engineer to creative technologist pipeline                                                                                                                                            |                                                                                                          |
| things you can ask me about: coding, software engineering, physical computing, sewing, portfolio review, resume review, grad school, games, keyboards, baking, nyc/seattle/san francisco, food | ![works cited](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_01/works_cited.png) |
| please ask me about these things in [office hours](https://calendly.com/samanthaheckle/30min)                                                                                                  | ![phone ew](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_01/phone.png)          |

### you

- name
- pronouns
- (optional) top 3 Instagram ad topics (Open Instagram → Profile → Settings → Accounts Center → Ad Preferences → Scroll to the bottom)
- default browser
- default search engine

---

## Intro to Git / Github

### First Time Setup: Create a Repository

[Github](https://github.com/) is a public site for hosting repositories of code. This is very similar to sharing a folder in Google Drive, except we can choose whether it is public or private. For this class, you will have a public repository. Let's start by making one now.

1. Open up your browser and navigate to [Github](https://github.com/)
2. Make a new repository. There are lots of avenues to do this.
   - Click the upper right hand corner + button -> new repository
   - Click your profile icon -> repositories -> click the green "new" button
   - On the left side menu, click the green "new" button.
3. Name your repository (`web-design-projects` is a good start). For any file naming in this class, you absolutely _cannot_ use spaces.
4. Leave the default settings, press "create repository"
5. Open up your new repository (click your profile -> repositories -> the new repository you just made)

Now we have a folder inside Github! This is exactly like making a folder in google drive.

### Command Line Basics

Throughout this class we will become more comfortable with the command line interface (CLI). On a Mac, this means Terminal. On a PC, I requested you install GitBash. On Linux, this is the entire interface.

Here are a list of the easiest and most common commands:

- `pwd` → displays the path of the directory the command line is currently in. Think of the command line as a Finder window – it can only be in one folder at a time, and it can be used to open, create, modify or remove files in that folder.
- `ls` → shows the files that exist in the current directory
- `mkdir` → creates a new folder at the current path, and takes one parameter (the name of the folder.) Example usage: `mkdir MyNewFolder`
- `cd` → changes directory, it’s what we use to navigate the filesystem. It takes one parameter, see below:
  - `cd MyNewFolder` will move us inside the newly created `MyNewFolder`. This is a _local path_, meaning that `MyNewFolder` needs to exist in the current directory in order for this command to work.
  - `cd /root/MyNewFolder` will move us to the given _global path._ It’s a global path because it starts with a `/`.
  - `cd ..` will move us in the parent of the directory we’re currently in.
  - `cd ~` will move us to the home folder of the current user.
  - `cd /` will go to the very root of the file system.
- `touch` → creates a new empty file
- `cat` → displays the contents of a file, and takes one parameter – the path of the file. For example, running `cat /root/.bash_history` will show the contents of the `.bash_history` file located in the `root` folder, which happens to be the list of all commands you’ve already run in the terminal.
- `rm` → removes a file; `rm -r`, to remove a directory; USE WITH CAUTION.

**Note #1:** You can find a pretty comprehensive command line cheat sheet [here](https://www.git-tower.com/blog/command-line-cheat-sheet/). Don’t worry if it feels intimidating for now – you’ll soon get used to it.

Let's make a new folder via our command line.

1. In your Finder (Mac) or File Explorer (PC), find a good spot where you want the code for this semester to live. This could be on your Desktop, Documents, or wherever you store your class files for the semester.
   - As a note, I have a folder located on my home drive called `dev`, so I _always_ put any code projects / class folders in this folder. This is because the full path is `Users/samheckle/dev/`, so the folder that exists on my computer is `Users/samheckle/dev/web-design-projects/`
2. Navigate to that folder using `cd`

Now we want to add our repository that we created on Github to this folder.

### Setting up our Github ssh key

1. In your terminal, follow the [instructions to generate a new ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
   - It is different between Mac and PC!
2. In your terminal, [copy your ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)
3. In your browser in Github → Profile → Settings → SSH and GPG keys → New SSH key and paste the contents of your clipboard.
4. Press "Add SSH Key". You have now added ssh into Github so we can use the CLI!

### First Time Setup: Clone a Repository

The benefit of using Github is that we can have cloud storage for our code. But, this is not the way we will be editing and writing code on our own machines. We need to make a local "clone" (copy) of our repository that we will regularly sync up to the cloud.

1. In your browser, open your new repository in Github (click your profile icon -> repositories -> whatever you named your repo)
2. Click the green "code" button -> local tab -> ssh tab and copy that link (it should look something like `https://github.com/samheckle/web-design-projects.git`)
3. In your CLI, you should already be in the location where you want this project folder to live. Double check by using `pwd`.
4. Clone your repository using `git clone`
5. Now your folder should be created on your computer!

Let's now work with creating our first HTML file and adding that to our git repository. To start, open this new folder inside your preferred text editor. You can make a folder using the CLI (`mkdir`), or you can use the file explorer within your text editor. Let's make one folders here: `class-demos/`. `class-demos` will be the notes of you following along in class. Inside `class-demos/`, let's also create a `class1/`.

Your file structure should look something like:

```
web-design-projects
├── class-demos
│   ├── class1
```

## Refresher: HTML/CSS

HTML is the structure of a webpage, whereas CSS is the style.

A typical HTML structure should have one parent, the `<html>` tag with two children `<head>` and `<body>`.

- `<head>` = contains meta information about the webpage the browser might need to know (like the `<title>`)
- `<body>` = contains content that actually shows up on the webpage

### Content Tags

These are tags that will always live inside the `<body>` tag.

- `<p>...</p>` → paragraph
- `<h1> ... </h1>` → headings (also h2, h3, ... h6)
- `<strong>...</strong>` → bolded text
- `<em>...</em>` → italicized text
- `<small> ... </small>` → small text
- `<br />` → line break (notice that this tag doesn’t have any content and therefore is both an begin and end tag, with the slash)
- `<hr />` horizontal rule → a line break which draws a line \
- `<a href="http://...">...</a>` → a link to another page. The “`href=""`” portion is an **attribute**. Many tags have optional attributes, further details below.
- `<img>` → images, uses `src` attribute which can contain a local file path or url to an image, no closing tag
- **Grouping & information organization:**
  - `<div> ... </div>` → [Block-level](https://www.w3schools.com/html/html_blocks.asp)
  - `<span> ... </span>` → [Inline](https://www.w3schools.com/html/html_blocks.asp)

## Adding our files to Github

Once we have made our changes to our folder, we need to add our files to github.

This is always 4 commands:

1. `git status` = sees all the files that were changed from the last version
2. `git add .` = adds all the files. if you have a file you do not want added, you need to manually type the files you do want instead of the `.`
3. `git commit -m "this is my message describing the change"` = names the version we are about to upload
4. `git push` = uploads our version to github
