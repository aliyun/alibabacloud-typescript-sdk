// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticResponseBodyDataDataLogsTrend extends $dara.Model {
  /**
   * @example
   * 1723775362
   */
  timestamp?: number;
  /**
   * @example
   * tf-testacc-oos-parameter
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

