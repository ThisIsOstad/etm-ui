let React = require('react');
let {MenuItem, List, ListDivider, ListItem, Styles} = require('material-ui');

let Colors = Styles.Colors;

class ListsPage extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <List subheader="General">
          <ListItem
            primaryText="Name"
            secondaryText="Change your Name" />
          <ListItem
            primaryText="Username"
            secondaryText="Change Your Username" />
          <ListItem
            primaryText="Password"
            secondaryText="Change Your Password" />
          <ListItem
            primaryText="Profile Photo"
            secondaryText="Change your Profile Photo" />
        </List>
        <ListDivider />
        <List subheader="Other Settings">
          <ListItem
            primaryText="Unsubscribe"
            secondaryText="Stop Using This Application" />
        </List>

      </div>
    );
  }

}

module.exports = ListsPage;
