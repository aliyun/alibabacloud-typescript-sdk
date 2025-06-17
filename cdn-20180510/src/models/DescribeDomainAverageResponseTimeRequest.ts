// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainAverageResponseTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
   * 
   * By default, this operation queries the geographic distribution of users for all accelerated domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the query condition. When you set the value to dynamic, this operation queries the average response time of dynamic resources and static resources. If you do not set this parameter, this operation queries the average response time of only static resources.
   * 
   * @example
   * domaintype
   */
  domainType?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The end time must be later than the start time.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time interval between the data entries. Unit: seconds. The value varies based on the values of the **StartTime** and **EndTime** parameters. Valid values:
   * 
   * *   If the time span between StartTime and EndTime is less than 3 days, valid values are **300**, **3600**, and **86400**. Default value: **300**.
   * *   If the time span between StartTime and EndTime is greater than or equal to 3 days and less than 31 days, valid values are **3600** and **86400**. Default value: **3600**.
   * *   If the time range between StartTime and EndTime is 31 days or longer, the valid value is **86400**. Default value: **86400**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) for your Alibaba Cloud CDN service. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISPs. If you do not set this parameter, data of all ISPs is queried.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions. If you do not set this parameter, data in all regions is queried.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether to automatically set the interval. If you set the value to 1, the value of the Interval parameter is automatically assigned based on the StartTime and EndTime parameters. You can set this parameter or the Interval parameter.
   * 
   * @example
   * 1
   */
  timeMerge?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      timeMerge: 'TimeMerge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      timeMerge: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

