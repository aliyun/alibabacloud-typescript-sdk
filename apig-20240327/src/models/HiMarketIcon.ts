// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketIcon extends $dara.Model {
  /**
   * @remarks
   * Specifies the icon type. Example: `URL`.
   */
  type?: string;
  /**
   * @remarks
   * The value of the icon, based on the specified `type`. For example, if `type` is `URL`, this is the URL of the icon.
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

