// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockStatusResponseBodyStatusListBlockStatusList extends $dara.Model {
  /**
   * @remarks
   * The blocking status of the network traffic. Valid values:
   * 
   * *   **areablock**: Network traffic is blocked.
   * *   **normal**: Network traffic is not blocked.
   * 
   * @example
   * areablock
   */
  blockStatus?: string;
  /**
   * @remarks
   * The end time of the blocking. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1540196323
   */
  endTime?: number;
  /**
   * @remarks
   * The Internet service provider (ISP) line from which the traffic is blocked. Valid values:
   * 
   * *   **ct**: China Telecom (International)
   * *   **cut**: China Unicom (International)
   * 
   * @example
   * cut
   */
  line?: string;
  /**
   * @remarks
   * The start time of the blocking. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1540195323
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blockStatus: 'BlockStatus',
      endTime: 'EndTime',
      line: 'Line',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatus: 'string',
      endTime: 'number',
      line: 'string',
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

