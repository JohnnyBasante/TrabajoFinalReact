import React, { useState, useEffect } from "react";
import { getAllRickAndMorty } from "../servicios/rickAndMortyService";
import CharacterModal from "./model";
import { Container } from "@mui/material";

function RickAndMortyList() {
  const [rymdata, setRyMData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const apiURL = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllRickAndMorty(apiURL);
      console.log(response);
      setRyMData(response.results);
    }
    fetchData();
  }, []);

  const handleOpenModal = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <Container
      sx={{
        bgcolor: "#008a86",
        py: 4,
        textAlign: "center",
        color: "#b7d62d",
      }}
    >
      <h1>RICK AND MORTY LIST</h1>
      
      <ol style={{ listStyleType: "decimal", padding: 0, margin: 0, textAlign: "left", display: "inline-block" }}>
        {rymdata.map((rym) => (
          <li key={rym.id} style={{ marginBottom: "1em" }}>
            <h2>{rym.name}</h2>
            <p>Status: {rym.status}</p>
            <img
              src={rym.image}
              alt={rym.name}
              onClick={() => handleOpenModal(rym)}
              style={{ cursor: "pointer", width: "200px" }}
            />
          </li>
        ))}
      </ol>

      <CharacterModal
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={handleCloseModal}
      />
    </Container>
  );
}

export default RickAndMortyList;