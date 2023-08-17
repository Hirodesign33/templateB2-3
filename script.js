'use strict';

// ナビゲーション

const navbar = document.querySelector(".navbar");

document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
}
