import React from 'react'
import "./publication";
function sidebar() {
  return (
    <div>
        <div className="fixed-sidebar"  >
    <div className="fixed-sidebar-left small-sidebar">
        <div className="sidebar-toggle" id="sidebar-color">
            <button className="toggle-btn toggler-open" >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div className="sidebar-menu-wrap" >
            <div className="mCustomScrollbar" data-mcs-theme="dark" data-mcs-axis="y" >
                <ul className="side-menu">
                    <br/>
        
                    <li><a href="newsfeed.html" className="menu-link" data-toggle="tooltip" data-placement="right" title=" PUBLICATIONS"><i className="icofont-newspaper"></i></a></li>
                    <li><a href="user-timeline.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="STARTUPS"><i className="icofont-list"></i></a></li>
                    <li><a href="user-groups.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="INVESTISSEURS"><i className="icofont-users-alt-2"></i></a></li>
                    <li><a href="user-friends.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="AMIS"><i className="icofont-users-alt-4"></i></a></li>
                    <li><a href="user-video.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="VIDEOS"><i className="icofont-play-alt-1"></i></a></li>
                    <li><a href="#" className="menu-link" data-toggle="tooltip" data-placement="right" title="CALENDRIER"><i className="icofont-calendar"></i></a></li>
                    <li><a href="forums-timeline.html" className="menu-link" data-toggle="tooltip" data-placement="right" title="MESSAGES"><i className="icofont-ui-text-chat"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="fixed-sidebar-left large-sidebar">
        <div className="sidebar-toggle" id="sidebar-color">
            <div className="sidebar-logo">
                <a href="index-2.html"><img src="media/logo2.png" alt="Logo"/></a>
            </div>
            <button className="toggle-btn toggler-close">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div className="sidebar-menu-wrap" >
            <div className="mCustomScrollbar" data-mcs-theme="dark" data-mcs-axis="y">
                <ul className="side-menu">
                    <li><a href="newsfeed.html" className="menu-link"><i className="icofont-newspaper"></i><span className="menu-title">Publications</span></a></li>
                    <li><a href="user-timeline.html" className="menu-link"><i className="icofont-list"></i><span className="menu-title">Startups</span></a></li>
                    <li><a href="user-groups.html" className="menu-link"><i className="icofont-users-alt-2"></i><span className="menu-title">Amis</span></a></li>
                    <li><a href="user-friends.html" className="menu-link"><i className="icofont-users-alt-4"></i><span className="menu-title">Investisseurs</span></a></li>
                    <li><a href="user-video.html" className="menu-link"><i className="icofont-play-alt-1"></i><span className="menu-title">Videos</span></a></li>
                    <li><a href="forums-timeline.html" className="menu-link"><i className="icofont-ui-text-chat"></i><span className="menu-title">Messages</span></a></li>
                </ul>
                <ul className="top-menu-mobile">
                    <li className="menu-label">Community</li>
                    <li>
                        <a href="user-about.html" className="menu-link">Profile About</a>
                    </li>
                    <li>
                        <a href="user-badges.html" className="menu-link">Profile Badges</a>
                    </li>
                    <li>
                        <a href="forums.html" className="menu-link">Forums</a>
                    </li>
                    <li>
                        <a href="forums-forum.html" className="menu-link">Forums Topic</a>
                    </li>
                    <li>
                        <a href="forums-info.html" className="menu-link">Forums Info</a>
                    </li>
                    <li>
                        <a href="forums-members.html" className="menu-link">Forums Members</a>
                    </li>
                    <li>
                        <a href="forums-media.html" className="menu-link">Forums Media</a>
                    </li>
                    <li className="menu-label">Pages</li>
                    <li>
                        <a href="about-us.html" className="menu-link">About</a>
                    </li>
                    <li>
                        <a href="user-blog.html" className="menu-link">Blog</a>
                    </li>
                    <li>
                        <a href="shop.html" className="menu-link">Shop</a>
                    </li>
                    <li>
                        <a href="single-blog.html" className="menu-link">Blog Details</a>
                    </li>
                    <li>
                        <a href="single-shop.html" className="menu-link">Shop Details</a>
                    </li>
                    <li>
                        <a href="contact.html" className="menu-link">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default sidebar