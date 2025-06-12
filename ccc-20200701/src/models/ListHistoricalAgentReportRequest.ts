// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHistoricalAgentReportRequest extends $dara.Model {
  /**
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  skillGroupId?: string;
  /**
   * @example
   * 1532448000000
   */
  startTime?: number;
  /**
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

