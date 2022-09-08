import { INavItem } from '@go-ui/core/dist/types/interfaces';
import { href } from 'stencil-router-v2';
import { Build, Component, Prop, State, h } from '@stencil/core';

import siteConfig from '../../../config';
import { prepareNavItems } from '../../utils/helpers';
declare global {
  var docsearch: any;
}

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: false,
})
export class AppHeader {
  @State() isDark = false;

  @Prop() inline = false;

  @State() navItems: INavItem[] = [];

  @Prop() activePath: string = '/';

  componentWillLoad() {
    this.loadTheme();

    this.navItems = prepareNavItems(siteConfig.navbar.main, '');
  }

  /**
   * load either light/dark theme according to
   * - operating system preference
   * - localStorage override
   */
  loadTheme() {
    // check if there's any local storage override
    // match OS preference
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('go-ui-theme');
    if (storedTheme) {
      this.isDark = storedTheme === 'dark';
    }
    this.setHtmlAttribute();
  }

  setHtmlAttribute() {
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    this.setHtmlAttribute();
    localStorage.setItem('go-ui-theme', this.isDark ? 'dark' : 'light');
  }

  // @Watch('activePath')
  // setActivePath(newValue: string) {
  //   this.navItems = this.navItems.map(item => {
  //     const cleanPathname = removeLeadingSlash(newValue);
  //     const cleanUrl = removeLeadingSlash(item.url);
  //     return {
  //       ...item,
  //       isCurrent: cleanPathname.includes(cleanUrl),
  //     };
  //   });
  // }

  mobileMenu: HTMLGoNavDrawerElement;

  handleMobileTriggerClick() {
    this.mobileMenu.open();
  }

  componentDidLoad() {
    if (Build.isBrowser && siteConfig.algolia) {
      const { appId, apiKey, indexName } = siteConfig.algolia;
      docsearch({
        appId,
        apiKey,
        indexName,
        container: '#algolia-search',
        debug: false, // Set debug to true if you want to inspect the modal
      });
    }
  }

  render() {
    const { isDark, navItems } = this;
    const repoLinkProps = {
      target: '_blank',
      href: siteConfig.repoLink.url,
      rel: 'noopener noreferrer nofollow',
    };
    return (
      <header>
        <go-nav-drawer ref={el => (this.mobileMenu = el)} label="Menu" items={navItems} autoClose={true}></go-nav-drawer>
        <go-header-bar breakpoint="tablet">
          <go-button slot="mobile-menu-trigger" aria-labelledby="menu-label" compact flat stack variant="text" onClick={() => this.handleMobileTriggerClick()}>
            <go-icon icon-set="bx" name="menu" size="1.5rem" slot="prefix"></go-icon>
            <span id="menu-label">Menu</span>
          </go-button>

          <go-gov-au-logo {...href('/')} slot="logo">
            <img slot="main-brand" src={siteConfig.logo} alt={siteConfig.name} />
            <img slot="main-brand-on-dark" src={siteConfig.logoDark} alt={siteConfig.name} />
            <div slot="co-brand">
              <div class="text-size-1">
                <b>{siteConfig.name}</b>
              </div>
              {siteConfig.tagline && <div class="text-size-0 d-none d-block-desktop">{siteConfig.tagline}</div>}
            </div>
          </go-gov-au-logo>

          <div class="nav-actions" slot="actions">
            <go-button {...repoLinkProps} variant="text" icon round flat compact aria-label={siteConfig.repoLink.label}>
              <go-icon size="1.5rem" icon-set="bxl" name="github"></go-icon>
            </go-button>
            {siteConfig.darkThemeSwitch && (
              <go-button
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                variant="text"
                icon
                round
                flat
                compact
                onClick={() => this.toggleDarkMode()}>
                <go-icon size="1.5rem" icon-set="bx" name={isDark ? 'moon' : 'sun'}></go-icon>
              </go-button>
            )}
            {siteConfig?.algolia ? <div id="algolia-search" class="algolia"></div> : null}
          </div>

          <go-main-nav slot="main-nav" items={navItems}></go-main-nav>
        </go-header-bar>
      </header>
    );
  }
}
