import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
  }

  savePalette(newPalette) {
    const palettes = [...this.state.palettes, newPalette];
    this.setState({ palettes });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />}
        />
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
