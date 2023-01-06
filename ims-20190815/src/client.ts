// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddClientIdToOIDCProviderRequest extends $tea.Model {
  clientId?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientIdToOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: AddClientIdToOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: AddClientIdToOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClientIdToOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddClientIdToOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddClientIdToOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFingerprintToOIDCProviderRequest extends $tea.Model {
  fingerprint?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFingerprintToOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: AddFingerprintToOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: AddFingerprintToOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFingerprintToOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddFingerprintToOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddFingerprintToOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToGroupRequest extends $tea.Model {
  groupName?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      userPrincipalName: 'string',
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

export class BindMFADeviceRequest extends $tea.Model {
  authenticationCode1?: string;
  authenticationCode2?: string;
  serialNumber?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode1: 'AuthenticationCode1',
      authenticationCode2: 'AuthenticationCode2',
      serialNumber: 'SerialNumber',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode1: 'string',
      authenticationCode2: 'string',
      serialNumber: 'string',
      userPrincipalName: 'string',
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
  statusCode: number;
  body: BindMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  newPassword?: string;
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
  statusCode: number;
  body: ChangePasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateAccessKeyRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyResponseBody extends $tea.Model {
  accessKey?: CreateAccessKeyResponseBodyAccessKey;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateAppSecretRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretResponseBody extends $tea.Model {
  appSecret?: CreateAppSecretResponseBodyAppSecret;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: CreateAppSecretResponseBodyAppSecret,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  accessTokenValidity?: number;
  appName?: string;
  appType?: string;
  displayName?: string;
  isMultiTenant?: boolean;
  predefinedScopes?: string;
  redirectUris?: string;
  refreshTokenValidity?: number;
  secretRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      appName: 'AppName',
      appType: 'AppType',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      predefinedScopes: 'PredefinedScopes',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      appName: 'string',
      appType: 'string',
      displayName: 'string',
      isMultiTenant: 'boolean',
      predefinedScopes: 'string',
      redirectUris: 'string',
      refreshTokenValidity: 'number',
      secretRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  application?: CreateApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: CreateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  comments?: string;
  displayName?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      displayName: 'DisplayName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      displayName: 'string',
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

export class CreateLoginProfileRequest extends $tea.Model {
  MFABindRequired?: boolean;
  password?: string;
  passwordResetRequired?: boolean;
  status?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      password: 'string',
      passwordResetRequired: 'boolean',
      status: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponseBody extends $tea.Model {
  loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateOIDCProviderRequest extends $tea.Model {
  clientIds?: string;
  description?: string;
  fingerprints?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      description: 'Description',
      fingerprints: 'Fingerprints',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      description: 'string',
      fingerprints: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: CreateOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: CreateOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSAMLProviderRequest extends $tea.Model {
  description?: string;
  encodedSAMLMetadataDocument?: string;
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encodedSAMLMetadataDocument: 'EncodedSAMLMetadataDocument',
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encodedSAMLMetadataDocument: 'string',
      SAMLProviderName: 'string',
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
  statusCode: number;
  body: CreateSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  comments?: string;
  displayName?: string;
  email?: string;
  mobilePhone?: string;
  tag?: CreateUserRequestTag[];
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      displayName: 'DisplayName',
      email: 'Email',
      mobilePhone: 'MobilePhone',
      tag: 'Tag',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      displayName: 'string',
      email: 'string',
      mobilePhone: 'string',
      tag: { 'type': 'array', 'itemType': CreateUserRequestTag },
      userPrincipalName: 'string',
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteAccessKeyRequest extends $tea.Model {
  userAccessKeyId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userPrincipalName: 'string',
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
  statusCode: number;
  body: DeleteAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteAppSecretRequest extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
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
  statusCode: number;
  body: DeleteAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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
  statusCode: number;
  body: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationResponseBody,
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

export class DeleteLoginProfileRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
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
  statusCode: number;
  body: DeleteLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteOIDCProviderRequest extends $tea.Model {
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOIDCProviderResponseBody extends $tea.Model {
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

export class DeleteOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSAMLProviderRequest extends $tea.Model {
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
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
  statusCode: number;
  body: DeleteSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userPrincipalName: 'string',
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
  statusCode: number;
  body: DeleteVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DisableVirtualMFARequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
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
  statusCode: number;
  body: DisableVirtualMFAResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableVirtualMFAResponseBody,
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
  statusCode: number;
  body: GenerateCredentialReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateCredentialReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedRequest extends $tea.Model {
  userAccessKeyId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userPrincipalName: 'string',
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
  statusCode: number;
  body: GetAccessKeyLastUsedResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetAccountMFAInfoResponseBody extends $tea.Model {
  isMFAEnable?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isMFAEnable: 'IsMFAEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMFAEnable: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountMFAInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountMFAInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountMFAInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponseBody extends $tea.Model {
  accountSecurityPracticeInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountSecurityPracticeInfo: 'AccountSecurityPracticeInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityPracticeInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountSecurityPracticeReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountSecurityPracticeReportResponseBody,
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

export class GetAppSecretRequest extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponseBody extends $tea.Model {
  appSecret?: GetAppSecretResponseBodyAppSecret;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appSecret: 'AppSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSecret: GetAppSecretResponseBodyAppSecret,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  application?: GetApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportResponseBody extends $tea.Model {
  content?: string;
  generatedTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generatedTime: 'GeneratedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generatedTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCredentialReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCredentialReportResponseBody,
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
  statusCode: number;
  body: GetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDefaultDomainResponseBody,
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

export class GetLoginProfileRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginProfileResponseBody extends $tea.Model {
  loginProfile?: GetLoginProfileResponseBodyLoginProfile;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetOIDCProviderRequest extends $tea.Model {
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: GetOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: GetOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponseBody extends $tea.Model {
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPasswordPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetSAMLProviderRequest extends $tea.Model {
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProviderName: 'string',
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
  statusCode: number;
  body: GetSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBody extends $tea.Model {
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecurityPreferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  userAccessKeyId?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userAccessKeyId: 'UserAccessKeyId',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userAccessKeyId: 'string',
      userId: 'string',
      userPrincipalName: 'string',
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

export class GetUserMFAInfoRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBody extends $tea.Model {
  isMFAEnable?: boolean;
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isMFAEnable: 'IsMFAEnable',
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMFAEnable: 'boolean',
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
  statusCode: number;
  body: GetUserMFAInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetUserSsoSettingsResponseBody extends $tea.Model {
  requestId?: string;
  userSsoSettings?: GetUserSsoSettingsResponseBodyUserSsoSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSsoSettings: 'UserSsoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSsoSettings: GetUserSsoSettingsResponseBodyUserSsoSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSsoSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserSsoSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserSsoSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
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
  statusCode: number;
  body: ListAccessKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListAppSecretIdsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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
  statusCode: number;
  body: ListAppSecretIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAppSecretIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  applications?: ListApplicationsResponseBodyApplications;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: ListApplicationsResponseBodyApplications,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsResponseBody,
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
  groups?: ListGroupsResponseBodyGroups;
  isTruncated?: boolean;
  marker?: string;
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

export class ListGroupsForUserRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $tea.Model {
  groups?: ListGroupsForUserResponseBodyGroups;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupsForUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListOIDCProvidersRequest extends $tea.Model {
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

export class ListOIDCProvidersResponseBody extends $tea.Model {
  isTruncated?: boolean;
  marker?: string;
  OIDCProviders?: ListOIDCProvidersResponseBodyOIDCProviders;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      OIDCProviders: 'OIDCProviders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      OIDCProviders: ListOIDCProvidersResponseBodyOIDCProviders,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOIDCProvidersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOIDCProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOIDCProvidersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPredefinedScopesRequest extends $tea.Model {
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: ListPredefinedScopesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class ListSAMLProvidersResponseBody extends $tea.Model {
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
  SAMLProviders?: ListSAMLProvidersResponseBodySAMLProviders;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      SAMLProviders: 'SAMLProviders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      SAMLProviders: ListSAMLProvidersResponseBodySAMLProviders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSAMLProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  tag?: ListUserBasicInfosRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      tag: { 'type': 'array', 'itemType': ListUserBasicInfosRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBody extends $tea.Model {
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
  userBasicInfos?: ListUserBasicInfosResponseBodyUserBasicInfos;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      userBasicInfos: 'UserBasicInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      userBasicInfos: ListUserBasicInfosResponseBodyUserBasicInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  tag?: ListUsersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      tag: { 'type': 'array', 'itemType': ListUsersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
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
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersForGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListVirtualMFADevicesRequest extends $tea.Model {
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

export class ListVirtualMFADevicesResponseBody extends $tea.Model {
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
  virtualMFADevices?: ListVirtualMFADevicesResponseBodyVirtualMFADevices;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      virtualMFADevices: ListVirtualMFADevicesResponseBodyVirtualMFADevices,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListVirtualMFADevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RemoveClientIdFromOIDCProviderRequest extends $tea.Model {
  clientId?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientIdFromOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveClientIdFromOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveClientIdFromOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveClientIdFromOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFingerprintFromOIDCProviderRequest extends $tea.Model {
  fingerprint?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFingerprintFromOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFingerprintFromOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveFingerprintFromOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveFingerprintFromOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromGroupRequest extends $tea.Model {
  groupName?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      userPrincipalName: 'string',
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

export class SetDefaultDomainRequest extends $tea.Model {
  defaultDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
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
  statusCode: number;
  body: SetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDefaultDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyRequest extends $tea.Model {
  hardExpire?: boolean;
  maxLoginAttemps?: number;
  maxPasswordAge?: number;
  minimumPasswordDifferentCharacter?: number;
  minimumPasswordLength?: number;
  passwordNotContainUserName?: boolean;
  passwordReusePrevention?: number;
  requireLowercaseCharacters?: boolean;
  requireNumbers?: boolean;
  requireSymbols?: boolean;
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordDifferentCharacter: 'number',
      minimumPasswordLength: 'number',
      passwordNotContainUserName: 'boolean',
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
  passwordPolicy?: SetPasswordPolicyResponseBodyPasswordPolicy;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SetPasswordPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  allowUserToChangePassword?: boolean;
  allowUserToManageAccessKeys?: boolean;
  allowUserToManageMFADevices?: boolean;
  allowUserToManagePersonalDingTalk?: boolean;
  enableSaveMFATicket?: boolean;
  enforceMFAForLogin?: boolean;
  loginNetworkMasks?: string;
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      enforceMFAForLogin: 'EnforceMFAForLogin',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      allowUserToManagePersonalDingTalk: 'boolean',
      enableSaveMFATicket: 'boolean',
      enforceMFAForLogin: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBody extends $tea.Model {
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SetSecurityPreferenceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SetUserSsoSettingsRequest extends $tea.Model {
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

export class SetUserSsoSettingsResponseBody extends $tea.Model {
  requestId?: string;
  userSsoSettings?: SetUserSsoSettingsResponseBodyUserSsoSettings;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSsoSettings: 'UserSsoSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSsoSettings: SetUserSsoSettingsResponseBodyUserSsoSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetUserSsoSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetUserSsoSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceRequest extends $tea.Model {
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipalName: 'string',
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
  statusCode: number;
  body: UnbindMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  status?: string;
  userAccessKeyId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      userAccessKeyId: 'UserAccessKeyId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      userAccessKeyId: 'string',
      userPrincipalName: 'string',
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
  statusCode: number;
  body: UpdateAccessKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateApplicationRequest extends $tea.Model {
  appId?: string;
  newAccessTokenValidity?: number;
  newDisplayName?: string;
  newIsMultiTenant?: boolean;
  newPredefinedScopes?: string;
  newRedirectUris?: string;
  newRefreshTokenValidity?: number;
  newSecretRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      newAccessTokenValidity: 'NewAccessTokenValidity',
      newDisplayName: 'NewDisplayName',
      newIsMultiTenant: 'NewIsMultiTenant',
      newPredefinedScopes: 'NewPredefinedScopes',
      newRedirectUris: 'NewRedirectUris',
      newRefreshTokenValidity: 'NewRefreshTokenValidity',
      newSecretRequired: 'NewSecretRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      newAccessTokenValidity: 'number',
      newDisplayName: 'string',
      newIsMultiTenant: 'boolean',
      newPredefinedScopes: 'string',
      newRedirectUris: 'string',
      newRefreshTokenValidity: 'number',
      newSecretRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $tea.Model {
  application?: UpdateApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: UpdateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  groupName?: string;
  newComments?: string;
  newDisplayName?: string;
  newGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      newGroupName: 'NewGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      newComments: 'string',
      newDisplayName: 'string',
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

export class UpdateLoginProfileRequest extends $tea.Model {
  MFABindRequired?: boolean;
  password?: string;
  passwordResetRequired?: boolean;
  status?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      password: 'Password',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      password: 'string',
      passwordResetRequired: 'boolean',
      status: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginProfileResponseBody extends $tea.Model {
  loginProfile?: UpdateLoginProfileResponseBodyLoginProfile;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginProfile: 'LoginProfile',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginProfile: UpdateLoginProfileResponseBodyLoginProfile,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginProfileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLoginProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateOIDCProviderRequest extends $tea.Model {
  clientIds?: string;
  newDescription?: string;
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      newDescription: 'NewDescription',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      newDescription: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOIDCProviderResponseBody extends $tea.Model {
  OIDCProvider?: UpdateOIDCProviderResponseBodyOIDCProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: UpdateOIDCProviderResponseBodyOIDCProvider,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOIDCProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateOIDCProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSAMLProviderRequest extends $tea.Model {
  newDescription?: string;
  newEncodedSAMLMetadataDocument?: string;
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      newDescription: 'NewDescription',
      newEncodedSAMLMetadataDocument: 'NewEncodedSAMLMetadataDocument',
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDescription: 'string',
      newEncodedSAMLMetadataDocument: 'string',
      SAMLProviderName: 'string',
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
  statusCode: number;
  body: UpdateSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSAMLProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  newComments?: string;
  newDisplayName?: string;
  newEmail?: string;
  newMobilePhone?: string;
  newUserPrincipalName?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      newEmail: 'NewEmail',
      newMobilePhone: 'NewMobilePhone',
      newUserPrincipalName: 'NewUserPrincipalName',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newComments: 'string',
      newDisplayName: 'string',
      newEmail: 'string',
      newMobilePhone: 'string',
      newUserPrincipalName: 'string',
      userId: 'string',
      userPrincipalName: 'string',
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

export class AddClientIdToOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFingerprintToOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessKeyResponseBodyAccessKey extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  createDate?: string;
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

export class CreateAppSecretResponseBodyAppSecret extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  appSecretValue?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      appSecretValue: 'AppSecretValue',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
      appSecretValue: 'string',
      createDate: 'string',
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

export class CreateApplicationResponseBodyApplication extends $tea.Model {
  accessTokenValidity?: number;
  accountId?: string;
  appId?: string;
  appName?: string;
  appType?: string;
  createDate?: string;
  delegatedScope?: CreateApplicationResponseBodyApplicationDelegatedScope;
  displayName?: string;
  isMultiTenant?: boolean;
  redirectUris?: CreateApplicationResponseBodyApplicationRedirectUris;
  refreshTokenValidity?: number;
  secretRequired?: boolean;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createDate: 'string',
      delegatedScope: CreateApplicationResponseBodyApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      redirectUris: CreateApplicationResponseBodyApplicationRedirectUris,
      refreshTokenValidity: 'number',
      secretRequired: 'boolean',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyGroup extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  groupId?: string;
  groupName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoginProfileResponseBodyLoginProfile extends $tea.Model {
  MFABindRequired?: boolean;
  passwordResetRequired?: boolean;
  status?: string;
  updateDate?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      updateDate: 'UpdateDate',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      status: 'string',
      updateDate: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSAMLProviderResponseBodySAMLProvider extends $tea.Model {
  arn?: string;
  createDate?: string;
  description?: string;
  SAMLProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUserTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUserTags extends $tea.Model {
  tag?: CreateUserResponseBodyUserTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': CreateUserResponseBodyUserTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBodyUser extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  email?: string;
  lastLoginDate?: string;
  mobilePhone?: string;
  provisionType?: string;
  tags?: CreateUserResponseBodyUserTags;
  updateDate?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      provisionType: 'ProvisionType',
      tags: 'Tags',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
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
      provisionType: 'string',
      tags: CreateUserResponseBodyUserTags,
      updateDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualMFADeviceResponseBodyVirtualMFADevice extends $tea.Model {
  base32StringSeed?: string;
  QRCodePNG?: string;
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
  bindMfa?: boolean;
  oldAkNum?: number;
  rootWithAccessKey?: number;
  subUser?: number;
  subUserBindMfa?: number;
  subUserPwdLevel?: string;
  subUserWithOldAccessKey?: number;
  subUserWithUnusedAccessKey?: number;
  unusedAkNum?: number;
  static names(): { [key: string]: string } {
    return {
      bindMfa: 'BindMfa',
      oldAkNum: 'OldAkNum',
      rootWithAccessKey: 'RootWithAccessKey',
      subUser: 'SubUser',
      subUserBindMfa: 'SubUserBindMfa',
      subUserPwdLevel: 'SubUserPwdLevel',
      subUserWithOldAccessKey: 'SubUserWithOldAccessKey',
      subUserWithUnusedAccessKey: 'SubUserWithUnusedAccessKey',
      unusedAkNum: 'UnusedAkNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindMfa: 'boolean',
      oldAkNum: 'number',
      rootWithAccessKey: 'number',
      subUser: 'number',
      subUserBindMfa: 'number',
      subUserPwdLevel: 'string',
      subUserWithOldAccessKey: 'number',
      subUserWithUnusedAccessKey: 'number',
      unusedAkNum: 'number',
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
  accessKeysPerUserQuota?: number;
  attachedPoliciesPerGroupQuota?: number;
  attachedPoliciesPerRoleQuota?: number;
  attachedPoliciesPerUserQuota?: number;
  attachedSystemPoliciesPerGroupQuota?: number;
  attachedSystemPoliciesPerRoleQuota?: number;
  attachedSystemPoliciesPerUserQuota?: number;
  groups?: number;
  groupsPerUserQuota?: number;
  groupsQuota?: number;
  MFADevices?: number;
  MFADevicesInUse?: number;
  policies?: number;
  policiesQuota?: number;
  policySizeQuota?: number;
  roles?: number;
  rolesQuota?: number;
  users?: number;
  usersQuota?: number;
  versionsPerPolicyQuota?: number;
  virtualMFADevicesQuota?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeysPerUserQuota: 'AccessKeysPerUserQuota',
      attachedPoliciesPerGroupQuota: 'AttachedPoliciesPerGroupQuota',
      attachedPoliciesPerRoleQuota: 'AttachedPoliciesPerRoleQuota',
      attachedPoliciesPerUserQuota: 'AttachedPoliciesPerUserQuota',
      attachedSystemPoliciesPerGroupQuota: 'AttachedSystemPoliciesPerGroupQuota',
      attachedSystemPoliciesPerRoleQuota: 'AttachedSystemPoliciesPerRoleQuota',
      attachedSystemPoliciesPerUserQuota: 'AttachedSystemPoliciesPerUserQuota',
      groups: 'Groups',
      groupsPerUserQuota: 'GroupsPerUserQuota',
      groupsQuota: 'GroupsQuota',
      MFADevices: 'MFADevices',
      MFADevicesInUse: 'MFADevicesInUse',
      policies: 'Policies',
      policiesQuota: 'PoliciesQuota',
      policySizeQuota: 'PolicySizeQuota',
      roles: 'Roles',
      rolesQuota: 'RolesQuota',
      users: 'Users',
      usersQuota: 'UsersQuota',
      versionsPerPolicyQuota: 'VersionsPerPolicyQuota',
      virtualMFADevicesQuota: 'VirtualMFADevicesQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeysPerUserQuota: 'number',
      attachedPoliciesPerGroupQuota: 'number',
      attachedPoliciesPerRoleQuota: 'number',
      attachedPoliciesPerUserQuota: 'number',
      attachedSystemPoliciesPerGroupQuota: 'number',
      attachedSystemPoliciesPerRoleQuota: 'number',
      attachedSystemPoliciesPerUserQuota: 'number',
      groups: 'number',
      groupsPerUserQuota: 'number',
      groupsQuota: 'number',
      MFADevices: 'number',
      MFADevicesInUse: 'number',
      policies: 'number',
      policiesQuota: 'number',
      policySizeQuota: 'number',
      roles: 'number',
      rolesQuota: 'number',
      users: 'number',
      usersQuota: 'number',
      versionsPerPolicyQuota: 'number',
      virtualMFADevicesQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppSecretResponseBodyAppSecret extends $tea.Model {
  appId?: string;
  appSecretId?: string;
  appSecretValue?: string;
  createDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
      appSecretValue: 'AppSecretValue',
      createDate: 'CreateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
      appSecretValue: 'string',
      createDate: 'string',
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

export class GetApplicationResponseBodyApplication extends $tea.Model {
  accessTokenValidity?: number;
  accountId?: string;
  appId?: string;
  appName?: string;
  appType?: string;
  createDate?: string;
  delegatedScope?: GetApplicationResponseBodyApplicationDelegatedScope;
  displayName?: string;
  isMultiTenant?: boolean;
  redirectUris?: GetApplicationResponseBodyApplicationRedirectUris;
  refreshTokenValidity?: number;
  secretRequired?: boolean;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createDate: 'string',
      delegatedScope: GetApplicationResponseBodyApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      redirectUris: GetApplicationResponseBodyApplicationRedirectUris,
      refreshTokenValidity: 'number',
      secretRequired: 'boolean',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  groupId?: string;
  groupName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
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
  lastLoginTime?: string;
  MFABindRequired?: boolean;
  passwordResetRequired?: boolean;
  status?: string;
  updateDate?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      lastLoginTime: 'LastLoginTime',
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      updateDate: 'UpdateDate',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastLoginTime: 'string',
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      status: 'string',
      updateDate: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordPolicyResponseBodyPasswordPolicy extends $tea.Model {
  hardExpire?: boolean;
  maxLoginAttemps?: number;
  maxPasswordAge?: number;
  minimumPasswordDifferentCharacter?: number;
  minimumPasswordLength?: number;
  passwordNotContainUserName?: boolean;
  passwordReusePrevention?: number;
  requireLowercaseCharacters?: boolean;
  requireNumbers?: boolean;
  requireSymbols?: boolean;
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordDifferentCharacter: 'number',
      minimumPasswordLength: 'number',
      passwordNotContainUserName: 'boolean',
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

export class GetSAMLProviderResponseBodySAMLProvider extends $tea.Model {
  arn?: string;
  createDate?: string;
  description?: string;
  encodedSAMLMetadataDocument?: string;
  SAMLProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      encodedSAMLMetadataDocument: 'EncodedSAMLMetadataDocument',
      SAMLProviderName: 'SAMLProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      encodedSAMLMetadataDocument: 'string',
      SAMLProviderName: 'string',
      updateDate: 'string',
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
  allowUserToChangePassword?: boolean;
  enableSaveMFATicket?: boolean;
  enforceMFAForLogin?: boolean;
  loginNetworkMasks?: string;
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      enforceMFAForLogin: 'EnforceMFAForLogin',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      enforceMFAForLogin: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
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

export class GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $tea.Model {
  allowUserToManagePersonalDingTalk?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePersonalDingTalk: 'boolean',
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
  personalInfoPreference?: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      personalInfoPreference: 'PersonalInfoPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      personalInfoPreference: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserTags extends $tea.Model {
  tag?: GetUserResponseBodyUserTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': GetUserResponseBodyUserTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  email?: string;
  lastLoginDate?: string;
  mobilePhone?: string;
  provisionType?: string;
  tags?: GetUserResponseBodyUserTags;
  updateDate?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      provisionType: 'ProvisionType',
      tags: 'Tags',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
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
      provisionType: 'string',
      tags: GetUserResponseBodyUserTags,
      updateDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBodyMFADevice extends $tea.Model {
  serialNumber?: string;
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
  accessKeyId?: string;
  createDate?: string;
  status?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      status: 'Status',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      createDate: 'string',
      status: 'string',
      updateDate: 'string',
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

export class ListApplicationsResponseBodyApplicationsApplication extends $tea.Model {
  accessTokenValidity?: number;
  accountId?: string;
  appId?: string;
  appName?: string;
  appType?: string;
  createDate?: string;
  delegatedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope;
  displayName?: string;
  isMultiTenant?: boolean;
  redirectUris?: ListApplicationsResponseBodyApplicationsApplicationRedirectUris;
  refreshTokenValidity?: number;
  secretRequired?: boolean;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createDate: 'string',
      delegatedScope: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      redirectUris: ListApplicationsResponseBodyApplicationsApplicationRedirectUris,
      refreshTokenValidity: 'number',
      secretRequired: 'boolean',
      updateDate: 'string',
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

export class ListGroupsResponseBodyGroupsGroup extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  groupId?: string;
  groupName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
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
  comments?: string;
  displayName?: string;
  groupId?: string;
  groupName?: string;
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      displayName: 'string',
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

export class ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOIDCProvidersResponseBodyOIDCProviders extends $tea.Model {
  OIDCProvider?: ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider[];
  static names(): { [key: string]: string } {
    return {
      OIDCProvider: 'OIDCProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OIDCProvider: { 'type': 'array', 'itemType': ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider },
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
  arn?: string;
  createDate?: string;
  description?: string;
  SAMLProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      updateDate: 'string',
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

export class ListUserBasicInfosRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfoTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfoTags extends $tea.Model {
  tag?: ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo extends $tea.Model {
  displayName?: string;
  tags?: ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfoTags;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      tags: 'Tags',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      tags: ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfoTags,
      userId: 'string',
      userPrincipalName: 'string',
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

export class ListUsersRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserTags extends $tea.Model {
  tag?: ListUsersResponseBodyUsersUserTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUser extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  email?: string;
  lastLoginDate?: string;
  mobilePhone?: string;
  provisionType?: string;
  tags?: ListUsersResponseBodyUsersUserTags;
  updateDate?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      provisionType: 'ProvisionType',
      tags: 'Tags',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
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
      provisionType: 'string',
      tags: ListUsersResponseBodyUsersUserTags,
      updateDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
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
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      joinDate: 'JoinDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      joinDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
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
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice extends $tea.Model {
  activateDate?: string;
  serialNumber?: string;
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

export class RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordPolicyResponseBodyPasswordPolicy extends $tea.Model {
  hardExpire?: boolean;
  maxLoginAttemps?: number;
  maxPasswordAge?: number;
  minimumPasswordDifferentCharacter?: number;
  minimumPasswordLength?: number;
  passwordNotContainUserName?: boolean;
  passwordReusePrevention?: number;
  requireLowercaseCharacters?: boolean;
  requireNumbers?: boolean;
  requireSymbols?: boolean;
  requireUppercaseCharacters?: boolean;
  static names(): { [key: string]: string } {
    return {
      hardExpire: 'HardExpire',
      maxLoginAttemps: 'MaxLoginAttemps',
      maxPasswordAge: 'MaxPasswordAge',
      minimumPasswordDifferentCharacter: 'MinimumPasswordDifferentCharacter',
      minimumPasswordLength: 'MinimumPasswordLength',
      passwordNotContainUserName: 'PasswordNotContainUserName',
      passwordReusePrevention: 'PasswordReusePrevention',
      requireLowercaseCharacters: 'RequireLowercaseCharacters',
      requireNumbers: 'RequireNumbers',
      requireSymbols: 'RequireSymbols',
      requireUppercaseCharacters: 'RequireUppercaseCharacters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hardExpire: 'boolean',
      maxLoginAttemps: 'number',
      maxPasswordAge: 'number',
      minimumPasswordDifferentCharacter: 'number',
      minimumPasswordLength: 'number',
      passwordNotContainUserName: 'boolean',
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
  allowUserToChangePassword?: boolean;
  enableSaveMFATicket?: boolean;
  enforceMFAForLogin?: boolean;
  loginNetworkMasks?: string;
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      enforceMFAForLogin: 'EnforceMFAForLogin',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      enforceMFAForLogin: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
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

export class SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $tea.Model {
  allowUserToManagePersonalDingTalk?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePersonalDingTalk: 'boolean',
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
  personalInfoPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      personalInfoPreference: 'PersonalInfoPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      personalInfoPreference: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
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

export class UpdateApplicationResponseBodyApplication extends $tea.Model {
  accessTokenValidity?: number;
  accountId?: string;
  appId?: string;
  appName?: string;
  appType?: string;
  createDate?: string;
  delegatedScope?: UpdateApplicationResponseBodyApplicationDelegatedScope;
  displayName?: string;
  isMultiTenant?: boolean;
  redirectUris?: UpdateApplicationResponseBodyApplicationRedirectUris;
  refreshTokenValidity?: number;
  secretRequired?: boolean;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      accountId: 'AccountId',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      secretRequired: 'SecretRequired',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      accountId: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createDate: 'string',
      delegatedScope: UpdateApplicationResponseBodyApplicationDelegatedScope,
      displayName: 'string',
      isMultiTenant: 'boolean',
      redirectUris: UpdateApplicationResponseBodyApplicationRedirectUris,
      refreshTokenValidity: 'number',
      secretRequired: 'boolean',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBodyGroup extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  groupId?: string;
  groupName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoginProfileResponseBodyLoginProfile extends $tea.Model {
  MFABindRequired?: boolean;
  passwordResetRequired?: boolean;
  status?: string;
  updateDate?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      updateDate: 'UpdateDate',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFABindRequired: 'boolean',
      passwordResetRequired: 'boolean',
      status: 'string',
      updateDate: 'string',
      userPrincipalName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  arn?: string;
  clientIds?: string;
  createDate?: string;
  description?: string;
  fingerprints?: string;
  gmtCreate?: string;
  gmtModified?: string;
  issuerUrl?: string;
  OIDCProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientIds: 'ClientIds',
      createDate: 'CreateDate',
      description: 'Description',
      fingerprints: 'Fingerprints',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      clientIds: 'string',
      createDate: 'string',
      description: 'string',
      fingerprints: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSAMLProviderResponseBodySAMLProvider extends $tea.Model {
  arn?: string;
  createDate?: string;
  description?: string;
  SAMLProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBodyUser extends $tea.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  email?: string;
  lastLoginDate?: string;
  mobilePhone?: string;
  provisionType?: string;
  updateDate?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      provisionType: 'ProvisionType',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
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
      provisionType: 'string',
      updateDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
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

  async addClientIdToOIDCProviderWithOptions(request: AddClientIdToOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<AddClientIdToOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddClientIdToOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddClientIdToOIDCProviderResponse>(await this.callApi(params, req, runtime), new AddClientIdToOIDCProviderResponse({}));
  }

  async addClientIdToOIDCProvider(request: AddClientIdToOIDCProviderRequest): Promise<AddClientIdToOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClientIdToOIDCProviderWithOptions(request, runtime);
  }

  async addFingerprintToOIDCProviderWithOptions(request: AddFingerprintToOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<AddFingerprintToOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fingerprint)) {
      query["Fingerprint"] = request.fingerprint;
    }

    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddFingerprintToOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddFingerprintToOIDCProviderResponse>(await this.callApi(params, req, runtime), new AddFingerprintToOIDCProviderResponse({}));
  }

  async addFingerprintToOIDCProvider(request: AddFingerprintToOIDCProviderRequest): Promise<AddFingerprintToOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFingerprintToOIDCProviderWithOptions(request, runtime);
  }

  async addUserToGroupWithOptions(request: AddUserToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserToGroup",
      version: "2019-08-15",
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

  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindMFADevice",
      version: "2019-08-15",
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

  async bindMFADevice(request: BindMFADeviceRequest): Promise<BindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindMFADeviceWithOptions(request, runtime);
  }

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
      version: "2019-08-15",
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

  async changePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changePasswordWithOptions(request, runtime);
  }

  async createAccessKeyWithOptions(request: CreateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccessKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccessKey",
      version: "2019-08-15",
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

  async createAccessKey(request: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  async createAppSecretWithOptions(request: CreateAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppSecret",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppSecretResponse>(await this.callApi(params, req, runtime), new CreateAppSecretResponse({}));
  }

  async createAppSecret(request: CreateAppSecretRequest): Promise<CreateAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSecretWithOptions(request, runtime);
  }

  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessTokenValidity)) {
      query["AccessTokenValidity"] = request.accessTokenValidity;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.isMultiTenant)) {
      query["IsMultiTenant"] = request.isMultiTenant;
    }

    if (!Util.isUnset(request.predefinedScopes)) {
      query["PredefinedScopes"] = request.predefinedScopes;
    }

    if (!Util.isUnset(request.redirectUris)) {
      query["RedirectUris"] = request.redirectUris;
    }

    if (!Util.isUnset(request.refreshTokenValidity)) {
      query["RefreshTokenValidity"] = request.refreshTokenValidity;
    }

    if (!Util.isUnset(request.secretRequired)) {
      query["SecretRequired"] = request.secretRequired;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2019-08-15",
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

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoginProfile",
      version: "2019-08-15",
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

  async createLoginProfile(request: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  async createOIDCProviderWithOptions(request: CreateOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIds)) {
      query["ClientIds"] = request.clientIds;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fingerprints)) {
      query["Fingerprints"] = request.fingerprints;
    }

    if (!Util.isUnset(request.issuerUrl)) {
      query["IssuerUrl"] = request.issuerUrl;
    }

    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOIDCProviderResponse>(await this.callApi(params, req, runtime), new CreateOIDCProviderResponse({}));
  }

  async createOIDCProvider(request: CreateOIDCProviderRequest): Promise<CreateOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOIDCProviderWithOptions(request, runtime);
  }

  async createSAMLProviderWithOptions(request: CreateSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<CreateSAMLProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encodedSAMLMetadataDocument)) {
      query["EncodedSAMLMetadataDocument"] = request.encodedSAMLMetadataDocument;
    }

    if (!Util.isUnset(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSAMLProviderResponse>(await this.callApi(params, req, runtime), new CreateSAMLProviderResponse({}));
  }

  async createSAMLProvider(request: CreateSAMLProviderRequest): Promise<CreateSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSAMLProviderWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2019-08-15",
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

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

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
      version: "2019-08-15",
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

  async createVirtualMFADevice(request: CreateVirtualMFADeviceRequest): Promise<CreateVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualMFADeviceWithOptions(request, runtime);
  }

  async deleteAccessKeyWithOptions(request: DeleteAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccessKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccessKey",
      version: "2019-08-15",
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

  async deleteAccessKey(request: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  async deleteAppSecretWithOptions(request: DeleteAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSecretId)) {
      query["AppSecretId"] = request.appSecretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppSecret",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppSecretResponse>(await this.callApi(params, req, runtime), new DeleteAppSecretResponse({}));
  }

  async deleteAppSecret(request: DeleteAppSecretRequest): Promise<DeleteAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppSecretWithOptions(request, runtime);
  }

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

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
      version: "2019-08-15",
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

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteLoginProfileWithOptions(request: DeleteLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoginProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoginProfile",
      version: "2019-08-15",
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

  async deleteLoginProfile(request: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  async deleteOIDCProviderWithOptions(request: DeleteOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOIDCProviderResponse>(await this.callApi(params, req, runtime), new DeleteOIDCProviderResponse({}));
  }

  async deleteOIDCProvider(request: DeleteOIDCProviderRequest): Promise<DeleteOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOIDCProviderWithOptions(request, runtime);
  }

  async deleteSAMLProviderWithOptions(request: DeleteSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSAMLProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSAMLProviderResponse>(await this.callApi(params, req, runtime), new DeleteSAMLProviderResponse({}));
  }

  async deleteSAMLProvider(request: DeleteSAMLProviderRequest): Promise<DeleteSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSAMLProviderWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2019-08-15",
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

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

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
      version: "2019-08-15",
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

  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async disableVirtualMFAWithOptions(request: DisableVirtualMFARequest, runtime: $Util.RuntimeOptions): Promise<DisableVirtualMFAResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableVirtualMFA",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableVirtualMFAResponse>(await this.callApi(params, req, runtime), new DisableVirtualMFAResponse({}));
  }

  async disableVirtualMFA(request: DisableVirtualMFARequest): Promise<DisableVirtualMFAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVirtualMFAWithOptions(request, runtime);
  }

  async generateCredentialReportWithOptions(runtime: $Util.RuntimeOptions): Promise<GenerateCredentialReportResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GenerateCredentialReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateCredentialReportResponse>(await this.callApi(params, req, runtime), new GenerateCredentialReportResponse({}));
  }

  async generateCredentialReport(): Promise<GenerateCredentialReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateCredentialReportWithOptions(runtime);
  }

  async getAccessKeyLastUsedWithOptions(request: GetAccessKeyLastUsedRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessKeyLastUsedResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccessKeyLastUsed",
      version: "2019-08-15",
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

  async getAccessKeyLastUsed(request: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  async getAccountMFAInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountMFAInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAccountMFAInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountMFAInfoResponse>(await this.callApi(params, req, runtime), new GetAccountMFAInfoResponse({}));
  }

  async getAccountMFAInfo(): Promise<GetAccountMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountMFAInfoWithOptions(runtime);
  }

  async getAccountSecurityPracticeReportWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountSecurityPracticeReportResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAccountSecurityPracticeReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountSecurityPracticeReportResponse>(await this.callApi(params, req, runtime), new GetAccountSecurityPracticeReportResponse({}));
  }

  async getAccountSecurityPracticeReport(): Promise<GetAccountSecurityPracticeReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSecurityPracticeReportWithOptions(runtime);
  }

  async getAccountSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAccountSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAccountSummary",
      version: "2019-08-15",
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

  async getAccountSummary(): Promise<GetAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSummaryWithOptions(runtime);
  }

  async getAppSecretWithOptions(request: GetAppSecretRequest, runtime: $Util.RuntimeOptions): Promise<GetAppSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appSecretId)) {
      query["AppSecretId"] = request.appSecretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppSecret",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppSecretResponse>(await this.callApi(params, req, runtime), new GetAppSecretResponse({}));
  }

  async getAppSecret(request: GetAppSecretRequest): Promise<GetAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSecretWithOptions(request, runtime);
  }

  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  async getCredentialReportWithOptions(runtime: $Util.RuntimeOptions): Promise<GetCredentialReportResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetCredentialReport",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCredentialReportResponse>(await this.callApi(params, req, runtime), new GetCredentialReportResponse({}));
  }

  async getCredentialReport(): Promise<GetCredentialReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCredentialReportWithOptions(runtime);
  }

  async getDefaultDomainWithOptions(runtime: $Util.RuntimeOptions): Promise<GetDefaultDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetDefaultDomain",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultDomainResponse>(await this.callApi(params, req, runtime), new GetDefaultDomainResponse({}));
  }

  async getDefaultDomain(): Promise<GetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultDomainWithOptions(runtime);
  }

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
      version: "2019-08-15",
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

  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  async getLoginProfileWithOptions(request: GetLoginProfileRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginProfileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginProfile",
      version: "2019-08-15",
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

  async getLoginProfile(request: GetLoginProfileRequest): Promise<GetLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  async getOIDCProviderWithOptions(request: GetOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<GetOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOIDCProviderResponse>(await this.callApi(params, req, runtime), new GetOIDCProviderResponse({}));
  }

  async getOIDCProvider(request: GetOIDCProviderRequest): Promise<GetOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOIDCProviderWithOptions(request, runtime);
  }

  async getPasswordPolicyWithOptions(runtime: $Util.RuntimeOptions): Promise<GetPasswordPolicyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetPasswordPolicy",
      version: "2019-08-15",
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

  async getPasswordPolicy(): Promise<GetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(runtime);
  }

  async getSAMLProviderWithOptions(request: GetSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<GetSAMLProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSAMLProviderResponse>(await this.callApi(params, req, runtime), new GetSAMLProviderResponse({}));
  }

  async getSAMLProvider(request: GetSAMLProviderRequest): Promise<GetSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSAMLProviderWithOptions(request, runtime);
  }

  async getSecurityPreferenceWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSecurityPreferenceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetSecurityPreference",
      version: "2019-08-15",
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

  async getSecurityPreference(): Promise<GetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecurityPreferenceWithOptions(runtime);
  }

  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2019-08-15",
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

  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  async getUserMFAInfoWithOptions(request: GetUserMFAInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserMFAInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserMFAInfo",
      version: "2019-08-15",
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

  async getUserMFAInfo(request: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  async getUserSsoSettingsWithOptions(runtime: $Util.RuntimeOptions): Promise<GetUserSsoSettingsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetUserSsoSettings",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserSsoSettingsResponse>(await this.callApi(params, req, runtime), new GetUserSsoSettingsResponse({}));
  }

  async getUserSsoSettings(): Promise<GetUserSsoSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserSsoSettingsWithOptions(runtime);
  }

  async listAccessKeysWithOptions(request: ListAccessKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListAccessKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccessKeys",
      version: "2019-08-15",
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

  async listAccessKeys(request: ListAccessKeysRequest): Promise<ListAccessKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  async listAppSecretIdsWithOptions(request: ListAppSecretIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListAppSecretIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAppSecretIds",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAppSecretIdsResponse>(await this.callApi(params, req, runtime), new ListAppSecretIdsResponse({}));
  }

  async listAppSecretIds(request: ListAppSecretIdsRequest): Promise<ListAppSecretIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppSecretIdsWithOptions(request, runtime);
  }

  async listApplicationsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  async listApplications(): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(runtime);
  }

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
      version: "2019-08-15",
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

  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  async listGroupsForUserWithOptions(request: ListGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroupsForUser",
      version: "2019-08-15",
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

  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  async listOIDCProvidersWithOptions(request: ListOIDCProvidersRequest, runtime: $Util.RuntimeOptions): Promise<ListOIDCProvidersResponse> {
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
      action: "ListOIDCProviders",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOIDCProvidersResponse>(await this.callApi(params, req, runtime), new ListOIDCProvidersResponse({}));
  }

  async listOIDCProviders(request: ListOIDCProvidersRequest): Promise<ListOIDCProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOIDCProvidersWithOptions(request, runtime);
  }

  async listPredefinedScopesWithOptions(request: ListPredefinedScopesRequest, runtime: $Util.RuntimeOptions): Promise<ListPredefinedScopesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appType)) {
      query["AppType"] = request.appType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPredefinedScopes",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPredefinedScopesResponse>(await this.callApi(params, req, runtime), new ListPredefinedScopesResponse({}));
  }

  async listPredefinedScopes(request: ListPredefinedScopesRequest): Promise<ListPredefinedScopesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPredefinedScopesWithOptions(request, runtime);
  }

  async listSAMLProvidersWithOptions(request: ListSAMLProvidersRequest, runtime: $Util.RuntimeOptions): Promise<ListSAMLProvidersResponse> {
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
      action: "ListSAMLProviders",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSAMLProvidersResponse>(await this.callApi(params, req, runtime), new ListSAMLProvidersResponse({}));
  }

  async listSAMLProviders(request: ListSAMLProvidersRequest): Promise<ListSAMLProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSAMLProvidersWithOptions(request, runtime);
  }

  async listUserBasicInfosWithOptions(request: ListUserBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListUserBasicInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserBasicInfos",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserBasicInfosResponse>(await this.callApi(params, req, runtime), new ListUserBasicInfosResponse({}));
  }

  async listUserBasicInfos(request: ListUserBasicInfosRequest): Promise<ListUserBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserBasicInfosWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2019-08-15",
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

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

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
      version: "2019-08-15",
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

  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  async listVirtualMFADevicesWithOptions(request: ListVirtualMFADevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListVirtualMFADevicesResponse> {
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
      action: "ListVirtualMFADevices",
      version: "2019-08-15",
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

  async listVirtualMFADevices(request: ListVirtualMFADevicesRequest): Promise<ListVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(request, runtime);
  }

  async removeClientIdFromOIDCProviderWithOptions(request: RemoveClientIdFromOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<RemoveClientIdFromOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveClientIdFromOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveClientIdFromOIDCProviderResponse>(await this.callApi(params, req, runtime), new RemoveClientIdFromOIDCProviderResponse({}));
  }

  async removeClientIdFromOIDCProvider(request: RemoveClientIdFromOIDCProviderRequest): Promise<RemoveClientIdFromOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClientIdFromOIDCProviderWithOptions(request, runtime);
  }

  async removeFingerprintFromOIDCProviderWithOptions(request: RemoveFingerprintFromOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<RemoveFingerprintFromOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fingerprint)) {
      query["Fingerprint"] = request.fingerprint;
    }

    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveFingerprintFromOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveFingerprintFromOIDCProviderResponse>(await this.callApi(params, req, runtime), new RemoveFingerprintFromOIDCProviderResponse({}));
  }

  async removeFingerprintFromOIDCProvider(request: RemoveFingerprintFromOIDCProviderRequest): Promise<RemoveFingerprintFromOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFingerprintFromOIDCProviderWithOptions(request, runtime);
  }

  async removeUserFromGroupWithOptions(request: RemoveUserFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserFromGroup",
      version: "2019-08-15",
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

  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  async setDefaultDomainWithOptions(request: SetDefaultDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultDomainName)) {
      query["DefaultDomainName"] = request.defaultDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultDomain",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultDomainResponse>(await this.callApi(params, req, runtime), new SetDefaultDomainResponse({}));
  }

  async setDefaultDomain(request: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  async setPasswordPolicyWithOptions(request: SetPasswordPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hardExpire)) {
      query["HardExpire"] = request.hardExpire;
    }

    if (!Util.isUnset(request.maxLoginAttemps)) {
      query["MaxLoginAttemps"] = request.maxLoginAttemps;
    }

    if (!Util.isUnset(request.maxPasswordAge)) {
      query["MaxPasswordAge"] = request.maxPasswordAge;
    }

    if (!Util.isUnset(request.minimumPasswordDifferentCharacter)) {
      query["MinimumPasswordDifferentCharacter"] = request.minimumPasswordDifferentCharacter;
    }

    if (!Util.isUnset(request.minimumPasswordLength)) {
      query["MinimumPasswordLength"] = request.minimumPasswordLength;
    }

    if (!Util.isUnset(request.passwordNotContainUserName)) {
      query["PasswordNotContainUserName"] = request.passwordNotContainUserName;
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
      version: "2019-08-15",
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

  async setPasswordPolicy(request: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.allowUserToManagePersonalDingTalk)) {
      query["AllowUserToManagePersonalDingTalk"] = request.allowUserToManagePersonalDingTalk;
    }

    if (!Util.isUnset(request.enableSaveMFATicket)) {
      query["EnableSaveMFATicket"] = request.enableSaveMFATicket;
    }

    if (!Util.isUnset(request.enforceMFAForLogin)) {
      query["EnforceMFAForLogin"] = request.enforceMFAForLogin;
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
      version: "2019-08-15",
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

  async setSecurityPreference(request: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  async setUserSsoSettingsWithOptions(request: SetUserSsoSettingsRequest, runtime: $Util.RuntimeOptions): Promise<SetUserSsoSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auxiliaryDomain)) {
      query["AuxiliaryDomain"] = request.auxiliaryDomain;
    }

    if (!Util.isUnset(request.metadataDocument)) {
      query["MetadataDocument"] = request.metadataDocument;
    }

    if (!Util.isUnset(request.ssoEnabled)) {
      query["SsoEnabled"] = request.ssoEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetUserSsoSettings",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetUserSsoSettingsResponse>(await this.callApi(params, req, runtime), new SetUserSsoSettingsResponse({}));
  }

  async setUserSsoSettings(request: SetUserSsoSettingsRequest): Promise<SetUserSsoSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserSsoSettingsWithOptions(request, runtime);
  }

  async unbindMFADeviceWithOptions(request: UnbindMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindMFADevice",
      version: "2019-08-15",
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

  async unbindMFADevice(request: UnbindMFADeviceRequest): Promise<UnbindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindMFADeviceWithOptions(request, runtime);
  }

  async updateAccessKeyWithOptions(request: UpdateAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccessKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userAccessKeyId)) {
      query["UserAccessKeyId"] = request.userAccessKeyId;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccessKey",
      version: "2019-08-15",
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

  async updateAccessKey(request: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  async updateApplicationWithOptions(request: UpdateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.newAccessTokenValidity)) {
      query["NewAccessTokenValidity"] = request.newAccessTokenValidity;
    }

    if (!Util.isUnset(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!Util.isUnset(request.newIsMultiTenant)) {
      query["NewIsMultiTenant"] = request.newIsMultiTenant;
    }

    if (!Util.isUnset(request.newPredefinedScopes)) {
      query["NewPredefinedScopes"] = request.newPredefinedScopes;
    }

    if (!Util.isUnset(request.newRedirectUris)) {
      query["NewRedirectUris"] = request.newRedirectUris;
    }

    if (!Util.isUnset(request.newRefreshTokenValidity)) {
      query["NewRefreshTokenValidity"] = request.newRefreshTokenValidity;
    }

    if (!Util.isUnset(request.newSecretRequired)) {
      query["NewSecretRequired"] = request.newSecretRequired;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplication",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationResponse>(await this.callApi(params, req, runtime), new UpdateApplicationResponse({}));
  }

  async updateApplication(request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.newComments)) {
      query["NewComments"] = request.newComments;
    }

    if (!Util.isUnset(request.newDisplayName)) {
      query["NewDisplayName"] = request.newDisplayName;
    }

    if (!Util.isUnset(request.newGroupName)) {
      query["NewGroupName"] = request.newGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2019-08-15",
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

  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoginProfile",
      version: "2019-08-15",
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

  async updateLoginProfile(request: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  async updateOIDCProviderWithOptions(request: UpdateOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIds)) {
      query["ClientIds"] = request.clientIds;
    }

    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.OIDCProviderName)) {
      query["OIDCProviderName"] = request.OIDCProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOIDCProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOIDCProviderResponse>(await this.callApi(params, req, runtime), new UpdateOIDCProviderResponse({}));
  }

  async updateOIDCProvider(request: UpdateOIDCProviderRequest): Promise<UpdateOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOIDCProviderWithOptions(request, runtime);
  }

  async updateSAMLProviderWithOptions(request: UpdateSAMLProviderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSAMLProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newDescription)) {
      query["NewDescription"] = request.newDescription;
    }

    if (!Util.isUnset(request.newEncodedSAMLMetadataDocument)) {
      query["NewEncodedSAMLMetadataDocument"] = request.newEncodedSAMLMetadataDocument;
    }

    if (!Util.isUnset(request.SAMLProviderName)) {
      query["SAMLProviderName"] = request.SAMLProviderName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSAMLProvider",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSAMLProviderResponse>(await this.callApi(params, req, runtime), new UpdateSAMLProviderResponse({}));
  }

  async updateSAMLProvider(request: UpdateSAMLProviderRequest): Promise<UpdateSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSAMLProviderWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.newUserPrincipalName)) {
      query["NewUserPrincipalName"] = request.newUserPrincipalName;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2019-08-15",
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

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
