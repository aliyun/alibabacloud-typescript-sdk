// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNisNetworkMetricsResponseBodyDataMetrics extends $dara.Model {
  /**
   * @example
   * 1690684091100
   */
  timeStamp?: number;
  /**
   * @example
   * 88
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'number',
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

