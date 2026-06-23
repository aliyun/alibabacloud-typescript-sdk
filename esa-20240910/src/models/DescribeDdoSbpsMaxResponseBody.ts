// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSBpsMaxResponseBody extends $dara.Model {
  /**
   * @example
   * 2023-04-07T02:34:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10000000000
   */
  maxAtkBps?: number;
  /**
   * @example
   * 100000000
   */
  maxAtkPps?: number;
  /**
   * @example
   * A3790430-3A06-535F-A424-0998BD9A6C9F
   */
  requestId?: string;
  /**
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

