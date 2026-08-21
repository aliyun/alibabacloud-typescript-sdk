// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRangeDataByLocateAndIspServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name to query.
   * 
   * You can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com), and choose **Configuration Management > CDN Configuration > Domain Names** in the left-side navigation pane to view the accelerated domain names that you have added to ApsaraVideo VOD. You can also call the [DescribeVodUserDomains](~~DescribeVodUserDomains~~) operation to query the list of accelerated domain names.
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
   * 
   * > The end time must be later than the start time. The maximum time range between the start time and end time is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-29T03:55:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ISP name in English. If you do not specify this parameter, data of all ISPs is queried. You can specify only one ISP for each request.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The region name in English. If you do not specify this parameter, data of all regions is queried. Separate multiple region names with commas (,).
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
   * This parameter is required.
   * 
   * @example
   * 2023-05-29T03:50:00Z
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

