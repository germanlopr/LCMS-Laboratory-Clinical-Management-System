import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import PatientList from './components/PatientList';
import PatientForm from './components/PatientForm';
import ServiceOrderList from './components/ServiceOrderList';
import ServiceOrderForm from './components/ServiceOrderForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Lab Management System</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path="/" component={PatientList} />
          <Route path="/patients/new" component={PatientForm} />
          <Route path="/service-orders" component={ServiceOrderList} />
          <Route path="/service-orders/new" component={ServiceOrderForm} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;