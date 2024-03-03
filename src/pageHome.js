import React from 'react'
import { Link } from 'react-router-dom';


function pageHome() {
  return (
<div>
    <a href="javascript:void(0)" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a>
    <header class="header-section">
        <div class="overlay">
            <div class="container">
                <div class="row d-flex header-area">
                    <nav class="navbar d-flex navbar-expand-lg navbar-dark">
                        <a class="navbar-brand" href="index-2.html">
                            <img src="assetsHome/img/logo.png" class="logo" alt="logo"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">


                            </ul>
                            <div class="right-area header-action d-flex align-items-center">

                                <Link to="/login" className="cmn-btn login">Se connecter</Link>
                                <Link to="/register" className="cmn-btn">S'inscrire</Link>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <section class="banner-section index-8">
        <div class="overlay">
            <div class="banner-content pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-10">
                            <div class="main-content">
                                <h1>Start</h1>
                                    <h1>Invest</h1> 
                                <p class="xxlr">Investir dans des start-ups peut être un défi, mais avec une plateforme transparente et efficace, tout devient plus simple !</p>
                                <Link to="/register" class="cmn-btn">Démarrer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="start-earning">
        <div class="overlay pt-120 pb-120">
            <div class="container">
                <div class="main-content">
                    <div class="row">
                        <div class="col-lg-6 cus-order d-flex align-items-center">
                            <div class="img-area text-center">
                                <img src="assetsHome/img/faq-right-sec.png" alt="image"/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="section">
                                <h2 class="title">Pourquoi StartInvest ?</h2>
                                   <p>Nous facilitons la collaboration entre startups et investisseurs en créant un écosystème transparent et efficace.</p>                          
                                <Link to="/login" class="cmn-btn">Lancer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer class="footer-section inner">
    
        <div class="footer-bottom">
            <div class="container">
                <div class="main-content">
                    <div class="row d-flex align-items-center">
                        
                        <div class="col-lg-6 col-md-8 cus-order d-flex justify-content-md-start justify-content-center">
                            <div class="left-area">
                                <p class="mdr">StartInvest © 2024.  
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                            <div class="right-area">
                                <div class="social">
                                    <ul class="d-flex">
                                        <li><a href="javascript:void(0)"><img src="assetsHome/img/facebook.png"
                                                    alt="icon"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default pageHome;