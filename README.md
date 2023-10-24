# Personal Static Site Generator

App that parses raw Markdown files and generate static html and css for my [personal blog](https://igor-sasaoka.github.io).

I decided not to use an existing solution, such as Jekyll or Hugo, because of the amount of overhead 
and I really didn't want to learn new tooling to get the level of customization for my desired use case.

Also it was a fun project to work on.

This is not a generic project, it is really custom made to fit my personal workflow. However, by understanding 
how it works, it becomes possible to customize it to fit yours.

## Usage

1. Add MD file to ```./markdown``` directory.
2. The Markdown should start with a ```TOML``` MetaData header with the following attributes:
    ```
        ---
        Title: Post Title 
        Summary: Post summary (even though this is not implemented yet 😅)
        Date: Oct 24, 2023
        Categories:
            - First 
            - Another
        ---
    ```
3. Run ```make something``` to run the app, process html & css and push the generated content 
to github pages submodule.

## Tech stack

- Golang
- DaisyUi/TailwindCss
- Some bits of Javascript
- Github pages as deployment (using git submodules)
- Makefile for automation

## To-do's

- [ ] Category filter
- [ ] Post summary preview
- [x] Make file to automate deployment process 
- [ ] Bundle js files
- [ ] Improve image files workflow
- [ ] Make it more generic with configurable layout and git integration
- [ ] Add custom 404 page
- [ ] Add i18n
