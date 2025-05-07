// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTrendResponseBodyTrend extends $dara.Model {
  /**
   * @remarks
   * The number of high risks.
   * 
   * @example
   * 12
   */
  abnormalHigh?: number;
  /**
   * @remarks
   * The number of low risks.
   * 
   * @example
   * 23
   */
  abnormalLow?: number;
  /**
   * @remarks
   * The number of medium risks.
   * 
   * @example
   * 14
   */
  abnormalMedium?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * >Notice: The parameter has been deprecated, it is recommended to use the Timestamp parameter.
   * 
   * @example
   * 1722268800
   */
  timeStamp?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1722268800
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalHigh: 'AbnormalHigh',
      abnormalLow: 'AbnormalLow',
      abnormalMedium: 'AbnormalMedium',
      timeStamp: 'TimeStamp',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalHigh: 'number',
      abnormalLow: 'number',
      abnormalMedium: 'number',
      timeStamp: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

