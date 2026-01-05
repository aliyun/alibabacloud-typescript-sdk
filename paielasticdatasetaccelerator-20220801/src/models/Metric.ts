// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Metric extends $dara.Model {
  /**
   * @example
   * 1655897743
   */
  timestamp?: string;
  /**
   * @example
   * 98.35
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
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

