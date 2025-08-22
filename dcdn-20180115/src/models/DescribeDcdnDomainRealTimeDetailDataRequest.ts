// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainRealTimeDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
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
   * > The end time must be later than the start time, and the maximum time range to query is 10 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of information that you want to query. Separate multiple types with commas (,). Valid values:
   * 
   * *   **qps**: queries per second (QPS)
   * *   **bps**: bandwidth
   * *   **http_code**: HTTP status code
   * 
   * This parameter is required.
   * 
   * @example
   * bps
   */
  field?: string;
  /**
   * @remarks
   * The name of the ISP. You can call the [DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~) operation to obtain the ISP name.
   * 
   * If you do not set this parameter, data of all ISPs is queried.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. You can call the [DescribeDcdnRegionAndIsp](~~DescribeDcdnRegionAndIsp~~) operation to obtain the region name.
   * 
   * If you do not set this parameter, all regions are queried.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  /**
   * @remarks
   * Specifies whether to return a summary value. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * true
   */
  merge?: string;
  /**
   * @remarks
   * Specifies whether to return a summary value of **LocationNameEn** and **IspNameEn**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * true
   */
  mergeLocIsp?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-30T05:33:00Z
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

