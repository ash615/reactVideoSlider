import React from 'react';
import Lightbox from 'react-images-texts-videos';
//import Lightbox from 'react-images-texts-videos';
export default class Sample extends React.Component {

  render() {
    return (
      <div>
      <Lightbox
        items={{type:'videos', items: ['n7MjuaR7ZlI', 'n7MjuaR7ZlI']}}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
      </div>
    );
  }
}