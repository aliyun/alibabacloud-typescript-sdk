// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlackholeStatusResponseBodyBlackholeStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether blackhole filtering is triggered for the instance. Valid values:
   * 
   * *   **blackhole**: yes
   * *   **normal**: no
   * 
   * @example
   * blackhole
   */
  blackStatus?: string;
  /**
   * @remarks
   * The end time of blackhole filtering. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1540196323
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.***.***.132
   */
  ip?: string;
  /**
   * @remarks
   * The start time of blackhole filtering. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1540195323
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blackStatus: 'BlackStatus',
      endTime: 'EndTime',
      ip: 'Ip',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackStatus: 'string',
      endTime: 'number',
      ip: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

