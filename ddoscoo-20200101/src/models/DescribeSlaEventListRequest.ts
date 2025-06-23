// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlaEventListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 3289457398
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address of the Anti-DDoS Pro or Anti-DDoS Premium instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the service Valid values:
   * 
   * *   **cn**: Anti-DDoS Pro
   * *   **cn-hongkong**: Anti-DDoS Premium
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 3289457398
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      page: 'Page',
      pageSize: 'PageSize',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      page: 'number',
      pageSize: 'number',
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

