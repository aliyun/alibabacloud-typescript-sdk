// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRealtimeDeliveryAccRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * The end time must be later than the start time.
   * 
   * @example
   * 2016-10-20T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the data entries. Unit: seconds. The value varies based on the values of the **StartTime** and **EndTime** parameters. Valid values:
   * 
   * *   If the time span between StartTime and EndTime is less than 3 days, valid values are **300**, **3600**, and **86400**. Default value: **300**.
   * *   If the time span between StartTime and EndTime is greater than or equal to 3 days and less than 31 days, valid values are **3600** and **86400**. Default value: **3600**.
   * *   If the time span between StartTime and EndTime is 31 days or longer, the valid value is **86400**. Default value: **86400**.
   * 
   * @example
   * 300
   */
  interval?: string;
  /**
   * @remarks
   * The name of the Logstore that stores log data. If you do leave this parameter empty, real-time log deliveries of all Logstores are queried.
   * 
   * @example
   * LogStore
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the Log Service project that is used for real-time log delivery. If you do leave this parameter empty, real-time log deliveries of all projects are queried.
   * 
   * @example
   * Project
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
      project: 'Project',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      logStore: 'string',
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

