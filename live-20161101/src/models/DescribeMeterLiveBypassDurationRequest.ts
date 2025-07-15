// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterLiveBypassDurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can view the application ID on the [Applications](https://help.aliyun.com/document_detail/2355593.html) page in the ApsaraVideo Real-time Communication (ARTC) section of the ApsaraVideo Live console.
   * 
   * This parameter is required.
   * 
   * @example
   * 4346289a-a790-4869-9e23-22766d5e****
   */
  appId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The end time must be later than the start time. The time range that can be specified is greater than or equal to 5 minutes and less than or equal to 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Valid values:
   * 
   * *   300
   * *   3600
   * *   86400
   * 
   * If you specify an invalid value or do not specify this parameter, the default value 3600 is used.
   * 
   * @example
   * 86400
   */
  interval?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'string',
      interval: 'string',
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

