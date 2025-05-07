// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Metric extends $dara.Model {
  /**
   * @example
   * 1616987726587
   */
  time?: number;
  /**
   * @example
   * 23.45
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
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

