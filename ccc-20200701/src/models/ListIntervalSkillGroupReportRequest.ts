// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalSkillGroupReportRequest extends $dara.Model {
  /**
   * @remarks
   * End Time, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is the current time. If Interval is Daily, the maximum interval between StartTime and EndTime is 180 days. If Interval is Hourly, the maximum interval is 10 days. The time precision for statistics is hourly, snapped backward to the nearest hour, using an open interval. For example, if the Start Time is 11:12:20 and the End Time is 11:45:50, the aligned input parameter Time Range becomes [11:00:00, 12:00:00), meaning greater than or equal to 11:00:00 and less than 12:00:00.
   * 
   * @example
   * 1604725528000
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
   * Segment statistics type. The default is Daily (aggregated by day).
   * 
   * @example
   * Hourly
   */
  interval?: string;
  /**
   * @remarks
   * Media type. The default is Audio. Other valid values include Chat and Video.
   * 
   * @example
   * VIDEO
   */
  mediaType?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * skg-default@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Start Time, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is 00:00 of the current day. Statistics are aggregated by hour, rounded down to the nearest hour, and the interval is closed.
   * 
   * @example
   * 1604639129000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      mediaType: 'MediaType',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      mediaType: 'string',
      skillGroupId: 'string',
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

