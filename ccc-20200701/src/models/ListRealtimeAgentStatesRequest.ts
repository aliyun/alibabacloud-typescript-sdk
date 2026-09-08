// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRealtimeAgentStatesRequest extends $dara.Model {
  /**
   * @remarks
   * List of agent IDs, formatted as a JSON array string. The array can contain up to 20 elements. This parameter is optional and defaults to empty, which matches all agents under the current instance.
   * 
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIdList?: string;
  /**
   * @remarks
   * Perform fuzzy matching by agent name.
   * 
   * @example
   * agent
   */
  agentName?: string;
  /**
   * @remarks
   * Filters by a list of call types. The value is a string in JSON array format, where each array element is a call type. This parameter is optional and defaults to empty, which matches all call types.
   * 
   * @example
   * ["Inbound", "Outbound"]
   */
  callTypeList?: string;
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
   * Media type. The default is Audio. Other options include Chat (text), Video, and ALL.
   * 
   * @example
   * AUDIO
   */
  mediaType?: string;
  /**
   * @remarks
   * Filters agents who are in outbound-only mode. This parameter is optional and defaults to empty, which means no filtering by outbound-only mode is applied.
   * 
   * @example
   * false
   */
  outboundScenario?: boolean;
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs fuzzy filtering based on the full or partial agent display name, agent ID, or agent extension number. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * agent
   */
  query?: string;
  /**
   * @remarks
   * Filter by skill group ID. This parameter is optional and defaults to empty, which means no filtering is applied.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Filters by a list of statuses. This parameter is optional and defaults to empty, which matches all statuses.
   * 
   * @example
   * ["ACW", "Dialing"]
   */
  stateList?: string;
  /**
   * @remarks
   * Filter by work mode list. This parameter is optional and defaults to empty, which means all work modes are matched.
   * 
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

