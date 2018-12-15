import { define, WeElement } from 'omi';
import './my-head';

import './my-content';
import './my-sidebar';
import './my-pager';

define('my-frame', class extends WeElement {

  install() {
    this.setViewport();
    window.onresize = () => {
      if (window.innerWidth < 768) {
        this.refs.main.style.width = '100%';
      } else {
        this.refs.main.style.width = (window.innerWidth - 220) + 'px';
      }
    }
  }

  setViewport() {
    if (window.innerWidth < 768) {
      this.data.width = '100%';
    } else {
      this.data.width = (window.innerWidth - 220) + 'px';
    }
  }

  beforeRender() {
    this.setViewport();
  }

  css() {
    return `
    <style>
        .main{
            position: absolute;
            left:220px;
            top:45px;
            height:auto;
        }

        @media only screen and (max-width: 768px) {
            .main{
                left:0%;
            }
        }
    </style>
        `;
  }

  render() {
    return (
      <div>
        <my-head />
        <div class="main" ref="main" style="width:{{width}};">
          <my-content omi-id="content" ddd />
          <my-pager omi-id="pager" />
        </div>
        <my-sidebar omi-id="sidebar" />
      </div>
    )
  }
})
