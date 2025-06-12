// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeAgentStatesRequest extends $dara.Model {
  /**
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIdList?: string;
  /**
   * @example
   * agent
   */
  agentName?: string;
  /**
   * @example
   * ["INBOUND", "OUTBOUND"]
   */
  callTypeList?: string;
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
   * @example
   * false
   */
  outboundScenario?: boolean;
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
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * agent
   */
  query?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * ["ACW", "Dialing"]
   */
  stateList?: string;
  /**
   * @example
   * ["OFFICE_PHONE","ON_SITE"]
   */
  workModeList?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdList: 'AgentIdList',
      agentName: 'AgentName',
      callTypeList: 'CallTypeList',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      outboundScenario: 'OutboundScenario',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      skillGroupId: 'SkillGroupId',
      stateList: 'StateList',
      workModeList: 'WorkModeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdList: 'string',
      agentName: 'string',
      callTypeList: 'string',
      instanceId: 'string',
      mediaType: 'string',
      outboundScenario: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      skillGroupId: 'string',
      stateList: 'string',
      workModeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

