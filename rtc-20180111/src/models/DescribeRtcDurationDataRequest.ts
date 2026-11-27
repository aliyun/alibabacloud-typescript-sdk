// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcDurationDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can specify only one ID.
   * 
   * If you leave this parameter empty, data for all your applications is returned.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * The end time must be later than the start time.
   * 
   * @example
   * 2020-02-04T07:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query, in seconds.
   * 
   * Valid values are **3600** (1 hour) and **86400** (1 day). The default value is **3600**.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The area where the service is deployed. The default value is CN, which indicates China.
   * 
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2020-02-04T05:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      ownerId: 'OwnerId',
      serviceArea: 'ServiceArea',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
      ownerId: 'number',
      serviceArea: 'string',
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

