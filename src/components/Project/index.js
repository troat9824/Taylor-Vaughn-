import React from 'react';
import barterPhoto from '../../assets/large/barter-up-screenshot.jpg'
import BrewNearYou from '../../assets/large/brew-near-you.jpg'
import lexiconne from '../../assets/large/l-exiconne-screenshot.jpg'
import passwordGenerator from '../../assets/large/password-generator.jpg'
import runBuddy from '../../assets/large/run-buddy-photo.jpg'
import scheduler from '../../assets/large/scheduler-screenshot.jpg'
import codeQuiz from '../../assets/large/screenshot for code-quiz.jpg'
import taskinator from '../../assets/large/taskinator-screenshot.jpg'
import weatherApp from '../../assets/large/weather-app-screenshot.jpg'

function Project() {
    return (
        <section id="Work-ive-done" class="projects">
        <div>
            <h2>What I've Worked On</h2>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={barterPhoto} class="projects-img"/>
                <h3><a href="https://stark-plateau-45861.herokuapp.com/" target="_blank" rel="noreferrer">BarterUp</a></h3>
                <p>
                    A place to trade or rent your items to other people. <br/>
                    Have you ever needed to rent a car for a day, but didn't want to pay rental prices? <br/>
                    Or maybe you have an electric guitar, and want to trade for an acoustic. <br/>
                    Whatever the case may be, check BarterUp to see if there's anyone in your area willing to barter with you!
                </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={weatherApp} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/What-s-the-Weather-/" target="_blank" rel="noreferrer">What's The Weather</a></h3>
                <p>
                    Check out the weather in different parts of the world!
                </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={lexiconne} class="projects-img"/>
                <h3><a href="https://github.com/troat9824/L-exiconne" target="_blank" rel="noreferrer">L'exiconne</a></h3>
                    <p>
                        Have you ever needed a dictionary for words you've heard but don't remember? Enter L'exiconne! <br/>
                        L'exiconne is a flexible, personal lexicon. Use it to keep up with slang, or words you've heard in other languages.<br/>
                        You can even make up your own words! Just sign in and add to your lexicon! <br/>
                    </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={runBuddy} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/run-buddy/" target="_blank" rel="noreferrer">Run Buddy</a></h3>
                    <p>
                        Run Buddy is a company that matches trainers with clients wanting to run. <br/>
                        They needed a landing page to start a marketing campaign, as well as a privacy policy page. <br/>
                    </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={BrewNearYou} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/Brew-Near-You/" target="_blank" rel="noreferrer">Brew Near You</a></h3>
                <p>
                    Brew Near You is a website to help assist you in finding a brewery or bar near your location.
                </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={passwordGenerator} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/Lets-Make-A-Password/" target="_blank" rel="noreferrer">Let's Make A Password</a></h3>
                <p>
                    Do you ever find you're in need of a random password for high security needs, but don't know where to start? <br/>
                    Enter your desired number of characters and whether your new password will contain uppercase, lowercase, numbers or special characters, <br/>
                    then let the password generator do it's thing! 
                </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={codeQuiz} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/How-Much-Do-You-Know/" target="_blank" rel="noreferrer">How Much Do You Know?</a></h3>
                <p>
                    How much do you really know about basic coding? Want to test your abilities?<br/>
                    Take a small quiz in 90 seconds, and see what you can do!
                </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={scheduler} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/A-Schedule-For-You/" target="_blank" rel="noreferrer">A Schedule For You</a></h3>
                <p>
                    Is your work day complicated? Do you find yourself missing deadlines and forgetting what you need to do?<br/>
                    Here's a scheduler you can personalize for your work day! Never forget anything again!
                </p>
            </div>
        </div>
        <div class="projects-flex">
            <div class="projects-container">
                <img src={taskinator} class="projects-img"/>
                <h3><a href="https://troat9824.github.io/taskinator-2022/" target="_blank" rel="noreferrer">Taskinator 2022</a></h3>
                <p>
                    Need a to do list for more than just the day? Want to be able to put items in review, or show when you've completed them?<br/>
                    You can easily do so with the Taskinator. Just add a task at the top right, and drag it around wherever you need to.
                </p>
            </div>
        </div>

    </section>
    )
}

export default Project;