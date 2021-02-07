// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToGroupRequest extends $tea.Model {
  groupPrincipalName?: string;
  userPrincipalName?: string;
  akProxySuffix?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupPrincipalName: 'GroupPrincipalName',
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrincipalName: 'string',
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class BindMFADeviceRequest extends $tea.Model {
  serialNumber?: string;
  userPrincipalName?: string;
  authenticationCode1?: string;
  authenticationCode2?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      userPrincipalName: 'UserPrincipalName',
      authenticationCode1: 'AuthenticationCode1',
      authenticationCode2: 'AuthenticationCode2',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      userPrincipalName: 'string',
      authenticationCode1: 'string',
      authenticationCode2: 'string',
      akProxySuffix: 'string',
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
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      oldPassword: 'OldPassword',
      newPassword: 'NewPassword',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldPassword: 'string',
      newPassword: 'string',
      akProxySuffix: 'string',
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

export class CreateAccessKeyRequest extends $tea.Model {
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class CreateApplicationRequest extends $tea.Model {
  displayName?: string;
  appPrincipalName?: string;
  appType?: string;
  redirectUris?: string;
  secretRequired?: boolean;
  accessTokenValidity?: number;
  refreshTokenValidity?: number;
  predefinedScopes?: string;
  isMultiTenant?: boolean;
  akProxySuffix?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      appPrincipalName: 'AppPrincipalName',
      appType: 'AppType',
      redirectUris: 'RedirectUris',
      secretRequired: 'SecretRequired',
      accessTokenValidity: 'AccessTokenValidity',
      refreshTokenValidity: 'RefreshTokenValidity',
      predefinedScopes: 'PredefinedScopes',
      isMultiTenant: 'IsMultiTenant',
      akProxySuffix: 'AkProxySuffix',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      appPrincipalName: 'string',
      appType: 'string',
      redirectUris: 'string',
      secretRequired: 'boolean',
      accessTokenValidity: 'number',
      refreshTokenValidity: 'number',
      predefinedScopes: 'string',
      isMultiTenant: 'boolean',
      akProxySuffix: 'string',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  requestId?: string;
  application?: CreateApplicationResponseBodyApplication;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      application: CreateApplicationResponseBodyApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretRequest extends $tea.Model {
  appId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretResponseBody extends $tea.Model {
  requestId?: string;
  appSecret?: CreateAppSecretResponseBodyAppSecret;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appSecret: CreateAppSecretResponseBodyAppSecret,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  groupPrincipalName?: string;
  displayName?: string;
  comments?: string;
  akProxySuffix?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupPrincipalName: 'GroupPrincipalName',
      displayName: 'DisplayName',
      comments: 'Comments',
      akProxySuffix: 'AkProxySuffix',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrincipalName: 'string',
      displayName: 'string',
      comments: 'string',
      akProxySuffix: 'string',
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

export class CreateLoginProfileRequest extends $tea.Model {
  userPrincipalName?: string;
  password?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  generateRandomPassword?: boolean;
  status?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
      generateRandomPassword: 'GenerateRandomPassword',
      status: 'Status',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      password: 'string',
      passwordResetRequired: 'boolean',
      MFABindRequired: 'boolean',
      generateRandomPassword: 'boolean',
      status: 'string',
      akProxySuffix: 'string',
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

export class CreateSAMLProviderRequest extends $tea.Model {
  SAMLProviderName?: string;
  SAMLMetadataDocument?: string;
  description?: string;
  akProxySuffix?: string;
  encodedSAMLMetadataDocument?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
      SAMLMetadataDocument: 'SAMLMetadataDocument',
      description: 'Description',
      akProxySuffix: 'AkProxySuffix',
      encodedSAMLMetadataDocument: 'EncodedSAMLMetadataDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
      SAMLMetadataDocument: 'string',
      description: 'string',
      akProxySuffix: 'string',
      encodedSAMLMetadataDocument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSAMLProviderResponseBody extends $tea.Model {
  requestId?: string;
  SAMLProvider?: CreateSAMLProviderResponseBodySAMLProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProvider: CreateSAMLProviderResponseBodySAMLProvider,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSAMLProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  userPrincipalName?: string;
  displayName?: string;
  mobilePhone?: string;
  email?: string;
  comments?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      displayName: 'DisplayName',
      mobilePhone: 'MobilePhone',
      email: 'Email',
      comments: 'Comments',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      displayName: 'string',
      mobilePhone: 'string',
      email: 'string',
      comments: 'string',
      akProxySuffix: 'string',
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
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADeviceName: 'VirtualMFADeviceName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADeviceName: 'string',
      akProxySuffix: 'string',
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
  userAccessKeyId?: string;
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
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

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppSecretRequest extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppSecretResponseBody extends $tea.Model {
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

export class DeleteAppSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  groupPrincipalName?: string;
  akProxySuffix?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupPrincipalName: 'GroupPrincipalName',
      akProxySuffix: 'AkProxySuffix',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrincipalName: 'string',
      akProxySuffix: 'string',
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
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class DeleteSAMLProviderRequest extends $tea.Model {
  SAMLProviderName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSAMLProviderResponseBody extends $tea.Model {
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

export class DeleteSAMLProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  userPrincipalName?: string;
  userId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      userId: 'UserId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      userId: 'string',
      akProxySuffix: 'string',
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
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      akProxySuffix: 'string',
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

export class DisableVirtualMFARequest extends $tea.Model {
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableVirtualMFAResponseBody extends $tea.Model {
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

export class DisableVirtualMFAResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableVirtualMFAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableVirtualMFAResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCredentialReportRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCredentialReportResponseBody extends $tea.Model {
  requestId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCredentialReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateCredentialReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateCredentialReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedRequest extends $tea.Model {
  userPrincipalName?: string;
  userAccessKeyId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      userAccessKeyId: 'UserAccessKeyId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      userAccessKeyId: 'string',
      akProxySuffix: 'string',
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

export class GetAccountMFAInfoRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMFAInfoResponseBody extends $tea.Model {
  requestId?: string;
  isMFAEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isMFAEnable: 'IsMFAEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isMFAEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMFAInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountMFAInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountMFAInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponseBody extends $tea.Model {
  requestId?: string;
  accountSecurityPracticeInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountSecurityPracticeInfo: 'AccountSecurityPracticeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountSecurityPracticeInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountSecurityPracticeReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountSecurityPracticeReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSummaryRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
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
  body: GetAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  appId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  requestId?: string;
  application?: GetApplicationResponseBodyApplication;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      application: GetApplicationResponseBodyApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretRequest extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponseBody extends $tea.Model {
  requestId?: string;
  appSecret?: GetAppSecretResponseBodyAppSecret;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appSecret: GetAppSecretResponseBodyAppSecret,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportResponseBody extends $tea.Model {
  generatedTime?: string;
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      generatedTime: 'GeneratedTime',
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generatedTime: 'string',
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCredentialReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCredentialReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDomainRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDomainResponseBody extends $tea.Model {
  defaultDomainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDefaultDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $tea.Model {
  groupPrincipalName?: string;
  akProxySuffix?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupPrincipalName: 'GroupPrincipalName',
      akProxySuffix: 'AkProxySuffix',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrincipalName: 'string',
      akProxySuffix: 'string',
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
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class GetPasswordPolicyRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
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

export class GetSAMLProviderRequest extends $tea.Model {
  SAMLProviderName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSAMLProviderResponseBody extends $tea.Model {
  requestId?: string;
  SAMLProvider?: GetSAMLProviderResponseBodySAMLProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProvider: GetSAMLProviderResponseBodySAMLProvider,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSAMLProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
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
  userPrincipalName?: string;
  userId?: string;
  userAccessKeyId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      userId: 'UserId',
      userAccessKeyId: 'UserAccessKeyId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      userId: 'string',
      userAccessKeyId: 'string',
      akProxySuffix: 'string',
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
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBody extends $tea.Model {
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  requestId?: string;
  isMFAEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
      isMFAEnable: 'IsMFAEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevice: GetUserMFAInfoResponseBodyMFADevice,
      requestId: 'string',
      isMFAEnable: 'boolean',
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

export class GetUserSsoSettingsRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSsoSettingsResponseBody extends $tea.Model {
  userSsoSettings?: GetUserSsoSettingsResponseBodyUserSsoSettings;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      userSsoSettings: 'UserSsoSettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSsoSettings: GetUserSsoSettingsResponseBodyUserSsoSettings,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSsoSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserSsoSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserSsoSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysRequest extends $tea.Model {
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class ListApplicationsRequest extends $tea.Model {
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  requestId?: string;
  applications?: ListApplicationsResponseBodyApplications;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      applications: 'Applications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      applications: ListApplicationsResponseBodyApplications,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSecretIdsRequest extends $tea.Model {
  appId?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSecretIdsResponseBody extends $tea.Model {
  appSecrets?: ListAppSecretIdsResponseBodyAppSecrets;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecrets: 'AppSecrets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecrets: ListAppSecretIdsResponseBodyAppSecrets,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSecretIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAppSecretIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAppSecretIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      akProxySuffix: 'string',
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
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class ListPredefinedScopesRequest extends $tea.Model {
  akProxySuffix?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      akProxySuffix: 'AkProxySuffix',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProxySuffix: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPredefinedScopesResponseBody extends $tea.Model {
  predefinedScopes?: ListPredefinedScopesResponseBodyPredefinedScopes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ListPredefinedScopesResponseBodyPredefinedScopes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPredefinedScopesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPredefinedScopesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPredefinedScopesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponseBody extends $tea.Model {
  requestId?: string;
  SAMLProviders?: ListSAMLProvidersResponseBodySAMLProviders;
  isTruncated?: boolean;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProviders: 'SAMLProviders',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProviders: ListSAMLProvidersResponseBodySAMLProviders,
      isTruncated: 'boolean',
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSAMLProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSAMLProvidersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBody extends $tea.Model {
  requestId?: string;
  isTruncated?: boolean;
  userBasicInfos?: ListUserBasicInfosResponseBodyUserBasicInfos;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isTruncated: 'IsTruncated',
      userBasicInfos: 'UserBasicInfos',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isTruncated: 'boolean',
      userBasicInfos: ListUserBasicInfosResponseBodyUserBasicInfos,
      marker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserBasicInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      akProxySuffix: 'string',
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
  groupPrincipalName?: string;
  akProxySuffix?: string;
  groupName?: string;
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      groupPrincipalName: 'GroupPrincipalName',
      akProxySuffix: 'AkProxySuffix',
      groupName: 'GroupName',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class ListVirtualMFADevicesRequest extends $tea.Model {
  marker?: string;
  maxItems?: number;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBody extends $tea.Model {
  virtualMFADevices?: ListVirtualMFADevicesResponseBodyVirtualMFADevices;
  requestId?: string;
  isTruncated?: boolean;
  marker?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADevices: 'VirtualMFADevices',
      requestId: 'RequestId',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADevices: ListVirtualMFADevicesResponseBodyVirtualMFADevices,
      requestId: 'string',
      isTruncated: 'boolean',
      marker: 'string',
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
  userPrincipalName?: string;
  groupPrincipalName?: string;
  akProxySuffix?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      groupPrincipalName: 'GroupPrincipalName',
      akProxySuffix: 'AkProxySuffix',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      groupPrincipalName: 'string',
      akProxySuffix: 'string',
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

export class SetDefaultDomainRequest extends $tea.Model {
  defaultDomainName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainResponseBody extends $tea.Model {
  defaultDomainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDefaultDomainResponseBody,
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
  hardExpire?: boolean;
  maxLoginAttemps?: number;
  passwordReusePrevention?: number;
  maxPasswordAge?: number;
  minimumPasswordDifferentCharacter?: number;
  passwordNotContainUserName?: boolean;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      minimumPasswordLength: 'MinimumPasswordLength',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      hardExpire: 'HardExpire',
      maxLoginAttemps: 'MaxLoginAttemps',
      passwordReusePrevention: 'PasswordReusePrevention',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minimumPasswordLength: 'number',
      requireLowercaseCharacters: 'boolean',
      requireUppercaseCharacters: 'boolean',
      requireNumbers: 'boolean',
      requireSymbols: 'boolean',
      hardExpire: 'boolean',
      maxLoginAttemps: 'number',
      passwordReusePrevention: 'number',
      maxPasswordAge: 'number',
      minimumPasswordDifferentCharacter: 'number',
      passwordNotContainUserName: 'boolean',
      akProxySuffix: 'string',
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
  allowUserToManageMFADevices?: boolean;
  loginSessionDuration?: number;
  loginNetworkMasks?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      enableSaveMFATicket: 'EnableSaveMFATicket',
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      loginSessionDuration: 'LoginSessionDuration',
      loginNetworkMasks: 'LoginNetworkMasks',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSaveMFATicket: 'boolean',
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      loginSessionDuration: 'number',
      loginNetworkMasks: 'string',
      akProxySuffix: 'string',
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

export class SetUserSsoSettingsRequest extends $tea.Model {
  metadataDocument?: string;
  ssoEnabled?: boolean;
  auxiliaryDomain?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
      auxiliaryDomain: 'AuxiliaryDomain',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
      auxiliaryDomain: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponseBody extends $tea.Model {
  userSsoSettings?: SetUserSsoSettingsResponseBodyUserSsoSettings;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      userSsoSettings: 'UserSsoSettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userSsoSettings: SetUserSsoSettingsResponseBodyUserSsoSettings,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetUserSsoSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetUserSsoSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceRequest extends $tea.Model {
  userPrincipalName?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      akProxySuffix: 'string',
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
  userPrincipalName?: string;
  userAccessKeyId?: string;
  status?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      userAccessKeyId: 'UserAccessKeyId',
      status: 'Status',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      userAccessKeyId: 'string',
      status: 'string',
      akProxySuffix: 'string',
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

export class UpdateApplicationRequest extends $tea.Model {
  appId?: string;
  newDisplayName?: string;
  newRedirectUris?: string;
  newPredefinedScopes?: string;
  newSecretRequired?: boolean;
  newAccessTokenValidity?: number;
  newRefreshTokenValidity?: number;
  newIsMultiTenant?: boolean;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      newDisplayName: 'NewDisplayName',
      newRedirectUris: 'NewRedirectUris',
      newPredefinedScopes: 'NewPredefinedScopes',
      newSecretRequired: 'NewSecretRequired',
      newAccessTokenValidity: 'NewAccessTokenValidity',
      newRefreshTokenValidity: 'NewRefreshTokenValidity',
      newIsMultiTenant: 'NewIsMultiTenant',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      newDisplayName: 'string',
      newRedirectUris: 'string',
      newPredefinedScopes: 'string',
      newSecretRequired: 'boolean',
      newAccessTokenValidity: 'number',
      newRefreshTokenValidity: 'number',
      newIsMultiTenant: 'boolean',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $tea.Model {
  requestId?: string;
  application?: UpdateApplicationResponseBodyApplication;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      application: UpdateApplicationResponseBodyApplication,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  groupPrincipalName?: string;
  newGroupPrincipalName?: string;
  newComments?: string;
  newDisplayName?: string;
  akProxySuffix?: string;
  newGroupName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupPrincipalName: 'GroupPrincipalName',
      newGroupPrincipalName: 'NewGroupPrincipalName',
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      akProxySuffix: 'AkProxySuffix',
      newGroupName: 'NewGroupName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrincipalName: 'string',
      newGroupPrincipalName: 'string',
      newComments: 'string',
      newDisplayName: 'string',
      akProxySuffix: 'string',
      newGroupName: 'string',
      groupName: 'string',
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
  userPrincipalName?: string;
  password?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  generateRandomPassword?: boolean;
  status?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
      generateRandomPassword: 'GenerateRandomPassword',
      status: 'Status',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      password: 'string',
      passwordResetRequired: 'boolean',
      MFABindRequired: 'boolean',
      generateRandomPassword: 'boolean',
      status: 'string',
      akProxySuffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginProfileResponseBody extends $tea.Model {
  requestId?: string;
  loginProfile?: UpdateLoginProfileResponseBodyLoginProfile;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      loginProfile: 'LoginProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      loginProfile: UpdateLoginProfileResponseBodyLoginProfile,
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

export class UpdateSAMLProviderRequest extends $tea.Model {
  SAMLProviderName?: string;
  newSAMLMetadataDocument?: string;
  newDescription?: string;
  akProxySuffix?: string;
  newEncodedSAMLMetadataDocument?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
      newSAMLMetadataDocument: 'NewSAMLMetadataDocument',
      newDescription: 'NewDescription',
      akProxySuffix: 'AkProxySuffix',
      newEncodedSAMLMetadataDocument: 'NewEncodedSAMLMetadataDocument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
      newSAMLMetadataDocument: 'string',
      newDescription: 'string',
      akProxySuffix: 'string',
      newEncodedSAMLMetadataDocument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSAMLProviderResponseBody extends $tea.Model {
  requestId?: string;
  SAMLProvider?: UpdateSAMLProviderResponseBodySAMLProvider;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SAMLProvider: UpdateSAMLProviderResponseBodySAMLProvider,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSAMLProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  userPrincipalName?: string;
  userId?: string;
  newUserPrincipalName?: string;
  newDisplayName?: string;
  newMobilePhone?: string;
  newEmail?: string;
  newComments?: string;
  akProxySuffix?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      userId: 'UserId',
      newUserPrincipalName: 'NewUserPrincipalName',
      newDisplayName: 'NewDisplayName',
      newMobilePhone: 'NewMobilePhone',
      newEmail: 'NewEmail',
      newComments: 'NewComments',
      akProxySuffix: 'AkProxySuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      userId: 'string',
      newUserPrincipalName: 'string',
      newDisplayName: 'string',
      newMobilePhone: 'string',
      newEmail: 'string',
      newComments: 'string',
      akProxySuffix: 'string',
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
  accessKeyId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      accessKeySecret: 'AccessKeySecret',
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      accessKeySecret: 'string',
      accessKeyId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplicationRedirectUris extends $tea.Model {
  redirectUri?: string[];
  static names(): { [key: string]: string } {
    return {
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUri: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes extends $tea.Model {
  predefinedScope?: CreateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': CreateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplicationDelegatedScope extends $tea.Model {
  predefinedScopes?: CreateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: CreateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplication extends $tea.Model {
  displayName?: string;
  accessTokenValidity?: number;
  secretRequired?: boolean;
  accountId?: string;
  createDate?: string;
  appName?: string;
  redirectUris?: CreateApplicationResponseBodyApplicationRedirectUris;
  updateDate?: string;
  delegatedScope?: CreateApplicationResponseBodyApplicationDelegatedScope;
  appId?: string;
  refreshTokenValidity?: number;
  isMultiTenant?: boolean;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      accessTokenValidity: 'AccessTokenValidity',
      secretRequired: 'SecretRequired',
      accountId: 'AccountId',
      createDate: 'CreateDate',
      appName: 'AppName',
      redirectUris: 'RedirectUris',
      updateDate: 'UpdateDate',
      delegatedScope: 'DelegatedScope',
      appId: 'AppId',
      refreshTokenValidity: 'RefreshTokenValidity',
      isMultiTenant: 'IsMultiTenant',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      accessTokenValidity: 'number',
      secretRequired: 'boolean',
      accountId: 'string',
      createDate: 'string',
      appName: 'string',
      redirectUris: CreateApplicationResponseBodyApplicationRedirectUris,
      updateDate: 'string',
      delegatedScope: CreateApplicationResponseBodyApplicationDelegatedScope,
      appId: 'string',
      refreshTokenValidity: 'number',
      isMultiTenant: 'boolean',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretResponseBodyAppSecret extends $tea.Model {
  appSecretValue?: string;
  appId?: string;
  appSecretId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appSecretValue: 'AppSecretValue',
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecretValue: 'string',
      appId: 'string',
      appSecretId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyGroup extends $tea.Model {
  displayName?: string;
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

export class CreateLoginProfileResponseBodyLoginProfile extends $tea.Model {
  userPrincipalName?: string;
  status?: string;
  updateDate?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      status: 'Status',
      updateDate: 'UpdateDate',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      status: 'string',
      updateDate: 'string',
      passwordResetRequired: 'boolean',
      MFABindRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSAMLProviderResponseBodySAMLProvider extends $tea.Model {
  updateDate?: string;
  description?: string;
  SAMLProviderName?: string;
  createDate?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      updateDate: 'UpdateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      createDate: 'CreateDate',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      createDate: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  userPrincipalName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  lastLoginDate?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userPrincipalName: 'UserPrincipalName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      lastLoginDate: 'LastLoginDate',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userPrincipalName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      lastLoginDate: 'string',
      createDate: 'string',
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

export class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo extends $tea.Model {
  unusedAkNum?: number;
  subUserWithUnusedAccessKey?: number;
  rootWithAccessKey?: number;
  subUser?: number;
  bindMfa?: boolean;
  oldAkNum?: number;
  subUserPwdLevel?: string;
  subUserWithOldAccessKey?: number;
  subUserBindMfa?: number;
  static names(): { [key: string]: string } {
    return {
      unusedAkNum: 'UnusedAkNum',
      subUserWithUnusedAccessKey: 'SubUserWithUnusedAccessKey',
      rootWithAccessKey: 'RootWithAccessKey',
      subUser: 'SubUser',
      bindMfa: 'BindMfa',
      oldAkNum: 'OldAkNum',
      subUserPwdLevel: 'SubUserPwdLevel',
      subUserWithOldAccessKey: 'SubUserWithOldAccessKey',
      subUserBindMfa: 'SubUserBindMfa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unusedAkNum: 'number',
      subUserWithUnusedAccessKey: 'number',
      rootWithAccessKey: 'number',
      subUser: 'number',
      bindMfa: 'boolean',
      oldAkNum: 'number',
      subUserPwdLevel: 'string',
      subUserWithOldAccessKey: 'number',
      subUserBindMfa: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo extends $tea.Model {
  accountSecurityPracticeUserInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo;
  score?: number;
  static names(): { [key: string]: string } {
    return {
      accountSecurityPracticeUserInfo: 'AccountSecurityPracticeUserInfo',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityPracticeUserInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo,
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSummaryResponseBodySummaryMap extends $tea.Model {
  MFADevices?: number;
  accessKeysPerUserQuota?: number;
  attachedPoliciesPerGroupQuota?: number;
  attachedSystemPoliciesPerRoleQuota?: number;
  attachedPoliciesPerRoleQuota?: number;
  groupsPerUserQuota?: number;
  roles?: number;
  policySizeQuota?: number;
  attachedSystemPoliciesPerGroupQuota?: number;
  attachedSystemPoliciesPerUserQuota?: number;
  attachedPoliciesPerUserQuota?: number;
  groupsQuota?: number;
  groups?: number;
  policiesQuota?: number;
  virtualMFADevicesQuota?: number;
  versionsPerPolicyQuota?: number;
  rolesQuota?: number;
  usersQuota?: number;
  policies?: number;
  users?: number;
  MFADevicesInUse?: number;
  static names(): { [key: string]: string } {
    return {
      MFADevices: 'MFADevices',
      accessKeysPerUserQuota: 'AccessKeysPerUserQuota',
      attachedPoliciesPerGroupQuota: 'AttachedPoliciesPerGroupQuota',
      attachedSystemPoliciesPerRoleQuota: 'AttachedSystemPoliciesPerRoleQuota',
      attachedPoliciesPerRoleQuota: 'AttachedPoliciesPerRoleQuota',
      groupsPerUserQuota: 'GroupsPerUserQuota',
      roles: 'Roles',
      policySizeQuota: 'PolicySizeQuota',
      attachedSystemPoliciesPerGroupQuota: 'AttachedSystemPoliciesPerGroupQuota',
      attachedSystemPoliciesPerUserQuota: 'AttachedSystemPoliciesPerUserQuota',
      attachedPoliciesPerUserQuota: 'AttachedPoliciesPerUserQuota',
      groupsQuota: 'GroupsQuota',
      groups: 'Groups',
      policiesQuota: 'PoliciesQuota',
      virtualMFADevicesQuota: 'VirtualMFADevicesQuota',
      versionsPerPolicyQuota: 'VersionsPerPolicyQuota',
      rolesQuota: 'RolesQuota',
      usersQuota: 'UsersQuota',
      policies: 'Policies',
      users: 'Users',
      MFADevicesInUse: 'MFADevicesInUse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevices: 'number',
      accessKeysPerUserQuota: 'number',
      attachedPoliciesPerGroupQuota: 'number',
      attachedSystemPoliciesPerRoleQuota: 'number',
      attachedPoliciesPerRoleQuota: 'number',
      groupsPerUserQuota: 'number',
      roles: 'number',
      policySizeQuota: 'number',
      attachedSystemPoliciesPerGroupQuota: 'number',
      attachedSystemPoliciesPerUserQuota: 'number',
      attachedPoliciesPerUserQuota: 'number',
      groupsQuota: 'number',
      groups: 'number',
      policiesQuota: 'number',
      virtualMFADevicesQuota: 'number',
      versionsPerPolicyQuota: 'number',
      rolesQuota: 'number',
      usersQuota: 'number',
      policies: 'number',
      users: 'number',
      MFADevicesInUse: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationRedirectUris extends $tea.Model {
  redirectUri?: string[];
  static names(): { [key: string]: string } {
    return {
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUri: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes extends $tea.Model {
  predefinedScope?: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplicationDelegatedScope extends $tea.Model {
  predefinedScopes?: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: GetApplicationResponseBodyApplicationDelegatedScopePredefinedScopes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  displayName?: string;
  accessTokenValidity?: number;
  secretRequired?: boolean;
  accountId?: string;
  createDate?: string;
  appName?: string;
  redirectUris?: GetApplicationResponseBodyApplicationRedirectUris;
  updateDate?: string;
  delegatedScope?: GetApplicationResponseBodyApplicationDelegatedScope;
  appId?: string;
  refreshTokenValidity?: number;
  isMultiTenant?: boolean;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      accessTokenValidity: 'AccessTokenValidity',
      secretRequired: 'SecretRequired',
      accountId: 'AccountId',
      createDate: 'CreateDate',
      appName: 'AppName',
      redirectUris: 'RedirectUris',
      updateDate: 'UpdateDate',
      delegatedScope: 'DelegatedScope',
      appId: 'AppId',
      refreshTokenValidity: 'RefreshTokenValidity',
      isMultiTenant: 'IsMultiTenant',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      accessTokenValidity: 'number',
      secretRequired: 'boolean',
      accountId: 'string',
      createDate: 'string',
      appName: 'string',
      redirectUris: GetApplicationResponseBodyApplicationRedirectUris,
      updateDate: 'string',
      delegatedScope: GetApplicationResponseBodyApplicationDelegatedScope,
      appId: 'string',
      refreshTokenValidity: 'number',
      isMultiTenant: 'boolean',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponseBodyAppSecret extends $tea.Model {
  appSecretValue?: string;
  appId?: string;
  appSecretId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appSecretValue: 'AppSecretValue',
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecretValue: 'string',
      appId: 'string',
      appSecretId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $tea.Model {
  displayName?: string;
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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
  status?: string;
  userPrincipalName?: string;
  updateDate?: string;
  lastLoginTime?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
      updateDate: 'UpdateDate',
      lastLoginTime: 'LastLoginTime',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userPrincipalName: 'string',
      updateDate: 'string',
      lastLoginTime: 'string',
      passwordResetRequired: 'boolean',
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
  passwordReusePrevention?: number;
  requireSymbols?: boolean;
  passwordNotContainUserName?: boolean;
  minimumPasswordDifferentCharacter?: number;
  maxPasswordAge?: number;
  hardExpire?: boolean;
  minimumPasswordLength?: number;
  requireUppercaseCharacters?: boolean;
  maxLoginAttemps?: number;
  static names(): { [key: string]: string } {
    return {
      requireNumbers: 'RequireNumbers',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireSymbols: 'RequireSymbols',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      maxPasswordAge: 'MaxPasswordAge',
      hardExpire: 'HardExpire',
      minimumPasswordLength: 'MinimumPasswordLength',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
      maxLoginAttemps: 'MaxLoginAttemps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requireNumbers: 'boolean',
      requireLowercaseCharacters: 'boolean',
      passwordReusePrevention: 'number',
      requireSymbols: 'boolean',
      passwordNotContainUserName: 'boolean',
      minimumPasswordDifferentCharacter: 'number',
      maxPasswordAge: 'number',
      hardExpire: 'boolean',
      minimumPasswordLength: 'number',
      requireUppercaseCharacters: 'boolean',
      maxLoginAttemps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSAMLProviderResponseBodySAMLProvider extends $tea.Model {
  description?: string;
  updateDate?: string;
  SAMLProviderName?: string;
  createDate?: string;
  encodedSAMLMetadataDocument?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      updateDate: 'UpdateDate',
      SAMLProviderName: 'SAMLProviderName',
      createDate: 'CreateDate',
      encodedSAMLMetadataDocument: 'EncodedSAMLMetadataDocument',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      updateDate: 'string',
      SAMLProviderName: 'string',
      createDate: 'string',
      encodedSAMLMetadataDocument: 'string',
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

export class GetSecurityPreferenceResponseBodySecurityPreference extends $tea.Model {
  accessKeyPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  loginProfilePreference?: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  MFAPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  userPrincipalName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  lastLoginDate?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userPrincipalName: 'UserPrincipalName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      lastLoginDate: 'LastLoginDate',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userPrincipalName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      lastLoginDate: 'string',
      createDate: 'string',
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

export class GetUserSsoSettingsResponseBodyUserSsoSettings extends $tea.Model {
  auxiliaryDomain?: string;
  metadataDocument?: string;
  ssoEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryDomain: 'string',
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponseBodyAccessKeysAccessKey extends $tea.Model {
  status?: string;
  updateDate?: string;
  accessKeyId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateDate: 'UpdateDate',
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateDate: 'string',
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

export class ListApplicationsResponseBodyApplicationsApplicationRedirectUris extends $tea.Model {
  redirectUri?: string[];
  static names(): { [key: string]: string } {
    return {
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUri: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes extends $tea.Model {
  predefinedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopesPredefinedScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplicationDelegatedScope extends $tea.Model {
  predefinedScopes?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ListApplicationsResponseBodyApplicationsApplicationDelegatedScopePredefinedScopes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplicationsApplication extends $tea.Model {
  displayName?: string;
  accessTokenValidity?: number;
  secretRequired?: boolean;
  accountId?: string;
  createDate?: string;
  appName?: string;
  redirectUris?: ListApplicationsResponseBodyApplicationsApplicationRedirectUris;
  updateDate?: string;
  delegatedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope;
  appId?: string;
  refreshTokenValidity?: number;
  isMultiTenant?: boolean;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      accessTokenValidity: 'AccessTokenValidity',
      secretRequired: 'SecretRequired',
      accountId: 'AccountId',
      createDate: 'CreateDate',
      appName: 'AppName',
      redirectUris: 'RedirectUris',
      updateDate: 'UpdateDate',
      delegatedScope: 'DelegatedScope',
      appId: 'AppId',
      refreshTokenValidity: 'RefreshTokenValidity',
      isMultiTenant: 'IsMultiTenant',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      accessTokenValidity: 'number',
      secretRequired: 'boolean',
      accountId: 'string',
      createDate: 'string',
      appName: 'string',
      redirectUris: ListApplicationsResponseBodyApplicationsApplicationRedirectUris,
      updateDate: 'string',
      delegatedScope: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope,
      appId: 'string',
      refreshTokenValidity: 'number',
      isMultiTenant: 'boolean',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  application?: ListApplicationsResponseBodyApplicationsApplication[];
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplicationsApplication },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSecretIdsResponseBodyAppSecretsAppSecret extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
      createDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppSecretIdsResponseBodyAppSecrets extends $tea.Model {
  appSecret?: ListAppSecretIdsResponseBodyAppSecretsAppSecret[];
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: { 'type': 'array', 'itemType': ListAppSecretIdsResponseBodyAppSecretsAppSecret },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroupsGroup extends $tea.Model {
  displayName?: string;
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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
  displayName?: string;
  groupName?: string;
  groupId?: string;
  comments?: string;
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      groupName: 'GroupName',
      groupId: 'GroupId',
      comments: 'Comments',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      groupName: 'string',
      groupId: 'string',
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

export class ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPredefinedScopesResponseBodyPredefinedScopes extends $tea.Model {
  predefinedScope?: ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ListPredefinedScopesResponseBodyPredefinedScopesPredefinedScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider extends $tea.Model {
  updateDate?: string;
  description?: string;
  SAMLProviderName?: string;
  createDate?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      updateDate: 'UpdateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      createDate: 'CreateDate',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      createDate: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponseBodySAMLProviders extends $tea.Model {
  SAMLProvider?: ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider[];
  static names(): { [key: string]: string } {
    return {
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProvider: { 'type': 'array', 'itemType': ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo extends $tea.Model {
  userPrincipalName?: string;
  displayName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      displayName: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBodyUserBasicInfos extends $tea.Model {
  userBasicInfo?: ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo[];
  static names(): { [key: string]: string } {
    return {
      userBasicInfo: 'UserBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userBasicInfo: { 'type': 'array', 'itemType': ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUser extends $tea.Model {
  displayName?: string;
  userPrincipalName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  lastLoginDate?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userPrincipalName: 'UserPrincipalName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      lastLoginDate: 'LastLoginDate',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userPrincipalName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      lastLoginDate: 'string',
      createDate: 'string',
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
  userPrincipalName?: string;
  displayName?: string;
  userId?: string;
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      displayName: 'DisplayName',
      userId: 'UserId',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      displayName: 'string',
      userId: 'string',
      joinDate: 'string',
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
  userPrincipalName?: string;
  displayName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      displayName: 'string',
      userId: 'string',
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
  passwordReusePrevention?: number;
  requireSymbols?: boolean;
  passwordNotContainUserName?: boolean;
  minimumPasswordDifferentCharacter?: number;
  maxPasswordAge?: number;
  hardExpire?: boolean;
  minimumPasswordLength?: number;
  requireUppercaseCharacters?: boolean;
  maxLoginAttemps?: number;
  static names(): { [key: string]: string } {
    return {
      requireNumbers: 'RequireNumbers',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireSymbols: 'RequireSymbols',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      maxPasswordAge: 'MaxPasswordAge',
      hardExpire: 'HardExpire',
      minimumPasswordLength: 'MinimumPasswordLength',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
      maxLoginAttemps: 'MaxLoginAttemps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requireNumbers: 'boolean',
      requireLowercaseCharacters: 'boolean',
      passwordReusePrevention: 'number',
      requireSymbols: 'boolean',
      passwordNotContainUserName: 'boolean',
      minimumPasswordDifferentCharacter: 'number',
      maxPasswordAge: 'number',
      hardExpire: 'boolean',
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

export class SetSecurityPreferenceResponseBodySecurityPreference extends $tea.Model {
  accessKeyPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference;
  loginProfilePreference?: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  MFAPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponseBodyUserSsoSettings extends $tea.Model {
  auxiliaryDomain?: string;
  metadataDocument?: string;
  ssoEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryDomain: 'string',
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
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

export class UpdateApplicationResponseBodyApplicationRedirectUris extends $tea.Model {
  redirectUri?: string[];
  static names(): { [key: string]: string } {
    return {
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUri: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes extends $tea.Model {
  predefinedScope?: UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplicationDelegatedScope extends $tea.Model {
  predefinedScopes?: UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplication extends $tea.Model {
  displayName?: string;
  accessTokenValidity?: number;
  secretRequired?: boolean;
  accountId?: string;
  createDate?: string;
  appName?: string;
  redirectUris?: UpdateApplicationResponseBodyApplicationRedirectUris;
  updateDate?: string;
  delegatedScope?: UpdateApplicationResponseBodyApplicationDelegatedScope;
  appId?: string;
  refreshTokenValidity?: number;
  isMultiTenant?: boolean;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      accessTokenValidity: 'AccessTokenValidity',
      secretRequired: 'SecretRequired',
      accountId: 'AccountId',
      createDate: 'CreateDate',
      appName: 'AppName',
      redirectUris: 'RedirectUris',
      updateDate: 'UpdateDate',
      delegatedScope: 'DelegatedScope',
      appId: 'AppId',
      refreshTokenValidity: 'RefreshTokenValidity',
      isMultiTenant: 'IsMultiTenant',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      accessTokenValidity: 'number',
      secretRequired: 'boolean',
      accountId: 'string',
      createDate: 'string',
      appName: 'string',
      redirectUris: UpdateApplicationResponseBodyApplicationRedirectUris,
      updateDate: 'string',
      delegatedScope: UpdateApplicationResponseBodyApplicationDelegatedScope,
      appId: 'string',
      refreshTokenValidity: 'number',
      isMultiTenant: 'boolean',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBodyGroup extends $tea.Model {
  displayName?: string;
  groupId?: string;
  updateDate?: string;
  groupName?: string;
  comments?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      groupId: 'GroupId',
      updateDate: 'UpdateDate',
      groupName: 'GroupName',
      comments: 'Comments',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

export class UpdateLoginProfileResponseBodyLoginProfile extends $tea.Model {
  userPrincipalName?: string;
  status?: string;
  updateDate?: string;
  passwordResetRequired?: boolean;
  MFABindRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
      status: 'Status',
      updateDate: 'UpdateDate',
      passwordResetRequired: 'PasswordResetRequired',
      MFABindRequired: 'MFABindRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
      status: 'string',
      updateDate: 'string',
      passwordResetRequired: 'boolean',
      MFABindRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSAMLProviderResponseBodySAMLProvider extends $tea.Model {
  updateDate?: string;
  description?: string;
  SAMLProviderName?: string;
  createDate?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      updateDate: 'UpdateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      createDate: 'CreateDate',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      createDate: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBodyUser extends $tea.Model {
  displayName?: string;
  userPrincipalName?: string;
  email?: string;
  updateDate?: string;
  mobilePhone?: string;
  userId?: string;
  comments?: string;
  lastLoginDate?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userPrincipalName: 'UserPrincipalName',
      email: 'Email',
      updateDate: 'UpdateDate',
      mobilePhone: 'MobilePhone',
      userId: 'UserId',
      comments: 'Comments',
      lastLoginDate: 'LastLoginDate',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userPrincipalName: 'string',
      email: 'string',
      updateDate: 'string',
      mobilePhone: 'string',
      userId: 'string',
      comments: 'string',
      lastLoginDate: 'string',
      createDate: 'string',
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
    this._endpoint = this.getEndpoint("ims", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
    return $tea.cast<AddUserToGroupResponse>(await this.doRPCRequest("AddUserToGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserToGroupResponse({}));
  }

  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  async bindMFADeviceWithOptions(request: BindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<BindMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindMFADeviceResponse>(await this.doRPCRequest("BindMFADevice", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new BindMFADeviceResponse({}));
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
    return $tea.cast<ChangePasswordResponse>(await this.doRPCRequest("ChangePassword", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ChangePasswordResponse({}));
  }

  async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  async createAccessKeyWithOptions(request: CreateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAccessKeyResponse>(await this.doRPCRequest("CreateAccessKey", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAccessKeyResponse({}));
  }

  async createAccessKey(request: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateApplicationResponse>(await this.doRPCRequest("CreateApplication", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createAppSecretWithOptions(request: CreateAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAppSecretResponse>(await this.doRPCRequest("CreateAppSecret", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAppSecretResponse({}));
  }

  async createAppSecret(request: CreateAppSecretRequest): Promise<CreateAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSecretWithOptions(request, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateGroupResponse>(await this.doRPCRequest("CreateGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateGroupResponse({}));
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
    return $tea.cast<CreateLoginProfileResponse>(await this.doRPCRequest("CreateLoginProfile", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLoginProfileResponse({}));
  }

  async createLoginProfile(request: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  async createSAMLProviderWithOptions(request: CreateSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<CreateSAMLProviderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSAMLProviderResponse>(await this.doRPCRequest("CreateSAMLProvider", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSAMLProviderResponse({}));
  }

  async createSAMLProvider(request: CreateSAMLProviderRequest): Promise<CreateSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSAMLProviderWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
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
    return $tea.cast<CreateVirtualMFADeviceResponse>(await this.doRPCRequest("CreateVirtualMFADevice", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVirtualMFADeviceResponse({}));
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
    return $tea.cast<DeleteAccessKeyResponse>(await this.doRPCRequest("DeleteAccessKey", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccessKeyResponse({}));
  }

  async deleteAccessKey(request: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteApplicationResponse>(await this.doRPCRequest("DeleteApplication", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  async deleteAppSecretWithOptions(request: DeleteAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAppSecretResponse>(await this.doRPCRequest("DeleteAppSecret", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAppSecretResponse({}));
  }

  async deleteAppSecret(request: DeleteAppSecretRequest): Promise<DeleteAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppSecretWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupResponse>(await this.doRPCRequest("DeleteGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupResponse({}));
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
    return $tea.cast<DeleteLoginProfileResponse>(await this.doRPCRequest("DeleteLoginProfile", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLoginProfileResponse({}));
  }

  async deleteLoginProfile(request: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  async deleteSAMLProviderWithOptions(request: DeleteSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSAMLProviderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSAMLProviderResponse>(await this.doRPCRequest("DeleteSAMLProvider", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSAMLProviderResponse({}));
  }

  async deleteSAMLProvider(request: DeleteSAMLProviderRequest): Promise<DeleteSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSAMLProviderWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
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
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.doRPCRequest("DeleteVirtualMFADevice", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async disableVirtualMFAWithOptions(request: DisableVirtualMFARequest, runtime: $Util.RuntimeOptions): Promise<DisableVirtualMFAResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableVirtualMFAResponse>(await this.doRPCRequest("DisableVirtualMFA", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new DisableVirtualMFAResponse({}));
  }

  async disableVirtualMFA(request: DisableVirtualMFARequest): Promise<DisableVirtualMFAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVirtualMFAWithOptions(request, runtime);
  }

  async generateCredentialReportWithOptions(request: GenerateCredentialReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateCredentialReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateCredentialReportResponse>(await this.doRPCRequest("GenerateCredentialReport", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateCredentialReportResponse({}));
  }

  async generateCredentialReport(request: GenerateCredentialReportRequest): Promise<GenerateCredentialReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateCredentialReportWithOptions(request, runtime);
  }

  async getAccessKeyLastUsedWithOptions(request: GetAccessKeyLastUsedRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccessKeyLastUsedResponse>(await this.doRPCRequest("GetAccessKeyLastUsed", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccessKeyLastUsedResponse({}));
  }

  async getAccessKeyLastUsed(request: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  async getAccountMFAInfoWithOptions(request: GetAccountMFAInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountMFAInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccountMFAInfoResponse>(await this.doRPCRequest("GetAccountMFAInfo", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountMFAInfoResponse({}));
  }

  async getAccountMFAInfo(request: GetAccountMFAInfoRequest): Promise<GetAccountMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountMFAInfoWithOptions(request, runtime);
  }

  async getAccountSecurityPracticeReportWithOptions(request: GetAccountSecurityPracticeReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountSecurityPracticeReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccountSecurityPracticeReportResponse>(await this.doRPCRequest("GetAccountSecurityPracticeReport", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountSecurityPracticeReportResponse({}));
  }

  async getAccountSecurityPracticeReport(request: GetAccountSecurityPracticeReportRequest): Promise<GetAccountSecurityPracticeReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSecurityPracticeReportWithOptions(request, runtime);
  }

  async getAccountSummaryWithOptions(request: GetAccountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccountSummaryResponse>(await this.doRPCRequest("GetAccountSummary", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountSummaryResponse({}));
  }

  async getAccountSummary(request: GetAccountSummaryRequest): Promise<GetAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSummaryWithOptions(request, runtime);
  }

  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetApplicationResponse>(await this.doRPCRequest("GetApplication", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetApplicationResponse({}));
  }

  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  async getAppSecretWithOptions(request: GetAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<GetAppSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAppSecretResponse>(await this.doRPCRequest("GetAppSecret", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetAppSecretResponse({}));
  }

  async getAppSecret(request: GetAppSecretRequest): Promise<GetAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSecretWithOptions(request, runtime);
  }

  async getCredentialReportWithOptions(request: GetCredentialReportRequest, runtime: $Util.RuntimeOptions): Promise<GetCredentialReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCredentialReportResponse>(await this.doRPCRequest("GetCredentialReport", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetCredentialReportResponse({}));
  }

  async getCredentialReport(request: GetCredentialReportRequest): Promise<GetCredentialReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCredentialReportWithOptions(request, runtime);
  }

  async getDefaultDomainWithOptions(request: GetDefaultDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetDefaultDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDefaultDomainResponse>(await this.doRPCRequest("GetDefaultDomain", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetDefaultDomainResponse({}));
  }

  async getDefaultDomain(request: GetDefaultDomainRequest): Promise<GetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultDomainWithOptions(request, runtime);
  }

  async getGroupWithOptions(request: GetGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetGroupResponse>(await this.doRPCRequest("GetGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetGroupResponse({}));
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
    return $tea.cast<GetLoginProfileResponse>(await this.doRPCRequest("GetLoginProfile", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoginProfileResponse({}));
  }

  async getLoginProfile(request: GetLoginProfileRequest): Promise<GetLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  async getPasswordPolicyWithOptions(request: GetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPasswordPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPasswordPolicyResponse>(await this.doRPCRequest("GetPasswordPolicy", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetPasswordPolicyResponse({}));
  }

  async getPasswordPolicy(request: GetPasswordPolicyRequest): Promise<GetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(request, runtime);
  }

  async getSAMLProviderWithOptions(request: GetSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<GetSAMLProviderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSAMLProviderResponse>(await this.doRPCRequest("GetSAMLProvider", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetSAMLProviderResponse({}));
  }

  async getSAMLProvider(request: GetSAMLProviderRequest): Promise<GetSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSAMLProviderWithOptions(request, runtime);
  }

  async getSecurityPreferenceWithOptions(request: GetSecurityPreferenceRequest, runtime: $Util.RuntimeOptions): Promise<GetSecurityPreferenceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSecurityPreferenceResponse>(await this.doRPCRequest("GetSecurityPreference", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecurityPreferenceResponse({}));
  }

  async getSecurityPreference(request: GetSecurityPreferenceRequest): Promise<GetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecurityPreferenceWithOptions(request, runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserResponse>(await this.doRPCRequest("GetUser", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserResponse({}));
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
    return $tea.cast<GetUserMFAInfoResponse>(await this.doRPCRequest("GetUserMFAInfo", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserMFAInfoResponse({}));
  }

  async getUserMFAInfo(request: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  async getUserSsoSettingsWithOptions(request: GetUserSsoSettingsRequest, runtime: $Util.RuntimeOptions): Promise<GetUserSsoSettingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserSsoSettingsResponse>(await this.doRPCRequest("GetUserSsoSettings", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserSsoSettingsResponse({}));
  }

  async getUserSsoSettings(request: GetUserSsoSettingsRequest): Promise<GetUserSsoSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserSsoSettingsWithOptions(request, runtime);
  }

  async listAccessKeysWithOptions(request: ListAccessKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAccessKeysResponse>(await this.doRPCRequest("ListAccessKeys", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListAccessKeysResponse({}));
  }

  async listAccessKeys(request: ListAccessKeysRequest): Promise<ListAccessKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListApplicationsResponse>(await this.doRPCRequest("ListApplications", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListApplicationsResponse({}));
  }

  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  async listAppSecretIdsWithOptions(request: ListAppSecretIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppSecretIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAppSecretIdsResponse>(await this.doRPCRequest("ListAppSecretIds", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListAppSecretIdsResponse({}));
  }

  async listAppSecretIds(request: ListAppSecretIdsRequest): Promise<ListAppSecretIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppSecretIdsWithOptions(request, runtime);
  }

  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListGroupsResponse>(await this.doRPCRequest("ListGroups", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupsResponse({}));
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
    return $tea.cast<ListGroupsForUserResponse>(await this.doRPCRequest("ListGroupsForUser", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListGroupsForUserResponse({}));
  }

  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  async listPredefinedScopesWithOptions(request: ListPredefinedScopesRequest, runtime: $Util.RuntimeOptions): Promise<ListPredefinedScopesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListPredefinedScopesResponse>(await this.doRPCRequest("ListPredefinedScopes", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListPredefinedScopesResponse({}));
  }

  async listPredefinedScopes(request: ListPredefinedScopesRequest): Promise<ListPredefinedScopesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPredefinedScopesWithOptions(request, runtime);
  }

  async listSAMLProvidersWithOptions(request: ListSAMLProvidersRequest, runtime: $Util.RuntimeOptions): Promise<ListSAMLProvidersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSAMLProvidersResponse>(await this.doRPCRequest("ListSAMLProviders", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListSAMLProvidersResponse({}));
  }

  async listSAMLProviders(request: ListSAMLProvidersRequest): Promise<ListSAMLProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSAMLProvidersWithOptions(request, runtime);
  }

  async listUserBasicInfosWithOptions(request: ListUserBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListUserBasicInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserBasicInfosResponse>(await this.doRPCRequest("ListUserBasicInfos", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserBasicInfosResponse({}));
  }

  async listUserBasicInfos(request: ListUserBasicInfosRequest): Promise<ListUserBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserBasicInfosWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
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
    return $tea.cast<ListUsersForGroupResponse>(await this.doRPCRequest("ListUsersForGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersForGroupResponse({}));
  }

  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  async listVirtualMFADevicesWithOptions(request: ListVirtualMFADevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListVirtualMFADevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVirtualMFADevicesResponse>(await this.doRPCRequest("ListVirtualMFADevices", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new ListVirtualMFADevicesResponse({}));
  }

  async listVirtualMFADevices(request: ListVirtualMFADevicesRequest): Promise<ListVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(request, runtime);
  }

  async removeUserFromGroupWithOptions(request: RemoveUserFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUserFromGroupResponse>(await this.doRPCRequest("RemoveUserFromGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUserFromGroupResponse({}));
  }

  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  async setDefaultDomainWithOptions(request: SetDefaultDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDefaultDomainResponse>(await this.doRPCRequest("SetDefaultDomain", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetDefaultDomainResponse({}));
  }

  async setDefaultDomain(request: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  async setPasswordPolicyWithOptions(request: SetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetPasswordPolicyResponse>(await this.doRPCRequest("SetPasswordPolicy", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetPasswordPolicyResponse({}));
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
    return $tea.cast<SetSecurityPreferenceResponse>(await this.doRPCRequest("SetSecurityPreference", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetSecurityPreferenceResponse({}));
  }

  async setSecurityPreference(request: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  async setUserSsoSettingsWithOptions(request: SetUserSsoSettingsRequest, runtime: $Util.RuntimeOptions): Promise<SetUserSsoSettingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetUserSsoSettingsResponse>(await this.doRPCRequest("SetUserSsoSettings", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetUserSsoSettingsResponse({}));
  }

  async setUserSsoSettings(request: SetUserSsoSettingsRequest): Promise<SetUserSsoSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserSsoSettingsWithOptions(request, runtime);
  }

  async unbindMFADeviceWithOptions(request: UnbindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindMFADeviceResponse>(await this.doRPCRequest("UnbindMFADevice", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindMFADeviceResponse({}));
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
    return $tea.cast<UpdateAccessKeyResponse>(await this.doRPCRequest("UpdateAccessKey", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAccessKeyResponse({}));
  }

  async updateAccessKey(request: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  async updateApplicationWithOptions(request: UpdateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateApplicationResponse>(await this.doRPCRequest("UpdateApplication", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateApplicationResponse({}));
  }

  async updateApplication(request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGroupResponse>(await this.doRPCRequest("UpdateGroup", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGroupResponse({}));
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
    return $tea.cast<UpdateLoginProfileResponse>(await this.doRPCRequest("UpdateLoginProfile", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLoginProfileResponse({}));
  }

  async updateLoginProfile(request: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  async updateSAMLProviderWithOptions(request: UpdateSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSAMLProviderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSAMLProviderResponse>(await this.doRPCRequest("UpdateSAMLProvider", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSAMLProviderResponse({}));
  }

  async updateSAMLProvider(request: UpdateSAMLProviderRequest): Promise<UpdateSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSAMLProviderWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2019-08-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
