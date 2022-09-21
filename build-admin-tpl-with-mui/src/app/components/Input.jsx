import React from 'react'
<<<<<<< HEAD
import { TextField, styled, InputAdornment, MenuItem} from '@mui/material';
import '../assets/css/app.css';
import {  PasswordOutlined, PhoneAndroidOutlined } from '@mui/icons-material';

const currencies = [
  {
    value: 'SN',
    label: '+221',
  },
  {
    value: 'CI',
    label: '+225',
  },
  {
    value: 'CA',
    label: '+1',
  },
  {
    value: 'TG',
    label: '+223',
  },
  {
    value: 'GN',
    label: '+224',
  },
];

export function InputText({label, required}) {

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  fullWidth={true} 
                  
                  
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneAndroidOutlined />
                      </InputAdornment>
                    ),
                    startAdornment: (
                      <InputAdornment position="start">
                        <TextField
                                select
                                value={currency}
                                onChange={handleChange}
                                variant="standard"
                                >
                                
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    <img
                                      loading="lazy"
                                      width="20"
                                      src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
                                      srcSet={`https://flagcdn.com/w40/${option.value.toLowerCase()}.png 2x`}
                                      alt=""
                                    />
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                      </InputAdornment>
                    )
                  }}
                  required/>
  );
}


export function InputPassword({label, required}) {
    return (
      <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  type="password"
                  fullWidth={true}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PasswordOutlined />
                      </InputAdornment>
                    )
                  }}
                  required/>
    );
}
=======
import { TextField, styled } from '@mui/material';
>>>>>>> 36716a2420fe5bbc64cc3c7a35bab7d9bbfc5861

export function ButtonSave({label}) {
    return (
      <TextField label={label} 
                  className="input" 
                  variant="standard" 
                  type="password"
                  fullWidth={true} 
                  required/>
    );
}

export const FormGroup = styled('div')({
  marginBottom: '32px',
  width: '80%'
});
