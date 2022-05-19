// import libraries
import React from "react";

// import images
import assassinationImg from "../assets/img/projects/assassination.png";
import brainFoodImg from "../assets/img/projects/brain-food.png";
import weatherDashImg from "../assets/img/projects/weather.png";
import passwordImg from "../assets/img/projects/password.png";
import dailyCalendarImg from "../assets/img/projects/workday-calendar.png";
import gitItDoneImg from "../assets/img/projects/git-it-done.png";
import taskmasterProImg from "../assets/img/projects/taskmaster-pro.png";

function Portfolio() {
    return (
        <section id="portfolio" className="box m-3 lilly-light-background projects">
            <h2 className="subtitle is-3 has-text-centered lilly-dark-text">
                Portfolio
            </h2>
    
            <div className="projects">
                <article className="box lilly-dark-background project">
                    <a href="https://assassination-multiplayer.herokuapp.com/home" target="_blank"> 
                        <img src={ assassinationImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Assassination: Between Two Kingdoms, A Multi-Player Game
                        </h4>
                    </a>
                    <div className="has-text-right">
                        <a href="https://assassination-multiplayer.herokuapp.com/home" target="_blank">
                            <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                        </a>
                        <a href="https://github.com/jeremy0anderson/shiny-octo-chainsaw" target="_blank">
                            <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                        </a>
                    </div>
                </article>

                <article className="box lilly-dark-background project">
                    <a href="https://lillylav.github.io/brain-food/" target="_blank">
                        <img src={ brainFoodImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Brain Food: An Entertainment Search Web Application
                        </h4>                       
                    </a>
                    <a href="https://lillylav.github.io/brain-food/" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                    </a>
                    <a href="https://github.com/lillylav/brain-food" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                    </a>
                </article>

                <article className="box lilly-dark-background project">
                    <a href="https://lillylav.github.io/weather-dashboard/" target="_blank">
                        <img src={ weatherDashImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Weather Dashboard: A Weather Conditions Search Application
                        </h4>
                    </a>
                    <a href="https://lillylav.github.io/weather-dashboard/" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                    </a>
                    <a href="https://github.com/lillylav/weather-dashboard" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                    </a>
                </article>

                <article className="box lilly-dark-background project">
                    <a href="https://lillylav.github.io/password/" target="_blank">
                        <img src={ passwordImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Password Generator: With Custom Length and Character Type Selection
                        </h4>
                    </a>
                    <a href="https://lillylav.github.io/password/" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                    </a>
                    <a href="https://github.com/lillylav/password" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                    </a>
                </article>

                <article className="box lilly-dark-background project">
                    <a href="https://lillylav.github.io/daily-calendar/" target="_blank">
                        <img src={ dailyCalendarImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Work Day Calendar: An Responsive Daily Calendar
                        </h4>
                    </a>
                    <a href="https://lillylav.github.io/daily-calendar/" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                    </a>
                    <a href="https://github.com/lillylav/daily-calendar" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                    </a>
                </article>

                <article className="box lilly-dark-background project">
                    <a href="https://lillylav.github.io/git-it-done/" target="_blank">
                        <img src={ gitItDoneImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Git-It-Done: An Application to Search Github for Projects With Open Issues
                        </h4>
                    </a>
                    <a href="https://lillylav.github.io/git-it-done/" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                    </a>
                    <a href="https://github.com/lillylav/git-it-done" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                    </a>
                </article>

                <article className="box lilly-dark-background project">
                    <a href="https://lillylav.github.io/taskmaster-pro/" target="_blank">
                        <img src={ taskmasterProImg } className="screenshot" />
                        <h4 className="subtitle is-5 has-text-centered lilly-light-text">
                            Taskmaster Pro: A Kanban-Style Task List Application
                        </h4>
                    </a>
                    <a href="https://lillylav.github.io/taskmaster-pro/" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/domain.png"/>
                    </a>
                    <a href="https://github.com/lillylav/taskmaster-pro" target="_blank">
                        <img src="https://img.icons8.com/bubbles/50/000000/github.png"/>
                    </a>
                </article>
            </div>
        </section>
    )
};

export default Portfolio;