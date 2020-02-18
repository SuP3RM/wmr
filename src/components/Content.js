import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Schedule from './Schedule';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    display: 'flex',
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  container: {
    border: '2px solid rgb(40, 44, 52);',
    borderRadius: '10px 10px',
    padding: '2%',
    margin: theme.spacing(1),
  }
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [sign, setsign] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    q1: '',
    q2: ''
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleYesAndNo = event => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
    };


  return (
    <section>
      <form noValidate autoComplete="off">
        <h2>Please complete the following information and return to <em>Sandy Darland</em> (<a href="mailto:person@company.org">person@company.org</a>).</h2>
        <div className={classes.container}>
          <h3>Meeting Information</h3>
          {/* Contact Person */}
          <TextField
            id="contact-person"
            label="Contact Person"
            className={classes.textField}
            value={values.cp}
            onChange={handleChange('cp')}
            margin="normal"
            variant="outlined"
          />
          {/*On-site Contact Person*/}
          <TextField
            id="onsite-contact"
            label="On-site Contact Person"
            className={classes.textField}
            value={values.onsite}
            onChange={handleChange('onsite')}
            margin="normal"
            variant="outlined"
          />
          {/* Est. Attendance */}
          <TextField
            id="est-attendance"
            label="Est. Attendance"
            className={classes.textField}
            value={values.estAtt}
            onChange={handleChange('estAtt')}
            margin="normal"
            variant="outlined"
          />
          {/*  Accounting Code */}
          <TextField
            id="accounting-code"
            label="Accounting Code"
            className={classes.textField}
            value={values.acctCode}
            onChange={handleChange('acctCode')}
            margin="normal"
            variant="outlined"
          />
          {/* Title of Meeting */}
          <TextField
            id="title-of-meeting"
            label="Title of Meeting"
            className={classes.textField}
            value={values.title}
            onChange={handleChange('title')}
            margin="normal"
            variant="outlined"
          />
        {/* Schedule holds caledner and start and end time of meeting (in Schedule.js) */}
        <Schedule/>
        {/* Require a sign for meeting */}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Will you require a sign for the meeting?</InputLabel>
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

        {/* Post sign(s) as... */}
         <TextField
           id="signpost"
           label="Post Sign(s) as..."
           className={classes.textField}
           value={values.signpost}
           onChange={handleChange('signpost')}
           margin="normal"
           variant="outlined"
         />
      </div>
    </form>
  </section>
  );

}
