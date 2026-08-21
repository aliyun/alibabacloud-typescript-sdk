// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name to query.
   * 
   * - Batch queries are supported. Separate multiple domain names with commas (,). You can specify up to 20 domain names at a time.
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com), and in the left-side navigation pane, choose **Configuration Management > CDN Configuration > Domain Names** to view the accelerated domain names that you have added to ApsaraVideo VOD. Alternatively, call the [DescribeVodUserDomains](~~DescribeVodUserDomains~~) operation to query the list of accelerated domain names.
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
   * > The end time must be later than the start time, and the difference between the end time and the start time cannot exceed 10 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-23T12:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of access data to query. You can specify multiple types. Separate multiple types with commas (,). Valid values:
   * 
   * - **qps**: queries per second (QPS).
   * - **bps**: bandwidth data.
   * - **http_code**: HTTP status codes.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  field?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) name in English. If you do not specify this parameter, data for all ISPs is queried by default.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The region name in English. If you do not specify this parameter, data for all regions is queried by default.
   * 
   * @example
   * shanghai
   */
  locationNameEn?: string;
  /**
   * @remarks
   * Specifies whether to return aggregated data by domain name. Valid values:
   * 
   * - **true**: Returns aggregated data across all domain names.
   * - **false** (default): Returns data grouped by domain name.
   * 
   * @example
   * false
   */
  merge?: string;
  /**
   * @remarks
   * Specifies whether to return aggregated data by region and ISP. Valid values:
   * 
   * - **true**: Returns data grouped only by domain name, with region and ISP values aggregated.
   * - **false** (default): Returns data grouped by domain name, region, and ISP.
   * 
   * @example
   * true
   */
  mergeLocIsp?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-23T12:35:12Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      field: 'Field',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      merge: 'Merge',
      mergeLocIsp: 'MergeLocIsp',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      field: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      merge: 'string',
      mergeLocIsp: 'string',
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

