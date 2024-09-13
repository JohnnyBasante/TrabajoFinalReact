import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const CharacterModal = ({ character, open, onClose }) => {
  if (!character) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {character.name}
        </Typography>
        <Typography sx={{ mt: 2 }}>ID: {character.id}</Typography>
        <Typography sx={{ mt: 2 }}>Species: {character.species}</Typography>
        <Typography sx={{ mt: 2 }}>Gender: {character.gender}</Typography>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: "100%" }}
        />
      </Box>
    </Modal>
  );
};

export default CharacterModal;
