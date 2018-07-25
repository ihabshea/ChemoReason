# ChemoReason

## Overview
ChemoReason is an application that allows medical specialists to record and monitor patient cases for chemotherapy and lung cancer. It allows one to track the patient's history and visits throughout his assigned case.

## Installation

Clone the latest release from master, make sure you have Meteor installed.

## Setting Up
#### Add a new page

To add a new page follow the following procedure:

1. Add the page's template. (`<template name="templateNameHere"</template>`)
2. Add an `li` item in `client/main.html`, if the page requires that a user is logged in, make sure it lives inside the `#if currentUser` handlebars.
3. Add a route to this page by passing the path and the action that renders the page to `FlowRouter.route(string, any)`.
4. Pass the path to activeLink **(between single quotes)** inside the `li`'s class attribute so that it highlights when clicked.

#### Adding a New Collection

To add a new one, it's preferable to follow the following steps for the sake of order:

1. First, create the collection inside /lib/collections/collection.js as `export const`.
2. If you'll use the collection in the client side, then import it inside client/main.js.
3. If you'll use the collection in the server side, then import it inside server/main.js.
4. Concerning database manipulation, they all should be on the server.
    - Use `Meteor.methods` to create a callable method containing your collection's required manipulation.
    - Use JSON notation; method name as key and anonymous function as value.
    - Don't mess commas up between method bodies.
    - In client side, use `Meteor.call()` to call a method from the server side.

#### Dealing with cases

The cases collection is called Cases, to manage cases you need to invoke `Meteor.call(method)` to save the change to the server's database. So far the only methods that exist are
- insertCase(name)
- removeCase(id)

#### Dealing with user accounts
You can look up Meteor's official documentation for user accounts [here]( https://docs.meteor.com/api/accounts.html).
