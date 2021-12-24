"use strict";
const pagination = {
  currentPage: 0,
  prevPage: function () {
    if (this.currentPage === 0) {
      this.currentPage = this.itemsLength;
      return pagination;
    } else {
      this.currentPage--;
      return pagination;
    }
  },
  nextPage: function () {
    if ((this.currentPage = this.itemsLength)) {
      this.currentPage = 0;
      return pagination;
    } else {
      this.currentPage++;
      return pagination;
    }
  },
  lastPage: function () {
    this.currentPage = this.itemsLength;
  },
  init: function (items, perPage) {
    this.items = items;
    this.perPage = perPage;
    this.itemsLength = Math.floor(items.length / perPage);
    const separatePages = [];
    for (let i = 0; i < this.items.length; i = i + this.perPage) {
      separatePages.push(this.items.slice(i, i + this.perPage));
    }
    this.separatePages = separatePages;
  },
  getPageItems: function () {
    return this.separatePages[this.currentPage];
  },
  firstPage: function () {
    this.currentPage = 0;
  },
};

const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
pagination.init(alphabetArr, 4);
console.log(pagination.currentPage);
pagination.nextPage().nextPage();
console.log(pagination.currentPage);
pagination.prevPage().prevPage().prevPage().prevPage();
console.log(pagination.currentPage);
console.log(pagination.getPageItems());
