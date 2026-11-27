// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcUserCntDataRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can specify only one ID.
   * 
   * By default, all application IDs are queried.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the queried data. The time is displayed in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * The end time must be later than the start time.
   * 
   * @example
   * 2018-01-29T01:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity at which the data is queried. Unit: seconds.
   * 
   * Valid values: **3600** (one hour) or **86400** (one day). Default value: **3600**.
   * 
   * @example
   * 3600
   */
  interval?: string;
  ownerId?: number;
  /**
   * @remarks
   * The service area. CN: China (default value).
   * 
   * @example
   * CN
   */
  serviceArea?: string;
  /**
   * @remarks
   * The start time of the queried data. The time is displayed in UTC. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2018-01-29T00:00:00Z
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

