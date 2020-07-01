import axios from "axios";
import dotenv from "dotenv";
import { toast } from "react-toastify";

dotenv.config();

export const getCode = () => null;
export const reverseGeoCode = async (lat: number, lng: number) => {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  const { data } = await axios(URL);
  if (data.error_message) {
    toast.error(data.error_message);
    return false;
  } else {
    const { results } = data;
    // tslint:disable-next-line
    console.log(results);
    const firstPlace = results[0];
    if (firstPlace) {
      return firstPlace!.formatted_address;
    }
  }
};
