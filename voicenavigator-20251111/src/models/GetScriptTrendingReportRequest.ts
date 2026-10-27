// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptTrendingReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistics. The parameter value must be a UNIX timestamp in milliseconds. It indicates the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970. The following limits apply:
   * 
   * 1. Time range: You can query data by hour for up to 7 days or by day for up to 180 days.
   * 
   * 2. Alignment with time granularity: If you query data by hour, the minutes, seconds, and milliseconds must be 0. If you query data by day, the hours, minutes, seconds, and milliseconds must be 0. If the specified timestamp is not aligned with the time granularity, the system automatically rounds it up to the next valid time.
   * 
   * @example
   * 1582103299434
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 891264b9-5883-4068-94a6-241ceb8d51e4
   */
  scriptId?: string;
  /**
   * @remarks
   * The start time of the statistics. The parameter value is a UNIX timestamp in milliseconds. It indicates the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970. The following limits apply:
   * 
   * 1. Valid start time: You can query data collected within the last 365 days from the current date.
   * 
   * 2. Alignment with time granularity: If you query data by hour, the minutes, seconds, and milliseconds must be 0. If you query data by day, the hours, minutes, seconds, and milliseconds must be 0.
   * 
   * 3. If the specified timestamp is not aligned with the time granularity, the system automatically rounds it up to the next valid time.
   * 
   * @example
   * 1582267398628
   */
  startTime?: number;
  /**
   * @remarks
   * The time interval.
   * 
   * @example
   * 1d
   */
  timeInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      startTime: 'StartTime',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      scriptId: 'string',
      startTime: 'number',
      timeInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

