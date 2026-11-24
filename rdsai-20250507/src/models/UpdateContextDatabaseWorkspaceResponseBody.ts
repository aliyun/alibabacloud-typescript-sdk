// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseWorkspaceResponseBodyCapabilities extends $dara.Model {
  /**
   * @remarks
   * The list of names of operations that the account compatibility adapter can perform. The list content does not represent read/write, member group, or access control authorization for specific resources.
   */
  executableActions?: string[];
  static names(): { [key: string]: string } {
    return {
      executableActions: 'ExecutableActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executableActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.executableActions)) {
      $dara.Model.validateArray(this.executableActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContextDatabaseWorkspaceResponseBodyViewer extends $dara.Model {
  /**
   * @remarks
   * The ID of the bound workspace member in the identity information of the current call. Optional. This field is empty if no bound member information is provided.
   * 
   * @example
   * member-example
   */
  boundMemberId?: string;
  /**
   * @remarks
   * The role of the bound member in the workspace, such as `Owner`. Optional. This field is empty if no bound member role information is provided.
   * 
   * @example
   * Owner
   */
  boundMemberRole?: string;
  /**
   * @remarks
   * The status of the bound member, such as `active`. Optional. This field is empty if no bound member status information is provided.
   * 
   * @example
   * active
   */
  boundMemberStatus?: string;
  /**
   * @remarks
   * The account type of the caller for the current call, such as `customer`. This field describes the caller account and does not indicate the role of the workspace member.
   * 
   * @example
   * customer
   */
  callerType?: string;
  /**
   * @remarks
   * The identity parsing mode of the current call. Valid values:
   * - `account_compatibility`: account compatibility identity mode.
   * - `bound_member`: bound member identity mode.
   * 
   * The identity parsing mode and the permission mode of the workspace are different concepts. You cannot infer whether advanced permissions are enabled for the workspace based on this field.
   * 
   * @example
   * account_compatibility
   */
  identityMode?: string;
  /**
   * @remarks
   * The ID of the selected workspace member in the account compatibility identity mode. Optional. This field is empty if no member is selected for the current call. This field and the bound member ID represent the member selection result and the binding relationship, respectively.
   * 
   * @example
   * member-example
   */
  selectedMemberId?: string;
  static names(): { [key: string]: string } {
    return {
      boundMemberId: 'BoundMemberId',
      boundMemberRole: 'BoundMemberRole',
      boundMemberStatus: 'BoundMemberStatus',
      callerType: 'CallerType',
      identityMode: 'IdentityMode',
      selectedMemberId: 'SelectedMemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundMemberId: 'string',
      boundMemberRole: 'string',
      boundMemberStatus: 'string',
      callerType: 'string',
      identityMode: 'string',
      selectedMemberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateContextDatabaseWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account-level capability information of the current call. It only indicates the operations that the account compatibility adapter can perform and does not represent resource-level authorization. This field is optional and is not returned if no account-level executable operations are provided.
   */
  capabilities?: UpdateContextDatabaseWorkspaceResponseBodyCapabilities;
  /**
   * @remarks
   * The ID of the cluster to which the workspace belongs. For shared clusters, `default` is returned. For dedicated clusters, the corresponding cluster ID is returned.
   * 
   * @example
   * default
   */
  clusterId?: string;
  /**
   * @remarks
   * The permission mode used by the server to parse the identity of the current call. Valid values:
   * - `personal_compatibility`: compatibility mode.
   * - `advanced`: advanced permission mode.
   * 
   * This field describes the identity context of the current call. For the actual permission mode of the workspace, refer to PermissionMode.
   * 
   * @example
   * advanced
   */
  consolePermissionMode?: string;
  /**
   * @remarks
   * The time when the workspace was created, in ISO 8601 format.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The permission mode of the workspace. Valid values:
   * - `personal_compatibility`: compatibility mode.
   * - `advanced`: advanced permission mode.
   * 
   * @example
   * advanced
   */
  permissionMode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The type of the workspace.
   * 
   * @example
   * personal
   */
  type?: string;
  /**
   * @remarks
   * The viewer identity information of the current call, including the identity parsing mode, caller account type, and member information. Member-related fields are optional.
   */
  viewer?: UpdateContextDatabaseWorkspaceResponseBodyViewer;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The updated name of the workspace.
   * 
   * @example
   * my-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'Capabilities',
      clusterId: 'ClusterId',
      consolePermissionMode: 'ConsolePermissionMode',
      createdAt: 'CreatedAt',
      permissionMode: 'PermissionMode',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
      viewer: 'Viewer',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: UpdateContextDatabaseWorkspaceResponseBodyCapabilities,
      clusterId: 'string',
      consolePermissionMode: 'string',
      createdAt: 'string',
      permissionMode: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
      viewer: UpdateContextDatabaseWorkspaceResponseBodyViewer,
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.capabilities && typeof (this.capabilities as any).validate === 'function') {
      (this.capabilities as any).validate();
    }
    if(this.viewer && typeof (this.viewer as any).validate === 'function') {
      (this.viewer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

