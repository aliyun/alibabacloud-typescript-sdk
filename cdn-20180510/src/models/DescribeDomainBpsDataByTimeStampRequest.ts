// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsDataByTimeStampRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The names of the Internet service providers (ISPs). Separate multiple ISPs with commas (,).
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * This parameter is required.
   * 
   * @example
   * uni***,tele***
   */
  ispNames?: string;
  /**
   * @remarks
   * The regions. Separate multiple regions with commas (,).
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * This parameter is required.
   * 
   * @example
   * liaoning,guangxi
   */
  locationNames?: string;
  /**
   * @remarks
   * The point in time to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The data is collected every 5 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ispNames: 'IspNames',
      locationNames: 'LocationNames',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ispNames: 'string',
      locationNames: 'string',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

