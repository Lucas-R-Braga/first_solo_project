import { type } from "os"
import React, { Children } from "react";


/*type TitleProps = {
  children: React.ReactNode;
  size?: "small" | "large";
}

const Title = ({children, size}: TitleProps) =>{
  return(
    <h1 
      style= {{fontSize: size === "small" ? "1.5rem" : "3rem"}}
    >
      {children}
    </h1>
  )
}*/


type typographyProps = {
  children: React.ReactNode;
  size?: "small" | "large";
}

type ParagraphProps = {
  color : string
}


const Paragraph = ({
  children,
  size,
  color
}: typographyProps & ParagraphProps) => 
//aqui tem um merge de types
{
  return (
    
    <h1
    style={{
      fontSize: size === "small" ? "1.5rem" : "3rem",
      color: color,
    }}
    >
      {children}
    </h1>

);
};

const Title = ({
  children, 
  size
}: typographyProps) => {
  return(
    
    <h1 
    style={{
      fontSize: size === "small" ? "1.5rem" : "3rem",
    }}
  >
    {children}
  </h1>

);
};

const titleDefaultProps = {
  size: "small"
}
Title.defaultProps = titleDefaultProps;


const user = {
  id: 1,
  name: "Jhon Doe",
  age: 30,
  isAdmin: true,
  birthday: new Date ("1980-01-01"),
};

type UserAttributes = typeof user

const mary = {
  id: 2,
  name: "Mary Doe",
  age: 25,
  isAdmin: false,
};



export default function App() {
  return (
    <div className="App">

      <Title>

        <span>
          Hello <b> World </b>
        </span>

      </Title>

      <Paragraph color="red" size="small">
        Eu sou um paragrafo
      </Paragraph>

    </div>
  )
}

