// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertTag extends $dara.Model {
  /**
   * @example
   * title
   */
  key?: string;
  /**
   * @example
   * example value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

