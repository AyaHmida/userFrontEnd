import React from 'react'
import { Link } from 'react-router-dom';

export default function register() {
  return (
    <div>
    <a href="javascript:void(0)" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a>
    <section class="log-reg register reg-2">
        <div class="overlay">
            <div class="container">
                <div class="top-head-area">
                    <div class="row d-flex align-items-center">
                        <div class="col-sm-5 col">
                            <Link class="back-home" to="/">
                                <img src="assetsHome/img/left-icon.png" alt="image"/>
                                Retour à StartInvest
                            </Link>
                        </div>

                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-5">
                        <div class="img-area">
                            <img src="assetsHome/img/login-bg-2.png" alt="image"/>
                        </div>
                    </div>
                    <div class="col-lg-6 z-1 text-center d-flex justify-content-center pb-120">
                        <div class="form-box">
                            <h4>S’inscrire sur StartInvest</h4>
                            <p class="alr-acc dont-acc">Vous avez déjà un compte ?<Link to="/login">Connectez-vous maintenant.</Link></p>
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
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="text" placeholder="Nom"/>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="text" placeholder="Prénom"/>
                                                </div>
                                            </div>
                                        </div>

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
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="password" class="passInput" placeholder="Confirmez votre mot de passe"/>
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

                                        </div>
                                        
                                        <div class="btn-area">
                                            <button class="cmn-btn">Inscrivez-vous maintenant</button>
                                        </div>
                                    </form>
                                    <div class="bottom-area">
                                        <div class="continue"><p>Ou continuez avec</p></div>
                                        <div class="login-with d-flex align-items-center">
                                            <a href="javascript:void(0)"><img src="assetsHome/img/google.png" alt="image"/></a>
                                            <a href="javascript:void(0)"><img src="assetsHome/img/fb.png" alt="image"/></a>
                                        </div>
                                    </div>
                                    <div class="privacy">
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                                    <form action="#">
                                    <div class="row">
                                            <div class="col-6">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="text" placeholder="Nom"/>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="text" placeholder="Prénom"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">

                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="email" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="single-input country-code d-flex align-items-center">
                                                    <select>
                                                        <option value="1">+ 216</option>
                                                        <option value="2">+ 82</option>
                                                        <option value="2">+ 34</option>
                                                    </select>
                                                    <input type="number" placeholder="0000 0000"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="password" class="passInput" placeholder="Mot de passe"/>
                                                    <img class="showPass" src="assetsHome/img/show-hide.png" alt="image"/>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="single-input d-flex align-items-center">
                                                    <input type="password" class="passInput" placeholder="Confirmez votre mot de passe"/>
                                                    <img class="showPass" src="assetsHome/img/show-hide.png" alt="image"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-area">
                                            <button class="cmn-btn">Inscrivez-vous maintenant</button>
                                        </div>
                                    </form>
                                    <div class="bottom-area">
                                        <div class="continue"><p>Ou continuez avec</p></div>
                                        <div class="login-with d-flex align-items-center">
                                            <a href="javascript:void(0)"><img src="assetsHome/img/google.png" alt="image"/></a>
                                            <a href="javascript:void(0)"><img src="assetsHome/img/fb.png" alt="image"/></a>
                                        </div>
                                    </div>

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
