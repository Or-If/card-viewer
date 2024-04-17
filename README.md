# Magic Card Viewer

> Create a React app with TypeScript that satisfies the design document.

You should use the [Scryfall API](https://scryfall.com/docs/api).

# Design Document:

---

## Functional Requirements:
> Normally you have to come up with these from the user stories / client's request.
- Create a web-app that can display a magic card in React.
- You should be able to type in a magic card name and press a button to have it search for it and display it if it exists.
- Handle and display errors where possible.
  - If there is an invalid name.
- Page refreshes should not cause the card to unload.

## Non-functional Requirements:
- It shouldn't totally suck.

## User Stories
*As a user, I want to be able to search for a magic card by name and have it shown in front of me.
I want to see an image and also text like the converted mana cost, types, etc.*

*As a user, I want the application to work as I expect, if an error happens I want to be made known of the error state, if I was to say put in an invalid name.*

*As a user, if I refresh the page I don't want to lose whatever card I was looking at. It would be annoying.*

---

### Developer Considerations:
> This is really just, what questions you should be thinking about while doing this.

1. How do I persist data to the page between refreshes? 
2. What is the proper way to encapsulate API calls?
3. How do we handle and surface these errors, what does the API provide for us with invalid states?

---

## Future Considerations:
- How do you handle double faced cards?
- How might you handle cards that are not vertical?
- How would you make it so that you have autocomplete while typing the card name?
- How could we introduce more interesting searches?