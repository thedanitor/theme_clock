# Theme Clock

https://thedanitor.github.io/theme_clock/

This project is from the Day 19 code along video from Udemy's 50 projects in 50 days series focused on web development. I have heavily commented the CSS and JavaScript to make notes to myself why certain choices are being made and what each line of code does.

### Overall Impression

Cool project was great review of how to use Date object and how to use JavaScript to change DOM dynamically.

I am proud that I was able to write the function for toggling between light/dark mode without much help (I forgot to change the text in the button though) and opted for a ternary instead of if/else statement. I also figured out that I needed to use the day and month as indices for the days and months arrays.

### Things Learned

* transform-origin used to specify where rotational axis is on element
* Can have multiple statements in a ternary operator if surrounded by parentheses and separated by commas. See "toggle" event listener for example
* Date object has getMonth(), getDay(), etc methods to retrieve current time infomation
* Did not realize that backticks can be escaped by using another set of backticks