import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';
import router from '../../router';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.scss',
  shadow: false,
})
export class PageHome {
  render() {
    return (
      <div class="container">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <a {...href('/docs/components/', router)}>
          <span>Profile page</span>
        </a>
      </div>
    );
  }
}
