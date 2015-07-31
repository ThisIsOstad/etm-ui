let React = require('react');
let Router = require('react-router');
let { MenuItem, LeftNav, Styles, Avatar } = require('material-ui');
let { Colors, Spacing, Typography } = Styles;

let menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'Activities' },
  { route: 'all-activities', text: 'All Activities' },
  { route: 'current-activities', text: 'Current Activities' },
  { route: 'dashboard', text: 'Dashboard' },
  { type: MenuItem.Types.SUBHEADER, text: 'Settings' },
  { route: 'profile-settings', text: 'Profile Settings' },
  { route: 'app-settings', text: 'Application Settings' },
];

class AppLeftNav extends React.Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
  }

  getStyles() {
    return {
      headerStyle: {
        cursor: 'pointer',
        textAlign: 'center',
        color: Typography.textFullWhite,
        lineHeight: '270px', //Spacing.desktopKeylineIncrement + 'px',
        fontWeight: Typography.fontWeightLight,
        backgroundColor: Colors.blueGrey500,
        paddingLeft: Spacing.desktopGutter,
        padding: '0px',
        margin: '0px',
        height: '150px',
        backgroundImage: 'url(' + 'images/avatar.png' + ')',
        backgroundSize: '256px 150px'
      },
      headerTextStyle: {
        fontSize: '18px',
        padding: '0px',
        margin: '0px',
      }
    };
  }

  render() {
    let styles = this.getStyles();
    let header = (
      <div style={styles.headerStyle} onTouchTap={this._onHeaderClick}>
        <p style={styles.headerTextStyle}>yourEmail@sample.com</p>
      </div>
    );

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange(e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  _onHeaderClick() {
    this.context.router.transitionTo('profile-settings');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func
};

module.exports = AppLeftNav;
