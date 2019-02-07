import React, { Component } from "react"

class MenuSuperior extends Component{
    render(){
        return(
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <a className="navbar-brand" href="#">DeviMedia</a>
             <button className="navbar-toggler d-lg-none" type="button" 
             data-toggle="collapse" data-target="#navbarNav" 
             aria-controls="navbarNav"
                 aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNav">
                 <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li class="nav-item active">
                         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item">
                         <a class="nav-link" href="#">Link</a>
                     </li>
                     <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                         <div class="dropdown-menu" aria-labelledby="dropdownId">
                             <a class="dropdown-item" href="#">Action 1</a>
                             <a class="dropdown-item" href="#">Action 2</a>
                         </div>
                     </li>
                 </ul>              
             </div>
         </nav>
        )       
    }
}
export default MenuSuperior;