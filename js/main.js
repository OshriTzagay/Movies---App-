let containerSlideShow = document.getElementById("containerSlideShow");
let slidePic = document.getElementById("slidePic");
let options = [
  {
    image:
      "https://i.pinimg.com/564x/6b/99/7c/6b997c8e463e9eab4197b1b9be910e7e.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/f6/92/b2/f692b27411051dd01a4398c65e7c3714.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/26/3e/10/263e10fd71594c5b29d0294f69db85ab.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/5a/fb/b0/5afbb00ae4763e0cf31982fee8cb636e.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/fd/9a/53/fd9a53bade64f15c47f3597470a86175.jpg",
  },
  {
    image:
      "https://i.pinimg.com/564x/a9/51/67/a95167632dff073cd12d5973dd205c02.jpg",
  },
];
let counter = 0;

slidePic.src = options[counter].image;
function slideShow() {
  setInterval(() => {
    if (counter < options.length) {
      slidePic.src = options[counter].image;
      counter++;
    }
    if (counter == options.length) {
      counter = 0;
    }
  }, 2000);
}
slideShow();
