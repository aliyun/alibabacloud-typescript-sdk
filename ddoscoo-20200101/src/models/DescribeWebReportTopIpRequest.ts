// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebReportTopIpRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query the domain names for which forwarding rules are configured.
   * 
   * @example
   * app.bmjqxvb.cn
   */
  domain?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1687228200
   */
  endTime?: number;
  /**
   * @remarks
   * The interval at which data is collected. Unit: seconds. Valid values are 300, 3600, and 86400.
   * 
   * *   If the time span between StartTime and EndTime is less than 3 days (3 days excluded), valid values are 300, 3600, and 86400.
   * *   If the time span between StartTime and EndTime is from 3 to 31 days (31 days excluded), valid values are 3600 and 86400.
   * *   If the time span between StartTime and EndTime is 31 days or longer, the valid value is 86400.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  interval?: number;
  /**
   * @remarks
   * The source of the statistics. Valid values:
   * 
   * *   **visit**: indicates all IP addresses.
   * *   **block**: indicates blocked IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  queryType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1680424200
   */
  startTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 5
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      queryType: 'QueryType',
      startTime: 'StartTime',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      queryType: 'string',
      startTime: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

