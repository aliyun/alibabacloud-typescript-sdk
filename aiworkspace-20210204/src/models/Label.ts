// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Label extends $dara.Model {
  /**
   * @remarks
   * The label key. The value can be up to 128 bytes in length and cannot contain equal signs (=) and commas (,).
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The label value. The value can be up to 128 bytes in length and cannot contain equal signs (=) and commas (,).
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

