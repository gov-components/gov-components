import { Component, Host, h, Element, Prop } from '@stencil/core';
import { uniqueId } from 'lodash-es';
import { CheckboxProps } from '../../../interfaces';
import { extractId, hasSlot } from '../../../utils';
@Component({
  tag: 'go-checkbox',
  styleUrl: 'go-checkbox.scss',
  shadow: false,
})
export class GoCheckbox implements CheckboxProps {
  @Prop() checked?: boolean;
  @Prop() indeterminate?: boolean;
  @Prop() name: string;
  @Prop() disabled?: boolean;
  @Prop() value: any;
  @Prop() label: string;
  @Prop() hint?: string;
  @Prop() hintId?: string;
  @Prop() error?: string;

  @Element() el: HTMLElement;

  // Store attributes inherited from the host element
  id: string;
  hasHintSlot: boolean;
  componentWillLoad() {
    this.id = extractId(this.el);
    if (!this.id) {
      this.id = uniqueId('go-checkbox-');
    }
    if (!this.hintId) {
      this.hintId = this.id + '-hint';
    }
    this.hasHintSlot = hasSlot(this.el, 'hint');
  }

  render() {
    const { label, error, id, hint, hintId, hasHintSlot, checked, indeterminate, name, disabled, value } = this;
    const props = {
      id,
      checked,
      indeterminate,
      name,
      disabled,
      value,
    };
    return (
      <Host
        class={{
          error: !!error,
          disabled: !!disabled,
          indeterminate: !!indeterminate,
        }}>
        <div class="control-wrapper">
          <div class="box">
            <input class="hidden-control" type="checkbox" {...props} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="mark minus">
              <path d="M5 12h14" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="mark tick">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div class="text">
            <label htmlFor={id}>{label}</label>
            {hasHintSlot || hint ? (
              <div class="hint" id={hintId}>
                <slot name="hint">{hint}</slot>
              </div>
            ) : null}
          </div>
        </div>
        {typeof error === 'string' ? <div class="error-msg">{error}</div> : null}
      </Host>
    );
  }
}