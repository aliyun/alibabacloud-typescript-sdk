// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for session creation.
   * 
   * @example
   * 1770912000000
   */
  createEndTime?: number;
  /**
   * @remarks
   * The start time for session creation.
   * 
   * @example
   * 1770825600000
   */
  createStartTime?: number;
  creatorId?: string;
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
   * The current Data Management unit.
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
  /**
   * @remarks
   * The mode. Valid values:
   * - Analysis
   * - Coding
   */
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
   * The session type. This parameter is required when a workspace is specified.
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
   * Analyze this data for me
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
      creatorId: 'CreatorId',
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
      creatorId: 'string',
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

