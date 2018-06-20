import React from "react";
import "./Categories.css";
import { Carousel } from "react-materialize";
// import cards from "../cards.json";

let catArr = [

    {
        "id": 1,
        "name": "General Tools",
        "image": "./images/generaltools.png",
        "description": "Enter text here"
    },
    {
        "id": 2,
        "name": "Teaching Resources",
        "image": "./images/teachingresources.png",
        "description": "Enter text here"
    },
    {
        "id": 3,
        "name": "CSS",
        "image": "./images/css.png",
        "description": "Enter text here"
    },
    {
        "id": 4,
        "name": "Testing",
        "image": "./images/testing.png",
        "description": "Enter text here"
    },
    {
        "id": 5,
        "name": "Javascript",
        "image": "./images/javascript.png",
        "description": "Enter text here"
    },
    {
        "id": 6,
        "name": "API",
        "image": "./images/api.png",
        "description": "Enter text here"
    },
    {
        "id": 7,
        "name": "Databases",
        "image": "./images/databases.png",
        "description": "Enter text here"
    },
    {
        "id": 8,
        "name": "NPM Packages",
        "image": "./images/npmpackages.png",
        "description": "Enter text here"
    },
    {
        "id": 9,
        "name": "Templates",
        "image": "./images/templates.png",
        "description": "Enter text here"
    },
    {
        "id": 10,
        "name": "Common Issues",
        "image": "./images/commonissues.png",
        "description": "Enter text here"
    },
    {
        "id": 11,
        "name": "Job Resources",
        "image": "./images/jobresources.png",
        "description": "Enter text here"
    },
    {
        "id": 12,
        "name": "HTML",
        "image": "./images/html.png",
        "description": "Enter text here"
    },
    {
        "id": 13,
        "name": "Random",
        "image": "./images/random.png",
        "description": "Enter text here"
    },
    {
        "id": 14,
        "name": "Podcasts",
        "image": "./images/podcasts.png",
        "description": "Enter text here"
    },
    {
        "id": 15,
        "name": "Slack Submissions",
        "image": "./images/slacksubmissions.png",
        "description": "Enter text here"
    },
    {
        "id": 16,
        "name": "Text Submissions",
        "image": "./images/textsubmissions.png",
        "description": "Enter text here"
    }
]

const Categories = props => (

    <div>

        <Carousel images={[

            catArr.map((cat) => {

                return (

                    <a href="">
                        <img src={cat.image} />
                    </a>
                );

            })

            // <a href="">
            //     <img src="./images/teachingresources.png" />
            // </a>,

            // <a href="">
            //     <img src="./images/css.png" />
            // </a>,

            // <a href="">
            //     <img src="./images/testing.png" />
            // </a>,

            // <a href="">
            //     <img src="./images/javascript.png" />
            // </a>,

            // <a href="">
            //     <img src="./images/api.png" />
            // </a>,

            // <a href="">
            //     <img src="./images/databases.png" />
            // </a>

        ]} />

    </div>
);

export default Categories;