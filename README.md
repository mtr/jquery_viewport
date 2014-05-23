jquery_viewport
===============

Check if an element is entirely in the viewport, partially in the viewport, 
entirely out of the viewport; if is above, below, left, or right of the 
viewport; or if top, bottom, left or right intersects the viewport.

This plugin creates a series of pseudoclasses you can add to your jQuery 
selectors.

## Example

```
$("img:below-the-fold")  // select all img tags below the fold
$("img:not(:below-the-fold)")  // select all img tags not below the fold
```

### `:above-viewport`
The element is completely above the viewport.

### `:right-of-viewport`
The element is completely to the right of the viewport.

### `:below-viewport`
The element is completely below the viewport.

### `:left-of-viewport`
The element is completely to the left of the viewport.


## License

This project was originally licensed under the MIT license.

## Sources 

This fork contains sources pulled from

* @tuupola
* @NV
* @theluk
* @clutterjoe
* @el22or
