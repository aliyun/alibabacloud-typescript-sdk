// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKgAuthorizedWorkspacesResponseBodyDataWorkspaceListRoleList extends $dara.Model {
  /**
   * @remarks
   * The code of the workspace role.
   * 
   * @example
   * WORKSPACE_ADMIN
   */
  code?: string;
  /**
   * @remarks
   * The name of the workspace role.
   * 
   * @example
   * Storage management
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgAuthorizedWorkspacesResponseBodyDataWorkspaceList extends $dara.Model {
  /**
   * @remarks
   * The description of the knowledge graph workspace.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The creation time of the knowledge graph workspace.
   * 
   * @example
   * 2026-08-25 12:34:56
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The latest publish time of the knowledge graph workspace. This value is empty if the workspace has never been published successfully.
   * 
   * @example
   * 2026-08-25 12:34:56
   */
  lastPublishTime?: string;
  /**
   * @remarks
   * The latest publish version number of the knowledge graph workspace. This value is empty if the workspace has never been published successfully.
   * 
   * @example
   * 10
   */
  lastPublishVersion?: number;
  /**
   * @remarks
   * The name of the knowledge graph workspace.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of roles assigned to the specified user in the workspace. This is an empty list if the user is not a member of the workspace.
   */
  roleList?: GetKgAuthorizedWorkspacesResponseBodyDataWorkspaceListRoleList[];
  /**
   * @remarks
   * The ID of the knowledge graph workspace.
   * 
   * @example
   * abc1011
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      lastPublishTime: 'LastPublishTime',
      lastPublishVersion: 'LastPublishVersion',
      name: 'Name',
      roleList: 'RoleList',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'string',
      lastPublishTime: 'string',
      lastPublishVersion: 'number',
      name: 'string',
      roleList: { 'type': 'array', 'itemType': GetKgAuthorizedWorkspacesResponseBodyDataWorkspaceListRoleList },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKgAuthorizedWorkspacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of knowledge graph workspaces that the user has permissions on.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of knowledge graph workspaces that the user has permissions on.
   */
  workspaceList?: GetKgAuthorizedWorkspacesResponseBodyDataWorkspaceList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      workspaceList: 'WorkspaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      workspaceList: { 'type': 'array', 'itemType': GetKgAuthorizedWorkspacesResponseBodyDataWorkspaceList },
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

export class GetKgAuthorizedWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The request result.
   */
  data?: GetKgAuthorizedWorkspacesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetKgAuthorizedWorkspacesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

