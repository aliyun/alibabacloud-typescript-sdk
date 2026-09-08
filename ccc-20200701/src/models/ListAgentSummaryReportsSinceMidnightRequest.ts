// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSummaryReportsSinceMidnightRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by a list of agent IDs, with up to 100 IDs.
   * 
   * > If the agent ID list is not empty, the system directly queries based on the provided agent ID list. In this case, the pageSize and pageNumber parameters are invalid, and the data is returned directly. For example, if the request parameter is pageNumber = 3, the response parameter will also be pageNumber = 3.
   * 
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIds?: string;
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
   * Page number, ranging from 1 to 100. Optional. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100. Optional. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

