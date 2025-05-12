// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostCountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725797727754
   */
  time?: number;
  /**
   * @example
   * 5
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

