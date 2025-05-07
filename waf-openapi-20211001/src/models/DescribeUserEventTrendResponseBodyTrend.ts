// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEventTrendResponseBodyTrend extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 9
   */
  eventHigh?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 23
   */
  eventLow?: number;
  /**
   * @remarks
   * The number of medium-risk events.
   * 
   * @example
   * 17
   */
  eventMedium?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * >Notice: The parameter has been deprecated, it is recommended to use the Timestamp parameter.
   * 
   * @example
   * 1723435200
   */
  timeStamp?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1723435200
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      eventHigh: 'EventHigh',
      eventLow: 'EventLow',
      eventMedium: 'EventMedium',
      timeStamp: 'TimeStamp',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventHigh: 'number',
      eventLow: 'number',
      eventMedium: 'number',
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

