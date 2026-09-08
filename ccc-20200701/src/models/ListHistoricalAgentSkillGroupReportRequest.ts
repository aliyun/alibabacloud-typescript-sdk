// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentSkillGroupReportRequest extends $dara.Model {
  /**
   * @remarks
   * List of agent IDs. The list size is 0 to 100.
   * 
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIdList?: string;
  /**
   * @remarks
   * End time for historical data retrieval. Format is UNIX timestamp in milliseconds. Optional. Defaults to the current time. The statistical time granularity is hourly, rounded up to the nearest hour, in an open interval. For example, if the start time is 11:12:20 and the end time is 11:45:50, the aligned request parameter time range is [11:00:00, 12:00:00), meaning greater than or equal to 11:00 and less than 12:00.
   * 
   * @example
   * 1620273600000
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
   * Media type. Defaults to Audio. Other optional parameters include Chat and Video.
   * 
   * @example
   * VIDEO
   */
  mediaType?: string;
  /**
   * @remarks
   * Page number. Valid values are 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Valid values are 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of skill group IDs. The list size is 0 to 100.
   * 
   * @example
   * [
   *       "skg1@ccc-test",
   *       "skg2@ccc-test"
   * ]
   */
  skillGroupIdList?: string;
  /**
   * @remarks
   * Start timestamp. Defaults to 00:00 on the current day. The statistical time granularity is hourly, rounded down to the nearest hour, in a closed interval.
   * 
   * @example
   * 1634140800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupIdList: 'SkillGroupIdList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: 'string',
      endTime: 'number',
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupIdList: 'string',
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

