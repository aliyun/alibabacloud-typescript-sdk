// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToGroupRequest extends $tea.Model {
  userName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      groupName: 'string',
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

export class AttachPolicyToGroupRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToGroupResponseBody extends $tea.Model {
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

export class AttachPolicyToGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachPolicyToGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachPolicyToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToRoleRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToRoleResponseBody extends $tea.Model {
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

export class AttachPolicyToRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachPolicyToRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachPolicyToRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToUserRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToUserResponseBody extends $tea.Model {
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

export class AttachPolicyToUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachPolicyToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachPolicyToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMFADeviceRequest extends $tea.Model {
  serialNumber?: string;
  userName?: string;
  authenticationCode1?: string;
  authenticationCode2?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      userName: 'UserName',
      authenticationCode1: 'AuthenticationCode1',
      authenticationCode2: 'AuthenticationCode2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      userName: 'string',
      authenticationCode1: 'string',
      authenticationCode2: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMFADeviceResponseBody extends $tea.Model {
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

export class BindMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordRequest extends $tea.Model {
  oldPassword?: string;
  newPassword?: string;
  static names(): { [key: string]: string } {
    return {
      oldPassword: 'OldPassword',
      newPassword: 'NewPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldPassword: 'string',
      newPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordResponseBody extends $tea.Model {
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

export class ChangePasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangePasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangePasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearAccountAliasResponseBody extends $tea.Model {
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

export class ClearAccountAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ClearAccountAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClearAccountAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyResponseBody extends $tea.Model {
  requestId?: string;
  accessKey?: CreateAccessKeyResponseBodyAccessKey;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accessKey: CreateAccessKeyResponseBodyAccessKey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  groupName?: string;
  comments?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      comments: 'Comments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      comments: 'string',
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

export class CreateLoginProfileRequest extends $tea.Model {
  userName?: string;
  password?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      password: 'string',
      passwordResetRequired: 'boolean',
      MFABindRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponseBody extends $tea.Model {
  requestId?: string;
  loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      loginProfile: 'LoginProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      loginProfile: CreateLoginProfileResponseBodyLoginProfile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLoginProfileResponseBody,
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
  rotateStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyDocument: 'PolicyDocument',
      setAsDefault: 'SetAsDefault',
      rotateStrategy: 'RotateStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyDocument: 'string',
      setAsDefault: 'boolean',
      rotateStrategy: 'string',
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

export class CreateUserRequest extends $tea.Model {
  userName?: string;
  displayName?: string;
  mobilePhone?: string;
  email?: string;
  comments?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      displayName: 'DisplayName',
      mobilePhone: 'MobilePhone',
      email: 'Email',
      comments: 'Comments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      displayName: 'string',
      mobilePhone: 'string',
      email: 'string',
      comments: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  user?: CreateUserResponseBodyUser;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: CreateUserResponseBodyUser,
      requestId: 'string',
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

export class CreateVirtualMFADeviceRequest extends $tea.Model {
  virtualMFADeviceName?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADeviceName: 'VirtualMFADeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADeviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualMFADeviceResponseBody extends $tea.Model {
  virtualMFADevice?: CreateVirtualMFADeviceResponseBodyVirtualMFADevice;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADevice: 'VirtualMFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADevice: CreateVirtualMFADeviceResponseBodyVirtualMFADevice,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessKeyRequest extends $tea.Model {
  userName?: string;
  userAccessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      userAccessKeyId: 'UserAccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      userAccessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessKeyResponseBody extends $tea.Model {
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

export class DeleteAccessKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
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

export class DeleteLoginProfileRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoginProfileResponseBody extends $tea.Model {
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

export class DeleteLoginProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLoginProfileResponseBody,
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

export class DeleteUserRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
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

export class DeleteVirtualMFADeviceRequest extends $tea.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualMFADeviceResponseBody extends $tea.Model {
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

export class DeleteVirtualMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromGroupRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromGroupResponseBody extends $tea.Model {
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

export class DetachPolicyFromGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachPolicyFromGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachPolicyFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromRoleRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromRoleResponseBody extends $tea.Model {
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

export class DetachPolicyFromRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachPolicyFromRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachPolicyFromRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromUserRequest extends $tea.Model {
  policyType?: string;
  policyName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      policyName: 'PolicyName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      policyName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromUserResponseBody extends $tea.Model {
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

export class DetachPolicyFromUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachPolicyFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachPolicyFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedRequest extends $tea.Model {
  userName?: string;
  userAccessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      userAccessKeyId: 'UserAccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      userAccessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResponseBody extends $tea.Model {
  accessKeyLastUsed?: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyLastUsed: 'AccessKeyLastUsed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyLastUsed: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccessKeyLastUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccessKeyLastUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountAliasResponseBody extends $tea.Model {
  requestId?: string;
  accountAlias?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountAlias: 'AccountAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $tea.Model {
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
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

export class GetLoginProfileRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginProfileResponseBody extends $tea.Model {
  requestId?: string;
  loginProfile?: GetLoginProfileResponseBodyLoginProfile;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      loginProfile: 'LoginProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      loginProfile: GetLoginProfileResponseBodyLoginProfile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoginProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponseBody extends $tea.Model {
  requestId?: string;
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      passwordPolicy: 'PasswordPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      passwordPolicy: GetPasswordPolicyResponseBodyPasswordPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPasswordPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPasswordPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
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

export class GetPolicyResponseBody extends $tea.Model {
  policy?: GetPolicyResponseBodyPolicy;
  requestId?: string;
  defaultPolicyVersion?: GetPolicyResponseBodyDefaultPolicyVersion;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
      defaultPolicyVersion: 'DefaultPolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
      defaultPolicyVersion: GetPolicyResponseBodyDefaultPolicyVersion,
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

export class GetRoleRequest extends $tea.Model {
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

export class GetSecurityPreferenceResponseBody extends $tea.Model {
  securityPreference?: GetSecurityPreferenceResponseBodySecurityPreference;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      securityPreference: 'SecurityPreference',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityPreference: GetSecurityPreferenceResponseBodySecurityPreference,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecurityPreferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecurityPreferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  user?: GetUserResponseBodyUser;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: GetUserResponseBodyUser,
      requestId: 'string',
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

export class GetUserMFAInfoRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBody extends $tea.Model {
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevice: GetUserMFAInfoResponseBodyMFADevice,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserMFAInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserMFAInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponseBody extends $tea.Model {
  accessKeys?: ListAccessKeysResponseBodyAccessKeys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeys: 'AccessKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeys: ListAccessKeysResponseBodyAccessKeys,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAccessKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAccessKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyRequest extends $tea.Model {
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

export class ListEntitiesForPolicyResponseBody extends $tea.Model {
  requestId?: string;
  groups?: ListEntitiesForPolicyResponseBodyGroups;
  roles?: ListEntitiesForPolicyResponseBodyRoles;
  users?: ListEntitiesForPolicyResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groups: 'Groups',
      roles: 'Roles',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groups: ListEntitiesForPolicyResponseBodyGroups,
      roles: ListEntitiesForPolicyResponseBodyRoles,
      users: ListEntitiesForPolicyResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEntitiesForPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEntitiesForPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  requestId?: string;
  groups?: ListGroupsResponseBodyGroups;
  isTruncated?: boolean;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groups: 'Groups',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groups: ListGroupsResponseBodyGroups,
      isTruncated: 'boolean',
      marker: 'string',
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

export class ListGroupsForUserRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $tea.Model {
  requestId?: string;
  groups?: ListGroupsForUserResponseBodyGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groups: ListGroupsForUserResponseBodyGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  policyType?: string;
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      policyType: 'PolicyType',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyType: 'string',
      marker: 'string',
      maxItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  policies?: ListPoliciesResponseBodyPolicies;
  requestId?: string;
  isTruncated?: boolean;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      isTruncated: 'boolean',
      marker: 'string',
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

export class ListPoliciesForGroupRequest extends $tea.Model {
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForGroupResponseBody extends $tea.Model {
  policies?: ListPoliciesForGroupResponseBodyPolicies;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: ListPoliciesForGroupResponseBodyPolicies,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPoliciesForGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPoliciesForGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForRoleRequest extends $tea.Model {
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

export class ListPoliciesForRoleResponseBody extends $tea.Model {
  policies?: ListPoliciesForRoleResponseBodyPolicies;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: ListPoliciesForRoleResponseBodyPolicies,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPoliciesForRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPoliciesForRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForUserRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForUserResponseBody extends $tea.Model {
  policies?: ListPoliciesForUserResponseBodyPolicies;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: ListPoliciesForUserResponseBodyPolicies,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPoliciesForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPoliciesForUserResponseBody,
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

export class ListRolesRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  requestId?: string;
  isTruncated?: boolean;
  roles?: ListRolesResponseBodyRoles;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isTruncated: 'IsTruncated',
      roles: 'Roles',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isTruncated: 'boolean',
      roles: ListRolesResponseBodyRoles,
      marker: 'string',
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

export class ListUsersRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  requestId?: string;
  isTruncated?: boolean;
  marker?: string;
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isTruncated: 'boolean',
      marker: 'string',
      users: ListUsersResponseBodyUsers,
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

export class ListUsersForGroupRequest extends $tea.Model {
  groupName?: string;
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      marker: 'string',
      maxItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBody extends $tea.Model {
  requestId?: string;
  isTruncated?: boolean;
  marker?: string;
  users?: ListUsersForGroupResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isTruncated: 'boolean',
      marker: 'string',
      users: ListUsersForGroupResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersForGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersForGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBody extends $tea.Model {
  virtualMFADevices?: ListVirtualMFADevicesResponseBodyVirtualMFADevices;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADevices: 'VirtualMFADevices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADevices: ListVirtualMFADevicesResponseBodyVirtualMFADevices,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVirtualMFADevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVirtualMFADevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromGroupRequest extends $tea.Model {
  userName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      groupName: 'string',
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

export class SetAccountAliasRequest extends $tea.Model {
  accountAlias?: string;
  static names(): { [key: string]: string } {
    return {
      accountAlias: 'AccountAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAccountAliasResponseBody extends $tea.Model {
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

export class SetAccountAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAccountAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAccountAliasResponseBody,
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

export class SetPasswordPolicyRequest extends $tea.Model {
  minimumPasswordLength?: number;
  requireLowercaseCharacters?: boolean;
  requireUppercaseCharacters?: boolean;
  requireNumbers?: boolean;
  requireSymbols?: boolean;
  hardExpiry?: boolean;
  maxPasswordAge?: number;
  passwordReusePrevention?: number;
  maxLoginAttemps?: number;
  static names(): { [key: string]: string } {
    return {
      minimumPasswordLength: 'MinimumPasswordLength',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      hardExpiry: 'HardExpiry',
      maxPasswordAge: 'MaxPasswordAge',
      passwordReusePrevention: 'PasswordReusePrevention',
      maxLoginAttemps: 'MaxLoginAttemps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minimumPasswordLength: 'number',
      requireLowercaseCharacters: 'boolean',
      requireUppercaseCharacters: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      hardExpiry: 'boolean',
      maxPasswordAge: 'number',
      passwordReusePrevention: 'number',
      maxLoginAttemps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyResponseBody extends $tea.Model {
  requestId?: string;
  passwordPolicy?: SetPasswordPolicyResponseBodyPasswordPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      passwordPolicy: 'PasswordPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      passwordPolicy: SetPasswordPolicyResponseBodyPasswordPolicy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetPasswordPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetPasswordPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceRequest extends $tea.Model {
  enableSaveMFATicket?: boolean;
  allowUserToChangePassword?: boolean;
  allowUserToManageAccessKeys?: boolean;
  allowUserToManagePublicKeys?: boolean;
  allowUserToManageMFADevices?: boolean;
  loginSessionDuration?: number;
  loginNetworkMasks?: string;
  static names(): { [key: string]: string } {
    return {
      enableSaveMFATicket: 'EnableSaveMFATicket',
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      loginSessionDuration: 'LoginSessionDuration',
      loginNetworkMasks: 'LoginNetworkMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSaveMFATicket: 'boolean',
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManagePublicKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      loginSessionDuration: 'number',
      loginNetworkMasks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBody extends $tea.Model {
  securityPreference?: SetSecurityPreferenceResponseBodySecurityPreference;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      securityPreference: 'SecurityPreference',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityPreference: SetSecurityPreferenceResponseBodySecurityPreference,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSecurityPreferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSecurityPreferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceRequest extends $tea.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceResponseBody extends $tea.Model {
  MFADevice?: UnbindMFADeviceResponseBodyMFADevice;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevice: UnbindMFADeviceResponseBodyMFADevice,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessKeyRequest extends $tea.Model {
  userName?: string;
  userAccessKeyId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      userAccessKeyId: 'UserAccessKeyId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      userAccessKeyId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessKeyResponseBody extends $tea.Model {
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

export class UpdateAccessKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  groupName?: string;
  newGroupName?: string;
  newComments?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      newGroupName: 'NewGroupName',
      newComments: 'NewComments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      newGroupName: 'string',
      newComments: 'string',
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

export class UpdateLoginProfileRequest extends $tea.Model {
  userName?: string;
  password?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      password: 'string',
      passwordResetRequired: 'boolean',
      MFABindRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginProfileResponseBody extends $tea.Model {
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

export class UpdateLoginProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLoginProfileResponseBody,
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

export class UpdateUserRequest extends $tea.Model {
  userName?: string;
  newUserName?: string;
  newDisplayName?: string;
  newMobilePhone?: string;
  newEmail?: string;
  newComments?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      newUserName: 'NewUserName',
      newDisplayName: 'NewDisplayName',
      newMobilePhone: 'NewMobilePhone',
      newEmail: 'NewEmail',
      newComments: 'NewComments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      newUserName: 'string',
      newDisplayName: 'string',
      newMobilePhone: 'string',
      newEmail: 'string',
      newComments: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  user?: UpdateUserResponseBodyUser;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: UpdateUserResponseBodyUser,
      requestId: 'string',
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

export class CreateAccessKeyResponseBodyAccessKey extends $tea.Model {
  status?: string;
  accessKeySecret?: string;
  createDate?: string;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accessKeySecret: 'AccessKeySecret',
      createDate: 'CreateDate',
      accessKeyId: 'AccessKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accessKeySecret: 'string',
      createDate: 'string',
      accessKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyGroup extends $tea.Model {
  groupId?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      comments: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponseBodyLoginProfile extends $tea.Model {
  passwordResetRequired?: boolean;
  createDate?: string;
  userName?: string;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      passwordResetRequired: 'PasswordResetRequired',
      createDate: 'CreateDate',
      userName: 'UserName',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordResetRequired: 'boolean',
      createDate: 'string',
      userName: 'string',
      MFABindRequired: 'boolean',
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

export class CreateRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  description?: string;
  maxSessionDuration?: number;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      description: 'Description',
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
      description: 'string',
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

export class CreateUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  email?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  createDate?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      createDate: 'CreateDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      createDate: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualMFADeviceResponseBodyVirtualMFADevice extends $tea.Model {
  serialNumber?: string;
  QRCodePNG?: string;
  base32StringSeed?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      QRCodePNG: 'QRCodePNG',
      base32StringSeed: 'Base32StringSeed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      QRCodePNG: 'string',
      base32StringSeed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed extends $tea.Model {
  lastUsedDate?: string;
  static names(): { [key: string]: string } {
    return {
      lastUsedDate: 'LastUsedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUsedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $tea.Model {
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      updateDate: 'string',
      groupName: 'string',
      comments: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginProfileResponseBodyLoginProfile extends $tea.Model {
  passwordResetRequired?: boolean;
  createDate?: string;
  userName?: string;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      passwordResetRequired: 'PasswordResetRequired',
      createDate: 'CreateDate',
      userName: 'UserName',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordResetRequired: 'boolean',
      createDate: 'string',
      userName: 'string',
      MFABindRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponseBodyPasswordPolicy extends $tea.Model {
  requireNumbers?: boolean;
  requireLowercaseCharacters?: boolean;
  hardExpiry?: boolean;
  passwordReusePrevention?: number;
  requireSymbols?: boolean;
  maxPasswordAge?: number;
  minimumPasswordLength?: number;
  requireUppercaseCharacters?: boolean;
  maxLoginAttemps?: number;
  static names(): { [key: string]: string } {
    return {
      requireNumbers: 'RequireNumbers',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      hardExpiry: 'HardExpiry',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireSymbols: 'RequireSymbols',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordLength: 'MinimumPasswordLength',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
      maxLoginAttemps: 'MaxLoginAttemps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requireNumbers: 'boolean',
      requireLowercaseCharacters: 'boolean',
      hardExpiry: 'boolean',
      passwordReusePrevention: 'number',
      requireSymbols: 'boolean',
      maxPasswordAge: 'number',
      minimumPasswordLength: 'number',
      requireUppercaseCharacters: 'boolean',
      maxLoginAttemps: 'number',
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

export class GetPolicyResponseBodyDefaultPolicyVersion extends $tea.Model {
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

export class GetRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  updateDate?: string;
  description?: string;
  maxSessionDuration?: number;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      updateDate: 'UpdateDate',
      description: 'Description',
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
      updateDate: 'string',
      description: 'string',
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

export class GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $tea.Model {
  allowUserToManageAccessKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageAccessKeys: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $tea.Model {
  allowUserToManageMFADevices?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageMFADevices: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $tea.Model {
  enableSaveMFATicket?: boolean;
  loginSessionDuration?: number;
  loginNetworkMasks?: string;
  allowUserToChangePassword?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginSessionDuration: 'LoginSessionDuration',
      loginNetworkMasks: 'LoginNetworkMasks',
      allowUserToChangePassword: 'AllowUserToChangePassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSaveMFATicket: 'boolean',
      loginSessionDuration: 'number',
      loginNetworkMasks: 'string',
      allowUserToChangePassword: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $tea.Model {
  allowUserToManagePublicKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePublicKeys: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreference extends $tea.Model {
  accessKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  MFAPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  loginProfilePreference?: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  publicKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      MFAPreference: 'MFAPreference',
      loginProfilePreference: 'LoginProfilePreference',
      publicKeyPreference: 'PublicKeyPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      publicKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  lastLoginDate?: string;
  createDate?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      lastLoginDate: 'LastLoginDate',
      createDate: 'CreateDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      lastLoginDate: 'string',
      createDate: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBodyMFADevice extends $tea.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponseBodyAccessKeysAccessKey extends $tea.Model {
  status?: string;
  accessKeyId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accessKeyId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponseBodyAccessKeys extends $tea.Model {
  accessKey?: ListAccessKeysResponseBodyAccessKeysAccessKey[];
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: { 'type': 'array', 'itemType': ListAccessKeysResponseBodyAccessKeysAccessKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyGroupsGroup extends $tea.Model {
  groupName?: string;
  comments?: string;
  attachDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      comments: 'Comments',
      attachDate: 'AttachDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      comments: 'string',
      attachDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyGroups extends $tea.Model {
  group?: ListEntitiesForPolicyResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyGroupsGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyRolesRole extends $tea.Model {
  description?: string;
  roleName?: string;
  attachDate?: string;
  arn?: string;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      roleName: 'RoleName',
      attachDate: 'AttachDate',
      arn: 'Arn',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      roleName: 'string',
      attachDate: 'string',
      arn: 'string',
      roleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyRoles extends $tea.Model {
  role?: ListEntitiesForPolicyResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyRolesRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyUsersUser extends $tea.Model {
  displayName?: string;
  userId?: string;
  userName?: string;
  attachDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userName: 'UserName',
      attachDate: 'AttachDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userName: 'string',
      attachDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyUsers extends $tea.Model {
  user?: ListEntitiesForPolicyResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroupsGroup extends $tea.Model {
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      updateDate: 'string',
      groupName: 'string',
      comments: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroups extends $tea.Model {
  group?: ListGroupsResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroupsGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBodyGroupsGroup extends $tea.Model {
  groupId?: string;
  groupName?: string;
  comments?: string;
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      comments: 'Comments',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      comments: 'string',
      joinDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBodyGroups extends $tea.Model {
  group?: ListGroupsForUserResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyGroupsGroup },
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

export class ListPoliciesForGroupResponseBodyPoliciesPolicy extends $tea.Model {
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  attachDate?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      attachDate: 'AttachDate',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      attachDate: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForGroupResponseBodyPolicies extends $tea.Model {
  policy?: ListPoliciesForGroupResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesForGroupResponseBodyPoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForRoleResponseBodyPoliciesPolicy extends $tea.Model {
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  attachDate?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      attachDate: 'AttachDate',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      attachDate: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForRoleResponseBodyPolicies extends $tea.Model {
  policy?: ListPoliciesForRoleResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesForRoleResponseBodyPoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForUserResponseBodyPoliciesPolicy extends $tea.Model {
  defaultVersion?: string;
  description?: string;
  policyName?: string;
  attachDate?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      attachDate: 'AttachDate',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'string',
      description: 'string',
      policyName: 'string',
      attachDate: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForUserResponseBodyPolicies extends $tea.Model {
  policy?: ListPoliciesForUserResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesForUserResponseBodyPoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsResponseBodyPolicyVersionsPolicyVersion extends $tea.Model {
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

export class ListRolesResponseBodyRolesRole extends $tea.Model {
  description?: string;
  updateDate?: string;
  maxSessionDuration?: number;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
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

export class ListUsersResponseBodyUsersUser extends $tea.Model {
  displayName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  createDate?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      createDate: 'CreateDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      createDate: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  user?: ListUsersResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBodyUsersUser extends $tea.Model {
  displayName?: string;
  joinDate?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      joinDate: 'JoinDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      joinDate: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBodyUsers extends $tea.Model {
  user?: ListUsersForGroupResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser extends $tea.Model {
  displayName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice extends $tea.Model {
  serialNumber?: string;
  user?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser;
  activateDate?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      user: 'User',
      activateDate: 'ActivateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      user: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser,
      activateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBodyVirtualMFADevices extends $tea.Model {
  virtualMFADevice?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice[];
  static names(): { [key: string]: string } {
    return {
      virtualMFADevice: 'VirtualMFADevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADevice: { 'type': 'array', 'itemType': ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyResponseBodyPasswordPolicy extends $tea.Model {
  requireNumbers?: boolean;
  requireLowercaseCharacters?: boolean;
  hardExpiry?: boolean;
  passwordReusePrevention?: number;
  requireSymbols?: boolean;
  maxPasswordAge?: number;
  minimumPasswordLength?: number;
  requireUppercaseCharacters?: boolean;
  maxLoginAttemps?: number;
  static names(): { [key: string]: string } {
    return {
      requireNumbers: 'RequireNumbers',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      hardExpiry: 'HardExpiry',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireSymbols: 'RequireSymbols',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordLength: 'MinimumPasswordLength',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
      maxLoginAttemps: 'MaxLoginAttemps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requireNumbers: 'boolean',
      requireLowercaseCharacters: 'boolean',
      hardExpiry: 'boolean',
      passwordReusePrevention: 'number',
      requireSymbols: 'boolean',
      maxPasswordAge: 'number',
      minimumPasswordLength: 'number',
      requireUppercaseCharacters: 'boolean',
      maxLoginAttemps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $tea.Model {
  allowUserToManageAccessKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageAccessKeys: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $tea.Model {
  allowUserToManageMFADevices?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManageMFADevices: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $tea.Model {
  enableSaveMFATicket?: boolean;
  loginSessionDuration?: number;
  loginNetworkMasks?: string;
  allowUserToChangePassword?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginSessionDuration: 'LoginSessionDuration',
      loginNetworkMasks: 'LoginNetworkMasks',
      allowUserToChangePassword: 'AllowUserToChangePassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSaveMFATicket: 'boolean',
      loginSessionDuration: 'number',
      loginNetworkMasks: 'string',
      allowUserToChangePassword: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $tea.Model {
  allowUserToManagePublicKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePublicKeys: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreference extends $tea.Model {
  accessKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  MFAPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  loginProfilePreference?: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  publicKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      MFAPreference: 'MFAPreference',
      loginProfilePreference: 'LoginProfilePreference',
      publicKeyPreference: 'PublicKeyPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      publicKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceResponseBodyMFADevice extends $tea.Model {
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBodyGroup extends $tea.Model {
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      updateDate: 'string',
      groupName: 'string',
      comments: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBodyRole extends $tea.Model {
  assumeRolePolicyDocument?: string;
  updateDate?: string;
  description?: string;
  maxSessionDuration?: number;
  roleName?: string;
  createDate?: string;
  roleId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      updateDate: 'UpdateDate',
      description: 'Description',
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
      updateDate: 'string',
      description: 'string',
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

export class UpdateUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  createDate?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      createDate: 'CreateDate',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      createDate: 'string',
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ram", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addUserToGroupWithOptions(request: AddUserToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUserToGroupResponse>(await this.doRPCRequest("AddUserToGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserToGroupResponse({}));
  }

  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  async attachPolicyToGroupWithOptions(request: AttachPolicyToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyToGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachPolicyToGroupResponse>(await this.doRPCRequest("AttachPolicyToGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AttachPolicyToGroupResponse({}));
  }

  async attachPolicyToGroup(request: AttachPolicyToGroupRequest): Promise<AttachPolicyToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyToGroupWithOptions(request, runtime);
  }

  async attachPolicyToRoleWithOptions(request: AttachPolicyToRoleRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyToRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachPolicyToRoleResponse>(await this.doRPCRequest("AttachPolicyToRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AttachPolicyToRoleResponse({}));
  }

  async attachPolicyToRole(request: AttachPolicyToRoleRequest): Promise<AttachPolicyToRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyToRoleWithOptions(request, runtime);
  }

  async attachPolicyToUserWithOptions(request: AttachPolicyToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyToUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachPolicyToUserResponse>(await this.doRPCRequest("AttachPolicyToUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new AttachPolicyToUserResponse({}));
  }

  async attachPolicyToUser(request: AttachPolicyToUserRequest): Promise<AttachPolicyToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyToUserWithOptions(request, runtime);
  }

  async bindMFADeviceWithOptions(request: BindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindMFADeviceResponse>(await this.doRPCRequest("BindMFADevice", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new BindMFADeviceResponse({}));
  }

  async bindMFADevice(request: BindMFADeviceRequest): Promise<BindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindMFADeviceWithOptions(request, runtime);
  }

  async changePasswordWithOptions(request: ChangePasswordRequest, runtime: $Util.RuntimeOptions): Promise<ChangePasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangePasswordResponse>(await this.doRPCRequest("ChangePassword", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ChangePasswordResponse({}));
  }

  async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  async clearAccountAliasWithOptions(runtime: $Util.RuntimeOptions): Promise<ClearAccountAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ClearAccountAliasResponse>(await this.doRPCRequest("ClearAccountAlias", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ClearAccountAliasResponse({}));
  }

  async clearAccountAlias(): Promise<ClearAccountAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearAccountAliasWithOptions(runtime);
  }

  async createAccessKeyWithOptions(request: CreateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccessKeyResponse>(await this.doRPCRequest("CreateAccessKey", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccessKeyResponse({}));
  }

  async createAccessKey(request: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupResponse>(await this.doRPCRequest("CreateGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  async createLoginProfileWithOptions(request: CreateLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoginProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLoginProfileResponse>(await this.doRPCRequest("CreateLoginProfile", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoginProfileResponse({}));
  }

  async createLoginProfile(request: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePolicyResponse>(await this.doRPCRequest("CreatePolicy", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolicyResponse({}));
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
    return $tea.cast<CreatePolicyVersionResponse>(await this.doRPCRequest("CreatePolicyVersion", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolicyVersionResponse({}));
  }

  async createPolicyVersion(request: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  async createRoleWithOptions(request: CreateRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRoleResponse>(await this.doRPCRequest("CreateRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRoleResponse({}));
  }

  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createVirtualMFADeviceWithOptions(request: CreateVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVirtualMFADeviceResponse>(await this.doRPCRequest("CreateVirtualMFADevice", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVirtualMFADeviceResponse({}));
  }

  async createVirtualMFADevice(request: CreateVirtualMFADeviceRequest): Promise<CreateVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualMFADeviceWithOptions(request, runtime);
  }

  async deleteAccessKeyWithOptions(request: DeleteAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccessKeyResponse>(await this.doRPCRequest("DeleteAccessKey", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccessKeyResponse({}));
  }

  async deleteAccessKey(request: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupResponse>(await this.doRPCRequest("DeleteGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteLoginProfileWithOptions(request: DeleteLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoginProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLoginProfileResponse>(await this.doRPCRequest("DeleteLoginProfile", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLoginProfileResponse({}));
  }

  async deleteLoginProfile(request: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePolicyResponse>(await this.doRPCRequest("DeletePolicy", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePolicyResponse({}));
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
    return $tea.cast<DeletePolicyVersionResponse>(await this.doRPCRequest("DeletePolicyVersion", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePolicyVersionResponse({}));
  }

  async deletePolicyVersion(request: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  async deleteRoleWithOptions(request: DeleteRoleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRoleResponse>(await this.doRPCRequest("DeleteRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRoleResponse({}));
  }

  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteVirtualMFADeviceWithOptions(request: DeleteVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.doRPCRequest("DeleteVirtualMFADevice", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async detachPolicyFromGroupWithOptions(request: DetachPolicyFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyFromGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachPolicyFromGroupResponse>(await this.doRPCRequest("DetachPolicyFromGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetachPolicyFromGroupResponse({}));
  }

  async detachPolicyFromGroup(request: DetachPolicyFromGroupRequest): Promise<DetachPolicyFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyFromGroupWithOptions(request, runtime);
  }

  async detachPolicyFromRoleWithOptions(request: DetachPolicyFromRoleRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyFromRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachPolicyFromRoleResponse>(await this.doRPCRequest("DetachPolicyFromRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetachPolicyFromRoleResponse({}));
  }

  async detachPolicyFromRole(request: DetachPolicyFromRoleRequest): Promise<DetachPolicyFromRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyFromRoleWithOptions(request, runtime);
  }

  async detachPolicyFromUserWithOptions(request: DetachPolicyFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyFromUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachPolicyFromUserResponse>(await this.doRPCRequest("DetachPolicyFromUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new DetachPolicyFromUserResponse({}));
  }

  async detachPolicyFromUser(request: DetachPolicyFromUserRequest): Promise<DetachPolicyFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyFromUserWithOptions(request, runtime);
  }

  async getAccessKeyLastUsedWithOptions(request: GetAccessKeyLastUsedRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccessKeyLastUsedResponse>(await this.doRPCRequest("GetAccessKeyLastUsed", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccessKeyLastUsedResponse({}));
  }

  async getAccessKeyLastUsed(request: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  async getAccountAliasWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetAccountAliasResponse>(await this.doRPCRequest("GetAccountAlias", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountAliasResponse({}));
  }

  async getAccountAlias(): Promise<GetAccountAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountAliasWithOptions(runtime);
  }

  async getGroupWithOptions(request: GetGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetGroupResponse>(await this.doRPCRequest("GetGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetGroupResponse({}));
  }

  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  async getLoginProfileWithOptions(request: GetLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoginProfileResponse>(await this.doRPCRequest("GetLoginProfile", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoginProfileResponse({}));
  }

  async getLoginProfile(request: GetLoginProfileRequest): Promise<GetLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  async getPasswordPolicyWithOptions(runtime: $Util.RuntimeOptions): Promise<GetPasswordPolicyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetPasswordPolicyResponse>(await this.doRPCRequest("GetPasswordPolicy", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetPasswordPolicyResponse({}));
  }

  async getPasswordPolicy(): Promise<GetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPolicyResponse>(await this.doRPCRequest("GetPolicy", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolicyResponse({}));
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
    return $tea.cast<GetPolicyVersionResponse>(await this.doRPCRequest("GetPolicyVersion", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetPolicyVersionResponse({}));
  }

  async getPolicyVersion(request: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  async getRoleWithOptions(request: GetRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRoleResponse>(await this.doRPCRequest("GetRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetRoleResponse({}));
  }

  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  async getSecurityPreferenceWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSecurityPreferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetSecurityPreferenceResponse>(await this.doRPCRequest("GetSecurityPreference", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecurityPreferenceResponse({}));
  }

  async getSecurityPreference(): Promise<GetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecurityPreferenceWithOptions(runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
  }

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getUserMFAInfoWithOptions(request: GetUserMFAInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserMFAInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserMFAInfoResponse>(await this.doRPCRequest("GetUserMFAInfo", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserMFAInfoResponse({}));
  }

  async getUserMFAInfo(request: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  async listAccessKeysWithOptions(request: ListAccessKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccessKeysResponse>(await this.doRPCRequest("ListAccessKeys", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccessKeysResponse({}));
  }

  async listAccessKeys(request: ListAccessKeysRequest): Promise<ListAccessKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  async listEntitiesForPolicyWithOptions(request: ListEntitiesForPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListEntitiesForPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEntitiesForPolicyResponse>(await this.doRPCRequest("ListEntitiesForPolicy", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListEntitiesForPolicyResponse({}));
  }

  async listEntitiesForPolicy(request: ListEntitiesForPolicyRequest): Promise<ListEntitiesForPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntitiesForPolicyWithOptions(request, runtime);
  }

  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListGroupsResponse>(await this.doRPCRequest("ListGroups", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupsResponse({}));
  }

  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  async listGroupsForUserWithOptions(request: ListGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsForUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListGroupsForUserResponse>(await this.doRPCRequest("ListGroupsForUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupsForUserResponse({}));
  }

  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPoliciesResponse>(await this.doRPCRequest("ListPolicies", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPoliciesResponse({}));
  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  async listPoliciesForGroupWithOptions(request: ListPoliciesForGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPoliciesForGroupResponse>(await this.doRPCRequest("ListPoliciesForGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPoliciesForGroupResponse({}));
  }

  async listPoliciesForGroup(request: ListPoliciesForGroupRequest): Promise<ListPoliciesForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForGroupWithOptions(request, runtime);
  }

  async listPoliciesForRoleWithOptions(request: ListPoliciesForRoleRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPoliciesForRoleResponse>(await this.doRPCRequest("ListPoliciesForRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPoliciesForRoleResponse({}));
  }

  async listPoliciesForRole(request: ListPoliciesForRoleRequest): Promise<ListPoliciesForRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForRoleWithOptions(request, runtime);
  }

  async listPoliciesForUserWithOptions(request: ListPoliciesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPoliciesForUserResponse>(await this.doRPCRequest("ListPoliciesForUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPoliciesForUserResponse({}));
  }

  async listPoliciesForUser(request: ListPoliciesForUserRequest): Promise<ListPoliciesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForUserWithOptions(request, runtime);
  }

  async listPolicyVersionsWithOptions(request: ListPolicyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicyVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPolicyVersionsResponse>(await this.doRPCRequest("ListPolicyVersions", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListPolicyVersionsResponse({}));
  }

  async listPolicyVersions(request: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listUsersForGroupWithOptions(request: ListUsersForGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersForGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersForGroupResponse>(await this.doRPCRequest("ListUsersForGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersForGroupResponse({}));
  }

  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  async listVirtualMFADevicesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListVirtualMFADevicesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListVirtualMFADevicesResponse>(await this.doRPCRequest("ListVirtualMFADevices", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListVirtualMFADevicesResponse({}));
  }

  async listVirtualMFADevices(): Promise<ListVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(runtime);
  }

  async removeUserFromGroupWithOptions(request: RemoveUserFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUserFromGroupResponse>(await this.doRPCRequest("RemoveUserFromGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUserFromGroupResponse({}));
  }

  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  async setAccountAliasWithOptions(request: SetAccountAliasRequest, runtime: $Util.RuntimeOptions): Promise<SetAccountAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAccountAliasResponse>(await this.doRPCRequest("SetAccountAlias", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetAccountAliasResponse({}));
  }

  async setAccountAlias(request: SetAccountAliasRequest): Promise<SetAccountAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccountAliasWithOptions(request, runtime);
  }

  async setDefaultPolicyVersionWithOptions(request: SetDefaultPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultPolicyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultPolicyVersionResponse>(await this.doRPCRequest("SetDefaultPolicyVersion", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultPolicyVersionResponse({}));
  }

  async setDefaultPolicyVersion(request: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  async setPasswordPolicyWithOptions(request: SetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetPasswordPolicyResponse>(await this.doRPCRequest("SetPasswordPolicy", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetPasswordPolicyResponse({}));
  }

  async setPasswordPolicy(request: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  async setSecurityPreferenceWithOptions(request: SetSecurityPreferenceRequest, runtime: $Util.RuntimeOptions): Promise<SetSecurityPreferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetSecurityPreferenceResponse>(await this.doRPCRequest("SetSecurityPreference", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetSecurityPreferenceResponse({}));
  }

  async setSecurityPreference(request: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  async unbindMFADeviceWithOptions(request: UnbindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindMFADeviceResponse>(await this.doRPCRequest("UnbindMFADevice", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindMFADeviceResponse({}));
  }

  async unbindMFADevice(request: UnbindMFADeviceRequest): Promise<UnbindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindMFADeviceWithOptions(request, runtime);
  }

  async updateAccessKeyWithOptions(request: UpdateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccessKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAccessKeyResponse>(await this.doRPCRequest("UpdateAccessKey", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAccessKeyResponse({}));
  }

  async updateAccessKey(request: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupResponse>(await this.doRPCRequest("UpdateGroup", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupResponse({}));
  }

  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  async updateLoginProfileWithOptions(request: UpdateLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoginProfileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLoginProfileResponse>(await this.doRPCRequest("UpdateLoginProfile", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLoginProfileResponse({}));
  }

  async updateLoginProfile(request: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  async updateRoleWithOptions(request: UpdateRoleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRoleResponse>(await this.doRPCRequest("UpdateRole", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRoleResponse({}));
  }

  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2015-05-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
