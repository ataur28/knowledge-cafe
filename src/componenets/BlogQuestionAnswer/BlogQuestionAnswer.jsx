import React from 'react';
import './BlogQuestionAnswer.css'

const BlogQuestionAnswer = () => {
    return (
        <div>
            <h2>Blog Question Answer Section</h2>
            <div>
                <h3>Question-1: Props vs state</h3>
                <h5>Answer:</h5>
                <p>Props:</p>
                <li>Immutable</li>
                <li>Can be passes to child components</li>
                <li>Has better performance</li>
                <p>State:</p>
                <li>Mutable</li>
                <li>Can only be passes as props</li>
                <li>Owned by its component</li>
            </div>
            <div>
                <h3>Question-2: How does useState work?</h3>
                <h5>Answer:</h5>
                <p>Use the useState React Hook to add state to a functional component It returns an array with two values: The current state and a function to update it are returned in an array. Every time the setter function is called, the Hook receives an argument representing the initial state value and returns the updated state value.</p>
            </div>
            <div>
                <h3>Question-3: Purpose of useEffect other than fetching data.</h3>
                <h5>Answer:</h5>
                <p>The useEffect hook will make a network request to render the element. When that fetch is resolved, it will set the response from the server to the local state using the setState function. As a result, the component will render so that the DOM can be updated with data.</p>
            </div>
            <div>
            <h3>Question-3: How Does React work?</h3>
            <h5>Answer:</h5>
            <p>The user interface is broken up into distinct, reusable code pieces called components by ReactJS. In that they take arbitrary inputs referred to as properties or props, React components operate similarly to JavaScript functions. We can have as many items as we need without having our code get cluttered.</p>
            </div>
        </div>
    );
};

export default BlogQuestionAnswer;