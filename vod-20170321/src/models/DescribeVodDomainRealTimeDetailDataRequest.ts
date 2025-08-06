// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify a maximum of 20 accelerated domain names in each call. Separate domain names with commas (,).
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
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2019-11-30T05:40:00Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-23T12:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of data that you want to query. You can specify multiple data types and separate them with commas (,). Valid values:
   * 
   * qps: the number of queries per second bps: bandwidth data http_code: HTTP status codes
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  field?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP).
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. If you do not specify a region, data in all regions is queried.
   * 
   * @example
   * shanghai
   */
  locationNameEn?: string;
  /**
   * @remarks
   * Specifies whether to return a summary value. Valid values:
   * 
   * true false (default)
   * 
   * @example
   * false
   */
  merge?: string;
  /**
   * @remarks
   * Specifies whether to return a summary value. Valid values:
   * 
   * *   **true**: groups the results by domain name and merges the results by region and ISP.
   * *   **false**: groups the results by domain name.
   * 
   * Default value: **false**.
   * 
   * @example
   * true
   */
  mergeLocIsp?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2019-11-30T05:33:00Z.
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

