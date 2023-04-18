const inquirer = require("inquirer");
const fs = require("fs");
//const html = require ('./template.js');

inquirer
    .prompt([
        {
            name: "firstName",
            type: "input",
            message: "First Name: ",
        },
        {
            type: "input",
            name: "lastName",
            message: "Last Name: ",
        },
        {
            type: "input",
            name: "location",
            message: "Where do you live?",
        },
        {
            type: "input",
            name: "bio",
            message: "Tell us about yourself",
        },
        {
            type: "input",
            name: "linkedin",
            message: "Enter your Linkedin URL: ",
        },
        {
            type: "input",
            name: "github",
            message: "Enter your Github URL: ",
        },
    ])
    .then((answers) => {
        //const { firstName, lastName, location, bio, linkedin, github } = answers;
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>${answers.firstName} ${answers.lastName} - Front End Developer</title>
</head>
<body>
<div class="wrapper"><!-- Grid House -->

<header class="header">
    <div class="header-name"><h1>${answers.lastName}</h1>
    </div>
</header> <!-- Grid Template Area: Header-->

    <nav class="nav"> <!-- Grid Template Area: Nav-->
        <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact me</a></li>
            <li><a href="#">Resume</a></li>
        </ul>
    </nav>


    <section class="subtitle"> <!-- Grid Template Area: subtitle, spans across whole page-->
        <div class="subtitle-inner">
        <h3><q>The only time I set the bar low is for limbo.</q></h3>
        <p>- Michael Scott</p>
        </div>
    </section>

    <aside class="about" id="about"> <!-- Grid Template Area: about - left side on big window-->
        <h2>About<br />Me</h2>
    </aside>

    <section class="bio"> <!-- Grid Template Area: bio - right side on big window-->
        ${answers.bio}
        <img src="./assets/images/jeff.jpg" alt="Jeff Zenko with a fresh haircut" />
    </section>
    <aside class="work" id="work"><!-- Grid Template Area: work = left side on big window-->
        <h2>Work</h2>
    </aside>
    <section class="work-content"><!-- Grid Template Area: work-area - right hand side on big window-->
            <div class="item">
                <a href="#" target="_blank"><img src="https://via.placeholder.com/820x365"></a>
                <div class="label">
                <h4>Grappling Camps</h4>
                <div class="description">Wordpress</div>
                </div>
            </div>
            <div class="item">
                <a href="#" target="_blank"><img src="https://via.placeholder.com/820x365"></a>
                <div class="label">
                <h4>Book.It</h4>
                <div class="description">Javascript, Bulma</div>
                </div>
            </div>
            <div class="item">
                <a href="#" target="_blank"><img src="https://via.placeholder.com/820x365"></a>
                <div class="label">
                <h4>Project Parrot</h4>
                <div class="description">Express, NodeJS</div>
                </div>
            </div>
            <div class="item">
                <a href="#" target="_blank"><img src="https://via.placeholder.com/820x365"></a>
                <div class="label">
                <h4>Project Orange</h4>
                <div class="description">Python, GraphQL</div>
                </div>
            </div>
            <div class="item">
                <a href="#"><img src="https://via.placeholder.com/820x365"></a>
                <div class="label">
                <h4>Project Birdfruit</h4>
                <div class="description">Binary</div>
                </div>
            </div>
    </section>




    <aside class="contact" id="contact"> <!-- Grid Template Area: contact - left side big monitor, shows up in the footer area-->
        <h2>Contact<br />Me</h2>
    </aside>
<footer>
    <section class="foot"> <!-- Grid Template Area: foot - right hand side on big monitor -->
        <ul>
            <li><a href="tel:5555555555">555.555.5555</a></li>
            <li><a href="mailto:jeff.zenko@gmail.com">jeff.zenko@gmail.com</a></li>
            <li><a href="${answers.github}" target="_blank">GitHub</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="${answers.linkedin}" target="_blank">Linkedin</a></li>
        </ul>
    </section>
</footer>



</div>
</body>
</html>`;
        const htmlAnswers = html.replace("${lastName}", answers.lastName);
        fs.writeFile("./generate/generate.html", htmlAnswers, (err) => {
            if (err) throw err;
            console.log("Portfolio generated successfully!");
        });
    });
