># Project Name: Landing Page

>## Author Name: Eslam Mohamed Ahmed Hekal    

>## E-mail for support: eslamhekal85@yahoo.com   ;   eslamhekal74@gmail.com

>### Description:
>> This project aims to convert a completely static webpage into an interactive dynamic one, and we managed to do so by using a number of JavaScript and the DOM tools and that's what we will discuss next briefly.
>>- first we had to build the navigation bar and to do so we made a use of .querySelectorAll() method to get all the section elements in the webpage which we will put the name of each section of them in the navigation bar, after getting the mentioned info we were able to create a non-ordered list elements to be put inside the navigation bar to point to each section and the methods and properties used for that were:  
>>  - .createElement()
>>  - .innerHTML
>>  - .appendChild()
>>
>>
>>- then we wanted to clarify which section is being viewed while scrolling through the page, so we used .addEventListener() and .getBoundingClientRect() to detect which section is in the viewport while scrolling and after detecting that the event listener will execute tha function (or the listener) take an action to clarify that section.
>>
>>
>>- the last thing in converting our static webpage into a dynamic one is by making the navigation bar elements anchors that when one of them is clicked the page scrolls smoothly to the desired section not only jumps into it and to do that we used an event listener to detect if one of the anchors is clicked then we disabled the property of anchors to jump into the desired place by the method .preventDefault() then by the method scrollIntoView we managed to make it scroll to the desired section when the corresponding anchor is clicked.

> ### How to open and use the project?
>> All you need to open the webpage are the following files:
>> - index.html
>> - app.js
>> - styles.css   
>>
>> so if you have all the mentioned files just double click on the index.html file and it will be opened in your default browser.
