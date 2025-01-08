// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      userName: 'string',
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
   * 1B968853-B423-63A6-FE1F-45E81BC2AD61
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

export class AttachPolicyToGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * dev
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class AttachPolicyToGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachPolicyToGroupResponseBody;
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
      body: AttachPolicyToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * OSSAdminRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToRoleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class AttachPolicyToRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachPolicyToRoleResponseBody;
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
      body: AttachPolicyToRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToUserRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachPolicyToUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class AttachPolicyToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachPolicyToUserResponseBody;
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
      body: AttachPolicyToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMFADeviceRequest extends $tea.Model {
  /**
   * @remarks
   * The first authentication code.
   * 
   * @example
   * 11****
   */
  authenticationCode1?: string;
  /**
   * @remarks
   * The second authentication code.
   * 
   * @example
   * 33****
   */
  authenticationCode2?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device002
   */
  serialNumber?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode1: 'AuthenticationCode1',
      authenticationCode2: 'AuthenticationCode2',
      serialNumber: 'SerialNumber',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode1: 'string',
      authenticationCode2: 'string',
      serialNumber: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindMFADeviceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class BindMFADeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindMFADeviceResponseBody;
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
      body: BindMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordRequest extends $tea.Model {
  /**
   * @remarks
   * The new password that is used to log on to the Alibaba Cloud Management Console.
   * 
   * The password must meet the complexity requirements. For more information, see [SetPasswordPolicy](https://help.aliyun.com/document_detail/28739.html).
   * 
   * @example
   * aw$2****
   */
  newPassword?: string;
  /**
   * @remarks
   * The old password that is used to log on to the Alibaba Cloud Management Console.
   * 
   * @example
   * 12****
   */
  oldPassword?: string;
  static names(): { [key: string]: string } {
    return {
      newPassword: 'NewPassword',
      oldPassword: 'OldPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newPassword: 'string',
      oldPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangePasswordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class ChangePasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangePasswordResponseBody;
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
      body: ChangePasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearAccountAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class ClearAccountAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearAccountAliasResponseBody;
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
      body: ClearAccountAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user. If a RAM user calls this operation and does not specify this parameter, an AccessKey pair is created for the RAM user.
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The information of the AccessKey pair.
   */
  accessKey?: CreateAccessKeyResponseBodyAccessKey;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: CreateAccessKeyResponseBodyAccessKey,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccessKeyResponseBody;
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
      body: CreateAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The description.
   * 
   * The value can be up to 128 characters in length.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
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
   * The request ID.
   * 
   * @example
   * D3F0679E-9757-95DB-AF2D-04D5188C69C5
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

export class CreateLoginProfileRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether an MFA device must be attached to the RAM user upon logon. Default value: `false`.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The logon password of the RAM user. The password must meet the password strength requirements. For more information, see [GetPasswordPolicy](https://help.aliyun.com/document_detail/2337691.html).
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user must change the password upon logon. Default value: `false`.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      password: 'string',
      passwordResetRequired: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The logon configurations of the RAM user.
   */
  loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginProfile: 'LoginProfile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginProfile: CreateLoginProfileResponseBodyLoginProfile,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoginProfileResponseBody;
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
      body: CreateLoginProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * Query ECS instances in a specific region
   */
  description?: string;
  /**
   * @remarks
   * The document of the policy.
   * 
   * The document must be 1 to 6,144 characters in length.
   * 
   * For more information about policy elements and sample policies, see [Policy elements](https://help.aliyun.com/document_detail/93738.html) and [Overview of sample policies](https://help.aliyun.com/document_detail/210969.html).
   * 
   * @example
   * {"Statement": [{"Effect": "Allow","Action": "ecs:Describe*","Resource": "acs:ecs:cn-qingdao:*:instance/*"}],"Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * The name must be 1 to 128 characters in length, and can contain letters, digits, and hyphens (-).
   * 
   * @example
   * View-ECS-instances-in-a-specific-region
   */
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
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: CreatePolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA34C54A-C2B1-5A65-B6B0-B5842C1DB4DA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
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
  /**
   * @remarks
   * The document of the policy. The document can be up to 6,144 bytes in length.
   * 
   * @example
   * {"Statement":[{"Action":["oss:*"],"Effect":"Allow","Resource":["acs:oss:*:*:*"]}],"Version":"1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The rotation strategy of the policy. The rotation strategy can be used to delete an early policy version.
   * 
   * Valid values:
   * 
   * *   `None`: disables the rotation strategy.
   * *   `DeleteOldestNonDefaultVersionWhenLimitExceeded`: deletes the earliest non-active version if the number of versions exceeds the limit.
   * 
   * Default value: `None`.
   * 
   * @example
   * None
   */
  rotateStrategy?: string;
  /**
   * @remarks
   * Specifies whether to set this policy as the default policy. Default value: `false`.
   * 
   * @example
   * false
   */
  setAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      policyName: 'PolicyName',
      rotateStrategy: 'RotateStrategy',
      setAsDefault: 'SetAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      policyName: 'string',
      rotateStrategy: 'string',
      setAsDefault: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the policy version.
   */
  policyVersion?: CreatePolicyVersionResponseBodyPolicyVersion;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyVersionResponseBody;
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

export class CreateRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The trust policy that specifies one or more trusted entities to assume the RAM role. The trusted entities can be Alibaba Cloud accounts, Alibaba Cloud services, or identity providers (IdPs).
   * 
   * >  RAM users cannot assume the RAM roles of trusted Alibaba Cloud services.
   * 
   * @example
   * {"Statement":[{"Action":"sts:AssumeRole","Effect":"Allow","Principal":{"RAM":"acs:ram::123456789012****:root"}}],"Version":"1"}
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * The description must be 1 to 1,024 characters in length.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
   * 
   * If you do not specify this parameter, the default value is used.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * ECSAdmin
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM role.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRoleResponseBody;
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

export class CreateUserRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * The description must be 1 to 128 characters in length.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * The display name must be 1 to 128 characters in length.
   * 
   * @example
   * alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * Format: Country code-Mobile phone number.
   * 
   * >  This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * The username must be 1 to 64 characters in length, and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user.
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

export class CreateVirtualMFADeviceRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the MFA device.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * device001
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the MFA device.
   */
  virtualMFADevice?: CreateVirtualMFADeviceResponseBodyVirtualMFADevice;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualMFADevice: 'VirtualMFADevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualMFADevice: CreateVirtualMFADeviceResponseBodyVirtualMFADevice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualMFADeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVirtualMFADeviceResponseBody;
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
      body: CreateVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageRequest extends $tea.Model {
  /**
   * @remarks
   * The encoded diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.
   * 
   * @example
   * AQEAAAAAZBgxr0U1MjA1NTM1LUM4BBktMzE5RS1CODgxLUU1QTI0RDNFQTM1****
   */
  encodedDiagnosticMessage?: string;
  static names(): { [key: string]: string } {
    return {
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodedDiagnosticMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The decoded diagnostic information.
   */
  decodedDiagnosticMessage?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2331703-AADF-5564-BA9B-26CD51A33BA0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      decodedDiagnosticMessage: 'DecodedDiagnosticMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decodedDiagnosticMessage: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecodeDiagnosticMessageResponseBody;
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
      body: DecodeDiagnosticMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID in the AccessKey pair that you want to delete.
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccessKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class DeleteAccessKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccessKeyResponseBody;
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
      body: DeleteAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * If you want to query the name of a RAM user group, call the [ListGroups](https://help.aliyun.com/document_detail/28703.html) operation.
   * 
   * @example
   * Dev-Team
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FCF40AB5-881C-A0F9-334C-B0AD423AA69D
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

export class DeleteLoginProfileRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C488B66-B819-4D14-8711-C4EAAA13AC01
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

export class DeleteLoginProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLoginProfileResponseBody;
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
      body: DeleteLoginProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  cascadingDelete?: boolean;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      cascadingDelete: 'CascadingDelete',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadingDelete: 'boolean',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 898FAB24-7509-43EE-A287-086FE4C44394
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

export class DeletePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
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
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * @example
   * v3
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
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

export class DeletePolicyVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyVersionResponseBody;
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

export class DeleteRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 898FAB24-7509-43EE-A287-086FE4C44394
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

export class DeleteRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRoleResponseBody;
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

export class DeleteUserRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C488B66-B819-4D14-8711-C4EAAA13AC01
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

export class DeleteVirtualMFADeviceRequest extends $tea.Model {
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device002
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class DeleteVirtualMFADeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualMFADeviceResponseBody;
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
      body: DeleteVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * dev
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class DetachPolicyFromGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachPolicyFromGroupResponseBody;
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
      body: DetachPolicyFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * OSSAdminRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromRoleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class DetachPolicyFromRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachPolicyFromRoleResponseBody;
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
      body: DetachPolicyFromRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromUserRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      policyType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachPolicyFromUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
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

export class DetachPolicyFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachPolicyFromUserResponseBody;
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
      body: DetachPolicyFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedRequest extends $tea.Model {
  /**
   * @example
   * LTAI4GFTgcR8m8cZQDTH****
   */
  userAccessKeyId?: string;
  /**
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResponseBody extends $tea.Model {
  accessKeyLastUsed?: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed;
  /**
   * @example
   * 5CCE804C-6450-49A7-B1DB-2460F7A97416
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccessKeyLastUsedResponseBody;
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
      body: GetAccessKeyLastUsedResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The alias of the Alibaba Cloud account.
   * 
   * @example
   * myalias
   */
  accountAlias?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountAlias: 'AccountAlias',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAlias: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountAliasResponseBody;
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
      body: GetAccountAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
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
  /**
   * @remarks
   * The information of the RAM user group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D4065824-E422-3ED6-68B1-1AF7D5C7804C
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

export class GetLoginProfileRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The logon configurations of the RAM user.
   */
  loginProfile?: GetLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginProfile: 'LoginProfile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginProfile: GetLoginProfileResponseBodyLoginProfile,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginProfileResponseBody;
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
      body: GetLoginProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The policy to manage passwords.
   */
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class GetPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
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

export class GetPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information of the default policy version.
   */
  defaultPolicyVersion?: GetPolicyResponseBodyDefaultPolicyVersion;
  /**
   * @remarks
   * The basic information of the policy.
   */
  policy?: GetPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 697852FB-50D7-44D9-9774-530C31EAC572
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPolicyVersion: 'DefaultPolicyVersion',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPolicyVersion: GetPolicyResponseBodyDefaultPolicyVersion,
      policy: GetPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyResponseBody;
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
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * @example
   * v3
   */
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
  /**
   * @remarks
   * The information of the policy version.
   */
  policyVersion?: GetPolicyVersionResponseBodyPolicyVersion;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPolicyVersionResponseBody;
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

export class GetRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * ECSAdmin
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM role.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleResponseBody;
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

export class GetSecurityPreferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC1213F1-A9D5-4A01-A996-44983689126C
   */
  requestId?: string;
  /**
   * @remarks
   * The security preferences.
   */
  securityPreference?: GetSecurityPreferenceResponseBodySecurityPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPreference: 'SecurityPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPreference: GetSecurityPreferenceResponseBodySecurityPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecurityPreferenceResponseBody;
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
      body: GetSecurityPreferenceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * The username must be 1 to 64 characters in length, and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * alice
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF5189484043
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user.
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

export class GetUserMFAInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The information about the MFA device that is attached to the RAM user.
   */
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserMFAInfoResponseBody;
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
      body: GetUserMFAInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user. If a RAM user calls this operation and does not specify this parameter, the AccessKey pairs of the RAM user are returned.
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The list of AccessKey pairs that belong to the RAM user.
   */
  accessKeys?: ListAccessKeysResponseBodyAccessKeys;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccessKeysResponseBody;
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
      body: ListAccessKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
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

export class ListEntitiesForPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of the RAM user groups.
   */
  groups?: ListEntitiesForPolicyResponseBodyGroups;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The information of RAM roles.
   */
  roles?: ListEntitiesForPolicyResponseBodyRoles;
  /**
   * @remarks
   * The list of the RAM users to which the policy is attached.
   */
  users?: ListEntitiesForPolicyResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      roles: 'Roles',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListEntitiesForPolicyResponseBodyGroups,
      requestId: 'string',
      roles: ListEntitiesForPolicyResponseBodyRoles,
      users: ListEntitiesForPolicyResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEntitiesForPolicyResponseBody;
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
      body: ListEntitiesForPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` is `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The list of the RAM user groups.
   */
  groups?: ListGroupsResponseBodyGroups;
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If `true` is returned, you can call this operation again and set the `Marker` parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 065527AA-2F2E-AD7C-7484-F2626CFE4934
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListGroupsResponseBodyGroups,
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
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

export class ListGroupsForUserRequest extends $tea.Model {
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * Alice
   */
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
  /**
   * @remarks
   * The list of the RAM user groups.
   */
  groups?: ListGroupsForUserResponseBodyGroups;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA772B52-BF9F-54CA-AC77-AA7A2DA89D46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListGroupsForUserResponseBodyGroups,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsForUserResponseBody;
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
      body: ListGroupsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  /**
   * @remarks
   * The `Marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxItems?: number;
  /**
   * @remarks
   * The type of the `Policy`. Valid values: `System` and `Custom`. If you do not specify the parameter, all policies are returned.
   * 
   * @example
   * System
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the value of IsTruncated is `true`, you can call this operation again and set `Marker` to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The list of policies.
   */
  policies?: ListPoliciesResponseBodyPolicies;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
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

export class ListPoliciesForGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * dev
   */
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
  /**
   * @remarks
   * The list of the policies that are attached to the RAM user group.
   */
  policies?: ListPoliciesForGroupResponseBodyPolicies;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesForGroupResponseBody;
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
      body: ListPoliciesForGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * AdminRole
   */
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
  /**
   * @remarks
   * The list of the policies that are attached to the RAM role.
   */
  policies?: ListPoliciesForRoleResponseBodyPolicies;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesForRoleResponseBody;
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
      body: ListPoliciesForRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesForUserRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The information about the policy.
   */
  policies?: ListPoliciesForUserResponseBodyPolicies;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesForUserResponseBody;
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
      body: ListPoliciesForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values: `System` and `Custom`.
   * 
   * @example
   * Custom
   */
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
  /**
   * @remarks
   * The list of the policy versions.
   */
  policyVersions?: ListPolicyVersionsResponseBodyPolicyVersions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyVersionsResponseBody;
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

export class ListRolesRequest extends $tea.Model {
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the value is `true`, you can call this operation again and set the `Marker` parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The information of RAM roles.
   */
  roles?: ListRolesResponseBodyRoles;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      roles: ListRolesResponseBodyRoles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
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

export class ListUsersRequest extends $tea.Model {
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries per page. If a response is truncated because it reaches the value of MaxItems, the value of `IsTruncatedg` will be `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set `Marker` to obtain the truncated part.``
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  /**
   * @remarks
   * The RAM users.
   */
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      users: ListUsersResponseBodyUsers,
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

export class ListUsersForGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
   * 
   * Valid values: 1 to 1000. Default value: 100.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * Indicates whether the response is truncated.
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the value of IsTruncated is `true`, you can call this operation again and set `marker` to obtain the truncated part.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of the RAM users.
   */
  users?: ListUsersForGroupResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      users: ListUsersForGroupResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersForGroupResponseBody;
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
      body: ListUsersForGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The list of MFA devices.
   */
  virtualMFADevices?: ListVirtualMFADevicesResponseBodyVirtualMFADevices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualMFADevices: ListVirtualMFADevicesResponseBodyVirtualMFADevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVirtualMFADevicesResponseBody;
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
      body: ListVirtualMFADevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      userName: 'string',
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
   * A07EF215-B9B3-8CB2-2899-3F9575C6E320
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

export class SetAccountAliasRequest extends $tea.Model {
  /**
   * @remarks
   * The alias of the Alibaba Cloud account.
   * 
   * The alias must be 3 to 32 characters in length, and can contain lowercase letters, digits, and hyphens (-).
   * 
   * > It cannot start or end with a hyphen (-), and cannot contain consecutive hyphens (-).
   * 
   * @example
   * myalias
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class SetAccountAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetAccountAliasResponseBody;
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
      body: SetAccountAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultPolicyVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The ID of the policy version that you want to set as the default version.
   * 
   * @example
   * v2
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B34724D-54B0-4A51-B34D-4512372FE1BE
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

export class SetDefaultPolicyVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDefaultPolicyVersionResponseBody;
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

export class SetPasswordPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether a password will expire.
   * 
   * Valid values: `true` and `false`. Default value: `false`. If you leave this parameter unspecified, the default value false is used.
   * 
   * *   If you set this parameter to `true`, the Alibaba Cloud account to which the RAM users belong must reset the passwords before the RAM users can log on to the Alibaba Cloud Management Console.
   * *   If you set this parameter to `false`, the RAM users can change the passwords after the passwords expire and then log on to the Alibaba Cloud Management Console.
   * 
   * @example
   * false
   */
  hardExpiry?: boolean;
  /**
   * @remarks
   * The maximum number of permitted logon attempts within one hour. The number of logon attempts is reset to zero if a RAM user changes the password.
   * 
   * @example
   * 5
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The number of days for which a password is valid. Default value: 0. The default value indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum required number of characters in a password.
   * 
   * Valid values: 8 to 32. Default value: 8.
   * 
   * @example
   * 12
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * The number of previous passwords that a RAM user is prevented from reusing. Default value: 0. The default value indicates that the RAM user can reuse previous passwords.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Specifies whether a password must contain one or more lowercase letters.
   * 
   * @example
   * true
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Specifies whether a password must contain one or more digits.
   * 
   * @example
   * true
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Specifies whether a password must contain one or more special characters.
   * 
   * @example
   * true
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Specifies whether a password must contain one or more uppercase letters.
   * 
   * @example
   * true
   */
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpiry: 'HardExpiry',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpiry: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordLength: 'number',
      passwordReusePrevention: 'number',
      requireLowercaseCharacters: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUppercaseCharacters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The password policy.
   */
  passwordPolicy?: SetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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
      passwordPolicy: SetPasswordPolicyResponseBodyPasswordPolicy,
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

export class SetSecurityPreferenceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether RAM users can change their passwords. Valid values:
   * 
   * *   true: RAM users can change their passwords. This is the default value.
   * *   false: RAM users cannot change their passwords.
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true: RAM users can manage their AccessKey pairs.
   * *   false: RAM users cannot manage their AccessKey pairs. This is the default value.
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true: RAM users can manage their MFA devices. This is the default value.
   * *   false: RAM users cannot manage their MFA devices.
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their public keys. Valid values:
   * 
   * *   true: RAM users can manage their public keys.
   * *   false: RAM users cannot manage their public keys. This is the default value.
   * 
   * >  This parameter is valid only for the Japan site.
   * 
   * @example
   * false
   */
  allowUserToManagePublicKeys?: boolean;
  /**
   * @remarks
   * Specifies whether to remember the multi-factor authentication (MFA) devices of Resource Access Management (RAM) users for seven days. Valid values:
   * 
   * *   true: remembers the MFA devices of RAM users for seven days.
   * *   false: does not remember the MFA devices of RAM users for seven days.
   * 
   * @example
   * true
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that specifies the IP addresses from which you can log on to the Alibaba Cloud Management Console. This parameter takes effect on password-based logon and single sign-on (SSO). However, this parameter does not take effect on API calls that are authenticated by using AccessKey pairs.
   * 
   * *   If you specify a subnet mask, RAM users can use only the IP addresses in the subnet mask to log on to the Alibaba Cloud Management Console.
   * *   If you do not specify a subnet mask, RAM users can use all IP addresses to log on to the Alibaba Cloud Management Console.
   * 
   * If you need to specify multiple subnet masks, separate the subnet masks with semicolons (;). Example: 192.168.0.0/16;10.0.0.0/8.
   * 
   * You can specify up to 40 subnet masks. The total length of the subnet masks can be a maximum of 512 characters.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of the logon session of RAM users.
   * 
   * Valid values: 1 to 24. Default value: 6. Unit: hours.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      allowUserToManagePublicKeys: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A978915D-F279-4CA0-A89B-9A71219FFB3E
   */
  requestId?: string;
  /**
   * @remarks
   * The security preferences.
   */
  securityPreference?: SetSecurityPreferenceResponseBodySecurityPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPreference: 'SecurityPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPreference: SetSecurityPreferenceResponseBodySecurityPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSecurityPreferenceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindMFADeviceResponseBody;
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
      body: UnbindMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values: `Active` and `Inactive`.
   * 
   * @example
   * Inactive
   */
  status?: string;
  /**
   * @remarks
   * The AccessKey ID in the AccessKey pair whose status you want to change.
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userAccessKeyId: 'UserAccessKeyId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userAccessKeyId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class UpdateAccessKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccessKeyResponseBody;
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
      body: UpdateAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The new description of the RAM user group.
   * 
   * The comments must be 1 to 128 characters in length.
   * 
   * @example
   * NewDev-Team
   */
  newComments?: string;
  /**
   * @remarks
   * The new name of the RAM user group.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * NewDev-Team
   */
  newGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      newComments: 'NewComments',
      newGroupName: 'NewGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      newComments: 'string',
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
   * The information of the RAM user group.
   */
  group?: UpdateGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC6647CC-0A36-EC7A-BA72-CC81BF3DE182
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

export class UpdateLoginProfileRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether an MFA device must be attached to the RAM user upon logon.
   * 
   * @example
   * true
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The logon password of the RAM user. The password must meet the password strength requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user must change the password upon logon.
   * 
   * @example
   * true
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      password: 'string',
      passwordResetRequired: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginProfileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
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

export class UpdateLoginProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLoginProfileResponseBody;
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
      body: UpdateLoginProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the policy.
   * 
   * The value of the parameter must be 1 to 1,024 characters in length.
   * 
   * @example
   * This is a test policy.
   */
  newDescription?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * TestPolicy
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      newDescription: 'NewDescription',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDescription: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the policy.
   */
  policy?: UpdatePolicyDescriptionResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7572DEBD-0ECE-518E-8682-D8CB82F8FE8E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: UpdatePolicyDescriptionResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyDescriptionResponseBody;
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
      body: UpdatePolicyDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  /**
   * @remarks
   * The policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234****:root" } } ], "Version": "1" }
   */
  newAssumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The new description of the RAM role.
   * 
   * The value must be 1 to 1,024 characters in length.
   * 
   * @example
   * ECS administrator
   */
  newDescription?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * Valid values: 3600 to 43200. Unit: seconds.Default value: 3600.
   * 
   * If you do not specify this parameter, the default value is used.
   * 
   * @example
   * 3600
   */
  newMaxSessionDuration?: number;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, periods (.),and hyphens (-).
   * 
   * @example
   * ECSAdmin
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the RAM role.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRoleResponseBody;
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

export class UpdateUserRequest extends $tea.Model {
  /**
   * @remarks
   * The new description of the RAM user.
   * 
   * The description must be 1 to 128 characters in length.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  newComments?: string;
  /**
   * @remarks
   * The new display name of the RAM user.
   * 
   * The name must be 1 to 128 characters in length.
   * 
   * @example
   * xiaoq****
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new email address of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * xiaoq****@example.com
   */
  newEmail?: string;
  /**
   * @remarks
   * The new mobile phone number of the RAM user.
   * 
   * Format: \\<Country code>-\\<Mobile phone number>.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * 86-1860000****
   */
  newMobilePhone?: string;
  /**
   * @remarks
   * The new username of the RAM user.
   * 
   * The username must be 1 to 64 characters in length, and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * xiaoq****
   */
  newUserName?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      newEmail: 'NewEmail',
      newMobilePhone: 'NewMobilePhone',
      newUserName: 'NewUserName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newComments: 'string',
      newDisplayName: 'string',
      newEmail: 'string',
      newMobilePhone: 'string',
      newUserName: 'string',
      userName: 'string',
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM user.
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

export class CreateAccessKeyResponseBodyAccessKey extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * PupkTg8jdmau1cXxYacgE736PJ****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values: Active and Inactive.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      createDate: 'CreateDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      createDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyGroup extends $tea.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * g-FpMEHiMysofp****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponseBodyLoginProfile extends $tea.Model {
  /**
   * @remarks
   * The time when the logon configurations were created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether an MFA device must be attached to the RAM user upon logon.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must change the password upon logon.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBodyPolicy extends $tea.Model {
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2021-10-13T02:46:57Z
   */
  createDate?: string;
  /**
   * @remarks
   * The version of the policy. Default value: v1.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Query ECS instances in a specific region
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * View-ECS-instances-in-a-specific-region
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
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
  /**
   * @remarks
   * The time when the policy version was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the policy version is the default version.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The document of the policy.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the policy version.
   * 
   * @example
   * v3
   */
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

export class CreateRoleResponseBodyRole extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The trust policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM user was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 901234567890****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUser extends $tea.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The point in time when the RAM user was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualMFADeviceResponseBodyVirtualMFADevice extends $tea.Model {
  /**
   * @remarks
   * The key of the MFA device.
   * 
   * @example
   * DSF98HAD982KJA9SDFNAS9D8FU839B8ADHBGS****
   */
  base32StringSeed?: string;
  /**
   * @remarks
   * The Base64-encoded QR code, in the PNG format.
   * 
   * @example
   * YXNkZmFzZDlmeW5hc2Q5OGZoODd4bXJmcThhaGU5aSBmYXNkZiBzYWRmIGFGIDRxd2VjIGEgdHEz****
   */
  QRCodePNG?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device001
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      base32StringSeed: 'Base32StringSeed',
      QRCodePNG: 'QRCodePNG',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base32StringSeed: 'string',
      QRCodePNG: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions extends $tea.Model {
  /**
   * @remarks
   * The key of the condition.
   * 
   * @example
   * acs:SourceIp
   */
  conditionKey?: string;
  /**
   * @remarks
   * The values that correspond to the key.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal extends $tea.Model {
  /**
   * @remarks
   * The identity.
   * 
   * *   If the operator is a RAM user, the ID of the user is displayed.
   * *   If the operator is a RAM role, the name and session name of the role are displayed. Example: RoleName:RoleSessionName.
   * *   If the operator is an SSO federated identity, the type and name of the identity provider (IdP) are displayed. Example: saml-provider/AzureAD.
   * 
   * @example
   * 28877424437521****
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the identity belongs.
   * 
   * @example
   * 196813200012****
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type that is used for authentication in the request.
   * 
   * Valid values:
   * 
   * *   SubUser: RAM user
   * *   AssumedRoleUser: RAM role
   * *   Federated: SSO federated identity
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  static names(): { [key: string]: string } {
    return {
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies extends $tea.Model {
  /**
   * @remarks
   * The type of the entity to which the policy is attached.
   * 
   * Valid values:
   * 
   * *   RamUser: RAM user
   * *   RamRole: RAM role
   * *   ResourceDirectoryTarget: entity in a resource directory
   * *   RamGroup: RAM user group
   * 
   * @example
   * RamUser
   */
  attachedEntityType?: string;
  /**
   * @remarks
   * The authorization scope of the policy.
   * 
   * Valid values:
   * 
   * *   Account: Alibaba Cloud account
   * *   Folder: folder in the resource directory
   * *   ResourceGroup: resource group
   * 
   * @example
   * Account
   */
  attachedScope?: string;
  /**
   * @remarks
   * The effect of the policy.
   * 
   * Valid values:
   * 
   * *   Deny
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allow
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Deny
   */
  effect?: string;
  /**
   * @remarks
   * The identifier of the policy.
   * 
   * *   Control policy: the ID of the control policy
   * *   RAM policy: the name of the policy
   * 
   * @example
   * MyPolicyName
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * Valid values:
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The version number of the policy.
   * 
   * > Only custom policies have version numbers.
   * 
   * @example
   * v1
   */
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      attachedEntityType: 'AttachedEntityType',
      attachedScope: 'AttachedScope',
      effect: 'Effect',
      policyIdentifier: 'PolicyIdentifier',
      policyType: 'PolicyType',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedEntityType: 'string',
      attachedScope: 'string',
      effect: 'string',
      policyIdentifier: 'string',
      policyType: 'string',
      policyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessage extends $tea.Model {
  /**
   * @remarks
   * The operation that is used for authentication in the request.
   * 
   * @example
   * ram:DecodeDiagnosticMessage
   */
  authAction?: string;
  /**
   * @remarks
   * The conditions that are used for authentication in the request.
   */
  authConditions?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions[];
  /**
   * @remarks
   * The operator that is used for authentication in the request.
   */
  authPrincipal?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal;
  /**
   * @remarks
   * The resource that is used for authentication in the request.
   * 
   * @example
   * *
   */
  authResource?: string;
  /**
   * @remarks
   * Indicates whether the access denied error is caused by an explicit deny.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  explicitDeny?: boolean;
  /**
   * @remarks
   * The policies that are matched.
   */
  matchedPolicies?: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies[];
  /**
   * @remarks
   * The type of the policy that causes the access denied error.
   * 
   * Valid values:
   * 
   * *   AssumeRolePolicy: role-specific trust policy
   * *   ControlPolicy: control policy
   * *   AccountLevelIdentityBasedPolicy: identity-based policy at the account level
   * *   ResourceGroupLevelIdentityBasedPolicy: identity-based policy at the resource group level
   * *   SessionPolicy: session policy
   * 
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  noPermissionPolicyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authConditions: 'AuthConditions',
      authPrincipal: 'AuthPrincipal',
      authResource: 'AuthResource',
      explicitDeny: 'ExplicitDeny',
      matchedPolicies: 'MatchedPolicies',
      noPermissionPolicyType: 'NoPermissionPolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authConditions: { 'type': 'array', 'itemType': DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthConditions },
      authPrincipal: DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageAuthPrincipal,
      authResource: 'string',
      explicitDeny: 'boolean',
      matchedPolicies: { 'type': 'array', 'itemType': DecodeDiagnosticMessageResponseBodyDecodedDiagnosticMessageMatchedPolicies },
      noPermissionPolicyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed extends $tea.Model {
  /**
   * @example
   * 2020-10-21T06:37:40Z
   */
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
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user group was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * g-FpMEHiMysofp****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the information of the RAM user group was updated.
   * 
   * @example
   * 2015-02-11T03:15:21Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginProfileResponseBodyLoginProfile extends $tea.Model {
  /**
   * @remarks
   * The time when the logon configurations were created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether an MFA device must be attached to the RAM user upon logon.
   * 
   * @example
   * true
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must change the password upon logon.
   * 
   * @example
   * true
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponseBodyPasswordPolicy extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the password has expired.
   * 
   * Valid values: `true` and `false`. Default value: `false`.
   * 
   * *   If the value of this parameter is `true`, the parent Alibaba Cloud account must reset the password before the RAM user can log on to the console.
   * *   If the value of this parameter is `false`, the RAM user can change the password and then log on to the console.
   * 
   * @example
   * false
   */
  hardExpiry?: boolean;
  /**
   * @remarks
   * The maximum number of permitted logon attempts within one hour. The number of logon attempts is reset to zero if a RAM user changes the password.
   * 
   * @example
   * 5
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The number of days for which a password is valid. Default value: 0. The default value indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum required number of characters in a password.
   * 
   * @example
   * 12
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * The number of previous passwords that the user is prevented from reusing. Default value: 0. The default value indicates that the RAM user is not prevented from reusing previous passwords
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether a password must contain one or more lowercase letters.
   * 
   * @example
   * true
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more digits.
   * 
   * @example
   * true
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more special characters.
   * 
   * @example
   * true
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more uppercase letters.
   * 
   * @example
   * true
   */
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpiry: 'HardExpiry',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpiry: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordLength: 'number',
      passwordReusePrevention: 'number',
      requireLowercaseCharacters: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUppercaseCharacters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponseBodyDefaultPolicyVersion extends $tea.Model {
  /**
   * @remarks
   * The time when the default policy version was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * An attribute in the `DefaultPolicyVersion` parameter. The value of the `IsDefaultVersion` parameter is `true`.
   * 
   * @example
   * true
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The script of the default policy version.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the default policy version.
   * 
   * @example
   * v1
   */
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

export class GetPolicyResponseBodyPolicy extends $tea.Model {
  /**
   * @remarks
   * The number of references to the policy.
   * 
   * @example
   * 0
   */
  attachmentCount?: number;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The default version ID of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * N/A
   */
  policyDocument?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
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
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The script of the policy.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * v3
   */
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

export class GetRoleResponseBodyRole extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The content of the policy that specifies one or more entities entrusted to assume the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 901234567890****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The time when the RAM role was modified.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
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
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true: RAM users can manage their AccessKey pairs.
   * *   false: RAM users cannot manage their AccessKey pairs.
   * 
   * @example
   * false
   */
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

export class GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can change their passwords. Valid values:
   * 
   * *   true: RAM users can change their passwords.
   * *   false: RAM users cannot change their passwords.
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Indicates whether RAM users can save security codes for multi-factor authentication (MFA) during logon. Each security code is valid for seven days. Valid values:
   * 
   * *   true: RAM users can save MFA security codes during logon.
   * *   false: RAM users cannot save MFA security codes during logon.
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that indicates the IP addresses from which logon to the Alibaba Cloud Management Console is allowed. This parameter applies to password-based logon and single sign-on (SSO). However, this parameter does not apply to API calls that are authenticated based on AccessKey pairs.
   * 
   * *   If a subnet mask is specified, RAM users can log on to the Alibaba Cloud Management Console only by using the IP addresses in the subnetwork.
   * *   If no subnet mask is specified, RAM users can log on to the Alibaba Cloud Management Console by using all IP addresses.
   * 
   * If more than one subnet mask is specified, the masks are separated with semicolons (;), for example, 192.168.0.0/16;10.0.0.0/8.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of a logon session of a RAM user. Unit: hours.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true: RAM users can manage their MFA devices.
   * *   false: RAM users cannot manage their MFA devices.
   * 
   * @example
   * true
   */
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

export class GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their public keys. Valid values:
   * 
   * *   true: RAM users can manage their public keys.
   * *   false: RAM users cannot manage their public keys.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The AccessKey pair preference.
   */
  accessKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  /**
   * @remarks
   * The logon preferences.
   */
  loginProfilePreference?: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The MFA preference.
   */
  MFAPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  /**
   * @remarks
   * The public key preference.
   * 
   * >  The public key preference is valid only for the Japan site.
   */
  publicKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      publicKeyPreference: 'PublicKeyPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      publicKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * @example
   * Cloud computing engineer
   */
  comments?: string;
  /**
   * @remarks
   * The point in time when the RAM user was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * alice
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The point in time when the RAM user last logged on to the Alibaba Cloud Management Console by using the password. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * 86-1860000****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The point in time when the information about the RAM user was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2015-02-11T03:15:21Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 222748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      lastLoginDate: 'string',
      mobilePhone: 'string',
      updateDate: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBodyMFADevice extends $tea.Model {
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::177242285274****:mfa/test
   */
  serialNumber?: string;
  /**
   * @remarks
   * The type of the MFA device. Valid values:
   * 
   * *   VMFA: virtual MFA device
   * *   U2F: Universal 2nd Factor (U2F) security key
   * 
   * @example
   * VMFA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponseBodyAccessKeysAccessKey extends $tea.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * 0wNEpMMlzy7s****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values: Active and Inactive.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      createDate: 'string',
      status: 'string',
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
  /**
   * @remarks
   * The time when the policy was attached to the RAM user group.
   * 
   * @example
   * 2015-02-18T17:22:08Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * Test team
   */
  comments?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * QA-Team
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      comments: 'Comments',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      comments: 'string',
      groupName: 'string',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The time when the policy was attached to the RAM user.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 122748924538****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      attachDate: 'AttachDate',
      description: 'Description',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      attachDate: 'string',
      description: 'string',
      roleId: 'string',
      roleName: 'string',
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
  /**
   * @remarks
   * The time when the policy was attached to the RAM user.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * Zhang*
   */
  displayName?: string;
  /**
   * @remarks
   * The unique ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      displayName: 'DisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      displayName: 'string',
      userId: 'string',
      userName: 'string',
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
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user group was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * g-FpMEHiMysofp****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the information of the RAM user group was updated.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
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
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * g-zYtroLrgbZR1****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the RAM user joined the RAM user group.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      groupId: 'GroupId',
      groupName: 'GroupName',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      groupId: 'string',
      groupName: 'string',
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
  /**
   * @remarks
   * The number of references to the policy.
   * 
   * @example
   * 3
   */
  attachmentCount?: number;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * System
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
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

export class ListPoliciesForGroupResponseBodyPoliciesPolicy extends $tea.Model {
  /**
   * @remarks
   * The time when the policy was attached to the RAM user group.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
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
  /**
   * @remarks
   * The time when the policy was attached to the RAM role.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The default version of the policy.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
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
  /**
   * @remarks
   * The time at which the policy is attached to the RAM user. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  attachDate?: string;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * OSS administrator
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   System: system policy
   * *   Custom: custom policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      defaultVersion: 'DefaultVersion',
      description: 'Description',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
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
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2015-02-26T01:25:52Z
   */
  createDate?: string;
  /**
   * @remarks
   * Indicates whether the version is the default version.
   * 
   * @example
   * false
   */
  isDefaultVersion?: boolean;
  /**
   * @remarks
   * The script of the policy.
   * 
   * @example
   * { "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * v3
   */
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 901234567890****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The time when the RAM role was modified.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
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

export class ListUsersResponseBodyUsersUser extends $tea.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Cloud computing engineer
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * Zhangq****
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * > This parameter is unavailable.
   * 
   * @example
   * zhangq****@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * > This parameter is unavailable.
   * 
   * @example
   * 86-1860000****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The point in time when the information about the RAM user was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      updateDate: 'string',
      userId: 'string',
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
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the RAM user joined the RAM user group.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinDate?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangqiang
   */
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
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  displayName?: string;
  /**
   * @remarks
   * The unique ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
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
  /**
   * @remarks
   * The time when the MFA device was enabled.
   * 
   * @example
   * 2015-02-18T17:22:08Z
   */
  activateDate?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device002
   */
  serialNumber?: string;
  /**
   * @remarks
   * The basic information of the RAM user to which the MFA device is attached.
   */
  user?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser;
  static names(): { [key: string]: string } {
    return {
      activateDate: 'ActivateDate',
      serialNumber: 'SerialNumber',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateDate: 'string',
      serialNumber: 'string',
      user: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser,
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
  /**
   * @remarks
   * Indicates whether a password expires.
   * 
   * Valid values: `true` and `false`. Default value: `false`. If the parameter is unspecified, the default value false is returned.
   * 
   * *   If this parameter is set to `true`, the Alibaba Cloud account to which the RAM users belong must reset the password before the RAM users can log on to the Alibaba Cloud Management Console.
   * *   If this parameter is set to `false`, the RAM users can change the passwords after the passwords expire and then log on to the Alibaba Cloud Management Console.
   * 
   * @example
   * false
   */
  hardExpiry?: boolean;
  /**
   * @remarks
   * The maximum number of permitted logon attempts within one hour. The number of logon attempts is reset to zero if a RAM user changes the password.
   * 
   * @example
   * 5
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The number of days for which a password is valid. Default value: 0. The default value indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum required number of characters in a password.
   * 
   * @example
   * 12
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * The number of previous passwords that a RAM user is prevented from reusing. Default value: 0. The default value indicates that the RAM user can reuse previous passwords.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether a password must contain one or more lowercase letters.
   * 
   * @example
   * true
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more digits.
   * 
   * @example
   * true
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more special characters.
   * 
   * @example
   * true
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether a password must contain one or more uppercase letters.
   * 
   * @example
   * true
   */
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpiry: 'HardExpiry',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpiry: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordLength: 'number',
      passwordReusePrevention: 'number',
      requireLowercaseCharacters: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      requireUppercaseCharacters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their AccessKey pairs.
   * 
   * @example
   * false
   */
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can change their passwords.
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Indicates whether the MFA devices of RAM users are remembered.
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of the logon session of RAM users.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their MFA devices.
   * 
   * @example
   * false
   */
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

export class SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their public keys.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The AccessKey pair preference.
   */
  accessKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  /**
   * @remarks
   * The logon preference.
   */
  loginProfilePreference?: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The MFA preference.
   */
  MFAPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  /**
   * @remarks
   * The public key preference.
   * 
   * >  This parameter is valid only for the Japan site.
   */
  publicKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      publicKeyPreference: 'PublicKeyPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
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
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * NewDev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user group was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * g-FpMEHiMysofp****
   */
  groupId?: string;
  /**
   * @remarks
   * The new name of the RAM user group.
   * 
   * @example
   * NewDev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the information of the RAM user group was updated.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyDescriptionResponseBodyPolicy extends $tea.Model {
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2022-02-28T07:04:15Z
   */
  createDate?: string;
  /**
   * @remarks
   * The version of the policy. Default value: v1.
   * 
   * @example
   * v1
   */
  defaultVersion?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * This is a test policy.
   */
  description?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * TestPolicy
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   Custom: custom policy
   * *   System: system policy
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The time when the policy was modified.
   * 
   * @example
   * 2022-02-28T07:05:37Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateRoleResponseBodyRole extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The policy that specifies the trusted entity to assume the RAM role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the RAM role was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 901234567890****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The time when the description of the RAM role was changed.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
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
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBodyUser extends $tea.Model {
  /**
   * @remarks
   * The description of the RAM user.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The point in time when the RAM user was created. The time is displayed in UTC.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * xiaoq****
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * xiaoq****@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
   * 
   * @example
   * 86-1860000****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The point in time when the information about the RAM user was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2015-02-11T03:15:21Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 122748924538****
   */
  userId?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * xiaoq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      updateDate: 'string',
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

  /**
   * Adds a RAM user to a RAM user group.
   * 
   * @param request - AddUserToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToGroupResponse
   */
  async addUserToGroupWithOptions(request: AddUserToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserToGroup",
      version: "2015-05-01",
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
   * Adds a RAM user to a RAM user group.
   * 
   * @param request - AddUserToGroupRequest
   * @returns AddUserToGroupResponse
   */
  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
   * Attaches a policy to a RAM user group.
   * 
   * @param request - AttachPolicyToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyToGroupResponse
   */
  async attachPolicyToGroupWithOptions(request: AttachPolicyToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "AttachPolicyToGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachPolicyToGroupResponse>(await this.callApi(params, req, runtime), new AttachPolicyToGroupResponse({}));
  }

  /**
   * Attaches a policy to a RAM user group.
   * 
   * @param request - AttachPolicyToGroupRequest
   * @returns AttachPolicyToGroupResponse
   */
  async attachPolicyToGroup(request: AttachPolicyToGroupRequest): Promise<AttachPolicyToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyToGroupWithOptions(request, runtime);
  }

  /**
   * Attaches a policy to a RAM role.
   * 
   * @param request - AttachPolicyToRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyToRoleResponse
   */
  async attachPolicyToRoleWithOptions(request: AttachPolicyToRoleRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyToRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachPolicyToRole",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachPolicyToRoleResponse>(await this.callApi(params, req, runtime), new AttachPolicyToRoleResponse({}));
  }

  /**
   * Attaches a policy to a RAM role.
   * 
   * @param request - AttachPolicyToRoleRequest
   * @returns AttachPolicyToRoleResponse
   */
  async attachPolicyToRole(request: AttachPolicyToRoleRequest): Promise<AttachPolicyToRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyToRoleWithOptions(request, runtime);
  }

  /**
   * Attaches a policy to a RAM user.
   * 
   * @param request - AttachPolicyToUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachPolicyToUserResponse
   */
  async attachPolicyToUserWithOptions(request: AttachPolicyToUserRequest, runtime: $Util.RuntimeOptions): Promise<AttachPolicyToUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachPolicyToUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachPolicyToUserResponse>(await this.callApi(params, req, runtime), new AttachPolicyToUserResponse({}));
  }

  /**
   * Attaches a policy to a RAM user.
   * 
   * @param request - AttachPolicyToUserRequest
   * @returns AttachPolicyToUserResponse
   */
  async attachPolicyToUser(request: AttachPolicyToUserRequest): Promise<AttachPolicyToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachPolicyToUserWithOptions(request, runtime);
  }

  /**
   * @param request - BindMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindMFADeviceResponse
   */
  async bindMFADeviceWithOptions(request: BindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationCode1)) {
      query["AuthenticationCode1"] = request.authenticationCode1;
    }

    if (!Util.isUnset(request.authenticationCode2)) {
      query["AuthenticationCode2"] = request.authenticationCode2;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindMFADevice",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindMFADeviceResponse>(await this.callApi(params, req, runtime), new BindMFADeviceResponse({}));
  }

  /**
   * @param request - BindMFADeviceRequest
   * @returns BindMFADeviceResponse
   */
  async bindMFADevice(request: BindMFADeviceRequest): Promise<BindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindMFADeviceWithOptions(request, runtime);
  }

  /**
   * @remarks
   * >  This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can change their passwords.
   * 
   * @param request - ChangePasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangePasswordResponse
   */
  async changePasswordWithOptions(request: ChangePasswordRequest, runtime: $Util.RuntimeOptions): Promise<ChangePasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!Util.isUnset(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangePassword",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangePasswordResponse>(await this.callApi(params, req, runtime), new ChangePasswordResponse({}));
  }

  /**
   * @remarks
   * >  This operation is available only for RAM users. Before you call this operation, make sure that `AllowUserToChangePassword` in [SetSecurityPreference](https://help.aliyun.com/document_detail/43765.html) is set to `True`. The value True indicates that RAM users can change their passwords.
   * 
   * @param request - ChangePasswordRequest
   * @returns ChangePasswordResponse
   */
  async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  /**
   * @param request - ClearAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearAccountAliasResponse
   */
  async clearAccountAliasWithOptions(runtime: $Util.RuntimeOptions): Promise<ClearAccountAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ClearAccountAlias",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearAccountAliasResponse>(await this.callApi(params, req, runtime), new ClearAccountAliasResponse({}));
  }

  /**
   * @returns ClearAccountAliasResponse
   */
  async clearAccountAlias(): Promise<ClearAccountAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearAccountAliasWithOptions(runtime);
  }

  /**
   * @param request - CreateAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessKeyResponse
   */
  async createAccessKeyWithOptions(request: CreateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessKey",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccessKeyResponse>(await this.callApi(params, req, runtime), new CreateAccessKeyResponse({}));
  }

  /**
   * @param request - CreateAccessKeyRequest
   * @returns CreateAccessKeyResponse
   */
  async createAccessKey(request: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  /**
   * Creates a RAM user group.
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2015-05-01",
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
   * Creates a RAM user group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Enables console logon for a RAM user.
   * 
   * @param request - CreateLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoginProfileResponse
   */
  async createLoginProfileWithOptions(request: CreateLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoginProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.MFABindRequired)) {
      query["MFABindRequired"] = request.MFABindRequired;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordResetRequired)) {
      query["PasswordResetRequired"] = request.passwordResetRequired;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoginProfile",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoginProfileResponse>(await this.callApi(params, req, runtime), new CreateLoginProfileResponse({}));
  }

  /**
   * Enables console logon for a RAM user.
   * 
   * @param request - CreateLoginProfileRequest
   * @returns CreateLoginProfileResponse
   */
  async createLoginProfile(request: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  /**
   * Creates a custom policy.
   * 
   * @remarks
   * For more information about policies, see [Policy overview](https://help.aliyun.com/document_detail/93732.html).
   * This topic provides an example on how to create a custom policy to query Elastic Compute Service (ECS) instances in a specific region.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
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
      version: "2015-05-01",
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

  /**
   * Creates a custom policy.
   * 
   * @remarks
   * For more information about policies, see [Policy overview](https://help.aliyun.com/document_detail/93732.html).
   * This topic provides an example on how to create a custom policy to query Elastic Compute Service (ECS) instances in a specific region.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - CreatePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersionWithOptions(request: CreatePolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyDocument)) {
      query["PolicyDocument"] = request.policyDocument;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.rotateStrategy)) {
      query["RotateStrategy"] = request.rotateStrategy;
    }

    if (!Util.isUnset(request.setAsDefault)) {
      query["SetAsDefault"] = request.setAsDefault;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicyVersion",
      version: "2015-05-01",
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

  /**
   * @param request - CreatePolicyVersionRequest
   * @returns CreatePolicyVersionResponse
   */
  async createPolicyVersion(request: CreatePolicyVersionRequest): Promise<CreatePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Creates a RAM role.
   * 
   * @remarks
   * ## Description
   * For more information about RAM roles, see [Overview of RAM roles](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @param request - CreateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
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
      version: "2015-05-01",
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

  /**
   * Creates a RAM role.
   * 
   * @remarks
   * ## Description
   * For more information about RAM roles, see [Overview of RAM roles](https://help.aliyun.com/document_detail/93689.html).
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRoleWithOptions(request, runtime);
  }

  /**
   * Creates a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to create a RAM user named `alice`.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.mobilePhone)) {
      query["MobilePhone"] = request.mobilePhone;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2015-05-01",
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
   * Creates a Resource Access Management (RAM) user.
   * 
   * @remarks
   * This topic provides an example on how to create a RAM user named `alice`.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * @param request - CreateVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualMFADeviceResponse
   */
  async createVirtualMFADeviceWithOptions(request: CreateVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.virtualMFADeviceName)) {
      query["VirtualMFADeviceName"] = request.virtualMFADeviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVirtualMFADevice",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new CreateVirtualMFADeviceResponse({}));
  }

  /**
   * @param request - CreateVirtualMFADeviceRequest
   * @returns CreateVirtualMFADeviceResponse
   */
  async createVirtualMFADevice(request: CreateVirtualMFADeviceRequest): Promise<CreateVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.
   * 
   * @param request - DecodeDiagnosticMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecodeDiagnosticMessageResponse
   */
  async decodeDiagnosticMessageWithOptions(request: DecodeDiagnosticMessageRequest, runtime: $Util.RuntimeOptions): Promise<DecodeDiagnosticMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.encodedDiagnosticMessage)) {
      query["EncodedDiagnosticMessage"] = request.encodedDiagnosticMessage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DecodeDiagnosticMessage",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DecodeDiagnosticMessageResponse>(await this.callApi(params, req, runtime), new DecodeDiagnosticMessageResponse({}));
  }

  /**
   * Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.
   * 
   * @param request - DecodeDiagnosticMessageRequest
   * @returns DecodeDiagnosticMessageResponse
   */
  async decodeDiagnosticMessage(request: DecodeDiagnosticMessageRequest): Promise<DecodeDiagnosticMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decodeDiagnosticMessageWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccessKeyResponse
   */
  async deleteAccessKeyWithOptions(request: DeleteAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessKey",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccessKeyResponse>(await this.callApi(params, req, runtime), new DeleteAccessKeyResponse({}));
  }

  /**
   * @param request - DeleteAccessKeyRequest
   * @returns DeleteAccessKeyResponse
   */
  async deleteAccessKey(request: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2015-05-01",
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
   * @remarks
   * Before you delete a RAM user group, make sure that no policies are attached to the group and no RAM users are included in the group.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfileWithOptions(request: DeleteLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoginProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoginProfile",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoginProfileResponse>(await this.callApi(params, req, runtime), new DeleteLoginProfileResponse({}));
  }

  /**
   * @param request - DeleteLoginProfileRequest
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfile(request: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cascadingDelete)) {
      query["CascadingDelete"] = request.cascadingDelete;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicy",
      version: "2015-05-01",
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

  /**
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyVersionResponse
   */
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
      version: "2015-05-01",
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

  /**
   * @param request - DeletePolicyVersionRequest
   * @returns DeletePolicyVersionResponse
   */
  async deletePolicyVersion(request: DeletePolicyVersionRequest): Promise<DeletePolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyVersionWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
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
      version: "2015-05-01",
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

  /**
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRoleWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you delete a RAM user, make sure that no policies are attached to the RAM user and that the RAM user does not belong to any groups.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2015-05-01",
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
   * @remarks
   * Before you delete a RAM user, make sure that no policies are attached to the RAM user and that the RAM user does not belong to any groups.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteVirtualMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADeviceWithOptions(request: DeleteVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVirtualMFADevice",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  /**
   * @param request - DeleteVirtualMFADeviceRequest
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a RAM user group.
   * 
   * @param request - DetachPolicyFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyFromGroupResponse
   */
  async detachPolicyFromGroupWithOptions(request: DetachPolicyFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "DetachPolicyFromGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachPolicyFromGroupResponse>(await this.callApi(params, req, runtime), new DetachPolicyFromGroupResponse({}));
  }

  /**
   * Detaches a policy from a RAM user group.
   * 
   * @param request - DetachPolicyFromGroupRequest
   * @returns DetachPolicyFromGroupResponse
   */
  async detachPolicyFromGroup(request: DetachPolicyFromGroupRequest): Promise<DetachPolicyFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyFromGroupWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a RAM role.
   * 
   * @param request - DetachPolicyFromRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyFromRoleResponse
   */
  async detachPolicyFromRoleWithOptions(request: DetachPolicyFromRoleRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyFromRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachPolicyFromRole",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachPolicyFromRoleResponse>(await this.callApi(params, req, runtime), new DetachPolicyFromRoleResponse({}));
  }

  /**
   * Detaches a policy from a RAM role.
   * 
   * @param request - DetachPolicyFromRoleRequest
   * @returns DetachPolicyFromRoleResponse
   */
  async detachPolicyFromRole(request: DetachPolicyFromRoleRequest): Promise<DetachPolicyFromRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyFromRoleWithOptions(request, runtime);
  }

  /**
   * Detaches a policy from a RAM user.
   * 
   * @param request - DetachPolicyFromUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachPolicyFromUserResponse
   */
  async detachPolicyFromUserWithOptions(request: DetachPolicyFromUserRequest, runtime: $Util.RuntimeOptions): Promise<DetachPolicyFromUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachPolicyFromUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachPolicyFromUserResponse>(await this.callApi(params, req, runtime), new DetachPolicyFromUserResponse({}));
  }

  /**
   * Detaches a policy from a RAM user.
   * 
   * @param request - DetachPolicyFromUserRequest
   * @returns DetachPolicyFromUserResponse
   */
  async detachPolicyFromUser(request: DetachPolicyFromUserRequest): Promise<DetachPolicyFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachPolicyFromUserWithOptions(request, runtime);
  }

  /**
   * @param request - GetAccessKeyLastUsedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccessKeyLastUsedResponse
   */
  async getAccessKeyLastUsedWithOptions(request: GetAccessKeyLastUsedRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsed",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccessKeyLastUsedResponse>(await this.callApi(params, req, runtime), new GetAccessKeyLastUsedResponse({}));
  }

  /**
   * @param request - GetAccessKeyLastUsedRequest
   * @returns GetAccessKeyLastUsedResponse
   */
  async getAccessKeyLastUsed(request: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  /**
   * @param request - GetAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountAliasResponse
   */
  async getAccountAliasWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAccountAlias",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountAliasResponse>(await this.callApi(params, req, runtime), new GetAccountAliasResponse({}));
  }

  /**
   * @returns GetAccountAliasResponse
   */
  async getAccountAlias(): Promise<GetAccountAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountAliasWithOptions(runtime);
  }

  /**
   * Queries the information of a RAM user group.
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(request: GetGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2015-05-01",
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
   * Queries the information of a RAM user group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * @param request - GetLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginProfileResponse
   */
  async getLoginProfileWithOptions(request: GetLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginProfile",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginProfileResponse>(await this.callApi(params, req, runtime), new GetLoginProfileResponse({}));
  }

  /**
   * @param request - GetLoginProfileRequest
   * @returns GetLoginProfileResponse
   */
  async getLoginProfile(request: GetLoginProfileRequest): Promise<GetLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  /**
   * @param request - GetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicyWithOptions(runtime: $Util.RuntimeOptions): Promise<GetPasswordPolicyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetPasswordPolicy",
      version: "2015-05-01",
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
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicy(): Promise<GetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(runtime);
  }

  /**
   * Queries the information of a policy.
   * 
   * @param request - GetPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
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
      action: "GetPolicy",
      version: "2015-05-01",
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

  /**
   * Queries the information of a policy.
   * 
   * @param request - GetPolicyRequest
   * @returns GetPolicyResponse
   */
  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information of a policy version.
   * 
   * @param request - GetPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyVersionResponse
   */
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
      version: "2015-05-01",
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

  /**
   * Queries the information of a policy version.
   * 
   * @param request - GetPolicyVersionRequest
   * @returns GetPolicyVersionResponse
   */
  async getPolicyVersion(request: GetPolicyVersionRequest): Promise<GetPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyVersionWithOptions(request, runtime);
  }

  /**
   * Queries information of a RAM role.
   * 
   * @param request - GetRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(request: GetRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRole",
      version: "2015-05-01",
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

  /**
   * Queries information of a RAM role.
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoleWithOptions(request, runtime);
  }

  /**
   * @param request - GetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityPreferenceResponse
   */
  async getSecurityPreferenceWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSecurityPreferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetSecurityPreference",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecurityPreferenceResponse>(await this.callApi(params, req, runtime), new GetSecurityPreferenceResponse({}));
  }

  /**
   * @returns GetSecurityPreferenceResponse
   */
  async getSecurityPreference(): Promise<GetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecurityPreferenceWithOptions(runtime);
  }

  /**
   * Queries the information about a RAM user.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the RAM user `alice`.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2015-05-01",
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
   * Queries the information about a RAM user.
   * 
   * @remarks
   * This topic provides an example on how to query the information about the RAM user `alice`.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * @param request - GetUserMFAInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfoWithOptions(request: GetUserMFAInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserMFAInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserMFAInfo",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserMFAInfoResponse>(await this.callApi(params, req, runtime), new GetUserMFAInfoResponse({}));
  }

  /**
   * @param request - GetUserMFAInfoRequest
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfo(request: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  /**
   * Queries the list of all AccessKey pairs that belong to a RAM user.
   * 
   * @param request - ListAccessKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessKeysResponse
   */
  async listAccessKeysWithOptions(request: ListAccessKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessKeys",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccessKeysResponse>(await this.callApi(params, req, runtime), new ListAccessKeysResponse({}));
  }

  /**
   * Queries the list of all AccessKey pairs that belong to a RAM user.
   * 
   * @param request - ListAccessKeysRequest
   * @returns ListAccessKeysResponse
   */
  async listAccessKeys(request: ListAccessKeysRequest): Promise<ListAccessKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  /**
   * Queries the entities to which a policy is attached.
   * 
   * @param request - ListEntitiesForPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntitiesForPolicyResponse
   */
  async listEntitiesForPolicyWithOptions(request: ListEntitiesForPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListEntitiesForPolicyResponse> {
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
      action: "ListEntitiesForPolicy",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEntitiesForPolicyResponse>(await this.callApi(params, req, runtime), new ListEntitiesForPolicyResponse({}));
  }

  /**
   * Queries the entities to which a policy is attached.
   * 
   * @param request - ListEntitiesForPolicyRequest
   * @returns ListEntitiesForPolicyResponse
   */
  async listEntitiesForPolicy(request: ListEntitiesForPolicyRequest): Promise<ListEntitiesForPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEntitiesForPolicyWithOptions(request, runtime);
  }

  /**
   * Queries RAM user groups.
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2015-05-01",
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
   * Queries RAM user groups.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
   * 
   * @remarks
   * This topic provides an example on how to query the RAM user groups to which the RAM user `Alice` belongs. The response shows that `Alice` belongs to the RAM user group named `Dev-Team`.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: ListGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupsForUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsForUserResponse>(await this.callApi(params, req, runtime), new ListGroupsForUserResponse({}));
  }

  /**
   * Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.
   * 
   * @remarks
   * This topic provides an example on how to query the RAM user groups to which the RAM user `Alice` belongs. The response shows that `Alice` belongs to the RAM user group named `Dev-Team`.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries a list of policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicies",
      version: "2015-05-01",
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

  /**
   * Queries a list of policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are attached to a RAM user group.
   * 
   * @param request - ListPoliciesForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForGroupResponse
   */
  async listPoliciesForGroupWithOptions(request: ListPoliciesForGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPoliciesForGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPoliciesForGroupResponse>(await this.callApi(params, req, runtime), new ListPoliciesForGroupResponse({}));
  }

  /**
   * Queries the policies that are attached to a RAM user group.
   * 
   * @param request - ListPoliciesForGroupRequest
   * @returns ListPoliciesForGroupResponse
   */
  async listPoliciesForGroup(request: ListPoliciesForGroupRequest): Promise<ListPoliciesForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForGroupWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are attached to a RAM role.
   * 
   * @param request - ListPoliciesForRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForRoleResponse
   */
  async listPoliciesForRoleWithOptions(request: ListPoliciesForRoleRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPoliciesForRole",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPoliciesForRoleResponse>(await this.callApi(params, req, runtime), new ListPoliciesForRoleResponse({}));
  }

  /**
   * Queries the policies that are attached to a RAM role.
   * 
   * @param request - ListPoliciesForRoleRequest
   * @returns ListPoliciesForRoleResponse
   */
  async listPoliciesForRole(request: ListPoliciesForRoleRequest): Promise<ListPoliciesForRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForRoleWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are attached to a RAM user.
   * 
   * @remarks
   * > You can call this operation to query only the policies that are attached to Alibaba Cloud accounts. You cannot query the policies that are attached to resource groups.
   * 
   * @param request - ListPoliciesForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesForUserResponse
   */
  async listPoliciesForUserWithOptions(request: ListPoliciesForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPoliciesForUser",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPoliciesForUserResponse>(await this.callApi(params, req, runtime), new ListPoliciesForUserResponse({}));
  }

  /**
   * Queries the policies that are attached to a RAM user.
   * 
   * @remarks
   * > You can call this operation to query only the policies that are attached to Alibaba Cloud accounts. You cannot query the policies that are attached to resource groups.
   * 
   * @param request - ListPoliciesForUserRequest
   * @returns ListPoliciesForUserResponse
   */
  async listPoliciesForUser(request: ListPoliciesForUserRequest): Promise<ListPoliciesForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesForUserWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyVersionsResponse
   */
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
      version: "2015-05-01",
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

  /**
   * Queries the versions of a policy.
   * 
   * @param request - ListPolicyVersionsRequest
   * @returns ListPolicyVersionsResponse
   */
  async listPolicyVersions(request: ListPolicyVersionsRequest): Promise<ListPolicyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicyVersionsWithOptions(request, runtime);
  }

  /**
   * Queries the list of all RAM roles.
   * 
   * @param request - ListRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2015-05-01",
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

  /**
   * Queries the list of all RAM roles.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all RAM users.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2015-05-01",
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
   * Queries the information about all RAM users.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * @param request - ListUsersForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(request: ListUsersForGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersForGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsersForGroup",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersForGroupResponse>(await this.callApi(params, req, runtime), new ListUsersForGroupResponse({}));
  }

  /**
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * Queries the list of all multi-factor authentication (MFA) devices.
   * 
   * @param request - ListVirtualMFADevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevicesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListVirtualMFADevicesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListVirtualMFADevices",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVirtualMFADevicesResponse>(await this.callApi(params, req, runtime), new ListVirtualMFADevicesResponse({}));
  }

  /**
   * Queries the list of all multi-factor authentication (MFA) devices.
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevices(): Promise<ListVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(runtime);
  }

  /**
   * @param request - RemoveUserFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroupWithOptions(request: RemoveUserFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserFromGroup",
      version: "2015-05-01",
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
   * @param request - RemoveUserFromGroupRequest
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
   * You can call this operation to specify an alias for an Alibaba Cloud account.
   * 
   * @param request - SetAccountAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAccountAliasResponse
   */
  async setAccountAliasWithOptions(request: SetAccountAliasRequest, runtime: $Util.RuntimeOptions): Promise<SetAccountAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountAlias)) {
      query["AccountAlias"] = request.accountAlias;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAccountAlias",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAccountAliasResponse>(await this.callApi(params, req, runtime), new SetAccountAliasResponse({}));
  }

  /**
   * You can call this operation to specify an alias for an Alibaba Cloud account.
   * 
   * @param request - SetAccountAliasRequest
   * @returns SetAccountAliasResponse
   */
  async setAccountAlias(request: SetAccountAliasRequest): Promise<SetAccountAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAccountAliasWithOptions(request, runtime);
  }

  /**
   * Sets the default version of a policy.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultPolicyVersionResponse
   */
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
      version: "2015-05-01",
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

  /**
   * Sets the default version of a policy.
   * 
   * @param request - SetDefaultPolicyVersionRequest
   * @returns SetDefaultPolicyVersionResponse
   */
  async setDefaultPolicyVersion(request: SetDefaultPolicyVersionRequest): Promise<SetDefaultPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultPolicyVersionWithOptions(request, runtime);
  }

  /**
   * @param request - SetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicyWithOptions(request: SetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hardExpiry)) {
      query["HardExpiry"] = request.hardExpiry;
    }

    if (!Util.isUnset(request.maxLoginAttemps)) {
      query["MaxLoginAttemps"] = request.maxLoginAttemps;
    }

    if (!Util.isUnset(request.maxPasswordAge)) {
      query["MaxPasswordAge"] = request.maxPasswordAge;
    }

    if (!Util.isUnset(request.minimumPasswordLength)) {
      query["MinimumPasswordLength"] = request.minimumPasswordLength;
    }

    if (!Util.isUnset(request.passwordReusePrevention)) {
      query["PasswordReusePrevention"] = request.passwordReusePrevention;
    }

    if (!Util.isUnset(request.requireLowercaseCharacters)) {
      query["RequireLowercaseCharacters"] = request.requireLowercaseCharacters;
    }

    if (!Util.isUnset(request.requireNumbers)) {
      query["RequireNumbers"] = request.requireNumbers;
    }

    if (!Util.isUnset(request.requireSymbols)) {
      query["RequireSymbols"] = request.requireSymbols;
    }

    if (!Util.isUnset(request.requireUppercaseCharacters)) {
      query["RequireUppercaseCharacters"] = request.requireUppercaseCharacters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPasswordPolicy",
      version: "2015-05-01",
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
   * @param request - SetPasswordPolicyRequest
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicy(request: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Configures the security preferences.
   * 
   * @param request - SetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreferenceWithOptions(request: SetSecurityPreferenceRequest, runtime: $Util.RuntimeOptions): Promise<SetSecurityPreferenceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowUserToChangePassword)) {
      query["AllowUserToChangePassword"] = request.allowUserToChangePassword;
    }

    if (!Util.isUnset(request.allowUserToManageAccessKeys)) {
      query["AllowUserToManageAccessKeys"] = request.allowUserToManageAccessKeys;
    }

    if (!Util.isUnset(request.allowUserToManageMFADevices)) {
      query["AllowUserToManageMFADevices"] = request.allowUserToManageMFADevices;
    }

    if (!Util.isUnset(request.allowUserToManagePublicKeys)) {
      query["AllowUserToManagePublicKeys"] = request.allowUserToManagePublicKeys;
    }

    if (!Util.isUnset(request.enableSaveMFATicket)) {
      query["EnableSaveMFATicket"] = request.enableSaveMFATicket;
    }

    if (!Util.isUnset(request.loginNetworkMasks)) {
      query["LoginNetworkMasks"] = request.loginNetworkMasks;
    }

    if (!Util.isUnset(request.loginSessionDuration)) {
      query["LoginSessionDuration"] = request.loginSessionDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSecurityPreference",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSecurityPreferenceResponse>(await this.callApi(params, req, runtime), new SetSecurityPreferenceResponse({}));
  }

  /**
   * Configures the security preferences.
   * 
   * @param request - SetSecurityPreferenceRequest
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreference(request: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  /**
   * Detaches a multi-factor authentication (MFA) device from a RAM user.
   * 
   * @param request - UnbindMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADeviceWithOptions(request: UnbindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindMFADevice",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindMFADeviceResponse>(await this.callApi(params, req, runtime), new UnbindMFADeviceResponse({}));
  }

  /**
   * Detaches a multi-factor authentication (MFA) device from a RAM user.
   * 
   * @param request - UnbindMFADeviceRequest
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADevice(request: UnbindMFADeviceRequest): Promise<UnbindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindMFADeviceWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccessKeyResponse
   */
  async updateAccessKeyWithOptions(request: UpdateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccessKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccessKey",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccessKeyResponse>(await this.callApi(params, req, runtime), new UpdateAccessKeyResponse({}));
  }

  /**
   * @param request - UpdateAccessKeyRequest
   * @returns UpdateAccessKeyResponse
   */
  async updateAccessKey(request: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  /**
   * Modifies a RAM user group.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.newComments)) {
      query["NewComments"] = request.newComments;
    }

    if (!Util.isUnset(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2015-05-01",
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
   * Modifies a RAM user group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoginProfileResponse
   */
  async updateLoginProfileWithOptions(request: UpdateLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoginProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.MFABindRequired)) {
      query["MFABindRequired"] = request.MFABindRequired;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordResetRequired)) {
      query["PasswordResetRequired"] = request.passwordResetRequired;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoginProfile",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoginProfileResponse>(await this.callApi(params, req, runtime), new UpdateLoginProfileResponse({}));
  }

  /**
   * @param request - UpdateLoginProfileRequest
   * @returns UpdateLoginProfileResponse
   */
  async updateLoginProfile(request: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a custom policy.
   * 
   * @remarks
   * You can call this operation to modify only the description of a custom policy. You cannot modify the description of a system policy.
   * 
   * @param request - UpdatePolicyDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyDescriptionResponse
   */
  async updatePolicyDescriptionWithOptions(request: UpdatePolicyDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePolicyDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolicyDescription",
      version: "2015-05-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePolicyDescriptionResponse>(await this.callApi(params, req, runtime), new UpdatePolicyDescriptionResponse({}));
  }

  /**
   * Modifies the description of a custom policy.
   * 
   * @remarks
   * You can call this operation to modify only the description of a custom policy. You cannot modify the description of a system policy.
   * 
   * @param request - UpdatePolicyDescriptionRequest
   * @returns UpdatePolicyDescriptionResponse
   */
  async updatePolicyDescription(request: UpdatePolicyDescriptionRequest): Promise<UpdatePolicyDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolicyDescriptionWithOptions(request, runtime);
  }

  /**
   * Changes the description of a RAM role.
   * 
   * @remarks
   * This topic provides an example to show how to change the description of ECSAdmin to ECS administrator.
   * 
   * @param request - UpdateRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
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
      version: "2015-05-01",
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

  /**
   * Changes the description of a RAM role.
   * 
   * @remarks
   * This topic provides an example to show how to change the description of ECSAdmin to ECS administrator.
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRoleWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to change the name of a RAM user from `zhangq****` to `xiaoq****`.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newComments)) {
      query["NewComments"] = request.newComments;
    }

    if (!Util.isUnset(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!Util.isUnset(request.newEmail)) {
      query["NewEmail"] = request.newEmail;
    }

    if (!Util.isUnset(request.newMobilePhone)) {
      query["NewMobilePhone"] = request.newMobilePhone;
    }

    if (!Util.isUnset(request.newUserName)) {
      query["NewUserName"] = request.newUserName;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2015-05-01",
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
   * @remarks
   * This topic provides an example on how to change the name of a RAM user from `zhangq****` to `xiaoq****`.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
