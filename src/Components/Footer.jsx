import React from 'react'

function Footer() {
    return (
        <div className="Foot">
                <div class="row footer-info">
                    <div class="col-md-4 col-sm-6" className="AllL">
                        <h4 class="heading">Quick Links</h4>
                        <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                        <a href="">Anime List</a>
                        <span class="glyphicon glyphicon-star-empty" aria-hidden="true">
                            </span><a href="">Popular Anime</a>
                            </div>
                            <div class="col-md-4 col-sm-6" className="SmallL">
                                <h4 class="heading">Site Links</h4>
                                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                                <a href="">Contact Us</a>
                                <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                <a href="">Privacy Policy</a>
                                <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                <a href="">Disclaimer</a>
                                </div>
                </div>
        </div>
    );
}

export default Footer
