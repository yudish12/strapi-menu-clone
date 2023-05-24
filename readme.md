# Strapi Menu Bar Clone

In this project I have tried to clone this websites ->https://react-vite-projects-13-strapi-menu.netlify.app/
home page using react js and context api for global state management

## Video

https://github.com/john-smilga/react-vite-projects-13-strapi-menu/assets/82305974/a1d812ef-ed08-4496-85c1-ff5e6a553045

### How to start

1)clone the repository in your ide and run npm install to install dependencies(make sure you have nodejs with npm installed on your system)
2)after installing dependecies use npm start to start the website
3)go to http://localhost:3000 to view website

### Logic for Navbar

#### web view

    1)In web view I have setted up a pageId and setPageId states in context api (https://react.dev/learn/passing-data-deeply-with-context) using this I cab access state of pageId globally in any component
    2)Now in navBar component if I have mouse entered on it I will render corresponding submenu
    3)To render corresponding submenu I will use the pageId state to get the current state on which user hovered and render it using the data array i have in data.js file

#### Mobile view

    1)In mobile view I have a burger menu for which you can open a sidebar
    2)The logic is simple now if we have someone clicking on button just set the open state in context api to true and then we can easily manage it in sidebar component

Hope you liked My basic project I have other complex projects also on my github
