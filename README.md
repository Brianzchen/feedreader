# Feed Reader

## Project Overview

This project demonstrates my ability to test code through test driven development. Making sure that code is functioning as intended using [Jasmine](http://jasmine.github.io/) 2.0

# The tests that have been run

1. A test that checks if the variable allFeeds is defined and not empty
2. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. A test that ensures the menu element is hidden by default.
5. A test that ensures the menu changes visibility when the menu icon is clicked. For instance, does the menu display when clicked and does it hide when clicked again.
6. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## How to run the application

To run this application download the zip file and open index.html by right-clicking on the file and opening it in your favorite browser. You can then witness all tests running as intended.
