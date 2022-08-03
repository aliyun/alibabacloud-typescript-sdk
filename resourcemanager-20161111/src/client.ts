// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachPolicyRequest extends $tea.Model {
  accountId?: string;
  policyName?: string;
  policyType?: string;
  principalName?: string;
  principalType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyResponseBody extends $tea.Model {
  requestId?: string;
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

export class AttachPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCreateCloudAccountRequest extends $tea.Model {
  recordId?: string;
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

export class CancelCreateCloudAccountResponseBody extends $tea.Model {
  requestId?: string;
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

export class CancelCreateCloudAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelCreateCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelCreateCloudAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPromoteResourceAccountRequest extends $tea.Model {
  recordId?: string;
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

export class CancelPromoteResourceAccountResponseBody extends $tea.Model {
  requestId?: string;
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

export class CancelPromoteResourceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelPromoteResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelPromoteResourceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountRequest extends $tea.Model {
  displayName?: string;
  email?: string;
  enableConsolidatedBilling?: boolean;
  parentFolderId?: string;
  payerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      enableConsolidatedBilling: 'EnableConsolidatedBilling',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      enableConsolidatedBilling: 'boolean',
      parentFolderId: 'string',
      payerAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountResponseBody extends $tea.Model {
  account?: CreateCloudAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: CreateCloudAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCloudAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  name?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBody extends $tea.Model {
  folder?: CreateFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: CreateFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  description?: string;
  policyDocument?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      policyDocument: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $tea.Model {
  policy?: CreatePolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreatePolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionRequest extends $tea.Model {
  policyDocument?: string;
  policyName?: string;
  setAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      setAsDefault: 'SetAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      policyName: 'string',
      setAsDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponseBody extends $tea.Model {
  policyVersion?: CreatePolicyVersionResponseBodyPolicyVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: CreatePolicyVersionResponseBodyPolicyVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequest extends $tea.Model {
  displayName?: string;
  enableConsolidatedBilling?: boolean;
  parentFolderId?: string;
  payerAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      enableConsolidatedBilling: 'EnableConsolidatedBilling',
      parentFolderId: 'ParentFolderId',
      payerAccountId: 'PayerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      enableConsolidatedBilling: 'boolean',
      parentFolderId: 'string',
      payerAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponseBody extends $tea.Model {
  account?: CreateResourceAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: CreateResourceAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $tea.Model {
  accountId?: string;
  displayName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      displayName: 'DisplayName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroup?: CreateResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: CreateResourceGroupResponseBodyResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $tea.Model {
  assumeRolePolicyDocument?: string;
  description?: string;
  maxSessionDuration?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $tea.Model {
  requestId?: string;
  role?: CreateRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateRoleResponseBodyRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  customSuffix?: string;
  description?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      customSuffix: 'CustomSuffix',
      description: 'Description',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customSuffix: 'string',
      description: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
  requestId?: string;
  role?: CreateServiceLinkedRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: CreateServiceLinkedRoleResponseBodyRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFolderRequest extends $tea.Model {
  folderId?: string;
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

export class DeleteFolderResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInvalidCloudAccountRecordRequest extends $tea.Model {
  recordId?: string;
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

export class DeleteInvalidCloudAccountRecordResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteInvalidCloudAccountRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInvalidCloudAccountRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInvalidCloudAccountRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  policyName?: string;
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

export class DeletePolicyResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeletePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyVersionRequest extends $tea.Model {
  policyName?: string;
  versionId?: string;
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

export class DeletePolicyVersionResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeletePolicyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupRequest extends $tea.Model {
  accountId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroup?: DeleteResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: DeleteResourceGroupResponseBodyResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleRequest extends $tea.Model {
  roleName?: string;
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

export class DeleteRoleResponseBody extends $tea.Model {
  requestId?: string;
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

export class DeleteRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLinkedRoleRequest extends $tea.Model {
  roleName?: string;
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

export class DeleteServiceLinkedRoleResponseBody extends $tea.Model {
  deletionTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestoryResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
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

export class DestoryResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DestoryResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DestoryResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestroyResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
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

export class DestroyResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DestroyResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DestroyResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyRequest extends $tea.Model {
  accountId?: string;
  policyName?: string;
  policyType?: string;
  principalName?: string;
  principalType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyResponseBody extends $tea.Model {
  requestId?: string;
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

export class DetachPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSummaryRequest extends $tea.Model {
  accountId?: string;
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

export class GetAccountSummaryResponseBody extends $tea.Model {
  requestId?: string;
  summaryMap?: GetAccountSummaryResponseBodySummaryMap;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      summaryMap: 'SummaryMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      summaryMap: GetAccountSummaryResponseBodySummaryMap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderRequest extends $tea.Model {
  folderId?: string;
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

export class GetFolderResponseBody extends $tea.Model {
  folder?: GetFolderResponseBodyFolder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: GetFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  language?: string;
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBody extends $tea.Model {
  policy?: GetPolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionRequest extends $tea.Model {
  policyName?: string;
  policyType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponseBody extends $tea.Model {
  policyVersion?: GetPolicyVersionResponseBodyPolicyVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: GetPolicyVersionResponseBodyPolicyVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  resourceDirectory?: GetResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: GetResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryAccountRequest extends $tea.Model {
  accountId?: string;
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

export class GetResourceDirectoryAccountResponseBody extends $tea.Model {
  account?: GetResourceDirectoryAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GetResourceDirectoryAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceDirectoryAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceDirectoryAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $tea.Model {
  accountId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroup?: GetResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: GetResourceGroupResponseBodyResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleRequest extends $tea.Model {
  language?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBody extends $tea.Model {
  requestId?: string;
  role?: GetRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: GetRoleResponseBodyRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoleResponseBody,
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

export class GetServiceLinkedRoleDeletionStatusResponseBody extends $tea.Model {
  reason?: GetServiceLinkedRoleDeletionStatusResponseBodyReason;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: GetServiceLinkedRoleDeletionStatusResponseBodyReason,
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceLinkedRoleDeletionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceLinkedRoleDeletionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateRequest extends $tea.Model {
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBody extends $tea.Model {
  requestId?: string;
  serviceLinkedRoleTemplate?: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceLinkedRoleTemplate: 'ServiceLinkedRoleTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceLinkedRoleTemplate: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceLinkedRoleTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceLinkedRoleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  resourceDirectory?: InitResourceDirectoryResponseBodyResourceDirectory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceDirectory: 'ResourceDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceDirectory: InitResourceDirectoryResponseBodyResourceDirectory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InitResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountRecordsForParentRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentFolderId?: string;
  queryKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountRecordsForParentResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  records?: ListAccountRecordsForParentResponseBodyRecords;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: ListAccountRecordsForParentResponseBodyRecords,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountRecordsForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccountRecordsForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountRecordsForParentResponseBody,
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

export class ListAccountsResponseBody extends $tea.Model {
  accounts?: ListAccountsResponseBodyAccounts;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListAccountsResponseBodyAccounts,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentFolderId?: string;
  queryKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBody extends $tea.Model {
  accounts?: ListAccountsForParentResponseBodyAccounts;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: ListAccountsForParentResponseBodyAccounts,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccountsForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountsForParentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsRequest extends $tea.Model {
  childId?: string;
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

export class ListAncestorsResponseBody extends $tea.Model {
  folders?: ListAncestorsResponseBodyFolders;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListAncestorsResponseBodyFolders,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAncestorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAncestorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentFolderId?: string;
  queryKeyword?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBody extends $tea.Model {
  folders?: ListFoldersForParentResponseBodyFolders;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListFoldersForParentResponseBodyFolders,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFoldersForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFoldersForParentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParentsRequest extends $tea.Model {
  childId?: string;
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

export class ListParentsResponseBody extends $tea.Model {
  folders?: ListParentsResponseBodyFolders;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListParentsResponseBodyFolders,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListParentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListParentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policies?: ListPoliciesResponseBodyPolicies;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsRequest extends $tea.Model {
  accountId?: string;
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  policyName?: string;
  policyType?: string;
  principalName?: string;
  principalType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policyAttachments?: ListPolicyAttachmentsResponseBodyPolicyAttachments;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyAttachments: 'PolicyAttachments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policyAttachments: ListPolicyAttachmentsResponseBodyPolicyAttachments,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPolicyAttachmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsRequest extends $tea.Model {
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBody extends $tea.Model {
  policyVersions?: ListPolicyVersionsResponseBodyPolicyVersions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyVersions: 'PolicyVersions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersions: ListPolicyVersionsResponseBodyPolicyVersions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPolicyVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $tea.Model {
  accountId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resourceGroups?: ListResourceGroupsResponseBodyResourceGroups;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourceGroups: ListResourceGroupsResponseBodyResourceGroups,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  roles?: ListRolesResponseBodyRoles;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      roles: 'Roles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      roles: ListRolesResponseBodyRoles,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesForServiceRequest extends $tea.Model {
  language?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesForServiceResponseBody extends $tea.Model {
  requestId?: string;
  roles?: ListRolesForServiceResponseBodyRoles;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roles: ListRolesForServiceResponseBodyRoles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesForServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRolesForServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesForServiceResponseBody,
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

export class ListTrustedServiceStatusResponseBody extends $tea.Model {
  enabledServicePrincipals?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      enabledServicePrincipals: 'EnabledServicePrincipals',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipals: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTrustedServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrustedServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveAccountRequest extends $tea.Model {
  accountId?: string;
  destinationFolderId?: string;
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

export class MoveAccountResponseBody extends $tea.Model {
  requestId?: string;
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

export class MoveAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromoteResourceAccountRequest extends $tea.Model {
  accountId?: string;
  email?: string;
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

export class PromoteResourceAccountResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromoteResourceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PromoteResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PromoteResourceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceRequest extends $tea.Model {
  accountId?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: QueryResourceResponseBodyResources;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: QueryResourceResponseBodyResources,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCloudAccountRequest extends $tea.Model {
  accountId?: string;
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

export class RemoveCloudAccountResponseBody extends $tea.Model {
  requestId?: string;
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

export class RemoveCloudAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveCloudAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailRequest extends $tea.Model {
  recordId?: string;
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

export class ResendCreateCloudAccountEmailResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResendCreateCloudAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResendCreateCloudAccountEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailRequest extends $tea.Model {
  recordId?: string;
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

export class ResendPromoteResourceAccountEmailResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResendPromoteResourceAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResendPromoteResourceAccountEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultPolicyVersionRequest extends $tea.Model {
  policyName?: string;
  versionId?: string;
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

export class SetDefaultPolicyVersionResponseBody extends $tea.Model {
  requestId?: string;
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

export class SetDefaultPolicyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDefaultPolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDefaultPolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  folderId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $tea.Model {
  requestId?: string;
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

export class UpdateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupRequest extends $tea.Model {
  accountId?: string;
  newDisplayName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      newDisplayName: 'NewDisplayName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      newDisplayName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  resourceGroup?: UpdateResourceGroupResponseBodyResourceGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroup: UpdateResourceGroupResponseBodyResourceGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  newAssumeRolePolicyDocument?: string;
  newDescription?: string;
  newMaxSessionDuration?: number;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      newAssumeRolePolicyDocument: 'NewAssumeRolePolicyDocument',
      newDescription: 'NewDescription',
      newMaxSessionDuration: 'NewMaxSessionDuration',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newAssumeRolePolicyDocument: 'string',
      newDescription: 'string',
      newMaxSessionDuration: 'number',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $tea.Model {
  requestId?: string;
  role?: UpdateRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: UpdateRoleResponseBodyRole,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountResponseBodyAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  recordId?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      recordId: 'RecordId',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      recordId: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBodyFolder extends $tea.Model {
  createDate?: string;
  folderId?: string;
  name?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      folderId: 'FolderId',
      name: 'Name',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      folderId: 'string',
      name: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBodyPolicy extends $tea.Model {
  createDate?: string;
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponseBodyPolicyVersion extends $tea.Model {
  createDate?: string;
  isDefaultVersion?: boolean;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponseBodyAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBodyResourceGroupRegionStatuses extends $tea.Model {
  regionStatus?: CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBodyResourceGroup extends $tea.Model {
  accountId?: string;
  createDate?: string;
  displayName?: string;
  id?: string;
  name?: string;
  regionStatuses?: CreateResourceGroupResponseBodyResourceGroupRegionStatuses;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      regionStatuses: CreateResourceGroupResponseBodyResourceGroupRegionStatuses,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBodyRole extends $tea.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  maxSessionDuration?: number;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBodyRole extends $tea.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBodyResourceGroupRegionStatuses extends $tea.Model {
  regionStatus?: DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBodyResourceGroup extends $tea.Model {
  accountId?: string;
  createDate?: string;
  displayName?: string;
  id?: string;
  name?: string;
  regionStatuses?: DeleteResourceGroupResponseBodyResourceGroupRegionStatuses;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      regionStatuses: DeleteResourceGroupResponseBodyResourceGroupRegionStatuses,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSummaryResponseBodySummaryMap extends $tea.Model {
  attachedPoliciesPerGroupQuota?: number;
  attachedPoliciesPerRoleQuota?: number;
  attachedPoliciesPerUserQuota?: number;
  attachedSystemPoliciesPerGroupQuota?: number;
  attachedSystemPoliciesPerRoleQuota?: number;
  attachedSystemPoliciesPerUserQuota?: number;
  policies?: number;
  policiesQuota?: number;
  policySizeQuota?: number;
  resourceGroups?: number;
  resourceGroupsQuota?: number;
  roles?: number;
  rolesQuota?: number;
  versionsPerPolicyQuota?: number;
  static names(): { [key: string]: string } {
    return {
      attachedPoliciesPerGroupQuota: 'AttachedPoliciesPerGroupQuota',
      attachedPoliciesPerRoleQuota: 'AttachedPoliciesPerRoleQuota',
      attachedPoliciesPerUserQuota: 'AttachedPoliciesPerUserQuota',
      attachedSystemPoliciesPerGroupQuota: 'AttachedSystemPoliciesPerGroupQuota',
      attachedSystemPoliciesPerRoleQuota: 'AttachedSystemPoliciesPerRoleQuota',
      attachedSystemPoliciesPerUserQuota: 'AttachedSystemPoliciesPerUserQuota',
      policies: 'Policies',
      policiesQuota: 'PoliciesQuota',
      policySizeQuota: 'PolicySizeQuota',
      resourceGroups: 'ResourceGroups',
      resourceGroupsQuota: 'ResourceGroupsQuota',
      roles: 'Roles',
      rolesQuota: 'RolesQuota',
      versionsPerPolicyQuota: 'VersionsPerPolicyQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedPoliciesPerGroupQuota: 'number',
      attachedPoliciesPerRoleQuota: 'number',
      attachedPoliciesPerUserQuota: 'number',
      attachedSystemPoliciesPerGroupQuota: 'number',
      attachedSystemPoliciesPerRoleQuota: 'number',
      attachedSystemPoliciesPerUserQuota: 'number',
      policies: 'number',
      policiesQuota: 'number',
      policySizeQuota: 'number',
      resourceGroups: 'number',
      resourceGroupsQuota: 'number',
      roles: 'number',
      rolesQuota: 'number',
      versionsPerPolicyQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBodyFolder extends $tea.Model {
  createDate?: string;
  folderId?: string;
  name?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      folderId: 'FolderId',
      name: 'Name',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      folderId: 'string',
      name: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicy extends $tea.Model {
  attachmentCount?: number;
  createDate?: string;
  defaultVersion?: string;
  description?: string;
  policyDocument?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyDocument: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponseBodyPolicyVersion extends $tea.Model {
  createDate?: string;
  isDefaultVersion?: boolean;
  policyDocument?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      policyDocument: 'PolicyDocument',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      policyDocument: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBodyResourceDirectory extends $tea.Model {
  createDate?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  resourceDirectoryId?: string;
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryAccountResponseBodyAccount extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  identityInformation?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      identityInformation: 'IdentityInformation',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      identityInformation: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroupRegionStatuses extends $tea.Model {
  regionStatus?: GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatus: { 'type': 'array', 'itemType': GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroup extends $tea.Model {
  accountId?: string;
  createDate?: string;
  displayName?: string;
  id?: string;
  name?: string;
  regionStatuses?: GetResourceGroupResponseBodyResourceGroupRegionStatuses;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      regionStatuses: 'RegionStatuses',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      regionStatuses: GetResourceGroupResponseBodyResourceGroupRegionStatuses,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBodyRoleLatestDeletionTask extends $tea.Model {
  createDate?: string;
  deletionTaskId?: string;
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

export class GetRoleResponseBodyRole extends $tea.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  latestDeletionTask?: GetRoleResponseBodyRoleLatestDeletionTask;
  maxSessionDuration?: number;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: GetRoleResponseBodyRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources extends $tea.Model {
  resource?: string[];
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

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage extends $tea.Model {
  region?: string;
  resources?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsageResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages extends $tea.Model {
  roleUsage?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage[];
  static names(): { [key: string]: string } {
    return {
      roleUsage: 'RoleUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleUsage: { 'type': 'array', 'itemType': GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsagesRoleUsage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponseBodyReason extends $tea.Model {
  message?: string;
  roleUsages?: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      roleUsages: GetServiceLinkedRoleDeletionStatusResponseBodyReasonRoleUsages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptionsRoleDescription extends $tea.Model {
  description?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptions extends $tea.Model {
  roleDescription?: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptionsRoleDescription[];
  static names(): { [key: string]: string } {
    return {
      roleDescription: 'RoleDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDescription: { 'type': 'array', 'itemType': GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptionsRoleDescription },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplate extends $tea.Model {
  multipleRolesAllowed?: boolean;
  roleDescriptions?: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptions;
  roleNamePrefix?: string;
  serviceName?: string;
  systemPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      multipleRolesAllowed: 'MultipleRolesAllowed',
      roleDescriptions: 'RoleDescriptions',
      roleNamePrefix: 'RoleNamePrefix',
      serviceName: 'ServiceName',
      systemPolicyName: 'SystemPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multipleRolesAllowed: 'boolean',
      roleDescriptions: GetServiceLinkedRoleTemplateResponseBodyServiceLinkedRoleTemplateRoleDescriptions,
      roleNamePrefix: 'string',
      serviceName: 'string',
      systemPolicyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitResourceDirectoryResponseBodyResourceDirectory extends $tea.Model {
  createDate?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  resourceDirectoryId?: string;
  rootFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      resourceDirectoryId: 'ResourceDirectoryId',
      rootFolderId: 'RootFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      resourceDirectoryId: 'string',
      rootFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountRecordsForParentResponseBodyRecordsRecord extends $tea.Model {
  accountId?: string;
  accountName?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  recordId?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      recordId: 'RecordId',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      recordId: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountRecordsForParentResponseBodyRecords extends $tea.Model {
  record?: ListAccountRecordsForParentResponseBodyRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': ListAccountRecordsForParentResponseBodyRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBodyAccountsAccount extends $tea.Model {
  accountId?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBodyAccounts extends $tea.Model {
  account?: ListAccountsResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccountsAccount extends $tea.Model {
  accountId?: string;
  displayName?: string;
  folderId?: string;
  joinMethod?: string;
  joinTime?: string;
  modifyTime?: string;
  resourceDirectoryId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      joinMethod: 'JoinMethod',
      joinTime: 'JoinTime',
      modifyTime: 'ModifyTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
      folderId: 'string',
      joinMethod: 'string',
      joinTime: 'string',
      modifyTime: 'string',
      resourceDirectoryId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponseBodyAccounts extends $tea.Model {
  account?: ListAccountsForParentResponseBodyAccountsAccount[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': ListAccountsForParentResponseBodyAccountsAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBodyFoldersFolder extends $tea.Model {
  createDate?: string;
  folderId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      folderId: 'FolderId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      folderId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBodyFolders extends $tea.Model {
  folder?: ListAncestorsResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListAncestorsResponseBodyFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBodyFoldersFolder extends $tea.Model {
  createDate?: string;
  folderId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      folderId: 'FolderId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      folderId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponseBodyFolders extends $tea.Model {
  folder?: ListFoldersForParentResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListFoldersForParentResponseBodyFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParentsResponseBodyFoldersFolder extends $tea.Model {
  createDate?: string;
  folderId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      folderId: 'FolderId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      folderId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParentsResponseBodyFolders extends $tea.Model {
  folder?: ListParentsResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListParentsResponseBodyFoldersFolder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPoliciesPolicy extends $tea.Model {
  attachmentCount?: number;
  createDate?: string;
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  policyType?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentCount: 'AttachmentCount',
      createDate: 'CreateDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentCount: 'number',
      createDate: 'string',
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicies extends $tea.Model {
  policy?: ListPoliciesResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment extends $tea.Model {
  attachDate?: string;
  description?: string;
  policyName?: string;
  policyType?: string;
  principalName?: string;
  principalType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      description: 'string',
      policyName: 'string',
      policyType: 'string',
      principalName: 'string',
      principalType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponseBodyPolicyAttachments extends $tea.Model {
  policyAttachment?: ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      policyAttachment: 'PolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachment: { 'type': 'array', 'itemType': ListPolicyAttachmentsResponseBodyPolicyAttachmentsPolicyAttachment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion extends $tea.Model {
  createDate?: string;
  isDefaultVersion?: boolean;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      isDefaultVersion: 'boolean',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBodyPolicyVersions extends $tea.Model {
  policyVersion?: ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: { 'type': 'array', 'itemType': ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyResourceGroupsResourceGroup extends $tea.Model {
  accountId?: string;
  createDate?: string;
  displayName?: string;
  id?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponseBodyResourceGroups extends $tea.Model {
  resourceGroup?: ListResourceGroupsResponseBodyResourceGroupsResourceGroup[];
  static names(): { [key: string]: string } {
    return {
      resourceGroup: 'ResourceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroup: { 'type': 'array', 'itemType': ListResourceGroupsResponseBodyResourceGroupsResourceGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRoleLatestDeletionTask extends $tea.Model {
  createDate?: string;
  deletionTaskId?: string;
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

export class ListRolesResponseBodyRolesRole extends $tea.Model {
  arn?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  latestDeletionTask?: ListRolesResponseBodyRolesRoleLatestDeletionTask;
  maxSessionDuration?: number;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: ListRolesResponseBodyRolesRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRoles extends $tea.Model {
  role?: ListRolesResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesResponseBodyRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesForServiceResponseBodyRolesRoleLatestDeletionTask extends $tea.Model {
  createDate?: string;
  deletionTaskId?: string;
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

export class ListRolesForServiceResponseBodyRolesRole extends $tea.Model {
  arn?: string;
  createDate?: string;
  description?: string;
  isServiceLinkedRole?: boolean;
  latestDeletionTask?: ListRolesForServiceResponseBodyRolesRoleLatestDeletionTask;
  maxSessionDuration?: number;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: ListRolesForServiceResponseBodyRolesRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesForServiceResponseBodyRoles extends $tea.Model {
  role?: ListRolesForServiceResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListRolesForServiceResponseBodyRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal extends $tea.Model {
  enableTime?: string;
  servicePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      enableTime: 'EnableTime',
      servicePrincipal: 'ServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTime: 'string',
      servicePrincipal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipals extends $tea.Model {
  enabledServicePrincipal?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal[];
  static names(): { [key: string]: string } {
    return {
      enabledServicePrincipal: 'EnabledServicePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledServicePrincipal: { 'type': 'array', 'itemType': ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceResponseBodyResourcesResource extends $tea.Model {
  createDate?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourceResponseBodyResources extends $tea.Model {
  resource?: QueryResourceResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': QueryResourceResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBodyResourceGroup extends $tea.Model {
  accountId?: string;
  createDate?: string;
  displayName?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createDate: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBodyRole extends $tea.Model {
  arn?: string;
  assumeRolePolicyDocument?: string;
  createDate?: string;
  description?: string;
  maxSessionDuration?: number;
  roleId?: string;
  roleName?: string;
  rolePrincipalName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "resourcemanager.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "resourcemanager.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "resourcemanager.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "resourcemanager.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "resourcemanager.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "resourcemanager.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "resourcemanager.cn-beijing.aliyuncs.com",
      'cn-chengdu': "resourcemanager.cn-chengdu.aliyuncs.com",
      'cn-hangzhou-finance': "resourcemanager.cn-hangzhou-finance.aliyuncs.com",
      'cn-hongkong': "resourcemanager.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "resourcemanager.cn-huhehaote.aliyuncs.com",
      'cn-north-2-gov-1': "resourcemanager.cn-north-2-gov-1.aliyuncs.com",
      'cn-qingdao': "resourcemanager.cn-qingdao.aliyuncs.com",
      'cn-shanghai-finance-1': "resourcemanager.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shenzhen': "resourcemanager.cn-shenzhen.aliyuncs.com",
      'cn-shenzhen-finance-1': "resourcemanager.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-wulanchabu': "resourcemanager.cn-wulanchabu.aliyuncs.com",
      'cn-zhangjiakou': "resourcemanager.cn-zhangjiakou.aliyuncs.com",
      'eu-central-1': "resourcemanager.eu-central-1.aliyuncs.com",
      'eu-west-1': "resourcemanager.eu-west-1.aliyuncs.com",
      'me-east-1': "resourcemanager.me-east-1.aliyuncs.com",
      'us-east-1': "resourcemanager.us-east-1.aliyuncs.com",
      'us-west-1': "resourcemanager.us-west-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resourcemanager", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async attachPolicyWithOptions(request: AttachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachPolicy",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachPolicyResponse>(await this.callApi(params, req, runtime), new AttachPolicyResponse({}));
  }

  async attachPolicy(request: AttachPolicyRequest): Promise<AttachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  async cancelCreateCloudAccountWithOptions(request: CancelCreateCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<CancelCreateCloudAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelCreateCloudAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelCreateCloudAccountResponse>(await this.callApi(params, req, runtime), new CancelCreateCloudAccountResponse({}));
  }

  async cancelCreateCloudAccount(request: CancelCreateCloudAccountRequest): Promise<CancelCreateCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCreateCloudAccountWithOptions(request, runtime);
  }

  async cancelPromoteResourceAccountWithOptions(request: CancelPromoteResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CancelPromoteResourceAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelPromoteResourceAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelPromoteResourceAccountResponse>(await this.callApi(params, req, runtime), new CancelPromoteResourceAccountResponse({}));
  }

  async cancelPromoteResourceAccount(request: CancelPromoteResourceAccountRequest): Promise<CancelPromoteResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPromoteResourceAccountWithOptions(request, runtime);
  }

  async createCloudAccountWithOptions(request: CreateCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.enableConsolidatedBilling)) {
      query["EnableConsolidatedBilling"] = request.enableConsolidatedBilling;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCloudAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCloudAccountResponse>(await this.callApi(params, req, runtime), new CreateCloudAccountResponse({}));
  }

  async createCloudAccount(request: CreateCloudAccountRequest): Promise<CreateCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFolder",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFolderResponse>(await this.callApi(params, req, runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicy",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
  }

  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  async createPolicyVersionWithOptions(request: CreatePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.setAsDefault)) {
      query["SetAsDefault"] = request.setAsDefault;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicyVersion",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyVersionResponse>(await this.callApi(params, req, runtime), new CreatePolicyVersionResponse({}));
  }

  async createPolicyVersion(request: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  async createResourceAccountWithOptions(request: CreateResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.enableConsolidatedBilling)) {
      query["EnableConsolidatedBilling"] = request.enableConsolidatedBilling;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.payerAccountId)) {
      query["PayerAccountId"] = request.payerAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceAccountResponse>(await this.callApi(params, req, runtime), new CreateResourceAccountResponse({}));
  }

  async createResourceAccount(request: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceGroup",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateResourceGroupResponse({}));
  }

  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  async createRoleWithOptions(request: CreateRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assumeRolePolicyDocument)) {
      query["AssumeRolePolicyDocument"] = request.assumeRolePolicyDocument;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.maxSessionDuration)) {
      query["MaxSessionDuration"] = request.maxSessionDuration;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRole",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRoleResponse>(await this.callApi(params, req, runtime), new CreateRoleResponse({}));
  }

  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customSuffix)) {
      query["CustomSuffix"] = request.customSuffix;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRole",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFolder",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFolderResponse>(await this.callApi(params, req, runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async deleteInvalidCloudAccountRecordWithOptions(request: DeleteInvalidCloudAccountRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInvalidCloudAccountRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInvalidCloudAccountRecord",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInvalidCloudAccountRecordResponse>(await this.callApi(params, req, runtime), new DeleteInvalidCloudAccountRecordResponse({}));
  }

  async deleteInvalidCloudAccountRecord(request: DeleteInvalidCloudAccountRecordRequest): Promise<DeleteInvalidCloudAccountRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInvalidCloudAccountRecordWithOptions(request, runtime);
  }

  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicy",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
  }

  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  async deletePolicyVersionWithOptions(request: DeletePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyVersion",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyVersionResponse>(await this.callApi(params, req, runtime), new DeletePolicyVersionResponse({}));
  }

  async deletePolicyVersion(request: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  async deleteResourceGroupWithOptions(request: DeleteResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceGroup",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupResponse({}));
  }

  async deleteResourceGroup(request: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  async deleteRoleWithOptions(request: DeleteRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRole",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoleResponse>(await this.callApi(params, req, runtime), new DeleteRoleResponse({}));
  }

  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  async deleteServiceLinkedRoleWithOptions(request: DeleteServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceLinkedRole",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new DeleteServiceLinkedRoleResponse({}));
  }

  async deleteServiceLinkedRole(request: DeleteServiceLinkedRoleRequest): Promise<DeleteServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceLinkedRoleWithOptions(request, runtime);
  }

  async destoryResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<DestoryResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DestoryResourceDirectory",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DestoryResourceDirectoryResponse>(await this.callApi(params, req, runtime), new DestoryResourceDirectoryResponse({}));
  }

  async destoryResourceDirectory(): Promise<DestoryResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destoryResourceDirectoryWithOptions(runtime);
  }

  async destroyResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<DestroyResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DestroyResourceDirectory",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DestroyResourceDirectoryResponse>(await this.callApi(params, req, runtime), new DestroyResourceDirectoryResponse({}));
  }

  async destroyResourceDirectory(): Promise<DestroyResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  async detachPolicyWithOptions(request: DetachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachPolicy",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachPolicyResponse>(await this.callApi(params, req, runtime), new DetachPolicyResponse({}));
  }

  async detachPolicy(request: DetachPolicyRequest): Promise<DetachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  async getAccountSummaryWithOptions(request: GetAccountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountSummary",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountSummaryResponse>(await this.callApi(params, req, runtime), new GetAccountSummaryResponse({}));
  }

  async getAccountSummary(request: GetAccountSummaryRequest): Promise<GetAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSummaryWithOptions(request, runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFolder",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFolderResponse>(await this.callApi(params, req, runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPolicy",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPolicyResponse>(await this.callApi(params, req, runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async getPolicyVersionWithOptions(request: GetPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPolicyVersion",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPolicyVersionResponse>(await this.callApi(params, req, runtime), new GetPolicyVersionResponse({}));
  }

  async getPolicyVersion(request: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  async getResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetResourceDirectory",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceDirectoryResponse>(await this.callApi(params, req, runtime), new GetResourceDirectoryResponse({}));
  }

  async getResourceDirectory(): Promise<GetResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  async getResourceDirectoryAccountWithOptions(request: GetResourceDirectoryAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceDirectoryAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceDirectoryAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceDirectoryAccountResponse>(await this.callApi(params, req, runtime), new GetResourceDirectoryAccountResponse({}));
  }

  async getResourceDirectoryAccount(request: GetResourceDirectoryAccountRequest): Promise<GetResourceDirectoryAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceDirectoryAccountWithOptions(request, runtime);
  }

  async getResourceGroupWithOptions(request: GetResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceGroup",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupResponse({}));
  }

  async getResourceGroup(request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  async getRoleWithOptions(request: GetRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRole",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRoleResponse>(await this.callApi(params, req, runtime), new GetRoleResponse({}));
  }

  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  async getServiceLinkedRoleDeletionStatusWithOptions(request: GetServiceLinkedRoleDeletionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionTaskId)) {
      query["DeletionTaskId"] = request.deletionTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceLinkedRoleDeletionStatus",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceLinkedRoleDeletionStatusResponse>(await this.callApi(params, req, runtime), new GetServiceLinkedRoleDeletionStatusResponse({}));
  }

  async getServiceLinkedRoleDeletionStatus(request: GetServiceLinkedRoleDeletionStatusRequest): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleDeletionStatusWithOptions(request, runtime);
  }

  async getServiceLinkedRoleTemplateWithOptions(request: GetServiceLinkedRoleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLinkedRoleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceLinkedRoleTemplate",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceLinkedRoleTemplateResponse>(await this.callApi(params, req, runtime), new GetServiceLinkedRoleTemplateResponse({}));
  }

  async getServiceLinkedRoleTemplate(request: GetServiceLinkedRoleTemplateRequest): Promise<GetServiceLinkedRoleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleTemplateWithOptions(request, runtime);
  }

  async initResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<InitResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "InitResourceDirectory",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitResourceDirectoryResponse>(await this.callApi(params, req, runtime), new InitResourceDirectoryResponse({}));
  }

  async initResourceDirectory(): Promise<InitResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initResourceDirectoryWithOptions(runtime);
  }

  async listAccountRecordsForParentWithOptions(request: ListAccountRecordsForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountRecordsForParentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountRecordsForParent",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountRecordsForParentResponse>(await this.callApi(params, req, runtime), new ListAccountRecordsForParentResponse({}));
  }

  async listAccountRecordsForParent(request: ListAccountRecordsForParentRequest): Promise<ListAccountRecordsForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountRecordsForParentWithOptions(request, runtime);
  }

  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccounts",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountsResponse>(await this.callApi(params, req, runtime), new ListAccountsResponse({}));
  }

  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  async listAccountsForParentWithOptions(request: ListAccountsForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsForParentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountsForParent",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountsForParentResponse>(await this.callApi(params, req, runtime), new ListAccountsForParentResponse({}));
  }

  async listAccountsForParent(request: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  async listAncestorsWithOptions(request: ListAncestorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAncestorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childId)) {
      query["ChildId"] = request.childId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAncestors",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAncestorsResponse>(await this.callApi(params, req, runtime), new ListAncestorsResponse({}));
  }

  async listAncestors(request: ListAncestorsRequest): Promise<ListAncestorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  async listFoldersForParentWithOptions(request: ListFoldersForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersForParentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      query["ParentFolderId"] = request.parentFolderId;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFoldersForParent",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFoldersForParentResponse>(await this.callApi(params, req, runtime), new ListFoldersForParentResponse({}));
  }

  async listFoldersForParent(request: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  async listParentsWithOptions(request: ListParentsRequest, runtime: $Util.RuntimeOptions): Promise<ListParentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.childId)) {
      query["ChildId"] = request.childId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParents",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListParentsResponse>(await this.callApi(params, req, runtime), new ListParentsResponse({}));
  }

  async listParents(request: ListParentsRequest): Promise<ListParentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParentsWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicies",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  async listPolicyAttachmentsWithOptions(request: ListPolicyAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyAttachmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.principalName)) {
      query["PrincipalName"] = request.principalName;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicyAttachments",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicyAttachmentsResponse>(await this.callApi(params, req, runtime), new ListPolicyAttachmentsResponse({}));
  }

  async listPolicyAttachments(request: ListPolicyAttachmentsRequest): Promise<ListPolicyAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyAttachmentsWithOptions(request, runtime);
  }

  async listPolicyVersionsWithOptions(request: ListPolicyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicyVersions",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicyVersionsResponse>(await this.callApi(params, req, runtime), new ListPolicyVersionsResponse({}));
  }

  async listPolicyVersions(request: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceGroups",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listRolesForServiceWithOptions(request: ListRolesForServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesForServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRolesForService",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRolesForServiceResponse>(await this.callApi(params, req, runtime), new ListRolesForServiceResponse({}));
  }

  async listRolesForService(request: ListRolesForServiceRequest): Promise<ListRolesForServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesForServiceWithOptions(request, runtime);
  }

  async listTrustedServiceStatusWithOptions(request: ListTrustedServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListTrustedServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrustedServiceStatus",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTrustedServiceStatusResponse>(await this.callApi(params, req, runtime), new ListTrustedServiceStatusResponse({}));
  }

  async listTrustedServiceStatus(request: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  async moveAccountWithOptions(request: MoveAccountRequest, runtime: $Util.RuntimeOptions): Promise<MoveAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.destinationFolderId)) {
      query["DestinationFolderId"] = request.destinationFolderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveAccountResponse>(await this.callApi(params, req, runtime), new MoveAccountResponse({}));
  }

  async moveAccount(request: MoveAccountRequest): Promise<MoveAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  async promoteResourceAccountWithOptions(request: PromoteResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<PromoteResourceAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PromoteResourceAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PromoteResourceAccountResponse>(await this.callApi(params, req, runtime), new PromoteResourceAccountResponse({}));
  }

  async promoteResourceAccount(request: PromoteResourceAccountRequest): Promise<PromoteResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.promoteResourceAccountWithOptions(request, runtime);
  }

  async queryResourceWithOptions(request: QueryResourceRequest, runtime: $Util.RuntimeOptions): Promise<QueryResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryResource",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryResourceResponse>(await this.callApi(params, req, runtime), new QueryResourceResponse({}));
  }

  async queryResource(request: QueryResourceRequest): Promise<QueryResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryResourceWithOptions(request, runtime);
  }

  async removeCloudAccountWithOptions(request: RemoveCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveCloudAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveCloudAccount",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveCloudAccountResponse>(await this.callApi(params, req, runtime), new RemoveCloudAccountResponse({}));
  }

  async removeCloudAccount(request: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  async resendCreateCloudAccountEmailWithOptions(request: ResendCreateCloudAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendCreateCloudAccountEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResendCreateCloudAccountEmail",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResendCreateCloudAccountEmailResponse>(await this.callApi(params, req, runtime), new ResendCreateCloudAccountEmailResponse({}));
  }

  async resendCreateCloudAccountEmail(request: ResendCreateCloudAccountEmailRequest): Promise<ResendCreateCloudAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendCreateCloudAccountEmailWithOptions(request, runtime);
  }

  async resendPromoteResourceAccountEmailWithOptions(request: ResendPromoteResourceAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendPromoteResourceAccountEmailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResendPromoteResourceAccountEmail",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResendPromoteResourceAccountEmailResponse>(await this.callApi(params, req, runtime), new ResendPromoteResourceAccountEmailResponse({}));
  }

  async resendPromoteResourceAccountEmail(request: ResendPromoteResourceAccountEmailRequest): Promise<ResendPromoteResourceAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendPromoteResourceAccountEmailWithOptions(request, runtime);
  }

  async setDefaultPolicyVersionWithOptions(request: SetDefaultPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultPolicyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultPolicyVersion",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultPolicyVersionResponse>(await this.callApi(params, req, runtime), new SetDefaultPolicyVersionResponse({}));
  }

  async setDefaultPolicyVersion(request: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFolder",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFolderResponse>(await this.callApi(params, req, runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  async updateResourceGroupWithOptions(request: UpdateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceGroup",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupResponse({}));
  }

  async updateResourceGroup(request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newAssumeRolePolicyDocument)) {
      query["NewAssumeRolePolicyDocument"] = request.newAssumeRolePolicyDocument;
    }

    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newMaxSessionDuration)) {
      query["NewMaxSessionDuration"] = request.newMaxSessionDuration;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRole",
      version: "2016-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRoleResponse>(await this.callApi(params, req, runtime), new UpdateRoleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

}
