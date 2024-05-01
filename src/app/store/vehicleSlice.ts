import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import vehicleData from '../data/data.json';

interface VehicleData {
  Name: string;
  Model: string;
  Type: string;
  Manufacturer: string;
  'Manufacturing Date': string;
  Seating: number;
}

interface VehicleState {
  data: VehicleData[];
  filteredData: VehicleData[];
  searchText: string;
  pagination: {
    current: number;
    pageSize: number;
  };
}

const initialState: VehicleState = {
  data: vehicleData,
  filteredData: vehicleData,
  searchText: '',
  pagination: {
    current: 1,
    pageSize: 10,
  },
};

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
      state.filteredData = state.data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(action.payload.toLowerCase())
        )
      );
    },
    setPagination(state, action: PayloadAction<{ current: number; pageSize: number }>) {
      state.pagination = action.payload;
    },
  },
});

export const { setSearchText, setPagination } = vehicleSlice.actions;
export default vehicleSlice.reducer;