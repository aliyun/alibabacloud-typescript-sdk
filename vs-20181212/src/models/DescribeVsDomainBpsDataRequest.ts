// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * Domain Names. If this parameter is empty, the system returns merged data for all accelerated Domain Names. Enter the accelerated Domain Names to query. Separate multiple Domain Names with commas.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time must be later than the start time. The date format follows ISO8601 notation and uses UTC time. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2021-10-02T02:30:48Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for query data. Supports 300, 3600, and 86400 seconds. If this parameter is not specified or the specified value is not supported, the system uses 300 seconds by default.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The English name of the carrier (ISP). Obtain this from the DescribeCdnRegionAndIsp interface. If not specified, the system queries all carriers (ISPs).
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The English name of the region. Obtain this from the DescribeCdnRegionAndIsp interface. If not specified, the system queries all regions.
   * 
   * @example
   * guangdong
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time for data retrieval. The date format follows ISO8601 notation and uses UTC time. Format: YYYY-MM-DDThh:mm:ssZ. The minimum data granularity is 5 minutes. If not specified, the system reads data from the past 24 hours.
   * 
   * @example
   * 2021-12-26T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      interval: 'Interval',
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
      interval: 'string',
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

