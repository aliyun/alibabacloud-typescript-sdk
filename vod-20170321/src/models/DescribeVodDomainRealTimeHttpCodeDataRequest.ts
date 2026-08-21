// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeHttpCodeDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name to query.
   * - Separate multiple domain names with commas (,). You can specify up to 100 domain names at a time.
   * - When you query multiple domain names, the returned data is the aggregated data of all specified domain names.
   * - You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management > CDN Configuration > Domain Names** in the left-side navigation pane to view the accelerated domain names that you have added to ApsaraVideo VOD. You can also call the [DescribeVodUserDomains](~~DescribeVodUserDomains~~) operation to query the list of accelerated domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP) in English. If you do not specify this parameter, data for all ISPs is queried.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region in English. If you do not specify this parameter, data for all regions is queried.
   * 
   * @example
   * shanghai
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-11-30T05:39:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
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

