// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentStatesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by a list of agent IDs.
   * 
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @remarks
   * Filters out offline agents. This parameter is fixed to true and does not support false at present.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  excludeOfflineUsers?: boolean;
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
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 300.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Filters agents by status. Only a single status can be specified.
   * 
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

