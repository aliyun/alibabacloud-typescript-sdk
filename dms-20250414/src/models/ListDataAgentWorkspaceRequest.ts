// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * no use
   */
  maxResults?: number;
  /**
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * CreateTime
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * workspaceTest
   */
  workspaceName?: string;
  /**
   * @remarks
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

