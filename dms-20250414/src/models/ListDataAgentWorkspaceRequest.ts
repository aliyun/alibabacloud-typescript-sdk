// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceRequest extends $dara.Model {
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
   * This parameter is reserved for future use.
   * 
   * @example
   * no use
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is reserved for future use.
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
   * The field to sort by.
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
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The workspace name.
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

