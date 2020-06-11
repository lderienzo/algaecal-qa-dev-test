# algaecal-qa-dev-test

The premis of the test is that the AlgaėCal design team has come up with a page 
listing the businesse's core products being sold in three differnt packages, or "bundles".

The page lists product bundles for 3, 6, and 12 month supplies of AlgaėCal Plus with Strontium Boost, 
where present under each bundle is an "add to cart" button which, when clicked adds the associated bundle to
the customer's shopping cart and then takes them to the shopping cart page to confirm their selection.

The test calls for the writing of a functional test to prove the “add to cart” button works on the bundles. 

This project is the first half of two parts submitted for the AlgaėCal "QA Developer Test".

This project is a small node.js/express/mongodb app using the pug template engine for view rendering. 
It consists only of the product bundle page containing the "add to cart" buttons along with the shopping cart page.

The purpose of this applicaiton is to serve as the "test subject" for the second half of this project, which is a suite of 
Selenium WebDriver tests used to perform the required functional testing.
