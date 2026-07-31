// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsMaxResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range that was queried. The time is in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC+0.
   * 
   * @example
   * 2023-04-07T02:34:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The peak attack bandwidth. Unit: bit/s.
   * 
   * @example
   * 10000000000
   */
  maxAtkBps?: number;
  /**
   * @remarks
   * The peak attack PPS. Unit: pps.
   * 
   * @example
   * 100000000
   */
  maxAtkPps?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3790430-3A06-535F-A424-0998BD9A6C9F
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2023-02-14T17:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxAtkBps: 'MaxAtkBps',
      maxAtkPps: 'MaxAtkPps',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxAtkBps: 'number',
      maxAtkPps: 'number',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

