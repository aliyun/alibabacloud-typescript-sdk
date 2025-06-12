// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStatesRequest extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  excludeOfflineUsers?: boolean;
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
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * Ready
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      excludeOfflineUsers: 'ExcludeOfflineUsers',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillGroupId: 'SkillGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      excludeOfflineUsers: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      skillGroupId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

