import { useState } from "react";
import "./styles.css";

const devDictonary = {
  Design: [
    {
      name: "Coolors",
      information:
        "Using this you can make color palletes,browser free pallete templates and much",
      rating: "5/5"
    },
    {
      name: "CanvaColors",
      information:
        "Using CanvaColors you can pick colors from a images, generate your own pallete and so on.",
      rating: "5/5"
    },
    {
      name: "TailwindCss",
      information:
        "Using this you can choose different color shades and also you can learn css styles",
      rating: "5/5"
    }
  ],
  Develop: [
    {
      name: "HTML",
      information:
        "With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!,You can learn HTML by these website - W3Schools,NeogCamp",
      rating: "5/5"
    },
    {
      name: "CSS",
      information:
        "CSS is the language we use to style an HTML document. You can Learn from these website - LearnCSS,CssTricks",
      rating: ""
    },
    {
      name: "JS",
      information: " JavaScript is the programming language of the Web.",
      rating: "5/5"
    }
  ],
  Deploy: [
    {
      name: "Netlify",
      information: "Easy to Deploy,You can use this for free",
      rating: "5/5"
    },
    {
      name: "Heroku",
      information: "Its free Plan is more than enugh for most of the projects",
      rating: "5/5"
    },
    {
      name: "AWS",
      information: "As you know this for paid and amazing services",
      rating: "4/5"
    }
  ],
  Books: [
    {
      name: "EloquentJs",
      information:
        "Best book but not easy to understand for absolute beginners",
      rating: "4.5/5"
    },
    {
      name: "You Dont know js",
      information: "It is beginners friendly,you can start with this",
      rating: "5/5"
    },
    {
      name: "Mindset",
      information: "You can learn how to think differently in life",
      rating: "5/5"
    }
  ]
};
var navigation = {
  margin: "0 auto 1.25rem auto ",
  boxShadow: "0 1px 10px rgba(146,161,176,.15)",
  padding: "1.25rem 2rem 1.25rem 2rem",
  maxWidth: "900px",
  borderBottomLeftRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  background: "#10B981",
  color: "white"
};
var btn = {
  cursor: "pointer",
  color: "black",
  background: "#34D399",
  borderRadius: "0.5rem",
  padding: "0.5rem  1rem",
  border: "1px solid #047857",
  margin: "1rem 0.3rem"
};
var container = {
  background: "#ECFDF5",
  listStyle: "none",
  padding: "1rem",
  textAlign: "Center",
  border: "2px solid #D1D5DB",
  width: "70%",
  margin: "50px 50px 0px 100px",
  borderRadius: "0.5rem"
};
var footer = {
  backgroundColor: "#10B981",
  padding: "2.85rem",
  textAlign: "center",
  color: "white",
  borderTopRightRadius: "1rem",
  boxShadow: "0 1px 25px #E5E7EB",
  margin: "3rem 0 0 0"
};

export default function App() {
  var [selectedGenre, setGenre] = useState("Design");
  var genreWeHave = Object.keys(devDictonary);

  function genreClickHandler(genre) {
    setGenre(genre);
    console.log(genre);
  }
  return (
    <div className="App">
      <nav style={navigation}>
        <h1>Developer Things</h1>
      </nav>
      <p>
        A Developer Recomendation app which help you getting best resources for
        developing fullStack projects
      </p>
      <div>
        {genreWeHave.map((genre) => {
          return (
            <button
              style={btn}
              onClick={() => genreClickHandler(genre)}
              key={genre}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {devDictonary[selectedGenre].map((item) => {
            return (
              <li style={container}>
                <div style={{ fontSize: "1.5rem" }}>{item.name}</div>
                <div>{item.information}</div>
                <div>{item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <h1>{selectedGenre}</h1> */}
      <footer style={footer}>
        “A website without visitors is like a ship lost in the horizon.”
        <p>– Dr. Christopher Dayagdag</p>
      </footer>
    </div>
  );
}
