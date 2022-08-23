import React from 'react';
import {Task} from "./components/tasks/Task";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RequireAuthUser} from "./components/RequireAuth/RequireAuthUser";
import {StudentCvView} from "./components/StudentCvView/StudentCvView";
import {MainLayout} from "./components/MainLayout/MainLayout";
import {LoginView} from "./components/LoginView/LoginView";
import {RegisterView} from "./components/RegisterView/RegisterView";
import {Calc} from "./components/Calc/Calc";

function App() {
  console.log('work')
  return (

    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="login" element={<LoginView/>}/>
        <Route
          path="register/:id/:verificationToken"
          element={<RegisterView/>}
        />

        {/*<Route path="send-email" element={<EmailPasswordRecoveryView />} />*/}

        {/*user auth require*/}
        <Route path="user" element={<RequireAuthUser/>}>
          <Route index element={<StudentCvView/>}/>
          <Route path="task" element={<Task/>}/>
        </Route>
        {/*Calc require*/}
        <Route path="calc" element={<Calc/>}/>
      </Route>
    </Routes>

  );
}

export default App;
