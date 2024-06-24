# JavaScript Fetch API Exercise

## Objective
 
Your objective is to display a gif to the DOM based on a user search. You will need to create a giphy account and call their developer api endpoint. Let's play around with API calls to Giphy!

## Getting Started

Fork and Close the Exercise Repo to get started: [JavaScript Fetch API](https://github.com/Bryantellius/JavaScript_APIs)

### Prerequisites

If you do have not a Giphy Developer account, visit [developers.giphy.com](https://developers.giphy.com/), and create an account.

## Steps

The JavaScript Fetch API exercise has multiple steps:

- [Exercise 1: Inspect and Select Elements](#exercise-1-inspect-and-select-elements)
- [Exercise 2: Use the Fetch API](#exercise-2-use-the-fetch-api)
- [Exercise 3: Consume the API](#exercise-3-consume-the-api)
- [Exercise 4: Update the DOM](#exercise-4-update-the-dom)

### Exercise 1: Inspect and Select Elements

Inspect the `index.html` file in Visual Studio code to see the starter code. Once you get a feel for the elements you'll be using in this exercise, head to your `app.js`

1. Select the search button element
2. Select the search input element
3. Select the image element
4. Select the feedback paragraph element

### Exercise 2: Use the Fetch API

Use the Fetch API to request a gif based on the user's input term when the user clicks a button.

1. Add an click event listener to the search button element
2. The event handler function should:
   - Call `fetch`
   - Pass in the url: [https://api.giphy.com/v1/gifs/translate](https://api.giphy.com/v1/gifs/translate)
     - Interpolate query parameters to the url
       - all query parameters follow `name=value` syntax
       - `api_key`, should be the api key found on your Giphy Developer Dashboard
       - `s`, should be the value from the search input element

Documentation on how to use Giphy's Translate endpoint can be found [here](https://developers.giphy.com/docs/api/endpoint/#translate).

An example url with query parameters would resemble:

```txt
https://url.com?apiKey=abc&s=abc
```

Query parameters start after a `?`, and each query parameter is separated by an `&`.

### Exercise 3: Consume the API

Use the result from the Fetch API with promise consumers.

1. From the result of calling `fetch`, call the `then` promise consumer method and pass in a callback function
   - The callback function should receive the resolved value as the parameter
   - Return the result of calling `.json` on the response
     - This will parse the response body to JSON, and return the promise result for the next promise consumer
2. From the result of the first `then` promise consumer, chain another `then` promise consumer method and pass in a callback function
   - The callback function should receive the resolved response body parsed to JSON as the parameter
   - Start out just logging the result to console to check if it is the value you expect
3. From the result of the `then` promise consumer method, chain a `catch` method consumer and pass in a callback function
   - The callback function should receive the resolved value as the parameter
   - Start out just logging the result to console to check if it is the value you expect

### Exercise 4: Update the DOM

1. Replace the `console.log` statement in the second `then` method callback parameter to
   - Update the image element's `src` attribute to `res.data.images.original.url`
     - The giphy response returns many urls, so feel free to learn more about the others
   - Reset the value of the search input element
   - Reset the feedback `p`'s text content
     - This will hide previous errors on subsequent successful fetch requests by the user
2. Below the `console.error` statement in the `catch` method
   - display the resolved failure object's `message` property as the text content of the selected feedback `p` from the DOM

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

<!-- - [JavaScript Fetch API Exercise Video on Vimeo](https://vimeo.com/743632725) -->
- [JavaScript Fetch API Exercise Repo on Github](https://github.com/Bryantellius/JavaScript_APIs/tree/Answer)
