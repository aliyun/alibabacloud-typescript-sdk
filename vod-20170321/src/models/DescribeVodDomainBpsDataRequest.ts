// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to be queried. If you do not specify this parameter, the merged data of all your domain names for CDN is returned. You can specify multiple domain names. Separate them with commas (,).
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2015-12-10T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The query interval. Unit: seconds. Valid values: **300**, **3600**, and **86400**.
   * 
   * *   If the time range to query is less than 3 days, valid values are **300**, **3600**, and **86400**. The default value is 300.
   * *   If the time range to query is from 3 to less than 31 days, valid values are **3600** and **86400**. The default value is 3600.
   * *   If the time range to query is from 31 to 90 days, the valid value is **86400**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP). If you do not specify this parameter, the data of all ISPs is returned.
   * 
   * @example
   * Alibaba
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. If you do not specify this parameter, the data in all regions is returned. Only data in the China (Shanghai) region can be queried.
   * 
   * @example
   * cn-shanghai
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > The minimum query interval is 5 minutes. If you do not specify this parameter, the data in the last 24 hours is queried.
   * 
   * @example
   * 2015-12-10T13:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      ownerId: 'number',
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

