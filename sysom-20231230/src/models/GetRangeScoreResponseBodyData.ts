// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRangeScoreResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725797727754
   */
  time?: number;
  /**
   * @example
   * saturation
   */
  type?: string;
  /**
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      type: 'string',
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

