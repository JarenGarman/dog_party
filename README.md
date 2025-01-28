# SE2 Intermission Work

## HTML

1. What is HTML?  
  HTML is a programming language used for rendering webpages; more specifically, html files contain the content of the webpage.
2. What is an HTML element?  
  An HTML element is a single piece of HTML code and can contain attributes, content, and other elements.
3. What is an HTML attribute?  
  An HTML attribute is a sort of modifier that goes along with an element.
4. What is the difference between a class and an id? When would you use one vs. the other?  
  A class can contain many elements, whereas an id is unique and can only be used by a single element.
5. What HTML would you write to create a form for a new dog with a "name" and an "age"?  

    ```html
    <form>
      <fieldset>
        <legend>Dog:</legend>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>
        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age"><br><br>
        <input type="submit" value="Submit">
      </fieldset>
    </form>
    ```

6. What are semantic tags? When would you use them over a `div`?  
  Semantic tags are tags that inherently describe the content that is contained in them such as `<form>`, `<table>`, and `<article>`.
7. Explain what each of the following HTML tags do and when you would use them:

- `<h1>`, `<h2>`, etc.  
  Header, used to delineate different sections of the webpage in order of importance. `<h1>` is most important, `<h6>` is least.
- `<p>`  
  Paragraph, used to put a whole bunch of words in a place.
- `<body>`  
  A large element that contains most other elements of the webpage
- `<a>` and the `href` attribute  
  This is used to create a link, where `href` is the destination of the link.
- `<img>` and the `src` attribute  
  Used to place an image in the webpage. `src` is the path to the image.
- `<div>`  
  A jack-of-all-trades divider.
- `<section>`  
  A semantic divider used to denote a section of a webpage.
- `<ul>`, `<ol>`, and `<li>`  
  Unordered list, ordered list, and list item. Unordered lists are bullet points and ordered lists are numbered.
- `<form>`  
  Form is used to create a section of a webpage that takes in user input and contains at least one `<input>` element.
- `<input>`  
  Where the actual user input happens. There are many different types ranging from emails and passwords to numbers and dates.

## CSS

1. What is CSS?  
  Where HTML files store the content for the webpage, CSS files store the styling for the webpage
2. What is a CSS selector? How do you use the ID selector? The class selector?  
  A CSS selector defines the HTML element(s) that will be styled according to the following declaration block. To use the ID selector, use the `#` symbol before the ID. To use the class selector, use a `.` before the class name.
3. What are the three ways to include CSS in your HTML documents? What are the pros and cons of each?
    - External
      - Pros:
        - Only need to change a single file to change the look of the website
      - Cons:
        - Must be referenced in the HTML file
    - Internal
      - Pros:
        - Kept in the same file as HTML
      - Cons:
        - Only applies to that one HTML file
    - Inline
      - Pros:
        - Allows styling an individual element
      - Cons:
        - Only applies to that one element; difficult to refactor
4. What is the Box Model? Describe each component of the Box Model.  
  The box model describes how an element is rendered. In the center box, you have the content of the element. This box is surrounded by the padding box which adds space between the content and the next box, the border box. Outside of the border is the margin box, which adds space between the border and the next HTML element. The padding and margin are both transparent.

## SQL

### Jumpstart Lab Tutorial

1. What is a Database?  
  A database is a place to store data in tables like a Microsoft Excel sheet.
2. What is SQL?  
  SQL is a programming language designed to interact with databases in various ways.
3. What is SQLite3?  
  SQLite3 is a particular implementation of SQL.
4. What is a Table?  
  A table is where the actual data is stored. Each row is an individual item and each column represents a type of data that is present on all items.
5. What is a Primary Key?  
  Unique identifier for an item across multiple tables.
6. What is a Foreign Key?  
  An identifier used to verify that a corresponding item exists in another table.
7. Explain what each of the following SQL commands do:

- insert  
  "Add" command, add a new item in a table.
- select  
  "Query" command, fetches data from the database.
- where  
  "Filter" command, will only return data that passes this filter.
- order by  
  "Sort" command, used to sort the returned data by a particular column.
- inner join  
  "Join" command, used to join multiple tables together and search the new mega-table.

### PG Exercises

1. How can you limit which columns you select from a table?  
  List the columns you want after SELECT, separated by commas.
2. How can you limit which rows you select from a table?  
  You can use WHERE conditionals to filter the rows.
3. How can you give a selected column a different name in your output?  
  Using the AS command you can rename a column.
4. How can you sort your output from a SQL statement?  
  The ORDER BY command will sort the output.
5. What is joining? When do you need to join?  
  Joining takes two or more separate tables and, well, joins them together before running the query. This is useful when you need data from another table in order to do some operation on the first table.

## Dog Party Tutorial: (Link should be added to form submission)

1. What is the purpose of using semantic HTML tags, such as `<header>`, `<main>`, and `<footer>`, in the structure of the page?  
  They make it much easier for somebody else to read the HTML and understand the purpose of each tag's content.
2. How would you link an external CSS file to your HTML document? Provide the syntax and explain why linking a stylesheet is important.  
  Inside the head, `<link rel="stylesheet" href="style.css" />` linking the style sheet is important because otherwise the page would render as if there was no styling at all.
3. Explain what the `event.preventDefault()` method does in the JavaScript code when handling form submission.  
  The default action on form submission is to reload the webpage. `event.preventDefault()` prevents this from happening, so the page will not reload once the form is submitted.
4. When using the `document.querySelector` method in JavaScript, what is it selecting, and how can you target a specific class or ID within the HTML?  
  It is selecting a selector in the HTML such as a class or ID. You can target a specific class with the dot notation `.hero` and an ID with hash notation `#dog-name`.
