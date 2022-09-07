import React from "react";

const Animal = ({ id, name, latin_name, animal_type, image_link, habitat }) => {
  return (
    <article className="single-animal">
      <div className="left-col">
        <img src={image_link} alt={name} />
      </div>
      <div className="animal-info">
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Scentific Name:</b> <em>{latin_name}</em>
        </p>
        <p>
          <b>Type:</b> {animal_type}
        </p>
        <p>
          <b>habitat:</b> {habitat}{" "}
        </p>
      </div>
    </article>
  );
};

export default Animal;
