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
  body: AddExternalSAMLIdPCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: AddPermissionPolicyToAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: AddUserToGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ClearExternalSAMLIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateAccessAssignmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateSCIMServerCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserResponseBody,
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
  body: DeleteAccessAssignmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteMFADeviceForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteSCIMServerCredentialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
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
  body: DeprovisionAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DisableServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: EnableServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetDirectorySAMLServiceProviderInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetDirectoryStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetExternalSAMLIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGroupResponseBody,
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
  body: GetMFAAuthenticationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetSCIMSynchronizationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResponseBody,
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
  body: ListAccessAssignmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListAccessConfigurationProvisioningsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListAccessConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListExternalSAMLIdPCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListGroupMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListJoinedGroupsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListMFADevicesForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListPermissionPoliciesInAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListSCIMServerCredentialsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTasksResponseBody,
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
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ProvisionAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RemoveExternalSAMLIdPCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RemovePermissionPolicyFromAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RemoveUserFromGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ResetUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetExternalSAMLIdentityProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetMFAAuthenticationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SetSCIMSynchronizationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateInlinePolicyForAccessConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInlinePolicyForAccessConfigurationResponseBody,
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
  body: UpdateSCIMServerCredentialStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserResponseBody,
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
  body: UpdateUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

  async addExternalSAMLIdPCertificateWithOptions(request: AddExternalSAMLIdPCertificateRequest, runtime: $Util.RuntimeOptions): Promise<AddExternalSAMLIdPCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["X509Certificate"] = request.x509Certificate;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddExternalSAMLIdPCertificate",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddExternalSAMLIdPCertificateResponse>(await this.callApi(params, req, runtime), new AddExternalSAMLIdPCertificateResponse({}));
  }

  async addExternalSAMLIdPCertificate(request: AddExternalSAMLIdPCertificateRequest): Promise<AddExternalSAMLIdPCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  async addPermissionPolicyToAccessConfigurationWithOptions(request: AddPermissionPolicyToAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<AddPermissionPolicyToAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["InlinePolicyDocument"] = request.inlinePolicyDocument;
    query["PermissionPolicyName"] = request.permissionPolicyName;
    query["PermissionPolicyType"] = request.permissionPolicyType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddPermissionPolicyToAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddPermissionPolicyToAccessConfigurationResponse>(await this.callApi(params, req, runtime), new AddPermissionPolicyToAccessConfigurationResponse({}));
  }

  async addPermissionPolicyToAccessConfiguration(request: AddPermissionPolicyToAccessConfigurationRequest): Promise<AddPermissionPolicyToAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPermissionPolicyToAccessConfigurationWithOptions(request, runtime);
  }

  async addUserToGroupWithOptions(request: AddUserToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GroupId"] = request.groupId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "AddUserToGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddUserToGroupResponse>(await this.callApi(params, req, runtime), new AddUserToGroupResponse({}));
  }

  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  async clearExternalSAMLIdentityProviderWithOptions(request: ClearExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<ClearExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ClearExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ClearExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new ClearExternalSAMLIdentityProviderResponse({}));
  }

  async clearExternalSAMLIdentityProvider(request: ClearExternalSAMLIdentityProviderRequest): Promise<ClearExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  async createAccessAssignmentWithOptions(request: CreateAccessAssignmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessAssignmentResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["PrincipalId"] = request.principalId;
    query["PrincipalType"] = request.principalType;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessAssignment",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessAssignmentResponse>(await this.callApi(params, req, runtime), new CreateAccessAssignmentResponse({}));
  }

  async createAccessAssignment(request: CreateAccessAssignmentRequest): Promise<CreateAccessAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessAssignmentWithOptions(request, runtime);
  }

  async createAccessConfigurationWithOptions(request: CreateAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationName"] = request.accessConfigurationName;
    query["Description"] = request.description;
    query["DirectoryId"] = request.directoryId;
    query["RelayState"] = request.relayState;
    query["SessionDuration"] = request.sessionDuration;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessConfigurationResponse>(await this.callApi(params, req, runtime), new CreateAccessConfigurationResponse({}));
  }

  async createAccessConfiguration(request: CreateAccessConfigurationRequest): Promise<CreateAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessConfigurationWithOptions(request, runtime);
  }

  async createDirectoryWithOptions(request: CreateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryName"] = request.directoryName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDirectoryResponse>(await this.callApi(params, req, runtime), new CreateDirectoryResponse({}));
  }

  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["Description"] = request.description;
    query["DirectoryId"] = request.directoryId;
    query["GroupName"] = request.groupName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  async createSCIMServerCredentialWithOptions(request: CreateSCIMServerCredentialRequest, runtime: $Util.RuntimeOptions): Promise<CreateSCIMServerCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateSCIMServerCredential",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSCIMServerCredentialResponse>(await this.callApi(params, req, runtime), new CreateSCIMServerCredentialResponse({}));
  }

  async createSCIMServerCredential(request: CreateSCIMServerCredentialRequest): Promise<CreateSCIMServerCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSCIMServerCredentialWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["Description"] = request.description;
    query["DirectoryId"] = request.directoryId;
    query["DisplayName"] = request.displayName;
    query["Email"] = request.email;
    query["FirstName"] = request.firstName;
    query["LastName"] = request.lastName;
    query["Status"] = request.status;
    query["UserName"] = request.userName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async deleteAccessAssignmentWithOptions(request: DeleteAccessAssignmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessAssignmentResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DeprovisionStrategy"] = request.deprovisionStrategy;
    query["DirectoryId"] = request.directoryId;
    query["PrincipalId"] = request.principalId;
    query["PrincipalType"] = request.principalType;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessAssignment",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessAssignmentResponse>(await this.callApi(params, req, runtime), new DeleteAccessAssignmentResponse({}));
  }

  async deleteAccessAssignment(request: DeleteAccessAssignmentRequest): Promise<DeleteAccessAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessAssignmentWithOptions(request, runtime);
  }

  async deleteAccessConfigurationWithOptions(request: DeleteAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["ForceRemovePermissionPolicies"] = request.forceRemovePermissionPolicies;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessConfigurationResponse>(await this.callApi(params, req, runtime), new DeleteAccessConfigurationResponse({}));
  }

  async deleteAccessConfiguration(request: DeleteAccessConfigurationRequest): Promise<DeleteAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessConfigurationWithOptions(request, runtime);
  }

  async deleteDirectoryWithOptions(request: DeleteDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDirectoryResponse>(await this.callApi(params, req, runtime), new DeleteDirectoryResponse({}));
  }

  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GroupId"] = request.groupId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteMFADeviceForUserWithOptions(request: DeleteMFADeviceForUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMFADeviceForUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["MFADeviceId"] = request.MFADeviceId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMFADeviceForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMFADeviceForUserResponse>(await this.callApi(params, req, runtime), new DeleteMFADeviceForUserResponse({}));
  }

  async deleteMFADeviceForUser(request: DeleteMFADeviceForUserRequest): Promise<DeleteMFADeviceForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMFADeviceForUserWithOptions(request, runtime);
  }

  async deleteSCIMServerCredentialWithOptions(request: DeleteSCIMServerCredentialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSCIMServerCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    query["CredentialId"] = request.credentialId;
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSCIMServerCredential",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSCIMServerCredentialResponse>(await this.callApi(params, req, runtime), new DeleteSCIMServerCredentialResponse({}));
  }

  async deleteSCIMServerCredential(request: DeleteSCIMServerCredentialRequest): Promise<DeleteSCIMServerCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSCIMServerCredentialWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deprovisionAccessConfigurationWithOptions(request: DeprovisionAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DeprovisionAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeprovisionAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeprovisionAccessConfigurationResponse>(await this.callApi(params, req, runtime), new DeprovisionAccessConfigurationResponse({}));
  }

  async deprovisionAccessConfiguration(request: DeprovisionAccessConfigurationRequest): Promise<DeprovisionAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deprovisionAccessConfigurationWithOptions(request, runtime);
  }

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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableServiceResponse>(await this.callApi(params, req, runtime), new DisableServiceResponse({}));
  }

  async disableService(): Promise<DisableServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableServiceWithOptions(runtime);
  }

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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableServiceResponse>(await this.callApi(params, req, runtime), new EnableServiceResponse({}));
  }

  async enableService(): Promise<EnableServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableServiceWithOptions(runtime);
  }

  async getAccessConfigurationWithOptions(request: GetAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAccessConfigurationResponse>(await this.callApi(params, req, runtime), new GetAccessConfigurationResponse({}));
  }

  async getAccessConfiguration(request: GetAccessConfigurationRequest): Promise<GetAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessConfigurationWithOptions(request, runtime);
  }

  async getDirectoryWithOptions(request: GetDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDirectoryResponse>(await this.callApi(params, req, runtime), new GetDirectoryResponse({}));
  }

  async getDirectory(request: GetDirectoryRequest): Promise<GetDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryWithOptions(request, runtime);
  }

  async getDirectorySAMLServiceProviderInfoWithOptions(request: GetDirectorySAMLServiceProviderInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectorySAMLServiceProviderInfoResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectorySAMLServiceProviderInfo",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDirectorySAMLServiceProviderInfoResponse>(await this.callApi(params, req, runtime), new GetDirectorySAMLServiceProviderInfoResponse({}));
  }

  async getDirectorySAMLServiceProviderInfo(request: GetDirectorySAMLServiceProviderInfoRequest): Promise<GetDirectorySAMLServiceProviderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectorySAMLServiceProviderInfoWithOptions(request, runtime);
  }

  async getDirectoryStatisticsWithOptions(request: GetDirectoryStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectoryStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetDirectoryStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDirectoryStatisticsResponse>(await this.callApi(params, req, runtime), new GetDirectoryStatisticsResponse({}));
  }

  async getDirectoryStatistics(request: GetDirectoryStatisticsRequest): Promise<GetDirectoryStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryStatisticsWithOptions(request, runtime);
  }

  async getExternalSAMLIdentityProviderWithOptions(request: GetExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<GetExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new GetExternalSAMLIdentityProviderResponse({}));
  }

  async getExternalSAMLIdentityProvider(request: GetExternalSAMLIdentityProviderRequest): Promise<GetExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  async getGroupWithOptions(request: GetGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GroupId"] = request.groupId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  async getMFAAuthenticationStatusWithOptions(request: GetMFAAuthenticationStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetMFAAuthenticationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetMFAAuthenticationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMFAAuthenticationStatusResponse>(await this.callApi(params, req, runtime), new GetMFAAuthenticationStatusResponse({}));
  }

  async getMFAAuthenticationStatus(request: GetMFAAuthenticationStatusRequest): Promise<GetMFAAuthenticationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationStatusWithOptions(request, runtime);
  }

  async getSCIMSynchronizationStatusWithOptions(request: GetSCIMSynchronizationStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetSCIMSynchronizationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetSCIMSynchronizationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSCIMSynchronizationStatusResponse>(await this.callApi(params, req, runtime), new GetSCIMSynchronizationStatusResponse({}));
  }

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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceStatusResponse>(await this.callApi(params, req, runtime), new GetServiceStatusResponse({}));
  }

  async getServiceStatus(): Promise<GetServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceStatusWithOptions(runtime);
  }

  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  async getTaskStatusWithOptions(request: GetTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskStatusResponse>(await this.callApi(params, req, runtime), new GetTaskStatusResponse({}));
  }

  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async listAccessAssignmentsWithOptions(request: ListAccessAssignmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessAssignmentsResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["PrincipalId"] = request.principalId;
    query["PrincipalType"] = request.principalType;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessAssignments",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAccessAssignmentsResponse>(await this.callApi(params, req, runtime), new ListAccessAssignmentsResponse({}));
  }

  async listAccessAssignments(request: ListAccessAssignmentsRequest): Promise<ListAccessAssignmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessAssignmentsWithOptions(request, runtime);
  }

  async listAccessConfigurationProvisioningsWithOptions(request: ListAccessConfigurationProvisioningsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessConfigurationProvisioningsResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["ProvisioningStatus"] = request.provisioningStatus;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessConfigurationProvisionings",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAccessConfigurationProvisioningsResponse>(await this.callApi(params, req, runtime), new ListAccessConfigurationProvisioningsResponse({}));
  }

  async listAccessConfigurationProvisionings(request: ListAccessConfigurationProvisioningsRequest): Promise<ListAccessConfigurationProvisioningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessConfigurationProvisioningsWithOptions(request, runtime);
  }

  async listAccessConfigurationsWithOptions(request: ListAccessConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["Filter"] = request.filter;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["StatusNotifications"] = request.statusNotifications;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessConfigurations",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAccessConfigurationsResponse>(await this.callApi(params, req, runtime), new ListAccessConfigurationsResponse({}));
  }

  async listAccessConfigurations(request: ListAccessConfigurationsRequest): Promise<ListAccessConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessConfigurationsWithOptions(request, runtime);
  }

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
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDirectoriesResponse>(await this.callApi(params, req, runtime), new ListDirectoriesResponse({}));
  }

  async listDirectories(): Promise<ListDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoriesWithOptions(runtime);
  }

  async listExternalSAMLIdPCertificatesWithOptions(request: ListExternalSAMLIdPCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListExternalSAMLIdPCertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListExternalSAMLIdPCertificates",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExternalSAMLIdPCertificatesResponse>(await this.callApi(params, req, runtime), new ListExternalSAMLIdPCertificatesResponse({}));
  }

  async listExternalSAMLIdPCertificates(request: ListExternalSAMLIdPCertificatesRequest): Promise<ListExternalSAMLIdPCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExternalSAMLIdPCertificatesWithOptions(request, runtime);
  }

  async listGroupMembersWithOptions(request: ListGroupMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupMembersResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GroupId"] = request.groupId;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupMembers",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupMembersResponse>(await this.callApi(params, req, runtime), new ListGroupMembersResponse({}));
  }

  async listGroupMembers(request: ListGroupMembersRequest): Promise<ListGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupMembersWithOptions(request, runtime);
  }

  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["Filter"] = request.filter;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["ProvisionType"] = request.provisionType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  async listJoinedGroupsForUserWithOptions(request: ListJoinedGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListJoinedGroupsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListJoinedGroupsForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJoinedGroupsForUserResponse>(await this.callApi(params, req, runtime), new ListJoinedGroupsForUserResponse({}));
  }

  async listJoinedGroupsForUser(request: ListJoinedGroupsForUserRequest): Promise<ListJoinedGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJoinedGroupsForUserWithOptions(request, runtime);
  }

  async listMFADevicesForUserWithOptions(request: ListMFADevicesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListMFADevicesForUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListMFADevicesForUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMFADevicesForUserResponse>(await this.callApi(params, req, runtime), new ListMFADevicesForUserResponse({}));
  }

  async listMFADevicesForUser(request: ListMFADevicesForUserRequest): Promise<ListMFADevicesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMFADevicesForUserWithOptions(request, runtime);
  }

  async listPermissionPoliciesInAccessConfigurationWithOptions(request: ListPermissionPoliciesInAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ListPermissionPoliciesInAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["PermissionPolicyType"] = request.permissionPolicyType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListPermissionPoliciesInAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionPoliciesInAccessConfigurationResponse>(await this.callApi(params, req, runtime), new ListPermissionPoliciesInAccessConfigurationResponse({}));
  }

  async listPermissionPoliciesInAccessConfiguration(request: ListPermissionPoliciesInAccessConfigurationRequest): Promise<ListPermissionPoliciesInAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionPoliciesInAccessConfigurationWithOptions(request, runtime);
  }

  async listSCIMServerCredentialsWithOptions(request: ListSCIMServerCredentialsRequest, runtime: $Util.RuntimeOptions): Promise<ListSCIMServerCredentialsResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListSCIMServerCredentials",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSCIMServerCredentialsResponse>(await this.callApi(params, req, runtime), new ListSCIMServerCredentialsResponse({}));
  }

  async listSCIMServerCredentials(request: ListSCIMServerCredentialsRequest): Promise<ListSCIMServerCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSCIMServerCredentialsWithOptions(request, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["Filter"] = request.filter;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["PrincipalId"] = request.principalId;
    query["PrincipalType"] = request.principalType;
    query["Status"] = request.status;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    query["TaskType"] = request.taskType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["Filter"] = request.filter;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["ProvisionType"] = request.provisionType;
    query["Status"] = request.status;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async provisionAccessConfigurationWithOptions(request: ProvisionAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<ProvisionAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["TargetId"] = request.targetId;
    query["TargetType"] = request.targetType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ProvisionAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ProvisionAccessConfigurationResponse>(await this.callApi(params, req, runtime), new ProvisionAccessConfigurationResponse({}));
  }

  async provisionAccessConfiguration(request: ProvisionAccessConfigurationRequest): Promise<ProvisionAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.provisionAccessConfigurationWithOptions(request, runtime);
  }

  async removeExternalSAMLIdPCertificateWithOptions(request: RemoveExternalSAMLIdPCertificateRequest, runtime: $Util.RuntimeOptions): Promise<RemoveExternalSAMLIdPCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    query["CertificateId"] = request.certificateId;
    query["DirectoryId"] = request.directoryId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RemoveExternalSAMLIdPCertificate",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveExternalSAMLIdPCertificateResponse>(await this.callApi(params, req, runtime), new RemoveExternalSAMLIdPCertificateResponse({}));
  }

  async removeExternalSAMLIdPCertificate(request: RemoveExternalSAMLIdPCertificateRequest): Promise<RemoveExternalSAMLIdPCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  async removePermissionPolicyFromAccessConfigurationWithOptions(request: RemovePermissionPolicyFromAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<RemovePermissionPolicyFromAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["PermissionPolicyName"] = request.permissionPolicyName;
    query["PermissionPolicyType"] = request.permissionPolicyType;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RemovePermissionPolicyFromAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemovePermissionPolicyFromAccessConfigurationResponse>(await this.callApi(params, req, runtime), new RemovePermissionPolicyFromAccessConfigurationResponse({}));
  }

  async removePermissionPolicyFromAccessConfiguration(request: RemovePermissionPolicyFromAccessConfigurationRequest): Promise<RemovePermissionPolicyFromAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePermissionPolicyFromAccessConfigurationWithOptions(request, runtime);
  }

  async removeUserFromGroupWithOptions(request: RemoveUserFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GroupId"] = request.groupId;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserFromGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveUserFromGroupResponse({}));
  }

  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GenerateRandomPassword"] = request.generateRandomPassword;
    query["Password"] = request.password;
    query["RequirePasswordResetForNextLogin"] = request.requirePasswordResetForNextLogin;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ResetUserPassword",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetUserPasswordResponse({}));
  }

  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  async setExternalSAMLIdentityProviderWithOptions(request: SetExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<SetExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["EncodedMetadataDocument"] = request.encodedMetadataDocument;
    query["EntityId"] = request.entityId;
    query["LoginUrl"] = request.loginUrl;
    query["SSOStatus"] = request.SSOStatus;
    query["WantRequestSigned"] = request.wantRequestSigned;
    query["X509Certificate"] = request.x509Certificate;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SetExternalSAMLIdentityProvider",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetExternalSAMLIdentityProviderResponse>(await this.callApi(params, req, runtime), new SetExternalSAMLIdentityProviderResponse({}));
  }

  async setExternalSAMLIdentityProvider(request: SetExternalSAMLIdentityProviderRequest): Promise<SetExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  async setMFAAuthenticationStatusWithOptions(request: SetMFAAuthenticationStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetMFAAuthenticationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["MFAAuthenticationStatus"] = request.MFAAuthenticationStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SetMFAAuthenticationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetMFAAuthenticationStatusResponse>(await this.callApi(params, req, runtime), new SetMFAAuthenticationStatusResponse({}));
  }

  async setMFAAuthenticationStatus(request: SetMFAAuthenticationStatusRequest): Promise<SetMFAAuthenticationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMFAAuthenticationStatusWithOptions(request, runtime);
  }

  async setSCIMSynchronizationStatusWithOptions(request: SetSCIMSynchronizationStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetSCIMSynchronizationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["SCIMSynchronizationStatus"] = request.SCIMSynchronizationStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SetSCIMSynchronizationStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SetSCIMSynchronizationStatusResponse>(await this.callApi(params, req, runtime), new SetSCIMSynchronizationStatusResponse({}));
  }

  async setSCIMSynchronizationStatus(request: SetSCIMSynchronizationStatusRequest): Promise<SetSCIMSynchronizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  async updateAccessConfigurationWithOptions(request: UpdateAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["NewDescription"] = request.newDescription;
    query["NewRelayState"] = request.newRelayState;
    query["NewSessionDuration"] = request.newSessionDuration;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccessConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateAccessConfigurationResponse({}));
  }

  async updateAccessConfiguration(request: UpdateAccessConfigurationRequest): Promise<UpdateAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessConfigurationWithOptions(request, runtime);
  }

  async updateDirectoryWithOptions(request: UpdateDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["NewDirectoryName"] = request.newDirectoryName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDirectory",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDirectoryResponse>(await this.callApi(params, req, runtime), new UpdateDirectoryResponse({}));
  }

  async updateDirectory(request: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDirectoryWithOptions(request, runtime);
  }

  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["GroupId"] = request.groupId;
    query["NewDescription"] = request.newDescription;
    query["NewGroupName"] = request.newGroupName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupResponse>(await this.callApi(params, req, runtime), new UpdateGroupResponse({}));
  }

  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  async updateInlinePolicyForAccessConfigurationWithOptions(request: UpdateInlinePolicyForAccessConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInlinePolicyForAccessConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    query["AccessConfigurationId"] = request.accessConfigurationId;
    query["DirectoryId"] = request.directoryId;
    query["InlinePolicyName"] = request.inlinePolicyName;
    query["NewInlinePolicyDocument"] = request.newInlinePolicyDocument;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInlinePolicyForAccessConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInlinePolicyForAccessConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateInlinePolicyForAccessConfigurationResponse({}));
  }

  async updateInlinePolicyForAccessConfiguration(request: UpdateInlinePolicyForAccessConfigurationRequest): Promise<UpdateInlinePolicyForAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInlinePolicyForAccessConfigurationWithOptions(request, runtime);
  }

  async updateSCIMServerCredentialStatusWithOptions(request: UpdateSCIMServerCredentialStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSCIMServerCredentialStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["CredentialId"] = request.credentialId;
    query["DirectoryId"] = request.directoryId;
    query["NewStatus"] = request.newStatus;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSCIMServerCredentialStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSCIMServerCredentialStatusResponse>(await this.callApi(params, req, runtime), new UpdateSCIMServerCredentialStatusResponse({}));
  }

  async updateSCIMServerCredentialStatus(request: UpdateSCIMServerCredentialStatusRequest): Promise<UpdateSCIMServerCredentialStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSCIMServerCredentialStatusWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["NewDescription"] = request.newDescription;
    query["NewDisplayName"] = request.newDisplayName;
    query["NewEmail"] = request.newEmail;
    query["NewFirstName"] = request.newFirstName;
    query["NewLastName"] = request.newLastName;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async updateUserStatusWithOptions(request: UpdateUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    query["DirectoryId"] = request.directoryId;
    query["NewStatus"] = request.newStatus;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserStatus",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserStatusResponse({}));
  }

  async updateUserStatus(request: UpdateUserStatusRequest): Promise<UpdateUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserStatusWithOptions(request, runtime);
  }

}
