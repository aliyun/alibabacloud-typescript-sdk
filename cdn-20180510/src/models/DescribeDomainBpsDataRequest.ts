// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * By default, this operation queries bandwidth data for all accelerated domain names that belong to your Alibaba Cloud account.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2020-05-14T10:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data entries. Unit: seconds.
   * 
   * The time granularity varies with the maximum time range per query. Valid values: 300 (5 minutes), 3600 (1 hour), and 86400 (1 day). For more information, see **Usage notes**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP). You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISP names.
   * 
   * If you do not set this parameter, data of all ISPs is queried.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * If you do not specify a region, data in all regions is queried.
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
   * 2020-05-14T09:50:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
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

