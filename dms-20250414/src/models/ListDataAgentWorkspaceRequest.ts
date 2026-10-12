// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the creator used to search for workspaces.
   * 
   * @example
   * 186xxx9947
   */
  creator?: string;
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
   * The maximum number of results per page.
   * 
   * @example
   * no use
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The sort field name.
   * 
   * @example
   * CreateTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  /**
   * @remarks
   * The workspace type.
   * 
   * This parameter is required.
   * 
   * @example
   * MY
   */
  workspaceType?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      DMSUnit: 'DMSUnit',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceName: 'WorkspaceName',
      workspaceType: 'WorkspaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      DMSUnit: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      workspaceName: 'string',
      workspaceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

