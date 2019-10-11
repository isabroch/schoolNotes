# Javascript design patterns


## Hvad er design-mønstre
Et designmønstre kan beskrives som en skabelon for hvordan vi løser problem — en skabelon som kan bruges i flere forskellige scenario

Mønstre er simple (gennemprøvede) løsninger\
Mønstre er genbrugelige\
Mønstre fremmer modularitet





## Præsentation af to design-mønstre
Two different methods.


### Object literal notation
Uses {dictionary}.
```Javascript
const objectLiteralNotation = {
  key: value,
  variableKey: variableValue,
  functionKey: function () {
    //...
  }
}
```
Used to collect and keep together help functions like:\
addOne, subtractOne, osv...\
fetch, fetchAll, fetchSome, fetchOne, osv...

> **Øvelse findes i JSDesignPattern_Ov1.js**...


### Module pattern
Uses an *Immediately Invoked Function Expression* (IIFE) to create a scope, which makes it private.

Returns an object literal with the parts that can be made public. Keeps PARTS private and unchangeable, while returning public data.

Though IIFE's accept anonymous functions, giving named functions means that error logs will give you a name to refer to instead of just a line number. Makes it much easier to debug.

```Javascript
const modulePattern = {
  () => {
    // ... private stuff
    return {
      // ... public functions
    }
  }
}
```

Can be used in webshop to protect the cart itself (so people can't change prices of things), while still allowing use of functions like adding or removing things from cart.

> **Øvelse findes i JSDesignPattern_Ov2.js**

I went ahead and built an example of modulePattern for a cart system and product system.

> **Øvelse findes i JSDesignPattern_Ov3.js/.html**