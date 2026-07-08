// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainReqTrafficDataRequest extends $dara.Model {
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
   * End time of the query. Must be later than the start time. Specify in ISO 8601 format using UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>
   * 
   * @example
   * 2021-10-13T10:00:41Z
   */
  endTime?: string;
  /**
   * @remarks
   * Time granularity of the query. Unit: seconds. Valid values:
   * 
   * - **300** (default).
   * 
   * - **3600**.
   * 
   * - **86400**.
   * 
   * > If you omit this parameter or specify an unsupported value, the default value **300** is used.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * ISP name in English. Call DescribeCdnRegionAndIsp to get valid values. If you omit this parameter, the system returns data for all ISPs.
   * 
   * @example
   * unicom
   */
  ispNameEn?: string;
  /**
   * @remarks
   * Region name in English. Call DescribeCdnRegionAndIsp to get valid values. If you omit this parameter, the system returns data for all regions.
   * 
   * @example
   * shanghai
   */
  locationNameEn?: string;
  ownerId?: number;
  /**
   * @remarks
   * Start time of the query. Specify in ISO 8601 format using UTC time.<br>Format: YYYY-MM-DDThh:mm:ssZ<br>Minimum time granularity is 5 minutes.<br>If you omit this parameter, the system returns data for the last 24 hours.<br><br><br>
   * 
   * @example
   * 2021-09-30T16:00:00Z
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

