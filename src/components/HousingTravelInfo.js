import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import HousingTravelTable from './HousingTravelTable';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 210,
  },
  container: {
    border: '2px solid rgb(40, 44, 52);',
    borderRadius: '10px 10px',
    padding: '2%',
    margin: theme.spacing(1),
  }
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [sign, setsign] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({});

  const [state, setState] = React.useState({});


  const handleChange = name => event => {
    setAge(event.target.value);
    setsign(event.target.value);
    setValues({
      ...values,
      [name]: event.target.value
    });
    setState({
      ...state,
      [name]: event.target.checked
    });
  };

  const handleChange2 = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <form autoComplete="off">
      <div className={classes.container}>

        <h4>Housing & Travel Information</h4>
        {/* Hotel Lists */}
        <FormControlLabel
          control={
            <Checkbox
              checked={state.residenceInn}
              onChange={handleChange('residenceInn')}
              value="residenceInn"
              color="primary"
            />
          }
          label="Residence Inn"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.hyattLodge}
              onChange={handleChange('hyattLodge')}
              value="hyattLodge"
              color="primary"
            />
          }
          label="Hyatt Lodge"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.doubletree}
              onChange={handleChange('doubletree')}
              value="doubletree"
              color="primary"
            />
          }
          label="Doubletree"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.leMéridien}
              onChange={handleChange('leMéridien')}
              value="leMéridien"
              color="primary"
            />
          }
          label="Le Méridien"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.hyattHouse}
              onChange={handleChange('hyattHouse')}
              value="hyattHouse"
              color="primary"
            />
          }
          label="Hyatt House"
        />
        {/* sleeping rooms required question */}
        <FormControl className={classes.formControl}>
          <InputLabel>Sleeping Rooms</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange2}
          >
            <MenuItem value='Yes'>Yes</MenuItem>
            <MenuItem value='No'>No</MenuItem>
          </Select>
        </FormControl>

        <h5><em>NOTE: All the above hotels offer free shuttle</em></h5>

        {/* billing procedures */}
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Billing Pocedures:</FormLabel>
          <RadioGroup aria-label="billing-procedures" name="billing" values={values} onChange={handleChange}>
            <FormControlLabel
              value="roomAndTax"
              control={<Radio color="primary" />}
              label="Room & tax to master account"
              labelPlacement="start"
            />
            <FormControlLabel
              value="RoomAndTaxAndIncidentals"
              control={<Radio color="primary" />}
              label="Room, tax, & incidentals to master account"
              labelPlacement="start"
            />
            <FormControlLabel
              value="individualsPay"
              control={<Radio color="primary" />}
              label="Individuals responsible for all charges"
              labelPlacement="start"
            />
          </RadioGroup>
          <FormHelperText>please select one</FormHelperText>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Rooming list will be provided:</FormLabel>
          <RadioGroup aria-label="rooming-list" name="rooming-list" values={values} onChange={handleChange}>
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Will participants’ book airline travel on the RSNA travel website?</FormLabel>
          <RadioGroup aria-label="airline-travel" name="airline-travel" values={values} onChange={handleChange}>
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
            />
            <h4>If yes, please forward an attendee list including their contact information to <em>Kara Barker</em> at
  (<a href="mailto:travel@rsna.org">travel@rsna.org)</a>.</h4>
          </RadioGroup>
          {/* Editable table to give more information (in HousingTravelTable.js) */}
        </FormControl>
        <HousingTravelTable/>
      </div>
    </form>
  );
}
