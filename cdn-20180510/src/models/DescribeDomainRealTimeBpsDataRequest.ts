// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
   * 
   * > You can specify up to 500 domain names in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP).
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISPs. If you do not set this parameter, all ISPs are queried.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions. If you do not set this parameter, all regions are queried.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-11-30T05:33:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
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

