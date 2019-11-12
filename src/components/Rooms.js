import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    display: 'flex',
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
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
  const [sign, setsign] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    q1: '',
    q2: '',
    q3: ''
  });

  const handleYesAndNo = event => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    };

  const [state, setState] = React.useState({});

  const handleChange = name => event => {
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <section>
      <form autoComplete="off">
        <div className={classes.container}>

        <h3>Preferred Meeting Room:</h3>
        <h4>1st Floor Conference Center</h4>

        {/* Checked Boxes of Rooms User Prefers */}
        <FormControlLabel
          control={
          <Checkbox
            checked={state.checkedRoomA}
            onChange={handleChange('checkedRoomA')}
            value="checkedRoomA"
            color="primary"
          />
          }
          label="Conference Room A"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.checkedRoomB}
            onChange={handleChange('checkedRoomB')}
            value="checkedRoomB"
            color="primary"
          />
          }
          label="Conference Room B"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.checkedRoomC}
            onChange={handleChange('checkedRoomC')}
            value="checkedRoomC"
            color="primary"
          />
          }
          label="Conference Room C"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.checkedRoomAB}
            onChange={handleChange('checkedRoomAB')}
            value="checkedRoomAB"
            color="primary"
          />
          }
          label="Conference Room AB"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.checkedRoomBC}
            onChange={handleChange('checkedRoomBC')}
            value="checkedRoomBC"
            color="primary"
          />
          }
          label="Conference Room BC"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.checkedRoomABC}
            onChange={handleChange('checkedRoomABC')}
            value="checkedRoomABC"
            color="primary"
          />
          }
          label="Conference Room ABC"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.birsto}
            onChange={handleChange('birsto')}
            value="birsto"
            color="primary"
          />
          }
          label="Birsto"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.trainingRoom}
            onChange={handleChange('trainingRoom')}
            value="trainingRoom"
            color="primary"
          />
          }
          label="Training Room"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.firstFloorConferenceRoom}
            onChange={handleChange('firstFloorConferenceRoom')}
            value="firstFloorConferenceRoom"
            color="primary"
          />
          }
          label="First Floor Conference Room"
        />
        {/* Checked Boxes of Rooms User Prefers */}
        <h4>Preferred Room Set (for 1st Floor A, B, C):</h4>
        <FormControlLabel
          control={
          <Checkbox
            checked={state.conference}
            onChange={handleChange('conference')}
            value="conference"
            color="primary"
          />
          }
          label="Conference"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.uShape}
            onChange={handleChange('uShape')}
            value="uShape"
            color="primary"
          />
          }
          label="U-Shape"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.classroom}
            onChange={handleChange('classroom')}
            value="classroom"
            color="primary"
          />
          }
          label="Classroom"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.hollowSquare}
            onChange={handleChange('hollowSquare')}
            value="hollowSquare"
            color="primary"
          />
          }
          label="Hollow Square"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.theater}
            onChange={handleChange('theater')}
            value="theater"
            color="primary"
          />
          }
          label="Theater"
        />
        <TextField
          id="roomSet"
          label="Other"
          className={classes.textField}
          value={values.roomSet}
          onChange={handleChange('roomSet')}
          margin="normal"
        />
        {/* Checked Boxes of Rooms User Prefers */}
        <h4>2nd Floor</h4>
        <FormControlLabel
          control={
          <Checkbox
            checked={state.fishBowl}
            onChange={handleChange('fishBowl')}
            value="fishBowl"
            color="primary"
          />
          }
          label="Fish Bowl"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.secondFloorConferenceRoom}
            onChange={handleChange('secondFloorConferenceRoom')}
            value="secondFloorConferenceRoom"
            color="primary"
          />
          }
          label="Second Floor Conference Room"
        />
        {/* Checked Boxes of Rooms User Prefers */}
        <h4>3rd Floor</h4>
        <FormControlLabel
          control={
          <Checkbox
            checked={state.library}
            onChange={handleChange('library')}
            value="library"
            color="primary"
          />
          }
          label="Library"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.thirdFloorConferenceRoom}
            onChange={handleChange('thirdFloorConferenceRoom')}
            value="thirdFloorConferenceRoom"
            color="primary"
          />
          }
          label="Third Floor Conference Room"
        />
        {/* Checked Boxes of Rooms User Prefers */}
        <h4>4th Floor</h4>
        <FormControlLabel
          control={
          <Checkbox
            checked={state.point}
            onChange={handleChange('v')}
            value="point"
            color="primary"
          />
          }
          label="Point"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.forthTrainingRoom}
            onChange={handleChange('forthTrainingRoom')}
            value="forthTrainingRoom"
            color="primary"
          />
          }
          label="Fourth Floor Meeting/Training Room"
        />
        <FormControlLabel
          control={
          <Checkbox
            checked={state.fourthFloorConferenceRoom}
            onChange={handleChange('fourthFloorConferenceRoom')}
            value="fourthFloorConferenceRoom"
            color="primary"
          />
          }
          label="Fourth Floor Conference Room"
        />
        {/* Ask if Require Head Table */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="headTable">Will you require a head table?</InputLabel>
          <Select
            value={values.q1}
            onChange={handleYesAndNo}
            inputProps={{
              name: 'q1',
              id: 'question-1',
            }}
          >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
        </FormControl>
        {/* Ask if Require a Podium */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="podium">Will you require a podium?</InputLabel>
          <Select
            value={values.q2}
            onChange={handleYesAndNo}
            inputProps={{
              name: 'q2',
              id: 'question-2',
            }}
          >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
        </FormControl>
        {/* Ask if Require Breakout Room */}
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="breakoutRoom">Do you need breakout room(s)?</InputLabel>
          <Select
            value={values.q3}
            onChange={handleYesAndNo}
            inputProps={{
              name: 'q3',
              id: 'question-3',
            }}
          >
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
        </Select>
          <TextField
            id="numBreakRooms"
            label="How Many?"
            className={classes.textField}
            value={values.numBreakRooms}
            onChange={handleChange('numBreakRooms')}
            margin="normal"
          />
        </FormControl>
      </div>
      </form>
  </section>
  );
}
