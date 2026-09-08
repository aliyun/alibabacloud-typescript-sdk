// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalInstanceReportRequest extends $dara.Model {
  /**
   * @remarks
   * End Time, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is the current time. If Interval is Daily, the maximum interval between StartTime and EndTime is 180 days. If Interval is Hourly, the maximum interval is 10 days. The time precision for statistics is hourly, snapped backward to the start of the hour, using an open interval. For example, if the original Start Time is 11:12:20 and End Time is 11:45:50, the aligned time range becomes [11:00:00, 12:00:00), meaning greater than or equal to 11:00:00 and less than 12:00:00.
   * 
   * @example
   * 1620316799000
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Segment statistics type. This parameter is optional. The default value is Daily (daily aggregation).
   * 
   * @example
   * Hourly
   */
  interval?: string;
  /**
   * @remarks
   * Start Time, in UNIX timestamp format with millisecond precision. This parameter is optional. The default value is 00:00 of the current day. The time granularity for statistics is hourly, rounded down to the nearest hour, and uses a closed interval.
   * 
   * @example
   * 1620230400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

