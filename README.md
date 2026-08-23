# CS465-fullstack
SNHU CS 465 Full Stack Development 1

Architecture

The Angular project structure is different from the Express HTML customer-facing page in a few different ways. First, the Express HTML was for the customer to view different vacation packages, and the Angular project was for Travlr Getaways employee admins to access the backend and make edits to the website like adding new destinations. Also, Angular pages are generated in the browser, whereas the Express pages are generated in the server. Another difference is that Express used Handlebars templates and Angular used HTML templates. 

Building a Single Page Application (SPA) has some perks and drawbacks when compared to building a regular website. One of the advantages is that the experience of navigating through the website feels more pleasant, meaning it responds quickly because the browser is doing the work, so the page doesn’t have to reload every time a feature is selected. A drawback is that in the beginning the load time is slower and building an SPA is way more complex than a simple website. When I was using the Angular admin and added the Mega Reef package or editing that title to “Mystical Mega Reef”, the page uploaded without having to reload. This was not my experience with the Express website, selecting something would reload the page. Also, with an SPA you can save data locally, so that the page can remember things even if the internet disconnects, which a normal website can’t do.

Functionality

I found an article that helped me better understand when to use NoSQL. It said, “Whenever systems require horizontal scaling, flexible schemas, high speed data processing, or distributed architecture, NoSQL databases are often the best solution” (Chand, 2026). So for a big app with lots of users and changing data such as TikTok or an e-commerce site, NoSQL makes sense. But for something small with a more fixed structure, like a library catalog or personal finance tracker, a relational database could be a better choice. 

My main challenges that I had with JSON was understanding how it fit into the MVC pattern. I knew how to write the JSON file, but I was confused about how the data actually got to the page. Once I connected it through the controller and used{{#each}}, I started to understand more completely. One thing I learned is that JSON is different from JavaScript. JSON is used to transfer data and JavaScript runs in the browser. JSON acts like a bridge between the front and backend. 

I also went back and cleaned up some of the code to make things more efficient. One thing I did was take the trip card HTML and move it to its own component so I could resume it for every trip instead of having to write the same thing over and over. That made things much easier to manage. 

Testing

Postman lets you send requests to API without a website. This lets the user test to see if the server is working before having a whole website. This is really valuable so the developer, in this case myself, can catch issues early on. I used the /api/trips to check and see if the system could pull all the vacation destinations from the server correctly. I used /api/trips/CLAR210621 to see if it would pull just the one specific trip. 

To make sure that the SPA was working and connecting correctly to the API, I ran a few tests. First, I loaded the main admin page and verified that all the trip cards displayed properly. Then I tested the “Add Trip” button to make sure that it would take me to the form and then once filled out, that it actually added the new trip card. I also tested out the edit button, changed the title of a listing, and saved it to confirm the update worked and sent me back to the updated main page. I also checked the requests in Postman to verify the API responses. These tests confirmed that the GET, POST, and PUT methods were all working perfectly.

Reflection

My career goals are still something I am figuring out, but I’m really interested in data analytics, business analytics, and possibly data engineering down the road. This course has definitely helped me build skills that will be useful no matter which path I end up on.

I learned so many things in this course. I had never built a full sack application before, and I had worked with Mongo DB in a previous class, but not to this level. Now I feel much more comfortable with Mongo, DB and mongoose. I also never worked with JWT authentication before, and I am much more comfortable with node JS and angular now.

The most valuable thing I learned was patience. Bugging a full psych application I figured out means. Figuring out how multiple pieces all come together the front and the back in the database. It can get really complicated, but it’s honestly kind of fun figuring out how to adjust things and get everything working. Also how to add authentication and authorization to an application. Using the JSON Web Tokens was really fascinating and now I can understand how to secure the front and backend. 

I definitely think this makes me a more remarkable candidate. I know I’ve experience working with so many different development tools and I’ve successfully built something from start to finish and troubleshooting it along the way. I also really enjoyed working with multiple power shell windows locally on my computer that was fun and I wanted to do more of that in the future.	
	
References: 
Gunashree, R.S. (2025, January 29). How to test API without Postman. Devzery. 
https://www.devzery.com/post/how-to-test-api-without-postman 
