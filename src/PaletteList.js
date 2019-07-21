import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Palette Maker</h1>
        {palettes.map((palette) => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
