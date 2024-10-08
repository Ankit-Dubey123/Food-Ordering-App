# Food Ordering App 🚀

/\*

- Header
  Logo
  Nav Items
- Body
  Search
  RestaurantContainer
  RestaurantCard
  Img
  Name of Res, Star Rating, cuisines, delivery time etc
- Footer
  Copyright
  Links
  Address
  Contact
  \*/

# Imp

- package.json is a configuration for npm.
- two types of dependencies dev(required in develepment phase) & normal(used in production also).
- difference b/w package.json vs package-lock.json
- npm means calling the command of npm, npx means executing a package.
- JSX is not HTML in js (html like or xml like syntax)
- Config driven ui

## Parcel (Read doc)

- Dev Build
- Local server
- HMR : Hot module replacement (automatically refresh page)
- Use file watching algorithm written in C++
- Caching (Faster Builds)
- Image optimization
- Minification, bundling, compressing files
- Consistent Hashing
- Code Splitting
- Differential Bundling (support older browsers)
- Diagnostic
- Error Handling
- Host app on https
- Tree Shaking (remove unused code)
- Different dev and prod bundles

## Two types of export/import

- Default Export/Import
  export default component
  import component from "path"
- Named Export/Import
  export const component/var
  import {component} from "path"

# Episode 05

## React Hooks (Normal JS utility functions)

- useState() (Superpowerful State variable in React)
- useEffect()
  \*Whenever a state variable update, React re-renders the component

## How React Works behind the scene

React is fast because of efficient DOM manipulation

- Reconciliation Algorithm (React Fiber - React16 )github link
  res-container(7 cards) -> res-container(3 cards)
  React creates VIRTUAL DOM whenever we have the initial UI.
  Virtual Dom is the representation of the actual DOM
- Virtual Dom is a lightweight copy of the actual DOM, representing the
  structure of a webpage. When changes are made to the virtual DOM,
  React efficiently updates the actual DOM to reflect those changes,
  minimizing unnecessary re-renders and improving performance.
- Diff Algorithm - Find the difference between updated and previous
  virtual DOM

# Episode 06

- Monolithic Architecture & Microservices Architecture
- useEffect()
- fetch()
- cors policy (Akshay youtube)
- whenever we change local state variable react rerender the components (triggers a reconciliation cycle)

# Episode 07 (Routing)

- If no dependency array => useEffect is called on every render
- If dependency array is empty [] => useEffect is called on initial render(just once)
- If dependency array is [btnNameReact] => called everytime btnNameReact is updated

- Created Routes & children routes
- {createBrowserRouter, RouterProvider, Outlet, Link, useRouteError} components from react-router-dom.

- Two types of routing in web apps (Client side & Server Side)
  Client side - Not making any network call (not fetching page), just
  components getting interchanged.
  Server Side - make network call and the page is coming from server.

- Link vs anchor tag

# Episode 08 (Let's get Classy)

- Difference b/w class & functional component
- Never update state variable directly
- React component life cycle method
- super keyword used in class based componenet
- componentDigMount() - called when the component already mounted on the web page.(used to make an api call)
- mounting: When the component is mounting, firstly constructor is called then render is called, and react updates dom and refs, and then componentDidMount() is called.
  (to optimize the performance and user experience of applications)

1. Render phase

- The component's constructor (if present) is called.
- The component’s render method is called to produce the initial Virtual DOM.
- React performs reconciliation to determine the changes needed to create the initial DOM representation.

2. commit phase

- The changes calculated during the Render Phase are applied to the DOM.
- The componentDidMount lifecycle method is called, allowing the component to perform any side effects now that it is in the DOM.
  (1.41 hour)

# Episode 09 (optimising our App)

- Created our own custom hooks
- check the status of the user ( online or offline)
- code splitting / chunking / dynamic bundling / lazy loading (initialy should not have grocery code, whenever i will go to grocery, then come up)/ on demand loading -> splitted component into two javascript bundles.(used lazy, suspense components)

# Episode 10 (jo dikhta hai, vo bikta hai) -> tailwind css

- sass, styled component, material ui, bootsrap, ant design, chakra ui
- tailwind css

# Episode 11 (Data is the new Oil)

- Higher order components (takes a component(modify, enhance) and returns back a component)

- Accordian Item

- Lifting the state up (in case of open one item then close all the other item) -> I dont want restaurantCategory to manage itself, I want restaurant menu to control all the category.
  Controlled and Uncontrolled component->If restaurantCategory is managing itself then it is unControlled component otherwise it is controlled component if it is controlled by parent.

- Props drilling (The problem with passing props) -> Can be solved using context.
  In class based components we don't have hooks, so we can't use useContext here. <UserContext.Consumer>{(data)=>console.log(data)} </UserContext.Consumer>
- how to pass context information to the app -> contextProvider
- What is the difference between context and redux

# Episode 12 (Let's build our store) - Redux

- State container for JS Apps
- Redux work in the data layer of an application (Redux is not mendatory).
- React and Redux are different libraries.
- zustand is also used for state management.
- Redux offers easy debugging.
- vanila redux vs redux toolkit
- we will use redux toolkit
- building cart flow, to store all the cart information, will use react store.

- Redux store is kind of like a very big javascript object, with a lot of data inside it, and it is kept in a global central place.
- What can be different slices in redux store: logical partitions are slices. we will create cart slice, user slice (login/logout), theme slice etc.

- Working flow : when we click on a add button -> it dispatches an action -> which calls a function -> and function will modify cart slice.
  This function is known as reducer.
  And for reading the data we use selector, and selector will modify the component. This phenomenon is known as subscribing to the store. It means when the data will be changed in store, then header component will change automatically.

- Redux Toolkit Steps

  - Install @react/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch (action)
  - Selector (useSelector: hook comes from react-redux)

- difference between
  onClick = {func}: Passes the function reference and uses the event object by default.
  onClick = {() => func(item)}: Uses an arrow function to pass a specific argument (item) to func when the click event occurs.
  onClick = {func(item)}: Immediately invokes func with item and assigns the result to onClick, which is usually incorrect.

- redux interview question : A better efficient way is to subscribing only specific slice in store instead of subscribing to the whole store.

- In the older version of redux -> don't mutate state, and returning was mandatory. But in redux toolkit we have to mutate the state (as, state.items.push(action.payload)). Behind the scene, redux doing all these things using immer library. (Finding the difference b/w original and mutated state, and gives back a new state which is immutable state.)
  solution is either mutate the original state or return an empty object.
  Read about immer library.
