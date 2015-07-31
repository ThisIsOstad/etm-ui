let React = require('react');
let {MenuItem, Checkbox, List, ListDivider, ListItem, Styles} = require('material-ui');

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
            primaryText="Theme"
            secondaryText="Change Theme" />
        </List>
        <ListDivider />
        <List subheader="Other Settings">
          <ListItem
              leftCheckbox={<Checkbox />}
              primaryText="Notificaitons"
              secondaryText="Allow notifications" />
        </List>

      </div>
    );
  }

}

module.exports = ListsPage;
