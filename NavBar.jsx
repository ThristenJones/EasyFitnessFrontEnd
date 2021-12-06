import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
   return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to ="/">EasyFitness</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/login">Log in</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/logout">Log out</Link>
        </li>
      </ul>
     EASYFITNESS
    </div>
  </div>
</nav>
   )
}

export default NavBar