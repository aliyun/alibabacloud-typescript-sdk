// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketIcon extends $dara.Model {
  /**
   * @remarks
   * The icon type.
   * 
   * @example
   * url
   */
  type?: string;
  /**
   * @remarks
   * The icon value.
   * 
   * @example
   * https://example.com/icon.png
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

