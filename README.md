# Food Ordering App 🚀

/\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
-     - RestaurantCard
-       - Img
-       - Name of Res, Star Rating, cuisines, delivery time etc
- Footer
- - Copyright
- - Links
- - Address
- - Contact

\*/

# Imp

- package.json is a configuration for npm.
- two types of dependencies dev(required in develepment phase) & normal(used in production also).
- difference b/w package.json vs package-lock.json
- npm means calling the command of npm, npx means executing a package.
- JSX is not HTML in js (html like or xml like syntax)
- Config driven ui

# Parcel (Read doc)

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

# Two types of export/import

- Default Export/Import
  export default component
  import component from "path"
- Named Export/Import
  export const component/var
  import {component} from "path"

# --- Episode 05

# React Hooks (Normal JS utility functions)

- useState() (Superpowerful State variable in React)
- useEffect()
  \*Whenever a state variable update, React re-renders the component

# How React Works behind the scene

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

# --- Episode 06

- Monolithic Architecture & Microservices Architecture
- useEffect()
- fetch()
- cors policy (Akshay youtube)
- whenever we change local state variable react rerender the components (triggers a reconciliation cycle)

# --- Episode 07 (Routing)

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

# --- Episode 08 (Let's get Classy)
