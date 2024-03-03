import React from 'react'
import "./publication.css";
import { Link } from 'react-router-dom';

function header() {
  return (
    <div>
    <header className="fixed-header ">
    <div className="header-menu" id="header-color">
        <div className="navbar" >
            <div className="nav-item d-none d-sm-block">
                <div className="header-logo">
                    <a href="index-2.html"><img src="media/logo.png"/></a>
                </div>
            </div>
            <div className="nav-item nav-top-menu">
                <nav id="dropdown" className="template-main-menu">
                    <ul className="menu-content">
                        <li className="header-nav-item">
                            <Link to="/" className="menu-link active">Accueil</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="nav-item header-control" >
                <div className="inline-item d-none d-md-block" >
                    <div className="input-group" id="header-color">
                        <input type="text" className="form-control" placeholder="Rechercher ici......."/>
                        <div className="input-group-append">
                            <button className="submit-btn" type="button" id="header-color"><i className="icofont-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-notification" >
                    <button  style={{ color: 'white' }} className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        <i className="icofont-notification"></i><span className="notify-count">3</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="item-heading">
                            <h6 className="heading-title">Notifications</h6>
                            <div className="heading-btn">
                                <a href="#">Paramètres</a>
                                <a href="#">Marquer tout comme lu</a>
                            </div>
                        </div>
                        <div className="item-body">
                            <a href="#" className="media">
                                <div className="item-img">
                                    <img src="media/figure/notifiy_1.png"  />
                                </div>
                                <div className="media-body">
                                    <h6 className="item-title">Diana Jameson</h6>
                                    <div className="item-time">15 mins ago</div>
                                    <p>when are nknowen printer took galley of types ...</p>
                                </div>
                            </a>
                            <a href="#" className="media">
                                <div className="item-img">
                                    <img src="media/figure/notifiy_2.png"  />
                                </div>
                                <div className="media-body">
                                    <h6 className="item-title">Quirty</h6>
                                    <div className="item-time">15 mins ago</div>
                                    <p>when are nknowen printer took galley of types ...</p>
                                </div>
                            </a>
                            <a href="#" className="media">
                                <div className="item-img">
                                    <img src="media/figure/notifiy_3.png" />
                                </div>
                                <div className="media-body">
                                    <h6 className="item-title">Zinia Jessy</h6>
                                    <div className="item-time">15 mins ago</div>
                                    <p>when are nknowen printer took galley of types ...</p>
                                </div>
                            </a>
                        </div>
                        <div className="item-footer">
                            <a href="#" className="view-btn">Voir toutes les notifications</a>
                        </div>
                    </div>
                </div>
                <div className="inline-item">
                    <div className="dropdown dropdown-admin">
                        <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            <span className="media">
                                <span className="item-img">
                                    <img src="media/figure/chat_5.jpg" />
                                    <span className="acc-verified"><i className="icofont-check"></i></span>
                                </span>
                                <span className="media-body">
                                    <span className="item-title">Chayma</span>
                                </span>
                            </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <ul className="admin-options">
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Paramètres</a></li>
                                <li><a href="login.html">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

    </div>

  )
}

export default header