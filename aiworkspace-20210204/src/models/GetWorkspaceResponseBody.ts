// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyOwner extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * mings****t
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1157******94123
   */
  userId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1157******94123
   */
  userKp?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * mings****t
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userKp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of the administrator accounts.
   */
  adminNames?: string[];
  /**
   * @remarks
   * The ID of the user who creates the workspace.
   * 
   * @example
   * 1157******94123
   */
  creator?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-example
   */
  displayName?: string;
  /**
   * @remarks
   * The environment information of the workspace.
   * 
   * *   Workspaces in basic mode can run only in the production environment.
   * *   Workspaces in standard mode can run in both the development and production environments.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The additional information, which only contains the TenantId field.
   * 
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @remarks
   * The time when the workspace is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace is modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The information about the workspace owner. This parameter is valid only when Verbose is set to true.
   */
  owner?: GetWorkspaceResponseBodyOwner;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0F049F0-8D69-5BAC-8F10-B4DED1B5A34C
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwp7rkyq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The workspace state. Valid values:
   * 
   * *   ENABLED
   * *   INITIALIZING
   * *   FAILURE:
   * *   DISABLED
   * *   FROZEN
   * *   UPDATING
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adminNames: 'AdminNames',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      extraInfos: 'ExtraInfos',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      owner: 'Owner',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminNames: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      extraInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'boolean',
      owner: GetWorkspaceResponseBodyOwner,
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminNames)) {
      $dara.Model.validateArray(this.adminNames);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.extraInfos) {
      $dara.Model.validateMap(this.extraInfos);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

