/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let {Styles, RaisedButton, Dialog, FontIcon, FloatingActionButton} = require('material-ui');

let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;

let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  getStyles() {
    return {
      containerStyle: {
        textAlign: 'center',
        paddingTop: '50px'
      },
      FABStyle: {
        position: 'absolute',
        right: '30px',
        bottom: '40px'
      },
      iconStyle: {
        fontSize: '15px',
        letterSpacing: '0',
        lineHeight: '24px',
        paddingTop: '3px',
        marginBottom: '13px',
      }
    };
  },

  render() {

    let standardActions = [
      { text: "Yes, I Do" }
    ];

    let styles = this.getStyles();

    return (
      <div>
        <div style={styles.containerStyle}>
          <Dialog
            title="Hossein is the GOD OF REACT"
            actions={standardActions}
            ref="superAwesomeButtonDialog">
            Do you agree? :D
          </Dialog>

          <h1>Enterprise Task Manager</h1>
          <h2>Demo Project</h2>
          <RaisedButton
            label="Super Awesome Button"
            primary={true}
            onTouchTap={this._handleTouchTap} />
        </div>
        <FloatingActionButton style={styles.FABStyle}>
          <FontIcon style={styles.iconStyle} className="muidocs-icon-custom-pie"/>
        </FloatingActionButton>
      </div>
    );
  },

  _handleTouchTap() {
    this.refs.superAwesomeButtonDialog.show();
  },

  _toggleNav() {
    this.refs.leftNav.toggle();
  }

});

module.exports = Main;