// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Label extends $dara.Model {
  /**
   * @remarks
   * The tag key. It can be up to 128 bytes in length and cannot contain equal signs (=) or half-width commas (,).
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be up to 128 bytes in length and cannot contain equal signs (=) or half-width commas (,).
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

