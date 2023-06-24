import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    items: ["Coats", "Boots", "Party Wear", "Shirts"],
  },
  {
    category: "Women",
    items: ["W-Coats", "W-Boots", "W-Party Wear", "W-Shirts"],
  },
  {
    category: "Kids",
    items: ["K-Coats", "K-Boots", "K-Party Wear", "K-Shirts"],
  },
];
const accordionCatSlice = createSlice({
  name: "AccordionSlice",
  initialState,
});

export default accordionCatSlice;
