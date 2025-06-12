// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentSummaryReportsSinceMidnightRequest extends $dara.Model {
  /**
   * @example
   * ["agent1@ccc-test", "agent2@ccc-test"]
   */
  agentIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

