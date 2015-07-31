/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it('all have a URL defined', function() {
        /* Checks if all feed data has a URL existing */
        for (i = 0, len = allFeeds.length; i < len; i++) {
          expect(allFeeds[i].url).toBeDefined();
        }
      });

      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it('all have a name defined', function() {
        /* Checks if all feed data has a name amended */
        for (i = 0, len = allFeeds.length; i < len; i++) {
          expect(allFeeds[i].name).toBeDefined();
          /* If the name is defined make sure it's length is greater than zero */
          expect(allFeeds[i].name.length > 0).toBe(true);
        }
      });
    });

    describe('The Menu', function() {

      /* A test that ensures the menu element is
       * hidden by default.
       */
      it('is hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      /* A test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * has two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it('opens up when the icon is pressed', function() {
        /* Checks if after the icon is clicked the menu-hidden trait is removed
         */
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);

        /* Checks if after the icon is clicked the menu-hidden trait is appended
         */
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
     });

     describe('Initial Entries', function() {

      /* Runs LoadFeed asynchronously because all data needs to be
       * obtained from Google API before the test can be run
       */
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      /* A test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
      it('loads all the work', function(done) {
        expect($('.feed').children().first().children().first().hasClass('entry')).toBe(true);
        done();
      });
    });

    describe('New Feed Selection', function() {
      var firstLoad;
      var secondLoad;

      /* Runs LoadFeed asynchronously because all data needs to be
       * obtained from Google API before the test can be run
       */
      beforeEach(function(done) {
        /* Gets the content of the initial feed */
        firstLoad = $('.feed').children();

        /* Loads a new feed to have its contents checked */
        loadFeed(1, function() {
          done();
        });
      });
      /* A test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      it('actually changes the content', function(done) {
        /* Gets the contents of the second feed load */
        secondLoad = $('.feed').children();

         /* Checks the first and second feed uploaded and compares to see if
          * different, or updated compared to the previous feed
          */
        expect(firstLoad.is(secondLoad)).toBe(false);
        done();
      });
    });
}());
