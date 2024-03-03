import React from 'react'
import { Link } from 'react-router-dom';

export default function login() {
  return (
    <div>
    <a href="javascript:void(0)" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a>
    <section class="log-reg login-2">
        <div class="overlay">
            <div class="container">
                <div class="top-head-area">
                    <div class="row d-flex align-items-center">
                        <div class="col-sm-5 col">
                        <Link to="/" className="back-home">
            <img src="assetsHome/img/left-icon.png" alt="image" />
            Retour à StartInvest
        </Link>
                        </div>

                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-5">
                        <div class="img-area">
                            <img src="assetsHome/img/login-bg-2.png" alt="image"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7 z-1 text-center d-flex justify-content-center pb-120">
                        <div class="form-box">
                            <h4>CONNECTEZ-VOUS À STARTINVEST</h4>
                            <p class="dont-acc">Vous n’avez pas de compte ? <Link to="/register" >Registre</Link></p> 
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="personal-tab" data-bs-toggle="tab"
                                        data-bs-target="#personal" type="button" role="tab" aria-controls="personal"
                                        aria-selected="true">Fondateur</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="business-tab" data-bs-toggle="tab" data-bs-target="#business"
                                        type="button" role="tab" aria-controls="business"
                                        aria-selected="false">Investisseur</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                                    <div class="login-with d-flex align-items-center">
                                        <a href="javascript:void(0)"><img src="assetsHome/img/google.png" alt="image"/></a>
                                        <a href="javascript:void(0)"><img src="assetsHome/img/fb.png" alt="image"/></a>
                                    </div>
                                    <div class="continue"><p>Ou continuez avec</p></div>
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="email" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="password" class="passInput" placeholder="Mot de passe"/>
                                                    <img class="showPass" src="assetsHome/img/show-hide.png" alt="image"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="remember-forgot d-flex justify-content-between">
                                            <div class="form-group d-flex">
                                                <div class="checkbox_wrapper" >
                                                    <input class="check-box" id="check1" type="checkbox"/>
                                                    <label></label>
                                                </div>
                                                <label for="check1"><span class="check_span">Se souvenir de moi</span></label>
                                            </div>
                                            <div class="forget-pw">
                                                <a href="javascript:void(0)">Mot de passe oublié ?</a>
                                            </div>
                                        </div>
                                        <div class="btn-area">
                                        <Link  class="cmn-btn" to="/publication" className="cmn-btn">S'identifier</Link>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                                    <div class="login-with d-flex align-items-center">
                                        <a href="javascript:void(0)"><img src="assetsHome/img/google.png" alt="image"/></a>
                                        <a href="javascript:void(0)"><img src="assetsHome/img/fb.png" alt="image"/></a>
                                    </div>
                                    <div class="continue"><p>Ou continuez avec</p></div>
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center"/>
                                                    <input type="email" placeholder="Business email"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="password" class="passInput" placeholder="Password"/>
                                                    <img class="showPass" src="assetsHome/img/show-hide.png" alt="image"/>
                                                </div>
                                            </div>
                                        <div class="remember-forgot d-flex justify-content-between">
                                            <div class="form-group d-flex">
                                                <div class="checkbox_wrapper" >
                                                    <input class="check-box" id="check2" type="checkbox"/>
                                                    <label></label>
                                                </div>
                                                <label for="check2"><span class="check_span">Se souvenir de moi</span></label>
                                            </div>
                                            <div class="forget-pw">
                                                <a href="javascript:void(0)">Mot de passe oublié ?</a>
                                            </div>
                                        </div>
                                        <div class="btn-area">
                                            <button class="cmn-btn">S'identifier</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
