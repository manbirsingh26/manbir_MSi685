Introduction:
The website is titled as “Manbir’s Coffee House”. This website represents a sample coffee shop. It first takes the user on the Home Page where users see a brief introduction of the shop, information like top selling products, some customer reviews, number of employees, menu, branches, opening and closing hours, links to social media pages, etc. Then we have Order Page where users can order their favourite coffee. Further, we have Contact Page which contains information on how to contact us. In the last, we have About page which contains detailed information about this coffee business.
My inspiration to make this project has come by my observation that there are many coffee businesses which provide high quality coffee, but they are still not present online. So, customer have to go offline to enjoy their coffee. But if they have an online ordering website then customers who don’t want to go in person to grab a cup of coffee can order their coffee from the comfort of their home. This can greatly increase the sales provided that the staff preparing the coffee pays proper attention to the quality.  Also, not only for coffee businesses this website can be modified for other food or drink related businesses.
Website Layout:
Flexbox has been mostly used to implement the layout for all  of the four website pages. The reason for using flexbox is that it makes it easy to make the content responsive due to its vast variety of properties. Also, float and position property have been used a little bit wherever they were required.                                                                                                   
Website Organization:
The website consists of following four pages:- 
1. Home
2. Order
3. Contact
4. About
Home Page – is the default page of the website. Its purpose is to provide a brief overview of the coffee house. I have made a chart here also using Chart.js library. Also, I have used JavaScript to make dynamic counters which start only when their container is 70% visible. The extra JavaScript which I have used to make the counters start based on their visibility is Intersection Observer() constructor. I have also used an embedded video.
Order Page – is the ordering page of the website. Its purpose is to allow customers to choose from the available options of coffees and order accordingly. I have mostly used flexbox to make the content responsive and used transform property to make the content feel lively. I have also provided option to apply the coupon.
Contact Page – is the page having contact information like phone number and email id of the coffee house. It also has a contact form for which “CSS-inline and JavaScript Validation”, both are applied.               
About Page – is the last page of the website. Its purpose is to provide detailed information about the business to the website viewer. Here also I have used flex to make it responsive and neat looking.

Content Declaration:                                                                                                                                         
Images used in Home , Order and About page of  the project have been taken from the following 
Images-                                                                                                               
sources:
1.	french.jpeg (Source: Pexels)
2.	black_coffee.jpeg (Source: Pexels)
3.	iced.jpeg (Source: Pexels)
4.	cappuccino.jpg(Source: Pexels)
5.	HotChoclate.jpg (Source: Pexels)
6.	Espresso.jpg (Source: Pexels)
7.	ChoclateHazelnutLatte.jpg (Source: Pexels)
8.	Americano.jpg (Source: Pexels)
9.	pumpkinSpiceLatte.jpg (Source: Pexels)
10.	DarkRoast.jpg (Source: Pexels)
11.	cold_brew_lemon_coffee.jpg (Source: Pexels)
12.	Indian_Masala_Tea.jpg (Source: Pexels)
13.	Owner.jpg (Source: My own photo)
14.	staff_2.jpg (Source: FreePik)
15.	staff.jpg (Source: FreePik)                                                                                                                 
16.	facebook.svg (Source: FontAwesome) 
17.	instagram.svg (Source: FontAwesome)
18.	youtube.svg (Source: FontAwesome)
Embedded Video-
Embedded Video on Home page has been obtained from following source:
1.	YouTube
JavaScript(JS)-
Following library was used to make chart on Home Page:
1.	chart.js (Script Source: chart.js) 

Highlighted Part:
The part where I spent a lot of time to make it work correctly is the JavaScript on the Order Page to make the ordering process work. On top of “Home” page, I have added an input for coupon where I have applied the condition using JS if the user enters the correct coupon, then the coupon gets applied  and the confirmation message gets displayed otherwise the alert gets issued.                                                                        Next, there are available items arranged in the form of cards using flexbox where each card contains the name , image and price of an item along with a “Add to Cart” button by clicking which the item can be added to cart and it can be used multiple times to add multiple quantities. In one order, multiple items can be added. Then in the last I have “Place Order” which when clicked after adding items to the cart , displays Order Summary where it shows each item added to the cart and the Total Price with discount or simply the Total Price if the coupon has not been applied. Further, it also displays a form asking users to enter details like Name, Contact No, Delivery Address and Payment Mode for. After the user enters the required details then it clicks the “Complete the Order” button which finally completes the order and then the final  confirmation message gets displayed. Also, below the confirmation message, “Order Again” button is also displayed which users can click to again start a new order.                                                                                                                                                So, it took long time for me to make this process work perfectly.

References:
1.	https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver

2.	https://www.chartjs.org/docs/latest/charts/doughnut.html

3.	https://www.w3schools.com/jsref/jsref_includes_array.asp                                                                      

4.	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

5.	https://www.w3schools.com/jsref/met_win_settimeout.asp

6.	https://www.w3schools.com/jsref/jsref_ceil.asp

7.	https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

