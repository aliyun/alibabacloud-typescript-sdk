// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainTrafficDataRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Visual Edge Computing Service.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time must be later than the start time. Use ISO8601 notation for the date format and UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>
   * 
   * @example
   * 2021-09-21T02:50:42Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity for querying data. Supported values are 300, 3600, and 86400 seconds. If this parameter is not provided or an unsupported value is passed, the default value of 300 seconds is used.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * The English name of the ISP. Obtain this value through the DescribeCdnRegionAndIsp interface. If this parameter is not provided, the system queries all ISPs.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * The English name of the region. Obtain this value through the DescribeCdnRegionAndIsp interface. If this parameter is not provided, the system queries all regions.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time for data retrieval. Use ISO8601 notation for the date format and UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br> The minimum data granularity is 5 minutes.<br> If not specified, the system reads data from the past 24 hours by default.<br><br><br>
   * 
   * @example
   * 2021-08-18T16:00:00Z
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

