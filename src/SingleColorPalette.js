import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorIdToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter((color) => color.id === colorIdToFilterBy));
    }
    return shades.slice(1);
  }

  changeFormat(format) {
    this.setState({ format });
  }

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { format } = this.state;

    const colorBoxes = this._shades.map((color) => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>go back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
