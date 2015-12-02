import React, { PropTypes } from 'react';
import Radium from 'radium';
import Specimen from '../components/Specimen/Specimen';

import {heading} from '../scaffold/typography';

class Video extends React.Component {
  render() {
    const {src, title, muted, loop, autoplay, theme} = this.props;

    let styles = {
      section: {
        display: 'flex',
        flexFlow: 'row wrap',
        minWidth: 'calc(100% + 10px)'
      },
      container: {
        boxSizing: 'border-box',
        margin: '0 10px 10px 0',
        padding: 0,
        position: 'relative'
      },
      title: {
        ...heading(theme, {level: 6}),
        margin: 0
      }
    };

    return (
      <section style={styles.section}>
        <video
          src={src}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          controls
          style={{width: '100%', height: '100%'}}
        >
          Open <a href={src} target='_blank'>video</a> in a new Tab
        </video>
        {title && <div style={styles.title}>{title}</div>}
      </section>
    );
  }
}

Video.propTypes = {
  theme: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool
};

export default Specimen()(Radium(Video));