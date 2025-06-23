// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlaEventListResponseBodySlaEvent extends $dara.Model {
  /**
   * @remarks
   * The end of the time range. Unit: seconds.
   * 
   * @example
   * 1671886740
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The region to which the destination IP address belongs. Valid values:
   * 
   * *   **cn**: a region in the Chinese mainland
   * *   **cn-hongkong**: China (Hong Kong)
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range. Unit: seconds.
   * 
   * @example
   * 1678080840
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      region: 'string',
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

