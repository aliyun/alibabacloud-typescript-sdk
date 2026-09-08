// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAgentRequest extends $dara.Model {
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
   * The number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query all custom agents in the published state. Default value: false.
   * 
   * @example
   * true
   */
  queryAllReleased?: boolean;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search by custom agent name and description.
   * 
   * @example
   * TestAgent
   */
  searchKey?: string;
  /**
   * @remarks
   * The status of the custom agent.
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

