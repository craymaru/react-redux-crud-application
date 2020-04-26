import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getEvent, putEvent, deleteEvent } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
    },
  },
}));

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <TextField
          {...input}
          label={label}
          type={type}
          error={touched && error}
          helperText={touched && error}
          fullWidth={true}
          variant="outlined"
        />
      </div>
    );
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push("/");
  }

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const styleM5 = { margin: 10 };

    return (
      <React.Fragment>
        <div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field label="Title" name="title" type="text" component={this.renderField} />
            <Field label="Body" name="body" type="text" component={this.renderField} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={styleM5}
              disabled={pristine || submitting || invalid}
            >
              Update
            </Button>
            <Button href="/" variant="contained" style={styleM5}>
              Back
            </Button>
            <Button onClick={this.onDeleteClick} variant="contained" color="secondary" style={styleM5}>
              Delete
            </Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = "Please enter a title.";
  if (!values.body) errors.body = "Please enter a body.";

  return errors;
};

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};

const mapDispatchToProps = { getEvent, putEvent, deleteEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    validate,
    form: "eventShowForm",
    enableReinitialize: true,
  })(EventsShow)
);
