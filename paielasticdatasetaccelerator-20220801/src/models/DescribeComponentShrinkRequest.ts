// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  renderTemplate?: boolean;
  valuesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      renderTemplate: 'RenderTemplate',
      valuesShrink: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderTemplate: 'boolean',
      valuesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

