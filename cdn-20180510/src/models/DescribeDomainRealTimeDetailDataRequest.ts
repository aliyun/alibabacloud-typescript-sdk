// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeDetailDataRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name that you want to query.
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
   * > The end time must be later than the start time. The difference between the end time and the start time cannot exceed 10 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of data that you want to query. You can specify multiple data types and separate them with commas (,). Valid values:
   * 
   * *   **qps**: queries per second (QPS)
   * *   **bps**: bandwidth
   * *   **http_code**: HTTP status code
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  field?: string;
  /**
   * @remarks
   * The name of the Internet service provider (ISP). You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query ISPs. If you do not specify an ISP, data of all ISPs is queried.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The name of the region. If you do not specify a region, data in all regions is queried. You can call the [DescribeCdnRegionAndIsp](https://help.aliyun.com/document_detail/91077.html) operation to query regions.
   * 
   * @example
   * Guangdong
   */
  locationNameEn?: string;
  /**
   * @remarks
   * Specifies whether to return a summary value based on ISPs and regions. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  merge?: string;
  /**
   * @remarks
   * Specifies whether to return a summary value based on ISPs and regions. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  mergeLocIsp?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. Example: 2019-11-30T05:33:00Z.
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

