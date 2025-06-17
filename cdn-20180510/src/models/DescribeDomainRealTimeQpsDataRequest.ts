// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeQpsDataRequest extends $dara.Model {
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
   * 2019-12-02T11:26:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP).
   * 
   * If you do not set this parameter, data of all ISPs is queried. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISP names.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * If you do not set this parameter, data in all regions is queried. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
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
   * 2019-12-02T11:25:00Z
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

