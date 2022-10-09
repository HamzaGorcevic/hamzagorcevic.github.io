import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import cv from "../img/cv.pdf";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Hamza",
  lastName: "Gorcevic",
  initials: "js", // the example I'm uses first and last, but feel free to use three or more if you like.
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

    {
      emoji: "🌎",
      text: "based in the Novi Pazar",
      link: "",
    },

    {
      emoji: "📧",
      text: "hamzagorcevic.dev@gmail.com",
      link: "",
    },
    {
      emoji: "📝",
      text: "My resume",
      link: cv,
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/hamza_gorcevic/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/HamzaGorcevic",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/hamza-gor%C4%8Devi%C4%87-112951246/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Junior Web Developer able to build from concept to a Web Page, converting designs from PSD, PDF and Figma to HTML, CSS and JavaScript/TypeScript pages. Additionally, we have been using React framework to build web pages. Using React, Router and building web apps with good architecture.",
  bio2: "Personal responsibilities include writing well-designed, well documented and efficient code using best practices.Experienced in Agile teamwork.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
    ],
    exposedTo: ["nodejs", "python"],
  },
  more: {
    proficientWith: ["HAMZA"],
    exposedTo: ["nodejs", "python"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },

    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "anime",
      emoji: "🥷",
    },

    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed

    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/HamzaGorcevic/Marvel-api-team-project",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/HamzaGorcevic/News-api-team",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/HamzaGorcevic/WebsiteMy",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/HamzaGorcevic/ReactExercise/tree/main/src",
      image: mock5,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/HamzaGorcevic/Movies-project",
      image: mock1,
    },
  ],
};
