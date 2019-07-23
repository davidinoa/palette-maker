import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import chroma from 'chroma-js';
import withSizes from 'react-sizes';
import './styles/ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showingFullPalette, xs, md, lg } = this.props;
    const { copied } = this.state;

    const sizeWindow = xs ? 'xs' : md ? 'md' : lg ? 'lg' : 'xl';
    const sizeHeightMap = {
      xs: showingFullPalette ? '5%' : '10%',
      md: showingFullPalette ? '10%' : '20%',
      lg: showingFullPalette ? '20%' : '33.3333%',
    };

    let heightBox = showingFullPalette ? '25%' : '50%';
    if (sizeWindow !== 'xl') {
      heightBox = sizeHeightMap[sizeWindow];
    }

    const textColor = chroma(background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white';

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background, height: heightBox }} className="ColorBox">
          <div style={{ background }} className={classNames('copyOverlay', { showOverlay: copied })} />
          <div className={classNames('copyMessage', { showMessage: copied })}>
            <h1>copied!</h1>
            <p style={{ color: textColor }}>{background}</p>
          </div>
          <div>
            <div className="boxContent">
              <span style={{ color: textColor }}>{name}</span>
            </div>
            <button className="copyButton" style={{ color: textColor }}>
              copy
            </button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className="seeMore" style={{ color: textColor }}>
                more
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  xs: width <= 575,
  md: width <= 990 && width > 765,
  lg: width <= 1200 && width > 990,
});

export default withSizes(mapSizesToProps)(ColorBox);
