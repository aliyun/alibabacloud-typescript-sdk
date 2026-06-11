// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Session creation end time
   * 
   * @example
   * 1770912000000
   */
  createEndTime?: number;
  /**
   * @remarks
   * Session creation start time
   * 
   * @example
   * 1770825600000
   */
  createStartTime?: number;
  /**
   * @remarks
   * Custom Agent ID
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * Current DMS unit
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * Whether to return only saved sessions
   * 
   * @example
   * true
   */
  isSaved?: boolean;
  /**
   * @remarks
   * Page number for pagination
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Session type. Required when you specify a collaboration workspace.
   * 
   * @example
   * myFavorite
   */
  queryType?: string;
  /**
   * @remarks
   * Data Agent title (supports fuzzy search)
   * 
   * @example
   * 帮我分析一下这份数据
   */
  title?: string;
  /**
   * @remarks
   * Collaboration workspace ID
   * 
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createEndTime: 'CreateEndTime',
      createStartTime: 'CreateStartTime',
      customAgentId: 'CustomAgentId',
      DMSUnit: 'DMSUnit',
      isSaved: 'IsSaved',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createEndTime: 'number',
      createStartTime: 'number',
      customAgentId: 'string',
      DMSUnit: 'string',
      isSaved: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      title: 'string',
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

