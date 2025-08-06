// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRealtimeDeliveryAccRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The end time must be later than the start time. The interval between the start time and the end time cannot exceed a year.
   * 
   * @example
   * 2016-06-30T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data entries. Unit: seconds. Valid values: 300, 3600, and 86400.
   * 
   * The default time granularity varies based on the interval between the start time and end time that you specify. If you set the interval to a value within (0,3] days, the default time granularity is 300 seconds. If you set the interval to a value within (3,30] days, the default time granularity is 3,600 seconds. If you set the interval to a value greater than 30 days, the default time granularity is 86,400 seconds. The default value is used if you specify an invalid value for this parameter or leave this parameter empty.
   * 
   * @example
   * 3600
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Logstore to which log entries are delivered.
   * 
   * @example
   * vod-log-store
   */
  logStore?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery.
   * 
   * @example
   * vod-logs
   */
  project?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-10-20T04:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      logStore: 'LogStore',
      ownerId: 'OwnerId',
      project: 'Project',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      logStore: 'string',
      ownerId: 'number',
      project: 'string',
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

