import React, { Component } from "react";
import firebase from "firebase/app";
import Header from "./headerComponents/Header";
import Viewer from "./viewerComponents/Viewer";

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDuF9cTmjQ-TLudImXudbsM0NhhnIYhPo4",
      authDomain: "weatherviewer-fe811.firebaseapp.com",
      databaseURL: "https://weatherviewer-fe811.firebaseio.com",
      projectId: "weatherviewer-fe811",
      storageBucket: "weatherviewer-fe811.appspot.com",
      messagingSenderId: "268643853160"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Viewer />
        </div>
        <div>
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
}

export default App;
