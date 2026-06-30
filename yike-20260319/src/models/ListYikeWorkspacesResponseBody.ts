// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeWorkspacesResponseBodyWorkspaceList extends $dara.Model {
  /**
   * @remarks
   * Workspace code
   * 
   * @example
   * ABCD12
   */
  code?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2026-04-29T10:22:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * Default project ID
   * 
   * @example
   * pd_1234***
   */
  defaultProductionId?: string;
  /**
   * @remarks
   * Workspace status
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * workspace title
   */
  title?: string;
  /**
   * @remarks
   * Number of users in the workspace
   * 
   * @example
   * 1
   */
  userCount?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * ws_1243****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      defaultProductionId: 'DefaultProductionId',
      status: 'Status',
      title: 'Title',
      userCount: 'UserCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      defaultProductionId: 'string',
      status: 'string',
      title: 'string',
      userCount: 'string',
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

export class ListYikeWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of workspaces
   * 
   * @example
   * 54
   */
  totalCount?: number;
  /**
   * @remarks
   * Workspace list
   */
  workspaceList?: ListYikeWorkspacesResponseBodyWorkspaceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workspaceList: 'WorkspaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      workspaceList: { 'type': 'array', 'itemType': ListYikeWorkspacesResponseBodyWorkspaceList },
    };
  }

  validate() {
    if(Array.isArray(this.workspaceList)) {
      $dara.Model.validateArray(this.workspaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

