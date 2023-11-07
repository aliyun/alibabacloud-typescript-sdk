// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddExternalSAMLIdPCertificateRequest extends $tea.Model {
  directoryId?: string;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExternalSAMLIdPCertificateResponseBody extends $tea.Model {
  certificateId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExternalSAMLIdPCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddExternalSAMLIdPCertificateResponseBody;
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
      body: AddExternalSAMLIdPCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPermissionPolicyToAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  inlinePolicyDocument?: string;
  permissionPolicyName?: string;
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      inlinePolicyDocument: 'InlinePolicyDocument',
      permissionPolicyName: 'PermissionPolicyName',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      inlinePolicyDocument: 'string',
      permissionPolicyName: 'string',
      permissionPolicyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPermissionPolicyToAccessConfigurationResponseBody extends $tea.Model {
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

export class AddPermissionPolicyToAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddPermissionPolicyToAccessConfigurationResponseBody;
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
      body: AddPermissionPolicyToAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToGroupRequest extends $tea.Model {
  directoryId?: string;
  groupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToGroupResponseBody extends $tea.Model {
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

export class AddUserToGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserToGroupResponseBody;
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
      body: AddUserToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearExternalSAMLIdentityProviderRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearExternalSAMLIdentityProviderResponseBody extends $tea.Model {
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

export class ClearExternalSAMLIdentityProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClearExternalSAMLIdentityProviderResponseBody;
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
      body: ClearExternalSAMLIdentityProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessAssignmentRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  principalId?: string;
  principalType?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessAssignmentResponseBody extends $tea.Model {
  requestId?: string;
  task?: CreateAccessAssignmentResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: CreateAccessAssignmentResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessAssignmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccessAssignmentResponseBody;
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
      body: CreateAccessAssignmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessConfigurationRequest extends $tea.Model {
  accessConfigurationName?: string;
  description?: string;
  directoryId?: string;
  relayState?: string;
  sessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationName: 'AccessConfigurationName',
      description: 'Description',
      directoryId: 'DirectoryId',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationName: 'string',
      description: 'string',
      directoryId: 'string',
      relayState: 'string',
      sessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessConfigurationResponseBody extends $tea.Model {
  accessConfiguration?: CreateAccessConfigurationResponseBodyAccessConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfiguration: 'AccessConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfiguration: CreateAccessConfigurationResponseBodyAccessConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccessConfigurationResponseBody;
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
      body: CreateAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryRequest extends $tea.Model {
  directoryName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryName: 'DirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponseBody extends $tea.Model {
  directory?: CreateDirectoryResponseBodyDirectory;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: CreateDirectoryResponseBodyDirectory,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDirectoryResponseBody;
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
      body: CreateDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  description?: string;
  directoryId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directoryId: 'DirectoryId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  group?: CreateGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: CreateGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGroupResponseBody;
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
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSCIMServerCredentialRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSCIMServerCredentialResponseBody extends $tea.Model {
  requestId?: string;
  SCIMServerCredential?: CreateSCIMServerCredentialResponseBodySCIMServerCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredential: 'SCIMServerCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredential: CreateSCIMServerCredentialResponseBodySCIMServerCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSCIMServerCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSCIMServerCredentialResponseBody;
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
      body: CreateSCIMServerCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  description?: string;
  directoryId?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  status?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directoryId: 'DirectoryId',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  requestId?: string;
  user?: CreateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: CreateUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserResponseBody;
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
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserProvisioningRequest extends $tea.Model {
  deletionStrategy?: string;
  description?: string;
  directoryId?: string;
  duplicationStrategy?: string;
  principalId?: string;
  principalType?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserProvisioningResponseBody extends $tea.Model {
  requestId?: string;
  userProvisioning?: CreateUserProvisioningResponseBodyUserProvisioning;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioning: 'UserProvisioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioning: CreateUserProvisioningResponseBodyUserProvisioning,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserProvisioningResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUserProvisioningResponseBody;
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
      body: CreateUserProvisioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessAssignmentRequest extends $tea.Model {
  accessConfigurationId?: string;
  deprovisionStrategy?: string;
  directoryId?: string;
  principalId?: string;
  principalType?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      deprovisionStrategy: 'DeprovisionStrategy',
      directoryId: 'DirectoryId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      deprovisionStrategy: 'string',
      directoryId: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessAssignmentResponseBody extends $tea.Model {
  requestId?: string;
  task?: DeleteAccessAssignmentResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: DeleteAccessAssignmentResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessAssignmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccessAssignmentResponseBody;
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
      body: DeleteAccessAssignmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  forceRemovePermissionPolicies?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      forceRemovePermissionPolicies: 'ForceRemovePermissionPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      forceRemovePermissionPolicies: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessConfigurationResponseBody extends $tea.Model {
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

export class DeleteAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAccessConfigurationResponseBody;
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
      body: DeleteAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoryResponseBody extends $tea.Model {
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

export class DeleteDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDirectoryResponseBody;
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
      body: DeleteDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  directoryId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $tea.Model {
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

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGroupResponseBody;
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
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMFADeviceForUserRequest extends $tea.Model {
  directoryId?: string;
  MFADeviceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      MFADeviceId: 'MFADeviceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      MFADeviceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMFADeviceForUserResponseBody extends $tea.Model {
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

export class DeleteMFADeviceForUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMFADeviceForUserResponseBody;
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
      body: DeleteMFADeviceForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSCIMServerCredentialRequest extends $tea.Model {
  credentialId?: string;
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSCIMServerCredentialResponseBody extends $tea.Model {
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

export class DeleteSCIMServerCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSCIMServerCredentialResponseBody;
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
      body: DeleteSCIMServerCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  directoryId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
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

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserResponseBody;
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
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserProvisioningRequest extends $tea.Model {
  deletionStrategy?: string;
  directoryId?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionStrategy: 'DeletionStrategy',
      directoryId: 'DirectoryId',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionStrategy: 'string',
      directoryId: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserProvisioningResponseBody extends $tea.Model {
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

export class DeleteUserProvisioningResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserProvisioningResponseBody;
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
      body: DeleteUserProvisioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprovisionAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprovisionAccessConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  tasks?: DeprovisionAccessConfigurationResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DeprovisionAccessConfigurationResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprovisionAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeprovisionAccessConfigurationResponseBody;
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
      body: DeprovisionAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableServiceResponseBody extends $tea.Model {
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

export class DisableServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableServiceResponseBody;
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
      body: DisableServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceResponseBody extends $tea.Model {
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

export class EnableServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableServiceResponseBody;
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
      body: EnableServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessConfigurationResponseBody extends $tea.Model {
  accessConfiguration?: GetAccessConfigurationResponseBodyAccessConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfiguration: 'AccessConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfiguration: GetAccessConfigurationResponseBodyAccessConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccessConfigurationResponseBody;
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
      body: GetAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryResponseBody extends $tea.Model {
  directory?: GetDirectoryResponseBodyDirectory;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: GetDirectoryResponseBodyDirectory,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDirectoryResponseBody;
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
      body: GetDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySAMLServiceProviderInfoRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySAMLServiceProviderInfoResponseBody extends $tea.Model {
  requestId?: string;
  SAMLServiceProvider?: GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLServiceProvider: 'SAMLServiceProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLServiceProvider: GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySAMLServiceProviderInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDirectorySAMLServiceProviderInfoResponseBody;
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
      body: GetDirectorySAMLServiceProviderInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryStatisticsRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryStatisticsResponseBody extends $tea.Model {
  directoryStatistics?: GetDirectoryStatisticsResponseBodyDirectoryStatistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryStatistics: 'DirectoryStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryStatistics: GetDirectoryStatisticsResponseBodyDirectoryStatistics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDirectoryStatisticsResponseBody;
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
      body: GetDirectoryStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalSAMLIdentityProviderRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalSAMLIdentityProviderResponseBody extends $tea.Model {
  requestId?: string;
  SAMLIdentityProviderConfiguration?: GetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdentityProviderConfiguration: 'SAMLIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdentityProviderConfiguration: GetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalSAMLIdentityProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetExternalSAMLIdentityProviderResponseBody;
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
      body: GetExternalSAMLIdentityProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $tea.Model {
  directoryId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $tea.Model {
  group?: GetGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGroupResponseBody;
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
      body: GetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoResponseBody extends $tea.Model {
  MFAAuthenticationSettingInfo?: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationSettingInfo: 'MFAAuthenticationSettingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationSettingInfo: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMFAAuthenticationSettingInfoResponseBody;
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
      body: GetMFAAuthenticationSettingInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingsRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingsResponseBody extends $tea.Model {
  MFAAuthenticationAdvanceSettings?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationAdvanceSettings: 'MFAAuthenticationAdvanceSettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationAdvanceSettings: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMFAAuthenticationSettingsResponseBody;
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
      body: GetMFAAuthenticationSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationStatusRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationStatusResponseBody extends $tea.Model {
  MFAAuthenticationStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationStatus: 'MFAAuthenticationStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMFAAuthenticationStatusResponseBody;
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
      body: GetMFAAuthenticationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSCIMSynchronizationStatusRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSCIMSynchronizationStatusResponseBody extends $tea.Model {
  requestId?: string;
  SCIMSynchronizationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMSynchronizationStatus: 'SCIMSynchronizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMSynchronizationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSCIMSynchronizationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSCIMSynchronizationStatusResponseBody;
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
      body: GetSCIMSynchronizationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  serviceStatus?: GetServiceStatusResponseBodyServiceStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceStatus: GetServiceStatusResponseBodyServiceStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceStatusResponseBody;
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
      body: GetServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRequest extends $tea.Model {
  directoryId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  requestId?: string;
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskResponseBody;
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
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusRequest extends $tea.Model {
  directoryId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  taskStatus?: GetTaskStatusResponseBodyTaskStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStatus: GetTaskStatusResponseBodyTaskStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskStatusResponseBody;
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
      body: GetTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  directoryId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  requestId?: string;
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAAuthenticationSettingsRequest extends $tea.Model {
  directoryId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAAuthenticationSettingsResponseBody extends $tea.Model {
  requestId?: string;
  userMFAAuthenticationSettings?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userMFAAuthenticationSettings: 'UserMFAAuthenticationSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userMFAAuthenticationSettings: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAAuthenticationSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserMFAAuthenticationSettingsResponseBody;
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
      body: GetUserMFAAuthenticationSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningRequest extends $tea.Model {
  directoryId?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningResponseBody extends $tea.Model {
  requestId?: string;
  userProvisioning?: GetUserProvisioningResponseBodyUserProvisioning;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioning: 'UserProvisioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioning: GetUserProvisioningResponseBodyUserProvisioning,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserProvisioningResponseBody;
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
      body: GetUserProvisioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  maxResults?: number;
  nextToken?: string;
  principalId?: string;
  principalType?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsResponseBody extends $tea.Model {
  accessAssignments?: ListAccessAssignmentsResponseBodyAccessAssignments[];
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessAssignments: 'AccessAssignments',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAssignments: { 'type': 'array', 'itemType': ListAccessAssignmentsResponseBodyAccessAssignments },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessAssignmentsResponseBody;
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
      body: ListAccessAssignmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationProvisioningsRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  maxResults?: number;
  nextToken?: string;
  provisioningStatus?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      provisioningStatus: 'ProvisioningStatus',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      provisioningStatus: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationProvisioningsResponseBody extends $tea.Model {
  accessConfigurationProvisionings?: ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings[];
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationProvisionings: 'AccessConfigurationProvisionings',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationProvisionings: { 'type': 'array', 'itemType': ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationProvisioningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessConfigurationProvisioningsResponseBody;
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
      body: ListAccessConfigurationProvisioningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationsRequest extends $tea.Model {
  directoryId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  statusNotifications?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      statusNotifications: 'StatusNotifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      statusNotifications: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationsResponseBody extends $tea.Model {
  accessConfigurations?: ListAccessConfigurationsResponseBodyAccessConfigurations[];
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurations: 'AccessConfigurations',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurations: { 'type': 'array', 'itemType': ListAccessConfigurationsResponseBodyAccessConfigurations },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAccessConfigurationsResponseBody;
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
      body: ListAccessConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesResponseBody extends $tea.Model {
  directories?: ListDirectoriesResponseBodyDirectories[];
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': ListDirectoriesResponseBodyDirectories },
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDirectoriesResponseBody;
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
      body: ListDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalSAMLIdPCertificatesRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalSAMLIdPCertificatesResponseBody extends $tea.Model {
  requestId?: string;
  SAMLIdPCertificates?: ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates[];
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdPCertificates: 'SAMLIdPCertificates',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdPCertificates: { 'type': 'array', 'itemType': ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates },
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalSAMLIdPCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListExternalSAMLIdPCertificatesResponseBody;
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
      body: ListExternalSAMLIdPCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMembersRequest extends $tea.Model {
  directoryId?: string;
  groupId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMembersResponseBody extends $tea.Model {
  groupMembers?: ListGroupMembersResponseBodyGroupMembers[];
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      groupMembers: 'GroupMembers',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMembers: { 'type': 'array', 'itemType': ListGroupMembersResponseBodyGroupMembers },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupMembersResponseBody;
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
      body: ListGroupMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  directoryId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  provisionType?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      provisionType: 'ProvisionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      provisionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  groups?: ListGroupsResponseBodyGroups[];
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroups },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupsResponseBody;
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
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJoinedGroupsForUserRequest extends $tea.Model {
  directoryId?: string;
  maxResults?: number;
  nextToken?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJoinedGroupsForUserResponseBody extends $tea.Model {
  isTruncated?: boolean;
  joinedGroups?: ListJoinedGroupsForUserResponseBodyJoinedGroups[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      joinedGroups: 'JoinedGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      joinedGroups: { 'type': 'array', 'itemType': ListJoinedGroupsForUserResponseBodyJoinedGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJoinedGroupsForUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJoinedGroupsForUserResponseBody;
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
      body: ListJoinedGroupsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMFADevicesForUserRequest extends $tea.Model {
  directoryId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMFADevicesForUserResponseBody extends $tea.Model {
  MFADevices?: ListMFADevicesForUserResponseBodyMFADevices[];
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      MFADevices: 'MFADevices',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevices: { 'type': 'array', 'itemType': ListMFADevicesForUserResponseBodyMFADevices },
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMFADevicesForUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMFADevicesForUserResponseBody;
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
      body: ListMFADevicesForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionPoliciesInAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      permissionPolicyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionPoliciesInAccessConfigurationResponseBody extends $tea.Model {
  permissionPolicies?: ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies[];
  requestId?: string;
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      permissionPolicies: 'PermissionPolicies',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionPolicies: { 'type': 'array', 'itemType': ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies },
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionPoliciesInAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPermissionPoliciesInAccessConfigurationResponseBody;
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
      body: ListPermissionPoliciesInAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSCIMServerCredentialsRequest extends $tea.Model {
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSCIMServerCredentialsResponseBody extends $tea.Model {
  requestId?: string;
  SCIMServerCredentials?: ListSCIMServerCredentialsResponseBodySCIMServerCredentials[];
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredentials: 'SCIMServerCredentials',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredentials: { 'type': 'array', 'itemType': ListSCIMServerCredentialsResponseBodySCIMServerCredentials },
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSCIMServerCredentialsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSCIMServerCredentialsResponseBody;
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
      body: ListSCIMServerCredentialsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  principalId?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetType?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetType: 'TargetType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      principalId: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetType: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTasksResponseBody;
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
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningsRequest extends $tea.Model {
  directoryId?: string;
  maxResults?: number;
  nextToken?: string;
  principalId?: string;
  principalType?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningsResponseBody extends $tea.Model {
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  userProvisionings?: ListUserProvisioningsResponseBodyUserProvisionings[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      userProvisionings: 'UserProvisionings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      userProvisionings: { 'type': 'array', 'itemType': ListUserProvisioningsResponseBodyUserProvisionings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserProvisioningsResponseBody;
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
      body: ListUserProvisioningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  directoryId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  provisionType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      provisionType: 'ProvisionType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      provisionType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCounts?: number;
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionAccessConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  tasks?: ProvisionAccessConfigurationResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ProvisionAccessConfigurationResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ProvisionAccessConfigurationResponseBody;
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
      body: ProvisionAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveExternalSAMLIdPCertificateRequest extends $tea.Model {
  certificateId?: string;
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveExternalSAMLIdPCertificateResponseBody extends $tea.Model {
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

export class RemoveExternalSAMLIdPCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveExternalSAMLIdPCertificateResponseBody;
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
      body: RemoveExternalSAMLIdPCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePermissionPolicyFromAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  permissionPolicyName?: string;
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      permissionPolicyName: 'PermissionPolicyName',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      permissionPolicyName: 'string',
      permissionPolicyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePermissionPolicyFromAccessConfigurationResponseBody extends $tea.Model {
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

export class RemovePermissionPolicyFromAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemovePermissionPolicyFromAccessConfigurationResponseBody;
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
      body: RemovePermissionPolicyFromAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromGroupRequest extends $tea.Model {
  directoryId?: string;
  groupId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromGroupResponseBody extends $tea.Model {
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

export class RemoveUserFromGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveUserFromGroupResponseBody;
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
      body: RemoveUserFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordRequest extends $tea.Model {
  directoryId?: string;
  generateRandomPassword?: boolean;
  password?: string;
  requirePasswordResetForNextLogin?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      generateRandomPassword: 'GenerateRandomPassword',
      password: 'Password',
      requirePasswordResetForNextLogin: 'RequirePasswordResetForNextLogin',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      generateRandomPassword: 'boolean',
      password: 'string',
      requirePasswordResetForNextLogin: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBody extends $tea.Model {
  newPassword?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newPassword: 'NewPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newPassword: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetUserPasswordResponseBody;
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
      body: ResetUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExternalSAMLIdentityProviderRequest extends $tea.Model {
  directoryId?: string;
  encodedMetadataDocument?: string;
  entityId?: string;
  loginUrl?: string;
  SSOStatus?: string;
  wantRequestSigned?: boolean;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      loginUrl: 'LoginUrl',
      SSOStatus: 'SSOStatus',
      wantRequestSigned: 'WantRequestSigned',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      loginUrl: 'string',
      SSOStatus: 'string',
      wantRequestSigned: 'boolean',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExternalSAMLIdentityProviderResponseBody extends $tea.Model {
  requestId?: string;
  SAMLIdentityProviderConfiguration?: SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLIdentityProviderConfiguration: 'SAMLIdentityProviderConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLIdentityProviderConfiguration: SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExternalSAMLIdentityProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetExternalSAMLIdentityProviderResponseBody;
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
      body: SetExternalSAMLIdentityProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMFAAuthenticationStatusRequest extends $tea.Model {
  directoryId?: string;
  MFAAuthenticationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      MFAAuthenticationStatus: 'MFAAuthenticationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      MFAAuthenticationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMFAAuthenticationStatusResponseBody extends $tea.Model {
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

export class SetMFAAuthenticationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetMFAAuthenticationStatusResponseBody;
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
      body: SetMFAAuthenticationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSCIMSynchronizationStatusRequest extends $tea.Model {
  directoryId?: string;
  SCIMSynchronizationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      SCIMSynchronizationStatus: 'SCIMSynchronizationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      SCIMSynchronizationStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSCIMSynchronizationStatusResponseBody extends $tea.Model {
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

export class SetSCIMSynchronizationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetSCIMSynchronizationStatusResponseBody;
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
      body: SetSCIMSynchronizationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  newDescription?: string;
  newRelayState?: string;
  newSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      newDescription: 'NewDescription',
      newRelayState: 'NewRelayState',
      newSessionDuration: 'NewSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      newDescription: 'string',
      newRelayState: 'string',
      newSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessConfigurationResponseBody extends $tea.Model {
  accessConfiguration?: UpdateAccessConfigurationResponseBodyAccessConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfiguration: 'AccessConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfiguration: UpdateAccessConfigurationResponseBodyAccessConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAccessConfigurationResponseBody;
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
      body: UpdateAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDirectoryRequest extends $tea.Model {
  directoryId?: string;
  newDirectoryName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDirectoryName: 'NewDirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDirectoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDirectoryResponseBody extends $tea.Model {
  directory?: UpdateDirectoryResponseBodyDirectory;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: UpdateDirectoryResponseBodyDirectory,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDirectoryResponseBody;
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
      body: UpdateDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  directoryId?: string;
  groupId?: string;
  newDescription?: string;
  newGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      groupId: 'GroupId',
      newDescription: 'NewDescription',
      newGroupName: 'NewGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      groupId: 'string',
      newDescription: 'string',
      newGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $tea.Model {
  group?: UpdateGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: UpdateGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupResponseBody;
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
      body: UpdateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInlinePolicyForAccessConfigurationRequest extends $tea.Model {
  accessConfigurationId?: string;
  directoryId?: string;
  inlinePolicyName?: string;
  newInlinePolicyDocument?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      inlinePolicyName: 'InlinePolicyName',
      newInlinePolicyDocument: 'NewInlinePolicyDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      inlinePolicyName: 'string',
      newInlinePolicyDocument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInlinePolicyForAccessConfigurationResponseBody extends $tea.Model {
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

export class UpdateInlinePolicyForAccessConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInlinePolicyForAccessConfigurationResponseBody;
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
      body: UpdateInlinePolicyForAccessConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMFAAuthenticationSettingsRequest extends $tea.Model {
  directoryId?: string;
  MFAAuthenticationSettings?: string;
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      MFAAuthenticationSettings: 'MFAAuthenticationSettings',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      MFAAuthenticationSettings: 'string',
      operationForRiskLogin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMFAAuthenticationSettingsResponseBody extends $tea.Model {
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

export class UpdateMFAAuthenticationSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMFAAuthenticationSettingsResponseBody;
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
      body: UpdateMFAAuthenticationSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSCIMServerCredentialStatusRequest extends $tea.Model {
  credentialId?: string;
  directoryId?: string;
  newStatus?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      directoryId: 'DirectoryId',
      newStatus: 'NewStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      directoryId: 'string',
      newStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSCIMServerCredentialStatusResponseBody extends $tea.Model {
  requestId?: string;
  SCIMServerCredential?: UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredential: 'SCIMServerCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredential: UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSCIMServerCredentialStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSCIMServerCredentialStatusResponseBody;
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
      body: UpdateSCIMServerCredentialStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  directoryId?: string;
  newDescription?: string;
  newDisplayName?: string;
  newEmail?: string;
  newFirstName?: string;
  newLastName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDescription: 'NewDescription',
      newDisplayName: 'NewDisplayName',
      newEmail: 'NewEmail',
      newFirstName: 'NewFirstName',
      newLastName: 'NewLastName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDescription: 'string',
      newDisplayName: 'string',
      newEmail: 'string',
      newFirstName: 'string',
      newLastName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  requestId?: string;
  user?: UpdateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: UpdateUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserResponseBody;
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
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserMFAAuthenticationSettingsRequest extends $tea.Model {
  directoryId?: string;
  userId?: string;
  userMFAAuthenticationSettings?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userId: 'UserId',
      userMFAAuthenticationSettings: 'UserMFAAuthenticationSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userId: 'string',
      userMFAAuthenticationSettings: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserMFAAuthenticationSettingsResponseBody extends $tea.Model {
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

export class UpdateUserMFAAuthenticationSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserMFAAuthenticationSettingsResponseBody;
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
      body: UpdateUserMFAAuthenticationSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningRequest extends $tea.Model {
  directoryId?: string;
  newDeletionStrategy?: string;
  newDescription?: string;
  newDuplicationStrategy?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDeletionStrategy: 'NewDeletionStrategy',
      newDescription: 'NewDescription',
      newDuplicationStrategy: 'NewDuplicationStrategy',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDeletionStrategy: 'string',
      newDescription: 'string',
      newDuplicationStrategy: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningResponseBody extends $tea.Model {
  requestId?: string;
  userProvisioning?: UpdateUserProvisioningResponseBodyUserProvisioning;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioning: 'UserProvisioning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioning: UpdateUserProvisioningResponseBodyUserProvisioning,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserProvisioningResponseBody;
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
      body: UpdateUserProvisioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserStatusRequest extends $tea.Model {
  directoryId?: string;
  newStatus?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newStatus: 'NewStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newStatus: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserStatusResponseBody extends $tea.Model {
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

export class UpdateUserStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUserStatusResponseBody;
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
      body: UpdateUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessAssignmentResponseBodyTask extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessConfigurationResponseBodyAccessConfiguration extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  createTime?: string;
  description?: string;
  relayState?: string;
  sessionDuration?: number;
  statusNotifications?: string[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      statusNotifications: 'StatusNotifications',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      description: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      statusNotifications: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDirectoryResponseBodyDirectory extends $tea.Model {
  createTime?: string;
  directoryId?: string;
  directoryName?: string;
  region?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      directoryName: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyGroup extends $tea.Model {
  createTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  provisionType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      provisionType: 'ProvisionType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      provisionType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSCIMServerCredentialResponseBodySCIMServerCredential extends $tea.Model {
  createTime?: string;
  credentialId?: string;
  credentialSecret?: string;
  credentialType?: string;
  directoryId?: string;
  expireTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialId: 'CredentialId',
      credentialSecret: 'CredentialSecret',
      credentialType: 'CredentialType',
      directoryId: 'DirectoryId',
      expireTime: 'ExpireTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      credentialId: 'string',
      credentialSecret: 'string',
      credentialType: 'string',
      directoryId: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUser extends $tea.Model {
  createTime?: string;
  description?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  provisionType?: string;
  status?: string;
  updateTime?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      provisionType: 'ProvisionType',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserProvisioningResponseBodyUserProvisioning extends $tea.Model {
  createTime?: string;
  deletionStrategy?: string;
  description?: string;
  directoryId?: string;
  duplicationStrategy?: string;
  ownerPk?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetType?: string;
  updateTime?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      ownerPk: 'OwnerPk',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      ownerPk: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetType: 'string',
      updateTime: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessAssignmentResponseBodyTask extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprovisionAccessConfigurationResponseBodyTasks extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessConfigurationResponseBodyAccessConfiguration extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  createTime?: string;
  description?: string;
  relayState?: string;
  sessionDuration?: number;
  statusNotifications?: string[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      statusNotifications: 'StatusNotifications',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      description: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      statusNotifications: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryResponseBodyDirectory extends $tea.Model {
  createTime?: string;
  directoryId?: string;
  directoryName?: string;
  region?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      directoryName: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySAMLServiceProviderInfoResponseBodySAMLServiceProvider extends $tea.Model {
  acsUrl?: string;
  directoryId?: string;
  encodedMetadataDocument?: string;
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      acsUrl: 'AcsUrl',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsUrl: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryStatisticsResponseBodyDirectoryStatistics extends $tea.Model {
  accessAssignmentCount?: number;
  accessConfigurationCount?: number;
  accessConfigurationQuota?: number;
  directoryId?: string;
  directoryName?: string;
  groupCount?: number;
  groupQuota?: number;
  inProgressTaskCount?: number;
  region?: string;
  SCIMServerCredentialCount?: number;
  SCIMSyncEnabled?: boolean;
  SSOEnabled?: boolean;
  systemPolicyPerAccessConfigurationQuota?: number;
  userCount?: number;
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      accessAssignmentCount: 'AccessAssignmentCount',
      accessConfigurationCount: 'AccessConfigurationCount',
      accessConfigurationQuota: 'AccessConfigurationQuota',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      groupCount: 'GroupCount',
      groupQuota: 'GroupQuota',
      inProgressTaskCount: 'InProgressTaskCount',
      region: 'Region',
      SCIMServerCredentialCount: 'SCIMServerCredentialCount',
      SCIMSyncEnabled: 'SCIMSyncEnabled',
      SSOEnabled: 'SSOEnabled',
      systemPolicyPerAccessConfigurationQuota: 'SystemPolicyPerAccessConfigurationQuota',
      userCount: 'UserCount',
      userQuota: 'UserQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAssignmentCount: 'number',
      accessConfigurationCount: 'number',
      accessConfigurationQuota: 'number',
      directoryId: 'string',
      directoryName: 'string',
      groupCount: 'number',
      groupQuota: 'number',
      inProgressTaskCount: 'number',
      region: 'string',
      SCIMServerCredentialCount: 'number',
      SCIMSyncEnabled: 'boolean',
      SSOEnabled: 'boolean',
      systemPolicyPerAccessConfigurationQuota: 'number',
      userCount: 'number',
      userQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration extends $tea.Model {
  certificateIds?: string[];
  createTime?: string;
  directoryId?: string;
  encodedMetadataDocument?: string;
  entityId?: string;
  loginUrl?: string;
  SSOStatus?: string;
  updateTime?: string;
  wantRequestSigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      loginUrl: 'LoginUrl',
      SSOStatus: 'SSOStatus',
      updateTime: 'UpdateTime',
      wantRequestSigned: 'WantRequestSigned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      loginUrl: 'string',
      SSOStatus: 'string',
      updateTime: 'string',
      wantRequestSigned: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $tea.Model {
  createTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  provisionType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      provisionType: 'ProvisionType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      provisionType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo extends $tea.Model {
  mfaAuthenticationAdvanceSettings?: string;
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      mfaAuthenticationAdvanceSettings: 'MfaAuthenticationAdvanceSettings',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaAuthenticationAdvanceSettings: 'string',
      operationForRiskLogin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponseBodyServiceStatus extends $tea.Model {
  accountId?: string;
  prerequisiteCheckResult?: string;
  regionsInUse?: string[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      prerequisiteCheckResult: 'PrerequisiteCheckResult',
      regionsInUse: 'RegionsInUse',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      prerequisiteCheckResult: 'string',
      regionsInUse: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTask extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  endTime?: string;
  failureReason?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  startTime?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      endTime: 'EndTime',
      failureReason: 'FailureReason',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      startTime: 'StartTime',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      endTime: 'string',
      failureReason: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      startTime: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusResponseBodyTaskStatus extends $tea.Model {
  endTime?: string;
  failureReason?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      failureReason: 'FailureReason',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failureReason: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  createTime?: string;
  description?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  provisionType?: string;
  status?: string;
  updateTime?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      provisionType: 'ProvisionType',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningResponseBodyUserProvisioning extends $tea.Model {
  createTime?: string;
  deletionStrategy?: string;
  description?: string;
  directoryId?: string;
  duplicationStrategy?: string;
  ownerPk?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetType?: string;
  updateTime?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      ownerPk: 'OwnerPk',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      ownerPk: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetType: 'string',
      updateTime: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsResponseBodyAccessAssignments extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  createTime?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  createTime?: string;
  RAMPolicyNames?: string[];
  RAMRoleName?: string;
  SAMLProviderName?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      RAMPolicyNames: 'RAMPolicyNames',
      RAMRoleName: 'RAMRoleName',
      SAMLProviderName: 'SAMLProviderName',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      RAMPolicyNames: { 'type': 'array', 'itemType': 'string' },
      RAMRoleName: 'string',
      SAMLProviderName: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationsResponseBodyAccessConfigurations extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  createTime?: string;
  description?: string;
  relayState?: string;
  sessionDuration?: number;
  statusNotifications?: string[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      statusNotifications: 'StatusNotifications',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      description: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      statusNotifications: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoriesResponseBodyDirectories extends $tea.Model {
  createTime?: string;
  directoryId?: string;
  directoryName?: string;
  region?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      directoryName: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates extends $tea.Model {
  certificateId?: string;
  issuer?: string;
  notAfter?: string;
  notBefore?: string;
  publicKey?: string;
  serialNumber?: string;
  signatureAlgorithm?: string;
  subject?: string;
  version?: number;
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      issuer: 'Issuer',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      publicKey: 'PublicKey',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      subject: 'Subject',
      version: 'Version',
      x509Certificate: 'X509Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      issuer: 'string',
      notAfter: 'string',
      notBefore: 'string',
      publicKey: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      subject: 'string',
      version: 'number',
      x509Certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMembersResponseBodyGroupMembers extends $tea.Model {
  description?: string;
  displayName?: string;
  email?: string;
  groupId?: string;
  joinTime?: string;
  provisionType?: string;
  status?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      groupId: 'GroupId',
      joinTime: 'JoinTime',
      provisionType: 'ProvisionType',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      email: 'string',
      groupId: 'string',
      joinTime: 'string',
      provisionType: 'string',
      status: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroups extends $tea.Model {
  createTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  provisionType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      provisionType: 'ProvisionType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      provisionType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJoinedGroupsForUserResponseBodyJoinedGroups extends $tea.Model {
  description?: string;
  groupId?: string;
  groupName?: string;
  joinTime?: string;
  provisionType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      joinTime: 'JoinTime',
      provisionType: 'ProvisionType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      joinTime: 'string',
      provisionType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMFADevicesForUserResponseBodyMFADevices extends $tea.Model {
  deviceId?: string;
  deviceName?: string;
  deviceType?: string;
  effectiveTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      effectiveTime: 'EffectiveTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      effectiveTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies extends $tea.Model {
  addTime?: string;
  permissionPolicyDocument?: string;
  permissionPolicyName?: string;
  permissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      permissionPolicyDocument: 'PermissionPolicyDocument',
      permissionPolicyName: 'PermissionPolicyName',
      permissionPolicyType: 'PermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      permissionPolicyDocument: 'string',
      permissionPolicyName: 'string',
      permissionPolicyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSCIMServerCredentialsResponseBodySCIMServerCredentials extends $tea.Model {
  createTime?: string;
  credentialId?: string;
  credentialType?: string;
  directoryId?: string;
  expireTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialId: 'CredentialId',
      credentialType: 'CredentialType',
      directoryId: 'DirectoryId',
      expireTime: 'ExpireTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      credentialId: 'string',
      credentialType: 'string',
      directoryId: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  endTime?: string;
  failureReason?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  startTime?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      endTime: 'EndTime',
      failureReason: 'FailureReason',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      startTime: 'StartTime',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      endTime: 'string',
      failureReason: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      startTime: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningsResponseBodyUserProvisionings extends $tea.Model {
  createTime?: string;
  deletionStrategy?: string;
  description?: string;
  directoryId?: string;
  duplicationStrategy?: string;
  ownerPk?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetType?: string;
  updateTime?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      ownerPk: 'OwnerPk',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      ownerPk: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetType: 'string',
      updateTime: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  createTime?: string;
  description?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  provisionType?: string;
  status?: string;
  updateTime?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      provisionType: 'ProvisionType',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionAccessConfigurationResponseBodyTasks extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetPathName?: string;
  targetType?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExternalSAMLIdentityProviderResponseBodySAMLIdentityProviderConfiguration extends $tea.Model {
  certificateIds?: string[];
  createTime?: string;
  directoryId?: string;
  encodedMetadataDocument?: string;
  entityId?: string;
  loginUrl?: string;
  SSOStatus?: string;
  updateTime?: string;
  wantRequestSigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      loginUrl: 'LoginUrl',
      SSOStatus: 'SSOStatus',
      updateTime: 'UpdateTime',
      wantRequestSigned: 'WantRequestSigned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      loginUrl: 'string',
      SSOStatus: 'string',
      updateTime: 'string',
      wantRequestSigned: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessConfigurationResponseBodyAccessConfiguration extends $tea.Model {
  accessConfigurationId?: string;
  accessConfigurationName?: string;
  createTime?: string;
  description?: string;
  relayState?: string;
  sessionDuration?: number;
  statusNotifications?: string[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      description: 'Description',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      statusNotifications: 'StatusNotifications',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      description: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      statusNotifications: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDirectoryResponseBodyDirectory extends $tea.Model {
  createTime?: string;
  directoryId?: string;
  directoryName?: string;
  region?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      directoryName: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBodyGroup extends $tea.Model {
  createTime?: string;
  description?: string;
  groupId?: string;
  groupName?: string;
  provisionType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      provisionType: 'ProvisionType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      provisionType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential extends $tea.Model {
  createTime?: string;
  credentialId?: string;
  credentialType?: string;
  directoryId?: string;
  expireTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialId: 'CredentialId',
      credentialType: 'CredentialType',
      directoryId: 'DirectoryId',
      expireTime: 'ExpireTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      credentialId: 'string',
      credentialType: 'string',
      directoryId: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBodyUser extends $tea.Model {
  createTime?: string;
  description?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  provisionType?: string;
  status?: string;
  updateTime?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      provisionType: 'ProvisionType',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      provisionType: 'string',
      status: 'string',
      updateTime: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningResponseBodyUserProvisioning extends $tea.Model {
  createTime?: string;
  deletionStrategy?: string;
  description?: string;
  directoryId?: string;
  duplicationStrategy?: string;
  ownerPk?: string;
  principalId?: string;
  principalName?: string;
  principalType?: string;
  status?: string;
  targetId?: string;
  targetName?: string;
  targetPath?: string;
  targetType?: string;
  updateTime?: string;
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      description: 'Description',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      ownerPk: 'OwnerPk',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionStrategy: 'string',
      description: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      ownerPk: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetType: 'string',
      updateTime: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudsso", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
    * You can add up to two SAML signing certificates.
    * This topic provides an example on how to add a SAML signing certificate to the directory `d-00fc2p61****`.
    *
    * @param request AddExternalSAMLIdPCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddExternalSAMLIdPCertificateResponse
   */
  async addExternalSAMLIdPCertificateWithOptions(request: AddExternalSAMLIdPCertificateRequest, runtime: $Util.RuntimeOptions): Promise<AddExternalSAMLIdPCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.x509Certificate)) {
      query["X509Certificate"] = request.x509Certificate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddExternalSAMLIdPCertificate",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddExternalSAMLIdPCertificateResponse>(await this.callApi(params, req, runtime), new AddExternalSAMLIdPCertificateResponse({}));
  }

  /**
    * You can add up to two SAML signing certificates.
    * This topic provides an example on how to add a SAML signing certificate to the directory `d-00fc2p61****`.
    *
    * @param request AddExternalSAMLIdPCertificateRequest
    * @return AddExternalSAMLIdPCertificateResponse
   */
  async addExternalSAMLIdPCertificate(request: AddExternalSAMLIdPCertificateRequest): Promise<AddExternalSAMLIdPCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to add the system policy `AliyunECSFullAccess` to the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request AddPermissionPolicyToAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddPermissionPolicyToAccessConfigurationResponse
   */
  async addPermissionPolicyToAccessConfigurationWithOptions(request: AddPermissionPolicyToAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<AddPermissionPolicyToAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.inlinePolicyDocument)) {
      query["InlinePolicyDocument"] = request.inlinePolicyDocument;
    }

    if (!Util.isUnset(request.permissionPolicyName)) {
      query["PermissionPolicyName"] = request.permissionPolicyName;
    }

    if (!Util.isUnset(request.permissionPolicyType)) {
      query["PermissionPolicyType"] = request.permissionPolicyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddPermissionPolicyToAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddPermissionPolicyToAccessConfigurationResponse>(await this.callApi(params, req, runtime), new AddPermissionPolicyToAccessConfigurationResponse({}));
  }

  /**
    * This topic provides an example on how to add the system policy `AliyunECSFullAccess` to the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request AddPermissionPolicyToAccessConfigurationRequest
    * @return AddPermissionPolicyToAccessConfigurationResponse
   */
  async addPermissionPolicyToAccessConfiguration(request: AddPermissionPolicyToAccessConfigurationRequest): Promise<AddPermissionPolicyToAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPermissionPolicyToAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot add a user to a group that is synchronized by using SCIM.
    * This topic provides an example of how to add the user `u-00q8wbq42wiltcrk****` to the group `g-00jqzghi2n3o5hkh****`.
    *
    * @param request AddUserToGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddUserToGroupResponse
   */
  async addUserToGroupWithOptions(request: AddUserToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserToGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserToGroupResponse>(await this.callApi(params, req, runtime), new AddUserToGroupResponse({}));
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot add a user to a group that is synchronized by using SCIM.
    * This topic provides an example of how to add the user `u-00q8wbq42wiltcrk****` to the group `g-00jqzghi2n3o5hkh****`.
    *
    * @param request AddUserToGroupRequest
    * @return AddUserToGroupResponse
   */
  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
    * If single sign-on (SSO) logon is disabled, you can clear the configurations of a SAML IdP. If SSO logon is enabled, you cannot clear the configurations.
    * This topic provides an example on how to clear the configurations of the SAML IdP within the directory `d-00fc2p61****`.
    *
    * @param request ClearExternalSAMLIdentityProviderRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ClearExternalSAMLIdentityProviderResponse
   */
  async clearExternalSAMLIdentityProviderWithOptions(request: ClearExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<ClearExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new ClearExternalSAMLIdentityProviderResponse({}));
  }

  /**
    * If single sign-on (SSO) logon is disabled, you can clear the configurations of a SAML IdP. If SSO logon is enabled, you cannot clear the configurations.
    * This topic provides an example on how to clear the configurations of the SAML IdP within the directory `d-00fc2p61****`.
    *
    * @param request ClearExternalSAMLIdentityProviderRequest
    * @return ClearExternalSAMLIdentityProviderResponse
   */
  async clearExternalSAMLIdentityProvider(request: ClearExternalSAMLIdentityProviderRequest): Promise<ClearExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
    * When you call this operation, an asynchronous task is created. You can call the [GetTask](~~340670~~) operation to query the progress of task execution by using the value of the `TaskId` response parameter.
    * For more information about how to assign permissions on an account in your resource directory, see [Overview of multi-account authorization](~~266726~~).
    * This topic provides an example on how to assign access permissions on the account `114240524784****` in your resource directory to the CloudSSO user `u-00q8wbq42wiltcrk****` by using the access configuration `ac-00jhtfl8thteu6uj****`. After the call is successful, the CloudSSO user can access resources within the account in the resource directory.
    *
    * @param request CreateAccessAssignmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAccessAssignmentResponse
   */
  async createAccessAssignmentWithOptions(request: CreateAccessAssignmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessAssignmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessAssignment",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessAssignmentResponse>(await this.callApi(params, req, runtime), new CreateAccessAssignmentResponse({}));
  }

  /**
    * When you call this operation, an asynchronous task is created. You can call the [GetTask](~~340670~~) operation to query the progress of task execution by using the value of the `TaskId` response parameter.
    * For more information about how to assign permissions on an account in your resource directory, see [Overview of multi-account authorization](~~266726~~).
    * This topic provides an example on how to assign access permissions on the account `114240524784****` in your resource directory to the CloudSSO user `u-00q8wbq42wiltcrk****` by using the access configuration `ac-00jhtfl8thteu6uj****`. After the call is successful, the CloudSSO user can access resources within the account in the resource directory.
    *
    * @param request CreateAccessAssignmentRequest
    * @return CreateAccessAssignmentResponse
   */
  async createAccessAssignment(request: CreateAccessAssignmentRequest): Promise<CreateAccessAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessAssignmentWithOptions(request, runtime);
  }

  /**
    * For more information about access configurations, see [Overview of access configurations](~~266737~~).
    * This topic provides an example on how to create an access configuration named `ECS-Admin`.
    *
    * @param request CreateAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAccessConfigurationResponse
   */
  async createAccessConfigurationWithOptions(request: CreateAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationName)) {
      query["AccessConfigurationName"] = request.accessConfigurationName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.relayState)) {
      query["RelayState"] = request.relayState;
    }

    if (!Util.isUnset(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessConfigurationResponse>(await this.callApi(params, req, runtime), new CreateAccessConfigurationResponse({}));
  }

  /**
    * For more information about access configurations, see [Overview of access configurations](~~266737~~).
    * This topic provides an example on how to create an access configuration named `ECS-Admin`.
    *
    * @param request CreateAccessConfigurationRequest
    * @return CreateAccessConfigurationResponse
   */
  async createAccessConfiguration(request: CreateAccessConfigurationRequest): Promise<CreateAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * A directory is a CloudSSO instance. Before you can use CloudSSO, you must create a directory. The directory is used to manage all CloudSSO resources.
    * To create a directory, you must select a region. Alibaba Cloud stores data in the directory only in the region that you select. However, you can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions. You can select a region to create a directory based on your security compliance requirements and the geographic location of specific users. If you do not have strict security compliance requirements, we recommend that you select a region that is the closest to the geographical location of the specific users. This way, access to cloud resources is accelerated. You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), US (Silicon Valley), or Germany (Frankfurt) region.
    * This topic provides an example on how to create a directory named `example` in the China (Shanghai) region.
    * ## Limits
    * - You can create only one directory for a management account.
    * - If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
    *
    * @param request CreateDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDirectoryResponse
   */
  async createDirectoryWithOptions(request: CreateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDirectoryResponse>(await this.callApi(params, req, runtime), new CreateDirectoryResponse({}));
  }

  /**
    * A directory is a CloudSSO instance. Before you can use CloudSSO, you must create a directory. The directory is used to manage all CloudSSO resources.
    * To create a directory, you must select a region. Alibaba Cloud stores data in the directory only in the region that you select. However, you can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions. You can select a region to create a directory based on your security compliance requirements and the geographic location of specific users. If you do not have strict security compliance requirements, we recommend that you select a region that is the closest to the geographical location of the specific users. This way, access to cloud resources is accelerated. You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), US (Silicon Valley), or Germany (Frankfurt) region.
    * This topic provides an example on how to create a directory named `example` in the China (Shanghai) region.
    * ## Limits
    * - You can create only one directory for a management account.
    * - If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
    *
    * @param request CreateDirectoryRequest
    * @return CreateDirectoryResponse
   */
  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create a group named `TestGroup`.
    *
    * @param request CreateGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
    * This topic provides an example on how to create a group named `TestGroup`.
    *
    * @param request CreateGroupRequest
    * @return CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
    * SCIM credentials are required for SCIM synchronization. You can create up to two SCIM credentials.
    * This topic provides an example on how to create a SCIM credential within the directory `d-00fc2p61****`.
    *
    * @param request CreateSCIMServerCredentialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSCIMServerCredentialResponse
   */
  async createSCIMServerCredentialWithOptions(request: CreateSCIMServerCredentialRequest, runtime: $Util.RuntimeOptions): Promise<CreateSCIMServerCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSCIMServerCredential",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSCIMServerCredentialResponse>(await this.callApi(params, req, runtime), new CreateSCIMServerCredentialResponse({}));
  }

  /**
    * SCIM credentials are required for SCIM synchronization. You can create up to two SCIM credentials.
    * This topic provides an example on how to create a SCIM credential within the directory `d-00fc2p61****`.
    *
    * @param request CreateSCIMServerCredentialRequest
    * @return CreateSCIMServerCredentialResponse
   */
  async createSCIMServerCredential(request: CreateSCIMServerCredentialRequest): Promise<CreateSCIMServerCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSCIMServerCredentialWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create a user named `Alice`.
    *
    * @param request CreateUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.firstName)) {
      query["FirstName"] = request.firstName;
    }

    if (!Util.isUnset(request.lastName)) {
      query["LastName"] = request.lastName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
    * This topic provides an example on how to create a user named `Alice`.
    *
    * @param request CreateUserRequest
    * @return CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createUserProvisioningWithOptions(request: CreateUserProvisioningRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserProvisioningResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionStrategy)) {
      query["DeletionStrategy"] = request.deletionStrategy;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.duplicationStrategy)) {
      query["DuplicationStrategy"] = request.duplicationStrategy;
    }

    if (!Util.isUnset(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserProvisioningResponse>(await this.callApi(params, req, runtime), new CreateUserProvisioningResponse({}));
  }

  async createUserProvisioning(request: CreateUserProvisioningRequest): Promise<CreateUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserProvisioningWithOptions(request, runtime);
  }

  /**
    * When you call this operation, an asynchronous task is created. You can call the [GetTask](~~340670~~) operation to query the progress of the task based on the value of the `TaskId` response parameter.
    * This topic provides an example on how to remove the access permissions on the account `114240524784****` in the resource directory from the CloudSSO user `u-00q8wbq42wiltcrk****`. The access permissions are assigned by using the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request DeleteAccessAssignmentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAccessAssignmentResponse
   */
  async deleteAccessAssignmentWithOptions(request: DeleteAccessAssignmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessAssignmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.deprovisionStrategy)) {
      query["DeprovisionStrategy"] = request.deprovisionStrategy;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessAssignment",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessAssignmentResponse>(await this.callApi(params, req, runtime), new DeleteAccessAssignmentResponse({}));
  }

  /**
    * When you call this operation, an asynchronous task is created. You can call the [GetTask](~~340670~~) operation to query the progress of the task based on the value of the `TaskId` response parameter.
    * This topic provides an example on how to remove the access permissions on the account `114240524784****` in the resource directory from the CloudSSO user `u-00q8wbq42wiltcrk****`. The access permissions are assigned by using the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request DeleteAccessAssignmentRequest
    * @return DeleteAccessAssignmentResponse
   */
  async deleteAccessAssignment(request: DeleteAccessAssignmentRequest): Promise<DeleteAccessAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessAssignmentWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to delete the access configuration whose ID is `ac-001j9mcm3k7335bc****`.
    * ## Prerequisites
    * The access configuration that you want to delete is de-provisioned from the accounts in your resource directory. For more information, see [DeprovisionAccessConfiguration](~~338352~~).
    *
    * @param request DeleteAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteAccessConfigurationResponse
   */
  async deleteAccessConfigurationWithOptions(request: DeleteAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.forceRemovePermissionPolicies)) {
      query["ForceRemovePermissionPolicies"] = request.forceRemovePermissionPolicies;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteAccessConfigurationResponse({}));
  }

  /**
    * This topic provides an example on how to delete the access configuration whose ID is `ac-001j9mcm3k7335bc****`.
    * ## Prerequisites
    * The access configuration that you want to delete is de-provisioned from the accounts in your resource directory. For more information, see [DeprovisionAccessConfiguration](~~338352~~).
    *
    * @param request DeleteAccessConfigurationRequest
    * @return DeleteAccessConfigurationResponse
   */
  async deleteAccessConfiguration(request: DeleteAccessConfigurationRequest): Promise<DeleteAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to delete a directory whose ID is `d-00fc2p61****`.
    * ## Prerequisites
    * No resources are contained in the directory that you want to delete.
    * *   Access permissions on the accounts in your resource directory are removed from all users and groups. For more information, see [DeleteAccessAssignment](~~338350~~).
    * *   Users are deleted. For more information, see [DeleteUser](~~341671~~).
    * *   Groups are deleted. For more information, see [DeleteGroup](~~341821~~).
    * *   Access configurations are deleted. For more information, see [DeleteAccessConfiguration](~~336907~~).
    * *   System for Cross-domain Identity Management (SCIM) credentials are deleted. For more information, see [DeleteSCIMServerCredential](~~341842~~).
    * *   SSO logon configurations are deleted. For more information, see [ClearExternalSAMLIdentityProvider](~~341573~~).
    *
    * @param request DeleteDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDirectoryResponse
   */
  async deleteDirectoryWithOptions(request: DeleteDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new DeleteDirectoryResponse({}));
  }

  /**
    * This topic provides an example on how to delete a directory whose ID is `d-00fc2p61****`.
    * ## Prerequisites
    * No resources are contained in the directory that you want to delete.
    * *   Access permissions on the accounts in your resource directory are removed from all users and groups. For more information, see [DeleteAccessAssignment](~~338350~~).
    * *   Users are deleted. For more information, see [DeleteUser](~~341671~~).
    * *   Groups are deleted. For more information, see [DeleteGroup](~~341821~~).
    * *   Access configurations are deleted. For more information, see [DeleteAccessConfiguration](~~336907~~).
    * *   System for Cross-domain Identity Management (SCIM) credentials are deleted. For more information, see [DeleteSCIMServerCredential](~~341842~~).
    * *   SSO logon configurations are deleted. For more information, see [ClearExternalSAMLIdentityProvider](~~341573~~).
    *
    * @param request DeleteDirectoryRequest
    * @return DeleteDirectoryResponse
   */
  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a group that is synchronized by using SCIM.
    * ## Prerequisites
    * The group that you want to delete is not associated with the following resources. If the group is associated with the resources, the deletion fails.
    * *   Users: You must remove users from the group. For more information, see [RemoveUserFromGroup](~~335116~~).
    * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [DeleteAccessAssignment](~~338350~~).
    *
    * @param request DeleteGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a group that is synchronized by using SCIM.
    * ## Prerequisites
    * The group that you want to delete is not associated with the following resources. If the group is associated with the resources, the deletion fails.
    * *   Users: You must remove users from the group. For more information, see [RemoveUserFromGroup](~~335116~~).
    * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [DeleteAccessAssignment](~~338350~~).
    *
    * @param request DeleteGroupRequest
    * @return DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to unbind the MFA device `mfa-00ujhet8pycljj7j****` from the user `u-00q8wbq42wiltcrk****`.
    *
    * @param request DeleteMFADeviceForUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteMFADeviceForUserResponse
   */
  async deleteMFADeviceForUserWithOptions(request: DeleteMFADeviceForUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMFADeviceForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.MFADeviceId)) {
      query["MFADeviceId"] = request.MFADeviceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMFADeviceForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMFADeviceForUserResponse>(await this.callApi(params, req, runtime), new DeleteMFADeviceForUserResponse({}));
  }

  /**
    * This topic provides an example on how to unbind the MFA device `mfa-00ujhet8pycljj7j****` from the user `u-00q8wbq42wiltcrk****`.
    *
    * @param request DeleteMFADeviceForUserRequest
    * @return DeleteMFADeviceForUserResponse
   */
  async deleteMFADeviceForUser(request: DeleteMFADeviceForUserRequest): Promise<DeleteMFADeviceForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMFADeviceForUserWithOptions(request, runtime);
  }

  /**
    * After a SCIM credential is deleted, the synchronization task that uses the SCIM credential fails.
    * This topic provides an example on how to delete the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`.
    *
    * @param request DeleteSCIMServerCredentialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSCIMServerCredentialResponse
   */
  async deleteSCIMServerCredentialWithOptions(request: DeleteSCIMServerCredentialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSCIMServerCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.credentialId)) {
      query["CredentialId"] = request.credentialId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSCIMServerCredential",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSCIMServerCredentialResponse>(await this.callApi(params, req, runtime), new DeleteSCIMServerCredentialResponse({}));
  }

  /**
    * After a SCIM credential is deleted, the synchronization task that uses the SCIM credential fails.
    * This topic provides an example on how to delete the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`.
    *
    * @param request DeleteSCIMServerCredentialRequest
    * @return DeleteSCIMServerCredentialResponse
   */
  async deleteSCIMServerCredential(request: DeleteSCIMServerCredentialRequest): Promise<DeleteSCIMServerCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSCIMServerCredentialWithOptions(request, runtime);
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a user that is synchronized by using SCIM.
    * ## Prerequisites
    * The user that you want to delete is not associated with the following resources. If the user is associated with the resources, the deletion fails.
    * *   Multi-factor authentication (MFA) devices: You must unbind the MFA devices from the user. For more information, see [DeleteMFADeviceForUser](~~341675~~).
    * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [DeleteAccessAssignment](~~338350~~).
    * *   Groups: You must remove the user from groups. For more information, see [RemoveUserFromGroup](~~335116~~).
    *
    * @param request DeleteUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a user that is synchronized by using SCIM.
    * ## Prerequisites
    * The user that you want to delete is not associated with the following resources. If the user is associated with the resources, the deletion fails.
    * *   Multi-factor authentication (MFA) devices: You must unbind the MFA devices from the user. For more information, see [DeleteMFADeviceForUser](~~341675~~).
    * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [DeleteAccessAssignment](~~338350~~).
    * *   Groups: You must remove the user from groups. For more information, see [RemoveUserFromGroup](~~335116~~).
    *
    * @param request DeleteUserRequest
    * @return DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserProvisioningWithOptions(request: DeleteUserProvisioningRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserProvisioningResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionStrategy)) {
      query["DeletionStrategy"] = request.deletionStrategy;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserProvisioningResponse>(await this.callApi(params, req, runtime), new DeleteUserProvisioningResponse({}));
  }

  async deleteUserProvisioning(request: DeleteUserProvisioningRequest): Promise<DeleteUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserProvisioningWithOptions(request, runtime);
  }

  /**
    * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](~~340670~~) operation to query the progress of the task based on the value of the `TaskId` response parameter.
    * This topic provides an example on how to de-provision the access configuration `ac-00jhtfl8thteu6uj****` from the account `114240524784****` in your resource directory.
    *
    * @param request DeprovisionAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeprovisionAccessConfigurationResponse
   */
  async deprovisionAccessConfigurationWithOptions(request: DeprovisionAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeprovisionAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeprovisionAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeprovisionAccessConfigurationResponse>(await this.callApi(params, req, runtime), new DeprovisionAccessConfigurationResponse({}));
  }

  /**
    * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](~~340670~~) operation to query the progress of the task based on the value of the `TaskId` response parameter.
    * This topic provides an example on how to de-provision the access configuration `ac-00jhtfl8thteu6uj****` from the account `114240524784****` in your resource directory.
    *
    * @param request DeprovisionAccessConfigurationRequest
    * @return DeprovisionAccessConfigurationResponse
   */
  async deprovisionAccessConfiguration(request: DeprovisionAccessConfigurationRequest): Promise<DeprovisionAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deprovisionAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * If your CloudSSO has no directory, you can disable CloudSSO based on your business requirements. After you disable CloudSSO, you can enable it at any time.
    *
    * @param request DisableServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableServiceResponse
   */
  async disableServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<DisableServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DisableService",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableServiceResponse>(await this.callApi(params, req, runtime), new DisableServiceResponse({}));
  }

  /**
    * If your CloudSSO has no directory, you can disable CloudSSO based on your business requirements. After you disable CloudSSO, you can enable it at any time.
    *
    * @return DisableServiceResponse
   */
  async disableService(): Promise<DisableServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableServiceWithOptions(runtime);
  }

  /**
    * You can call this operation only if your account belongs to the management account that is used to enable a resource directory and has permissions to enable CloudSSO. For more information, see [Enable CloudSSO](~~262819~~).
    * If you call this operation, you agree to the [Alibaba Cloud International Website Product Terms of Service](https://www.alibabacloud.com/help/doc-detail/42416.htm).
    *
    * @param request EnableServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EnableServiceResponse
   */
  async enableServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<EnableServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EnableService",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableServiceResponse>(await this.callApi(params, req, runtime), new EnableServiceResponse({}));
  }

  /**
    * You can call this operation only if your account belongs to the management account that is used to enable a resource directory and has permissions to enable CloudSSO. For more information, see [Enable CloudSSO](~~262819~~).
    * If you call this operation, you agree to the [Alibaba Cloud International Website Product Terms of Service](https://www.alibabacloud.com/help/doc-detail/42416.htm).
    *
    * @return EnableServiceResponse
   */
  async enableService(): Promise<EnableServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableServiceWithOptions(runtime);
  }

  /**
    * This topic provides an example on how to query the information about the access configuration whose ID is `ac-00ccule7tadaijxc****`.
    *
    * @param request GetAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAccessConfigurationResponse
   */
  async getAccessConfigurationWithOptions(request: GetAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessConfigurationResponse>(await this.callApi(params, req, runtime), new GetAccessConfigurationResponse({}));
  }

  /**
    * This topic provides an example on how to query the information about the access configuration whose ID is `ac-00ccule7tadaijxc****`.
    *
    * @param request GetAccessConfigurationRequest
    * @return GetAccessConfigurationResponse
   */
  async getAccessConfiguration(request: GetAccessConfigurationRequest): Promise<GetAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query information about the directory whose ID is `d-00fc2p61****`.
    *
    * @param request GetDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDirectoryResponse
   */
  async getDirectoryWithOptions(request: GetDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDirectoryResponse>(await this.callApi(params, req, runtime), new GetDirectoryResponse({}));
  }

  /**
    * This topic provides an example on how to query information about the directory whose ID is `d-00fc2p61****`.
    *
    * @param request GetDirectoryRequest
    * @return GetDirectoryResponse
   */
  async getDirectory(request: GetDirectoryRequest): Promise<GetDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryWithOptions(request, runtime);
  }

  /**
    * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an identity provider (IdP).
    * This topic provides an example on how to query the information about the SP within the directory `d-00fc2p61****`.
    *
    * @param request GetDirectorySAMLServiceProviderInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDirectorySAMLServiceProviderInfoResponse
   */
  async getDirectorySAMLServiceProviderInfoWithOptions(request: GetDirectorySAMLServiceProviderInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectorySAMLServiceProviderInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectorySAMLServiceProviderInfo",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDirectorySAMLServiceProviderInfoResponse>(await this.callApi(params, req, runtime), new GetDirectorySAMLServiceProviderInfoResponse({}));
  }

  /**
    * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an identity provider (IdP).
    * This topic provides an example on how to query the information about the SP within the directory `d-00fc2p61****`.
    *
    * @param request GetDirectorySAMLServiceProviderInfoRequest
    * @return GetDirectorySAMLServiceProviderInfoResponse
   */
  async getDirectorySAMLServiceProviderInfo(request: GetDirectorySAMLServiceProviderInfoRequest): Promise<GetDirectorySAMLServiceProviderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectorySAMLServiceProviderInfoWithOptions(request, runtime);
  }

  /**
    * ### [](#)
    * This topic provides an example on how to query the statistics of a directory whose ID is `d-00fc2p61****`. The statistics include the number of users, quota for users, number of groups, quota for groups, number of access configurations, quota for access configurations, quota for system policies that can be configured for an access configuration, number of access permissions that are assigned, number of System for Cross-domain Identity Management (SCIM) credentials, number of asynchronous tasks, status of single sign-on (SSO), and status of SCIM synchronization.
    * ### [](#qps)Limit
    * You can call this operation up to 100 times per second per account. This operation is globally limited to 100 times per second across all accounts. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
    *
    * @param request GetDirectoryStatisticsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetDirectoryStatisticsResponse
   */
  async getDirectoryStatisticsWithOptions(request: GetDirectoryStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectoryStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectoryStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDirectoryStatisticsResponse>(await this.callApi(params, req, runtime), new GetDirectoryStatisticsResponse({}));
  }

  /**
    * ### [](#)
    * This topic provides an example on how to query the statistics of a directory whose ID is `d-00fc2p61****`. The statistics include the number of users, quota for users, number of groups, quota for groups, number of access configurations, quota for access configurations, quota for system policies that can be configured for an access configuration, number of access permissions that are assigned, number of System for Cross-domain Identity Management (SCIM) credentials, number of asynchronous tasks, status of single sign-on (SSO), and status of SCIM synchronization.
    * ### [](#qps)Limit
    * You can call this operation up to 100 times per second per account. This operation is globally limited to 100 times per second across all accounts. If the number of the calls per second exceeds a limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limits when you call this operation.
    *
    * @param request GetDirectoryStatisticsRequest
    * @return GetDirectoryStatisticsResponse
   */
  async getDirectoryStatistics(request: GetDirectoryStatisticsRequest): Promise<GetDirectoryStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryStatisticsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the configurations of the SAML IdP within the directory `d-00fc2p61****`.
    *
    * @param request GetExternalSAMLIdentityProviderRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetExternalSAMLIdentityProviderResponse
   */
  async getExternalSAMLIdentityProviderWithOptions(request: GetExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<GetExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new GetExternalSAMLIdentityProviderResponse({}));
  }

  /**
    * This topic provides an example on how to query the configurations of the SAML IdP within the directory `d-00fc2p61****`.
    *
    * @param request GetExternalSAMLIdentityProviderRequest
    * @return GetExternalSAMLIdentityProviderResponse
   */
  async getExternalSAMLIdentityProvider(request: GetExternalSAMLIdentityProviderRequest): Promise<GetExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the information about the group `g-00jqzghi2n3o5hkh****` in the directory `d-00fc2p61****`.
    *
    * @param request GetGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetGroupResponse
   */
  async getGroupWithOptions(request: GetGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  /**
    * This topic provides an example on how to query the information about the group `g-00jqzghi2n3o5hkh****` in the directory `d-00fc2p61****`.
    *
    * @param request GetGroupRequest
    * @return GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
    * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
    * This topic provides an example on how to query the MFA setting of all CloudSSO users that belong to the directory named `00q8wbq42wiltcrk****`.
    *
    * @param request GetMFAAuthenticationSettingInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMFAAuthenticationSettingInfoResponse
   */
  async getMFAAuthenticationSettingInfoWithOptions(request: GetMFAAuthenticationSettingInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMFAAuthenticationSettingInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMFAAuthenticationSettingInfo",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMFAAuthenticationSettingInfoResponse>(await this.callApi(params, req, runtime), new GetMFAAuthenticationSettingInfoResponse({}));
  }

  /**
    * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
    * This topic provides an example on how to query the MFA setting of all CloudSSO users that belong to the directory named `00q8wbq42wiltcrk****`.
    *
    * @param request GetMFAAuthenticationSettingInfoRequest
    * @return GetMFAAuthenticationSettingInfoResponse
   */
  async getMFAAuthenticationSettingInfo(request: GetMFAAuthenticationSettingInfoRequest): Promise<GetMFAAuthenticationSettingInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationSettingInfoWithOptions(request, runtime);
  }

  /**
    * > This operation is no longer maintained and updated. You can call the [GetMFAAuthenticationSettingInfo](~~611286~~) operation to query more detailed information.
    * This topic provides an example on how to query the MFA setting of the users that belong to the directory named `d-00fc2p61****`. The returned result shows that MFA is enabled for all the users.
    *
    * @param request GetMFAAuthenticationSettingsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMFAAuthenticationSettingsResponse
   */
  async getMFAAuthenticationSettingsWithOptions(request: GetMFAAuthenticationSettingsRequest, runtime: $Util.RuntimeOptions): Promise<GetMFAAuthenticationSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new GetMFAAuthenticationSettingsResponse({}));
  }

  /**
    * > This operation is no longer maintained and updated. You can call the [GetMFAAuthenticationSettingInfo](~~611286~~) operation to query more detailed information.
    * This topic provides an example on how to query the MFA setting of the users that belong to the directory named `d-00fc2p61****`. The returned result shows that MFA is enabled for all the users.
    *
    * @param request GetMFAAuthenticationSettingsRequest
    * @return GetMFAAuthenticationSettingsResponse
   */
  async getMFAAuthenticationSettings(request: GetMFAAuthenticationSettingsRequest): Promise<GetMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to check whether MFA is enabled for users in the directory whose ID is `00fc2p61****`. The returned result shows that MFA is in the Enabled state.
    *
    * @param request GetMFAAuthenticationStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMFAAuthenticationStatusResponse
   */
  async getMFAAuthenticationStatusWithOptions(request: GetMFAAuthenticationStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetMFAAuthenticationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMFAAuthenticationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMFAAuthenticationStatusResponse>(await this.callApi(params, req, runtime), new GetMFAAuthenticationStatusResponse({}));
  }

  /**
    * This topic provides an example on how to check whether MFA is enabled for users in the directory whose ID is `00fc2p61****`. The returned result shows that MFA is in the Enabled state.
    *
    * @param request GetMFAAuthenticationStatusRequest
    * @return GetMFAAuthenticationStatusResponse
   */
  async getMFAAuthenticationStatus(request: GetMFAAuthenticationStatusRequest): Promise<GetMFAAuthenticationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationStatusWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the status of SCIM synchronization within the directory `d-00fc2p61****`. The returned result shows that SCIM synchronization is in the Enabled state.
    *
    * @param request GetSCIMSynchronizationStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSCIMSynchronizationStatusResponse
   */
  async getSCIMSynchronizationStatusWithOptions(request: GetSCIMSynchronizationStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSCIMSynchronizationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSCIMSynchronizationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSCIMSynchronizationStatusResponse>(await this.callApi(params, req, runtime), new GetSCIMSynchronizationStatusResponse({}));
  }

  /**
    * This topic provides an example on how to query the status of SCIM synchronization within the directory `d-00fc2p61****`. The returned result shows that SCIM synchronization is in the Enabled state.
    *
    * @param request GetSCIMSynchronizationStatusRequest
    * @return GetSCIMSynchronizationStatusResponse
   */
  async getSCIMSynchronizationStatus(request: GetSCIMSynchronizationStatusRequest): Promise<GetSCIMSynchronizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  async getServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetServiceStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceStatusResponse>(await this.callApi(params, req, runtime), new GetServiceStatusResponse({}));
  }

  async getServiceStatus(): Promise<GetServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceStatusWithOptions(runtime);
  }

  /**
    * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
    *
    * @param request GetTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTaskResponse
   */
  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  /**
    * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
    *
    * @param request GetTaskRequest
    * @return GetTaskResponse
   */
  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
    * You can call the GetTaskStatus operation to query the status of an asynchronous task. If you want to query more information about an asynchronous task, you can call the [GetTask](~~340670~~) operation.
    * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
    *
    * @param request GetTaskStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  /**
    * You can call the GetTaskStatus operation to query the status of an asynchronous task. If you want to query more information about an asynchronous task, you can call the [GetTask](~~340670~~) operation.
    * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
    *
    * @param request GetTaskStatusRequest
    * @return GetTaskStatusResponse
   */
  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query information about the user whose ID is `u-00q8wbq42wiltcrk****` in the `d-00fc2p61****` directory.
    *
    * @param request GetUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
    * This topic provides an example on how to query information about the user whose ID is `u-00q8wbq42wiltcrk****` in the `d-00fc2p61****` directory.
    *
    * @param request GetUserRequest
    * @return GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the MFA setting of the user named `u-00q8wbq42wiltcrk****`. The returned result shows that MFA is enabled for the user.
    *
    * @param request GetUserMFAAuthenticationSettingsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetUserMFAAuthenticationSettingsResponse
   */
  async getUserMFAAuthenticationSettingsWithOptions(request: GetUserMFAAuthenticationSettingsRequest, runtime: $Util.RuntimeOptions): Promise<GetUserMFAAuthenticationSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new GetUserMFAAuthenticationSettingsResponse({}));
  }

  /**
    * This topic provides an example on how to query the MFA setting of the user named `u-00q8wbq42wiltcrk****`. The returned result shows that MFA is enabled for the user.
    *
    * @param request GetUserMFAAuthenticationSettingsRequest
    * @return GetUserMFAAuthenticationSettingsResponse
   */
  async getUserMFAAuthenticationSettings(request: GetUserMFAAuthenticationSettingsRequest): Promise<GetUserMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  async getUserProvisioningWithOptions(request: GetUserProvisioningRequest, runtime: $Util.RuntimeOptions): Promise<GetUserProvisioningResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserProvisioningResponse>(await this.callApi(params, req, runtime), new GetUserProvisioningResponse({}));
  }

  async getUserProvisioning(request: GetUserProvisioningRequest): Promise<GetUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProvisioningWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the assigned access permissions on the account `114240524784****` in your resource directory. The returned result shows that access permissions on the account in your resource directory is assigned to one user.
    *
    * @param request ListAccessAssignmentsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAccessAssignmentsResponse
   */
  async listAccessAssignmentsWithOptions(request: ListAccessAssignmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessAssignmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessAssignments",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessAssignmentsResponse>(await this.callApi(params, req, runtime), new ListAccessAssignmentsResponse({}));
  }

  /**
    * This topic provides an example on how to query the assigned access permissions on the account `114240524784****` in your resource directory. The returned result shows that access permissions on the account in your resource directory is assigned to one user.
    *
    * @param request ListAccessAssignmentsRequest
    * @return ListAccessAssignmentsResponse
   */
  async listAccessAssignments(request: ListAccessAssignmentsRequest): Promise<ListAccessAssignmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessAssignmentsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the accounts for which the access permission `ac-00ccule7tadaijxc****` is provisioned. The returned result shows that the access configuration is provisioned for two accounts in your resource directory.
    *
    * @param request ListAccessConfigurationProvisioningsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAccessConfigurationProvisioningsResponse
   */
  async listAccessConfigurationProvisioningsWithOptions(request: ListAccessConfigurationProvisioningsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessConfigurationProvisioningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.provisioningStatus)) {
      query["ProvisioningStatus"] = request.provisioningStatus;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessConfigurationProvisionings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessConfigurationProvisioningsResponse>(await this.callApi(params, req, runtime), new ListAccessConfigurationProvisioningsResponse({}));
  }

  /**
    * This topic provides an example on how to query the accounts for which the access permission `ac-00ccule7tadaijxc****` is provisioned. The returned result shows that the access configuration is provisioned for two accounts in your resource directory.
    *
    * @param request ListAccessConfigurationProvisioningsRequest
    * @return ListAccessConfigurationProvisioningsResponse
   */
  async listAccessConfigurationProvisionings(request: ListAccessConfigurationProvisioningsRequest): Promise<ListAccessConfigurationProvisioningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessConfigurationProvisioningsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the access configurations within the directory `d-00fc2p61****`. The returned result shows that the directory contains the `VPC-Admin` and `ECS-Admin` access configurations.
    *
    * @param request ListAccessConfigurationsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAccessConfigurationsResponse
   */
  async listAccessConfigurationsWithOptions(request: ListAccessConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.statusNotifications)) {
      query["StatusNotifications"] = request.statusNotifications;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessConfigurations",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessConfigurationsResponse>(await this.callApi(params, req, runtime), new ListAccessConfigurationsResponse({}));
  }

  /**
    * This topic provides an example on how to query the access configurations within the directory `d-00fc2p61****`. The returned result shows that the directory contains the `VPC-Admin` and `ECS-Admin` access configurations.
    *
    * @param request ListAccessConfigurationsRequest
    * @return ListAccessConfigurationsResponse
   */
  async listAccessConfigurations(request: ListAccessConfigurationsRequest): Promise<ListAccessConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessConfigurationsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the directories within your Alibaba Cloud account. The returned result shows that only one directory with the ID `d-00fc2p61****` is created within your Alibaba Cloud account.
    *
    * @param request ListDirectoriesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListDirectoriesResponse
   */
  async listDirectoriesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListDirectoriesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListDirectories",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDirectoriesResponse>(await this.callApi(params, req, runtime), new ListDirectoriesResponse({}));
  }

  /**
    * This topic provides an example on how to query the directories within your Alibaba Cloud account. The returned result shows that only one directory with the ID `d-00fc2p61****` is created within your Alibaba Cloud account.
    *
    * @return ListDirectoriesResponse
   */
  async listDirectories(): Promise<ListDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoriesWithOptions(runtime);
  }

  /**
    * This topic provides an example on how to query the SAML signing certificates within the directory `d-00fc2p61****`. The returned result shows that the directory contains one SAML signing certificate.
    *
    * @param request ListExternalSAMLIdPCertificatesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListExternalSAMLIdPCertificatesResponse
   */
  async listExternalSAMLIdPCertificatesWithOptions(request: ListExternalSAMLIdPCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListExternalSAMLIdPCertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExternalSAMLIdPCertificates",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExternalSAMLIdPCertificatesResponse>(await this.callApi(params, req, runtime), new ListExternalSAMLIdPCertificatesResponse({}));
  }

  /**
    * This topic provides an example on how to query the SAML signing certificates within the directory `d-00fc2p61****`. The returned result shows that the directory contains one SAML signing certificate.
    *
    * @param request ListExternalSAMLIdPCertificatesRequest
    * @return ListExternalSAMLIdPCertificatesResponse
   */
  async listExternalSAMLIdPCertificates(request: ListExternalSAMLIdPCertificatesRequest): Promise<ListExternalSAMLIdPCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExternalSAMLIdPCertificatesWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the users in the group `g-00jqzghi2n3o5hkh****`. The returned result shows that the group contains the user `Alice` and the user `user1`.
    *
    * @param request ListGroupMembersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGroupMembersResponse
   */
  async listGroupMembersWithOptions(request: ListGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupMembersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupMembers",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupMembersResponse>(await this.callApi(params, req, runtime), new ListGroupMembersResponse({}));
  }

  /**
    * This topic provides an example on how to query the users in the group `g-00jqzghi2n3o5hkh****`. The returned result shows that the group contains the user `Alice` and the user `user1`.
    *
    * @param request ListGroupMembersRequest
    * @return ListGroupMembersResponse
   */
  async listGroupMembers(request: ListGroupMembersRequest): Promise<ListGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupMembersWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the groups in the directory `d-00fc2p61****`. The returned result shows that the directory contains three groups. The groups `group1` and `group2` are synchronized from an external identity provider (IdP). The group `TestGroup` is manually created in CloudSSO.
    *
    * @param request ListGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.provisionType)) {
      query["ProvisionType"] = request.provisionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  /**
    * This topic provides an example on how to query the groups in the directory `d-00fc2p61****`. The returned result shows that the directory contains three groups. The groups `group1` and `group2` are synchronized from an external identity provider (IdP). The group `TestGroup` is manually created in CloudSSO.
    *
    * @param request ListGroupsRequest
    * @return ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the groups to which the user `u-00q8wbq42wiltcrk****` is added. The returned result shows that the user is added to both the `TestGroup` and the `group1` groups.
    *
    * @param request ListJoinedGroupsForUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListJoinedGroupsForUserResponse
   */
  async listJoinedGroupsForUserWithOptions(request: ListJoinedGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListJoinedGroupsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJoinedGroupsForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJoinedGroupsForUserResponse>(await this.callApi(params, req, runtime), new ListJoinedGroupsForUserResponse({}));
  }

  /**
    * This topic provides an example on how to query the groups to which the user `u-00q8wbq42wiltcrk****` is added. The returned result shows that the user is added to both the `TestGroup` and the `group1` groups.
    *
    * @param request ListJoinedGroupsForUserRequest
    * @return ListJoinedGroupsForUserResponse
   */
  async listJoinedGroupsForUser(request: ListJoinedGroupsForUserRequest): Promise<ListJoinedGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJoinedGroupsForUserWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the MFA devices that are bound to the user `u-00q8wbq42wiltcrk****`. The returned result shows that the MFA device named `Alice-MFA1` is bound to the user.
    *
    * @param request ListMFADevicesForUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListMFADevicesForUserResponse
   */
  async listMFADevicesForUserWithOptions(request: ListMFADevicesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListMFADevicesForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMFADevicesForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMFADevicesForUserResponse>(await this.callApi(params, req, runtime), new ListMFADevicesForUserResponse({}));
  }

  /**
    * This topic provides an example on how to query the MFA devices that are bound to the user `u-00q8wbq42wiltcrk****`. The returned result shows that the MFA device named `Alice-MFA1` is bound to the user.
    *
    * @param request ListMFADevicesForUserRequest
    * @return ListMFADevicesForUserResponse
   */
  async listMFADevicesForUser(request: ListMFADevicesForUserRequest): Promise<ListMFADevicesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMFADevicesForUserWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the policies that are created for the access configuration `ac-00jhtfl8thteu6uj****`. The returned result shows that the access configuration contains one system policy and one inline policy.
    *
    * @param request ListPermissionPoliciesInAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListPermissionPoliciesInAccessConfigurationResponse
   */
  async listPermissionPoliciesInAccessConfigurationWithOptions(request: ListPermissionPoliciesInAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ListPermissionPoliciesInAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.permissionPolicyType)) {
      query["PermissionPolicyType"] = request.permissionPolicyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPermissionPoliciesInAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionPoliciesInAccessConfigurationResponse>(await this.callApi(params, req, runtime), new ListPermissionPoliciesInAccessConfigurationResponse({}));
  }

  /**
    * This topic provides an example on how to query the policies that are created for the access configuration `ac-00jhtfl8thteu6uj****`. The returned result shows that the access configuration contains one system policy and one inline policy.
    *
    * @param request ListPermissionPoliciesInAccessConfigurationRequest
    * @return ListPermissionPoliciesInAccessConfigurationResponse
   */
  async listPermissionPoliciesInAccessConfiguration(request: ListPermissionPoliciesInAccessConfigurationRequest): Promise<ListPermissionPoliciesInAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionPoliciesInAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the SCIM credentials within the `d-00fc2p61****` directory.
    *
    * @param request ListSCIMServerCredentialsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSCIMServerCredentialsResponse
   */
  async listSCIMServerCredentialsWithOptions(request: ListSCIMServerCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<ListSCIMServerCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSCIMServerCredentials",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSCIMServerCredentialsResponse>(await this.callApi(params, req, runtime), new ListSCIMServerCredentialsResponse({}));
  }

  /**
    * This topic provides an example on how to query the SCIM credentials within the `d-00fc2p61****` directory.
    *
    * @param request ListSCIMServerCredentialsRequest
    * @return ListSCIMServerCredentialsResponse
   */
  async listSCIMServerCredentials(request: ListSCIMServerCredentialsRequest): Promise<ListSCIMServerCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSCIMServerCredentialsWithOptions(request, runtime);
  }

  /**
    * By default, this operation queries the tasks within the previous 24 hours. This operation allows you to query the tasks within a maximum of 7 days. You can specify the start time of the query by using `Filter`.
    * This topic provides an example on how to query the tasks within the previous 24 hours.
    *
    * @param request ListTasksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTasksResponse
   */
  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  /**
    * By default, this operation queries the tasks within the previous 24 hours. This operation allows you to query the tasks within a maximum of 7 days. You can specify the start time of the query by using `Filter`.
    * This topic provides an example on how to query the tasks within the previous 24 hours.
    *
    * @param request ListTasksRequest
    * @return ListTasksResponse
   */
  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async listUserProvisioningsWithOptions(request: ListUserProvisioningsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserProvisioningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.principalId)) {
      query["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      query["PrincipalType"] = request.principalType;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserProvisionings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserProvisioningsResponse>(await this.callApi(params, req, runtime), new ListUserProvisioningsResponse({}));
  }

  async listUserProvisionings(request: ListUserProvisioningsRequest): Promise<ListUserProvisioningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserProvisioningsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query users in the `d-00fc2p61****` directory. The returned result shows that the directory contains two users. The user `AliceLee` is synchronized from an external identity provider (IdP). The user `user1` is manually created within CloudSSO.
    *
    * @param request ListUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.provisionType)) {
      query["ProvisionType"] = request.provisionType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
    * This topic provides an example on how to query users in the `d-00fc2p61****` directory. The returned result shows that the directory contains two users. The user `AliceLee` is synchronized from an external identity provider (IdP). The user `user1` is manually created within CloudSSO.
    *
    * @param request ListUsersRequest
    * @return ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
    * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](~~340670~~) operation to query the progress of the task based on the value of the `TaskId` response parameter.
    * This topic provides an example on how to provision the access configuration `ac-00jhtfl8thteu6uj****` for the account `114240524784****` in your resource directory.
    *
    * @param request ProvisionAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ProvisionAccessConfigurationResponse
   */
  async provisionAccessConfigurationWithOptions(request: ProvisionAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ProvisionAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ProvisionAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ProvisionAccessConfigurationResponse>(await this.callApi(params, req, runtime), new ProvisionAccessConfigurationResponse({}));
  }

  /**
    * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](~~340670~~) operation to query the progress of the task based on the value of the `TaskId` response parameter.
    * This topic provides an example on how to provision the access configuration `ac-00jhtfl8thteu6uj****` for the account `114240524784****` in your resource directory.
    *
    * @param request ProvisionAccessConfigurationRequest
    * @return ProvisionAccessConfigurationResponse
   */
  async provisionAccessConfiguration(request: ProvisionAccessConfigurationRequest): Promise<ProvisionAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.provisionAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to remove the SAML signing certificate whose ID is `idp-c-00dt9gnl7fmjaw9c****`.
    *
    * @param request RemoveExternalSAMLIdPCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveExternalSAMLIdPCertificateResponse
   */
  async removeExternalSAMLIdPCertificateWithOptions(request: RemoveExternalSAMLIdPCertificateRequest, runtime: $Util.RuntimeOptions): Promise<RemoveExternalSAMLIdPCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveExternalSAMLIdPCertificate",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveExternalSAMLIdPCertificateResponse>(await this.callApi(params, req, runtime), new RemoveExternalSAMLIdPCertificateResponse({}));
  }

  /**
    * This topic provides an example on how to remove the SAML signing certificate whose ID is `idp-c-00dt9gnl7fmjaw9c****`.
    *
    * @param request RemoveExternalSAMLIdPCertificateRequest
    * @return RemoveExternalSAMLIdPCertificateResponse
   */
  async removeExternalSAMLIdPCertificate(request: RemoveExternalSAMLIdPCertificateRequest): Promise<RemoveExternalSAMLIdPCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  /**
    * After you remove an inline policy from an access configuration, the policy cannot be restored.
    * This topic provides an example on how to remove the system policy `AliyunECSFullAccess` from the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request RemovePermissionPolicyFromAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemovePermissionPolicyFromAccessConfigurationResponse
   */
  async removePermissionPolicyFromAccessConfigurationWithOptions(request: RemovePermissionPolicyFromAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<RemovePermissionPolicyFromAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.permissionPolicyName)) {
      query["PermissionPolicyName"] = request.permissionPolicyName;
    }

    if (!Util.isUnset(request.permissionPolicyType)) {
      query["PermissionPolicyType"] = request.permissionPolicyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePermissionPolicyFromAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePermissionPolicyFromAccessConfigurationResponse>(await this.callApi(params, req, runtime), new RemovePermissionPolicyFromAccessConfigurationResponse({}));
  }

  /**
    * After you remove an inline policy from an access configuration, the policy cannot be restored.
    * This topic provides an example on how to remove the system policy `AliyunECSFullAccess` from the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request RemovePermissionPolicyFromAccessConfigurationRequest
    * @return RemovePermissionPolicyFromAccessConfigurationResponse
   */
  async removePermissionPolicyFromAccessConfiguration(request: RemovePermissionPolicyFromAccessConfigurationRequest): Promise<RemovePermissionPolicyFromAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePermissionPolicyFromAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot remove a user from a group that is synchronized by using SCIM.  
    * This topic provides an example on how to remove the user `u-00q8wbq42wiltcrk****` from the group `g-00jqzghi2n3o5hkh****`.
    *
    * @param request RemoveUserFromGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveUserFromGroupResponse
   */
  async removeUserFromGroupWithOptions(request: RemoveUserFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserFromGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveUserFromGroupResponse({}));
  }

  /**
    * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot remove a user from a group that is synchronized by using SCIM.  
    * This topic provides an example on how to remove the user `u-00q8wbq42wiltcrk****` from the group `g-00jqzghi2n3o5hkh****`.
    *
    * @param request RemoveUserFromGroupRequest
    * @return RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
    * If you forget your password or your password expires or is at risk, you must contact a CloudSSO administrator to reset your password.
    * >  After you enable SSO logon, your password cannot be reset.
    * This topic provides an example on how to reset the password of the user `u-00q8wbq42wiltcrk****`. The new password is automatically generated by the system.
    *
    * @param request ResetUserPasswordRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.generateRandomPassword)) {
      query["GenerateRandomPassword"] = request.generateRandomPassword;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.requirePasswordResetForNextLogin)) {
      query["RequirePasswordResetForNextLogin"] = request.requirePasswordResetForNextLogin;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetUserPassword",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetUserPasswordResponse({}));
  }

  /**
    * If you forget your password or your password expires or is at risk, you must contact a CloudSSO administrator to reset your password.
    * >  After you enable SSO logon, your password cannot be reset.
    * This topic provides an example on how to reset the password of the user `u-00q8wbq42wiltcrk****`. The new password is automatically generated by the system.
    *
    * @param request ResetUserPasswordRequest
    * @return ResetUserPasswordResponse
   */
  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
    * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an IdP.
    * You can use one of the following methods to configure a SAML IdP. You can obtain the required metadata file or parameter values from your IdP.
    * *   Use the metadata file. You can specify the `EncodedMetadataDocument` parameter to upload the metadata file.
    * *   Manually configure the IdP. You can manually specify the following parameters for your IdP: `EntityId`, `LoginUrl`, `WantRequestSigned`, and `X509Certificate`.
    * If you have configured a SAML IdP, the existing configurations are replaced after you call this operation.
    * *   If the IdP is configured by using the metadata file, all existing configurations are replaced with new configurations.
    * *   If the IdP is manually configured, the original parameter values that are different from the new parameter values are replaced.
    * >  If SSO logon is enabled, new configurations immediately take effect. Take note of the impacts on the production environment.
    * This topic provides an example on how to configure an IdP by using the metadata file within the directory `d-00fc2p61****`.
    *
    * @param request SetExternalSAMLIdentityProviderRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetExternalSAMLIdentityProviderResponse
   */
  async setExternalSAMLIdentityProviderWithOptions(request: SetExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<SetExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.encodedMetadataDocument)) {
      query["EncodedMetadataDocument"] = request.encodedMetadataDocument;
    }

    if (!Util.isUnset(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!Util.isUnset(request.loginUrl)) {
      query["LoginUrl"] = request.loginUrl;
    }

    if (!Util.isUnset(request.SSOStatus)) {
      query["SSOStatus"] = request.SSOStatus;
    }

    if (!Util.isUnset(request.wantRequestSigned)) {
      query["WantRequestSigned"] = request.wantRequestSigned;
    }

    if (!Util.isUnset(request.x509Certificate)) {
      query["X509Certificate"] = request.x509Certificate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new SetExternalSAMLIdentityProviderResponse({}));
  }

  /**
    * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an IdP.
    * You can use one of the following methods to configure a SAML IdP. You can obtain the required metadata file or parameter values from your IdP.
    * *   Use the metadata file. You can specify the `EncodedMetadataDocument` parameter to upload the metadata file.
    * *   Manually configure the IdP. You can manually specify the following parameters for your IdP: `EntityId`, `LoginUrl`, `WantRequestSigned`, and `X509Certificate`.
    * If you have configured a SAML IdP, the existing configurations are replaced after you call this operation.
    * *   If the IdP is configured by using the metadata file, all existing configurations are replaced with new configurations.
    * *   If the IdP is manually configured, the original parameter values that are different from the new parameter values are replaced.
    * >  If SSO logon is enabled, new configurations immediately take effect. Take note of the impacts on the production environment.
    * This topic provides an example on how to configure an IdP by using the metadata file within the directory `d-00fc2p61****`.
    *
    * @param request SetExternalSAMLIdentityProviderRequest
    * @return SetExternalSAMLIdentityProviderResponse
   */
  async setExternalSAMLIdentityProvider(request: SetExternalSAMLIdentityProviderRequest): Promise<SetExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
    * If a CloudSSO administrator enables username-password logon for users, CloudSSO automatically enables MFA to improve security. The administrator can call this operation to enable or disable MFA based on the business requirements.
    * This topic provides an example on how to enable MFA for users.
    *
    * @param request SetMFAAuthenticationStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetMFAAuthenticationStatusResponse
   */
  async setMFAAuthenticationStatusWithOptions(request: SetMFAAuthenticationStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetMFAAuthenticationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.MFAAuthenticationStatus)) {
      query["MFAAuthenticationStatus"] = request.MFAAuthenticationStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetMFAAuthenticationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetMFAAuthenticationStatusResponse>(await this.callApi(params, req, runtime), new SetMFAAuthenticationStatusResponse({}));
  }

  /**
    * If a CloudSSO administrator enables username-password logon for users, CloudSSO automatically enables MFA to improve security. The administrator can call this operation to enable or disable MFA based on the business requirements.
    * This topic provides an example on how to enable MFA for users.
    *
    * @param request SetMFAAuthenticationStatusRequest
    * @return SetMFAAuthenticationStatusResponse
   */
  async setMFAAuthenticationStatus(request: SetMFAAuthenticationStatusRequest): Promise<SetMFAAuthenticationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMFAAuthenticationStatusWithOptions(request, runtime);
  }

  /**
    * You can synchronize users or groups from an external identity provider (IdP) that supports SCIM 2.0 to CloudSSO only after SCIM synchronization is enabled. If you disable SCIM synchronization, you can no longer synchronize users or groups to CloudSSO. The following list describes the impacts after SCIM synchronization is enabled or disabled:
    * *   After you enable SCIM synchronization, you cannot modify or delete the users or groups that are synchronized to CloudSSO by using SCIM. In addition, you cannot add users to or remove users from the groups. However, you can change the passwords of the users and enable or disable the logon of the users.
    * *   After you disable SCIM synchronization, you can modify and delete the users and groups that are synchronized to CloudSSO by using SCIM. You can also add users to or remove users from the groups.
    * This topic provides an example on how to enable SCIM synchronization within the directory `d-00fc2p61****`.
    *
    * @param request SetSCIMSynchronizationStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetSCIMSynchronizationStatusResponse
   */
  async setSCIMSynchronizationStatusWithOptions(request: SetSCIMSynchronizationStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetSCIMSynchronizationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.SCIMSynchronizationStatus)) {
      query["SCIMSynchronizationStatus"] = request.SCIMSynchronizationStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSCIMSynchronizationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSCIMSynchronizationStatusResponse>(await this.callApi(params, req, runtime), new SetSCIMSynchronizationStatusResponse({}));
  }

  /**
    * You can synchronize users or groups from an external identity provider (IdP) that supports SCIM 2.0 to CloudSSO only after SCIM synchronization is enabled. If you disable SCIM synchronization, you can no longer synchronize users or groups to CloudSSO. The following list describes the impacts after SCIM synchronization is enabled or disabled:
    * *   After you enable SCIM synchronization, you cannot modify or delete the users or groups that are synchronized to CloudSSO by using SCIM. In addition, you cannot add users to or remove users from the groups. However, you can change the passwords of the users and enable or disable the logon of the users.
    * *   After you disable SCIM synchronization, you can modify and delete the users and groups that are synchronized to CloudSSO by using SCIM. You can also add users to or remove users from the groups.
    * This topic provides an example on how to enable SCIM synchronization within the directory `d-00fc2p61****`.
    *
    * @param request SetSCIMSynchronizationStatusRequest
    * @return SetSCIMSynchronizationStatusResponse
   */
  async setSCIMSynchronizationStatus(request: SetSCIMSynchronizationStatusRequest): Promise<SetSCIMSynchronizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  /**
    * You can modify the `Description`, `SessionDuration`, and `RelayState` parameters for an access configuration.
    * This topic provides an example on how to change the initial web page in the access configuration `ac-00jhtfl8thteu6uj****` to `https://cloudsso.console.aliyun.com`.
    *
    * @param request UpdateAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateAccessConfigurationResponse
   */
  async updateAccessConfigurationWithOptions(request: UpdateAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newRelayState)) {
      query["NewRelayState"] = request.newRelayState;
    }

    if (!Util.isUnset(request.newSessionDuration)) {
      query["NewSessionDuration"] = request.newSessionDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccessConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateAccessConfigurationResponse({}));
  }

  /**
    * You can modify the `Description`, `SessionDuration`, and `RelayState` parameters for an access configuration.
    * This topic provides an example on how to change the initial web page in the access configuration `ac-00jhtfl8thteu6uj****` to `https://cloudsso.console.aliyun.com`.
    *
    * @param request UpdateAccessConfigurationRequest
    * @return UpdateAccessConfigurationResponse
   */
  async updateAccessConfiguration(request: UpdateAccessConfigurationRequest): Promise<UpdateAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * After you change the name of a directory, the URL that is used to log on to the Cloud SSO user portal is changed. You must notify the Cloud SSO users of the correct URL. 
    * This topic provides an example on how to change the name of a directory to `new-example`.
    *
    * @param request UpdateDirectoryRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateDirectoryResponse
   */
  async updateDirectoryWithOptions(request: UpdateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newDirectoryName)) {
      query["NewDirectoryName"] = request.newDirectoryName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDirectoryResponse>(await this.callApi(params, req, runtime), new UpdateDirectoryResponse({}));
  }

  /**
    * After you change the name of a directory, the URL that is used to log on to the Cloud SSO user portal is changed. You must notify the Cloud SSO users of the correct URL. 
    * This topic provides an example on how to change the name of a directory to `new-example`.
    *
    * @param request UpdateDirectoryRequest
    * @return UpdateDirectoryResponse
   */
  async updateDirectory(request: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDirectoryWithOptions(request, runtime);
  }

  /**
    * You can modify `GroupName` and `Description` for a group.
    * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a group that is synchronized by using SCIM.
    * This topic provides an example on how to change the name of the group `g-00jqzghi2n3o5hkh****` to `NewTestGroup`.
    *
    * @param request UpdateGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateGroupResponse
   */
  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupResponse>(await this.callApi(params, req, runtime), new UpdateGroupResponse({}));
  }

  /**
    * You can modify `GroupName` and `Description` for a group.
    * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a group that is synchronized by using SCIM.
    * This topic provides an example on how to change the name of the group `g-00jqzghi2n3o5hkh****` to `NewTestGroup`.
    *
    * @param request UpdateGroupRequest
    * @return UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to modify an inline policy that is created for the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request UpdateInlinePolicyForAccessConfigurationRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateInlinePolicyForAccessConfigurationResponse
   */
  async updateInlinePolicyForAccessConfigurationWithOptions(request: UpdateInlinePolicyForAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInlinePolicyForAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessConfigurationId)) {
      query["AccessConfigurationId"] = request.accessConfigurationId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.inlinePolicyName)) {
      query["InlinePolicyName"] = request.inlinePolicyName;
    }

    if (!Util.isUnset(request.newInlinePolicyDocument)) {
      query["NewInlinePolicyDocument"] = request.newInlinePolicyDocument;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInlinePolicyForAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInlinePolicyForAccessConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateInlinePolicyForAccessConfigurationResponse({}));
  }

  /**
    * This topic provides an example on how to modify an inline policy that is created for the access configuration `ac-00jhtfl8thteu6uj****`.
    *
    * @param request UpdateInlinePolicyForAccessConfigurationRequest
    * @return UpdateInlinePolicyForAccessConfigurationResponse
   */
  async updateInlinePolicyForAccessConfiguration(request: UpdateInlinePolicyForAccessConfigurationRequest): Promise<UpdateInlinePolicyForAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInlinePolicyForAccessConfigurationWithOptions(request, runtime);
  }

  /**
    * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
    * This topic provides an example on how to enable MFA for all CloudSSO users that belong to the directory named `d-00fc2p61****`.
    *
    * @param request UpdateMFAAuthenticationSettingsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateMFAAuthenticationSettingsResponse
   */
  async updateMFAAuthenticationSettingsWithOptions(request: UpdateMFAAuthenticationSettingsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMFAAuthenticationSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.MFAAuthenticationSettings)) {
      query["MFAAuthenticationSettings"] = request.MFAAuthenticationSettings;
    }

    if (!Util.isUnset(request.operationForRiskLogin)) {
      query["OperationForRiskLogin"] = request.operationForRiskLogin;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new UpdateMFAAuthenticationSettingsResponse({}));
  }

  /**
    * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
    * This topic provides an example on how to enable MFA for all CloudSSO users that belong to the directory named `d-00fc2p61****`.
    *
    * @param request UpdateMFAAuthenticationSettingsRequest
    * @return UpdateMFAAuthenticationSettingsResponse
   */
  async updateMFAAuthenticationSettings(request: UpdateMFAAuthenticationSettingsRequest): Promise<UpdateMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to disable the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`. After the SCIM credential is disabled, the synchronization task that uses the SCIM credential fails. You can call this operation again to enable the SCIM credential.
    *
    * @param request UpdateSCIMServerCredentialStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateSCIMServerCredentialStatusResponse
   */
  async updateSCIMServerCredentialStatusWithOptions(request: UpdateSCIMServerCredentialStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSCIMServerCredentialStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.credentialId)) {
      query["CredentialId"] = request.credentialId;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newStatus)) {
      query["NewStatus"] = request.newStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSCIMServerCredentialStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSCIMServerCredentialStatusResponse>(await this.callApi(params, req, runtime), new UpdateSCIMServerCredentialStatusResponse({}));
  }

  /**
    * This topic provides an example on how to disable the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`. After the SCIM credential is disabled, the synchronization task that uses the SCIM credential fails. You can call this operation again to enable the SCIM credential.
    *
    * @param request UpdateSCIMServerCredentialStatusRequest
    * @return UpdateSCIMServerCredentialStatusResponse
   */
  async updateSCIMServerCredentialStatus(request: UpdateSCIMServerCredentialStatusRequest): Promise<UpdateSCIMServerCredentialStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSCIMServerCredentialStatusWithOptions(request, runtime);
  }

  /**
    * You can modify `FirstName`, `LastName`, `DisplayName`, `Email`, and `Description` for a user. You cannot modify `UserName` for a user.
    * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a user that is synchronized by using SCIM.
    * This topic provides an example on how to change the email address of the user whose ID is `u-00q8wbq42wiltcrk****` to `AliceLee@example.com`.
    *
    * @param request UpdateUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!Util.isUnset(request.newEmail)) {
      query["NewEmail"] = request.newEmail;
    }

    if (!Util.isUnset(request.newFirstName)) {
      query["NewFirstName"] = request.newFirstName;
    }

    if (!Util.isUnset(request.newLastName)) {
      query["NewLastName"] = request.newLastName;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
    * You can modify `FirstName`, `LastName`, `DisplayName`, `Email`, and `Description` for a user. You cannot modify `UserName` for a user.
    * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a user that is synchronized by using SCIM.
    * This topic provides an example on how to change the email address of the user whose ID is `u-00q8wbq42wiltcrk****` to `AliceLee@example.com`.
    *
    * @param request UpdateUserRequest
    * @return UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
    * If you call the [UpdateMFAAuthenticationSettings](~~450134~~) operation to set the MFAAuthenticationSettings parameter to `Byuser`, user-specific settings are applied. Then, you must call the UpdateUserMFAAuthenticationSettings operation to configure MFA for each user.
    * By default, the MFAAuthenticationSettings parameter is set to `Enabled` for a new user.
    * This topic provides an example on how to enable MFA for the user named `u-00q8wbq42wiltcrk****`.
    *
    * @param request UpdateUserMFAAuthenticationSettingsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateUserMFAAuthenticationSettingsResponse
   */
  async updateUserMFAAuthenticationSettingsWithOptions(request: UpdateUserMFAAuthenticationSettingsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserMFAAuthenticationSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userMFAAuthenticationSettings)) {
      query["UserMFAAuthenticationSettings"] = request.userMFAAuthenticationSettings;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserMFAAuthenticationSettings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserMFAAuthenticationSettingsResponse>(await this.callApi(params, req, runtime), new UpdateUserMFAAuthenticationSettingsResponse({}));
  }

  /**
    * If you call the [UpdateMFAAuthenticationSettings](~~450134~~) operation to set the MFAAuthenticationSettings parameter to `Byuser`, user-specific settings are applied. Then, you must call the UpdateUserMFAAuthenticationSettings operation to configure MFA for each user.
    * By default, the MFAAuthenticationSettings parameter is set to `Enabled` for a new user.
    * This topic provides an example on how to enable MFA for the user named `u-00q8wbq42wiltcrk****`.
    *
    * @param request UpdateUserMFAAuthenticationSettingsRequest
    * @return UpdateUserMFAAuthenticationSettingsResponse
   */
  async updateUserMFAAuthenticationSettings(request: UpdateUserMFAAuthenticationSettingsRequest): Promise<UpdateUserMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  async updateUserProvisioningWithOptions(request: UpdateUserProvisioningRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserProvisioningResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newDeletionStrategy)) {
      query["NewDeletionStrategy"] = request.newDeletionStrategy;
    }

    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newDuplicationStrategy)) {
      query["NewDuplicationStrategy"] = request.newDuplicationStrategy;
    }

    if (!Util.isUnset(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserProvisioning",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserProvisioningResponse>(await this.callApi(params, req, runtime), new UpdateUserProvisioningResponse({}));
  }

  async updateUserProvisioning(request: UpdateUserProvisioningRequest): Promise<UpdateUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserProvisioningWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to change the status of the user whose ID is `u-00q8wbq42wiltcrk****` to Disabled. Users in the Disabled state cannot log on to the CloudSSO user portal.
    *
    * @param request UpdateUserStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateUserStatusResponse
   */
  async updateUserStatusWithOptions(request: UpdateUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newStatus)) {
      query["NewStatus"] = request.newStatus;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserStatusResponse({}));
  }

  /**
    * This topic provides an example on how to change the status of the user whose ID is `u-00q8wbq42wiltcrk****` to Disabled. Users in the Disabled state cannot log on to the CloudSSO user portal.
    *
    * @param request UpdateUserStatusRequest
    * @return UpdateUserStatusResponse
   */
  async updateUserStatus(request: UpdateUserStatusRequest): Promise<UpdateUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserStatusWithOptions(request, runtime);
  }

}
