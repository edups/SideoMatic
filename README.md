# SideoMatic

## SideoMatic a color customizable side menu maker

SideoMatic it's a jQuery plugin to easily add a beautiful and customizable side menu to your projects.

- First: Add the following markup
```html
   <div class="side-menu">
        <h5 class="title">YourMenuName</h5>
        <ul>
            <li><a href="">First Link</a></li>
            <li><a href="">Second Link</a></li>
            <li><a href="">Third Link</a></li>
            ...
            <li><a href="">nth Link</a></li>
            
        </ul>
    </div>
    
    <div class="content">
        <img src="YourImage01" alt="YourImageDesc01" class="menu menu-bar"></img>
        <img src="YourImage02" alt="YourImageDesc02" class="menu menu-left"></img>
        
        ...
                //********  HERE YOUR CONTENT ********// 
        ...
    </div>    

```

- Second:  Link the sideomatic.css (or the minified version)

```html
  <link rel="stylesheet" type="text/css" href="sideomatic.css">
  <link rel="stylesheet" type="text/css" href="sideomatic.min.css">
```

- Third: Obviously add jQuery to you project

```html
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
```

- Fourth: Add the sideomatic.js (or the minified version)
```html
 <script type="text/javascript" src="js/sideomatic.js"></script>
 <script type="text/javascript" src="js/sideomatic.min.js"></script>
```

- Fifth: Call the plugin function
```javascript
   $(".side-menu").sideomatic();
```

You can see the demo at: http://edups.github.io

Enjoy your menu !
