*** Music Festival API Automation Testing Using Cypress ***

*** Steps to run tests *** 
1. npm install OR yarn install
2. npm test
             OR 
.node_modules/.bin.cypress open  ---> to get cypress runner GUI

Reporting :
mochawesome-report/mochawesome.html

Test Scnearios Covered :
1. GET /festivals - Validate Music Festival API reponse
2. GET /festivals - Validate band details from API response
3. GET /festivals - Throttling
Note : Test cases are designed from swagger and response parameter are cosidered as mandatory (As nothing is mentioned specifically)
That's the reason validation on these parameters are failed becuase API response is incorrect as per the swagger doc.

Issues :
1. API is getting throttled most of the time
2. API response is sometimes null with status code 200.
3. In API response few fields are not getting populated - musicFestivalName , band Name or record label. (As mentioned in above Note)



*** Additional tests can be added if more conditional details were available in swagger API *** 