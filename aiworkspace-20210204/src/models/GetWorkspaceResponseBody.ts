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
   * The user UID.
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
   * The list of administrator account names.
   */
  adminNames?: string[];
  /**
   * @remarks
   * The ID of the user who created the workspace.
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
   * The environments that the workspace contains. Valid values:
   * 
   * - A workspace in basic mode has only the production environment (prod).
   * 
   * - A workspace in standard mode has both the development environment (dev) and the production environment (prod).
   */
  envTypes?: string[];
  /**
   * @remarks
   * Additional information. This parameter currently contains the tenant ID (TenantId).
   * 
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @remarks
   * The time when the workspace was created. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace was last modified. The time is in UTC and follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace. Valid values:
   * 
   * - false: The workspace is not the default workspace.
   * 
   * - true: The workspace is the default workspace.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The information about the workspace owner. This parameter is returned only when Verbose is set to true.
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
   * The status of the workspace. Valid values:
   * 
   * - ENABLED: The workspace is running as normal.
   * 
   * - INITIALIZING: The workspace is being initialized.
   * 
   * - FAILURE: The workspace failed to be created.
   * 
   * - DISABLED: The workspace is manually disabled.
   * 
   * - FROZEN: The workspace is frozen due to an overdue payment.
   * 
   * - UPDATING: The workspace is being updated.
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
   * The workspace name.
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

