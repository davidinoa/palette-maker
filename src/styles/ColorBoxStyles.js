import chroma from 'chroma-js';
import sizes from './sizes';

export default {
  ColorBox: {
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    '&:hover button': {
      opacity: 1,
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: (props) => (props.showingFullPalette ? '20%' : '33.3333%'),
    },
    [sizes.down('md')]: {
      width: '50%',
      height: (props) => (props.showingFullPalette ? '10%' : '20%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: (props) => (props.showingFullPalette ? '5%' : '10%'),
    },
  },
  copyText: {
    color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
  },
  colorName: {
    color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'),
  },
  seeMore: {
    color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white'),
  },
  copyButton: {
    color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white'),
  },
  copyMessage: {
    '& h1': {
      [sizes.down('xs')]: {
        fontSize: '6rem',
      },
    },
  },
};
