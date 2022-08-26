import { Env } from '@stencil/core';
import siteConfig from '../../config';
import docs, { JsonDocsComponent } from '@go-ui/core/dist/docs/go-ui';
import { INavItem } from '@go-ui/core/dist/types/interfaces';
import { href } from 'stencil-router-v2';

export function getDocsPrefix() {
  return siteConfig?.docsRoutePrefix ? siteConfig.docsRoutePrefix : 'docs/';
}

export function removeLeadingSlash(str: string): string {
  if (str.startsWith('/')) {
    return str.substring(1);
  }
  return str;
}

export function siteUrl(relativePath: string): string {
  let baseUrl = Env.baseUrl;
  if (!baseUrl.endsWith('/')) {
    baseUrl = `${baseUrl}/`;
  }

  return `${baseUrl}${removeLeadingSlash(relativePath)}`;
}

export function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// sidebar helpers

export function buildSidebarItemUrl(comp: JsonDocsComponent, withPrefix = true): string {
  return comp.filePath.substring(0, comp.filePath.lastIndexOf('/')).replace('./src/', withPrefix ? getDocsPrefix() : '');
}

setTimeout(() => {}, 1000);

export function buildSidebar(): INavItem[] {
  return docs.components.map((comp: JsonDocsComponent) => {
    const path = buildSidebarItemUrl(comp, false);
    const parents = path.split('/');
    parents.pop();
    const url = siteUrl(getDocsPrefix() + path);
    return {
      url,
      label: siteConfig.sidebar.tagToLabel(comp.tag),
      linkAttrs: {
        ...href(url),
      },
      path,
      parents,
      parentKey: parents.join('.'),
    };
  });
}

// code helper
export function executeScriptElements(containerElement) {
  const scriptElements = containerElement.querySelectorAll('script') as NodeListOf<HTMLScriptElement>;

  Array.from(scriptElements).forEach(scriptElement => {
    const clonedElement = document.createElement('script');

    Array.from(scriptElement.attributes).forEach(attribute => {
      clonedElement.setAttribute(attribute.name, attribute.value);
    });

    clonedElement.text = scriptElement.text;

    scriptElement.parentNode.replaceChild(clonedElement, scriptElement);
  });
}
