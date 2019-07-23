import React from 'react';
import chroma from 'chroma-js';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles/DraggableColorBox.css';

const DraggableColorBox = SortableElement((props) => {
  const { handleClick, name, color } = props;
  const textColor = chroma(props.color).luminance() <= 0.08 ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)';

  return (
    <div className="rootDraggableColorBox" style={{ backgroundColor: color }}>
      <div
        className="boxContent"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: textColor,
        }}>
        <span>{name}</span>
        <DeleteIcon className="deleteIcon" onClick={handleClick} />
      </div>
    </div>
  );
});

export default DraggableColorBox;
