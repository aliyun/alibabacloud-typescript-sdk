// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopClientIpVisitRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
   * 
   * By default, this operation queries client IP addresses for all accelerated domain names.
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
   * The end time must be later than the start time.
   * 
   * @example
   * 2019-10-01T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Maximum value: 100.
   * 
   * Default value: 20. The default value specifies that the top 20 IP addresses are returned.
   * 
   * @example
   * 20
   */
  limit?: string;
  /**
   * @remarks
   * The name of the region. Separate multiple region names with commas (,).
   * 
   * You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * The criterion by which you want to sort client IP addresses. Valid values:
   * 
   * *   **traf**: by network traffic. This is the default value.
   * *   **acc**: by the number of requests.
   * 
   * @example
   * traf
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-09-30T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      limit: 'Limit',
      locationNameEn: 'LocationNameEn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      limit: 'string',
      locationNameEn: 'string',
      sortBy: 'string',
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

