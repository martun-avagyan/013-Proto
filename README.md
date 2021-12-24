# 13 proto

### 1. [Write Pagination object that will get an array and pageSize, then will return the following.](https://github.com/martun-avagyan/13-Proto/blob/main/02pagination.js)

> - nextPage
> - prevPage
> - firstPage
> - lastPage
> - goToPage
> - getPageItems

```js
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3
```

### 2. [Airplane TASK](https://github.com/martun-avagyan/13-Proto/blob/main/03airplane.js)

1. Write an Airplane object that initializes name.
2. Give airplanes the ability to .takeOff() and .land():
   - If a plane takes off, its isFlying property is set to true.
   - If a plane lands, its isFlying property is set to false.
