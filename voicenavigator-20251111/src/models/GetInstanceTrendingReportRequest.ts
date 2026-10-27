// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceTrendingReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical period. The value is a millisecond-level UNIX timestamp that represents the number of milliseconds elapsed since 1970-01-01 00:00:00 UTC. The following constraints apply:
   * 
   * Time range constraint: The maximum time range is 7 days for hourly queries and 180 days for daily queries.
   * Time granularity alignment: For hourly queries, the minutes, seconds, and milliseconds must be 0. For daily queries, the hours, minutes, seconds, and milliseconds must be 0.
   * If the specified timestamp is not aligned with the corresponding granularity, the server automatically rounds it up.
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
   * 82b2eaae-ce5c-45f8-8231-f15b6b27e55c
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the statistical period. The value is a millisecond-level UNIX timestamp that represents the number of milliseconds elapsed since 1970-01-01 00:00:00 UTC. The following constraints apply:
   * 1. Earliest boundary: The start time can trace back to 00:00:00 of the date 365 calendar days before the current date.
   * 2. Time granularity alignment: For hourly queries, the minutes, seconds, and milliseconds must be 0. For daily queries, the hours, minutes, seconds, and milliseconds must be 0.
   * 3. If the specified timestamp is not aligned with the corresponding granularity, the server automatically rounds it up.
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
      startTime: 'StartTime',
      timeInterval: 'TimeInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
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

