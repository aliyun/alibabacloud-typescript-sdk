// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseWorkspaceResponseBodyCapabilities extends $dara.Model {
  /**
   * @remarks
   * The list of operation names that the account compatibility adapter can perform. The list content does not represent read/write, member group, or access control authorization for specific resources.
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

export class CreateContextDatabaseWorkspaceResponseBodyViewer extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace member bound in the identity information of the current call. This field is optional and is empty if no bound member information is provided.
   * 
   * @example
   * member-example
   */
  boundMemberId?: string;
  /**
   * @remarks
   * The role of the bound member in the workspace, such as `Owner`. This field is optional and is empty if no bound member role information is provided.
   * 
   * @example
   * Owner
   */
  boundMemberRole?: string;
  /**
   * @remarks
   * The status of the bound member, such as `active`. This field is optional and is empty if no bound member status information is provided.
   * 
   * @example
   * active
   */
  boundMemberStatus?: string;
  /**
   * @remarks
   * The account type of the caller for the current call, such as `customer`. This field describes the caller account and does not represent the role of the workspace member.
   * 
   * @example
   * customer
   */
  callerType?: string;
  /**
   * @remarks
   * The identity parsing mode for the current call. Valid values:
   * - `account_compatibility`: The account compatibility identity mode.
   * - `bound_member`: The bound member identity mode.
   * 
   * The identity parsing mode and the permission mode of the workspace are different concepts. You cannot infer whether advanced permissions are enabled for the workspace based on this field.
   * 
   * @example
   * account_compatibility
   */
  identityMode?: string;
  /**
   * @remarks
   * The ID of the workspace member selected in the account compatibility identity mode. This field is optional and is empty if no member is selected for the current call. This field and the bound member ID represent the member selection result and the binding relationship, respectively.
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

export class CreateContextDatabaseWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plaintext of the first API key. It is returned only once during creation. Save the key properly. If GenerateInitialKey is set to `false`, this field is empty.
   * 
   * @example
   * ctxdb-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the first API key. The name is `default` when the key is generated. If GenerateInitialKey is set to `false`, this field is empty.
   * 
   * @example
   * default
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The account-level capability information for the current call. It only indicates the operations that the account compatibility adapter can perform and does not represent resource-level authorization. This field is optional and is not returned if no account-level executable operations are provided.
   */
  capabilities?: CreateContextDatabaseWorkspaceResponseBodyCapabilities;
  /**
   * @remarks
   * The ID of the cluster to which the workspace belongs. `default` is returned for a shared cluster, and the corresponding cluster ID is returned for a dedicated cluster.
   * 
   * @example
   * default
   */
  clusterId?: string;
  /**
   * @remarks
   * The permission mode used by the server to parse the identity of the current call. Valid values:
   * - `personal_compatibility`: The compatibility mode.
   * - `advanced`: The advanced permission mode.
   * 
   * This field describes the identity context of the current call. The actual permission mode of the workspace is subject to PermissionMode. Creating a workspace uses the account-level identity context, so this field may be empty.
   * 
   * @example
   * advanced
   */
  consolePermissionMode?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the first member.
   * 
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @remarks
   * The name of the first member.
   * 
   * @example
   * my-member
   */
  memberName?: string;
  /**
   * @remarks
   * The permission mode that actually takes effect after the workspace is created. A lowercase string is returned.
   * - `personal_compatibility`: The compatibility mode, which corresponds to the request value `compatibility`.
   * - `advanced`: The advanced permission mode.
   * 
   * This field is optional. If it is not returned in the response, call GetContextDatabaseWorkspace to query the workspace details and confirm the actual mode. Do not recreate the workspace simply because this field is missing.
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
   * The role of the first member, which is fixed to owner.
   * 
   * @example
   * owner
   */
  role?: string;
  /**
   * @remarks
   * The status of the workspace (Active: running normally; Locked: stopped due to overdue payments or locked due to expiration).
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The type of the workspace (personal: individual, enterprise: enterprise).
   * 
   * @example
   * personal
   */
  type?: string;
  /**
   * @remarks
   * The viewer identity information for the current call, including the identity parsing mode, caller account type, and member information. Member-related fields are optional.
   */
  viewer?: CreateContextDatabaseWorkspaceResponseBodyViewer;
  /**
   * @remarks
   * The ID of the new workspace.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * my-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiKeyName: 'ApiKeyName',
      capabilities: 'Capabilities',
      clusterId: 'ClusterId',
      consolePermissionMode: 'ConsolePermissionMode',
      createdAt: 'CreatedAt',
      memberId: 'MemberId',
      memberName: 'MemberName',
      permissionMode: 'PermissionMode',
      requestId: 'RequestId',
      role: 'Role',
      status: 'Status',
      type: 'Type',
      viewer: 'Viewer',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyName: 'string',
      capabilities: CreateContextDatabaseWorkspaceResponseBodyCapabilities,
      clusterId: 'string',
      consolePermissionMode: 'string',
      createdAt: 'string',
      memberId: 'string',
      memberName: 'string',
      permissionMode: 'string',
      requestId: 'string',
      role: 'string',
      status: 'string',
      type: 'string',
      viewer: CreateContextDatabaseWorkspaceResponseBodyViewer,
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

