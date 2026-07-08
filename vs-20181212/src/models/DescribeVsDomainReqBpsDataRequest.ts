// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainReqBpsDataRequest extends $dara.Model {
  /**
   * @remarks
   * Visual Edge Computing Service domain name.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * End time must be later than start time. Use ISO 8601 notation and UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>
   * 
   * @example
   * 2021-10-16T07:00:46Z
   */
  endTime?: string;
  /**
   * @remarks
   * Time granularity for the query, in seconds. Valid values: 300, 3600, and 86400. If you omit this parameter or specify an unsupported value, the default value 300 is used.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * ISP name in English. Get this value from the DescribeCdnRegionAndIsp operation. If you omit this parameter, the system queries data for all ISPs.
   * 
   * @example
   * telecom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * Region name in English. Get this value from the DescribeCdnRegionAndIsp operation. If you omit this parameter, the system queries data for all regions.
   * 
   * @example
   * beijing
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * Start time of the data query. Use ISO 8601 notation and UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>Minimum data granularity is 5 minutes.<br>If you omit this parameter, the system reads data from the last 24 hours by default.<br><br><br>
   * 
   * @example
   * 2022-01-15T16:00:00Z
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

