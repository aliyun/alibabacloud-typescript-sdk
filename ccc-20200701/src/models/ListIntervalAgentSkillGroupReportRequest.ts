// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentSkillGroupReportRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * The end time. This is a UNIX timestamp in milliseconds. This parameter is not required. The default value is the current time. If Interval is set to Daily, the maximum interval between StartTime and EndTime is 180 days. If Interval is set to Hourly, the maximum interval is 10 days. The statistics are measured in hours and rounded up to the nearest hour. This is an open interval. For example, if the start time is 11:12:20 and the end time is 11:45:50, the aligned time range for the input parameters is [11:00:00, 12:00:00), which means greater than or equal to 11:00 and less than 12:00.
   * 
   * @example
   * 1558443508000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of interval-based statistics. This parameter is not required. The default value is Daily (summarized by day).
   * 
   * @example
   * Daily
   */
  interval?: string;
  /**
   * @remarks
   * The skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * skg-default@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The start timestamp. The default value is 00:00 on the current day. The statistics are measured in hours and rounded down to the nearest hour. This is a closed interval.
   * 
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      interval: 'Interval',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
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

