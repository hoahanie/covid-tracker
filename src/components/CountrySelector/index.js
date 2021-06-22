import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  makeStyles,
  FormHelperText,
} from "@material-ui/core";

const useStyles =makeStyles((theme)=> ({
  formControl:{
    margin:`${theme.spacing(3)}px 0`
  }
}))

export default function CountrySelector({ value, handleOnChange, countries }) {
  const styles = useStyles();
  return (
    <FormControl className={styles.formControl}>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => {
          return (
            <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
              {" "}
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lua chon quoc gia</FormHelperText>
    </FormControl>
  );
}
