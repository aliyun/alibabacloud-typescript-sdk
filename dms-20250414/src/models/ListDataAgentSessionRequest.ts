// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the session creation period.
   * 
   * @example
   * 1770912000000
   */
  createEndTime?: number;
  /**
   * @remarks
   * The start time of the session creation period.
   * 
   * @example
   * 1770825600000
   */
  createStartTime?: number;
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * Specifies whether to retrieve only favorited sessions.
   * 
   * @example
   * true
   */
  isSaved?: boolean;
  mode?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The session type. This parameter is required if a workspace is specified.
   * 
   * @example
   * myFavorite
   */
  queryType?: string;
  /**
   * @remarks
   * The Data Agent title. Fuzzy match is supported.
   * 
   * @example
   * 帮我分析一下这份数据
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
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
      mode: 'Mode',
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
      mode: 'string',
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

