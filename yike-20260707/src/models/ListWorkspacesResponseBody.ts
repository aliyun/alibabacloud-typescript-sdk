// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspaceList extends $dara.Model {
  /**
   * @remarks
   * The workspace code.
   * 
   * @example
   * c40***
   */
  code?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2026-01-07T02:21:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the default project for the workspace.
   * 
   * @example
   * pd_061716****
   */
  defaultProjectId?: string;
  /**
   * @remarks
   * The workspace status. Valid values: Online: enabled. Offline: disabled.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * Video Production Workspace
   */
  title?: string;
  /**
   * @remarks
   * The current number of users in the workspace, returned as a string.
   * 
   * @example
   * 2
   */
  userCount?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_zna577pdximv***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      defaultProjectId: 'DefaultProjectId',
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
      defaultProjectId: 'string',
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

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of workspaces that meet the query conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workspaces on the current page.
   */
  workspaceList?: ListWorkspacesResponseBodyWorkspaceList[];
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
      workspaceList: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaceList },
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

