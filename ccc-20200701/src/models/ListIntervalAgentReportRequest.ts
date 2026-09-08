// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntervalAgentReportRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * End time, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is the current time. If Interval is Daily, the maximum interval between StartTime and EndTime is 180 days. If Interval is Hourly, the maximum interval is 10 days. Time precision for statistics is at the hour level, rounded down to the next full hour, using an open interval. For example, if the start time is 11:12:20 and the end time is 11:45:50, the aligned input time range becomes [11:00:00, 12:00:00), meaning greater than or equal to 11:00:00 and less than 12:00:00.
   * 
   * @example
   * 1532707199000
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
   * Segment statistics type. Optional. Default value is Daily (aggregated by Day).
   * 
   * @example
   * Hourly
   */
  interval?: string;
  /**
   * @remarks
   * Media type. The default value is Audio. Other valid values include Chat and Video.
   * 
   * @example
   * VIDEO
   */
  mediaType?: string;
  /**
   * @remarks
   * Start time, formatted as a UNIX timestamp in milliseconds. This parameter is optional. The default value is 00:00:00 of the current day. Time precision for statistics is at the hour level, rounded down to the previous full hour, using a closed interval.
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
      mediaType: 'MediaType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      endTime: 'number',
      instanceId: 'string',
      interval: 'string',
      mediaType: 'string',
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

