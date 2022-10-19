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
        <section id="portfolio" className="box m-3 mt-5 pink-background projects">
            <h2 className="subtitle is-3 has-text-centered dark-font">
                Portfolio
            </h2>
    
            <div className="projects">
                {/* <article className="box light-background project">
                    <a href="REPLACE" target="_blank" className="light-background"> 
                        <h4 className="subtitle is-5 has-text-centered light-background dark-font">
                            Assassination: Between Two Kingdoms, A Multi-Player Game (Version 2)
                        </h4>
                        <img src={ assassinationImg } className="screenshot" />
                    </a>
                    <div className="has-text-right light-background">
                        <a href="https://assassination-react.herokuapp.com/" target="_blank" className="light-background">
                            <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background"/>
                        </a>
                        <a href="https://github.com/jeremy0anderson/Assassination-v2" target="_blank" className="light-background">
                            <img src="https://img.icons8.com/ios/40/000000/github--v1.png" className="light-background"/>
                        </a>
                    </div>
                </article>

                <article className="box light-background project">
                    <a href="https://assassination-multiplayer.herokuapp.com/home" target="_blank" className="light-background"> 
                        <h4 className="subtitle is-5 has-text-centered light-background dark-font">
                            Assassination: Between Two Kingdoms, A Multi-Player Game
                        </h4>
                        <img src={ assassinationImg } className="screenshot" />
                    </a>
                    <div className="has-text-right light-background">
                        <a href="https://assassination-multiplayer.herokuapp.com/home" target="_blank" className="light-background">
                            <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background"/>
                        </a>
                        <a href="https://github.com/jeremy0anderson/shiny-octo-chainsaw" target="_blank" className="light-background">
                            <img src="https://img.icons8.com/ios/40/000000/github--v1.png" className="light-background"/>
                        </a>
                    </div>
                </article> */}

                <article className="box light-background project">
                    <a href="https://lillylav.github.io/brain-food/" target="_blank" className="light-background">
                        <h4 className="subtitle is-5 has-text-centered dark-font light-background">
                            Brain Food: An Entertainment Search Web Application
                        </h4> 
                        <img src={ brainFoodImg } className="screenshot" />                      
                    </a>
                    <a href="https://lillylav.github.io/brain-food/" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background" />
                    </a>
                    <a href="https://github.com/lillylav/brain-food" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/ios/40/000000/github--v1.png"className="light-background" />
                    </a>
                </article>

                <article className="box light-background project">
                    <a href="https://lillylav.github.io/weather-dashboard/" target="_blank" className="light-background">
                        <h4 className="subtitle is-5 has-text-centered dark-font light-background">
                            Weather Dashboard: A Weather Conditions Search Application
                        </h4>
                        <img src={ weatherDashImg } className="screenshot" />
                    </a>
                    <a href="https://lillylav.github.io/weather-dashboard/" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background" />
                    </a>
                    <a href="https://github.com/lillylav/weather-dashboard" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/ios/40/000000/github--v1.png"className="light-background" />
                    </a>
                </article>

                <article className="box light-background project">
                    <a href="https://lillylav.github.io/password/" target="_blank" className="light-background">
                        <h4 className="subtitle is-5 has-text-centered dark-font light-background">
                            Password Generator: With Custom Length and Character Type Selection
                        </h4>
                        <img src={ passwordImg } className="screenshot" />
                    </a>
                    <a href="https://lillylav.github.io/password/" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background" />
                    </a>
                    <a href="https://github.com/lillylav/password" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/ios/40/000000/github--v1.png" className="light-background" />
                    </a>
                </article>

                <article className="box light-background project">
                    <a href="https://lillylav.github.io/daily-calendar/" target="_blank" className="light-background">
                        <h4 className="subtitle is-5 has-text-centered dark-font light-background">
                            Work Day Calendar: An Responsive Daily Calendar
                        </h4>
                        <img src={ dailyCalendarImg } className="screenshot" />
                    </a>
                    <a href="https://lillylav.github.io/daily-calendar/" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background" />
                    </a>
                    <a href="https://github.com/lillylav/daily-calendar" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/ios/40/000000/github--v1.png" className="light-background" />
                    </a>
                </article>

                <article className="box light-background project">
                    <a href="https://lillylav.github.io/git-it-done/" target="_blank" className="light-background">
                        <h4 className="subtitle is-5 has-text-centered dark-font light-background">
                            Git-It-Done: An Application to Search Github for Projects With Open Issues
                        </h4>
                        <img src={ gitItDoneImg } className="screenshot" />
                    </a>
                    <a href="https://lillylav.github.io/git-it-done/" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background" />
                    </a>
                    <a href="https://github.com/lillylav/git-it-done" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/ios/40/000000/github--v1.png" className="light-background" />
                    </a>
                </article>

                <article className="box light-background project">
                    <a href="https://lillylav.github.io/taskmaster-pro/" target="_blank" className="light-background">
                        <h4 className="subtitle is-5 has-text-centered dark-font light-background">
                            Taskmaster Pro: A Kanban-Style Task List Application
                        </h4>
                        <img src={ taskmasterProImg } className="screenshot" />
                    </a>
                    <a href="https://lillylav.github.io/taskmaster-pro/" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/carbon-copy/50/000000/domain.png" className="light-background" />
                    </a>
                    <a href="https://github.com/lillylav/taskmaster-pro" target="_blank" className="light-background">
                        <img src="https://img.icons8.com/ios/40/000000/github--v1.png" className="light-background" />
                    </a>
                </article>
            </div>
        </section>
    )
};

export default Portfolio;