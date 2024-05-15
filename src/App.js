import React from "react";
import {
  Box,
  Card,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextareaAutosize,
  Button,
} from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
      }}
    >
      <Card
        sx={{
          p: 4,
          width: "350px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Email" variant="outlined" />
          <TextField label="password" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel id="dropdown-label">Role</InputLabel>
            <Select labelId="dropdown-label" label="Role" defaultValue="">
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>User</MenuItem>
              <MenuItem value={3}>Guest</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="multi-select-label">Interests</InputLabel>
            <Select
              labelId="multi-select-label"
              label="Interests"
              multiple
              defaultValue={[]}
            >
              <MenuItem value={1}>Technology</MenuItem>
              <MenuItem value={2}>Sports</MenuItem>
              <MenuItem value={3}>Music</MenuItem>
            </Select>
          </FormControl>
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to terms and conditions"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
            <RadioGroup name="gender">
              <FormControlLabel control={<Radio />} label="Male" value="male" />
              <FormControlLabel
                control={<Radio />}
                label="Female"
                value="female"
              />
            </RadioGroup>
          </FormControl>
          <TextareaAutosize
            aria-label="additional information"
            placeholder="Additional Information"
            minRows={5}
            sx={{
              resize: "vertical",
              fontFamily: "inherit",
              fontSize: "14px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default App;
