// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLProtectTrendResponseBodyTrendList extends $dara.Model {
  /**
   * @remarks
   * The number of requests that are blocked by ACL on the current day.
   * 
   * @example
   * 100
   */
  protectCnt?: number;
  /**
   * @remarks
   * The UNIX timestamp at midnight (00:00:00) of each day, which indicates the date of the current day. Unit: seconds.
   * 
   * @example
   * 1697299200
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      protectCnt: 'ProtectCnt',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectCnt: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

