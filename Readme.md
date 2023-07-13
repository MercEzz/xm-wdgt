# Files and navigation

1. index.html is the main file of the widget which contains the iframe
2. widget.html is the first page of the widget.
3. product.html is the search result page of the widget.

## Js files

1. dummydata.js holds the dummy data for the preview
2. item.js includes the scripts for rendering the searched product details
3. script.js includes the sccripts for the main page of the widget.

## script.js

1. State management of type of item searched is handled in this file.
2. It includes the event handler for search input - which maps through the dummy data and renders the list of items(products/category).

## item.js

1. It holds all the details of the things rendered after clicking on a product.
2. I have added the comments in this file which will indicate what the following line of code does.
