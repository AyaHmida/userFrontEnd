import React from 'react';
import "./publication.css";
import Header from './header'; 
import Sidebar from './sidebar'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
<div>
<Header />
<Sidebar/>
<a href="#wrapper" data-type="section-switch" className="scrollup">
        <i className="icofont-bubble-up"></i>
    </a>
    <div id="wrapper" className="wrapper">

        <div className="page-content">
                <div className="newsfeed-banner" id="newsfeed">
                    <div className="media">
                        <div className="item-icon">
                            <i className="icofont-megaphone-alt"></i>
                        </div>
                        <div className="media-body">
                            <h3 className="item-title">Membres StartInvest</h3>
                        </div>
                    </div>
                    <ul className="animation-img">
                        <li data-sal="slide-down" data-sal-duration="800" data-sal-delay="400"><img src="media/banner/shape_7.png" alt="shape"/></li>
                        <li><img src="media\banner\people_2.png" alt="shape"/></li>
                    </ul>
                </div>
                <div className="newsfeed-search">
                    <ul className="member-list">
                        <li className="active-member">
                            <a href="#">
                                <span className="member-icon">
                                    <i className="icofont-users"></i>
                                </span>
                                <span className="member-text">
                                    Totale de membres:
                                </span>
                                <span className="member-count">08</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="search-list">
                        <li className="search-filter">
                            <button className="drop-btn" type="button">
                                <i className="icofont-abacus-alt"></i>
                            </button>
                            <div className="drop-menu">
                                <select className="select2">
                                    <option>--Everything--</option>
                                    <option>Status</option>
                                    <option>Quotes</option>
                                    <option>Photos</option>
                                    <option>Videos</option>
                                    <option>Audios</option>
                                    <option>slideshows</option>
                                    <option>files</option>
                                    <option>Updates</option>
                                    <option>New Members</option>
                                    <option>Posts</option>
                                    <option>New Groups</option>
                                </select>
                            </div>
                        </li>
                        <li className="search-input">
                            <button className="drop-btn" type="button">
                                <i className="icofont-search"></i>
                            </button>
                            <div className="drop-menu">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search...."/>
                                    <div className="input-group-append">
                                        <button className="search-btn" type="button"><i className="icofont-search-1"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="block-box post-input-tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation" data-toggle="tooltip" data-placement="top" >
                                    <a className="nav-link active" data-toggle="tab" href="#post-status" role="tab" aria-selected="true"><i className="icofont-copy"></i>Status</a>
                                </li>
                                <li className="nav-item" role="presentation" data-toggle="tooltip" data-placement="top">
                                    <a className="nav-link" data-toggle="tab" href="#post-media" role="tab" aria-selected="false"><i className="icofont-image"></i>Photo/ Video Album</a>
                                </li>

                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="post-status" role="tabpanel">
                                    <textarea name="status-input" id="status-input1" className="form-control textarea" placeholder="Partagez vos réflexions avec nous..." cols="30" rows="6"></textarea>
                                </div>
                                <div className="tab-pane fade" id="post-media" role="tabpanel">
                                    <textarea name="status-input" id="status-input2" className="form-control textarea" placeholder="Partagez vos réflexions avec nous..." cols="30" rows="6"></textarea>
                                </div>
                                <div className="tab-pane fade" id="post-blog" role="tabpanel">
                                    <textarea name="status-input" id="status-input3" className="form-control textarea" placeholder="Partagez vos réflexions avec nous..." cols="30" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="post-footer">
                                <div className="insert-btn">
                                    <a href="#"><i className="icofont-photobucket"></i></a>
                                    <a href="#"><i className="icofont-tags"></i></a>
                                    <a href="#"><i className="icofont-location-pin"></i></a>
                                </div>
                                <div className="submit-btn">
                                    <a href="#" id="publier_color">Publier</a>
                                </div>
                            </div>
                        </div>
                        <div className="block-box post-view">
                            <div className="post-header">
                                <div className="media">
                                    <div className="user-img">
                                        <img src="media/figure/chat_10.jpg" alt="Aahat"/>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-title"><a href="user-timeline.html">Aahat Akter</a> <i className="icofont-check"></i> posted in the group <a href="#">Tourist Guide</a> </div>
                                        <ul className="entry-meta">
                                            <li className="meta-privacy"><i className="icofont-world"></i> Public</li>
                                            <li className="meta-time">2 mins ago</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-body">
                                <p>Dhaka is wonderful no matter what! <i className="icofont-wink-smile"></i></p>
                                <div className="post-img">
                                    <img src="media/figure/post_1.jpg" alt="Post"/>
                                </div>
                                <div className="post-meta-wrap">
                                    <div className="post-meta">
                                        <div className="post-reaction">
                                            <div className="reaction-icon">
                                                <img src="media/figure/reaction_1.png" alt="icon"/>
                                                <img src="media/figure/reaction_2.png" alt="icon"/>
                                            </div>
                                            <div className="meta-text">15</div>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="meta-text">2 Comments</div>
                                        <div className="meta-text">05 Share</div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-footer">
                                <ul>
                                    <li className="post-react">
                                        <a href="#"><i className="icofont-thumbs-up"></i>React!</a>
                                        <ul className="react-list">
                                            <li><a href="#"><img src="media/figure/reaction_1.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_2.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_4.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_2.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_7.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_6.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_5.png" alt="Like"/></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="icofont-comment"></i>Comment</a></li>
                                    <li className="post-share">
                                        <a  className="share-btn"><i className="icofont-share"></i>Share</a>
                                        <ul className="share-list">
                                            <li><a href="#" className="color-fb"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="#" className="color-messenger"><i className="icofont-facebook-messenger"></i></a></li>
                                            <li><a href="#" className="color-instagram"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="#" className="color-whatsapp"><i className="icofont-brand-whatsapp"></i></a></li>
                                            <li><a href="#" className="color-twitter"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-box post-view">
                            <div className="post-header">
                                <div className="media">
                                    <div className="user-img">
                                        <img src="media/figure/chat_5.jpg" alt="Aahat"/>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-title"><a href="user-timeline.html">Jessica Rose</a> <i className="icofont-check"></i> and <a href="user-timeline.html">Aahat Akter <i className="icofont-check"></i> </a> are now friends</div>
                                        <ul className="entry-meta">
                                            <li className="meta-privacy"><i className="icofont-world"></i> Public</li>
                                            <li className="meta-time">3 Hrs ago</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-body">
                                <div className="post-friends-view">
                                    <div className="profile-thumb">
                                        <div className="cover-img">
                                            <img src="media/figure/post_2.jpg" alt="cover-pic"/>
                                        </div>
                                        <div className="media">
                                            <div className="profile-img">
                                                <a href="#"><img src="media/figure/post_3.jpg" alt="profile"/></a>
                                            </div>
                                            <div className="media-body">
                                                <div className="profile-name"><a href="#">Aahat Akter</a></div>
                                                <div className="user-name">@Aahat</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-box post-view">
                            <div className="post-header">
                                <div className="media">
                                    <div className="user-img">
                                        <img src="media/figure/chat_13.jpg" alt="Aahat"/>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-title"><a href="user-timeline.html">Julia Zessy</a> <i className="icofont-check"></i> uploaded <a href="#">10 new photos</a> </div>
                                        <ul className="entry-meta">
                                            <li className="meta-privacy"><i className="icofont-world"></i> Public</li>
                                            <li className="meta-time">10 mins ago</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-body">
                                <p>Here are some of the photos from my last visit to Cox’s Bazar</p>
                                <ul className="post-img-list">
                                    <li><a href="#"><img src="media/figure/post_4.jpg" alt="Post"/></a></li>
                                    <li><a href="#"><img src="media/figure/post_5.jpg" alt="Post"/></a></li>
                                    <li><a href="#"><img src="media/figure/post_6.jpg" alt="Post"/></a></li>
                                    <li><a href="#"><img src="media/figure/post_7.jpg" alt="Post"/></a></li>
                                    <li><a href="#" data-photo="+5"><img src="media/figure/post_8.jpg" alt="Post"/></a></li>
                                </ul>
                                <div className="post-meta-wrap">
                                    <div className="post-meta">
                                        <div className="post-reaction">
                                            <div className="reaction-icon">
                                                <img src="media/figure/reaction_1.png" alt="icon"/>
                                                <img src="media/figure/reaction_2.png" alt="icon"/>
                                                <img src="media/figure/reaction_3.png" alt="icon"/>
                                            </div>
                                            <div className="meta-text">25</div>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="meta-text">2 Comments</div>
                                        <div className="meta-text">05 Share</div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-footer">
                                <ul>
                                    <li className="post-react">
                                        <a href="#"><i className="icofont-thumbs-up"></i>React!</a>
                                        <ul className="react-list">
                                            <li><a href="#"><img src="media/figure/reaction_1.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_2.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_4.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_2.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_7.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_6.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_5.png" alt="Like"
                                            /></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="icofont-comment"></i>Comment</a></li>
                                    <li className="post-share">
                                        <a className="share-btn"><i className="icofont-share"></i>Share</a>
                                        <ul className="share-list">
                                            <li><a href="#" className="color-fb"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="#" className="color-messenger"><i className="icofont-facebook-messenger"></i></a></li>
                                            <li><a href="#" className="color-instagram"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="#" className="color-whatsapp"><i className="icofont-brand-whatsapp"></i></a></li>
                                            <li><a href="#" className="color-twitter"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-box post-view">
                            <div className="post-header">
                                <div className="media">
                                    <div className="user-img">
                                        <img src="media/figure/chat_8.jpg" alt="Aahat"/>
                                    </div>
                                    <div className="media-body">
                                        <div className="user-title"><a href="user-timeline.html">Abul Hassan</a> <i className="icofont-check"></i> posted in the group <a href="user-single-group.html">Kito Development</a> </div>
                                        <ul className="entry-meta">
                                            <li className="meta-privacy"><i className="icofont-world"></i> Public</li>
                                            <li className="meta-time">10 mins ago</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                        ...
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Close</a>
                                        <a className="dropdown-item" href="#">Edit</a>
                                        <a className="dropdown-item" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                            <div className="post-body">
                                <p>This is a dream come true, thanks to all for the support!!!</p>
                                <div className="post-video">
                                    <img src="media/figure/post_9.jpg" alt="Post"/>
                                    <a href="#" className="video-btn"><i className="icofont-ui-play"></i></a>
                                </div>
                                <div className="post-meta-wrap">
                                    <div className="post-meta">
                                        <div className="post-reaction">
                                            <div className="reaction-icon">
                                                <img src="media/figure/reaction_1.png" alt="icon"/>
                                                <img src="media/figure/reaction_2.png" alt="icon"/>
                                                <img src="media/figure/reaction_3.png" alt="icon"/>
                                            </div>
                                            <div className="meta-text">50</div>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="meta-text">5 Comments</div>
                                        <div className="meta-text">02 Share</div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-footer">
                                <ul>
                                    <li className="post-react">
                                        <a href="#"><i className="icofont-thumbs-up"></i>React!</a>
                                        <ul className="react-list">
                                            <li><a href="#"><img src="media/figure/reaction_1.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_2.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_4.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_2.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_7.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_6.png" alt="Like"/></a></li>
                                            <li><a href="#"><img src="media/figure/reaction_5.png" alt="Like"/></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="icofont-comment"></i>Comment</a></li>
                                    <li className="post-share">
                                        <a  className="share-btn"><i className="icofont-share"></i>Share</a>
                                        <ul className="share-list">
                                            <li><a href="#" className="color-fb"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="#" className="color-messenger"><i className="icofont-facebook-messenger"></i></a></li>
                                            <li><a href="#" className="color-instagram"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="#" className="color-whatsapp"><i className="icofont-brand-whatsapp"></i></a></li>
                                            <li><a href="#" className="color-twitter"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-box load-more-btn" >
                            <a href="#" className="item-btn"><i className="icofont-refresh"></i>Charger plus de publications</a>
                        </div>

                </div>
            </div>




        </div>

        <div className="chat-live" id="message_color">
            <a className="chat-btn" href="#"  data-toggle="tooltip" >
                <i className="icofont-facebook-messenger" ></i></a>
                <span id="message_color" style={{ color: 'white' }}>07</span>
            </div>
            <div className="chat-box" >
            <div className="chat-head" id="message_color">
            <h4>Nouveaux messages</h4>
            <span className="clozed"><i className="icofont-close-circled" ></i></span>
            <form method="post">
            <input type="text" placeholder="À.."/>
            </form>
            </div>
            <div className="user-tabs">
            <ul className="nav nav-tabs">
            <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">Tous les amis</a></li>
            <li className="nav-item"><a className href="#link2" data-toggle="tab">Active</a><em>3</em></li>
            </ul>
            
            <div className="tab-content">
            <div className="tab-pane active fade show " id="link1">
            <div className="friend">
            <a href="#" title>
            <figure>
            <img src="images/resources/user1.jpg" alt/>
            <span className="status online"></span>
            </figure>
            <span>Oliver</span>
            <i className><img src="images/resources/user1.jpg" alt/></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user2.jpg" alt/>
            <span className="status away"></span>
            </figure>
            <span>Amelia</span>
            <i className="icofont-check-circled"></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user3.jpg"  />
            <span className="status offline"></span>
            </figure>
            <span>George</span>
            <i className><img src="images/resources/user3.jpg"  /></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user4.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>Jacob</span>
            <i className="icofont-check-circled"></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user5.jpg"  />
            <span className="status away"></span>
            </figure>
            <span>Poppy</span>
            <i className="icofont-check-circled"></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user6.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>Sophia</span>
            <i className><img src="images/resources/user6.jpg"  /></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user7.jpg"  />
            <span className="status away"></span>
            </figure>
            <span>Leo king</span>
            <i className><img src="images/resources/user7.jpg"  /></i>
            </a>
            </div>
            </div>
            <div className="tab-pane fade" id="link2">
            <div className="friend">
            <a href="#" title>
            <figure>
            <img src="images/resources/user1.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>Samu Jane</span>
            <i className><img src="images/resources/user1.jpg"  /></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user6.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>Tina Mark</span>
            <i className><img src="images/resources/user6.jpg"  /></i>
            </a>
            <a href="#" title>
            <figure>
            <img src="images/resources/user7.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>Ak William</span>
            <i className><img src="images/resources/user7.jpg"  /></i>
            </a>
            </div>
            </div>
            <div className="tab-pane fade" id="link3">
            <div className="friend">
            <a href="#" title>
            <figure className="group-chat">
            <img src="images/resources/user5.jpg"  />
            <img className="two" src="images/resources/user3.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>Boys World</span>
            <i className="icofont-check-circled"></i>
            </a>
            <a href="#" title>
            <figure className="group-chat">
            <img src="images/resources/user2.jpg"  />
            <img className="two" src="images/resources/user3.jpg"  />
            <span className="status online"></span>
            </figure>
            <span>KK university Fellows</span>
            <i className="icofont-check-circled"></i>
            </a>
            <a href="#" title>
            <figure className="group-chat">
            <img src="images/resources/user3.jpg"  />
            <img className="two" src="images/resources/user2.jpg"  />
            <span className="status away"></span>
            </figure>
            <span>Education World</span>
            <i className="icofont-check-circled"></i>
            </a>
            </div>
            </div>
            </div>
            </div>
            <div className="chat-card">
            <div className="chat-card-head">
            <img src="images/resources/user13.jpg"  />
            <h6>George Floyd</h6>
            <div className="frnd-opt">
            <div className="more">
            <div className="more-post-optns">
            <i className>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></i>
            <ul>
            <li>
            <i className="icofont-pen- -1"></i>Edit Post
            <span>Edit This Post within a Hour</span>
            </li>
            <li>
            <i className="icofont-ban"></i>Hide Chat
            <span>Hide This Post</span>
            </li>
            <li>
            <i className="icofont-ui-delete"></i>Delete Chat
            <span>If inappropriate Post By Mistake</span>
            </li>
            <li>
            <i className="icofont-flag"></i>Report
            <span>Inappropriate Chat</span>
            </li>
            </ul>
            </div>
            </div>
            <span className="close-mesage"><i className="icofont-close"></i></span>
            </div>
            </div>
            <div className="chat-list">
            <ul>
            <li className="me">
            <div className="chat-thumb"><img src="images/resources/chatlist1.jpg"  /></div>
            <div className="notification-event">
            <div className="chat-message-item">
            <figure><img src="images/resources/album5.jpg"  /></figure>
            <div className="caption">4.5kb <i className="icofont-download" title="Download"></i></div>
            </div>
            <span className="notification-date">
            <time      dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
            <i><img src="images/d-tick.png"  /></i>
            </span>
            </div>
            </li>
            <li className="me">
            <div className="chat-thumb"><img src="images/resources/chatlist1.jpg"  /></div>
            <div className="notification-event">
            <span className="chat-message-item">
            Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
            </span>
            <span className="notification-date">
            <time     dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
            <i><img src="images/d-tick.png"  /></i>
            </span>
            </div>
            </li>
            <li className="you">
            <div className="chat-thumb"><img src="images/resources/chatlist2.jpg"  /></div>
            <div className="notification-event">
            <span className="chat-message-item">
            Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
            </span>
            <span className="notification-date">
            <time     dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
            <i><img src="images/d-tick.png"  /></i>
            </span>
            </div>
            </li>
            <li className="me">
            <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" /></div>
            <div className="notification-event">
            <span className="chat-message-item">
            Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
            </span>
            <span className="notification-date">
            <time     dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
            <i><img src="images/d-tick.png"  /></i>
            </span>
            </div>
            </li>
            </ul>
            <form className="text-box">
            <textarea placeholder="Write Mesage..."></textarea>
            <div className="add-smiles">
            <span><img src="images/smiles/happy-3.png"  /></span>
            </div>
            <div className="smiles-bunch">
            <i><img src="images/smiles/thumb.png"  /></i>
            <i><img src="images/smiles/angry-1.png"  /></i>
            <i><img src="images/smiles/angry.png"  /></i>
            <i><img src="images/smiles/bored-1.png"  /></i>
            <i><img src="images/smiles/confused-1.png"  /></i>
            <i><img src="images/smiles/wink.png"  /></i>
            <i><img src="images/smiles/weep.png"  /></i>
            <i><img src="images/smiles/tongue-out.png"  /></i>
            <i><img src="images/smiles/suspicious.png"  /></i>
            <i><img src="images/smiles/crying-1.png"  /></i>
            <i><img src="images/smiles/crying.png"  /></i>
            <i><img src="images/smiles/embarrassed.png"  /></i>
            <i><img src="images/smiles/emoticons.png"  /></i>
            <i><img src="images/smiles/happy-2.png"  /></i>
            </div>

            <button type="submit"><i className="icofont-paper-plane"></i></button>
            </form>
            </div>
            </div>
            </div>
    </div>
    </div>
  );
};
export default Home;