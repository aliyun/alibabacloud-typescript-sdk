// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AcceptHandshakeRequest extends $tea.Model {
  handshakeId?: string;
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

export class AcceptHandshakeResponseBody extends $tea.Model {
  requestId?: string;
  handshake?: AcceptHandshakeResponseBodyHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: AcceptHandshakeResponseBodyHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AcceptHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AcceptHandshakeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyRequest extends $tea.Model {
  resourceGroupId?: string;
  policyType?: string;
  policyName?: string;
  principalType?: string;
  principalName?: string;
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
  body: AttachPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CancelCreateCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelCreateCloudAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeRequest extends $tea.Model {
  handshakeId?: string;
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

export class CancelHandshakeResponseBody extends $tea.Model {
  requestId?: string;
  handshake?: CancelHandshakeResponseBodyHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: CancelHandshakeResponseBodyHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelHandshakeResponseBody,
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
  body: CancelPromoteResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelPromoteResourceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountRequest extends $tea.Model {
  displayName?: string;
  parentFolderId?: string;
  email?: string;
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
  body: CreateCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCloudAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $tea.Model {
  parentFolderId?: string;
  folderName?: string;
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

export class CreateFolderResponseBody extends $tea.Model {
  requestId?: string;
  folder?: CreateFolderResponseBodyFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: CreateFolderResponseBodyFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  policyName?: string;
  description?: string;
  policyDocument?: string;
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
  body: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionRequest extends $tea.Model {
  policyName?: string;
  policyDocument?: string;
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
  body: CreatePolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountRequest extends $tea.Model {
  displayName?: string;
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
  body: CreateResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $tea.Model {
  name?: string;
  displayName?: string;
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
  body: CreateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $tea.Model {
  roleName?: string;
  description?: string;
  assumeRolePolicyDocument?: string;
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

export class CreateRoleResponseBody extends $tea.Model {
  role?: CreateRoleResponseBodyRole;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: CreateRoleResponseBodyRole,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  serviceName?: string;
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

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
  role?: CreateServiceLinkedRoleResponseBodyRole;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: CreateServiceLinkedRoleResponseBodyRole,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeRequest extends $tea.Model {
  handshakeId?: string;
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

export class DeclineHandshakeResponseBody extends $tea.Model {
  requestId?: string;
  handshake?: DeclineHandshakeResponseBodyHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: DeclineHandshakeResponseBodyHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeclineHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeclineHandshakeResponseBody,
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
  body: DeleteFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFolderResponseBody,
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
  body: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeletePolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
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
  body: DeleteResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  deletionTaskId?: string;
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

export class DeleteServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceLinkedRoleResponseBody,
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
  body: DestroyResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DestroyResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyRequest extends $tea.Model {
  resourceGroupId?: string;
  policyType?: string;
  policyName?: string;
  principalType?: string;
  principalName?: string;
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
  body: DetachPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountRequest extends $tea.Model {
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

export class GetAccountResponseBody extends $tea.Model {
  account?: GetAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GetAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountResponseBody,
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
  requestId?: string;
  folder?: GetFolderResponseBodyFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: GetFolderResponseBodyFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeRequest extends $tea.Model {
  handshakeId?: string;
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

export class GetHandshakeResponseBody extends $tea.Model {
  requestId?: string;
  handshake?: GetHandshakeResponseBodyHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: GetHandshakeResponseBodyHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHandshakeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHandshakeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPayerForAccountRequest extends $tea.Model {
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

export class GetPayerForAccountResponseBody extends $tea.Model {
  payerAccountName?: string;
  requestId?: string;
  payerAccountId?: string;
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

export class GetPayerForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPayerForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPayerForAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  policyName?: string;
  policyType?: string;
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
  body: GetPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  versionId?: string;
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
  body: GetPolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
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
  body: GetResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleRequest extends $tea.Model {
  roleName?: string;
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

export class GetRoleResponseBody extends $tea.Model {
  role?: GetRoleResponseBodyRole;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: GetRoleResponseBodyRole,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: string;
  requestId?: string;
  reason?: GetServiceLinkedRoleDeletionStatusResponseBodyReason;
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
      reason: GetServiceLinkedRoleDeletionStatusResponseBodyReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleDeletionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceLinkedRoleDeletionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceLinkedRoleDeletionStatusResponseBody,
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
  body: InitResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitResourceDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryRequest extends $tea.Model {
  targetEntity?: string;
  targetType?: string;
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

export class InviteAccountToResourceDirectoryResponseBody extends $tea.Model {
  requestId?: string;
  handshake?: InviteAccountToResourceDirectoryResponseBodyHandshake;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handshake: InviteAccountToResourceDirectoryResponseBodyHandshake,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InviteAccountToResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InviteAccountToResourceDirectoryResponseBody,
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  accounts?: ListAccountsResponseBodyAccounts;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      accounts: ListAccountsResponseBodyAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAccountsResponseBody,
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

export class ListAccountsForParentResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  accounts?: ListAccountsForParentResponseBodyAccounts;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      accounts: 'Accounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      accounts: ListAccountsForParentResponseBodyAccounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccountsForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  folders?: ListAncestorsResponseBodyFolders;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folders: ListAncestorsResponseBodyFolders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAncestorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAncestorsResponseBody,
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

export class ListFoldersForParentResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  folders?: ListFoldersForParentResponseBodyFolders;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      folders: 'Folders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      folders: ListFoldersForParentResponseBodyFolders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFoldersForParentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFoldersForParentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFoldersForParentResponseBody,
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

export class ListHandshakesForAccountResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  handshakes?: ListHandshakesForAccountResponseBodyHandshakes;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      handshakes: 'Handshakes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      handshakes: ListHandshakesForAccountResponseBodyHandshakes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHandshakesForAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHandshakesForAccountResponseBody,
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

export class ListHandshakesForResourceDirectoryResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  handshakes?: ListHandshakesForResourceDirectoryResponseBodyHandshakes;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      handshakes: 'Handshakes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      handshakes: ListHandshakesForResourceDirectoryResponseBodyHandshakes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListHandshakesForResourceDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListHandshakesForResourceDirectoryResponseBody,
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

export class ListPoliciesResponseBody extends $tea.Model {
  totalCount?: number;
  policies?: ListPoliciesResponseBodyPolicies;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      policies: 'Policies',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPoliciesResponseBody,
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

export class ListPolicyAttachmentsResponseBody extends $tea.Model {
  totalCount?: number;
  policyAttachments?: ListPolicyAttachmentsResponseBodyPolicyAttachments;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      policyAttachments: 'PolicyAttachments',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      policyAttachments: ListPolicyAttachmentsResponseBodyPolicyAttachments,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPolicyAttachmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPolicyAttachmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
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

export class ListPolicyVersionsResponseBody extends $tea.Model {
  requestId?: string;
  policyVersions?: ListPolicyVersionsResponseBodyPolicyVersions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policyVersions: 'PolicyVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policyVersions: ListPolicyVersionsResponseBodyPolicyVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPolicyVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPolicyVersionsResponseBody,
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

export class ListResourceGroupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroups?: ListResourceGroupsResponseBodyResourceGroups;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroups: 'ResourceGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroups: ListResourceGroupsResponseBodyResourceGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceGroupsResponseBody,
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

export class ListResourcesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  resources?: ListResourcesResponseBodyResources;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resources: ListResourcesResponseBodyResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourcesResponseBody,
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

export class ListRolesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  roles?: ListRolesResponseBodyRoles;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      roles: ListRolesResponseBodyRoles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRolesResponseBody,
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  enabledServicePrincipals?: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      enabledServicePrincipals: 'EnabledServicePrincipals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      enabledServicePrincipals: ListTrustedServiceStatusResponseBodyEnabledServicePrincipals,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrustedServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTrustedServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: MoveAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  account?: PromoteResourceAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: PromoteResourceAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PromoteResourceAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PromoteResourceAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PromoteResourceAccountResponseBody,
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
  body: RemoveCloudAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  account?: ResendCreateCloudAccountEmailResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: ResendCreateCloudAccountEmailResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResendCreateCloudAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  account?: ResendPromoteResourceAccountEmailResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: ResendPromoteResourceAccountEmailResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResendPromoteResourceAccountEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetDefaultPolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDefaultPolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountRequest extends $tea.Model {
  newDisplayName?: string;
  accountId?: string;
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

export class UpdateAccountResponseBody extends $tea.Model {
  account?: UpdateAccountResponseBodyAccount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: UpdateAccountResponseBodyAccount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderRequest extends $tea.Model {
  folderId?: string;
  newFolderName?: string;
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

export class UpdateFolderResponseBody extends $tea.Model {
  requestId?: string;
  folder?: UpdateFolderResponseBodyFolder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      folder: UpdateFolderResponseBodyFolder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupRequest extends $tea.Model {
  resourceGroupId?: string;
  newDisplayName?: string;
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
  body: UpdateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  roleName?: string;
  newAssumeRolePolicyDocument?: string;
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

export class UpdateRoleResponseBody extends $tea.Model {
  role?: UpdateRoleResponseBodyRole;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: UpdateRoleResponseBodyRole,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptHandshakeResponseBodyHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  note?: string;
  targetEntity?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  targetType?: string;
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      note: 'Note',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      targetType: 'TargetType',
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      note: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      targetType: 'string',
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelHandshakeResponseBodyHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  note?: string;
  targetEntity?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  targetType?: string;
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      note: 'Note',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      targetType: 'TargetType',
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      note: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      targetType: 'string',
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloudAccountResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  recordId?: string;
  accountId?: string;
  joinMethod?: string;
  modifyTime?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      recordId: 'RecordId',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      recordId: 'string',
      accountId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderResponseBodyFolder extends $tea.Model {
  folderId?: string;
  createTime?: string;
  parentFolderId?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      createTime: 'CreateTime',
      parentFolderId: 'ParentFolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      createTime: 'string',
      parentFolderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBodyPolicy extends $tea.Model {
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  createDate?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      createDate: 'CreateDate',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      createDate: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponseBodyPolicyVersion extends $tea.Model {
  isDefaultVersion?: boolean;
  versionId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefaultVersion: 'boolean',
      versionId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceAccountResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  modifyTime?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  status?: string;
  regionId?: string;
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
  displayName?: string;
  status?: string;
  regionStatuses?: CreateResourceGroupResponseBodyResourceGroupRegionStatuses;
  accountId?: string;
  name?: string;
  createDate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      regionStatuses: 'RegionStatuses',
      accountId: 'AccountId',
      name: 'Name',
      createDate: 'CreateDate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      regionStatuses: CreateResourceGroupResponseBodyResourceGroupRegionStatuses,
      accountId: 'string',
      name: 'string',
      createDate: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  rolePrincipalName?: string;
  description?: string;
  maxSessionDuration?: number;
  roleName?: string;
  createDate?: string;
  arn?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      rolePrincipalName: 'RolePrincipalName',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
      createDate: 'CreateDate',
      arn: 'Arn',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      rolePrincipalName: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleName: 'string',
      createDate: 'string',
      arn: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  rolePrincipalName?: string;
  description?: string;
  roleName?: string;
  createDate?: string;
  arn?: string;
  roleId?: string;
  isServiceLinkedRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      rolePrincipalName: 'RolePrincipalName',
      description: 'Description',
      roleName: 'RoleName',
      createDate: 'CreateDate',
      arn: 'Arn',
      roleId: 'RoleId',
      isServiceLinkedRole: 'IsServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      rolePrincipalName: 'string',
      description: 'string',
      roleName: 'string',
      createDate: 'string',
      arn: 'string',
      roleId: 'string',
      isServiceLinkedRole: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeclineHandshakeResponseBodyHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  note?: string;
  targetEntity?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  targetType?: string;
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      note: 'Note',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      targetType: 'TargetType',
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      note: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      targetType: 'string',
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  status?: string;
  regionId?: string;
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
  displayName?: string;
  status?: string;
  regionStatuses?: DeleteResourceGroupResponseBodyResourceGroupRegionStatuses;
  accountId?: string;
  name?: string;
  createDate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      regionStatuses: 'RegionStatuses',
      accountId: 'AccountId',
      name: 'Name',
      createDate: 'CreateDate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      regionStatuses: DeleteResourceGroupResponseBodyResourceGroupRegionStatuses,
      accountId: 'string',
      name: 'string',
      createDate: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  identityInformation?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  modifyTime?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      identityInformation: 'IdentityInformation',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      identityInformation: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFolderResponseBodyFolder extends $tea.Model {
  folderId?: string;
  createTime?: string;
  folderName?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      createTime: 'CreateTime',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      createTime: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHandshakeResponseBodyHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  createTime?: string;
  targetEntity?: string;
  masterAccountId?: string;
  handshakeId?: string;
  masterAccountRealName?: string;
  resourceDirectoryId?: string;
  invitedAccountRealName?: string;
  note?: string;
  masterAccountName?: string;
  targetType?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      handshakeId: 'HandshakeId',
      masterAccountRealName: 'MasterAccountRealName',
      resourceDirectoryId: 'ResourceDirectoryId',
      invitedAccountRealName: 'InvitedAccountRealName',
      note: 'Note',
      masterAccountName: 'MasterAccountName',
      targetType: 'TargetType',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      createTime: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      handshakeId: 'string',
      masterAccountRealName: 'string',
      resourceDirectoryId: 'string',
      invitedAccountRealName: 'string',
      note: 'string',
      masterAccountName: 'string',
      targetType: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyPolicy extends $tea.Model {
  defaultVersion?: string;
  updateDate?: string;
  description?: string;
  policyDocument?: string;
  attachmentCount?: number;
  policyName?: string;
  createDate?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      updateDate: 'UpdateDate',
      description: 'Description',
      policyDocument: 'PolicyDocument',
      attachmentCount: 'AttachmentCount',
      policyName: 'PolicyName',
      createDate: 'CreateDate',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'string',
      updateDate: 'string',
      description: 'string',
      policyDocument: 'string',
      attachmentCount: 'number',
      policyName: 'string',
      createDate: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyVersionResponseBodyPolicyVersion extends $tea.Model {
  isDefaultVersion?: boolean;
  policyDocument?: string;
  versionId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      isDefaultVersion: 'IsDefaultVersion',
      policyDocument: 'PolicyDocument',
      versionId: 'VersionId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefaultVersion: 'boolean',
      policyDocument: 'string',
      versionId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceDirectoryResponseBodyResourceDirectory extends $tea.Model {
  rootFolderId?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      rootFolderId: 'RootFolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootFolderId: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBodyResourceGroupRegionStatusesRegionStatus extends $tea.Model {
  status?: string;
  regionId?: string;
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
  displayName?: string;
  status?: string;
  regionStatuses?: GetResourceGroupResponseBodyResourceGroupRegionStatuses;
  accountId?: string;
  name?: string;
  createDate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      regionStatuses: 'RegionStatuses',
      accountId: 'AccountId',
      name: 'Name',
      createDate: 'CreateDate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      regionStatuses: GetResourceGroupResponseBodyResourceGroupRegionStatuses,
      accountId: 'string',
      name: 'string',
      createDate: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBodyRoleLatestDeletionTask extends $tea.Model {
  deletionTaskId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  rolePrincipalName?: string;
  updateDate?: string;
  description?: string;
  maxSessionDuration?: number;
  latestDeletionTask?: GetRoleResponseBodyRoleLatestDeletionTask;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  isServiceLinkedRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      latestDeletionTask: 'LatestDeletionTask',
      roleName: 'RoleName',
      createDate: 'CreateDate',
      roleId: 'RoleId',
      arn: 'Arn',
      isServiceLinkedRole: 'IsServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      latestDeletionTask: GetRoleResponseBodyRoleLatestDeletionTask,
      roleName: 'string',
      createDate: 'string',
      roleId: 'string',
      arn: 'string',
      isServiceLinkedRole: 'boolean',
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

export class InitResourceDirectoryResponseBodyResourceDirectory extends $tea.Model {
  rootFolderId?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      rootFolderId: 'RootFolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootFolderId: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InviteAccountToResourceDirectoryResponseBodyHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  note?: string;
  targetEntity?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  targetType?: string;
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      note: 'Note',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      targetType: 'TargetType',
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      note: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      targetType: 'string',
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsResponseBodyAccountsAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
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
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
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
  folderId?: string;
  createTime?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      createTime: 'CreateTime',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      createTime: 'string',
      folderName: 'string',
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
  folderId?: string;
  createTime?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      createTime: 'CreateTime',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      createTime: 'string',
      folderName: 'string',
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

export class ListHandshakesForAccountResponseBodyHandshakesHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  note?: string;
  targetEntity?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  targetType?: string;
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      note: 'Note',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      targetType: 'TargetType',
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      note: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      targetType: 'string',
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForAccountResponseBodyHandshakes extends $tea.Model {
  handshake?: ListHandshakesForAccountResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForAccountResponseBodyHandshakesHandshake },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake extends $tea.Model {
  status?: string;
  expireTime?: string;
  resourceDirectoryId?: string;
  createTime?: string;
  note?: string;
  targetEntity?: string;
  masterAccountId?: string;
  masterAccountName?: string;
  modifyTime?: string;
  targetType?: string;
  handshakeId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      expireTime: 'ExpireTime',
      resourceDirectoryId: 'ResourceDirectoryId',
      createTime: 'CreateTime',
      note: 'Note',
      targetEntity: 'TargetEntity',
      masterAccountId: 'MasterAccountId',
      masterAccountName: 'MasterAccountName',
      modifyTime: 'ModifyTime',
      targetType: 'TargetType',
      handshakeId: 'HandshakeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      expireTime: 'string',
      resourceDirectoryId: 'string',
      createTime: 'string',
      note: 'string',
      targetEntity: 'string',
      masterAccountId: 'string',
      masterAccountName: 'string',
      modifyTime: 'string',
      targetType: 'string',
      handshakeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHandshakesForResourceDirectoryResponseBodyHandshakes extends $tea.Model {
  handshake?: ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake[];
  static names(): { [key: string]: string } {
    return {
      handshake: 'Handshake',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handshake: { 'type': 'array', 'itemType': ListHandshakesForResourceDirectoryResponseBodyHandshakesHandshake },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPoliciesPolicy extends $tea.Model {
  defaultVersion?: string;
  description?: string;
  updateDate?: string;
  attachmentCount?: number;
  policyName?: string;
  createDate?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      updateDate: 'UpdateDate',
      attachmentCount: 'AttachmentCount',
      policyName: 'PolicyName',
      createDate: 'CreateDate',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'string',
      description: 'string',
      updateDate: 'string',
      attachmentCount: 'number',
      policyName: 'string',
      createDate: 'string',
      policyType: 'string',
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
  description?: string;
  resourceGroupId?: string;
  policyName?: string;
  principalName?: string;
  attachDate?: string;
  policyType?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      policyName: 'PolicyName',
      principalName: 'PrincipalName',
      attachDate: 'AttachDate',
      policyType: 'PolicyType',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      policyName: 'string',
      principalName: 'string',
      attachDate: 'string',
      policyType: 'string',
      principalType: 'string',
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
  isDefaultVersion?: boolean;
  versionId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      isDefaultVersion: 'IsDefaultVersion',
      versionId: 'VersionId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefaultVersion: 'boolean',
      versionId: 'string',
      createDate: 'string',
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
  displayName?: string;
  status?: string;
  accountId?: string;
  name?: string;
  createDate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      accountId: 'AccountId',
      name: 'Name',
      createDate: 'CreateDate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
      accountId: 'string',
      name: 'string',
      createDate: 'string',
      id: 'string',
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

export class ListResourcesResponseBodyResourcesResource extends $tea.Model {
  service?: string;
  resourceType?: string;
  resourceGroupId?: string;
  resourceId?: string;
  createDate?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      resourceType: 'ResourceType',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      createDate: 'CreateDate',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      resourceType: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      createDate: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResources extends $tea.Model {
  resource?: ListResourcesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRoleLatestDeletionTask extends $tea.Model {
  deletionTaskId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyRolesRole extends $tea.Model {
  rolePrincipalName?: string;
  updateDate?: string;
  description?: string;
  maxSessionDuration?: number;
  latestDeletionTask?: ListRolesResponseBodyRolesRoleLatestDeletionTask;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  isServiceLinkedRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      latestDeletionTask: 'LatestDeletionTask',
      roleName: 'RoleName',
      createDate: 'CreateDate',
      roleId: 'RoleId',
      arn: 'Arn',
      isServiceLinkedRole: 'IsServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePrincipalName: 'string',
      updateDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      latestDeletionTask: ListRolesResponseBodyRolesRoleLatestDeletionTask,
      roleName: 'string',
      createDate: 'string',
      roleId: 'string',
      arn: 'string',
      isServiceLinkedRole: 'boolean',
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

export class ListTrustedServiceStatusResponseBodyEnabledServicePrincipalsEnabledServicePrincipal extends $tea.Model {
  servicePrincipal?: string;
  enableTime?: string;
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

export class PromoteResourceAccountResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  recordId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  accountName?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      recordId: 'RecordId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      accountName: 'AccountName',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      recordId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      accountName: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendCreateCloudAccountEmailResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  recordId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  accountName?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      recordId: 'RecordId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      accountName: 'AccountName',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      recordId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      accountName: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResendPromoteResourceAccountEmailResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  recordId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  accountName?: string;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      recordId: 'RecordId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      accountName: 'AccountName',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      recordId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      accountName: 'string',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountResponseBodyAccount extends $tea.Model {
  status?: string;
  type?: string;
  displayName?: string;
  folderId?: string;
  resourceDirectoryId?: string;
  joinTime?: string;
  accountId?: string;
  joinMethod?: string;
  modifyTime?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      resourceDirectoryId: 'ResourceDirectoryId',
      joinTime: 'JoinTime',
      accountId: 'AccountId',
      joinMethod: 'JoinMethod',
      modifyTime: 'ModifyTime',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      displayName: 'string',
      folderId: 'string',
      resourceDirectoryId: 'string',
      joinTime: 'string',
      accountId: 'string',
      joinMethod: 'string',
      modifyTime: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBodyFolder extends $tea.Model {
  folderId?: string;
  createTime?: string;
  parentFolderId?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      createTime: 'CreateTime',
      parentFolderId: 'ParentFolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      createTime: 'string',
      parentFolderId: 'string',
      folderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBodyResourceGroup extends $tea.Model {
  displayName?: string;
  accountId?: string;
  name?: string;
  createDate?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      accountId: 'AccountId',
      name: 'Name',
      createDate: 'CreateDate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      accountId: 'string',
      name: 'string',
      createDate: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  rolePrincipalName?: string;
  description?: string;
  updateDate?: string;
  maxSessionDuration?: number;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      rolePrincipalName: 'RolePrincipalName',
      description: 'Description',
      updateDate: 'UpdateDate',
      maxSessionDuration: 'MaxSessionDuration',
      roleName: 'RoleName',
      createDate: 'CreateDate',
      roleId: 'RoleId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRolePolicyDocument: 'string',
      rolePrincipalName: 'string',
      description: 'string',
      updateDate: 'string',
      maxSessionDuration: 'number',
      roleName: 'string',
      createDate: 'string',
      roleId: 'string',
      arn: 'string',
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

  async acceptHandshakeWithOptions(request: AcceptHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<AcceptHandshakeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AcceptHandshakeResponse>(await this.doRPCRequest("AcceptHandshake", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new AcceptHandshakeResponse({}));
  }

  async acceptHandshake(request: AcceptHandshakeRequest): Promise<AcceptHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.acceptHandshakeWithOptions(request, runtime);
  }

  async attachPolicyWithOptions(request: AttachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachPolicyResponse>(await this.doRPCRequest("AttachPolicy", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new AttachPolicyResponse({}));
  }

  async attachPolicy(request: AttachPolicyRequest): Promise<AttachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyWithOptions(request, runtime);
  }

  async cancelCreateCloudAccountWithOptions(request: CancelCreateCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<CancelCreateCloudAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelCreateCloudAccountResponse>(await this.doRPCRequest("CancelCreateCloudAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CancelCreateCloudAccountResponse({}));
  }

  async cancelCreateCloudAccount(request: CancelCreateCloudAccountRequest): Promise<CancelCreateCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCreateCloudAccountWithOptions(request, runtime);
  }

  async cancelHandshakeWithOptions(request: CancelHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<CancelHandshakeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelHandshakeResponse>(await this.doRPCRequest("CancelHandshake", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CancelHandshakeResponse({}));
  }

  async cancelHandshake(request: CancelHandshakeRequest): Promise<CancelHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelHandshakeWithOptions(request, runtime);
  }

  async cancelPromoteResourceAccountWithOptions(request: CancelPromoteResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CancelPromoteResourceAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelPromoteResourceAccountResponse>(await this.doRPCRequest("CancelPromoteResourceAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CancelPromoteResourceAccountResponse({}));
  }

  async cancelPromoteResourceAccount(request: CancelPromoteResourceAccountRequest): Promise<CancelPromoteResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPromoteResourceAccountWithOptions(request, runtime);
  }

  async createCloudAccountWithOptions(request: CreateCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateCloudAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCloudAccountResponse>(await this.doRPCRequest("CreateCloudAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCloudAccountResponse({}));
  }

  async createCloudAccount(request: CreateCloudAccountRequest): Promise<CreateCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCloudAccountWithOptions(request, runtime);
  }

  async createFolderWithOptions(request: CreateFolderRequest, runtime: $Util.RuntimeOptions): Promise<CreateFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFolderResponse>(await this.doRPCRequest("CreateFolder", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFolderResponse({}));
  }

  async createFolder(request: CreateFolderRequest): Promise<CreateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePolicyResponse>(await this.doRPCRequest("CreatePolicy", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolicyResponse({}));
  }

  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  async createPolicyVersionWithOptions(request: CreatePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePolicyVersionResponse>(await this.doRPCRequest("CreatePolicyVersion", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolicyVersionResponse({}));
  }

  async createPolicyVersion(request: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  async createResourceAccountWithOptions(request: CreateResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourceAccountResponse>(await this.doRPCRequest("CreateResourceAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourceAccountResponse({}));
  }

  async createResourceAccount(request: CreateResourceAccountRequest): Promise<CreateResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceAccountWithOptions(request, runtime);
  }

  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourceGroupResponse>(await this.doRPCRequest("CreateResourceGroup", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourceGroupResponse({}));
  }

  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  async createRoleWithOptions(request: CreateRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoleResponse>(await this.doRPCRequest("CreateRole", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoleResponse({}));
  }

  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRPCRequest("CreateServiceLinkedRole", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async declineHandshakeWithOptions(request: DeclineHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<DeclineHandshakeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeclineHandshakeResponse>(await this.doRPCRequest("DeclineHandshake", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeclineHandshakeResponse({}));
  }

  async declineHandshake(request: DeclineHandshakeRequest): Promise<DeclineHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.declineHandshakeWithOptions(request, runtime);
  }

  async deleteFolderWithOptions(request: DeleteFolderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFolderResponse>(await this.doRPCRequest("DeleteFolder", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFolderResponse({}));
  }

  async deleteFolder(request: DeleteFolderRequest): Promise<DeleteFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePolicyResponse>(await this.doRPCRequest("DeletePolicy", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePolicyResponse({}));
  }

  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  async deletePolicyVersionWithOptions(request: DeletePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePolicyVersionResponse>(await this.doRPCRequest("DeletePolicyVersion", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePolicyVersionResponse({}));
  }

  async deletePolicyVersion(request: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  async deleteResourceGroupWithOptions(request: DeleteResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteResourceGroupResponse>(await this.doRPCRequest("DeleteResourceGroup", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteResourceGroupResponse({}));
  }

  async deleteResourceGroup(request: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  async deleteRoleWithOptions(request: DeleteRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRoleResponse>(await this.doRPCRequest("DeleteRole", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRoleResponse({}));
  }

  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  async deleteServiceLinkedRoleWithOptions(request: DeleteServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteServiceLinkedRoleResponse>(await this.doRPCRequest("DeleteServiceLinkedRole", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteServiceLinkedRoleResponse({}));
  }

  async deleteServiceLinkedRole(request: DeleteServiceLinkedRoleRequest): Promise<DeleteServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServiceLinkedRoleWithOptions(request, runtime);
  }

  async destroyResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<DestroyResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DestroyResourceDirectoryResponse>(await this.doRPCRequest("DestroyResourceDirectory", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DestroyResourceDirectoryResponse({}));
  }

  async destroyResourceDirectory(): Promise<DestroyResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.destroyResourceDirectoryWithOptions(runtime);
  }

  async detachPolicyWithOptions(request: DetachPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachPolicyResponse>(await this.doRPCRequest("DetachPolicy", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new DetachPolicyResponse({}));
  }

  async detachPolicy(request: DetachPolicyRequest): Promise<DetachPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyWithOptions(request, runtime);
  }

  async getAccountWithOptions(request: GetAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccountResponse>(await this.doRPCRequest("GetAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountResponse({}));
  }

  async getAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  async getFolderWithOptions(request: GetFolderRequest, runtime: $Util.RuntimeOptions): Promise<GetFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFolderResponse>(await this.doRPCRequest("GetFolder", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetFolderResponse({}));
  }

  async getFolder(request: GetFolderRequest): Promise<GetFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  async getHandshakeWithOptions(request: GetHandshakeRequest, runtime: $Util.RuntimeOptions): Promise<GetHandshakeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHandshakeResponse>(await this.doRPCRequest("GetHandshake", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetHandshakeResponse({}));
  }

  async getHandshake(request: GetHandshakeRequest): Promise<GetHandshakeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHandshakeWithOptions(request, runtime);
  }

  async getPayerForAccountWithOptions(request: GetPayerForAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetPayerForAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPayerForAccountResponse>(await this.doRPCRequest("GetPayerForAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetPayerForAccountResponse({}));
  }

  async getPayerForAccount(request: GetPayerForAccountRequest): Promise<GetPayerForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPayerForAccountWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPolicyResponse>(await this.doRPCRequest("GetPolicy", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async getPolicyVersionWithOptions(request: GetPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPolicyVersionResponse>(await this.doRPCRequest("GetPolicyVersion", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolicyVersionResponse({}));
  }

  async getPolicyVersion(request: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  async getResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetResourceDirectoryResponse>(await this.doRPCRequest("GetResourceDirectory", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourceDirectoryResponse({}));
  }

  async getResourceDirectory(): Promise<GetResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceDirectoryWithOptions(runtime);
  }

  async getResourceGroupWithOptions(request: GetResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResourceGroupResponse>(await this.doRPCRequest("GetResourceGroup", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourceGroupResponse({}));
  }

  async getResourceGroup(request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  async getRoleWithOptions(request: GetRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRoleResponse>(await this.doRPCRequest("GetRole", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetRoleResponse({}));
  }

  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  async getServiceLinkedRoleDeletionStatusWithOptions(request: GetServiceLinkedRoleDeletionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceLinkedRoleDeletionStatusResponse>(await this.doRPCRequest("GetServiceLinkedRoleDeletionStatus", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceLinkedRoleDeletionStatusResponse({}));
  }

  async getServiceLinkedRoleDeletionStatus(request: GetServiceLinkedRoleDeletionStatusRequest): Promise<GetServiceLinkedRoleDeletionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleDeletionStatusWithOptions(request, runtime);
  }

  async initResourceDirectoryWithOptions(runtime: $Util.RuntimeOptions): Promise<InitResourceDirectoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<InitResourceDirectoryResponse>(await this.doRPCRequest("InitResourceDirectory", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new InitResourceDirectoryResponse({}));
  }

  async initResourceDirectory(): Promise<InitResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initResourceDirectoryWithOptions(runtime);
  }

  async inviteAccountToResourceDirectoryWithOptions(request: InviteAccountToResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<InviteAccountToResourceDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InviteAccountToResourceDirectoryResponse>(await this.doRPCRequest("InviteAccountToResourceDirectory", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new InviteAccountToResourceDirectoryResponse({}));
  }

  async inviteAccountToResourceDirectory(request: InviteAccountToResourceDirectoryRequest): Promise<InviteAccountToResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inviteAccountToResourceDirectoryWithOptions(request, runtime);
  }

  async listAccountsWithOptions(request: ListAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccountsResponse>(await this.doRPCRequest("ListAccounts", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccountsResponse({}));
  }

  async listAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  async listAccountsForParentWithOptions(request: ListAccountsForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountsForParentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccountsForParentResponse>(await this.doRPCRequest("ListAccountsForParent", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccountsForParentResponse({}));
  }

  async listAccountsForParent(request: ListAccountsForParentRequest): Promise<ListAccountsForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountsForParentWithOptions(request, runtime);
  }

  async listAncestorsWithOptions(request: ListAncestorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAncestorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAncestorsResponse>(await this.doRPCRequest("ListAncestors", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListAncestorsResponse({}));
  }

  async listAncestors(request: ListAncestorsRequest): Promise<ListAncestorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAncestorsWithOptions(request, runtime);
  }

  async listFoldersForParentWithOptions(request: ListFoldersForParentRequest, runtime: $Util.RuntimeOptions): Promise<ListFoldersForParentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFoldersForParentResponse>(await this.doRPCRequest("ListFoldersForParent", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListFoldersForParentResponse({}));
  }

  async listFoldersForParent(request: ListFoldersForParentRequest): Promise<ListFoldersForParentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFoldersForParentWithOptions(request, runtime);
  }

  async listHandshakesForAccountWithOptions(request: ListHandshakesForAccountRequest, runtime: $Util.RuntimeOptions): Promise<ListHandshakesForAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHandshakesForAccountResponse>(await this.doRPCRequest("ListHandshakesForAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListHandshakesForAccountResponse({}));
  }

  async listHandshakesForAccount(request: ListHandshakesForAccountRequest): Promise<ListHandshakesForAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHandshakesForAccountWithOptions(request, runtime);
  }

  async listHandshakesForResourceDirectoryWithOptions(request: ListHandshakesForResourceDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ListHandshakesForResourceDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListHandshakesForResourceDirectoryResponse>(await this.doRPCRequest("ListHandshakesForResourceDirectory", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListHandshakesForResourceDirectoryResponse({}));
  }

  async listHandshakesForResourceDirectory(request: ListHandshakesForResourceDirectoryRequest): Promise<ListHandshakesForResourceDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHandshakesForResourceDirectoryWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPoliciesResponse>(await this.doRPCRequest("ListPolicies", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListPoliciesResponse({}));
  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  async listPolicyAttachmentsWithOptions(request: ListPolicyAttachmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyAttachmentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPolicyAttachmentsResponse>(await this.doRPCRequest("ListPolicyAttachments", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListPolicyAttachmentsResponse({}));
  }

  async listPolicyAttachments(request: ListPolicyAttachmentsRequest): Promise<ListPolicyAttachmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyAttachmentsWithOptions(request, runtime);
  }

  async listPolicyVersionsWithOptions(request: ListPolicyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPolicyVersionsResponse>(await this.doRPCRequest("ListPolicyVersions", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListPolicyVersionsResponse({}));
  }

  async listPolicyVersions(request: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListResourceGroupsResponse>(await this.doRPCRequest("ListResourceGroups", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourceGroupsResponse({}));
  }

  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListResourcesResponse>(await this.doRPCRequest("ListResources", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourcesResponse({}));
  }

  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listTrustedServiceStatusWithOptions(request: ListTrustedServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListTrustedServiceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTrustedServiceStatusResponse>(await this.doRPCRequest("ListTrustedServiceStatus", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ListTrustedServiceStatusResponse({}));
  }

  async listTrustedServiceStatus(request: ListTrustedServiceStatusRequest): Promise<ListTrustedServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTrustedServiceStatusWithOptions(request, runtime);
  }

  async moveAccountWithOptions(request: MoveAccountRequest, runtime: $Util.RuntimeOptions): Promise<MoveAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveAccountResponse>(await this.doRPCRequest("MoveAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new MoveAccountResponse({}));
  }

  async moveAccount(request: MoveAccountRequest): Promise<MoveAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveAccountWithOptions(request, runtime);
  }

  async promoteResourceAccountWithOptions(request: PromoteResourceAccountRequest, runtime: $Util.RuntimeOptions): Promise<PromoteResourceAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PromoteResourceAccountResponse>(await this.doRPCRequest("PromoteResourceAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new PromoteResourceAccountResponse({}));
  }

  async promoteResourceAccount(request: PromoteResourceAccountRequest): Promise<PromoteResourceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.promoteResourceAccountWithOptions(request, runtime);
  }

  async removeCloudAccountWithOptions(request: RemoveCloudAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveCloudAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveCloudAccountResponse>(await this.doRPCRequest("RemoveCloudAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveCloudAccountResponse({}));
  }

  async removeCloudAccount(request: RemoveCloudAccountRequest): Promise<RemoveCloudAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeCloudAccountWithOptions(request, runtime);
  }

  async resendCreateCloudAccountEmailWithOptions(request: ResendCreateCloudAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendCreateCloudAccountEmailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResendCreateCloudAccountEmailResponse>(await this.doRPCRequest("ResendCreateCloudAccountEmail", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ResendCreateCloudAccountEmailResponse({}));
  }

  async resendCreateCloudAccountEmail(request: ResendCreateCloudAccountEmailRequest): Promise<ResendCreateCloudAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendCreateCloudAccountEmailWithOptions(request, runtime);
  }

  async resendPromoteResourceAccountEmailWithOptions(request: ResendPromoteResourceAccountEmailRequest, runtime: $Util.RuntimeOptions): Promise<ResendPromoteResourceAccountEmailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResendPromoteResourceAccountEmailResponse>(await this.doRPCRequest("ResendPromoteResourceAccountEmail", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new ResendPromoteResourceAccountEmailResponse({}));
  }

  async resendPromoteResourceAccountEmail(request: ResendPromoteResourceAccountEmailRequest): Promise<ResendPromoteResourceAccountEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resendPromoteResourceAccountEmailWithOptions(request, runtime);
  }

  async setDefaultPolicyVersionWithOptions(request: SetDefaultPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultPolicyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultPolicyVersionResponse>(await this.doRPCRequest("SetDefaultPolicyVersion", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultPolicyVersionResponse({}));
  }

  async setDefaultPolicyVersion(request: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  async updateAccountWithOptions(request: UpdateAccountRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAccountResponse>(await this.doRPCRequest("UpdateAccount", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAccountResponse({}));
  }

  async updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountWithOptions(request, runtime);
  }

  async updateFolderWithOptions(request: UpdateFolderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFolderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFolderResponse>(await this.doRPCRequest("UpdateFolder", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFolderResponse({}));
  }

  async updateFolder(request: UpdateFolderRequest): Promise<UpdateFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  async updateResourceGroupWithOptions(request: UpdateResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateResourceGroupResponse>(await this.doRPCRequest("UpdateResourceGroup", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateResourceGroupResponse({}));
  }

  async updateResourceGroup(request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRoleResponse>(await this.doRPCRequest("UpdateRole", "2020-03-31", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRoleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

}
