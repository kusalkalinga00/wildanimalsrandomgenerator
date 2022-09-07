import React from "react";
import Animal from "./Animal";

const Animals = ({animals}) => {
  return <section>
    <div className="title">
        <h2>Wild Animals Random Generator</h2>
        <div className="underline">

        </div>
    </div>
    <div>
        {animals.map((animal)=>{
            return <Animal key={animal.id} {...animal}></Animal>
        })}

    </div>
  </section>;
};

export default Animals;
