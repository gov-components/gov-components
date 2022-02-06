import { Component, Host, h, Element, Prop, State, Watch } from '@stencil/core';
import { INavItem } from '../../types';
import { warnA11y } from '../../utils/helper';
import { parseItems } from '../../utils/nav';

@Component({
  tag: 'go-footer',
  styleUrl: 'go-footer.scss',
  shadow: false,
})
export class GoFooter {
  @Element() el: HTMLElement;

  /**
   * Navigation links to be displayed.
   */
  @Prop() items: INavItem[] | string;

  @State() navItems: INavItem[];

  @Watch('items')
  async watchItems(newItems: INavItem[] | string) {
    this.navItems = parseItems(newItems);
  }

  /**
   * Label for navigation
   */
  @Prop() navLabel?: string = 'Footer navigation';

  componentWillLoad() {
    console.log(this.items);
    this.navItems = parseItems(this.items);
    if (this.navItems?.length > 0 && !this.navLabel) {
      warnA11y('Please add a unique "nav-label" in order to put navigation items into the nav landmark for better accessibility.');
    }
  }

  render() {
    const { navItems, navLabel } = this;

    const NavWrapperTag = navLabel ? 'nav' : 'div';
    return (
      <Host>
        <footer>
          <div class="container">
            {navItems ? (
              <NavWrapperTag aria-label={navLabel}>
                <div class="row">
                  {navItems?.map((item) => (
                    <go-nav-list class="col-12 col-tablet-4 col-desktop-3" block headingItem={item} items={item?.children}></go-nav-list>
                  ))}
                </div>
              </NavWrapperTag>
            ) : (
              <slot name="nav"></slot>
            )}
          </div>
          <div class="external-links">
            <slot name="external-links"></slot>
          </div>
          <div class="copyright">
            <slot name="copyright"></slot>
          </div>
        </footer>
      </Host>
    );
  }
}