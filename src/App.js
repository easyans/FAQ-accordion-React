import Question from "./Question";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>FAQ-Accordion-React</h1>
      <div className="container">
        <h2>Frequently Asked Questions about React</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "React or React native ?",
    info:
      "React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript. Both React and React Native are ruling the industry and are widely used for mobile and web applications.."
  },
  {
    id: 2,
    title: "tailwind css or material ui which is better ?",
    info:
      "According to the StackShare community, Material-UI has a broader approval, being mentioned in 69 company stacks & 80 developers stacks; compared to Tailwind CSS, which is listed in 11 company stacks and 19 developer stacks."
  },
  {
    id: 3,
    title: "HOW TO USE COMPONENTS TAB?",
    info:
      "Locating components is very simple. You click on the component you want to inspect or you can use the search bar, which is very useful if the components tree is deeply nested.some of its information will be shown in the right panel like its parent component and the props that were passed to it.."
  },
  {
    id: 4,
    title: "Why can’t browsers read JSX?",
    info:
      "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser."
  },
  {
    id: 5,
    title: "What is the purpose of render() in React?",
    info:
      "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked."
  },
  {
    id: 6,
    title: "What is a state in React and how is it used?",
    info:
      "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."
  },
  {
    id: 7,
    title: "What is an event in React?",
    info:
      "In React, events are the triggered reactions to specific actions like mouse hover, mouse click, key press, etc. Handling these events are similar to handling events in DOM elements. But there are some syntactical differences like:Events are named using camel case instead of just using the lowercase.Events are passed as functions instead of strings."
  },
  {
    id: 8,
    title: "What are synthetic events in React?",
    info:
      "Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers."
  },
  {
    id: 9,
    title: "What do you understand by refs in React?",
    info:
      "Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function. It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components."
  },
  {
    id: 10,
    title: "How are forms created in React?",
    info:
      "React forms are similar to HTML forms. But in React, the state is contained in the state property of the component and is only updated via setState(). Thus the elements can’t directly update their state and their submission is handled by a JavaScript function. This function has full access to the data that is entered by the user into a form."
  },
];
