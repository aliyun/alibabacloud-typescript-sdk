// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentReportRequest extends $dara.Model {
  /**
   * @remarks
   * The list of agent IDs. The list can contain 0 to 100 agent IDs.
   * 
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIdList?: string;
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
   * The media type. Default value: Audio. Other valid values: Chat and Video.
   * 
   * @example
   * VIDEO
   */
  mediaType?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * wwtest@test_yunhu
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The start time of the historical data to retrieve. Default value: 00:00 of the current day. The earliest allowed value is 180 days before the current time. The statistical time precision is hour-level, rounded down to the nearest hour. This is a closed interval. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1532448000000
   */
  startTime?: number;
  /**
   * @remarks
   * The end time of the historical data to retrieve. Default value: the current time. The statistical time precision is hour-level, rounded up to the nearest hour. This is an open interval. For example, if the start time is 11:12:20 and the end time is 11:45:50, the aligned time range is [11:00:00, 12:00:00), which means greater than or equal to 11:00 and less than 12:00. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1532707199000
   */
  stopTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      startTime: 'StartTime',
      stopTime: 'StopTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: 'string',
      instanceId: 'string',
      mediaType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      startTime: 'number',
      stopTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

