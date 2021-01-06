// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  serviceName: string;
  customSuffix?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      customSuffix: 'CustomSuffix',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      customSuffix: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  requestId: string;
  role: CreateServiceLinkedRoleResponseRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateServiceLinkedRoleResponseRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusRequest extends $tea.Model {
  deletionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponse extends $tea.Model {
  status: string;
  requestId: string;
  reason: GetServiceLinkedRoleDeletionStatusResponseReason;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      reason: GetServiceLinkedRoleDeletionStatusResponseReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  enabledServicePrincipals: ListTrustedServiceStatusResponseEnabledServicePrincipals;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      enabledServicePrincipals: 'EnabledServicePrincipals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      enabledServicePrincipals: ListTrustedServiceStatusResponseEnabledServicePrincipals,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLinkedRoleRequest extends $tea.Model {
  roleName: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLinkedRoleResponse extends $tea.Model {
  requestId: string;
  deletionTaskId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deletionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  roleName: string;
  newAssumeRolePolicyDocument: string;
  newMaxSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      newAssumeRolePolicyDocument: 'NewAssumeRolePolicyDocument',
      newMaxSessionDuration: 'NewMaxSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      newAssumeRolePolicyDocument: 'string',
      newMaxSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $tea.Model {
  requestId: string;
  role: UpdateRoleResponseRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: UpdateRoleResponseRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  resourceGroupId?: string;
  service?: string;
  region?: string;
  resourceType?: string;
  resourceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      service: 'Service',
      region: 'Region',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      service: 'string',
      region: 'string',
      resourceType: 'string',
      resourceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  resources: ListResourcesResponseResources;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      resources: ListResourcesResponseResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountRequest extends $tea.Model {
  displayName: string;
  parentFolderId?: string;
  email: string;
  payerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      parentFolderId: 'ParentFolderId',
      email: 'Email',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      parentFolderId: 'string',
      email: 'string',
      payerAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountResponse extends $tea.Model {
  requestId: string;
  account: CreateCloudAccountResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: CreateCloudAccountResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleRequest extends $tea.Model {
  roleName: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleRequest extends $tea.Model {
  roleName: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponse extends $tea.Model {
  requestId: string;
  role: GetRoleResponseRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: GetRoleResponseRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  roles: ListRolesResponseRoles;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      roles: ListRolesResponseRoles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $tea.Model {
  roleName: string;
  description?: string;
  assumeRolePolicyDocument: string;
  maxSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      description: 'Description',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      maxSessionDuration: 'MaxSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      description: 'string',
      assumeRolePolicyDocument: 'string',
      maxSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $tea.Model {
  requestId: string;
  role: CreateRoleResponseRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateRoleResponseRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsRequest extends $tea.Model {
  resourceGroupId?: string;
  policyType?: string;
  policyName?: string;
  principalType?: string;
  principalName?: string;
  pageNumber?: number;
  pageSize?: number;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      principalType: 'PrincipalType',
      principalName: 'PrincipalName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      policyType: 'string',
      policyName: 'string',
      principalType: 'string',
      principalName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  policyAttachments: ListPolicyAttachmentsResponsePolicyAttachments;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      policyAttachments: 'PolicyAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      policyAttachments: ListPolicyAttachmentsResponsePolicyAttachments,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyRequest extends $tea.Model {
  resourceGroupId: string;
  policyType: string;
  policyName: string;
  principalType: string;
  principalName: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      principalType: 'PrincipalType',
      principalName: 'PrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      policyType: 'string',
      policyName: 'string',
      principalType: 'string',
      principalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyRequest extends $tea.Model {
  resourceGroupId: string;
  policyType: string;
  policyName: string;
  principalType: string;
  principalName: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      principalType: 'PrincipalType',
      principalName: 'PrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      policyType: 'string',
      policyName: 'string',
      principalType: 'string',
      principalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionRequest extends $tea.Model {
  policyType: string;
  policyName: string;
  versionId: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponse extends $tea.Model {
  requestId: string;
  policyVersion: GetPolicyVersionResponsePolicyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policyVersion: GetPolicyVersionResponsePolicyVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultPolicyVersionRequest extends $tea.Model {
  policyName: string;
  versionId: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultPolicyVersionResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupRequest extends $tea.Model {
  resourceGroupId: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponse extends $tea.Model {
  requestId: string;
  resourceGroup: DeleteResourceGroupResponseResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: DeleteResourceGroupResponseResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  policyName: string;
  policyType: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  requestId: string;
  policy: GetPolicyResponsePolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policy: GetPolicyResponsePolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupRequest extends $tea.Model {
  resourceGroupId: string;
  newDisplayName: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      newDisplayName: 'NewDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      newDisplayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponse extends $tea.Model {
  requestId: string;
  resourceGroup: UpdateResourceGroupResponseResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: UpdateResourceGroupResponseResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $tea.Model {
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  resourceGroups: ListResourceGroupsResponseResourceGroups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      resourceGroups: 'ResourceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      resourceGroups: ListResourceGroupsResponseResourceGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  policyType?: string;
  pageNumber?: number;
  pageSize?: number;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  policies: ListPoliciesResponsePolicies;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      policies: ListPoliciesResponsePolicies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsRequest extends $tea.Model {
  policyType: string;
  policyName: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponse extends $tea.Model {
  requestId: string;
  policyVersions: ListPolicyVersionsResponsePolicyVersions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policyVersions: 'PolicyVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policyVersions: ListPolicyVersionsResponsePolicyVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequest extends $tea.Model {
  displayName: string;
  parentFolderId?: string;
  payerAccountId?: string;
  accountNamePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
      accountNamePrefix: 'AccountNamePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      parentFolderId: 'string',
      payerAccountId: 'string',
      accountNamePrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponse extends $tea.Model {
  requestId: string;
  account: CreateResourceAccountResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: CreateResourceAccountResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  handshakes: ListHandshakesForResourceDirectoryResponseHandshakes;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      handshakes: 'Handshakes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      handshakes: ListHandshakesForResourceDirectoryResponseHandshakes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyResourceDirectoryRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyResourceDirectoryResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionRequest extends $tea.Model {
  policyName: string;
  policyDocument: string;
  setAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyDocument: 'PolicyDocument',
      setAsDefault: 'SetAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyDocument: 'string',
      setAsDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponse extends $tea.Model {
  requestId: string;
  policyVersion: CreatePolicyVersionResponsePolicyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policyVersion: CreatePolicyVersionResponsePolicyVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyVersionRequest extends $tea.Model {
  policyName: string;
  versionId: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyVersionResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $tea.Model {
  resourceGroupId: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponse extends $tea.Model {
  requestId: string;
  resourceGroup: GetResourceGroupResponseResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: GetResourceGroupResponseResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponse extends $tea.Model {
  requestId: string;
  resourceDirectory: InitResourceDirectoryResponseResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: InitResourceDirectoryResponseResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeRequest extends $tea.Model {
  handshakeId: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponse extends $tea.Model {
  requestId: string;
  handshake: GetHandshakeResponseHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: GetHandshakeResponseHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeRequest extends $tea.Model {
  handshakeId: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponse extends $tea.Model {
  requestId: string;
  handshake: CancelHandshakeResponseHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: CancelHandshakeResponseHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  policyName: string;
  description?: string;
  policyDocument: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      description: 'Description',
      policyDocument: 'PolicyDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      description: 'string',
      policyDocument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  requestId: string;
  policy: CreatePolicyResponsePolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policy: CreatePolicyResponsePolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeRequest extends $tea.Model {
  handshakeId: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponse extends $tea.Model {
  requestId: string;
  handshake: DeclineHandshakeResponseHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: DeclineHandshakeResponseHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  policyName: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  handshakes: ListHandshakesForAccountResponseHandshakes;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      handshakes: 'Handshakes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      handshakes: ListHandshakesForAccountResponseHandshakes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequest extends $tea.Model {
  targetEntity: string;
  targetType: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetEntity: 'string',
      targetType: 'string',
      note: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponse extends $tea.Model {
  requestId: string;
  handshake: InviteAccountToResourceDirectoryResponseHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: InviteAccountToResourceDirectoryResponseHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeRequest extends $tea.Model {
  handshakeId: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponse extends $tea.Model {
  requestId: string;
  handshake: AcceptHandshakeResponseHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: AcceptHandshakeResponseHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountRequest extends $tea.Model {
  newDisplayName: string;
  accountId: string;
  static names(): { [key: string]: string } {
    return {
      newDisplayName: 'NewDisplayName',
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDisplayName: 'string',
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponse extends $tea.Model {
  requestId: string;
  account: UpdateAccountResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: UpdateAccountResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $tea.Model {
  folderId: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  requestId: string;
  folder: GetFolderResponseFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: GetFolderResponseFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentRequest extends $tea.Model {
  parentFolderId?: string;
  queryKeyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFolderId: 'string',
      queryKeyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  accounts: ListAccountsForParentResponseAccounts;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      accounts: ListAccountsForParentResponseAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $tea.Model {
  name: string;
  displayName: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      displayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponse extends $tea.Model {
  requestId: string;
  resourceGroup: CreateResourceGroupResponseResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: CreateResourceGroupResponseResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromoteResourceAccountRequest extends $tea.Model {
  accountId: string;
  email: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromoteResourceAccountResponse extends $tea.Model {
  requestId: string;
  account: PromoteResourceAccountResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: PromoteResourceAccountResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  accounts: ListAccountsResponseAccounts;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      accounts: ListAccountsResponseAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPromoteResourceAccountRequest extends $tea.Model {
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPromoteResourceAccountResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  parentFolderId?: string;
  folderName: string;
  static names(): { [key: string]: string } {
    return {
      parentFolderId: 'ParentFolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFolderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  requestId: string;
  folder: CreateFolderResponseFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: CreateFolderResponseFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderRequest extends $tea.Model {
  folderId: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRequest extends $tea.Model {
  accountId: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponse extends $tea.Model {
  requestId: string;
  account: GetAccountResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: GetAccountResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponse extends $tea.Model {
  requestId: string;
  resourceDirectory: GetResourceDirectoryResponseResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: GetResourceDirectoryResponseResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  folderId: string;
  newFolderName: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      newFolderName: 'NewFolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      newFolderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $tea.Model {
  requestId: string;
  folder: UpdateFolderResponseFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: UpdateFolderResponseFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountRequest extends $tea.Model {
  accountId: string;
  destinationFolderId: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      destinationFolderId: 'DestinationFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      destinationFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsRequest extends $tea.Model {
  childId: string;
  static names(): { [key: string]: string } {
    return {
      childId: 'ChildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponse extends $tea.Model {
  requestId: string;
  folders: ListAncestorsResponseFolders;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folders: ListAncestorsResponseFolders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailRequest extends $tea.Model {
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailResponse extends $tea.Model {
  requestId: string;
  account: ResendCreateCloudAccountEmailResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: ResendCreateCloudAccountEmailResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountRequest extends $tea.Model {
  accountId: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountResponse extends $tea.Model {
  payerAccountName: string;
  requestId: string;
  payerAccountId: string;
  static names(): { [key: string]: string } {
    return {
      payerAccountName: 'PayerAccountName',
      requestId: 'RequestId',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payerAccountName: 'string',
      requestId: 'string',
      payerAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailRequest extends $tea.Model {
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailResponse extends $tea.Model {
  requestId: string;
  account: ResendPromoteResourceAccountEmailResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      account: ResendPromoteResourceAccountEmailResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentRequest extends $tea.Model {
  parentFolderId?: string;
  queryKeyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFolderId: 'string',
      queryKeyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponse extends $tea.Model {
  totalCount: number;
  pageSize: number;
  requestId: string;
  pageNumber: number;
  folders: ListFoldersForParentResponseFolders;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      folders: ListFoldersForParentResponseFolders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountRequest extends $tea.Model {
  accountId: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCreateCloudAccountRequest extends $tea.Model {
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCreateCloudAccountResponse extends $tea.Model {
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseRole extends $tea.Model {
  roleName: string;
  description: string;
  assumeRolePolicyDocument: string;
  isServiceLinkedRole: boolean;
  arn: string;
  roleId: string;
  createDate: string;
  rolePrincipalName: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      description: 'Description',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      arn: 'Arn',
      roleId: 'RoleId',
      createDate: 'CreateDate',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      description: 'string',
      assumeRolePolicyDocument: 'string',
      isServiceLinkedRole: 'boolean',
      arn: 'string',
      roleId: 'string',
      createDate: 'string',
      rolePrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsagesRoleUsageResources extends $tea.Model {
  resource: string[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsagesRoleUsage extends $tea.Model {
  region: string;
  resources: GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsagesRoleUsageResources;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsagesRoleUsageResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsages extends $tea.Model {
  roleUsage: GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsagesRoleUsage[];
  static names(): { [key: string]: string } {
    return {
      roleUsage: 'RoleUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleUsage: { 'type': 'array', 'itemType': GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsagesRoleUsage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseReason extends $tea.Model {
  message: string;
  roleUsages: GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsages;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      roleUsages: GetServiceLinkedRoleDeletionStatusResponseReasonRoleUsages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseEnabledServicePrincipalsEnabledServicePrincipal extends $tea.Model {
  servicePrincipal: string;
  enableTime: string;
  static names(): { [key: string]: string } {
    return {
      servicePrincipal: 'ServicePrincipal',
      enableTime: 'EnableTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicePrincipal: 'string',
      enableTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseEnabledServicePrincipals extends $tea.Model {
  enabledServicePrincipal: ListTrustedServiceStatusResponseEnabledServicePrincipalsEnabledServicePrincipal[];
  static names(): { [key: string]: string } {
    return {
      enabledServicePrincipal: 'EnabledServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipal: { 'type': 'array', 'itemType': ListTrustedServiceStatusResponseEnabledServicePrincipalsEnabledServicePrincipal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseRole extends $tea.Model {
  maxSessionDuration: number;
  updateDate: string;
  roleName: string;
  description: string;
  assumeRolePolicyDocument: string;
  arn: string;
  roleId: string;
  createDate: string;
  rolePrincipalName: string;
  static names(): { [key: string]: string } {
    return {
      maxSessionDuration: 'MaxSessionDuration',
      updateDate: 'UpdateDate',
      roleName: 'RoleName',
      description: 'Description',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      arn: 'Arn',
      roleId: 'RoleId',
      createDate: 'CreateDate',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSessionDuration: 'number',
      updateDate: 'string',
      roleName: 'string',
      description: 'string',
      assumeRolePolicyDocument: 'string',
      arn: 'string',
      roleId: 'string',
      createDate: 'string',
      rolePrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseResourcesResource extends $tea.Model {
  resourceGroupId: string;
  resourceId: string;
  service: string;
  resourceType: string;
  regionId: string;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      service: 'Service',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      service: 'string',
      resourceType: 'string',
      regionId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseResources extends $tea.Model {
  resource: ListResourcesResponseResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListResourcesResponseResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountResponseAccount extends $tea.Model {
  resourceDirectoryId: string;
  accountId: string;
  displayName: string;
  accountName: string;
  folderId: string;
  joinMethod: string;
  modifyTime: string;
  type: string;
  status: string;
  recordId: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      accountName: 'AccountName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
      type: 'Type',
      status: 'Status',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      accountId: 'string',
      displayName: 'string',
      accountName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
      type: 'string',
      status: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseRoleLatestDeletionTask extends $tea.Model {
  createDate: string;
  deletionTaskId: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deletionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseRole extends $tea.Model {
  maxSessionDuration: number;
  updateDate: string;
  roleName: string;
  description: string;
  assumeRolePolicyDocument: string;
  isServiceLinkedRole: boolean;
  arn: string;
  roleId: string;
  createDate: string;
  rolePrincipalName: string;
  latestDeletionTask: GetRoleResponseRoleLatestDeletionTask;
  static names(): { [key: string]: string } {
    return {
      maxSessionDuration: 'MaxSessionDuration',
      updateDate: 'UpdateDate',
      roleName: 'RoleName',
      description: 'Description',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      arn: 'Arn',
      roleId: 'RoleId',
      createDate: 'CreateDate',
      rolePrincipalName: 'RolePrincipalName',
      latestDeletionTask: 'LatestDeletionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSessionDuration: 'number',
      updateDate: 'string',
      roleName: 'string',
      description: 'string',
      assumeRolePolicyDocument: 'string',
      isServiceLinkedRole: 'boolean',
      arn: 'string',
      roleId: 'string',
      createDate: 'string',
      rolePrincipalName: 'string',
      latestDeletionTask: GetRoleResponseRoleLatestDeletionTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseRolesRoleLatestDeletionTask extends $tea.Model {
  createDate: string;
  deletionTaskId: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deletionTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseRolesRole extends $tea.Model {
  maxSessionDuration: number;
  updateDate: string;
  roleName: string;
  description: string;
  isServiceLinkedRole: boolean;
  arn: string;
  roleId: string;
  createDate: string;
  rolePrincipalName: string;
  latestDeletionTask: ListRolesResponseRolesRoleLatestDeletionTask;
  static names(): { [key: string]: string } {
    return {
      maxSessionDuration: 'MaxSessionDuration',
      updateDate: 'UpdateDate',
      roleName: 'RoleName',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      arn: 'Arn',
      roleId: 'RoleId',
      createDate: 'CreateDate',
      rolePrincipalName: 'RolePrincipalName',
      latestDeletionTask: 'LatestDeletionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSessionDuration: 'number',
      updateDate: 'string',
      roleName: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      arn: 'string',
      roleId: 'string',
      createDate: 'string',
      rolePrincipalName: 'string',
      latestDeletionTask: ListRolesResponseRolesRoleLatestDeletionTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseRoles extends $tea.Model {
  role: ListRolesResponseRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseRole extends $tea.Model {
  maxSessionDuration: number;
  roleName: string;
  description: string;
  assumeRolePolicyDocument: string;
  arn: string;
  roleId: string;
  createDate: string;
  rolePrincipalName: string;
  static names(): { [key: string]: string } {
    return {
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
      description: 'Description',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      arn: 'Arn',
      roleId: 'RoleId',
      createDate: 'CreateDate',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSessionDuration: 'number',
      roleName: 'string',
      description: 'string',
      assumeRolePolicyDocument: 'string',
      arn: 'string',
      roleId: 'string',
      createDate: 'string',
      rolePrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponsePolicyAttachmentsPolicyAttachment extends $tea.Model {
  policyType: string;
  description: string;
  resourceGroupId: string;
  attachDate: string;
  policyName: string;
  principalName: string;
  principalType: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      attachDate: 'AttachDate',
      policyName: 'PolicyName',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      description: 'string',
      resourceGroupId: 'string',
      attachDate: 'string',
      policyName: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponsePolicyAttachments extends $tea.Model {
  policyAttachment: ListPolicyAttachmentsResponsePolicyAttachmentsPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      policyAttachment: 'PolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachment: { 'type': 'array', 'itemType': ListPolicyAttachmentsResponsePolicyAttachmentsPolicyAttachment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponsePolicyVersion extends $tea.Model {
  versionId: string;
  isDefaultVersion: boolean;
  policyDocument: string;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      isDefaultVersion: 'IsDefaultVersion',
      policyDocument: 'PolicyDocument',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      isDefaultVersion: 'boolean',
      policyDocument: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  status: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseResourceGroupRegionStatuses extends $tea.Model {
  regionStatus: DeleteResourceGroupResponseResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': DeleteResourceGroupResponseResourceGroupRegionStatusesRegionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseResourceGroup extends $tea.Model {
  status: string;
  accountId: string;
  displayName: string;
  id: string;
  createDate: string;
  name: string;
  regionStatuses: DeleteResourceGroupResponseResourceGroupRegionStatuses;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      id: 'Id',
      createDate: 'CreateDate',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accountId: 'string',
      displayName: 'string',
      id: 'string',
      createDate: 'string',
      name: 'string',
      regionStatuses: DeleteResourceGroupResponseResourceGroupRegionStatuses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponsePolicy extends $tea.Model {
  policyType: string;
  updateDate: string;
  description: string;
  attachmentCount: number;
  policyName: string;
  defaultVersion: string;
  policyDocument: string;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
      description: 'Description',
      attachmentCount: 'AttachmentCount',
      policyName: 'PolicyName',
      defaultVersion: 'DefaultVersion',
      policyDocument: 'PolicyDocument',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      updateDate: 'string',
      description: 'string',
      attachmentCount: 'number',
      policyName: 'string',
      defaultVersion: 'string',
      policyDocument: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseResourceGroup extends $tea.Model {
  accountId: string;
  displayName: string;
  id: string;
  createDate: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      displayName: 'DisplayName',
      id: 'Id',
      createDate: 'CreateDate',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
      id: 'string',
      createDate: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseResourceGroupsResourceGroup extends $tea.Model {
  status: string;
  accountId: string;
  displayName: string;
  id: string;
  createDate: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      id: 'Id',
      createDate: 'CreateDate',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accountId: 'string',
      displayName: 'string',
      id: 'string',
      createDate: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseResourceGroups extends $tea.Model {
  resourceGroup: ListResourceGroupsResponseResourceGroupsResourceGroup[];
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: { 'type': 'array', 'itemType': ListResourceGroupsResponseResourceGroupsResourceGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponsePoliciesPolicy extends $tea.Model {
  policyType: string;
  updateDate: string;
  description: string;
  attachmentCount: number;
  policyName: string;
  defaultVersion: string;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
      description: 'Description',
      attachmentCount: 'AttachmentCount',
      policyName: 'PolicyName',
      defaultVersion: 'DefaultVersion',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      updateDate: 'string',
      description: 'string',
      attachmentCount: 'number',
      policyName: 'string',
      defaultVersion: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponsePolicies extends $tea.Model {
  policy: ListPoliciesResponsePoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponsePoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponsePolicyVersionsPolicyVersion extends $tea.Model {
  versionId: string;
  isDefaultVersion: boolean;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      isDefaultVersion: 'IsDefaultVersion',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      isDefaultVersion: 'boolean',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponsePolicyVersions extends $tea.Model {
  policyVersion: ListPolicyVersionsResponsePolicyVersionsPolicyVersion[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: { 'type': 'array', 'itemType': ListPolicyVersionsResponsePolicyVersionsPolicyVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponseAccount extends $tea.Model {
  status: string;
  modifyTime: string;
  joinMethod: string;
  resourceDirectoryId: string;
  type: string;
  accountId: string;
  displayName: string;
  joinTime: string;
  folderId: string;
  accountName: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      joinMethod: 'JoinMethod',
      resourceDirectoryId: 'ResourceDirectoryId',
      type: 'Type',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      joinTime: 'JoinTime',
      folderId: 'FolderId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      joinMethod: 'string',
      resourceDirectoryId: 'string',
      type: 'string',
      accountId: 'string',
      displayName: 'string',
      joinTime: 'string',
      folderId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseHandshakesHandshake extends $tea.Model {
  status: string;
  modifyTime: string;
  resourceDirectoryId: string;
  handshakeId: string;
  masterAccountName: string;
  note: string;
  createTime: string;
  targetType: string;
  masterAccountId: string;
  expireTime: string;
  targetEntity: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      handshakeId: 'HandshakeId',
      masterAccountName: 'MasterAccountName',
      note: 'Note',
      createTime: 'CreateTime',
      targetType: 'TargetType',
      masterAccountId: 'MasterAccountId',
      expireTime: 'ExpireTime',
      targetEntity: 'TargetEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      handshakeId: 'string',
      masterAccountName: 'string',
      note: 'string',
      createTime: 'string',
      targetType: 'string',
      masterAccountId: 'string',
      expireTime: 'string',
      targetEntity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseHandshakes extends $tea.Model {
  handshake: ListHandshakesForResourceDirectoryResponseHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForResourceDirectoryResponseHandshakesHandshake },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponsePolicyVersion extends $tea.Model {
  versionId: string;
  isDefaultVersion: boolean;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      isDefaultVersion: 'IsDefaultVersion',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      isDefaultVersion: 'boolean',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  status: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseResourceGroupRegionStatuses extends $tea.Model {
  regionStatus: GetResourceGroupResponseResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': GetResourceGroupResponseResourceGroupRegionStatusesRegionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseResourceGroup extends $tea.Model {
  status: string;
  accountId: string;
  displayName: string;
  id: string;
  createDate: string;
  name: string;
  regionStatuses: GetResourceGroupResponseResourceGroupRegionStatuses;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      id: 'Id',
      createDate: 'CreateDate',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accountId: 'string',
      displayName: 'string',
      id: 'string',
      createDate: 'string',
      name: 'string',
      regionStatuses: GetResourceGroupResponseResourceGroupRegionStatuses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponseResourceDirectory extends $tea.Model {
  resourceDirectoryId: string;
  masterAccountId: string;
  masterAccountName: string;
  rootFolderId: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      rootFolderId: 'RootFolderId',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      rootFolderId: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponseHandshake extends $tea.Model {
  status: string;
  modifyTime: string;
  resourceDirectoryId: string;
  handshakeId: string;
  masterAccountName: string;
  note: string;
  createTime: string;
  targetType: string;
  masterAccountId: string;
  masterAccountRealName: string;
  expireTime: string;
  invitedAccountRealName: string;
  targetEntity: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      handshakeId: 'HandshakeId',
      masterAccountName: 'MasterAccountName',
      note: 'Note',
      createTime: 'CreateTime',
      targetType: 'TargetType',
      masterAccountId: 'MasterAccountId',
      masterAccountRealName: 'MasterAccountRealName',
      expireTime: 'ExpireTime',
      invitedAccountRealName: 'InvitedAccountRealName',
      targetEntity: 'TargetEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      handshakeId: 'string',
      masterAccountName: 'string',
      note: 'string',
      createTime: 'string',
      targetType: 'string',
      masterAccountId: 'string',
      masterAccountRealName: 'string',
      expireTime: 'string',
      invitedAccountRealName: 'string',
      targetEntity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponseHandshake extends $tea.Model {
  handshakeId: string;
  resourceDirectoryId: string;
  masterAccountId: string;
  masterAccountName: string;
  targetEntity: string;
  targetType: string;
  note: string;
  status: string;
  createTime: string;
  modifyTime: string;
  expireTime: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
      resourceDirectoryId: 'ResourceDirectoryId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
      note: 'Note',
      status: 'Status',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
      resourceDirectoryId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      targetEntity: 'string',
      targetType: 'string',
      note: 'string',
      status: 'string',
      createTime: 'string',
      modifyTime: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponsePolicy extends $tea.Model {
  policyType: string;
  description: string;
  policyName: string;
  defaultVersion: string;
  createDate: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      description: 'Description',
      policyName: 'PolicyName',
      defaultVersion: 'DefaultVersion',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      description: 'string',
      policyName: 'string',
      defaultVersion: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponseHandshake extends $tea.Model {
  handshakeId: string;
  resourceDirectoryId: string;
  masterAccountId: string;
  masterAccountName: string;
  targetEntity: string;
  targetType: string;
  note: string;
  status: string;
  createTime: string;
  modifyTime: string;
  expireTime: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
      resourceDirectoryId: 'ResourceDirectoryId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
      note: 'Note',
      status: 'Status',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
      resourceDirectoryId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      targetEntity: 'string',
      targetType: 'string',
      note: 'string',
      status: 'string',
      createTime: 'string',
      modifyTime: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseHandshakesHandshake extends $tea.Model {
  status: string;
  modifyTime: string;
  resourceDirectoryId: string;
  handshakeId: string;
  masterAccountName: string;
  note: string;
  createTime: string;
  targetType: string;
  masterAccountId: string;
  expireTime: string;
  targetEntity: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      handshakeId: 'HandshakeId',
      masterAccountName: 'MasterAccountName',
      note: 'Note',
      createTime: 'CreateTime',
      targetType: 'TargetType',
      masterAccountId: 'MasterAccountId',
      expireTime: 'ExpireTime',
      targetEntity: 'TargetEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      handshakeId: 'string',
      masterAccountName: 'string',
      note: 'string',
      createTime: 'string',
      targetType: 'string',
      masterAccountId: 'string',
      expireTime: 'string',
      targetEntity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseHandshakes extends $tea.Model {
  handshake: ListHandshakesForAccountResponseHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForAccountResponseHandshakesHandshake },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponseHandshake extends $tea.Model {
  status: string;
  modifyTime: string;
  resourceDirectoryId: string;
  handshakeId: string;
  masterAccountName: string;
  note: string;
  createTime: string;
  targetType: string;
  masterAccountId: string;
  expireTime: string;
  targetEntity: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      handshakeId: 'HandshakeId',
      masterAccountName: 'MasterAccountName',
      note: 'Note',
      createTime: 'CreateTime',
      targetType: 'TargetType',
      masterAccountId: 'MasterAccountId',
      expireTime: 'ExpireTime',
      targetEntity: 'TargetEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      handshakeId: 'string',
      masterAccountName: 'string',
      note: 'string',
      createTime: 'string',
      targetType: 'string',
      masterAccountId: 'string',
      expireTime: 'string',
      targetEntity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponseHandshake extends $tea.Model {
  handshakeId: string;
  resourceDirectoryId: string;
  masterAccountId: string;
  masterAccountName: string;
  targetEntity: string;
  targetType: string;
  note: string;
  status: string;
  createTime: string;
  modifyTime: string;
  expireTime: string;
  static names(): { [key: string]: string } {
    return {
      handshakeId: 'HandshakeId',
      resourceDirectoryId: 'ResourceDirectoryId',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      targetEntity: 'TargetEntity',
      targetType: 'TargetType',
      note: 'Note',
      status: 'Status',
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshakeId: 'string',
      resourceDirectoryId: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      targetEntity: 'string',
      targetType: 'string',
      note: 'string',
      status: 'string',
      createTime: 'string',
      modifyTime: 'string',
      expireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponseAccount extends $tea.Model {
  status: string;
  modifyTime: string;
  joinMethod: string;
  resourceDirectoryId: string;
  type: string;
  accountId: string;
  displayName: string;
  joinTime: string;
  folderId: string;
  accountName: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      joinMethod: 'JoinMethod',
      resourceDirectoryId: 'ResourceDirectoryId',
      type: 'Type',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      joinTime: 'JoinTime',
      folderId: 'FolderId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      joinMethod: 'string',
      resourceDirectoryId: 'string',
      type: 'string',
      accountId: 'string',
      displayName: 'string',
      joinTime: 'string',
      folderId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseFolder extends $tea.Model {
  createTime: string;
  folderId: string;
  folderName: string;
  parentFolderId: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseAccountsAccount extends $tea.Model {
  status: string;
  modifyTime: string;
  joinMethod: string;
  resourceDirectoryId: string;
  type: string;
  accountId: string;
  displayName: string;
  joinTime: string;
  folderId: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      joinMethod: 'JoinMethod',
      resourceDirectoryId: 'ResourceDirectoryId',
      type: 'Type',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      joinTime: 'JoinTime',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      joinMethod: 'string',
      resourceDirectoryId: 'string',
      type: 'string',
      accountId: 'string',
      displayName: 'string',
      joinTime: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseAccounts extends $tea.Model {
  account: ListAccountsForParentResponseAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsForParentResponseAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  status: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseResourceGroupRegionStatuses extends $tea.Model {
  regionStatus: CreateResourceGroupResponseResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': CreateResourceGroupResponseResourceGroupRegionStatusesRegionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseResourceGroup extends $tea.Model {
  status: string;
  accountId: string;
  displayName: string;
  id: string;
  createDate: string;
  name: string;
  regionStatuses: CreateResourceGroupResponseResourceGroupRegionStatuses;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      id: 'Id',
      createDate: 'CreateDate',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accountId: 'string',
      displayName: 'string',
      id: 'string',
      createDate: 'string',
      name: 'string',
      regionStatuses: CreateResourceGroupResponseResourceGroupRegionStatuses,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromoteResourceAccountResponseAccount extends $tea.Model {
  resourceDirectoryId: string;
  accountId: string;
  displayName: string;
  folderId: string;
  joinMethod: string;
  joinTime: string;
  type: string;
  status: string;
  recordId: string;
  modifyTime: string;
  accountName: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      type: 'Type',
      status: 'Status',
      recordId: 'RecordId',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      accountId: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      type: 'string',
      status: 'string',
      recordId: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseAccountsAccount extends $tea.Model {
  status: string;
  modifyTime: string;
  joinMethod: string;
  resourceDirectoryId: string;
  type: string;
  accountId: string;
  displayName: string;
  joinTime: string;
  folderId: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      modifyTime: 'ModifyTime',
      joinMethod: 'JoinMethod',
      resourceDirectoryId: 'ResourceDirectoryId',
      type: 'Type',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      joinTime: 'JoinTime',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      modifyTime: 'string',
      joinMethod: 'string',
      resourceDirectoryId: 'string',
      type: 'string',
      accountId: 'string',
      displayName: 'string',
      joinTime: 'string',
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseAccounts extends $tea.Model {
  account: ListAccountsResponseAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsResponseAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseFolder extends $tea.Model {
  folderId: string;
  parentFolderId: string;
  folderName: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      parentFolderId: 'ParentFolderId',
      folderName: 'FolderName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      parentFolderId: 'string',
      folderName: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponseAccount extends $tea.Model {
  identityInformation: string;
  status: string;
  modifyTime: string;
  joinMethod: string;
  resourceDirectoryId: string;
  type: string;
  accountId: string;
  displayName: string;
  joinTime: string;
  folderId: string;
  accountName: string;
  static names(): { [key: string]: string } {
    return {
      identityInformation: 'IdentityInformation',
      status: 'Status',
      modifyTime: 'ModifyTime',
      joinMethod: 'JoinMethod',
      resourceDirectoryId: 'ResourceDirectoryId',
      type: 'Type',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      joinTime: 'JoinTime',
      folderId: 'FolderId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityInformation: 'string',
      status: 'string',
      modifyTime: 'string',
      joinMethod: 'string',
      resourceDirectoryId: 'string',
      type: 'string',
      accountId: 'string',
      displayName: 'string',
      joinTime: 'string',
      folderId: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseResourceDirectory extends $tea.Model {
  resourceDirectoryId: string;
  masterAccountName: string;
  createTime: string;
  rootFolderId: string;
  masterAccountId: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      masterAccountName: 'MasterAccountName',
      createTime: 'CreateTime',
      rootFolderId: 'RootFolderId',
      masterAccountId: 'MasterAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      masterAccountName: 'string',
      createTime: 'string',
      rootFolderId: 'string',
      masterAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseFolder extends $tea.Model {
  createTime: string;
  folderId: string;
  folderName: string;
  parentFolderId: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseFoldersFolder extends $tea.Model {
  createTime: string;
  folderId: string;
  folderName: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseFolders extends $tea.Model {
  folder: ListAncestorsResponseFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListAncestorsResponseFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailResponseAccount extends $tea.Model {
  resourceDirectoryId: string;
  accountId: string;
  displayName: string;
  folderId: string;
  joinMethod: string;
  joinTime: string;
  type: string;
  status: string;
  recordId: string;
  modifyTime: string;
  accountName: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      type: 'Type',
      status: 'Status',
      recordId: 'RecordId',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      accountId: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      type: 'string',
      status: 'string',
      recordId: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailResponseAccount extends $tea.Model {
  resourceDirectoryId: string;
  accountId: string;
  displayName: string;
  folderId: string;
  joinMethod: string;
  joinTime: string;
  type: string;
  status: string;
  recordId: string;
  modifyTime: string;
  accountName: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryId: 'ResourceDirectoryId',
      accountId: 'AccountId',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      type: 'Type',
      status: 'Status',
      recordId: 'RecordId',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryId: 'string',
      accountId: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      type: 'string',
      status: 'string',
      recordId: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseFoldersFolder extends $tea.Model {
  createTime: string;
  folderId: string;
  folderName: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseFolders extends $tea.Model {
  folder: ListFoldersForParentResponseFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListFoldersForParentResponseFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resourcemanager", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRequest("CreateServiceLinkedRole", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async getServiceLinkedRoleDeletionStatusWithOptions(request: GetServiceLinkedRoleDeletionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetServiceLinkedRoleDeletionStatusResponse>(await this.doRequest("GetServiceLinkedRoleDeletionStatus", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetServiceLinkedRoleDeletionStatusResponse({}));
  }

  async getServiceLinkedRoleDeletionStatus(request: GetServiceLinkedRoleDeletionStatusRequest): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleDeletionStatusWithOptions(request, runtime);
  }

  async listTrustedServiceStatusWithOptions(request: ListTrustedServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListTrustedServiceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTrustedServiceStatusResponse>(await this.doRequest("ListTrustedServiceStatus", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListTrustedServiceStatusResponse({}));
  }

  async listTrustedServiceStatus(request: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  async deleteServiceLinkedRoleWithOptions(request: DeleteServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceLinkedRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteServiceLinkedRoleResponse>(await this.doRequest("DeleteServiceLinkedRole", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeleteServiceLinkedRoleResponse({}));
  }

  async deleteServiceLinkedRole(request: DeleteServiceLinkedRoleRequest): Promise<DeleteServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceLinkedRoleWithOptions(request, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateRoleResponse>(await this.doRequest("UpdateRole", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new UpdateRoleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListResourcesResponse>(await this.doRequest("ListResources", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListResourcesResponse({}));
  }

  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  async createCloudAccountWithOptions(request: CreateCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateCloudAccountResponse>(await this.doRequest("CreateCloudAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreateCloudAccountResponse({}));
  }

  async createCloudAccount(request: CreateCloudAccountRequest): Promise<CreateCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  async deleteRoleWithOptions(request: DeleteRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRoleResponse>(await this.doRequest("DeleteRole", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeleteRoleResponse({}));
  }

  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  async getRoleWithOptions(request: GetRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRoleResponse>(await this.doRequest("GetRole", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetRoleResponse({}));
  }

  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListRolesResponse>(await this.doRequest("ListRoles", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async createRoleWithOptions(request: CreateRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRoleResponse>(await this.doRequest("CreateRole", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreateRoleResponse({}));
  }

  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  async listPolicyAttachmentsWithOptions(request: ListPolicyAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyAttachmentsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPolicyAttachmentsResponse>(await this.doRequest("ListPolicyAttachments", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListPolicyAttachmentsResponse({}));
  }

  async listPolicyAttachments(request: ListPolicyAttachmentsRequest): Promise<ListPolicyAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyAttachmentsWithOptions(request, runtime);
  }

  async detachPolicyWithOptions(request: DetachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DetachPolicyResponse>(await this.doRequest("DetachPolicy", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DetachPolicyResponse({}));
  }

  async detachPolicy(request: DetachPolicyRequest): Promise<DetachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  async attachPolicyWithOptions(request: AttachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<AttachPolicyResponse>(await this.doRequest("AttachPolicy", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new AttachPolicyResponse({}));
  }

  async attachPolicy(request: AttachPolicyRequest): Promise<AttachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  async getPolicyVersionWithOptions(request: GetPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPolicyVersionResponse>(await this.doRequest("GetPolicyVersion", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetPolicyVersionResponse({}));
  }

  async getPolicyVersion(request: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  async setDefaultPolicyVersionWithOptions(request: SetDefaultPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultPolicyVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<SetDefaultPolicyVersionResponse>(await this.doRequest("SetDefaultPolicyVersion", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new SetDefaultPolicyVersionResponse({}));
  }

  async setDefaultPolicyVersion(request: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  async deleteResourceGroupWithOptions(request: DeleteResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteResourceGroupResponse>(await this.doRequest("DeleteResourceGroup", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeleteResourceGroupResponse({}));
  }

  async deleteResourceGroup(request: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPolicyResponse>(await this.doRequest("GetPolicy", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async updateResourceGroupWithOptions(request: UpdateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateResourceGroupResponse>(await this.doRequest("UpdateResourceGroup", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new UpdateResourceGroupResponse({}));
  }

  async updateResourceGroup(request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListResourceGroupsResponse>(await this.doRequest("ListResourceGroups", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPoliciesResponse>(await this.doRequest("ListPolicies", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListPoliciesResponse({}));
  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  async listPolicyVersionsWithOptions(request: ListPolicyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyVersionsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPolicyVersionsResponse>(await this.doRequest("ListPolicyVersions", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListPolicyVersionsResponse({}));
  }

  async listPolicyVersions(request: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  async createResourceAccountWithOptions(request: CreateResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateResourceAccountResponse>(await this.doRequest("CreateResourceAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreateResourceAccountResponse({}));
  }

  async createResourceAccount(request: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  async listHandshakesForResourceDirectoryWithOptions(request: ListHandshakesForResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ListHandshakesForResourceDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<ListHandshakesForResourceDirectoryResponse>(await this.doRequest("ListHandshakesForResourceDirectory", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListHandshakesForResourceDirectoryResponse({}));
  }

  async listHandshakesForResourceDirectory(request: ListHandshakesForResourceDirectoryRequest): Promise<ListHandshakesForResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHandshakesForResourceDirectoryWithOptions(request, runtime);
  }

  async destroyResourceDirectoryWithOptions(request: DestroyResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DestroyResourceDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<DestroyResourceDirectoryResponse>(await this.doRequest("DestroyResourceDirectory", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DestroyResourceDirectoryResponse({}));
  }

  async destroyResourceDirectory(request: DestroyResourceDirectoryRequest): Promise<DestroyResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(request, runtime);
  }

  async createPolicyVersionWithOptions(request: CreatePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePolicyVersionResponse>(await this.doRequest("CreatePolicyVersion", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreatePolicyVersionResponse({}));
  }

  async createPolicyVersion(request: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  async deletePolicyVersionWithOptions(request: DeletePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePolicyVersionResponse>(await this.doRequest("DeletePolicyVersion", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeletePolicyVersionResponse({}));
  }

  async deletePolicyVersion(request: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  async getResourceGroupWithOptions(request: GetResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<GetResourceGroupResponse>(await this.doRequest("GetResourceGroup", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetResourceGroupResponse({}));
  }

  async getResourceGroup(request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  async initResourceDirectoryWithOptions(request: InitResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<InitResourceDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<InitResourceDirectoryResponse>(await this.doRequest("InitResourceDirectory", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new InitResourceDirectoryResponse({}));
  }

  async initResourceDirectory(request: InitResourceDirectoryRequest): Promise<InitResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initResourceDirectoryWithOptions(request, runtime);
  }

  async getHandshakeWithOptions(request: GetHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<GetHandshakeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetHandshakeResponse>(await this.doRequest("GetHandshake", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetHandshakeResponse({}));
  }

  async getHandshake(request: GetHandshakeRequest): Promise<GetHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  async cancelHandshakeWithOptions(request: CancelHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<CancelHandshakeResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelHandshakeResponse>(await this.doRequest("CancelHandshake", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CancelHandshakeResponse({}));
  }

  async cancelHandshake(request: CancelHandshakeRequest): Promise<CancelHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePolicyResponse>(await this.doRequest("CreatePolicy", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreatePolicyResponse({}));
  }

  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  async declineHandshakeWithOptions(request: DeclineHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<DeclineHandshakeResponse> {
    Util.validateModel(request);
    return $tea.cast<DeclineHandshakeResponse>(await this.doRequest("DeclineHandshake", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeclineHandshakeResponse({}));
  }

  async declineHandshake(request: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.declineHandshakeWithOptions(request, runtime);
  }

  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePolicyResponse>(await this.doRequest("DeletePolicy", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeletePolicyResponse({}));
  }

  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  async listHandshakesForAccountWithOptions(request: ListHandshakesForAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListHandshakesForAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<ListHandshakesForAccountResponse>(await this.doRequest("ListHandshakesForAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListHandshakesForAccountResponse({}));
  }

  async listHandshakesForAccount(request: ListHandshakesForAccountRequest): Promise<ListHandshakesForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHandshakesForAccountWithOptions(request, runtime);
  }

  async inviteAccountToResourceDirectoryWithOptions(request: InviteAccountToResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<InviteAccountToResourceDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<InviteAccountToResourceDirectoryResponse>(await this.doRequest("InviteAccountToResourceDirectory", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new InviteAccountToResourceDirectoryResponse({}));
  }

  async inviteAccountToResourceDirectory(request: InviteAccountToResourceDirectoryRequest): Promise<InviteAccountToResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  async acceptHandshakeWithOptions(request: AcceptHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<AcceptHandshakeResponse> {
    Util.validateModel(request);
    return $tea.cast<AcceptHandshakeResponse>(await this.doRequest("AcceptHandshake", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new AcceptHandshakeResponse({}));
  }

  async acceptHandshake(request: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  async updateAccountWithOptions(request: UpdateAccountRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAccountResponse>(await this.doRequest("UpdateAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new UpdateAccountResponse({}));
  }

  async updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFolderResponse>(await this.doRequest("GetFolder", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async listAccountsForParentWithOptions(request: ListAccountsForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsForParentResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAccountsForParentResponse>(await this.doRequest("ListAccountsForParent", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListAccountsForParentResponse({}));
  }

  async listAccountsForParent(request: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateResourceGroupResponse>(await this.doRequest("CreateResourceGroup", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreateResourceGroupResponse({}));
  }

  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  async promoteResourceAccountWithOptions(request: PromoteResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<PromoteResourceAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<PromoteResourceAccountResponse>(await this.doRequest("PromoteResourceAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new PromoteResourceAccountResponse({}));
  }

  async promoteResourceAccount(request: PromoteResourceAccountRequest): Promise<PromoteResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.promoteResourceAccountWithOptions(request, runtime);
  }

  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAccountsResponse>(await this.doRequest("ListAccounts", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListAccountsResponse({}));
  }

  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  async cancelPromoteResourceAccountWithOptions(request: CancelPromoteResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CancelPromoteResourceAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelPromoteResourceAccountResponse>(await this.doRequest("CancelPromoteResourceAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CancelPromoteResourceAccountResponse({}));
  }

  async cancelPromoteResourceAccount(request: CancelPromoteResourceAccountRequest): Promise<CancelPromoteResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPromoteResourceAccountWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateFolderResponse>(await this.doRequest("CreateFolder", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteFolderResponse>(await this.doRequest("DeleteFolder", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async getAccountWithOptions(request: GetAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAccountResponse>(await this.doRequest("GetAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetAccountResponse({}));
  }

  async getAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  async getResourceDirectoryWithOptions(request: GetResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetResourceDirectoryResponse>(await this.doRequest("GetResourceDirectory", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetResourceDirectoryResponse({}));
  }

  async getResourceDirectory(request: GetResourceDirectoryRequest): Promise<GetResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateFolderResponse>(await this.doRequest("UpdateFolder", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  async moveAccountWithOptions(request: MoveAccountRequest, runtime: $Util.RuntimeOptions): Promise<MoveAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<MoveAccountResponse>(await this.doRequest("MoveAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new MoveAccountResponse({}));
  }

  async moveAccount(request: MoveAccountRequest): Promise<MoveAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  async listAncestorsWithOptions(request: ListAncestorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAncestorsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAncestorsResponse>(await this.doRequest("ListAncestors", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListAncestorsResponse({}));
  }

  async listAncestors(request: ListAncestorsRequest): Promise<ListAncestorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  async resendCreateCloudAccountEmailWithOptions(request: ResendCreateCloudAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendCreateCloudAccountEmailResponse> {
    Util.validateModel(request);
    return $tea.cast<ResendCreateCloudAccountEmailResponse>(await this.doRequest("ResendCreateCloudAccountEmail", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ResendCreateCloudAccountEmailResponse({}));
  }

  async resendCreateCloudAccountEmail(request: ResendCreateCloudAccountEmailRequest): Promise<ResendCreateCloudAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendCreateCloudAccountEmailWithOptions(request, runtime);
  }

  async getPayerForAccountWithOptions(request: GetPayerForAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetPayerForAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPayerForAccountResponse>(await this.doRequest("GetPayerForAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new GetPayerForAccountResponse({}));
  }

  async getPayerForAccount(request: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  async resendPromoteResourceAccountEmailWithOptions(request: ResendPromoteResourceAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendPromoteResourceAccountEmailResponse> {
    Util.validateModel(request);
    return $tea.cast<ResendPromoteResourceAccountEmailResponse>(await this.doRequest("ResendPromoteResourceAccountEmail", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ResendPromoteResourceAccountEmailResponse({}));
  }

  async resendPromoteResourceAccountEmail(request: ResendPromoteResourceAccountEmailRequest): Promise<ResendPromoteResourceAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendPromoteResourceAccountEmailWithOptions(request, runtime);
  }

  async listFoldersForParentWithOptions(request: ListFoldersForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersForParentResponse> {
    Util.validateModel(request);
    return $tea.cast<ListFoldersForParentResponse>(await this.doRequest("ListFoldersForParent", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new ListFoldersForParentResponse({}));
  }

  async listFoldersForParent(request: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  async removeCloudAccountWithOptions(request: RemoveCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveCloudAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveCloudAccountResponse>(await this.doRequest("RemoveCloudAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new RemoveCloudAccountResponse({}));
  }

  async removeCloudAccount(request: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  async cancelCreateCloudAccountWithOptions(request: CancelCreateCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<CancelCreateCloudAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<CancelCreateCloudAccountResponse>(await this.doRequest("CancelCreateCloudAccount", "HTTPS", "POST", "2020-03-31", "AK", null, $tea.toMap(request), runtime), new CancelCreateCloudAccountResponse({}));
  }

  async cancelCreateCloudAccount(request: CancelCreateCloudAccountRequest): Promise<CancelCreateCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCreateCloudAccountWithOptions(request, runtime);
  }

  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

}
