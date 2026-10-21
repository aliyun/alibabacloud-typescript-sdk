// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The custom agent type. Valid values:
   * - Default: system built-in custom agent
   * - Common: regular custom agent
   * 
   * @example
   * Common
   */
  agentType?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query all published custom agents. Default value: false.
   * 
   * @example
   * true
   */
  queryAllReleased?: boolean;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search for custom agent names and descriptions.
   * 
   * @example
   * Test agent
   */
  searchKey?: string;
  /**
   * @remarks
   * The custom agent status.
   * 
   * @example
   * RELEASED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryAllReleased: 'QueryAllReleased',
      searchKey: 'SearchKey',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryAllReleased: 'boolean',
      searchKey: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

