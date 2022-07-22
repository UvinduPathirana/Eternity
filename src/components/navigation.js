import React from "react";
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Navigation () {
    return (
<div class="app-header header-shadow">
            <div class="app-header__logo">
                <div class="logo-src"></div>
                <div class="header__pane ms-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="app-header__mobile-menu">
                <div>
                    <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="app-header__menu">
                <span>
                    <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span class="btn-icon-wrapper">
                            <i class="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>    <div class="app-header__content">
                <div class="app-header-left">
                    <div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search"/>
                            <button class="search-icon"><span></span></button>
                        </div>
                    </div>
                    <ul class="header-menu nav">
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-database"> </i>
                                Statistics
                            </a>
                        </li>
                        <li class="btn-group nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-edit"></i>
                                Projects
                            </a>
                        </li>
                        <li class="dropdown nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                                <i class="nav-link-icon fa fa-cog"></i>
                                Settings
                            </a>
                        </li>
                    </ul>        </div>
                <div class="app-header-right">
                    <div class="header-btn-lg pe-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                    <div class="btn-group">
                                        <a data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                            <img width="42" class="rounded-circle" src="assets/images/avatars/1.jpg" alt=""/>
                                            <i class="fa fa-angle-down ms-2 opacity-8"></i>
                                        </a>
                                        <div tabIndex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabIndex="0" class="dropdown-item">User Account</button>
                                            <button type="button" tabIndex="0" class="dropdown-item">Settings</button>
                                            <h6 tabIndex="-1" class="dropdown-header">Header</h6>
                                            <button type="button" tabIndex="0" class="dropdown-item">Actions</button>
                                            <div tabIndex="-1" class="dropdown-divider"></div>
                                            <button type="button" tabIndex="0" class="dropdown-item">Dividers</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content-left  ms-3 header-user-info">
                                    <div class="widget-heading">
                                        Alina Mclourd
                                    </div>
                                    <div class="widget-subheading">
                                        VP People Manager
                                    </div>
                                </div>
                                <div class="widget-content-right header-user-info ms-3">
                                    <button type="button" class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                        <i class="fa text-white fa-calendar pe-1 ps-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>        </div>
            </div>
        </div>
    )
}

export default Navigation;