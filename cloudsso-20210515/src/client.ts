// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddExternalSAMLIdPCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The X.509 certificate in the PEM format.
   * 
   * The certificate is provided by the SAML IdP.
   * 
   * @example
   * MIIC8DCCAdigAwIBAgIQP9eomUYGeoND****
   */
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
  /**
   * @remarks
   * The ID of the SAML signing certificate.
   * 
   * @example
   * idp-c-00wk2fb4foracls0****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12B3E332-DD16-515B-B695-39BA233AA172
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddExternalSAMLIdPCertificateResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The configurations of the inline policy.
   * 
   * The value can be up to 4,096 characters in length.
   * 
   * If you set `PermissionPolicyType` to `Inline`, you must specify this parameter. For more information about the syntax and structure of RAM policies, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}
   */
  inlinePolicyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * *   If you set `PermissionPolicyType` to `System`, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
   * *   If you set `PermissionPolicyType` to `Inline`, you must set this parameter to the name of the inline policy. A custom value is supported.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   System: system policy. Resource Access Management (RAM) system policies are reused.
   * *   Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
   * 
   * @example
   * System
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7C6E839-FB65-59BE-B753-003AA8AF7DF7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddPermissionPolicyToAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F76AF4FC-25E4-5CF1-B7CB-74F3CB72F0F0
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToGroupResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96D1E5FF-0301-5636-8D33-071E033CFB82
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearExternalSAMLIdentityProviderResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * *   If you set `PrincipalType` to `User`, set `PrincipalId` to the ID of the CloudSSO user.
   * *   If you set `PrincipalType` to `Group`, set `PrincipalId` to the ID of the CloudSSO group.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4726AA56-E138-5C99-85E4-F493536D042F
   */
  requestId?: string;
  /**
   * @remarks
   * The queried task.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessAssignmentResponseBody;
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
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * The name can contain letters, digits, and hyphens (-).
   * 
   * The name can be up to 32 characters in length.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
   * 
   * Default value: 3600. The value indicates 1 hour.
   * 
   * @example
   * 3600
   */
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
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: CreateAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3A41736-A050-50B6-ABC5-590F376A0044
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The name of the directory. The name must be globally unique.
   * 
   * The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
   * 
   * The name must be 2 to 64 characters in length.
   * 
   * >  If you do not specify this parameter, the value of this parameter is automatically generated by the system.
   * 
   * @example
   * example
   */
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
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: CreateDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADADC31D-90EE-5459-99B0-D83DF07769A3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDirectoryResponseBody;
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
  /**
   * @remarks
   * The description of the group.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * The name can be up to 128 characters in length.
   * 
   * @example
   * TestGroup
   */
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
  /**
   * @remarks
   * The information about the group.
   */
  group?: CreateGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20E9650E-EC23-593E-933F-EA0D280D040C
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D2E5180-7ACF-57FF-A56C-26A49ABEBFF7
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SCIM credential.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSCIMServerCredentialResponseBody;
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
  /**
   * @remarks
   * The description of the user.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * The name can be up to 256 characters in length.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user. The email address must be unique within the directory.
   * 
   * The email address can be up to 128 characters in length.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the user.
   * 
   * The name can be up to 64 characters in length.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * The name can be up to 64 characters in length.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled. This is the default value.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The name of the user. The name must be unique within the directory. The name cannot be changed.
   * 
   * The name can contain numbers, letters, and the following special characters: `@_-.`
   * 
   * The name can be up to 64 characters in length.
   * 
   * @example
   * Alice
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the user.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
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
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If you set the `PrincipalType` parameter to `Group`, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If you set the `PrincipalType` parameter to `User`, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user provisioning.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserProvisioningResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * Specifies whether to de-provision the access configuration when you remove the access permissions from the CloudSSO identity. The access configuration is used to assign the access permissions, and the identity is the only one that uses the access configuration and is associated with the account. Valid values:
   * 
   * *   DeprovisionForLastAccessAssignmentOnAccount: de-provisions the access configuration.
   * *   None: does not de-provision the access configuration. This is the default value.
   * 
   * @example
   * None
   */
  deprovisionStrategy?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * *   If you set `PrincipalType` to `User`, set `PrincipalId` to the ID of the CloudSSO user.
   * *   If you set `PrincipalType` to `Group`, set `PrincipalId` to the ID of the CloudSSO group.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C9D0CF4-5CE8-5CE6-932A-826EF4ADD007
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessAssignmentResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-001j9mcm3k7335bc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly remove system policies and inline policies. Valid values:
   * 
   * *   true: When you delete the access configuration, the associated system policies and inline policies are forcibly removed.
   * *   false: When you delete the access configuration, the associated system policies and inline policies are not forcibly removed. This is the default value. If these policies exist in the access configuration, the deletion fails. Before you delete the access configuration, you must remove the system policies and inline policies. For more information, see [RemovePermissionPolicyFromAccessConfiguration](https://help.aliyun.com/document_detail/336904.html).
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDirectoryResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F723DE01-6276-5DC4-9B1F-9CBE3E1748B2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the MFA device.
   * 
   * You can call the [ListMFADevicesForUser](https://help.aliyun.com/document_detail/333531.html) operation to query the IDs of MFA devices.
   * 
   * @example
   * mfa-00ujhet8pycljj7j****
   */
  MFADeviceId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B9982ED-FD0D-5622-8EA0-7B768685DCE7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMFADeviceForUserResponseBody;
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
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CE8B990-193D-50CE-A604-69F3E7DCE740
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSCIMServerCredentialResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E598602-AC67-56EF-B7CC-2927C30AA0A8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
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
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * >  If you do not specify this parameter, the deletion policy that is configured when you create the RAM user provisioning is used.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserProvisioningResponseBody;
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

export class DeleteUserProvisioningEventRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * You can call the [ListUserProvisioningEvents](https://help.aliyun.com/document_detail/2636305.html) operation to query the value of `EventId`.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      eventId: 'EventId',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      eventId: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserProvisioningEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9287DA5-FD59-32A0-A810-1962E8B58ABB
   */
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

export class DeleteUserProvisioningEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserProvisioningEventResponseBody;
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
      body: DeleteUserProvisioningEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeprovisionAccessConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 584FE9D0-D1AC-5B19-A39C-8D244FC0538C
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeprovisionAccessConfigurationResponseBody;
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

export class DisableDelegateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the delegated administrator account of CloudSSO.
   * 
   * @example
   * 1200971777065046
   */
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

export class DisableDelegateAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12B3E332-DD16-515B-B695-39BA233AA172
   */
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

export class DisableDelegateAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableDelegateAccountResponseBody;
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
      body: DisableDelegateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3257EAD2-8723-1F26-B69C-F8707D8B565D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableServiceResponseBody;
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

export class EnableDelegateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the delegated administrator account of CloudSSO.
   * 
   * @example
   * 180658567986****
   */
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

export class EnableDelegateAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
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

export class EnableDelegateAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableDelegateAccountResponseBody;
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
      body: EnableDelegateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D57EAD2-8723-1F26-B69C-F8707D8B565D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableServiceResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: GetAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D5E40508-483B-52F6-993C-D880B0F87591
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: GetDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA6A9E4B-8A61-59E1-AA87-F61CA18258A3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDirectoryResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4632107D-BCE1-5A96-B30B-182EE0709625
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDirectorySAMLServiceProviderInfoResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The statistics of the directory.
   */
  directoryStatistics?: GetDirectoryStatisticsResponseBodyDirectoryStatistics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B7228B0-A435-5D27-A6B2-ED3571F0654B
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDirectoryStatisticsResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96D1E5FF-0301-5636-8D33-071E033CFB82
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the IdP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExternalSAMLIdentityProviderResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
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
  /**
   * @remarks
   * The information about the group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupResponseBody;
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

export class GetLoginPreferenceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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

export class GetLoginPreferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The logon preference.
   */
  loginPreference?: GetLoginPreferenceResponseBodyLoginPreference;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CE8B990-193D-50CE-A604-69F3E7DCE740
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginPreference: 'LoginPreference',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginPreference: GetLoginPreferenceResponseBodyLoginPreference,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPreferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginPreferenceResponseBody;
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
      body: GetLoginPreferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The MFA setting of all users.
   */
  MFAAuthenticationSettingInfo?: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95D3B107-DA80-5B34-A3D0-9E82F8F0DA0E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMFAAuthenticationSettingInfoResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * Indicates whether MFA is enabled for all users. Valid values:
   * 
   * *   Enabled: MFA is enabled for all users.
   * *   Byuser: User-specific settings are applied.
   * *   Disabled: MFA is disabled for all users.
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationAdvanceSettings?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2BC00C5-76A2-5FFC-A340-927940A98377
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMFAAuthenticationSettingsResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The status of MFA. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5E688346-DF1A-5537-9BFC-8A9974D29586
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMFAAuthenticationStatusResponseBody;
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

export class GetPasswordPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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

export class GetPasswordPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The password policy.
   */
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7C6E839-FB65-59BE-B753-003AA8AF7DF7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordPolicy: 'PasswordPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordPolicy: GetPasswordPolicyResponseBodyPasswordPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordPolicyResponseBody;
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
      body: GetPasswordPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSCIMSynchronizationStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C086C2F-1C66-57B3-B14E-2C1DA70727CD
   */
  requestId?: string;
  /**
   * @remarks
   * The status of SCIM synchronization. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSCIMSynchronizationStatusResponseBody;
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADADC31D-90EE-5459-99B0-D83DF07769A3
   */
  requestId?: string;
  /**
   * @remarks
   * The status information of CloudSSO.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceStatusResponseBody;
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
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shfqw1u1edszvxw5****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 923CA5E8-57BF-5E15-8BA6-E75A966B7E3F
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResponseBody;
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
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shfqw1u1edszvxw5****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 005F4623-AE53-504D-830F-44825F7DC211
   */
  requestId?: string;
  /**
   * @remarks
   * The status information about the task.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskStatusResponseBody;
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
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE42D2C4-A30A-59B7-ACEB-6D22FB44174A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the user.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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

export class GetUserIdRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The identifier information about the user that is synchronized from an external identity provider (IdP).
   */
  externalId?: GetUserIdRequestExternalId;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      externalId: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      externalId: GetUserIdRequestExternalId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The identifier information about the user that is synchronized from an external identity provider (IdP).
   */
  externalIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      externalIdShrink: 'ExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      externalIdShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3A41736-A050-50B6-ABC5-590F376A0044
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the CloudSSO user.
   * 
   * @example
   * u-d8d1iox****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserIdResponseBody;
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
      body: GetUserIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAAuthenticationSettingsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5B598B62-85E6-5792-9DF1-246D251B07DA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether MFA is enabled for the user. Valid values:
   * 
   * *   Enabled: MFA is enabled for the user.
   * *   Disabled: MFA is disabled for the user.
   * 
   * @example
   * Enabled
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserMFAAuthenticationSettingsResponseBody;
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
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user provisioning.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserProvisioningResponseBody;
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

export class GetUserProvisioningConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
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

export class GetUserProvisioningConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66898413-EB80-556D-9429-06FE3548F672
   */
  requestId?: string;
  /**
   * @remarks
   * The global configurations of the RAM user provisioning.
   */
  userProvisioningConfiguration?: GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningConfiguration: 'UserProvisioningConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningConfiguration: GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserProvisioningConfigurationResponseBody;
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
      body: GetUserProvisioningConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningEventRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * You can call the [ListUserProvisioningEvents](https://help.aliyun.com/document_detail/2636305.html) operation to query the value of `EventId`.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      eventId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B801715C-97EA-3067-AC97-EF1EBECBB39C
   */
  requestId?: string;
  /**
   * @remarks
   * The RAM user provisioning event.
   */
  userProvisioningEvent?: GetUserProvisioningEventResponseBodyUserProvisioningEvent;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningEvent: 'UserProvisioningEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningEvent: GetUserProvisioningEventResponseBodyUserProvisioningEvent,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserProvisioningEventResponseBody;
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
      body: GetUserProvisioningEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningRdAccountStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  rdMemberId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      rdMemberId: 'RdMemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      rdMemberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningRdAccountStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of the RAM user provisioning.
   */
  userProvisioningStatistics?: GetUserProvisioningRdAccountStatisticsResponseBodyUserProvisioningStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningStatistics: 'UserProvisioningStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningStatistics: GetUserProvisioningRdAccountStatisticsResponseBodyUserProvisioningStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningRdAccountStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserProvisioningRdAccountStatisticsResponseBody;
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
      body: GetUserProvisioningRdAccountStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningStatisticsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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

export class GetUserProvisioningStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of the RAM user provisioning.
   */
  userProvisioningStatistics?: GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningStatistics: 'UserProvisioningStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningStatistics: GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserProvisioningStatisticsResponseBody;
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
      body: GetUserProvisioningStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the access configuration. The ID can be used to filter access permissions.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 20.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity. The ID can be used to filter access permissions.
   * 
   * *   If you set `PrincipalType` to User, set `PrincipalId` to the ID of the CloudSSO user.
   * *   If you set `PrincipalType` to Group, set `PrincipalId` to the ID of the CloudSSO group.
   * 
   * >  You can use the type to filter access permissions only if you specify both PrincipalId and `PrincipalType`.``
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. The type can be used to filter access permissions. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * >  You can use the type to filter access permissions only if you specify both PrincipalId and `PrincipalType`.``
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task object. The ID can be used to filter access permissions.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. The type can be used to filter access permissions.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The access permissions that are assigned.
   */
  accessAssignments?: ListAccessAssignmentsResponseBodyAccessAssignments[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the value of IsTruncated is `true`.``
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66898413-EB80-556D-9429-06FE3548F672
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessAssignmentsResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration. The ID can be used to filter access permissions.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 20.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the access configuration. The value can be used to filter accounts. Valid values:
   * 
   * *   Provisioned: The access configuration is provisioned.
   * *   ReprovisionRequired: The access configuration needs to be re-provisioned.
   * *   DeprovisionFailed: The access configuration failed to be provisioned.
   * 
   * @example
   * Provisioned
   */
  provisioningStatus?: string;
  /**
   * @remarks
   * The ID of the task object. The ID can be used to filter access permissions.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. The type can be used to filter access permissions.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The accounts for which the access configuration is provisioned.
   */
  accessConfigurationProvisionings?: ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the value of `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BA1BDF1-D845-5D2C-B742-74BE2970E4C1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessConfigurationProvisioningsResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * Specify the value in the \\<Attribute> \\<Operator> \\<Value> format. The value is not case sensitive. You can set \\<Attribute> only to AccessConfigurationName and \\<Operator> only to eq or sw. The value eq indicates Equals. The value sw indicates Starts With.
   * 
   * For example, if you set Filter to AccessConfigurationName sw test, the operation queries all access configurations whose names start with test. If you set Filter to AccessConfigurationName eq TestAccessConfiguration, the operation queries the access configuration whose name is TestAccessConfiguration.
   * 
   * @example
   * AccessConfigurationName sw test
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to return for the next page. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The status notification. The status notification can be used to filter access configurations.
   * 
   * Set the value to ReprovisionRequired, which indicates that the operation queries all access configurations that need to be re-provisioned.
   * 
   * @example
   * ReprovisionRequired
   */
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
  /**
   * @remarks
   * The access configurations.
   */
  accessConfigurations?: ListAccessConfigurationsResponseBodyAccessConfigurations[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true: The queried entries are truncated.
   * *   false: The queried entries are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is returned for the next page.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2BC0CBAC-45E1-5BD3-BF6E-F69D1D5391C2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessConfigurationsResponseBody;
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
  /**
   * @remarks
   * The directories.
   */
  directories?: ListDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9A504392-F06D-5029-AB64-6654CB9F1DC1
   */
  requestId?: string;
  /**
   * @remarks
   * The number of directories.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDirectoriesResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 400979BC-92EC-58B9-B47C-6913BD56A6FD
   */
  requestId?: string;
  /**
   * @remarks
   * The SAML signing certificates.
   */
  SAMLIdPCertificates?: ListExternalSAMLIdPCertificatesResponseBodySAMLIdPCertificates[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExternalSAMLIdPCertificatesResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to return for the next page. If this is your first time to call this operation, you do not need to specify `NextToken` .
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
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
  /**
   * @remarks
   * The users in the group.
   */
  groupMembers?: ListGroupMembersResponseBodyGroupMembers[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true: The queried entries are truncated.
   * *   false: The queried entries are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is returned for the next page.
   * 
   * >  This parameter is returned only when the value of `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BB759F84-2C64-5C36-B6C6-253172C5C370
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupMembersResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * Specify the value in the `<Attribute> <Operator> <Value>` format. The value is not case sensitive. You can set `<Attribute>` only to `GroupName` and `<Operator>` only to `eq` or `sw`. The value eq indicates Equals. The value sw indicates Starts With.
   * 
   * For example, if you set Filter to GroupName sw test, the operation queries the groups whose names start with test. If you set Filter to GroupName eq testgroup, the operation queries the group whose name is testgroup.
   * 
   * @example
   * GroupName eq testgroup
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to return for the next page. If this is your first time to call this operation, you do not need to specify `NextToken`.
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the group. The type can be used to filter groups. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The group is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
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
  /**
   * @remarks
   * The groups.
   */
  groups?: ListGroupsResponseBodyGroups[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true: The queried entries are truncated.
   * *   false: The queried entries are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is returned for the next page.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to return for the next page. If this is your first time to call this operation, you do not need to specify `NextToken` .
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true: The queried entries are truncated.
   * *   false: The queried entries are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The groups to which the user is added.
   */
  joinedGroups?: ListJoinedGroupsForUserResponseBodyJoinedGroups[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is returned for the next page.
   * 
   * >  This parameter is returned only when the value of `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E9BBB45F-7877-5DE9-96A5-20E6CFA48929
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJoinedGroupsForUserResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The MFA devices.
   */
  MFADevices?: ListMFADevicesForUserResponseBodyMFADevices[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B9982ED-FD0D-5622-8EA0-7B768685DCE7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of MFA devices.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMFADevicesForUserResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The type of the policy. The type can be used to filter policies. Valid values:
   * 
   * *   System: system policy
   * *   Inline: inline policy
   * 
   * If you do not specify this parameter, all types of policies are queried.
   * 
   * @example
   * System
   */
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
  /**
   * @remarks
   * The policies.
   */
  permissionPolicies?: ListPermissionPoliciesInAccessConfigurationResponseBodyPermissionPolicies[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3A5E771F-1F5A-5555-A64E-579748AAFD98
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPermissionPoliciesInAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE4B7037-C315-5DD5-826E-57A87950BCD1
   */
  requestId?: string;
  /**
   * @remarks
   * The SCIM credentials.
   */
  SCIMServerCredentials?: ListSCIMServerCredentialsResponseBodySCIMServerCredentials[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSCIMServerCredentialsResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration. The ID can be used to filter access permissions.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * The condition is not case-sensitive. The condition must be in the StartTime ge YYYY-MM-DDTHH:mm:SSZ format. You must set YYYY-MM-DDTHH:mm:SSZ to a value that is no more than 7 days from the current time. ge indicates Greater Than or Equals.
   * 
   * For example, if you set the Filter parameter to StartTime ge 2021-03-15T01:12:23Z, the operation queries the tasks from 2021-03-15T01:12:23 GMT.
   * 
   * >  If you do not specify this parameter, the operation queries the tasks within the previous 24 hours by default.
   * 
   * @example
   * StartTime ge 2021-03-15T01:12:23Z
   */
  filter?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 20.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity. The ID can be used to filter access permissions.
   * 
   * *   If you set `PrincipalType` to `User`, set `PrincipalId` to the ID of the CloudSSO user.
   * *   If you set `PrincipalType` to `Group`, set `PrincipalId` to the ID of the CloudSSO group.
   * 
   * >  You can use the type to filter access permissions only if you specify both `PrincipalId` and `PrincipalType`.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. The type can be used to filter access permissions. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * >  You can use the type to filter access permissions only if you specify both `PrincipalId` and `PrincipalType`.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task. The ID can be used to filter tasks. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object. The ID can be used to filter access permissions.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. The type can be used to filter access permissions.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the task. The type can be used to filter tasks. Valid values:
   * 
   * *   ProvisionAccessConfiguration: An access configuration is provisioned.
   * *   DeprovisionAccessConfiguration: An access configuration is de-provisioned.
   * *   CreateAccessAssignment: Access permissions on an account in the resource directory are assigned.
   * *   DeleteAccessAssignment: Access permissions on an account in the resource directory are removed.
   * 
   * @example
   * CreateAccessAssignment
   */
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
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the value of `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0DA2DFC-EB18-59EF-BD82-C30862EBA3A3
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: ListTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
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

export class ListUserProvisioningEventsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00xz91nf****
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return is larger than the value of `MaxResults`, the entries are truncated. The system returns entries based on the value of `MaxResults`, and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userProvisioningId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * 2eEMmhmLa1b7Bbj9UzCgZUGj8DpDeG5TbNknuNKNP2h84KjJRnAb7vzzSDkYNmsidnAybyJYBfnPPB6xfgw54B1Wub2KQmC8LofzqBW2Y****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D85B43D-EF98-396D-B426-837E428D2D39
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 110
   */
  totalCounts?: number;
  /**
   * @remarks
   * The RAM user provisioning events.
   */
  userProvisioningEvents?: ListUserProvisioningEventsResponseBodyUserProvisioningEvents[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      userProvisioningEvents: 'UserProvisioningEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      userProvisioningEvents: { 'type': 'array', 'itemType': ListUserProvisioningEventsResponseBodyUserProvisioningEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserProvisioningEventsResponseBody;
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
      body: ListUserProvisioningEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return is larger than the value of `MaxResults`, the entries are truncated. The system returns entries based on the value of `MaxResults`, and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * 27EbL9j4ZgZjsMZFqbZFgbwQ1VXFU1Khcpx9e2vrW1zwzTBmTGWaM7ixHhRin8SCsxaJdazYVCzeKc2UF2QkyGb83cPhr8ZxrzoaiTd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * u-88d73u*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * RD-Account
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * User
   */
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
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * 27EbL9j4ZgZjsMZFqbZFgbwQ1VXFU1Khcpx9e2vrW1zwzTBmTGWaM7ixHhRin8SCsxaJdazYVCzeKc2UF2QkyGb83cPhr8ZxrzoaiTd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F76AF4FC-****-****-B7CB-74F3********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 110
   */
  totalCounts?: number;
  /**
   * @remarks
   * The RAM user provisionings.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserProvisioningsResponseBody;
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
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * You must specify the value in the `<Attribute> <Operator> <Value>` format. The value is not case-sensitive. You can set `<Attribute>` only to `UserName` and `Operator` only to `eq` or `sw`. The value eq indicates Equals, and the value sw indicates Start With.
   * 
   * For example, if you set the Filter parameter to UserName sw test, the operation queries the users whose names start with test. If you set the Filter parameter to UserName eq testuser, the operation queries the user whose name is `testuser`.
   * 
   * @example
   * UserName sw test
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return is larger than the value of the `MaxResults` parameter, the entries are truncated. The system returns entries based on the value of the `MaxResults` parameter, and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and the `NextToken` parameter is returned. In the next call, you can use the value of the `NextToken` parameter and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of the `IsTruncated` parameter becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the user. The parameter can be used to filter users. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. The parameter can be used to filter users. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when the `IsTruncated` parameter is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 734D9AAC-9A8E-5DF6-A633-ADE70FF2A9B1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  /**
   * @remarks
   * The users.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DFDC16B2-4509-5FA6-9FA5-3CD35E4292FB
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProvisionAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * You can call the [ListExternalSAMLIdPCertificates](https://help.aliyun.com/document_detail/341629.html) operation to query the IDs of certificates.
   * 
   * @example
   * idp-c-00dt9gnl7fmjaw9c****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 400979BC-92EC-58B9-B47C-6913BD56A6FD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveExternalSAMLIdPCertificateResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   System: system policy
   * *   Inline: inline policy
   * 
   * @example
   * System
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemovePermissionPolicyFromAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F723DE01-6276-5DC4-9B1F-9CBE3E1748B2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserFromGroupResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to enable the system to automatically generate a new password. Valid values:
   * 
   * *   True: The new password is automatically generated by the system.
   * *   False: The new password must be manually specified. This is the default value.
   * 
   * @example
   * True
   */
  generateRandomPassword?: boolean;
  /**
   * @remarks
   * The new password.
   * 
   * The password must contain the following types of characters: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * The password must be 8 to 32 characters in length.
   * 
   * >  If you set `GenerateRandomPassword` to `False`, you must specify `Password` .
   * 
   * @example
   * uc)XK$?ictf72CKFDy9vtWaFmISl****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether password reset is required upon the next logon. Valid values:
   * 
   * *   True: Password reset is required upon the next logon.
   * *   False: Password reset is not required upon the next logon. This is the default value.
   * 
   * @example
   * False
   */
  requirePasswordResetForNextLogin?: boolean;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The new password.
   * 
   * >  This parameter is returned only when the new password is automatically generated by the system.
   * 
   * @example
   * W2koInFIm0Wy2wVZ$oB)MzD$nY!G****
   */
  newPassword?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F44F02EC-70D1-5E51-8E8E-FA9AC4EF952A
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetUserPasswordResponseBody;
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

export class RetryUserProvisioningEventRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * You can call the [ListUserProvisioningEvents](https://help.aliyun.com/document_detail/2636305.html) operation to query the value of `EventId`.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      duplicationStrategy: 'string',
      eventId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryUserProvisioningEventResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
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

export class RetryUserProvisioningEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryUserProvisioningEventResponseBody;
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
      body: RetryUserProvisioningEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExternalSAMLIdentityProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The Binding method for initiating a SAML request. Values:
   * 
   * - Post: Initiate the SAML request using the Post method. 
   * - Redirect: Initiate the SAML request using the Redirect method.
   * 
   * @example
   * Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata file of the IdP. The value of this parameter is Base64-encoded.
   * 
   * The file is provided by the IdP that supports SAML 2.0.
   * 
   * @example
   * PD94bWwgdmVyc2lvbj0iMS4****
   */
  encodedMetadataDocument?: string;
  /**
   * @remarks
   * The entity ID of the IdP.
   * 
   * @example
   * http://www.okta.com/exk3qwgtjhetR2Od****
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP.
   */
  loginUrl?: string;
  /**
   * @remarks
   * The status of SSO logon. Valid values:
   * 
   * *   Enabled
   * *   Disabled (default)
   * 
   * @example
   * Disabled
   */
  SSOStatus?: string;
  /**
   * @remarks
   * Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
   * 
   * *   true: yes
   * *   false: no (default)
   * 
   * @example
   * false
   */
  wantRequestSigned?: boolean;
  /**
   * @remarks
   * The X.509 certificate in the PEM format. If you specify this parameter, all existing certificates are replaced.
   * 
   * @example
   * MIIC8DCCAdigAwIBAgIQP9eomUYGeoND****
   */
  x509Certificate?: string;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'BindingType',
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
      bindingType: 'string',
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 63160579-2E1B-57B0-8273-B27427172385
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the IdP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetExternalSAMLIdentityProviderResponseBody;
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

export class SetLoginPreferenceRequest extends $tea.Model {
  allowUserToGetCredentials?: boolean;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The IP address whitelist. CloudSSO users can log on to the CloudSSO user portal only by using the IP addresses in the whitelist. Limits:
   * 
   * *   You can enter IP addresses or CIDR blocks. IPv4 addresses are supported.
   * *   You can enter up to 100 IP addresses or CIDR blocks. Separate multiple IP addresses or CIDR blocks with semicolons `(;)`.
   * *   If you do not specify this parameter, the original settings are retained.
   * *   If you set this parameter to a semicolon (`;`), the value of this parameter is cleared.
   * *   The IP address whitelist takes effect only on CloudSSO users who want to log on to the CloudSSO user portal by using the username-password logon or single sign-on (SSO) method. The IP address whitelist does not take effect on CloudSSO users who access accounts in a resource directory from the CloudSSO user portal.
   * 
   * @example
   * 192.168.0.0/16;10.0.0.0/8
   */
  loginNetworkMasks?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToGetCredentials: 'AllowUserToGetCredentials',
      directoryId: 'DirectoryId',
      loginNetworkMasks: 'LoginNetworkMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToGetCredentials: 'boolean',
      directoryId: 'string',
      loginNetworkMasks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetLoginPreferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
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

export class SetLoginPreferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetLoginPreferenceResponseBody;
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
      body: SetLoginPreferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetMFAAuthenticationStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The status of MFA. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14E2B1A9-7713-5E6F-8409-8DE12DF51AF4
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetMFAAuthenticationStatusResponseBody;
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

export class SetPasswordPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The number of password retries.
   * 
   * If you enter wrong passwords for the specified consecutive times, the account is locked for 1 hour.
   * 
   * Valid values: 0 to 32. The value 0 specifies that the number of password retries is not limited.
   * 
   * @example
   * 5
   */
  maxLoginAttempts?: number;
  /**
   * @remarks
   * The validity period of a password.
   * 
   * Valid values: 1 to 120. Unit: days.
   * 
   * @example
   * 90
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of unique characters in a password.
   * 
   * The minimum value is 0, which specifies that the minimum number of unique characters in a password is not limited. The maximum value is the value of the `MinPasswordLength` parameter.
   * 
   * @example
   * 8
   */
  minPasswordDifferentChars?: number;
  /**
   * @remarks
   * The minimum password length.
   * 
   * Valid values: 8 to 32 characters.
   * 
   * @example
   * 8
   */
  minPasswordLength?: number;
  /**
   * @remarks
   * Specifies whether a password can contain the username. Valid value:
   * 
   * *   true: A password cannot contain the username.
   * *   false: A password can contain the username.
   * 
   * @example
   * true
   */
  passwordNotContainUsername?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * The previous N passwords cannot be reused. Valid values of N: 0 to 24. The value 0 specifies that all historical passwords can be reused.
   * 
   * >  Passwords that are generated before January 5, 2024 are not counted as historical passwords.
   * 
   * @example
   * 1
   */
  passwordReusePrevention?: number;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      maxLoginAttempts: 'MaxLoginAttempts',
      maxPasswordAge: 'MaxPasswordAge',
      minPasswordDifferentChars: 'MinPasswordDifferentChars',
      minPasswordLength: 'MinPasswordLength',
      passwordNotContainUsername: 'PasswordNotContainUsername',
      passwordReusePrevention: 'PasswordReusePrevention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      maxLoginAttempts: 'number',
      maxPasswordAge: 'number',
      minPasswordDifferentChars: 'number',
      minPasswordLength: 'number',
      passwordNotContainUsername: 'boolean',
      passwordReusePrevention: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
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

export class SetPasswordPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordPolicyResponseBody;
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
      body: SetPasswordPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSCIMSynchronizationStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The status of SCIM synchronization. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BF1FC78-5D20-54CC-BAEB-8CC33AE21D01
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSCIMSynchronizationStatusResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new description of the access configuration.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is an access configuration.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * The web page must be a page of the Alibaba Cloud Management Console.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  newRelayState?: string;
  /**
   * @remarks
   * The new duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
   * 
   * @example
   * 3600
   */
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
  /**
   * @remarks
   * The information about the access configuration.
   */
  accessConfiguration?: UpdateAccessConfigurationResponseBodyAccessConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new name of the directory. The name must be globally unique.
   * 
   * The name can contain lowercase letters, digits, and hyphens (-). The name cannot start or end with a hyphen (-) and cannot have two consecutive hyphens (-). If you want to start the new name of the directory starts with `d-`, you must set this parameter to the ID of the directory.
   * 
   * The name must be 2 to 64 characters in length.
   * 
   * @example
   * new-example
   */
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
  /**
   * @remarks
   * The information about the directory.
   */
  directory?: UpdateDirectoryResponseBodyDirectory;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDirectoryResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The new description of the group.
   * 
   * @example
   * This is a group.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new name of the group.
   * 
   * @example
   * NewTestGroup
   */
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
  /**
   * @remarks
   * The information about the group.
   */
  group?: UpdateGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F723DE01-6276-5DC4-9B1F-9CBE3E1748B2
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGroupResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the inline policy.
   * 
   * @example
   * InlinePolicy
   */
  inlinePolicyName?: string;
  /**
   * @remarks
   * The new configurations of the inline policy.
   * 
   * The value can be up to 4,096 characters in length.
   * 
   * For more information about the syntax and structure of RAM policies, see [Policy syntax and structure](https://help.aliyun.com/document_detail/93739.html).
   * 
   * @example
   * {"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInlinePolicyForAccessConfigurationResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to enable MFA for all users. Valid value:
   * 
   * - Enabled: enables MFA for all users.
   * - Byuser: uses user-specific settings. For more information about how to configure MFA for a single user, see [UpdateUserMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450135.html).
   * - Disabled: disables MFA for all users.
   * - OnlyRiskyLogin: MFA is required only for unusual logons.
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationSettings?: string;
  /**
   * @remarks
   * Specifies whether MFA is required for users who initiated unusual logons. Valid value:
   * 
   * - Autonomous: MFA is prompted for users who initiated unusual logons. However, the users are allowed to skip MFA. If an MFA device is bound to a user who initiated an unusual logon, the user must pass MFA.
   * 
   * - EnforceVerify: MFA is required. If no MFA devices are bound to a user who initiated an unusual logon, the user must bind an MFA device. If an MFA device is already bound to a user who initiated an unusual logon, the user must pass MFA.
   * 
   * @example
   * Autonomous
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1C748E3-8944-5593-81BC-7D96AE24F77B
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMFAAuthenticationSettingsResponseBody;
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
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new status of the SCIM credential. Valid values:
   * 
   * *   Enabled: The SCIM credential is enabled.
   * *   Disabled: The SCIM credential is disabled.
   * 
   * @example
   * Disabled
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C086C2F-1C66-57B3-B14E-2C1DA70727CD
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SCIM credential.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSCIMServerCredentialStatusResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new description of the user.
   * 
   * @example
   * This is a user.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new display name of the user.
   * 
   * @example
   * AliceLee
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new email address of the user.
   * 
   * @example
   * AliceLee@example.com
   */
  newEmail?: string;
  /**
   * @remarks
   * The new first name of the user.
   * 
   * @example
   * Alice
   */
  newFirstName?: string;
  /**
   * @remarks
   * The new last name of the user.
   * 
   * @example
   * Lee
   */
  newLastName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F44F02EC-70D1-5E51-8E8E-FA9AC4EF952A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the user.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
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
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * Specifies whether to enable MFA for the user. Valid values:
   * 
   * *   Enabled: enables MFA for the user.
   * *   Disabled: disables MFA for the user.
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5E6C6049-E9B0-5F6F-A104-6150E3B1F4D7
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserMFAAuthenticationSettingsResponseBody;
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
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  newDeletionStrategy?: string;
  /**
   * @remarks
   * The new description of the RAM user provisioning.
   * 
   * @example
   * description*****
   */
  newDescription?: string;
  /**
   * @remarks
   * The new conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  newDuplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user provisioning.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserProvisioningResponseBody;
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

export class UpdateUserProvisioningConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new default URL for a CloudSSO user who logs on to the Alibaba Cloud Management Console.
   * 
   * Default value: https://homenew.console.aliyun.com.
   * 
   * @example
   * https://home.console.aliyun.com/home/dashboard/ProductAndService
   */
  newDefaultLandingPage?: string;
  /**
   * @remarks
   * The new duration of the logon session.
   * 
   * Unit: hours.
   * 
   * Valid values: 1 to 24.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  newSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDefaultLandingPage: 'NewDefaultLandingPage',
      newSessionDuration: 'NewSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDefaultLandingPage: 'string',
      newSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2ED1D-FAC5-3DF8-B63C-992B85B08DD9
   */
  requestId?: string;
  /**
   * @remarks
   * The global configurations of the RAM user provisioning.
   */
  userProvisioningConfiguration?: UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningConfiguration: 'UserProvisioningConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningConfiguration: UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserProvisioningConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserProvisioningConfigurationResponseBody;
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
      body: UpdateUserProvisioningConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Disabled
   */
  newStatus?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE598602-AC67-56EF-B7CC-2927C30AA0A8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserStatusResponseBody;
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the CloudSSO identity.
   * 
   * @example
   * Alice
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object. The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * t-sh6tceylhvgejpip****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as CreateAccessAssignment, which indicates that access permissions on an account in your resource directory are assigned.
   * 
   * @example
   * CreateAccessAssignment
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notification.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The time when the information about the access configuration was modified.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
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
  /**
   * @remarks
   * The time when the directory was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-10T04:04:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * example
   */
  directoryName?: string;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the directory was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-10T04:04:04Z
   */
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
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group. The value is fixed as Manual, which indicates that the group is manually created.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when the information about the group was modified.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
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
  /**
   * @remarks
   * The time when the SCIM credential was created.
   * 
   * @example
   * 2021-11-09T08:12:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The SCIM credential.
   * 
   * >  The SCIM credential is returned only when it is created. After the SCIM credential is created, you cannot query it. Keep the SCIM credential confidential.
   * 
   * @example
   * 8aAJCtpbyPJ8saXeYDgyw****
   */
  credentialSecret?: string;
  /**
   * @remarks
   * The type of the SCIM credential.
   * 
   * @example
   * BearerToken
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The time when the SCIM credential expires.
   * 
   * @example
   * 2022-11-09T08:12:52Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the SCIM credential. The value is fixed as Enabled, which indicates that the SCIM credential is enabled.
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the user.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the user was modified.
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * Alice
   */
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
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * this is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * testGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the RAM user provisioning. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning. The value is fixed as the name of the member in the resource directory.
   * 
   * @example
   * testTargetName
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the member.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the CloudSSO identity.
   * 
   * @example
   * Alice
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object. The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shfqw1u1edszvxw5****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as DeleteAccessAssignment, which indicates that access permissions on an account in your resource directory are removed.
   * 
   * @example
   * DeleteAccessAssignment
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object. The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-sh0655wnq8pdlrlc****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as DeprovisionAccessConfiguration, which indicates that the access configuration is de-provisioned.
   * 
   * @example
   * DeprovisionAccessConfiguration
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * VPC-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-06-30T09:39:44Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notification.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The time when the information about the access configuration was modified.
   * 
   * @example
   * 2021-07-26T03:02:11Z
   */
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
  /**
   * @remarks
   * The time when the directory was created.
   * 
   * @example
   * 2021-06-30T08:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * example
   */
  directoryName?: string;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the directory was modified.
   * 
   * @example
   * 2021-10-25T07:18:46Z
   */
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
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the SP.
   * 
   * @example
   * https://signin-cn-shanghai.alibabacloudsso.com/saml/acs/51d298a9-2a3f-4e23-97c7-7ad1cfa9****
   */
  acsUrl?: string;
  authnSignAlgo?: string;
  certificateType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata file of the SP. The value of this parameter is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVyc2lv****
   */
  encodedMetadataDocument?: string;
  /**
   * @remarks
   * The entity ID of the SP.
   * 
   * @example
   * https://signin-cn-shanghai.alibabacloudsso.com/saml/sp/d-00fc2p61****
   */
  entityId?: string;
  supportEncryptedAssertion?: boolean;
  static names(): { [key: string]: string } {
    return {
      acsUrl: 'AcsUrl',
      authnSignAlgo: 'AuthnSignAlgo',
      certificateType: 'CertificateType',
      directoryId: 'DirectoryId',
      encodedMetadataDocument: 'EncodedMetadataDocument',
      entityId: 'EntityId',
      supportEncryptedAssertion: 'SupportEncryptedAssertion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acsUrl: 'string',
      authnSignAlgo: 'string',
      certificateType: 'string',
      directoryId: 'string',
      encodedMetadataDocument: 'string',
      entityId: 'string',
      supportEncryptedAssertion: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectoryStatisticsResponseBodyDirectoryStatistics extends $tea.Model {
  /**
   * @remarks
   * The number of access permissions that are assigned.
   * 
   * @example
   * 5
   */
  accessAssignmentCount?: number;
  /**
   * @remarks
   * The number of access configurations.
   * 
   * @example
   * 6
   */
  accessConfigurationCount?: number;
  /**
   * @remarks
   * The quota for access configurations.
   * 
   * @example
   * 1000
   */
  accessConfigurationQuota?: number;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * new-example
   */
  directoryName?: string;
  /**
   * @remarks
   * The number of user groups.
   * 
   * @example
   * 4
   */
  groupCount?: number;
  /**
   * @remarks
   * The quota for user groups.
   * 
   * @example
   * 500
   */
  groupQuota?: number;
  /**
   * @remarks
   * The number of tasks that are being performed.
   * 
   * @example
   * 0
   */
  inProgressTaskCount?: number;
  /**
   * @remarks
   * The number of inline policies that can be configured for an access configuration.
   * 
   * @example
   * 1
   */
  inlinePolicyPerAccessConfigurationQuota?: number;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The number of SCIM credentials.
   * 
   * @example
   * 2
   */
  SCIMServerCredentialCount?: number;
  /**
   * @remarks
   * Indicates whether SCIM synchronization is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  SCIMSyncEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether SSO is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  SSOEnabled?: boolean;
  /**
   * @remarks
   * The quota for system policies that can be configured for an access configuration.
   * 
   * @example
   * 20
   */
  systemPolicyPerAccessConfigurationQuota?: number;
  /**
   * @remarks
   * The number of users.
   * 
   * @example
   * 16
   */
  userCount?: number;
  /**
   * @remarks
   * The quota for users.
   * 
   * @example
   * 1000
   */
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
      inlinePolicyPerAccessConfigurationQuota: 'InlinePolicyPerAccessConfigurationQuota',
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
      inlinePolicyPerAccessConfigurationQuota: 'number',
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
  /**
   * @remarks
   * The Binding method for initiating a SAML request. Values:
   * 
   * - Post: Initiate the SAML request using the Post method. 
   * - Redirect: Initiate the SAML request using the Redirect method.
   * 
   * @example
   * Post
   */
  bindingType?: string;
  /**
   * @remarks
   * The ID of the SAML signing certificate.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The time when the IdP was configured for the first time.
   * 
   * @example
   * 2021-11-09T09:30:13Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata file of the IdP. The value of this parameter is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVyc2lvbj0iMS4****
   */
  encodedMetadataDocument?: string;
  /**
   * @remarks
   * The entity ID of the IdP.
   * 
   * @example
   * http://www.okta.com/exk3qwgtjhetR2Od****
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP.
   */
  loginUrl?: string;
  /**
   * @remarks
   * The status of SSO logon. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  SSOStatus?: string;
  /**
   * @remarks
   * The time when the IdP configurations were last modified.
   * 
   * @example
   * 2021-11-09T09:30:22Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Indicates whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
   * 
   * *   true: yes
   * *   false: no (default)
   * 
   * @example
   * false
   */
  wantRequestSigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'BindingType',
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
      bindingType: 'string',
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
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The group is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when the information about the group was modified.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
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

export class GetLoginPreferenceResponseBodyLoginPreference extends $tea.Model {
  /**
   * @remarks
   * Whether the user can obtain program access credentials on the portal after logging in. Values: 
   * - True: Yes. 
   * - False (default): No.
   * 
   * @example
   * True
   */
  allowUserToGetCredentials?: boolean;
  /**
   * @remarks
   * The IP address whitelist. CloudSSO users can log on to the CloudSSO user portal only by using the IP addresses in the whitelist.
   * 
   * The IP address whitelist takes effect only on CloudSSO users who want to log on to the CloudSSO user portal by using the username-password logon or single sign-on (SSO) method. The IP address whitelist does not take effect on CloudSSO users who access accounts in a resource directory from the CloudSSO user portal.
   * 
   * If the return value of this parameter is empty, no IP address whitelists are configured.
   * 
   * @example
   * 192.168.0.0/16;10.0.0.0/8
   */
  loginNetworkMasks?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToGetCredentials: 'AllowUserToGetCredentials',
      loginNetworkMasks: 'LoginNetworkMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToGetCredentials: 'boolean',
      loginNetworkMasks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo extends $tea.Model {
  /**
   * @remarks
   * The MFA policy of all users. Valid values:
   * 
   * *   Enabled: MFA is enabled for all users.
   * *   Byuser: User-specific settings are applied. For more information about how to configure MFA for a single user, see [UpdateUserMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450135.html).
   * *   Disabled: MFA is disabled for all users.
   * *   OnlyRiskyLogin: MFA is required only for unusual logons.
   * 
   * @example
   * OnlyRiskyLogin
   */
  mfaAuthenticationAdvanceSettings?: string;
  /**
   * @remarks
   * The MFA policy for unusual logons. Valid values:
   * 
   * *   Autonomous: MFA is prompted for users who initiated unusual logons. However, the users are allowed to skip MFA. If an MFA device is bound to a user who initiated an unusual logon, the user must pass MFA.
   * *   EnforceVerify: MFA is required. If no MFA devices are bound to a user who initiated an unusual logon, the user must bind an MFA device. If an MFA device is already bound to a user who initiated an unusual logon, the user must pass MFA.
   * 
   * > This parameter is displayed only when Byuser or OnlyRiskyLogin is returned for the MfaAuthenticationAdvanceSettings parameter.
   * 
   * @example
   * EnforceVerify
   */
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

export class GetPasswordPolicyResponseBodyPasswordPolicy extends $tea.Model {
  /**
   * @remarks
   * Indicates whether to disable logon after a password expires. Valid values:
   * 
   * *   true: disables logon after a password expires.
   * *   false: does not disable logon after a password expires.
   * 
   * @example
   * true
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The number of password retries.
   * 
   * If wrong passwords are entered for the specified consecutive times, the account is locked for 1 hour.
   * 
   * Valid values: 0 to 32. The value 0 indicates that the number of password retries is not limited.
   * 
   * @example
   * 5
   */
  maxLoginAttempts?: number;
  /**
   * @remarks
   * The validity period of a password.
   * 
   * Valid values: 1 to 120. Unit: days.
   * 
   * @example
   * 90
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The maximum password length.
   * 
   * @example
   * 32
   */
  maxPasswordLength?: number;
  /**
   * @remarks
   * The minimum number of different characters in a password.
   * 
   * The minimum value is 0, which indicates that the minimum number of different characters in a password is not limited. The maximum value is the value of the `MinPasswordLength` parameter.
   * 
   * @example
   * 8
   */
  minPasswordDifferentChars?: number;
  /**
   * @remarks
   * The minimum password length.
   * 
   * Valid values: 8 to 32 characters.
   * 
   * @example
   * 8
   */
  minPasswordLength?: number;
  /**
   * @remarks
   * Indicates whether to exclude the username from the password. Valid values:
   * 
   * *   true: A password cannot contain the username.
   * *   false: A password can contain the username.
   * 
   * @example
   * true
   */
  passwordNotContainUsername?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * The previous N passwords cannot be reused. Valid values of N: 0 to 24. The value 0 indicates that all historical passwords can be reused.
   * 
   * >  Passwords that are generated before January 5, 2024 are not counted as historical passwords.
   * 
   * @example
   * 1
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether lowercase letters are required in a password. Valid values:
   * 
   * *   true: Lowercase letters are required in a password.
   * *   false: Lowercase letters are not required in a password.
   * 
   * @example
   * true
   */
  requireLowerCaseChars?: boolean;
  /**
   * @remarks
   * Indicates whether digits are required in a password. Valid values:
   * 
   * *   true: Digits are required in a password.
   * *   false: Digits are not required in a password.
   * 
   * @example
   * true
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether special characters are required in a password. Valid values:
   * 
   * *   true: Special characters are required in a password.
   * *   false: Special characters are not required in a password.
   * 
   * @example
   * true
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether uppercase letters are required in a password. Valid values:
   * 
   * *   true: Uppercase letters are required in a password.
   * *   false: Uppercase letters are not required in a password.
   * 
   * @example
   * true
   */
  requireUpperCaseChars?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      maxLoginAttempts: 'MaxLoginAttempts',
      maxPasswordAge: 'MaxPasswordAge',
      maxPasswordLength: 'MaxPasswordLength',
      minPasswordDifferentChars: 'MinPasswordDifferentChars',
      minPasswordLength: 'MinPasswordLength',
      passwordNotContainUsername: 'PasswordNotContainUsername',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowerCaseChars: 'RequireLowerCaseChars',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUpperCaseChars: 'RequireUpperCaseChars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      maxLoginAttempts: 'number',
      maxPasswordAge: 'number',
      maxPasswordLength: 'number',
      minPasswordDifferentChars: 'number',
      minPasswordLength: 'number',
      passwordNotContainUsername: 'boolean',
      passwordReusePrevention: 'number',
      requireLowerCaseChars: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUpperCaseChars: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponseBodyServiceStatus extends $tea.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether you have permissions to enable CloudSSO. Valid values:
   * 
   * *   Success: You have permissions to enable CloudSSO.
   * *   Failed: You do not have permissions to enable CloudSSO.
   * 
   * >  The value of this parameter is returned only if the value of `Status` is `Disabled`.
   * 
   * @example
   * Success
   */
  prerequisiteCheckResult?: string;
  /**
   * @remarks
   * The ID of the region.
   */
  regionsInUse?: string[];
  /**
   * @remarks
   * Indicates whether CloudSSO is enabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-11-05T02:58:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cause of the task failure.
   * 
   * >  This parameter is returned only when the value of `Status` is `Failed`.
   * 
   * @example
   * No Permission.
   */
  failureReason?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the CloudSSO identity.
   * 
   * @example
   * Alice
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2021-11-05T02:58:07Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object. The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shfqw1u1edszvxw5****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   ProvisionAccessConfiguration: An access configuration is provisioned.
   * *   DeprovisionAccessConfiguration: An access configuration is de-provisioned.
   * *   CreateAccessAssignment: Access permissions on an account in the resource directory are assigned.
   * *   DeleteAccessAssignment: Access permissions on an account in the resource directory are removed.
   * 
   * @example
   * DeleteAccessAssignment
   */
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
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-11-05T02:58:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cause of the task failure.
   * 
   * >  This parameter is returned only when the value of `Status` is `Failed`.
   * 
   * @example
   * No Permission.
   */
  failureReason?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2021-11-05T02:58:07Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shfqw1u1edszvxw5****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   ProvisionAccessConfiguration: An access configuration is provisioned.
   * *   DeprovisionAccessConfiguration: An access configuration is de-provisioned.
   * *   CreateAccessAssignment: Access permissions on an account in the resource directory are assigned.
   * *   DeleteAccessAssignment: Access permissions on an account in the resource directory are removed.
   * 
   * @example
   * DeleteAccessAssignment
   */
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

export class GetUserResponseBodyUserExternalId extends $tea.Model {
  /**
   * @remarks
   * The identifier of the user that is synchronized from an external IdP.
   * 
   * @example
   * c73******a5fdd5
   */
  id?: string;
  /**
   * @remarks
   * The method for external identity synchronization. Only System for Cross-domain Identity Management (SCIM) synchronization is supported.
   * 
   * @example
   * SCIM
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      issuer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  /**
   * @remarks
   * The time when the user was created. The value is displayed in UTC.
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * Alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The identifier information about the user synchronized from an external IdP.
   */
  externalId?: GetUserResponseBodyUserExternalId;
  /**
   * @remarks
   * The first name of the user.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the information about the user was modified. The value is displayed in UTC.
   * 
   * @example
   * 2021-10-26T06:43:55Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      externalId: 'ExternalId',
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
      externalId: GetUserResponseBodyUserExternalId,
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

export class GetUserIdRequestExternalId extends $tea.Model {
  /**
   * @remarks
   * The identifier of the user that is synchronized from an external IdP.
   * 
   * @example
   * c73******a5fdd5
   */
  id?: string;
  /**
   * @remarks
   * The method for external identity synchronization. Only System for Cross-domain Identity Management (SCIM) synchronization is supported.
   * 
   * @example
   * SCIM
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      issuer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningResponseBodyUserProvisioning extends $tea.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * testGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: indicates that the identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: indicates that the identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the RAM user provisioning. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning. The value is fixed as the name of the member in the resource directory.
   * 
   * @example
   * testRdMember
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the member.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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

export class GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration extends $tea.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default URL for a CloudSSO user who logs on to the Alibaba Cloud Management Console.
   * 
   * Default value: https://homenew.console.aliyun.com.
   * 
   * @example
   * https://homenew.console.aliyun.com
   */
  defaultLandingPage?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The duration of the logon session.
   * 
   * Unit: hours.
   * 
   * Valid values: 1 to 24.
   * 
   * Default value: 6.
   * 
   * @example
   * 10
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultLandingPage: 'DefaultLandingPage',
      directoryId: 'DirectoryId',
      sessionDuration: 'SessionDuration',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultLandingPage: 'string',
      directoryId: 'string',
      sessionDuration: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningEventResponseBodyUserProvisioningEvent extends $tea.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The number of execution failures.
   * 
   * @example
   * 3
   */
  errorCount?: number;
  /**
   * @remarks
   * The error message that is displayed when the last execution of the RAM user provisioning event failed.
   * 
   * @example
   * OperationConflict.UserProvisioning.Process.fail.ImsUserExists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  /**
   * @remarks
   * The time at which the RAM user provisioning event was last executed. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  latestAsyncTime?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * exampleGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The type of the source operation. Valid values:
   * 
   * *   StartProvisioning: enables the RAM user provisioning.
   * *   DeleteProvisioning: deletes the RAM user provisioning.
   * *   AddUserToGroup: adds a user to a user group.
   * *   RemoveUserFromGroup: removes a user from a user group.
   * *   UserProvisioningDeletionClearing: deletes the RAM user provisioning and clears resources in the background.
   * 
   * @example
   * AddUserToGroup
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning.
   * 
   * The value is fixed as the ID of the member in the resource directory.````
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning.
   * 
   * The value is fixed as the name of the member in the resource directory.````
   * 
   * @example
   * exampleRdMember
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the object.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      errorCount: 'ErrorCount',
      errorInfo: 'ErrorInfo',
      eventId: 'EventId',
      latestAsyncTime: 'LatestAsyncTime',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      sourceType: 'SourceType',
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
      directoryId: 'string',
      duplicationStrategy: 'string',
      errorCount: 'number',
      errorInfo: 'string',
      eventId: 'string',
      latestAsyncTime: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      sourceType: 'string',
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

export class GetUserProvisioningRdAccountStatisticsResponseBodyUserProvisioningStatistics extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The entity ID, which is the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  entityId?: string;
  /**
   * @remarks
   * The number of failed RAM user provisioning events.
   * 
   * @example
   * 4
   */
  failedEventCount?: number;
  /**
   * @remarks
   * The time when the RAM user provisioning was last performed.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  latestAsyncTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The entity type. The value is fixed as `RD Account`.
   * 
   * @example
   * RD Account
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      entityId: 'EntityId',
      failedEventCount: 'FailedEventCount',
      latestAsyncTime: 'LatestAsyncTime',
      ownerPk: 'OwnerPk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      entityId: 'string',
      failedEventCount: 'number',
      latestAsyncTime: 'string',
      ownerPk: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserProvisioningStatisticsResponseBodyUserProvisioningStatistics extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The entity ID, which is the ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  entityId?: string;
  /**
   * @remarks
   * The number of failed RAM user provisioning events that are associated with the RAM user provisioning.
   * 
   * @example
   * 3
   */
  failedEventCount?: number;
  /**
   * @remarks
   * The time when the RAM user provisioning was last performed.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  latestAsyncTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 139665787317****
   */
  ownerPk?: string;
  /**
   * @remarks
   * The entity type. The value is fixed as `User Provisioning`.
   * 
   * @example
   * User Provisioning
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      entityId: 'EntityId',
      failedEventCount: 'FailedEventCount',
      latestAsyncTime: 'LatestAsyncTime',
      ownerPk: 'OwnerPk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      entityId: 'string',
      failedEventCount: 'number',
      latestAsyncTime: 'string',
      ownerPk: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsResponseBodyAccessAssignments extends $tea.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access permissions were assigned.
   * 
   * @example
   * 2021-11-04T10:03:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the CloudSSO identity.
   * 
   * @example
   * Alice
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object.
   * 
   * The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * VPC-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The first time when the access configuration was provisioned.
   * 
   * @example
   * 2021-07-26T08:54:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the custom policy that is created for an account in the resource directory.
   */
  RAMPolicyNames?: string[];
  /**
   * @remarks
   * The name of the RAM role that is created for an account in the resource directory.
   * 
   * @example
   * AliyunReservedSSO-VPC-Admin
   */
  RAMRoleName?: string;
  /**
   * @remarks
   * The name of the Security Assertion Markup Language (SAML) identity provider (IdP) that is created within an account in the resource directory.
   * 
   * @example
   * AliyunReservedSSO-d-00fc2p61****
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The status of the access configuration. Valid values:
   * 
   * *   Provisioned: The access configuration is provisioned.
   * *   ReprovisionRequired: The access configuration needs to be re-provisioned.
   * *   DeprovisionFailed: The access configuration failed to be provisioned.
   * 
   * @example
   * Provisioned
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * If the value of TargetType is `RD-Account`, the value of this parameter is the UID of an account in the resource directory.
   * 
   * @example
   * 101522521960****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * SharedServices_5009****
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The last time when the access configuration was provisioned.
   * 
   * @example
   * 2021-07-26T08:54:18Z
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * @example
   * 900
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notification.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The time when the information about the access configuration was modified.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
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
  /**
   * @remarks
   * The time when the directory was created.
   * 
   * @example
   * 2021-06-30T08:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * new-example
   */
  directoryName?: string;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the directory was modified.
   * 
   * @example
   * 2021-10-25T09:13:24Z
   */
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
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * idp-c-00dt9gnl7fmjaw9c****
   */
  certificateId?: string;
  /**
   * @remarks
   * The issuer of the certificate.
   * 
   * @example
   * 1.2.840.113549.1.9.1=#160d696e666f406f6b74612e63****,CN=dev-xxxxxx,OU=SSOProvider,O=Okta,L=San Francisco,ST=California,C=US
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2030-06-23T07:04:37Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2020-06-23T07:03:37Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The public key of the certificate. The value of this parameter is in the PEM format and is Base64-encoded.
   * 
   * @example
   * MIIBIjANBgkqhkiG****
   */
  publicKey?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 159289587****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * SHA256withRSA
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The subject of the certificate.
   * 
   * @example
   * 1.2.840.113549.1.9.1=#160d696e666f406f6b74612e63****,CN=dev-xxxxxx,OU=SSOProvider,O=Okta,L=San Francisco,ST=California,C=US
   */
  subject?: string;
  /**
   * @remarks
   * The version of the certificate.
   * 
   * @example
   * 3
   */
  version?: number;
  /**
   * @remarks
   * The X.509 certificate in the PEM format.
   * 
   * @example
   * MIIDpDCCAoygAwIBAgIG****
   */
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
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * AliceLee@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the user was added to the user group.
   * 
   * @example
   * 2021-11-01T06:58:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * Alice
   */
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
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The group is synchronized from an external IdP.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when the information about the group was modified.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
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
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the user was added to the user group.
   * 
   * @example
   * 2021-11-01T06:58:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The ID of the MFA device.
   * 
   * @example
   * mfa-00ujhet8pycljj7j****
   */
  deviceId?: string;
  /**
   * @remarks
   * The name of the MFA device.
   * 
   * @example
   * Alice-MFA1
   */
  deviceName?: string;
  /**
   * @remarks
   * The type of the MFA device. The value is fixed as TOTP, which indicates a virtual MFA device. Virtual MFA devices are based on the Time-based One-time Password (TOTP) algorithm.
   * 
   * @example
   * TOTP
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the MFA device was enabled.
   * 
   * @example
   * 2021-10-29T09:14:06Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
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
  /**
   * @remarks
   * The time when the policy was created for the access configuration.
   * 
   * @example
   * 2021-11-03T06:37:25Z
   */
  addTime?: string;
  /**
   * @remarks
   * The configurations of the inline policy.
   * 
   * >  This parameter is returned only when the value of the PermissionPolicyType parameter is Inline.
   * 
   * @example
   * {\\"Statement\\": [{\\"Action\\": \\"*\\",\\"Effect\\": \\"Allow\\",\\"Resource\\": \\"*\\"}],\\"Version\\": \\"1\\"}
   */
  permissionPolicyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * AliyunECSFullAccess
   */
  permissionPolicyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * System
   */
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
  /**
   * @remarks
   * The time when the SCIM credential was created.
   * 
   * @example
   * 2021-11-09T08:12:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The type of the SCIM credential.
   * 
   * @example
   * BearerToken
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The time when the SCIM credential expires.
   * 
   * @example
   * 2022-11-09T08:12:52Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the SCIM credential. Valid values:
   * 
   * *   Enabled: The SCIM credential is enabled.
   * *   Disabled: The SCIM credential is disabled.
   * 
   * @example
   * Enabled
   */
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2021-11-09T05:50:50Z
   */
  endTime?: string;
  /**
   * @remarks
   * The cause of the task failure.
   * 
   * >  This parameter is returned only when the value of `Status` is `Failed`.
   * 
   * @example
   * No Permission.
   */
  failureReason?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the CloudSSO identity.
   * 
   * @example
   * Alice
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2021-11-09T05:50:50Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object.
   * 
   * The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * t-sh5k4gesm6twlrqb****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   ProvisionAccessConfiguration: An access configuration is provisioned.
   * *   DeprovisionAccessConfiguration: An access configuration is de-provisioned.
   * *   CreateAccessAssignment: Access permissions on an account in the resource directory are assigned.
   * *   DeleteAccessAssignment: Access permissions on an account in the resource directory are removed.
   * 
   * @example
   * CreateAccessAssignment
   */
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

export class ListUserProvisioningEventsResponseBodyUserProvisioningEvents extends $tea.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Keep
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The number of execution failures.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The error message that is displayed when the last execution of the RAM user provisioning event failed.
   * 
   * @example
   * OperationConflict.UserProvisioning.Process.fail.ImsUserExists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  /**
   * @remarks
   * The time at which the RAM user provisioning event was last executed. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:55Z
   */
  latestAsyncTime?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If you set the `PrincipalType` parameter to `Group`, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If you set the `PrincipalType` parameter to `User`, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * exampleGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The type of the source operation. Valid values:
   * 
   * *   StartProvisioning: enables the RAM user provisioning.
   * *   DeleteProvisioning: deletes the RAM user provisioning.
   * *   AddUserToGroup: adds a user to a user group.
   * *   RemoveUserFromGroup: removes a user from a user group.
   * *   UserProvisioningDeletionClearing: deletes the RAM user provisioning and clears resources in the background.
   * 
   * @example
   * StartProvisioning
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning.
   * 
   * The value is fixed as the ID of the account in the resource directory.````
   * 
   * @example
   * 153218*******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning.
   * 
   * If `RD-Account` is returned, the value of this parameter is the name of the account that is used to access the instance.``
   * 
   * @example
   * exampleRdMember
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the member.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:55Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      errorCount: 'ErrorCount',
      errorInfo: 'ErrorInfo',
      eventId: 'EventId',
      latestAsyncTime: 'LatestAsyncTime',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      sourceType: 'SourceType',
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
      directoryId: 'string',
      duplicationStrategy: 'string',
      errorCount: 'number',
      errorInfo: 'string',
      eventId: 'string',
      latestAsyncTime: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      sourceType: 'string',
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

export class ListUserProvisioningsResponseBodyUserProvisionings extends $tea.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * this is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 1639738******
   */
  ownerPk?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * testGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: The identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the RAM user provisioning. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  targetId?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * testRdMember
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the object.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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

export class ListUsersResponseBodyUsersExternalId extends $tea.Model {
  /**
   * @remarks
   * The identifier of the user that is synchronized from an external IdP.
   * 
   * @example
   * c73******a5fdd5
   */
  id?: string;
  /**
   * @remarks
   * The method for external identity synchronization. Only System for Cross-domain Identity Management (SCIM) synchronization is supported.
   * 
   * @example
   * SCIM
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      issuer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  /**
   * @remarks
   * The time when the user was created. The value is displayed in UTC.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * AliceLee
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * AliceLee@example.onmicrosoft.com
   */
  email?: string;
  /**
   * @remarks
   * The identifier information about the user synchronized from an external IdP.
   */
  externalId?: ListUsersResponseBodyUsersExternalId;
  /**
   * @remarks
   * The first name of the user.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external IdP.
   * 
   * @example
   * Synchronized
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the information about the user was modified. The value is displayed in UTC.
   * 
   * @example
   * 2021-06-30T09:20:08Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00bikzkuzbb58luh****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * AliceLee@example.onmicrosoft.com
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      externalId: 'ExternalId',
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
      externalId: ListUsersResponseBodyUsersExternalId,
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object. The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shqlhd8uvt280rtm****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as ProvisionAccessConfiguration, which indicates that an access configuration is provisioned.
   * 
   * @example
   * ProvisionAccessConfiguration
   */
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
  /**
   * @remarks
   * The Binding method for initiating a SAML request. Values:
   * 
   * - Post: Initiate the SAML request using the Post method. 
   * - Redirect: Initiate the SAML request using the Redirect method.
   * 
   * @example
   * Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The ID of the SAML signing certificate.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The time when the IdP was configured for the first time.
   * 
   * @example
   * 2021-11-10T02:57:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The metadata file of the IdP. The value of this parameter is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVyc2lvbj0iMS4****
   */
  encodedMetadataDocument?: string;
  /**
   * @remarks
   * The entity ID of the IdP.
   * 
   * @example
   * http://www.okta.com/exk3qwgtjhetR2Od****
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP.
   */
  loginUrl?: string;
  /**
   * @remarks
   * The status of SSO logon. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Disabled
   */
  SSOStatus?: string;
  /**
   * @remarks
   * The time when the IdP configurations were last modified.
   * 
   * @example
   * 2021-11-10T02:57:16Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Indicates whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
   * 
   * *   true: yes
   * *   false: no (default)
   * 
   * @example
   * false
   */
  wantRequestSigned?: boolean;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'BindingType',
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
      bindingType: 'string',
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
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The time when the access configuration was created.
   * 
   * @example
   * 2021-11-02T08:44:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The status notification.
   */
  statusNotifications?: string[];
  /**
   * @remarks
   * The time when the information about the access configuration was modified.
   * 
   * @example
   * 2021-11-02T10:10:01Z
   */
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
  /**
   * @remarks
   * The time when the directory was created.
   * 
   * @example
   * 2021-06-30T08:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * new-example
   */
  directoryName?: string;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the directory was modified.
   * 
   * @example
   * 2021-10-25T09:13:24Z
   */
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
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * NewTestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when the information about the group was modified.
   * 
   * @example
   * 2021-11-01T06:06:11Z
   */
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
  /**
   * @remarks
   * The time when the SCIM credential was created.
   * 
   * @example
   * 2021-11-09T08:12:52Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The type of the SCIM credential.
   * 
   * @example
   * BearerToken
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The time when the SCIM credential expires.
   * 
   * @example
   * 2022-11-09T08:12:52Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the SCIM credential. Valid values:
   * 
   * *   Enabled: The SCIM credential is enabled.
   * *   Disabled: The SCIM credential is disabled.
   * 
   * @example
   * Disabled
   */
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
  /**
   * @remarks
   * The time when the user was created.
   * 
   * @example
   * 2021-10-26T03:03:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * This is a user.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * AliceLee@example.com
   */
  email?: string;
  /**
   * @remarks
   * The first name of the user.
   * 
   * @example
   * Alice
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the user.
   * 
   * @example
   * Lee
   */
  lastName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   Manual: The user is manually created.
   * *   Synchronized: The user is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   Enabled: The logon of the user is enabled.
   * *   Disabled: The logon of the user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the information about the user was modified.
   * 
   * @example
   * 2021-10-26T07:32:32Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * Alice
   */
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
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * *   Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * *   Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Delete
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The description for the RAM user provisioning.
   * 
   * @example
   * This is a user provisioning.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource directory belongs.
   * 
   * @example
   * 164987310*****
   */
  ownerPk?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * *   If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * *   If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * testUserName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * *   User: indicates that the identity of the RAM user provisioning is a CloudSSO user.
   * *   Group: indicates that the identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the RAM user provisioning. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning. The value is fixed as the ID of the account in the resource directory.
   * 
   * @example
   * u-02ha881d*****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning. The value is fixed as the name of the resource directory.
   * 
   * @example
   * testMemberName
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the object.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
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

export class UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration extends $tea.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default URL for a CloudSSO user who logs on to the Alibaba Cloud Management Console.
   * 
   * Default value: https://homenew.console.aliyun.com.
   * 
   * @example
   * https://homenew.console.aliyun.com
   */
  defaultLandingPage?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The duration of the logon session.
   * 
   * Unit: hours.
   * 
   * Valid values: 1 to 24.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-11-28T03:55:42Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultLandingPage: 'DefaultLandingPage',
      directoryId: 'DirectoryId',
      sessionDuration: 'SessionDuration',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultLandingPage: 'string',
      directoryId: 'string',
      sessionDuration: 'number',
      updateTime: 'string',
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
   * Adds a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * You can add up to two SAML signing certificates.
   * This topic provides an example on how to add a SAML signing certificate to the directory `d-00fc2p61****`.
   * 
   * @param request - AddExternalSAMLIdPCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddExternalSAMLIdPCertificateResponse
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
   * Adds a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * You can add up to two SAML signing certificates.
   * This topic provides an example on how to add a SAML signing certificate to the directory `d-00fc2p61****`.
   * 
   * @param request - AddExternalSAMLIdPCertificateRequest
   * @returns AddExternalSAMLIdPCertificateResponse
   */
  async addExternalSAMLIdPCertificate(request: AddExternalSAMLIdPCertificateRequest): Promise<AddExternalSAMLIdPCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  /**
   * Adds a policy to an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to add the system policy `AliyunECSFullAccess` to the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - AddPermissionPolicyToAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPermissionPolicyToAccessConfigurationResponse
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
   * Adds a policy to an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to add the system policy `AliyunECSFullAccess` to the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - AddPermissionPolicyToAccessConfigurationRequest
   * @returns AddPermissionPolicyToAccessConfigurationResponse
   */
  async addPermissionPolicyToAccessConfiguration(request: AddPermissionPolicyToAccessConfigurationRequest): Promise<AddPermissionPolicyToAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPermissionPolicyToAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Adds a user to a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot add a user to a group that is synchronized by using SCIM.
   * This topic provides an example of how to add the user `u-00q8wbq42wiltcrk****` to the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - AddUserToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToGroupResponse
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
   * Adds a user to a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot add a user to a group that is synchronized by using SCIM.
   * This topic provides an example of how to add the user `u-00q8wbq42wiltcrk****` to the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - AddUserToGroupRequest
   * @returns AddUserToGroupResponse
   */
  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
   * Clears the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * If single sign-on (SSO) logon is disabled, you can clear the configurations of a SAML IdP. If SSO logon is enabled, you cannot clear the configurations.
   * This topic provides an example on how to clear the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - ClearExternalSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearExternalSAMLIdentityProviderResponse
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
   * Clears the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * If single sign-on (SSO) logon is disabled, you can clear the configurations of a SAML IdP. If SSO logon is enabled, you cannot clear the configurations.
   * This topic provides an example on how to clear the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - ClearExternalSAMLIdentityProviderRequest
   * @returns ClearExternalSAMLIdentityProviderResponse
   */
  async clearExternalSAMLIdentityProvider(request: ClearExternalSAMLIdentityProviderRequest): Promise<ClearExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Assigns access permissions on an account in your resource directory to a user or a group by using an access configuration.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * For more information about how to assign permissions on an account in your resource directory, see [Overview of multi-account authorization](https://help.aliyun.com/document_detail/266726.html).
   * This topic provides an example on how to assign access permissions on the account `114240524784****` in your resource directory to the CloudSSO user `u-00q8wbq42wiltcrk****` by using the access configuration `ac-00jhtfl8thteu6uj****`. After the call is successful, the CloudSSO user can access resources within the account in the resource directory.
   * 
   * @param request - CreateAccessAssignmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessAssignmentResponse
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
   * Assigns access permissions on an account in your resource directory to a user or a group by using an access configuration.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * For more information about how to assign permissions on an account in your resource directory, see [Overview of multi-account authorization](https://help.aliyun.com/document_detail/266726.html).
   * This topic provides an example on how to assign access permissions on the account `114240524784****` in your resource directory to the CloudSSO user `u-00q8wbq42wiltcrk****` by using the access configuration `ac-00jhtfl8thteu6uj****`. After the call is successful, the CloudSSO user can access resources within the account in the resource directory.
   * 
   * @param request - CreateAccessAssignmentRequest
   * @returns CreateAccessAssignmentResponse
   */
  async createAccessAssignment(request: CreateAccessAssignmentRequest): Promise<CreateAccessAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessAssignmentWithOptions(request, runtime);
  }

  /**
   * Creates an access configuration.
   * 
   * @remarks
   * For more information about access configurations, see [Overview of access configurations](https://help.aliyun.com/document_detail/266737.html).
   * This topic provides an example on how to create an access configuration named `ECS-Admin`.
   * 
   * @param request - CreateAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessConfigurationResponse
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
   * Creates an access configuration.
   * 
   * @remarks
   * For more information about access configurations, see [Overview of access configurations](https://help.aliyun.com/document_detail/266737.html).
   * This topic provides an example on how to create an access configuration named `ECS-Admin`.
   * 
   * @param request - CreateAccessConfigurationRequest
   * @returns CreateAccessConfigurationResponse
   */
  async createAccessConfiguration(request: CreateAccessConfigurationRequest): Promise<CreateAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates a directory.
   * 
   * @remarks
   * A directory is a CloudSSO instance. Before you can use CloudSSO, you must create a directory. The directory is used to manage all CloudSSO resources.
   * To create a directory, you must select a region. Alibaba Cloud stores data in the directory only in the region that you select. However, you can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions. You can select a region to create a directory based on your security compliance requirements and the geographic location of specific users. If you do not have strict security compliance requirements, we recommend that you select a region that is the closest to the geographical location of the specific users. This way, access to cloud resources is accelerated. You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), US (Silicon Valley), or Germany (Frankfurt) region.
   * This topic provides an example on how to create a directory named `example` in the China (Shanghai) region.
   * ## Limits
   * - You can create only one directory for a management account.
   * - If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
   * 
   * @param request - CreateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDirectoryResponse
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
   * Creates a directory.
   * 
   * @remarks
   * A directory is a CloudSSO instance. Before you can use CloudSSO, you must create a directory. The directory is used to manage all CloudSSO resources.
   * To create a directory, you must select a region. Alibaba Cloud stores data in the directory only in the region that you select. However, you can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions. You can select a region to create a directory based on your security compliance requirements and the geographic location of specific users. If you do not have strict security compliance requirements, we recommend that you select a region that is the closest to the geographical location of the specific users. This way, access to cloud resources is accelerated. You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), US (Silicon Valley), or Germany (Frankfurt) region.
   * This topic provides an example on how to create a directory named `example` in the China (Shanghai) region.
   * ## Limits
   * - You can create only one directory for a management account.
   * - If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
   * 
   * @param request - CreateDirectoryRequest
   * @returns CreateDirectoryResponse
   */
  async createDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDirectoryWithOptions(request, runtime);
  }

  /**
   * Creates a group.
   * 
   * @remarks
   * This topic provides an example on how to create a group named `TestGroup`.
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
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
   * Creates a group.
   * 
   * @remarks
   * This topic provides an example on how to create a group named `TestGroup`.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Creates a Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * SCIM credentials are required for SCIM synchronization. You can create up to two SCIM credentials.
   * This topic provides an example on how to create a SCIM credential within the directory `d-00fc2p61****`.
   * 
   * @param request - CreateSCIMServerCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSCIMServerCredentialResponse
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
   * Creates a Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * SCIM credentials are required for SCIM synchronization. You can create up to two SCIM credentials.
   * This topic provides an example on how to create a SCIM credential within the directory `d-00fc2p61****`.
   * 
   * @param request - CreateSCIMServerCredentialRequest
   * @returns CreateSCIMServerCredentialResponse
   */
  async createSCIMServerCredential(request: CreateSCIMServerCredentialRequest): Promise<CreateSCIMServerCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSCIMServerCredentialWithOptions(request, runtime);
  }

  /**
   * Creates a user.
   * 
   * @remarks
   * This topic provides an example on how to create a user named `Alice`.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
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
   * Creates a user.
   * 
   * @remarks
   * This topic provides an example on how to create a user named `Alice`.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Creates a Resource Access Management (RAM) user provisioning.
   * 
   * @remarks
   * You can create a RAM user provisioning for a member in your resource directory to create a RAM user that has the same username as a CloudSSO user. This way, the CloudSSO user can access the resources of the member as the RAM user.
   * 
   * @param request - CreateUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserProvisioningResponse
   */
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

  /**
   * Creates a Resource Access Management (RAM) user provisioning.
   * 
   * @remarks
   * You can create a RAM user provisioning for a member in your resource directory to create a RAM user that has the same username as a CloudSSO user. This way, the CloudSSO user can access the resources of the member as the RAM user.
   * 
   * @param request - CreateUserProvisioningRequest
   * @returns CreateUserProvisioningResponse
   */
  async createUserProvisioning(request: CreateUserProvisioningRequest): Promise<CreateUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Removes the access permissions on an account in a resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to remove the access permissions on the account `114240524784****` in the resource directory from the CloudSSO user `u-00q8wbq42wiltcrk****`. The access permissions are assigned by using the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - DeleteAccessAssignmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessAssignmentResponse
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
   * Removes the access permissions on an account in a resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to remove the access permissions on the account `114240524784****` in the resource directory from the CloudSSO user `u-00q8wbq42wiltcrk****`. The access permissions are assigned by using the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - DeleteAccessAssignmentRequest
   * @returns DeleteAccessAssignmentResponse
   */
  async deleteAccessAssignment(request: DeleteAccessAssignmentRequest): Promise<DeleteAccessAssignmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessAssignmentWithOptions(request, runtime);
  }

  /**
   * Deletes an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to delete the access configuration whose ID is `ac-001j9mcm3k7335bc****`.
   * ## Prerequisites
   * The access configuration that you want to delete is de-provisioned from the accounts in your resource directory. For more information, see [DeprovisionAccessConfiguration](https://help.aliyun.com/document_detail/338352.html).
   * 
   * @param request - DeleteAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessConfigurationResponse
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
   * Deletes an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to delete the access configuration whose ID is `ac-001j9mcm3k7335bc****`.
   * ## Prerequisites
   * The access configuration that you want to delete is de-provisioned from the accounts in your resource directory. For more information, see [DeprovisionAccessConfiguration](https://help.aliyun.com/document_detail/338352.html).
   * 
   * @param request - DeleteAccessConfigurationRequest
   * @returns DeleteAccessConfigurationResponse
   */
  async deleteAccessConfiguration(request: DeleteAccessConfigurationRequest): Promise<DeleteAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes a directory.
   * 
   * @remarks
   * This topic provides an example on how to delete a directory whose ID is `d-00fc2p61****`.
   * ## Prerequisites
   * No resources are contained in the directory that you want to delete.
   * *   Access permissions on the accounts in your resource directory are removed from all users and groups. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Users are deleted. For more information, see [DeleteUser](https://help.aliyun.com/document_detail/341671.html).
   * *   Groups are deleted. For more information, see [DeleteGroup](https://help.aliyun.com/document_detail/341821.html).
   * *   Access configurations are deleted. For more information, see [DeleteAccessConfiguration](https://help.aliyun.com/document_detail/336907.html).
   * *   System for Cross-domain Identity Management (SCIM) credentials are deleted. For more information, see [DeleteSCIMServerCredential](https://help.aliyun.com/document_detail/341842.html).
   * *   SSO logon configurations are deleted. For more information, see [ClearExternalSAMLIdentityProvider](https://help.aliyun.com/document_detail/341573.html).
   * 
   * @param request - DeleteDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDirectoryResponse
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
   * Deletes a directory.
   * 
   * @remarks
   * This topic provides an example on how to delete a directory whose ID is `d-00fc2p61****`.
   * ## Prerequisites
   * No resources are contained in the directory that you want to delete.
   * *   Access permissions on the accounts in your resource directory are removed from all users and groups. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Users are deleted. For more information, see [DeleteUser](https://help.aliyun.com/document_detail/341671.html).
   * *   Groups are deleted. For more information, see [DeleteGroup](https://help.aliyun.com/document_detail/341821.html).
   * *   Access configurations are deleted. For more information, see [DeleteAccessConfiguration](https://help.aliyun.com/document_detail/336907.html).
   * *   System for Cross-domain Identity Management (SCIM) credentials are deleted. For more information, see [DeleteSCIMServerCredential](https://help.aliyun.com/document_detail/341842.html).
   * *   SSO logon configurations are deleted. For more information, see [ClearExternalSAMLIdentityProvider](https://help.aliyun.com/document_detail/341573.html).
   * 
   * @param request - DeleteDirectoryRequest
   * @returns DeleteDirectoryResponse
   */
  async deleteDirectory(request: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoryWithOptions(request, runtime);
  }

  /**
   * Deletes a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a group that is synchronized by using SCIM.
   * ## Prerequisites
   * The group that you want to delete is not associated with the following resources. If the group is associated with the resources, the deletion fails.
   * *   Users: You must remove users from the group. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
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
   * Deletes a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a group that is synchronized by using SCIM.
   * ## Prerequisites
   * The group that you want to delete is not associated with the following resources. If the group is associated with the resources, the deletion fails.
   * *   Users: You must remove users from the group. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the group. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * Unbinds a multi-factor authentication (MFA) device from a user.
   * 
   * @remarks
   * This topic provides an example on how to unbind the MFA device `mfa-00ujhet8pycljj7j****` from the user `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - DeleteMFADeviceForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMFADeviceForUserResponse
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
   * Unbinds a multi-factor authentication (MFA) device from a user.
   * 
   * @remarks
   * This topic provides an example on how to unbind the MFA device `mfa-00ujhet8pycljj7j****` from the user `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - DeleteMFADeviceForUserRequest
   * @returns DeleteMFADeviceForUserResponse
   */
  async deleteMFADeviceForUser(request: DeleteMFADeviceForUserRequest): Promise<DeleteMFADeviceForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMFADeviceForUserWithOptions(request, runtime);
  }

  /**
   * Deletes a Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * After a SCIM credential is deleted, the synchronization task that uses the SCIM credential fails.
   * This topic provides an example on how to delete the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`.
   * 
   * @param request - DeleteSCIMServerCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSCIMServerCredentialResponse
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
   * Deletes a Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * After a SCIM credential is deleted, the synchronization task that uses the SCIM credential fails.
   * This topic provides an example on how to delete the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`.
   * 
   * @param request - DeleteSCIMServerCredentialRequest
   * @returns DeleteSCIMServerCredentialResponse
   */
  async deleteSCIMServerCredential(request: DeleteSCIMServerCredentialRequest): Promise<DeleteSCIMServerCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSCIMServerCredentialWithOptions(request, runtime);
  }

  /**
   * Deletes a user.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a user that is synchronized by using SCIM.
   * ## Prerequisites
   * The user that you want to delete is not associated with the following resources. If the user is associated with the resources, the deletion fails.
   * *   Multi-factor authentication (MFA) devices: You must unbind the MFA devices from the user. For more information, see [DeleteMFADeviceForUser](https://help.aliyun.com/document_detail/341675.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Groups: You must remove the user from groups. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
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
   * Deletes a user.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot delete a user that is synchronized by using SCIM.
   * ## Prerequisites
   * The user that you want to delete is not associated with the following resources. If the user is associated with the resources, the deletion fails.
   * *   Multi-factor authentication (MFA) devices: You must unbind the MFA devices from the user. For more information, see [DeleteMFADeviceForUser](https://help.aliyun.com/document_detail/341675.html).
   * *   Access permissions: You must remove the access permissions on the accounts in your resource directory from the user. For more information, see [DeleteAccessAssignment](https://help.aliyun.com/document_detail/338350.html).
   * *   Groups: You must remove the user from groups. For more information, see [RemoveUserFromGroup](https://help.aliyun.com/document_detail/335116.html).
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - DeleteUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserProvisioningResponse
   */
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

  /**
   * Deletes a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - DeleteUserProvisioningRequest
   * @returns DeleteUserProvisioningResponse
   */
  async deleteUserProvisioning(request: DeleteUserProvisioningRequest): Promise<DeleteUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - DeleteUserProvisioningEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserProvisioningEventResponse
   */
  async deleteUserProvisioningEventWithOptions(request: DeleteUserProvisioningEventRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserProvisioningEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserProvisioningEvent",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserProvisioningEventResponse>(await this.callApi(params, req, runtime), new DeleteUserProvisioningEventResponse({}));
  }

  /**
   * Deletes a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - DeleteUserProvisioningEventRequest
   * @returns DeleteUserProvisioningEventResponse
   */
  async deleteUserProvisioningEvent(request: DeleteUserProvisioningEventRequest): Promise<DeleteUserProvisioningEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserProvisioningEventWithOptions(request, runtime);
  }

  /**
   * De-provisions an access configuration from an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to de-provision the access configuration `ac-00jhtfl8thteu6uj****` from the account `114240524784****` in your resource directory.
   * 
   * @param request - DeprovisionAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprovisionAccessConfigurationResponse
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
   * De-provisions an access configuration from an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to de-provision the access configuration `ac-00jhtfl8thteu6uj****` from the account `114240524784****` in your resource directory.
   * 
   * @param request - DeprovisionAccessConfigurationRequest
   * @returns DeprovisionAccessConfigurationResponse
   */
  async deprovisionAccessConfiguration(request: DeprovisionAccessConfigurationRequest): Promise<DeprovisionAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deprovisionAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Disables the delegated administrator account of CloudSSO.
   * 
   * @param request - DisableDelegateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDelegateAccountResponse
   */
  async disableDelegateAccountWithOptions(request: DisableDelegateAccountRequest, runtime: $Util.RuntimeOptions): Promise<DisableDelegateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableDelegateAccount",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDelegateAccountResponse>(await this.callApi(params, req, runtime), new DisableDelegateAccountResponse({}));
  }

  /**
   * Disables the delegated administrator account of CloudSSO.
   * 
   * @param request - DisableDelegateAccountRequest
   * @returns DisableDelegateAccountResponse
   */
  async disableDelegateAccount(request: DisableDelegateAccountRequest): Promise<DisableDelegateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDelegateAccountWithOptions(request, runtime);
  }

  /**
   * Disables CloudSSO.
   * 
   * @remarks
   * If your CloudSSO has no directory, you can disable CloudSSO based on your business requirements. After you disable CloudSSO, you can enable it at any time.
   * 
   * @param request - DisableServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableServiceResponse
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
   * Disables CloudSSO.
   * 
   * @remarks
   * If your CloudSSO has no directory, you can disable CloudSSO based on your business requirements. After you disable CloudSSO, you can enable it at any time.
   * @returns DisableServiceResponse
   */
  async disableService(): Promise<DisableServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableServiceWithOptions(runtime);
  }

  /**
   * Enables the delegated administrator account of CloudSSO.
   * 
   * @remarks
   * You can use the management account of a resource directory to specify a member of the resource directory as the delegated administrator account of CloudSSO. For more information, see [Add a delegated administrator account](https://help.aliyun.com/document_detail/208117.html).
   * After the delegated administrator account of CloudSSO is specified, you can call this operation to enable the delegated administrator account of CloudSSO to manage CloudSSO resources.
   * 
   * @param request - EnableDelegateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDelegateAccountResponse
   */
  async enableDelegateAccountWithOptions(request: EnableDelegateAccountRequest, runtime: $Util.RuntimeOptions): Promise<EnableDelegateAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableDelegateAccount",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableDelegateAccountResponse>(await this.callApi(params, req, runtime), new EnableDelegateAccountResponse({}));
  }

  /**
   * Enables the delegated administrator account of CloudSSO.
   * 
   * @remarks
   * You can use the management account of a resource directory to specify a member of the resource directory as the delegated administrator account of CloudSSO. For more information, see [Add a delegated administrator account](https://help.aliyun.com/document_detail/208117.html).
   * After the delegated administrator account of CloudSSO is specified, you can call this operation to enable the delegated administrator account of CloudSSO to manage CloudSSO resources.
   * 
   * @param request - EnableDelegateAccountRequest
   * @returns EnableDelegateAccountResponse
   */
  async enableDelegateAccount(request: EnableDelegateAccountRequest): Promise<EnableDelegateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDelegateAccountWithOptions(request, runtime);
  }

  /**
   * Enables CloudSSO.
   * 
   * @remarks
   * You can call this operation only if your account belongs to the management account that is used to enable a resource directory and has permissions to enable CloudSSO. For more information, see [Enable CloudSSO](https://help.aliyun.com/document_detail/262819.html).
   * If you call this operation, you agree to the [Alibaba Cloud International Website Product Terms of Service](https://www.alibabacloud.com/help/doc-detail/42416.htm).
   * 
   * @param request - EnableServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServiceResponse
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
   * Enables CloudSSO.
   * 
   * @remarks
   * You can call this operation only if your account belongs to the management account that is used to enable a resource directory and has permissions to enable CloudSSO. For more information, see [Enable CloudSSO](https://help.aliyun.com/document_detail/262819.html).
   * If you call this operation, you agree to the [Alibaba Cloud International Website Product Terms of Service](https://www.alibabacloud.com/help/doc-detail/42416.htm).
   * @returns EnableServiceResponse
   */
  async enableService(): Promise<EnableServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableServiceWithOptions(runtime);
  }

  /**
   * Queries information about an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the access configuration whose ID is `ac-00ccule7tadaijxc****`.
   * 
   * @param request - GetAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessConfigurationResponse
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
   * Queries information about an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the access configuration whose ID is `ac-00ccule7tadaijxc****`.
   * 
   * @param request - GetAccessConfigurationRequest
   * @returns GetAccessConfigurationResponse
   */
  async getAccessConfiguration(request: GetAccessConfigurationRequest): Promise<GetAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries information about a directory.
   * 
   * @remarks
   * This topic provides an example on how to query information about the directory whose ID is `d-00fc2p61****`.
   * 
   * @param request - GetDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryResponse
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
   * Queries information about a directory.
   * 
   * @remarks
   * This topic provides an example on how to query information about the directory whose ID is `d-00fc2p61****`.
   * 
   * @param request - GetDirectoryRequest
   * @returns GetDirectoryResponse
   */
  async getDirectory(request: GetDirectoryRequest): Promise<GetDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryWithOptions(request, runtime);
  }

  /**
   * Queries information about a Security Assertion Markup Language (SAML) service provider (SP).
   * 
   * @remarks
   * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an identity provider (IdP).
   * This topic provides an example on how to query the information about the SP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetDirectorySAMLServiceProviderInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectorySAMLServiceProviderInfoResponse
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
   * Queries information about a Security Assertion Markup Language (SAML) service provider (SP).
   * 
   * @remarks
   * During SAML 2.0-based single sign-on (SSO) logon, CloudSSO is an SP, and the identity management system of an enterprise is an identity provider (IdP).
   * This topic provides an example on how to query the information about the SP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetDirectorySAMLServiceProviderInfoRequest
   * @returns GetDirectorySAMLServiceProviderInfoResponse
   */
  async getDirectorySAMLServiceProviderInfo(request: GetDirectorySAMLServiceProviderInfoRequest): Promise<GetDirectorySAMLServiceProviderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectorySAMLServiceProviderInfoWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of a directory.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of a directory whose ID is `d-00fc2p61****`. The statistics include the number of users, quota for users, number of groups, quota for groups, number of access configurations, quota for access configurations, number of access permissions that are assigned, number of system policies that can be configured for an access configuration, number of System for Cross-domain Identity Management (SCIM) credentials, number of asynchronous tasks, status of single sign-on (SSO) logon, and status of SCIM synchronization.
   * 
   * @param request - GetDirectoryStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDirectoryStatisticsResponse
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
   * Queries the statistics of a directory.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of a directory whose ID is `d-00fc2p61****`. The statistics include the number of users, quota for users, number of groups, quota for groups, number of access configurations, quota for access configurations, number of access permissions that are assigned, number of system policies that can be configured for an access configuration, number of System for Cross-domain Identity Management (SCIM) credentials, number of asynchronous tasks, status of single sign-on (SSO) logon, and status of SCIM synchronization.
   * 
   * @param request - GetDirectoryStatisticsRequest
   * @returns GetDirectoryStatisticsResponse
   */
  async getDirectoryStatistics(request: GetDirectoryStatisticsRequest): Promise<GetDirectoryStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectoryStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * This topic provides an example on how to query the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetExternalSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExternalSAMLIdentityProviderResponse
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
   * Queries the configurations of a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
   * This topic provides an example on how to query the configurations of the SAML IdP within the directory `d-00fc2p61****`.
   * 
   * @param request - GetExternalSAMLIdentityProviderRequest
   * @returns GetExternalSAMLIdentityProviderResponse
   */
  async getExternalSAMLIdentityProvider(request: GetExternalSAMLIdentityProviderRequest): Promise<GetExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Queries information about a group.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the group `g-00jqzghi2n3o5hkh****` in the directory `d-00fc2p61****`.
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
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
   * Queries information about a group.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the group `g-00jqzghi2n3o5hkh****` in the directory `d-00fc2p61****`.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Queries the logon preference of CloudSSO users.
   * 
   * @param request - GetLoginPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginPreferenceResponse
   */
  async getLoginPreferenceWithOptions(request: GetLoginPreferenceRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginPreferenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginPreference",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginPreferenceResponse>(await this.callApi(params, req, runtime), new GetLoginPreferenceResponse({}));
  }

  /**
   * Queries the logon preference of CloudSSO users.
   * 
   * @param request - GetLoginPreferenceRequest
   * @returns GetLoginPreferenceResponse
   */
  async getLoginPreference(request: GetLoginPreferenceRequest): Promise<GetLoginPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginPreferenceWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
   * This topic provides an example on how to query the MFA setting of all CloudSSO users that belong to the directory named `00q8wbq42wiltcrk****`.
   * 
   * @param request - GetMFAAuthenticationSettingInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMFAAuthenticationSettingInfoResponse
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
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
   * This topic provides an example on how to query the MFA setting of all CloudSSO users that belong to the directory named `00q8wbq42wiltcrk****`.
   * 
   * @param request - GetMFAAuthenticationSettingInfoRequest
   * @returns GetMFAAuthenticationSettingInfoResponse
   */
  async getMFAAuthenticationSettingInfo(request: GetMFAAuthenticationSettingInfoRequest): Promise<GetMFAAuthenticationSettingInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationSettingInfoWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * > This operation is no longer maintained and updated. You can call the [GetMFAAuthenticationSettingInfo](https://help.aliyun.com/document_detail/611286.html) operation to query more detailed information.
   * This topic provides an example on how to query the MFA setting of the users that belong to the directory named `d-00fc2p61****`. The returned result shows that MFA is enabled for all the users.
   * 
   * @param request - GetMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMFAAuthenticationSettingsResponse
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
   * Queries the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * > This operation is no longer maintained and updated. You can call the [GetMFAAuthenticationSettingInfo](https://help.aliyun.com/document_detail/611286.html) operation to query more detailed information.
   * This topic provides an example on how to query the MFA setting of the users that belong to the directory named `d-00fc2p61****`. The returned result shows that MFA is enabled for all the users.
   * 
   * @param request - GetMFAAuthenticationSettingsRequest
   * @returns GetMFAAuthenticationSettingsResponse
   */
  async getMFAAuthenticationSettings(request: GetMFAAuthenticationSettingsRequest): Promise<GetMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Checks whether multi-factor authentication (MFA) is enabled for users.
   * 
   * @remarks
   * This topic provides an example on how to check whether MFA is enabled for users in the directory whose ID is `00fc2p61****`. The returned result shows that MFA is in the Enabled state.
   * 
   * @param request - GetMFAAuthenticationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMFAAuthenticationStatusResponse
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
   * Checks whether multi-factor authentication (MFA) is enabled for users.
   * 
   * @remarks
   * This topic provides an example on how to check whether MFA is enabled for users in the directory whose ID is `00fc2p61****`. The returned result shows that MFA is in the Enabled state.
   * 
   * @param request - GetMFAAuthenticationStatusRequest
   * @returns GetMFAAuthenticationStatusResponse
   */
  async getMFAAuthenticationStatus(request: GetMFAAuthenticationStatusRequest): Promise<GetMFAAuthenticationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMFAAuthenticationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the password policy of CloudSSO users.
   * 
   * @param request - GetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicyWithOptions(request: GetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPasswordPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPasswordPolicy",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPasswordPolicyResponse>(await this.callApi(params, req, runtime), new GetPasswordPolicyResponse({}));
  }

  /**
   * Queries the password policy of CloudSSO users.
   * 
   * @param request - GetPasswordPolicyRequest
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicy(request: GetPasswordPolicyRequest): Promise<GetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the status of System for Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * This topic provides an example on how to query the status of SCIM synchronization within the directory `d-00fc2p61****`. The returned result shows that SCIM synchronization is in the Enabled state.
   * 
   * @param request - GetSCIMSynchronizationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSCIMSynchronizationStatusResponse
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
   * Queries the status of System for Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * This topic provides an example on how to query the status of SCIM synchronization within the directory `d-00fc2p61****`. The returned result shows that SCIM synchronization is in the Enabled state.
   * 
   * @param request - GetSCIMSynchronizationStatusRequest
   * @returns GetSCIMSynchronizationStatusResponse
   */
  async getSCIMSynchronizationStatus(request: GetSCIMSynchronizationStatusRequest): Promise<GetSCIMSynchronizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of CloudSSO.
   * 
   * @param request - GetServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceStatusResponse
   */
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

  /**
   * Queries the status of CloudSSO.
   * @returns GetServiceStatusResponse
   */
  async getServiceStatus(): Promise<GetServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceStatusWithOptions(runtime);
  }

  /**
   * Queries information about an asynchronous task.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
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
   * Queries information about an asynchronous task.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
   * Queries the status of an asynchronous task.
   * 
   * @remarks
   * You can call the GetTaskStatus operation to query the status of an asynchronous task. If you want to query more information about an asynchronous task, call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation.
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
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
   * Queries the status of an asynchronous task.
   * 
   * @remarks
   * You can call the GetTaskStatus operation to query the status of an asynchronous task. If you want to query more information about an asynchronous task, call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation.
   * This topic provides an example on how to query the information about the task whose ID is `t-shfqw1u1edszvxw5****`.
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(request: GetTaskStatusRequest): Promise<GetTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  /**
   * Queries information about a user.
   * 
   * @remarks
   * This topic provides an example on how to query information about the user whose ID is `u-00q8wbq42wiltcrk****` in the `d-00fc2p61****` directory.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
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
   * Queries information about a user.
   * 
   * @remarks
   * This topic provides an example on how to query information about the user whose ID is `u-00q8wbq42wiltcrk****` in the `d-00fc2p61****` directory.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries the ID of a user in a resource directory by using the ExternalId parameter.
   * 
   * @param tmpReq - GetUserIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserIdResponse
   */
  async getUserIdWithOptions(tmpReq: GetUserIdRequest, runtime: $Util.RuntimeOptions): Promise<GetUserIdResponse> {
    Util.validateModel(tmpReq);
    let request = new GetUserIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.externalId)) {
      request.externalIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalId, "ExternalId", "json");
    }

    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.externalIdShrink)) {
      query["ExternalId"] = request.externalIdShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserId",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserIdResponse>(await this.callApi(params, req, runtime), new GetUserIdResponse({}));
  }

  /**
   * Queries the ID of a user in a resource directory by using the ExternalId parameter.
   * 
   * @param request - GetUserIdRequest
   * @returns GetUserIdResponse
   */
  async getUserId(request: GetUserIdRequest): Promise<GetUserIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserIdWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA setting of the user named `u-00q8wbq42wiltcrk****`. The returned result shows that MFA is enabled for the user.
   * 
   * @param request - GetUserMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserMFAAuthenticationSettingsResponse
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
   * Queries the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA setting of the user named `u-00q8wbq42wiltcrk****`. The returned result shows that MFA is enabled for the user.
   * 
   * @param request - GetUserMFAAuthenticationSettingsRequest
   * @returns GetUserMFAAuthenticationSettingsResponse
   */
  async getUserMFAAuthenticationSettings(request: GetUserMFAAuthenticationSettingsRequest): Promise<GetUserMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Queries a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningResponse
   */
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

  /**
   * Queries a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningRequest
   * @returns GetUserProvisioningResponse
   */
  async getUserProvisioning(request: GetUserProvisioningRequest): Promise<GetUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Queries the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningConfigurationResponse
   */
  async getUserProvisioningConfigurationWithOptions(request: GetUserProvisioningConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetUserProvisioningConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserProvisioningConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserProvisioningConfigurationResponse>(await this.callApi(params, req, runtime), new GetUserProvisioningConfigurationResponse({}));
  }

  /**
   * Queries the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningConfigurationRequest
   * @returns GetUserProvisioningConfigurationResponse
   */
  async getUserProvisioningConfiguration(request: GetUserProvisioningConfigurationRequest): Promise<GetUserProvisioningConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProvisioningConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningEventResponse
   */
  async getUserProvisioningEventWithOptions(request: GetUserProvisioningEventRequest, runtime: $Util.RuntimeOptions): Promise<GetUserProvisioningEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserProvisioningEvent",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserProvisioningEventResponse>(await this.callApi(params, req, runtime), new GetUserProvisioningEventResponse({}));
  }

  /**
   * Queries the information about a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningEventRequest
   * @returns GetUserProvisioningEventResponse
   */
  async getUserProvisioningEvent(request: GetUserProvisioningEventRequest): Promise<GetUserProvisioningEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProvisioningEventWithOptions(request, runtime);
  }

  /**
   * Queries statistics of Resource Access Management (RAM) user provisioning events that are created for the member in a resource directory.
   * 
   * @param request - GetUserProvisioningRdAccountStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningRdAccountStatisticsResponse
   */
  async getUserProvisioningRdAccountStatisticsWithOptions(request: GetUserProvisioningRdAccountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetUserProvisioningRdAccountStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.rdMemberId)) {
      query["RdMemberId"] = request.rdMemberId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserProvisioningRdAccountStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserProvisioningRdAccountStatisticsResponse>(await this.callApi(params, req, runtime), new GetUserProvisioningRdAccountStatisticsResponse({}));
  }

  /**
   * Queries statistics of Resource Access Management (RAM) user provisioning events that are created for the member in a resource directory.
   * 
   * @param request - GetUserProvisioningRdAccountStatisticsRequest
   * @returns GetUserProvisioningRdAccountStatisticsResponse
   */
  async getUserProvisioningRdAccountStatistics(request: GetUserProvisioningRdAccountStatisticsRequest): Promise<GetUserProvisioningRdAccountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProvisioningRdAccountStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserProvisioningStatisticsResponse
   */
  async getUserProvisioningStatisticsWithOptions(request: GetUserProvisioningStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetUserProvisioningStatisticsResponse> {
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
      action: "GetUserProvisioningStatistics",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserProvisioningStatisticsResponse>(await this.callApi(params, req, runtime), new GetUserProvisioningStatisticsResponse({}));
  }

  /**
   * Queries the statistics of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - GetUserProvisioningStatisticsRequest
   * @returns GetUserProvisioningStatisticsResponse
   */
  async getUserProvisioningStatistics(request: GetUserProvisioningStatisticsRequest): Promise<GetUserProvisioningStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserProvisioningStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the access permissions that are assigned.
   * 
   * @remarks
   * This topic provides an example on how to query the assigned access permissions on the account `114240524784****` in your resource directory. The returned result shows that access permissions on the account in your resource directory is assigned to one user.
   * 
   * @param request - ListAccessAssignmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessAssignmentsResponse
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
   * Queries the access permissions that are assigned.
   * 
   * @remarks
   * This topic provides an example on how to query the assigned access permissions on the account `114240524784****` in your resource directory. The returned result shows that access permissions on the account in your resource directory is assigned to one user.
   * 
   * @param request - ListAccessAssignmentsRequest
   * @returns ListAccessAssignmentsResponse
   */
  async listAccessAssignments(request: ListAccessAssignmentsRequest): Promise<ListAccessAssignmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessAssignmentsWithOptions(request, runtime);
  }

  /**
   * Queries the access configurations that are provisioned.
   * 
   * @remarks
   * This topic provides an example on how to query the accounts for which the access permission `ac-00ccule7tadaijxc****` is provisioned. The returned result shows that the access configuration is provisioned for two accounts in your resource directory.
   * 
   * @param request - ListAccessConfigurationProvisioningsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessConfigurationProvisioningsResponse
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
   * Queries the access configurations that are provisioned.
   * 
   * @remarks
   * This topic provides an example on how to query the accounts for which the access permission `ac-00ccule7tadaijxc****` is provisioned. The returned result shows that the access configuration is provisioned for two accounts in your resource directory.
   * 
   * @param request - ListAccessConfigurationProvisioningsRequest
   * @returns ListAccessConfigurationProvisioningsResponse
   */
  async listAccessConfigurationProvisionings(request: ListAccessConfigurationProvisioningsRequest): Promise<ListAccessConfigurationProvisioningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessConfigurationProvisioningsWithOptions(request, runtime);
  }

  /**
   * Queries access configurations.
   * 
   * @remarks
   * This topic provides an example on how to query the access configurations within the directory `d-00fc2p61****`. The returned result shows that the directory contains the `VPC-Admin` and `ECS-Admin` access configurations.
   * 
   * @param request - ListAccessConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessConfigurationsResponse
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
   * Queries access configurations.
   * 
   * @remarks
   * This topic provides an example on how to query the access configurations within the directory `d-00fc2p61****`. The returned result shows that the directory contains the `VPC-Admin` and `ECS-Admin` access configurations.
   * 
   * @param request - ListAccessConfigurationsRequest
   * @returns ListAccessConfigurationsResponse
   */
  async listAccessConfigurations(request: ListAccessConfigurationsRequest): Promise<ListAccessConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries directories.
   * 
   * @remarks
   * This topic provides an example on how to query the directories within your Alibaba Cloud account. The returned result shows that only one directory with the ID `d-00fc2p61****` is created within your Alibaba Cloud account.
   * 
   * @param request - ListDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDirectoriesResponse
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
   * Queries directories.
   * 
   * @remarks
   * This topic provides an example on how to query the directories within your Alibaba Cloud account. The returned result shows that only one directory with the ID `d-00fc2p61****` is created within your Alibaba Cloud account.
   * @returns ListDirectoriesResponse
   */
  async listDirectories(): Promise<ListDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoriesWithOptions(runtime);
  }

  /**
   * Queries Security Assertion Markup Language (SAML) signing certificates.
   * 
   * @remarks
   * This topic provides an example on how to query the SAML signing certificates within the directory `d-00fc2p61****`. The returned result shows that the directory contains one SAML signing certificate.
   * 
   * @param request - ListExternalSAMLIdPCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalSAMLIdPCertificatesResponse
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
   * Queries Security Assertion Markup Language (SAML) signing certificates.
   * 
   * @remarks
   * This topic provides an example on how to query the SAML signing certificates within the directory `d-00fc2p61****`. The returned result shows that the directory contains one SAML signing certificate.
   * 
   * @param request - ListExternalSAMLIdPCertificatesRequest
   * @returns ListExternalSAMLIdPCertificatesResponse
   */
  async listExternalSAMLIdPCertificates(request: ListExternalSAMLIdPCertificatesRequest): Promise<ListExternalSAMLIdPCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExternalSAMLIdPCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries the users in a group.
   * 
   * @remarks
   * This topic provides an example on how to query the users in the group `g-00jqzghi2n3o5hkh****`. The returned result shows that the group contains the user `Alice` and the user `user1`.
   * 
   * @param request - ListGroupMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupMembersResponse
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
   * Queries the users in a group.
   * 
   * @remarks
   * This topic provides an example on how to query the users in the group `g-00jqzghi2n3o5hkh****`. The returned result shows that the group contains the user `Alice` and the user `user1`.
   * 
   * @param request - ListGroupMembersRequest
   * @returns ListGroupMembersResponse
   */
  async listGroupMembers(request: ListGroupMembersRequest): Promise<ListGroupMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupMembersWithOptions(request, runtime);
  }

  /**
   * Queries groups.
   * 
   * @remarks
   * This topic provides an example on how to query the groups in the directory `d-00fc2p61****`. The returned result shows that the directory contains three groups. The groups `group1` and `group2` are synchronized from an external identity provider (IdP). The group `TestGroup` is manually created in CloudSSO.
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
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
   * Queries groups.
   * 
   * @remarks
   * This topic provides an example on how to query the groups in the directory `d-00fc2p61****`. The returned result shows that the directory contains three groups. The groups `group1` and `group2` are synchronized from an external identity provider (IdP). The group `TestGroup` is manually created in CloudSSO.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the groups to which a user is added.
   * 
   * @remarks
   * This topic provides an example on how to query the groups to which the user `u-00q8wbq42wiltcrk****` is added. The returned result shows that the user is added to both the `TestGroup` and the `group1` groups.
   * 
   * @param request - ListJoinedGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJoinedGroupsForUserResponse
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
   * Queries the groups to which a user is added.
   * 
   * @remarks
   * This topic provides an example on how to query the groups to which the user `u-00q8wbq42wiltcrk****` is added. The returned result shows that the user is added to both the `TestGroup` and the `group1` groups.
   * 
   * @param request - ListJoinedGroupsForUserRequest
   * @returns ListJoinedGroupsForUserResponse
   */
  async listJoinedGroupsForUser(request: ListJoinedGroupsForUserRequest): Promise<ListJoinedGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJoinedGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the multi-factor authentication (MFA) devices that are bound to a user. Up to two MFA devices can be bound to a user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA devices that are bound to the user `u-00q8wbq42wiltcrk****`. The returned result shows that the MFA device named `Alice-MFA1` is bound to the user.
   * 
   * @param request - ListMFADevicesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMFADevicesForUserResponse
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
   * Queries the multi-factor authentication (MFA) devices that are bound to a user. Up to two MFA devices can be bound to a user.
   * 
   * @remarks
   * This topic provides an example on how to query the MFA devices that are bound to the user `u-00q8wbq42wiltcrk****`. The returned result shows that the MFA device named `Alice-MFA1` is bound to the user.
   * 
   * @param request - ListMFADevicesForUserRequest
   * @returns ListMFADevicesForUserResponse
   */
  async listMFADevicesForUser(request: ListMFADevicesForUserRequest): Promise<ListMFADevicesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMFADevicesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query the policies that are created for the access configuration `ac-00jhtfl8thteu6uj****`. The returned result shows that the access configuration contains one system policy and one inline policy.
   * 
   * @param request - ListPermissionPoliciesInAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionPoliciesInAccessConfigurationResponse
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
   * Queries the policies that are created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to query the policies that are created for the access configuration `ac-00jhtfl8thteu6uj****`. The returned result shows that the access configuration contains one system policy and one inline policy.
   * 
   * @param request - ListPermissionPoliciesInAccessConfigurationRequest
   * @returns ListPermissionPoliciesInAccessConfigurationResponse
   */
  async listPermissionPoliciesInAccessConfiguration(request: ListPermissionPoliciesInAccessConfigurationRequest): Promise<ListPermissionPoliciesInAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPermissionPoliciesInAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries Cross-domain Identity Management (SCIM) credentials.
   * 
   * @remarks
   * This topic provides an example on how to query the SCIM credentials within the `d-00fc2p61****` directory.
   * 
   * @param request - ListSCIMServerCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSCIMServerCredentialsResponse
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
   * Queries Cross-domain Identity Management (SCIM) credentials.
   * 
   * @remarks
   * This topic provides an example on how to query the SCIM credentials within the `d-00fc2p61****` directory.
   * 
   * @param request - ListSCIMServerCredentialsRequest
   * @returns ListSCIMServerCredentialsResponse
   */
  async listSCIMServerCredentials(request: ListSCIMServerCredentialsRequest): Promise<ListSCIMServerCredentialsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSCIMServerCredentialsWithOptions(request, runtime);
  }

  /**
   * Queries asynchronous tasks.
   * 
   * @remarks
   * By default, this operation queries the tasks within the previous 24 hours. This operation allows you to query the tasks within a maximum of 7 days. You can specify the start time of the query by using `Filter`.
   * This topic provides an example on how to query the tasks within the previous 24 hours.
   * 
   * @param request - ListTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
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
   * Queries asynchronous tasks.
   * 
   * @remarks
   * By default, this operation queries the tasks within the previous 24 hours. This operation allows you to query the tasks within a maximum of 7 days. You can specify the start time of the query by using `Filter`.
   * This topic provides an example on how to query the tasks within the previous 24 hours.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
   * Queries Resource Access Management (RAM) user provisioning events.
   * 
   * @param request - ListUserProvisioningEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserProvisioningEventsResponse
   */
  async listUserProvisioningEventsWithOptions(request: ListUserProvisioningEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserProvisioningEventsResponse> {
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

    if (!Util.isUnset(request.userProvisioningId)) {
      query["UserProvisioningId"] = request.userProvisioningId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserProvisioningEvents",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserProvisioningEventsResponse>(await this.callApi(params, req, runtime), new ListUserProvisioningEventsResponse({}));
  }

  /**
   * Queries Resource Access Management (RAM) user provisioning events.
   * 
   * @param request - ListUserProvisioningEventsRequest
   * @returns ListUserProvisioningEventsResponse
   */
  async listUserProvisioningEvents(request: ListUserProvisioningEventsRequest): Promise<ListUserProvisioningEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserProvisioningEventsWithOptions(request, runtime);
  }

  /**
   * Queries Resource Access Management (RAM) user provisionings.
   * 
   * @param request - ListUserProvisioningsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserProvisioningsResponse
   */
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

  /**
   * Queries Resource Access Management (RAM) user provisionings.
   * 
   * @param request - ListUserProvisioningsRequest
   * @returns ListUserProvisioningsResponse
   */
  async listUserProvisionings(request: ListUserProvisioningsRequest): Promise<ListUserProvisioningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserProvisioningsWithOptions(request, runtime);
  }

  /**
   * Queries users.
   * 
   * @remarks
   * This topic provides an example on how to query users in the `d-00fc2p61****` directory. The returned result shows that the directory contains two users. The user `AliceLee` is synchronized from an external identity provider (IdP). The user `user1` is manually created within CloudSSO.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
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
   * Queries users.
   * 
   * @remarks
   * This topic provides an example on how to query users in the `d-00fc2p61****` directory. The returned result shows that the directory contains two users. The user `AliceLee` is synchronized from an external identity provider (IdP). The user `user1` is manually created within CloudSSO.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Provisions an access configuration for an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to provision the access configuration `ac-00jhtfl8thteu6uj****` for the account `114240524784****` in your resource directory.
   * 
   * @param request - ProvisionAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ProvisionAccessConfigurationResponse
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
   * Provisions an access configuration for an account in your resource directory.
   * 
   * @remarks
   * When you call this operation, an asynchronous task is automatically created. You can call the [GetTask](https://help.aliyun.com/document_detail/340670.html) operation to query the progress of the task based on the value of the `TaskId` response parameter.
   * This topic provides an example on how to provision the access configuration `ac-00jhtfl8thteu6uj****` for the account `114240524784****` in your resource directory.
   * 
   * @param request - ProvisionAccessConfigurationRequest
   * @returns ProvisionAccessConfigurationResponse
   */
  async provisionAccessConfiguration(request: ProvisionAccessConfigurationRequest): Promise<ProvisionAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.provisionAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Removes a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * This topic provides an example on how to remove the SAML signing certificate whose ID is `idp-c-00dt9gnl7fmjaw9c****`.
   * 
   * @param request - RemoveExternalSAMLIdPCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveExternalSAMLIdPCertificateResponse
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
   * Removes a Security Assertion Markup Language (SAML) signing certificate.
   * 
   * @remarks
   * This topic provides an example on how to remove the SAML signing certificate whose ID is `idp-c-00dt9gnl7fmjaw9c****`.
   * 
   * @param request - RemoveExternalSAMLIdPCertificateRequest
   * @returns RemoveExternalSAMLIdPCertificateResponse
   */
  async removeExternalSAMLIdPCertificate(request: RemoveExternalSAMLIdPCertificateRequest): Promise<RemoveExternalSAMLIdPCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeExternalSAMLIdPCertificateWithOptions(request, runtime);
  }

  /**
   * Removes a policy from an access configuration.
   * 
   * @remarks
   * After you remove an inline policy from an access configuration, the policy cannot be restored.
   * This topic provides an example on how to remove the system policy `AliyunECSFullAccess` from the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - RemovePermissionPolicyFromAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePermissionPolicyFromAccessConfigurationResponse
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
   * Removes a policy from an access configuration.
   * 
   * @remarks
   * After you remove an inline policy from an access configuration, the policy cannot be restored.
   * This topic provides an example on how to remove the system policy `AliyunECSFullAccess` from the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - RemovePermissionPolicyFromAccessConfigurationRequest
   * @returns RemovePermissionPolicyFromAccessConfigurationResponse
   */
  async removePermissionPolicyFromAccessConfiguration(request: RemovePermissionPolicyFromAccessConfigurationRequest): Promise<RemovePermissionPolicyFromAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePermissionPolicyFromAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Removes a user from a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot remove a user from a group that is synchronized by using SCIM.  
   * This topic provides an example on how to remove the user `u-00q8wbq42wiltcrk****` from the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - RemoveUserFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromGroupResponse
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
   * Removes a user from a group.
   * 
   * @remarks
   * If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot remove a user from a group that is synchronized by using SCIM.  
   * This topic provides an example on how to remove the user `u-00q8wbq42wiltcrk****` from the group `g-00jqzghi2n3o5hkh****`.
   * 
   * @param request - RemoveUserFromGroupRequest
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
   * Resets the password of a user.
   * 
   * @remarks
   * If you forget your password or your password expires or is at risk, you must contact a CloudSSO administrator to reset your password.
   * >  After you enable SSO logon, your password cannot be reset.
   * This topic provides an example on how to reset the password of the user `u-00q8wbq42wiltcrk****`. The new password is automatically generated by the system.
   * 
   * @param request - ResetUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
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
   * Resets the password of a user.
   * 
   * @remarks
   * If you forget your password or your password expires or is at risk, you must contact a CloudSSO administrator to reset your password.
   * >  After you enable SSO logon, your password cannot be reset.
   * This topic provides an example on how to reset the password of the user `u-00q8wbq42wiltcrk****`. The new password is automatically generated by the system.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
   * Retries a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - RetryUserProvisioningEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryUserProvisioningEventResponse
   */
  async retryUserProvisioningEventWithOptions(request: RetryUserProvisioningEventRequest, runtime: $Util.RuntimeOptions): Promise<RetryUserProvisioningEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.duplicationStrategy)) {
      query["DuplicationStrategy"] = request.duplicationStrategy;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryUserProvisioningEvent",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryUserProvisioningEventResponse>(await this.callApi(params, req, runtime), new RetryUserProvisioningEventResponse({}));
  }

  /**
   * Retries a Resource Access Management (RAM) user provisioning event.
   * 
   * @param request - RetryUserProvisioningEventRequest
   * @returns RetryUserProvisioningEventResponse
   */
  async retryUserProvisioningEvent(request: RetryUserProvisioningEventRequest): Promise<RetryUserProvisioningEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryUserProvisioningEventWithOptions(request, runtime);
  }

  /**
   * Configures a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
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
   * @param request - SetExternalSAMLIdentityProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetExternalSAMLIdentityProviderResponse
   */
  async setExternalSAMLIdentityProviderWithOptions(request: SetExternalSAMLIdentityProviderRequest, runtime: $Util.RuntimeOptions): Promise<SetExternalSAMLIdentityProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindingType)) {
      query["BindingType"] = request.bindingType;
    }

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
   * Configures a Security Assertion Markup Language (SAML) identity provider (IdP).
   * 
   * @remarks
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
   * @param request - SetExternalSAMLIdentityProviderRequest
   * @returns SetExternalSAMLIdentityProviderResponse
   */
  async setExternalSAMLIdentityProvider(request: SetExternalSAMLIdentityProviderRequest): Promise<SetExternalSAMLIdentityProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setExternalSAMLIdentityProviderWithOptions(request, runtime);
  }

  /**
   * Configures the logon preference of CloudSSO users.
   * 
   * @param request - SetLoginPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoginPreferenceResponse
   */
  async setLoginPreferenceWithOptions(request: SetLoginPreferenceRequest, runtime: $Util.RuntimeOptions): Promise<SetLoginPreferenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowUserToGetCredentials)) {
      query["AllowUserToGetCredentials"] = request.allowUserToGetCredentials;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.loginNetworkMasks)) {
      query["LoginNetworkMasks"] = request.loginNetworkMasks;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetLoginPreference",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetLoginPreferenceResponse>(await this.callApi(params, req, runtime), new SetLoginPreferenceResponse({}));
  }

  /**
   * Configures the logon preference of CloudSSO users.
   * 
   * @param request - SetLoginPreferenceRequest
   * @returns SetLoginPreferenceResponse
   */
  async setLoginPreference(request: SetLoginPreferenceRequest): Promise<SetLoginPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setLoginPreferenceWithOptions(request, runtime);
  }

  /**
   * Enables or disables multi-factor authentication (MFA) for users in a directory.
   * 
   * @remarks
   * If a CloudSSO administrator enables username-password logon for users, CloudSSO automatically enables MFA to improve security. The administrator can call this operation to enable or disable MFA based on the business requirements.
   * This topic provides an example on how to enable MFA for users.
   * 
   * @param request - SetMFAAuthenticationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetMFAAuthenticationStatusResponse
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
   * Enables or disables multi-factor authentication (MFA) for users in a directory.
   * 
   * @remarks
   * If a CloudSSO administrator enables username-password logon for users, CloudSSO automatically enables MFA to improve security. The administrator can call this operation to enable or disable MFA based on the business requirements.
   * This topic provides an example on how to enable MFA for users.
   * 
   * @param request - SetMFAAuthenticationStatusRequest
   * @returns SetMFAAuthenticationStatusResponse
   */
  async setMFAAuthenticationStatus(request: SetMFAAuthenticationStatusRequest): Promise<SetMFAAuthenticationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setMFAAuthenticationStatusWithOptions(request, runtime);
  }

  /**
   * Configures a password policy for CloudSSO users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicyWithOptions(request: SetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.maxLoginAttempts)) {
      query["MaxLoginAttempts"] = request.maxLoginAttempts;
    }

    if (!Util.isUnset(request.maxPasswordAge)) {
      query["MaxPasswordAge"] = request.maxPasswordAge;
    }

    if (!Util.isUnset(request.minPasswordDifferentChars)) {
      query["MinPasswordDifferentChars"] = request.minPasswordDifferentChars;
    }

    if (!Util.isUnset(request.minPasswordLength)) {
      query["MinPasswordLength"] = request.minPasswordLength;
    }

    if (!Util.isUnset(request.passwordNotContainUsername)) {
      query["PasswordNotContainUsername"] = request.passwordNotContainUsername;
    }

    if (!Util.isUnset(request.passwordReusePrevention)) {
      query["PasswordReusePrevention"] = request.passwordReusePrevention;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPasswordPolicy",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPasswordPolicyResponse>(await this.callApi(params, req, runtime), new SetPasswordPolicyResponse({}));
  }

  /**
   * Configures a password policy for CloudSSO users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicy(request: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Enables or disables Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * You can synchronize users or groups from an external identity provider (IdP) that supports SCIM 2.0 to CloudSSO only after SCIM synchronization is enabled. If you disable SCIM synchronization, you can no longer synchronize users or groups to CloudSSO. The following list describes the impacts after SCIM synchronization is enabled or disabled:
   * *   After you enable SCIM synchronization, you cannot modify or delete the users or groups that are synchronized to CloudSSO by using SCIM. In addition, you cannot add users to or remove users from the groups. However, you can change the passwords of the users and enable or disable the logon of the users.
   * *   After you disable SCIM synchronization, you can modify and delete the users and groups that are synchronized to CloudSSO by using SCIM. You can also add users to or remove users from the groups.
   * This topic provides an example on how to enable SCIM synchronization within the directory `d-00fc2p61****`.
   * 
   * @param request - SetSCIMSynchronizationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSCIMSynchronizationStatusResponse
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
   * Enables or disables Cross-domain Identity Management (SCIM) synchronization.
   * 
   * @remarks
   * You can synchronize users or groups from an external identity provider (IdP) that supports SCIM 2.0 to CloudSSO only after SCIM synchronization is enabled. If you disable SCIM synchronization, you can no longer synchronize users or groups to CloudSSO. The following list describes the impacts after SCIM synchronization is enabled or disabled:
   * *   After you enable SCIM synchronization, you cannot modify or delete the users or groups that are synchronized to CloudSSO by using SCIM. In addition, you cannot add users to or remove users from the groups. However, you can change the passwords of the users and enable or disable the logon of the users.
   * *   After you disable SCIM synchronization, you can modify and delete the users and groups that are synchronized to CloudSSO by using SCIM. You can also add users to or remove users from the groups.
   * This topic provides an example on how to enable SCIM synchronization within the directory `d-00fc2p61****`.
   * 
   * @param request - SetSCIMSynchronizationStatusRequest
   * @returns SetSCIMSynchronizationStatusResponse
   */
  async setSCIMSynchronizationStatus(request: SetSCIMSynchronizationStatusRequest): Promise<SetSCIMSynchronizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSCIMSynchronizationStatusWithOptions(request, runtime);
  }

  /**
   * Modifies information about an access configuration.
   * 
   * @remarks
   * You can modify the `Description`, `SessionDuration`, and `RelayState` parameters for an access configuration.
   * This topic provides an example on how to change the initial web page in the access configuration `ac-00jhtfl8thteu6uj****` to `https://cloudsso.console.aliyun.com`.
   * 
   * @param request - UpdateAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessConfigurationResponse
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
   * Modifies information about an access configuration.
   * 
   * @remarks
   * You can modify the `Description`, `SessionDuration`, and `RelayState` parameters for an access configuration.
   * This topic provides an example on how to change the initial web page in the access configuration `ac-00jhtfl8thteu6uj****` to `https://cloudsso.console.aliyun.com`.
   * 
   * @param request - UpdateAccessConfigurationRequest
   * @returns UpdateAccessConfigurationResponse
   */
  async updateAccessConfiguration(request: UpdateAccessConfigurationRequest): Promise<UpdateAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Changes the name of a directory.
   * 
   * @remarks
   * After you change the name of a directory, the URL that is used to log on to the Cloud SSO user portal is changed. You must notify the Cloud SSO users of the correct URL. 
   * This topic provides an example on how to change the name of a directory to `new-example`.
   * 
   * @param request - UpdateDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDirectoryResponse
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
   * Changes the name of a directory.
   * 
   * @remarks
   * After you change the name of a directory, the URL that is used to log on to the Cloud SSO user portal is changed. You must notify the Cloud SSO users of the correct URL. 
   * This topic provides an example on how to change the name of a directory to `new-example`.
   * 
   * @param request - UpdateDirectoryRequest
   * @returns UpdateDirectoryResponse
   */
  async updateDirectory(request: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDirectoryWithOptions(request, runtime);
  }

  /**
   * Modifies information about a group.
   * 
   * @remarks
   * You can modify `GroupName` and `Description` for a group.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a group that is synchronized by using SCIM.
   * This topic provides an example on how to change the name of the group `g-00jqzghi2n3o5hkh****` to `NewTestGroup`.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
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
   * Modifies information about a group.
   * 
   * @remarks
   * You can modify `GroupName` and `Description` for a group.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a group that is synchronized by using SCIM.
   * This topic provides an example on how to change the name of the group `g-00jqzghi2n3o5hkh****` to `NewTestGroup`.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Modifies an inline policy that is created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to modify an inline policy that is created for the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - UpdateInlinePolicyForAccessConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInlinePolicyForAccessConfigurationResponse
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
   * Modifies an inline policy that is created for an access configuration.
   * 
   * @remarks
   * This topic provides an example on how to modify an inline policy that is created for the access configuration `ac-00jhtfl8thteu6uj****`.
   * 
   * @param request - UpdateInlinePolicyForAccessConfigurationRequest
   * @returns UpdateInlinePolicyForAccessConfigurationResponse
   */
  async updateInlinePolicyForAccessConfiguration(request: UpdateInlinePolicyForAccessConfigurationRequest): Promise<UpdateInlinePolicyForAccessConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInlinePolicyForAccessConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
   * This topic provides an example on how to enable MFA for all CloudSSO users that belong to the directory named `d-00fc2p61****`.
   * 
   * @param request - UpdateMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMFAAuthenticationSettingsResponse
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
   * Modifies the multi-factor authentication (MFA) setting of all users.
   * 
   * @remarks
   * If you enable username-password logon for CloudSSO users, you can also configure MFA for the users.
   * This topic provides an example on how to enable MFA for all CloudSSO users that belong to the directory named `d-00fc2p61****`.
   * 
   * @param request - UpdateMFAAuthenticationSettingsRequest
   * @returns UpdateMFAAuthenticationSettingsResponse
   */
  async updateMFAAuthenticationSettings(request: UpdateMFAAuthenticationSettingsRequest): Promise<UpdateMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Enables or disables a Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * This topic provides an example on how to disable the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`. After the SCIM credential is disabled, the synchronization task that uses the SCIM credential fails. You can call this operation again to enable the SCIM credential.
   * 
   * @param request - UpdateSCIMServerCredentialStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSCIMServerCredentialStatusResponse
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
   * Enables or disables a Cross-domain Identity Management (SCIM) credential.
   * 
   * @remarks
   * This topic provides an example on how to disable the SCIM credential whose ID is `scimcred-004whl0kvfwcypbi****`. After the SCIM credential is disabled, the synchronization task that uses the SCIM credential fails. You can call this operation again to enable the SCIM credential.
   * 
   * @param request - UpdateSCIMServerCredentialStatusRequest
   * @returns UpdateSCIMServerCredentialStatusResponse
   */
  async updateSCIMServerCredentialStatus(request: UpdateSCIMServerCredentialStatusRequest): Promise<UpdateSCIMServerCredentialStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSCIMServerCredentialStatusWithOptions(request, runtime);
  }

  /**
   * Modifies information about a user.
   * 
   * @remarks
   * You can modify `FirstName`, `LastName`, `DisplayName`, `Email`, and `Description` for a user. You cannot modify `UserName` for a user.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a user that is synchronized by using SCIM.
   * This topic provides an example on how to change the email address of the user whose ID is `u-00q8wbq42wiltcrk****` to `AliceLee@example.com`.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
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
   * Modifies information about a user.
   * 
   * @remarks
   * You can modify `FirstName`, `LastName`, `DisplayName`, `Email`, and `Description` for a user. You cannot modify `UserName` for a user.
   * >  If System for Cross-domain Identity Management (SCIM) synchronization is enabled, you cannot modify the information about a user that is synchronized by using SCIM.
   * This topic provides an example on how to change the email address of the user whose ID is `u-00q8wbq42wiltcrk****` to `AliceLee@example.com`.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Modifies the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * If you call the [UpdateMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450134.html) operation to set the MFAAuthenticationSettings parameter to `Byuser`, user-specific settings are applied. Then, you must call the UpdateUserMFAAuthenticationSettings operation to configure MFA for each user.
   * By default, the MFAAuthenticationSettings parameter is set to `Enabled` for a new user.
   * This topic provides an example on how to enable MFA for the user named `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - UpdateUserMFAAuthenticationSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserMFAAuthenticationSettingsResponse
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
   * Modifies the multi-factor authentication (MFA) setting of a single user.
   * 
   * @remarks
   * If you call the [UpdateMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450134.html) operation to set the MFAAuthenticationSettings parameter to `Byuser`, user-specific settings are applied. Then, you must call the UpdateUserMFAAuthenticationSettings operation to configure MFA for each user.
   * By default, the MFAAuthenticationSettings parameter is set to `Enabled` for a new user.
   * This topic provides an example on how to enable MFA for the user named `u-00q8wbq42wiltcrk****`.
   * 
   * @param request - UpdateUserMFAAuthenticationSettingsRequest
   * @returns UpdateUserMFAAuthenticationSettingsResponse
   */
  async updateUserMFAAuthenticationSettings(request: UpdateUserMFAAuthenticationSettingsRequest): Promise<UpdateUserMFAAuthenticationSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserMFAAuthenticationSettingsWithOptions(request, runtime);
  }

  /**
   * Modifies a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserProvisioningResponse
   */
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

  /**
   * Modifies a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningRequest
   * @returns UpdateUserProvisioningResponse
   */
  async updateUserProvisioning(request: UpdateUserProvisioningRequest): Promise<UpdateUserProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserProvisioningWithOptions(request, runtime);
  }

  /**
   * Modifies the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserProvisioningConfigurationResponse
   */
  async updateUserProvisioningConfigurationWithOptions(request: UpdateUserProvisioningConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserProvisioningConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.newDefaultLandingPage)) {
      query["NewDefaultLandingPage"] = request.newDefaultLandingPage;
    }

    if (!Util.isUnset(request.newSessionDuration)) {
      query["NewSessionDuration"] = request.newSessionDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserProvisioningConfiguration",
      version: "2021-05-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserProvisioningConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateUserProvisioningConfigurationResponse({}));
  }

  /**
   * Modifies the global configurations of a Resource Access Management (RAM) user provisioning.
   * 
   * @param request - UpdateUserProvisioningConfigurationRequest
   * @returns UpdateUserProvisioningConfigurationResponse
   */
  async updateUserProvisioningConfiguration(request: UpdateUserProvisioningConfigurationRequest): Promise<UpdateUserProvisioningConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserProvisioningConfigurationWithOptions(request, runtime);
  }

  /**
   * Changes the status of a user.
   * 
   * @remarks
   * This topic provides an example on how to change the status of the user whose ID is `u-00q8wbq42wiltcrk****` to Disabled. Users in the Disabled state cannot log on to the CloudSSO user portal.
   * 
   * @param request - UpdateUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserStatusResponse
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
   * Changes the status of a user.
   * 
   * @remarks
   * This topic provides an example on how to change the status of the user whose ID is `u-00q8wbq42wiltcrk****` to Disabled. Users in the Disabled state cannot log on to the CloudSSO user portal.
   * 
   * @param request - UpdateUserStatusRequest
   * @returns UpdateUserStatusResponse
   */
  async updateUserStatus(request: UpdateUserStatusRequest): Promise<UpdateUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserStatusWithOptions(request, runtime);
  }

}
