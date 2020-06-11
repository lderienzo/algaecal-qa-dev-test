# algaecal-qa-dev-test

The premis of the test is that the AlgaėCal design team has come up with a page 
listing the businesse's core products being sold in three differnt packages, or "bundles".

The page lists product bundles for 3, 6, and 12 month supplies of AlgaėCal Plus with Strontium Boost, 
where present under each bundle is an "add to cart" button which, when clicked adds the associated bundle to
the customer's shopping cart and then takes them to the shopping cart page to confirm their selection.

The test calls for the writing of a functional test to prove the “add to cart” button works on the bundles. 

This project is the first half of two parts submitted for the AlgaėCal "QA Developer Test". 
The second part being the Java Selenium Webdriver project located in the https://github.com/lderienzo/AlgaeCalBundlePromotionTester repository.

This project is a small node.js/express/mongodb app using the pug template engine for view rendering. 
It consists only of the product bundle page containing the "add to cart" buttons along with the shopping cart page.

The purpose of this applicaiton is to serve as the "test subject" for the second half of this project, which is a suite of 
Selenium WebDriver tests used to perform the required functional testing.

Below are the pages of this application:

<img width="1434" alt="algaecal_qa_dev_tst_bundle_screen" src="https://user-images.githubusercontent.com/42414954/84341790-ffd49f00-ab71-11ea-989c-35d84ca6edce.png">

<img width="1431" alt="algaecal_qa_dev_tst_shopping_cart_screen" src="https://user-images.githubusercontent.com/42414954/84341806-082cda00-ab72-11ea-9107-000cea6a0f79.png">
