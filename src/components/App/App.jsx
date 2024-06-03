import { HashRouter as Router, Route, Link } from "react-router-dom"

import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from "../About/About.jsx";


function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
              
                {/* Nice spot for a nav, eh? */}
             
            </header>

            <Router>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About:</Link>
                        </li>

                        <li>
                            <Link to="/students">Students</Link>
                        </li>
                    </ul>

                </nav>

            <Route exact path='/'>
                <StudentForm />  
            </Route>
        
            <Route path='/students'>
                <StudentList />
            </Route>

            <Route path='/about'>
                <About />
            </Route>

            </Router>
        </div>
    );
}


export default App;
