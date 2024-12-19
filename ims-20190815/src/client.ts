// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddClientIdToOIDCProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID that you want to add.
   * 
   * The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are periods (.), hyphens (-), underscores (_), colons (:), and forward slashes (/). 
   * 
   * The client ID can be up to 64 characters in length.
   * 
   * @example
   * 598469743454717****
   */
  clientId?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
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
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: AddClientIdToOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B49B8FA7-87FC-5308-AE75-5EC9E36C360A
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddClientIdToOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate.
   * 
   * The fingerprint can contain letters and digits.
   * 
   * The fingerprint can be up to 40 characters in length.
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
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
  /**
   * @remarks
   * The name of the OIDC IdP.
   */
  OIDCProvider?: AddFingerprintToOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B809BBC-0E78-544A-A91A-648926412E3E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddFingerprintToOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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

export class BindMFADeviceRequest extends $tea.Model {
  /**
   * @remarks
   * The first verification code.
   * 
   * >  You can call the [CreateVirtualMFADevice](https://help.aliyun.com/document_detail/186179.html) operation to create an MFA device and generate a key (value of `Base32StringSeed`). Then, use the key on the Alibaba Cloud app to manually add an MFA device, and obtain the two consecutive verification codes.
   * 
   * @example
   * 123456
   */
  authenticationCode1?: string;
  /**
   * @remarks
   * The second verification code.
   * 
   * >  You can call the [CreateVirtualMFADevice](https://help.aliyun.com/document_detail/186179.html) operation to create an MFA device and generate a key (value of `Base32StringSeed`). Then, use the key on the Alibaba Cloud app to manually add an MFA device, and obtain the two consecutive verification codes.
   * 
   * @example
   * 654321
   */
  authenticationCode2?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * >  You can call the [CreateVirtualMFADevice](https://help.aliyun.com/document_detail/186179.html) operation to obtain the serial number of the MFA device.
   * 
   * @example
   * acs:ram::177242285274****:mfa/device001
   */
  serialNumber?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9AF80E4-1565-42D9-9256-0B8B0D9FD3EC
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
   * The new password that is used to log on to the console.
   * 
   * The password must meet the complexity requirements. For more information, see [GetPasswordPolicy](https://help.aliyun.com/document_detail/186691.html).
   * 
   * This parameter is required.
   * 
   * @example
   * newpassword
   */
  newPassword?: string;
  /**
   * @remarks
   * The old password that is used to log on to the console.
   * 
   * This parameter is required.
   * 
   * @example
   * mypassword
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

export class CreateAccessKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, an AccessKey pair is created for the current user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
   * 19DDD9F7-AFCC-4D72-8CBA-CCE5A142E7AB
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

export class CreateAppSecretRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
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
  /**
   * @remarks
   * The information of the application secret.
   */
  appSecret?: CreateAppSecretResponseBodyAppSecret;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE46FC3C-3BDE-4771-B531-27B7B6EB533D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The validity period of the access token.
   * 
   * Valid values: 900 to 10800. Unit: seconds.
   * 
   * Default value: 3600.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The application name.
   * 
   * The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   WebApp: a web application that interacts with a browser.
   * *   NativeApp: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
   * *   ServerApp: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The display name of the application.
   * 
   * The name can be up to 24 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myapp
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
   * 
   * *   true: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
   * *   false: If you do not set this parameter for applications of the WebApp type, false is used.
   * 
   * @example
   * false
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * The scope of application permissions.
   * 
   * For more information about the application permission scope, see [Open authorization scope](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to obtain the permission scopes supported by different types of applications.
   * 
   * If you enter multiple permission scopes, separate them with semicolons (;).
   * 
   * @example
   * aliuid
   */
  predefinedScopes?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * If you enter multiple callback URLs, separate them with semicolons (;).
   * 
   * @example
   * https://www.example.com
   */
  redirectUris?: string;
  /**
   * @remarks
   * The validity period of the refreshed token.
   * 
   * Valid values: 7200 to 31536000. Unit: seconds.
   * 
   * Default value:
   * 
   * *   For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.
   * *   For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.
   * 
   * @example
   * 2592000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * The required permission.
   * 
   * You can specify one or more permissions for the `RequiredScopes` parameter. After you specify this parameter, the required permissions are automatically selected and cannot be revoked when a user grants permissions on the application.
   * 
   * If you enter multiple permissions, separate them with semicolons (;).
   * 
   * >  If the permission that you specify for the `RequiredScopes` parameter is not included in value of the `PredefinedScopes` parameter, the permission does not take effect.
   * 
   * @example
   * aliuid;profile
   */
  requiredScopes?: string;
  /**
   * @remarks
   * Indicates whether a secret is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >- For applications of the WebApp and ServerApp types, this parameter is automatically set to true and cannot be changed.
   * >- For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified. For more information, see [Use an application of the NativeApp type to log on to Alibaba Cloud](https://help.aliyun.com/document_detail/93697.html).
   * 
   * @example
   * true
   */
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
      requiredScopes: 'RequiredScopes',
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
      requiredScopes: 'string',
      secretRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: CreateApplicationResponseBodyApplication;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6616F09B-2768-4C11-8866-A8EE4C4A583E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * The display name of the RAM user group.
   * 
   * The name can be up to 24 characters in length.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the RAM user group. You must specify this parameter.
   * 
   * The name can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Dev-Team
   */
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
  /**
   * @remarks
   * The information of the RAM user group.
   */
  group?: CreateGroupResponseBodyGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C38192B-7BF8-45DA-8F0A-E670EA51426C
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
   * Specifies whether multi-factor authentication (MFA) must be enabled. Valid values:
   * 
   * *   true: MFA must be enabled. The RAM user must bind an MFA device at the next logon.
   * *   false: MFA is not enabled. This is the default value.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The password that is used to log on to the console.
   * 
   * The password must meet the complexity requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user must reset the password at the next logon. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of password-based logon. Valid values:
   * 
   * *   Active: Password-based logon is enabled. This is the default value.
   * *   Inactive: Password-based logon is disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The logon information.
   */
  loginProfile?: CreateLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 29CB303C-1F05-43A6-A6BC-EBC5A797F8DB
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

export class CreateOIDCProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the client, which is provided by the external IdP Okta. If you want to specify multiple client IDs, separate the client IDs with commas (,).
   * 
   * The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods, (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.``
   * 
   * The client ID can be up to 64 characters in length.
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * The description can be up to 256 characters in length.
   * 
   * @example
   * This is an OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate, which is provided by the external IdP Okta. If you want to specify multiple fingerprints, separate the fingerprints with commas (,).
   * 
   * The fingerprint can contain letters and digits.
   * 
   * The fingerprint can be up to 40 characters in length.
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 6
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer, which is provided by the external IdP. The URL of the issuer must be unique within an Alibaba Cloud account.
   * 
   * The URL of the issuer must start with `https` and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (`?`) or logon information that is identified by at signs (`@`). The URL cannot be a fragment URL that contains number signs (`#`).
   * 
   * The URL can be up to 255 characters in length.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are `periods, (.), hyphens (-), and underscores (_)`.``
   * 
   * The name can be up to 128 characters in length.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      description: 'Description',
      fingerprints: 'Fingerprints',
      issuanceLimitTime: 'IssuanceLimitTime',
      issuerUrl: 'IssuerUrl',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      description: 'string',
      fingerprints: 'string',
      issuanceLimitTime: 'number',
      issuerUrl: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOIDCProviderResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: CreateOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64B11B41-636D-51E3-A39B-C8703CD2218C
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The metadata file, which is Base64 encoded.
   * 
   * The file is provided by an IdP that supports SAML 2.0.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  encodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * The value can be up to 128 characters in length. The name can contain letters, digits,`  periods (.), hyphens (-), and underscores (_) `. The name cannot start or end with`  periods (.), hyphens (-), or underscores (_) `.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A95A763D-F6B7-5242-83EB-AB45CE67F358
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the IdP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The description.
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
   * The name must be 1 to 24 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile number of the RAM user.
   * 
   * Format: Country code-Mobile phone number.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.
   */
  tag?: CreateUserRequestTag[];
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * The name is in the format of `<username>@<AccountAlias>.onaliyun.com`. `<username>` indicates the name of the RAM user. `<AccountAlias>.onaliyun.com` indicates the default domain name. For more information about how to obtain the default domain name, see [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html).
   * 
   * The value of `UserPrincipalName` must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The value of `<username>` must be 1 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BB8C44A-2862-4922-AD43-03924749173B
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
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
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
   * C609CC97-10FE-43EB-BE32-BDC219D8F1E4
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

export class DeleteAccessKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI4GFTgcR8m8cZQDTH****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, the AccessKey pair of the current user is deleted.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9AF80E4-1565-42D9-9256-0B8B0D9FD3EC
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

export class DeleteAppSecretRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * This parameter is required.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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

export class DeleteAppSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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

export class DeleteApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9AF80E4-1565-42D9-9256-0B8B0D9FD3EC
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

export class DeleteOIDCProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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

export class DeleteOIDCProviderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the IdP that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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

export class DeleteSAMLProviderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * >  You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * >  You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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
   * This parameter is required.
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

export class DisableVirtualMFARequest extends $tea.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9AF80E4-1565-42D9-9256-0B8B0D9FD3EC
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

export class DisableVirtualMFAResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableVirtualMFAResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBCCA90A-A1F0-4B16-B355-692247197805
   */
  requestId?: string;
  /**
   * @remarks
   * The generation status of the user credential report. Valid values:
   * 
   * *   STARTED: The user credential report starts to generate.
   * *   INPROGRESS: The user credential report is being generated.
   * *   COMPLETED: The user credential report is generated.
   * 
   * @example
   * STARTED
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCredentialReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AccessKey pair that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI4GFTgcR8m8cZQDTH****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If you do not specify this parameter, the AccessKey pair of the current user is queried.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The details of the time when the AccessKey pair was used for the last time.
   */
  accessKeyLastUsed?: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B29C79F6-354B-4297-A994-1338CC22A2EC
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

export class GetAccountMFAInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether MFA is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isMFAEnable?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4BE83135-0B08-467C-B3A2-27B312FD0F57
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountMFAInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The information of the security report for the Alibaba Cloud account.
   */
  accountSecurityPracticeInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABA822EE-85C2-4418-9577-A1831FC8466D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountSecurityPracticeReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81313F5E-3C85-478F-BCC9-E1B70E4556DB
   */
  requestId?: string;
  /**
   * @remarks
   * The overview information of the Alibaba Cloud account.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * This parameter is required.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
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
  /**
   * @remarks
   * The details of the application secret.
   */
  appSecret?: GetAppSecretResponseBodyAppSecret;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE46FC3C-3BDE-4771-B531-27B7B6EB533D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
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
  /**
   * @remarks
   * The information about the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6616F09B-2768-4C11-8866-A8EE4C4A583E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetCredentialReportRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.
   * 
   * Valid values: 1 to 3501. Default value: 3501.
   * 
   * @example
   * 1000
   */
  maxItems?: string;
  /**
   * @remarks
   * The token that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.``
   * 
   * @example
   * EXAMPLE
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxItems: 'MaxItems',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxItems: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportResponseBody extends $tea.Model {
  /**
   * @remarks
   * The content of the user credential report.
   * 
   * The report is Base64-encoded. After you decode the report, the credential report is in the CSV format.
   * 
   * @example
   * OVZWK4RMOVZW****
   */
  content?: string;
  /**
   * @remarks
   * The time when the user credential report was generated.
   * 
   * @example
   * 2020-10-19T15:06:52Z
   */
  generatedTime?: string;
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: string;
  /**
   * @remarks
   * The parameter that is used to obtain the truncated part. This parameter takes effect only when `IsTruncated` is set to true.
   * 
   * @example
   * EXAMPLE
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A01826E-7601-44B0-B4DF-2B0C509836DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generatedTime: 'GeneratedTime',
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generatedTime: 'string',
      isTruncated: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCredentialReportResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The default domain name.
   * 
   * @example
   * examplecompany.onaliyun.com
   */
  defaultDomainName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66815255-7CCE-4759-AC37-9755794C3626
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * The information about the RAM user group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86ECEC3C-7262-4C3C-94B4-A98F7CC1F060
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
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The console logon configurations.
   */
  loginProfile?: GetLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E517F18B-632C-48FC-93F1-CDCBCC6F8444
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

export class GetOIDCProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
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
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: GetOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5E1A300-279D-5FBD-A8CF-F4EDC20C4896
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The details of the password policy.
   */
  passwordPolicy?: GetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDAA8408-E67C-428B-BFF0-1B2AC05C9610
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

export class GetSAMLProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the IdP.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BAADB995-0C7A-476D-B293-7E94568EEDFB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the IdP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30C9068D-FBAA-4998-9986-8A562FED0BC3
   */
  requestId?: string;
  /**
   * @remarks
   * The details of security preferences.
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
   * The AccessKey ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.
   * 
   * @example
   * LTAI4GFTgcR8m8cZQDTH****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * The name is in the format of `<username>@<AccountAlias>.onaliyun.com`. `<username>` indicates the name of the RAM user. `<AccountAlias>.onaliyun.com` indicates the default domain name.
   * 
   * The value of `UserPrincipalName` must be `1 to 128` characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The value of `<username>` must be `1 to 64` characters in length.
   * 
   * > You must specify only one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
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
   * The logon name of the RAM user. This parameter is differently set in the following scenarios:
   * 
   * *   If you use a RAM user to call this operation, this parameter can be left empty. If you do not specify this parameter, the information of the MFA device that is bound to the RAM user is queried.
   * *   If you use an Alibaba Cloud account to call this operation, you must set this parameter to the logon name of the RAM user that you want to query.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * Indicates whether the MFA device is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isMFAEnable?: boolean;
  /**
   * @remarks
   * The information about the MFA device.
   */
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FCF7322A-20A9-4F68-8B7F-F86958839BC0
   */
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

export class GetUserSsoSettingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69FC3E5E-D3D9-434B-90CA-BBA8E0551A47
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of user-based SSO.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserSsoSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetVerificationInfoRequest extends $tea.Model {
  /**
   * @example
   * test@example.onaliyun.com
   */
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

export class GetVerificationInfoResponseBody extends $tea.Model {
  /**
   * @example
   * B182C041-8C64-5F2F-A07B-FC67FAF89CF9
   */
  requestId?: string;
  securityEmailDevice?: GetVerificationInfoResponseBodySecurityEmailDevice;
  securityPhoneDevice?: GetVerificationInfoResponseBodySecurityPhoneDevice;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEmailDevice: 'SecurityEmailDevice',
      securityPhoneDevice: 'SecurityPhoneDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEmailDevice: GetVerificationInfoResponseBodySecurityEmailDevice,
      securityPhoneDevice: GetVerificationInfoResponseBodySecurityPhoneDevice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVerificationInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetVerificationInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVerificationInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, the AccessKey pairs of the current user are queried.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The list of AccessKey pairs.
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

export class ListAppSecretIdsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
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
  /**
   * @remarks
   * The details of the application secret.
   */
  appSecrets?: ListAppSecretIdsResponseBodyAppSecrets;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5F2FD500-7173-47D6-BD2F-EB60879B4F16
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAppSecretIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The information about the application.
   */
  applications?: ListApplicationsResponseBodyApplications;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE458B58-8C40-46F7-A9D4-CB85136B0C06
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * Valid values: 1 to 100. Default value: 100.
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
   * The information of the RAM user groups.
   */
  groups?: ListGroupsResponseBodyGroups;
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.
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
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The information of the RAM user groups.
   */
  groups?: ListGroupsForUserResponseBodyGroups;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7158A935-FB5E-49A7-8E52-FDA5B2B67247
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

export class ListOIDCProvidersRequest extends $tea.Model {
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
   * The number of entries per page. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.
   * 
   * Valid values: 1 to 100. Default value: 100.
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

export class ListOIDCProvidersResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
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
   * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.``
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProviders?: ListOIDCProvidersResponseBodyOIDCProviders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D2148337-B86A-57F0-8B31-EB7BE0125226
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOIDCProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   WebApp
   * *   NativeApp
   * *   ServerApp
   * 
   * If this parameter is empty, the permissions on all types of applications are queried.
   * 
   * @example
   * WebApp
   */
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
  /**
   * @remarks
   * The information of application permissions.
   */
  predefinedScopes?: ListPredefinedScopesResponseBodyPredefinedScopes;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 955C096D-EC99-480B-AF37-3921109107D0
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPredefinedScopesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * Valid values: 1 to 100. Default value: 100.
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

export class ListSAMLProvidersResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
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
   * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.
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
   * 2D8B70D3-E194-41C9-93C5-F6A10D716D24
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the IdP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSAMLProvidersResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The token that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. If a response is truncated because it reaches the value of PageSize, the value of IsTruncated will be true. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of resource N.
   * 
   * Valid values of N: 1 to 50. If ResourceType is set to user, the resource ID is the ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The name of resource N.
   * 
   * Valid values of N: 1 to 50. If ResourceType is set to user, the resource name is the name of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   */
  resourcePrincipalName?: string[];
  /**
   * @remarks
   * The type of the resource. Valid value:
   * 
   * *   user: a RAM user
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourcePrincipalName: 'ResourcePrincipalName',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageSize: 'number',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourcePrincipalName: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
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
   * The marker. This parameter is returned only if the value of IsTruncated is true. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4BE83135-0B08-467C-B3A2-27B312FD0F57
   */
  requestId?: string;
  /**
   * @remarks
   * The tag key.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosRequest extends $tea.Model {
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
  status?: string;
  /**
   * @remarks
   * The tag value.
   */
  tag?: ListUserBasicInfosRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListUserBasicInfosRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid value:
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
   * The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.
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
   * EF2B25FD-CADE-445B-BE4D-E082E0FF1A0F
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information about the RAM user.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserBasicInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * The number of entries per page. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.
   * 
   * Valid values: 1 to 1000. Default value: 1000.
   * 
   * @example
   * 1000
   */
  maxItems?: number;
  status?: string;
  /**
   * @remarks
   * The tags. A maximum number of 20 tags are supported.
   */
  tag?: ListUsersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      maxItems: 'MaxItems',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItems: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListUsersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
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
   * The parameter that is used to obtain the truncated part. It takes effect only when `IsTruncated` is set to `true`.
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
   * The details of the RAM user.
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
   * Test-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.``
   * 
   * When you call the operation for the first time, if the total number of returned entries exceeds the value of `MaxItems`, the entries are truncated. The system returns entries based on the value of `MaxItems` and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and `Marker` is returned. In the next call, you can use the value of `Marker` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 100.
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
   * Indicates whether the response is truncated. Valid values:
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when `IsTruncated` is `true`.
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
   * 789FF581-B3C8-43A8-9115-54304B46D05C
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM users.
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

export class ListVirtualMFADevicesRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.``
   * 
   * When you call the operation for the first time, if the total number of returned entries exceeds the value of `MaxItems`, the entries are truncated. The system returns entries based on the value of `MaxItems` and does not return the excess entries. In this case, the value of the response parameter `IsTruncated` is `true`, and `Marker` is returned. In the next call, you can use the value of `Marker` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of the `IsTruncated` parameter becomes `false`. This way, all entries are returned.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 100.
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

export class ListVirtualMFADevicesResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when `IsTruncated` is `true`.
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
   * 32272612-DF82-485E-8BA9-AFA4E0C3D0BA
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the MFA device.
   */
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

export class RemoveClientIdFromOIDCProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The client ID that you want to remove.
   * 
   * The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods, (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.``
   * 
   * The client ID can be up to 64 characters in length.
   * 
   * @example
   * 498469743454717****
   */
  clientId?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
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
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9A8F3B-AFA5-5C8F-999D-F97BC7CF1FC5
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveClientIdFromOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The fingerprint that you want to remove.
   * 
   * @example
   * 6938fd4d98bab03faadb97b34396831e3780****
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
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
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: RemoveFingerprintFromOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C90CE971-4C7F-5D93-BD3E-2D0E79D03C01
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveFingerprintFromOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85836703-8D4F-485F-9726-4D1C730F957E
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

export class SetDefaultDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The default domain name.
   * 
   * The name is in the format of `<AccountAlias>.onaliyun.com`. `<AccountAlias>` indicates the account alias. By default, the value of AccountAlias is the ID of the Alibaba Cloud account. The default domain name must end with `.onaliyun.com`.
   * 
   * The default domain name can contain up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  The default domain name cannot start or end with a hyphen (-) and cannot have two consecutive hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * examplecompany.onaliyun.com
   */
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
  /**
   * @remarks
   * The default domain name.
   * 
   * @example
   * examplecompany.onaliyun.com
   */
  defaultDomainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66815255-7CCE-4759-AC37-9755794C3626
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDefaultDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * Specifies whether to disable logon after the password expires. Valid values:
   * 
   * *   true: After the password expires, you cannot use the password to log on to the console. You can log on to the console only after you reset the password by using your Alibaba Cloud account or as a RAM user that has administrative rights.
   * *   false: After the password expires, you can change the password to log on to the console. This is the default value.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The maximum number of password retries. If you enter the wrong passwords for the specified consecutive times, the account is locked for one hour.
   * 
   * Valid values: 0 to 32.
   * 
   * The default value is 0, which indicates that the password retries are not limited.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The validity period of the password.
   * 
   * Valid values: 0 to 1095. Unit: days.
   * 
   * The default value is 0, which indicates that the password never expires.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of unique characters in the password.
   * 
   * Valid values: 0 to 8.
   * 
   * The default value is 0, which indicates that no limits are imposed on the number of unique characters in a password.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * The minimum number of characters in the password.
   * 
   * Valid values: 8 to 32. Default value: 8.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Specifies whether to exclude the username from the password. Valid values:
   * 
   * *   true: A password cannot contain the username.
   * *   false: A password can contain the username. This is the default value.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * The previous N passwords cannot be reused. Valid values of N: 0 to 24.
   * 
   * The default value is 0, which indicates that RAM users can reuse previous passwords.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Specifies whether the password must contain lowercase letters. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain digits. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain special characters. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Specifies whether the password must contain uppercase letters. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The details of the password policy.
   */
  passwordPolicy?: SetPasswordPolicyResponseBodyPasswordPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3FB5551F-B2ED-40D4-8392-1E4AC2384EFD
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
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their personal DingTalk accounts, such as binding and unbinding of the accounts. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManagePersonalDingTalk?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can remember the MFA devices for seven days. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that specifies the IP addresses from which you can log on to the Alibaba Cloud Management Console. This parameter takes effect on password-based logon and single sign-on (SSO). This parameter does not take effect on API calls that are authenticated by using AccessKey pairs.
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
   * Valid values: 1 to 24. Unit: hours.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Specifies whether MFA is required for all RAM users when they log on to the Alibaba Cloud Management Console. This parameter is used to replace EnforceMFAForLogin. EnforceMFAForLogin is still valid. However, we recommend that you use MFAOperationForLogin. Valid values:
   * 
   * *   mandatory: MFA is required for all RAM users. If you use EnforceMFAForLogin, set the value to true.
   * *   independent (default): User-specific settings are applied. If you use EnforceMFAForLogin, set the value to false.
   * *   adaptive: MFA is required only for RAM users who initiated unusual logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * Specifies whether to enable MFA for RAM users who initiated unusual logons. Valid values:
   * 
   * *   autonomous (default): yes. MFA is prompted for RAM users who initiated unusual logons. However, the RAM users are allowed to skip MFA.
   * *   enforceVerify: MFA is prompted for RAM users who initiated unusual logons and the RAM users cannot skip MFA.
   * 
   * @example
   * autonomous
   */
  operationForRiskLogin?: string;
  /**
   * @remarks
   * The MFA methods.
   */
  verificationTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
      MFAOperationForLogin: 'MFAOperationForLogin',
      operationForRiskLogin: 'OperationForRiskLogin',
      verificationTypes: 'VerificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      allowUserToManagePersonalDingTalk: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
      MFAOperationForLogin: 'string',
      operationForRiskLogin: 'string',
      verificationTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether RAM users can change their passwords. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their personal DingTalk accounts, such as binding and unbinding of the accounts. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManagePersonalDingTalk?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can remember the MFA devices for seven days. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that specifies the IP addresses from which you can log on to the Alibaba Cloud Management Console. This parameter takes effect on password-based logon and single sign-on (SSO). This parameter does not take effect on API calls that are authenticated by using AccessKey pairs.
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
   * Valid values: 1 to 24. Unit: hours.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Specifies whether MFA is required for all RAM users when they log on to the Alibaba Cloud Management Console. This parameter is used to replace EnforceMFAForLogin. EnforceMFAForLogin is still valid. However, we recommend that you use MFAOperationForLogin. Valid values:
   * 
   * *   mandatory: MFA is required for all RAM users. If you use EnforceMFAForLogin, set the value to true.
   * *   independent (default): User-specific settings are applied. If you use EnforceMFAForLogin, set the value to false.
   * *   adaptive: MFA is required only for RAM users who initiated unusual logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * Specifies whether to enable MFA for RAM users who initiated unusual logons. Valid values:
   * 
   * *   autonomous (default): yes. MFA is prompted for RAM users who initiated unusual logons. However, the RAM users are allowed to skip MFA.
   * *   enforceVerify: MFA is prompted for RAM users who initiated unusual logons and the RAM users cannot skip MFA.
   * 
   * @example
   * autonomous
   */
  operationForRiskLogin?: string;
  /**
   * @remarks
   * The MFA methods.
   */
  verificationTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      allowUserToManagePersonalDingTalk: 'AllowUserToManagePersonalDingTalk',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
      MFAOperationForLogin: 'MFAOperationForLogin',
      operationForRiskLogin: 'OperationForRiskLogin',
      verificationTypesShrink: 'VerificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      allowUserToManagePersonalDingTalk: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
      MFAOperationForLogin: 'string',
      operationForRiskLogin: 'string',
      verificationTypesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17494710-B4BA-4185-BBBB-C1A6ABDE1639
   */
  requestId?: string;
  /**
   * @remarks
   * The details of security preferences.
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

export class SetUserSsoSettingsRequest extends $tea.Model {
  /**
   * @remarks
   * The auxiliary domain name.
   * 
   * @example
   * example.com
   */
  auxiliaryDomain?: string;
  /**
   * @remarks
   * The metadata file, which is Base64-encoded.
   * 
   * The file is provided by an IdP that supports SAML 2.0.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Specifies whether to enable SSO for the RAM user. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ssoEnabled?: boolean;
  ssoLoginWithDomain?: boolean;
  static names(): { [key: string]: string } {
    return {
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
      ssoLoginWithDomain: 'SsoLoginWithDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryDomain: 'string',
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
      ssoLoginWithDomain: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 87F2E3F6-28A0-43F3-A77F-F7760E62F61E
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of user-based SSO.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetUserSsoSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of resource N.
   * 
   * Valid values of N: 1 to 50. If ResourceType is set to user, the resource ID is the ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The name of resource N.
   * 
   * Valid values of N: 1 to 50. If ResourceType is set to user, the resource name is the name of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   * 
   * @example
   * TagResources
   */
  resourcePrincipalName?: string[];
  /**
   * @remarks
   * The type of the resource. Valid value:
   * 
   * *   user: a RAM user
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag value.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourcePrincipalName: 'ResourcePrincipalName',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourcePrincipalName: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3687BD52-49FD-585B-AB14-CD05B7C76963
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceRequest extends $tea.Model {
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The information of the MFA device.
   */
  MFADevice?: UnbindMFADeviceResponseBodyMFADevice;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A26CB3E9-1021-452A-AC57-3134B3BA0E4C
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

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   true: remove all tags from the resources.
   * *   false (default): does not remove all tags from the resources.
   * 
   * > This parameter takes effect only when TagKey.N is not set in the request.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The IDs of resources.
   * 
   * Valid values of N: 1 to 50. If the ResourceType parameter is set to user, the resource ID is the ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   * 
   * @example
   * UntagResources
   */
  resourceId?: string[];
  /**
   * @remarks
   * The names of resources.
   * 
   * Valid values of N: 1 to 50. If the ResourceType parameter is set to user, the resource name is the name of the RAM user.
   * 
   * > You must specify only one of the following parameters: ResourceId and ResourcePrincipalName.
   */
  resourcePrincipalName?: string[];
  /**
   * @remarks
   * The type of the resource. Valid value:
   * 
   * *   user: a RAM user
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of resources.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourcePrincipalName: 'ResourcePrincipalName',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourcePrincipalName: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AC79B74-9A78-58E2-818B-1D38EDC64D67
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccessKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values:
   * 
   * *   Active
   * *   Inactive
   * 
   * This parameter is required.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The AccessKey ID of the AccessKey pair for which you want to modify the status.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI4GFTgcR8m8cZQDTH****
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * If this parameter is empty, the status of the AccessKey pair for the current user is modified.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9AF80E4-1565-42D9-9256-0B8B0D9FD3EC
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

export class UpdateApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The validity period of the access token.
   * 
   * Valid values: 900 to 10800. Unit: seconds.
   * 
   * @example
   * 3600
   */
  newAccessTokenValidity?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * NewApp
   */
  newDisplayName?: string;
  /**
   * @remarks
   * Specifies whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  newIsMultiTenant?: boolean;
  /**
   * @remarks
   * The permission that is granted on the application.
   * 
   * For more information about the application permission scope, see [OAuth scopes](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to query the permissions that are supported by different types of applications.
   * 
   * If you enter multiple permissions, separate them with semicolons (;).
   * 
   * The new value of this parameter overwrites the original value, and the permission specified by the new value takes effect. For example, if the original value is `/acs/ccc`, and the new value is `/acs/alidns`, `/acs/alidns` takes effect. If you want to retain the original permission and the `/acs/alidns` permission, set the value to `/acs/ccc;/acs/alidns`.
   * 
   * @example
   * openid
   */
  newPredefinedScopes?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * If you enter multiple callback URLs, separate them with semicolons (;).
   * 
   * @example
   * https://www.example.com
   */
  newRedirectUris?: string;
  /**
   * @remarks
   * The validity period of the refresh token.
   * 
   * Valid values: 7200 to 31536000. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  newRefreshTokenValidity?: number;
  /**
   * @remarks
   * The required permission.
   * 
   * You can specify one or more permissions for the `RequiredScopes` parameter. After you specify this parameter, the required permissions are automatically selected and cannot be revoked when a user grants permissions on the application.
   * 
   * If you also specify the `NewPredefinedScopes` parameter, the `NewPredefinedScopes` parameter specifies the permissions that can be granted on the application, and this parameter specifies the required permissions.
   * 
   * If you enter multiple permissions, separate them with semicolons (;).
   * 
   * The new value of this parameter overwrites the original value, and the required permission specified by the new value takes effect.
   * 
   * >  If the permission that you specify for the `RequiredScopes` parameter is not included in value of the `PredefinedScopes` parameter, the permission does not take effect.
   * 
   * @example
   * profile;aliuid
   */
  newRequiredScopes?: string;
  /**
   * @remarks
   * Specifies whether a secret is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > 
   * 
   * *   For applications of the WebApp and ServerApp types, this parameter is automatically set to true and cannot be changed.
   * *   For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified. For more information, see [Use an application of the NativeApp type to log on to Alibaba Cloud](https://help.aliyun.com/document_detail/93697.html).
   * 
   * @example
   * true
   */
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
      newRequiredScopes: 'NewRequiredScopes',
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
      newRequiredScopes: 'string',
      newSecretRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: UpdateApplicationResponseBodyApplication;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6616F09B-2768-4C11-8866-A8EE4C4A583E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * The new description.
   * 
   * The value can be up to 128 characters in length.
   * 
   * @example
   * Test-Team
   */
  newComments?: string;
  /**
   * @remarks
   * The new display name of the RAM user group.
   * 
   * The name can be up to 24 characters in length.
   * 
   * @example
   * Test-Team
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new name of the RAM user group.
   * 
   * The name can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Test-Team
   */
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
   * CDA656E3-3CE9-4A03-A8A3-B42A0C3C3287
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
   * Specifies whether multi-factor authentication (MFA) must be enabled. Valid values:
   * 
   * *   true. The value true indicates that the RAM user must bind an MFA device at the next logon.
   * *   false.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * The new password that is used to log on to the console.
   * 
   * The password must meet the complexity requirements.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the RAM user must reset the password at the next logon. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of password-based logon. Valid values:
   * 
   * *   Active
   * *   Inactive
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The logon information.
   */
  loginProfile?: UpdateLoginProfileResponseBodyLoginProfile;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCDB6A7F-2199-41D9-B577-4FA536A5ADE1
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
      loginProfile: UpdateLoginProfileResponseBodyLoginProfile,
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

export class UpdateOIDCProviderRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the client. If you want to specify multiple client IDs, separate the client IDs with commas (,).
   * 
   * The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods, (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.``
   * 
   * The client ID can be up to 64 characters in length.
   * 
   * > If you specify this parameter, all the client IDs of the OIDC IdP are replaced. If you need to only add or remove a client ID, call the AddClientIdToOIDCProvider or RemoveClientIdFromOIDCProvider operation. For more information, see [AddClientIdToOIDCProvider](https://help.aliyun.com/document_detail/332057.html) or [RemoveClientIdFromOIDCProvider](https://help.aliyun.com/document_detail/332058.html).
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 6
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * The description can be up to 256 characters in length.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  newDescription?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
      issuanceLimitTime: 'IssuanceLimitTime',
      newDescription: 'NewDescription',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: 'string',
      issuanceLimitTime: 'number',
      newDescription: 'string',
      OIDCProviderName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOIDCProviderResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the OIDC IdP.
   */
  OIDCProvider?: UpdateOIDCProviderResponseBodyOIDCProvider;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4C4D1BD-2558-5BD1-8C26-A5D7FB174A55
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOIDCProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The new description.
   * 
   * >  You must specify at least one of the `NewDescription` and `NewEncodedSAMLMetadataDocument` parameters.
   * 
   * @example
   * This is a new provider.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new metadata file.
   * 
   * >  You must specify at least one of the `NewDescription` and `NewEncodedSAMLMetadataDocument` parameters.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  newEncodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The name of the IdP whose information you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5EDDFD2-3654-4F9F-9780-4AE7D81823EF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the IdP.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSAMLProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
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
   * The name must be 1 to 24 characters in length.
   * 
   * @example
   * new
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new email address of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  newEmail?: string;
  /**
   * @remarks
   * The new mobile phone number of the RAM user.
   * 
   * Format: \\<Country code>-\\<Mobile phone number>.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  newMobilePhone?: string;
  /**
   * @remarks
   * The new logon name of the RAM user.
   * 
   * The name is in the format of `<username>@<AccountAlias>.onaliyun.com`. `<username>` indicates the name of the RAM user. `<AccountAlias>.onaliyun.com` indicates the default domain name.
   * 
   * The value of `UserPrincipalName` must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The value of `<username>` must be 1 to 64 characters in length.
   * 
   * @example
   * new@example.onaliyun.com
   */
  newUserPrincipalName?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * > You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * > You must specify only one of the following parameters: `UserPrincipalName` and `UserId`.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B56DD42-6962-4F89-A19C-079EED1F0FE3
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

export class AddClientIdToOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 498469743454717****,598469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/OIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 502ef2deeb3c5b13ea4c3d5193629309e231****,902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * The AccessKey ID provided to you by Alibaba Cloud.
   * 
   * @example
   * LTAI4G3HaMmeHpay2gcq****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret provided to you by Alibaba Cloud.
   * 
   * @example
   * Y3MSLE6OgizS4qrz5LVFDoyZEL****
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2020-10-15T08:08:54Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values:
   * 
   * *   Active
   * *   Inactive
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

export class CreateAppSecretResponseBodyAppSecret extends $tea.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
  appSecretId?: string;
  /**
   * @remarks
   * The content of the application secret. This value can be used as the client secret for open authorization.
   * 
   * @example
   * ai78ZmmxnlUG1jXlBZRDFKos9DIjY4m17Q7dCpMwn1rqXsTGb1X1XmrmveMp****
   */
  appSecretValue?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-26T02:52:31Z
   */
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
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtain the OpenID of the user. This is the default permission that you cannot remove.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * openid
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the permission is automatically selected by default when you install the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * `openid` is required by default.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      required: 'boolean',
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
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
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
  /**
   * @remarks
   * The validity period of the access token. Unit: seconds.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the application belongs.
   * 
   * @example
   * 177242285274****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  delegatedScope?: CreateApplicationResponseBodyApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * myapp
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by using other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * The callback URLs.
   */
  redirectUris?: CreateApplicationResponseBodyApplicationRedirectUris;
  /**
   * @remarks
   * The validity period of the refresh token. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * Indicates whether a secret is required.
   * 
   * @example
   * true
   */
  secretRequired?: boolean;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
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
   * 2020-10-19T16:15:17Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * 740317625433843****
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
   * The update time.
   * 
   * @example
   * 2020-10-19T16:15:17Z
   */
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
  /**
   * @remarks
   * Indicates whether MFA must be enabled.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must reset the password at the next logon.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of password-based logon.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-14T03:47:51Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client.
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is an OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate.
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636613763000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 6
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the IdP.
   * 
   * @example
   * acs:ram::177242285274****:saml-provider/test-provider
   */
  arn?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-22T02:37:05Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-22T02:51:20Z
   */
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
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.
   * 
   * @example
   * alice
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * operator
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * alice
   */
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user was created.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The last time when the RAM user logged on to the Alibaba Cloud Management Console.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The source of the RAM user. Valid values:
   * 
   * *   Manual: The RAM user is manually created in the RAM console.
   * *   SCIM: The RAM user is mapped by using System for Cross-domain Identity Management (SCIM).
   * *   CloudSSO: The RAM user is mapped from a CloudSSO user.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The tag value.
   */
  tags?: CreateUserResponseBodyUserTags;
  /**
   * @remarks
   * The time when the information about the RAM user was updated.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The key of the MFA device.
   * 
   * @example
   * LD3CJ23Z2VGEX6R7ZTQCOA4XL2KODS5PKH7442NLKYX2PVHSHYB7UT3TS5HA****
   */
  base32StringSeed?: string;
  /**
   * @remarks
   * The Base64-encoded QR code of the key.
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
   * acs:ram::177242285274****:mfa/device001
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

export class GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed extends $tea.Model {
  /**
   * @remarks
   * The time when the AccessKey pair was used for the last time.
   * 
   * @example
   * 2020-10-16T01:37:37Z
   */
  lastUsedDate?: string;
  /**
   * @remarks
   * The Alibaba Cloud service that was last accessed by using the AccessKey pair.
   * 
   * @example
   * Ram
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      lastUsedDate: 'LastUsedDate',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastUsedDate: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo extends $tea.Model {
  /**
   * @remarks
   * Indicates whether MFA is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  bindMfa?: boolean;
  /**
   * @remarks
   * The number of old AccessKey pairs for the Alibaba Cloud account.
   * 
   * @example
   * 0
   */
  oldAkNum?: number;
  /**
   * @remarks
   * The number of AccessKey pairs for the Alibaba Cloud account.
   * 
   * @example
   * 1
   */
  rootWithAccessKey?: number;
  /**
   * @remarks
   * The number of RAM users within the Alibaba Cloud account.
   * 
   * @example
   * 9
   */
  subUser?: number;
  /**
   * @remarks
   * The number of RAM users that have MFA devices bound.
   * 
   * @example
   * 0
   */
  subUserBindMfa?: number;
  /**
   * @remarks
   * The complexity level of the password for the RAM user. Valid values:
   * 
   * *   low
   * *   mid
   * *   high
   * 
   * @example
   * low
   */
  subUserPwdLevel?: string;
  /**
   * @remarks
   * The number of RAM users that use the old AccessKey pairs.
   * 
   * @example
   * 0
   */
  subUserWithOldAccessKey?: number;
  /**
   * @remarks
   * The number of RAM users that have no AccessKey pairs.
   * 
   * @example
   * 0
   */
  subUserWithUnusedAccessKey?: number;
  /**
   * @remarks
   * The number of AccessKey pairs that are not used for the Alibaba Cloud account.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The information of the security report for the Alibaba Cloud account.
   */
  accountSecurityPracticeUserInfo?: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo;
  /**
   * @remarks
   * The security score of the Alibaba Cloud account.
   * 
   * @example
   * 63
   */
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
  /**
   * @remarks
   * The maximum number of AccessKey pairs that a RAM user can have.
   * 
   * @example
   * 2
   */
  accessKeysPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be added to a RAM user group.
   * 
   * @example
   * 5
   */
  attachedPoliciesPerGroupQuota?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be added to a RAM role.
   * 
   * @example
   * 5
   */
  attachedPoliciesPerRoleQuota?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be added to a RAM user.
   * 
   * @example
   * 10
   */
  attachedPoliciesPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of system policies that can be added to a RAM user group.
   * 
   * @example
   * 20
   */
  attachedSystemPoliciesPerGroupQuota?: number;
  /**
   * @remarks
   * The maximum number of system policies that can be added to a RAM role.
   * 
   * @example
   * 20
   */
  attachedSystemPoliciesPerRoleQuota?: number;
  /**
   * @remarks
   * The maximum number of system policies that can be added to a RAM user.
   * 
   * @example
   * 20
   */
  attachedSystemPoliciesPerUserQuota?: number;
  conditionsPerAKPolicyQuota?: number;
  /**
   * @remarks
   * The number of RAM user groups.
   * 
   * @example
   * 7
   */
  groups?: number;
  /**
   * @remarks
   * The maximum number of RAM user groups to which a RAM user can be added.
   * 
   * @example
   * 5
   */
  groupsPerUserQuota?: number;
  /**
   * @remarks
   * The maximum number of RAM user groups that can be created.
   * 
   * @example
   * 50
   */
  groupsQuota?: number;
  IPItemsPerAKPolicyQuota?: number;
  /**
   * @remarks
   * The number of virtual multi-factor authentication (MFA) devices.
   * 
   * @example
   * 13
   */
  MFADevices?: number;
  /**
   * @remarks
   * The number of virtual MFA devices in use.
   * 
   * @example
   * 2
   */
  MFADevicesInUse?: number;
  /**
   * @remarks
   * The number of custom policies.
   * 
   * @example
   * 13
   */
  policies?: number;
  /**
   * @remarks
   * The maximum number of custom policies that can be created.
   * 
   * @example
   * 1500
   */
  policiesQuota?: number;
  /**
   * @remarks
   * The maximum length of the policy content.
   * 
   * @example
   * 2048
   */
  policySizeQuota?: number;
  /**
   * @remarks
   * The number of RAM roles.
   * 
   * @example
   * 19
   */
  roles?: number;
  /**
   * @remarks
   * The maximum number of RAM roles that can be created.
   * 
   * @example
   * 1000
   */
  rolesQuota?: number;
  /**
   * @remarks
   * The number of RAM users.
   * 
   * @example
   * 9
   */
  users?: number;
  /**
   * @remarks
   * The maximum number of RAM users that can be created.
   * 
   * @example
   * 1000
   */
  usersQuota?: number;
  /**
   * @remarks
   * The maximum number of policy versions.
   * 
   * @example
   * 5
   */
  versionsPerPolicyQuota?: number;
  /**
   * @remarks
   * The maximum number of virtual MFA devices that can be created.
   * 
   * @example
   * 1000
   */
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
      conditionsPerAKPolicyQuota: 'ConditionsPerAKPolicyQuota',
      groups: 'Groups',
      groupsPerUserQuota: 'GroupsPerUserQuota',
      groupsQuota: 'GroupsQuota',
      IPItemsPerAKPolicyQuota: 'IPItemsPerAKPolicyQuota',
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
      conditionsPerAKPolicyQuota: 'number',
      groups: 'number',
      groupsPerUserQuota: 'number',
      groupsQuota: 'number',
      IPItemsPerAKPolicyQuota: 'number',
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
  appSecretId?: string;
  /**
   * @remarks
   * The content of the application secret.
   * 
   * @example
   * ai78ZmmxnlUG1jXlBZRDFKos9DIjY4m17Q7dCpMwn1rqXsTGb1X1XmrmveMp****
   */
  appSecretValue?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-26T02:52:31Z
   */
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
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtain the OpenID of the user. This is the default permission that you cannot remove.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * openid
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the permission is automatically selected by default when you install the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * `openid` is required by default.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      required: 'boolean',
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
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
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
  /**
   * @remarks
   * The validity period of the access token. Unit: seconds.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the application belongs.
   * 
   * @example
   * 177242285274****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   WebApp: a web application.
   * *   NativeApp: a native application that runs on an operating system, such as a desktop or mobile operating system.
   * *   ServerApp: an application that can access Alibaba Cloud services without the need for user logon. Only applications that synchronize user information based on the System for Cross-domain Identity Management (SCIM) protocol are supported.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  delegatedScope?: GetApplicationResponseBodyApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * myapp
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by using other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * The callback URL.
   */
  redirectUris?: GetApplicationResponseBodyApplicationRedirectUris;
  /**
   * @remarks
   * The validity period of the refresh token. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * Indicates whether a secret is required.
   * 
   * @example
   * true
   */
  secretRequired?: boolean;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
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
   * 2020-10-19T16:15:17Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * 740317625433843****
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
   * The update time.
   * 
   * @example
   * 2020-10-19T16:15:17Z
   */
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
  autoDisableLoginStatus?: string;
  /**
   * @remarks
   * The time of the most recent logon. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-14T07:25:25Z
   */
  lastLoginTime?: string;
  /**
   * @remarks
   * Indicates whether multi-factor authentication (MFA) must be enabled. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user is required to reset the password upon the next logon. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * Indicates whether console logon is enabled. Valid values:
   * 
   * *   Active: enabled.
   * *   Inactive: disabled.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-14T06:56:45Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisableLoginStatus: 'AutoDisableLoginStatus',
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
      autoDisableLoginStatus: 'string',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * Indicates whether to disable logon after the password expires.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The maximum number of password retries.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The validity period of the password.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of unique characters in the password.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * The minimum required number of characters in a password.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Indicates whether to exclude the username from the password.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether the password must contain lowercase letters.
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain digits.
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain special characters.
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain uppercase letters.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the IdP.
   * 
   * @example
   * acs:ram::177242285274****:saml-provider/test-provider
   */
  arn?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-22T02:37:05Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The metadata file, which is Base64 encoded.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  encodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-22T02:51:20Z
   */
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
  /**
   * @remarks
   * Indicates whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true
   * *   false
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
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Indicates whether RAM users can remember the multi-factor authentication (MFA) devices for seven days. Valid values:
   * 
   * *   true
   * *   false
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
   * The validity period of the logon session of RAM users. Unit: hours.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  /**
   * @remarks
   * Indicates whether MFA is required for all RAM users when they log on to the Alibaba Cloud Management Console. Valid values:
   * 
   * *   mandatory: MFA is required for all RAM users. If you use EnforceMFAForLogin, set the value to true.
   * *   independent (default): User-specific settings are applied. If you use EnforceMFAForLogin, set the value to false.
   * *   adaptive: MFA is required only for RAM users who initiated unusual logons.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * Indicates whether to enable MFA for RAM users who initiated unusual logons. Valid values:
   * 
   * *   autonomous (default): yes. MFA is prompted for RAM users who initiated unusual logons. However, the RAM users are allowed to skip MFA.
   * *   enforceVerify: MFA is prompted for RAM users who initiated unusual logons and the RAM users cannot skip MFA.
   * 
   * @example
   * autonomous
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
      MFAOperationForLogin: 'MFAOperationForLogin',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
      MFAOperationForLogin: 'string',
      operationForRiskLogin: 'string',
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
   * *   true
   * *   false
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

export class GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays extends $tea.Model {
  maxIdleDaysForAccessKeys?: number;
  maxIdleDaysForUsers?: number;
  static names(): { [key: string]: string } {
    return {
      maxIdleDaysForAccessKeys: 'MaxIdleDaysForAccessKeys',
      maxIdleDaysForUsers: 'MaxIdleDaysForUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIdleDaysForAccessKeys: 'number',
      maxIdleDaysForUsers: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their personal DingTalk accounts, such as binding and unbinding of the accounts. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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

export class GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference extends $tea.Model {
  /**
   * @remarks
   * The MFA methods.
   */
  verificationTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      verificationTypes: 'VerificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationTypes: { 'type': 'array', 'itemType': 'string' },
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
   * The logon preference.
   */
  loginProfilePreference?: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference;
  /**
   * @remarks
   * The MFA preference.
   */
  MFAPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference;
  maxIdleDays?: GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays;
  /**
   * @remarks
   * The personal information preference.
   */
  personalInfoPreference?: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
  /**
   * @remarks
   * The MFA method preference.
   */
  verificationPreference?: GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      maxIdleDays: 'MaxIdleDays',
      personalInfoPreference: 'PersonalInfoPreference',
      verificationPreference: 'VerificationPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: GetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: GetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: GetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      maxIdleDays: GetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays,
      personalInfoPreference: GetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
      verificationPreference: GetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * operator
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * alice
   */
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user was created.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The last time when the RAM user logged on to the Alibaba Cloud Management Console.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The source of the RAM user. Valid value:
   * 
   * *   Manual: The RAM user is manually created in the RAM console.
   * *   SCIM: The RAM user is mapped by using System for Cross-domain Identity Management (SCIM).
   * *   CloudSSO: The RAM user is mapped from a CloudSSO user.
   * 
   * @example
   * CloudSSO
   */
  provisionType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetUserResponseBodyUserTags;
  /**
   * @remarks
   * The time when the information about the RAM user was updated.
   * 
   * @example
   * 2020-10-13T07:39:22Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::177242285274****:mfa/device001
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

export class GetUserSsoSettingsResponseBodyUserSsoSettings extends $tea.Model {
  /**
   * @remarks
   * The auxiliary domain name.
   * 
   * @example
   * example.com
   */
  auxiliaryDomain?: string;
  /**
   * @remarks
   * The metadata file, which is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Indicates whether user-based SSO is enabled.
   * 
   * @example
   * false
   */
  ssoEnabled?: boolean;
  ssoLoginWithDomain?: boolean;
  static names(): { [key: string]: string } {
    return {
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
      ssoLoginWithDomain: 'SsoLoginWithDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryDomain: 'string',
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
      ssoLoginWithDomain: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVerificationInfoResponseBodySecurityEmailDevice extends $tea.Model {
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVerificationInfoResponseBodySecurityPhoneDevice extends $tea.Model {
  /**
   * @example
   * 86
   */
  areaCode?: string;
  /**
   * @example
   * 13900001234
   */
  phoneNumber?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      phoneNumber: 'string',
      status: 'string',
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
   * 2020-10-13T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values:
   * 
   * *   Active
   * *   Inactive
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was updated.
   * 
   * @example
   * 2020-10-13T12:33:18Z
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
  appSecretId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-26T03:18:39Z
   */
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
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtain the OpenID of the user. This is the default permission that you cannot remove.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * openid
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the permission is automatically selected by default when you install the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * `openid` is required by default.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      required: 'boolean',
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
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
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
  /**
   * @remarks
   * The validity period of the access token. Unit: seconds.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the application belongs.
   * 
   * @example
   * 177242285274****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 441442900344560****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * *   WebApp: a web application.
   * *   NativeApp: a native application that runs on an operating system, such as a desktop or mobile operating system.
   * *   ServerApp: an application that can access Alibaba Cloud services without the need for user logon. Only applications that synchronize user information based on the System for Cross-domain Identity Management (SCIM) protocol are supported.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-23T09:33:22Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  delegatedScope?: ListApplicationsResponseBodyApplicationsApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * myapp
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by using other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * The callback URLs.
   */
  redirectUris?: ListApplicationsResponseBodyApplicationsApplicationRedirectUris;
  /**
   * @remarks
   * The validity period of the refresh token. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * Indicates whether a secret is required.
   * 
   * @example
   * true
   */
  secretRequired?: boolean;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-23T09:33:22Z
   */
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
   * 2020-10-19T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * 740317625433843****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * dev-team
   */
  groupName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-19T12:33:18Z
   */
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test-Team
   */
  comments?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * 740317625433843****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the RAM user was added.
   * 
   * @example
   * 2020-10-20T06:57:00Z
   */
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client, If you want to specify multiple client IDs, separate the client IDs with commas (,).
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * The description of the permission scope.
   * 
   * @example
   * Obtain the OpenID of the user. This is the default permission that you cannot remove.
   */
  description?: string;
  /**
   * @remarks
   * The name of the scope.
   * 
   * @example
   * openid
   */
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the IdP.
   * 
   * @example
   * acs:ram::177242285274****:saml-provider/test-provider
   */
  arn?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-22T06:26:15Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a provider.
   */
  description?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-22T06:26:15Z
   */
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

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * alice
   */
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 20732900249392****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   user: a RAM user
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * operator
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * alice
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserBasicInfosRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * alice
   */
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

export class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo extends $tea.Model {
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  status?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      status: 'Status',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      status: 'string',
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
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. N must be consecutive.
   * 
   * @example
   * alice
   */
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
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * oparator
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag
   * 
   * @example
   * alice
   */
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
  /**
   * @remarks
   * The description.
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
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * >  This parameter applies only to the Alibaba Cloud China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The timestamp when the RAM user last logged on to the console.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * >  This parameter applies only to the Alibaba Cloud China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The source of the RAM user. Valid values:
   * 
   * *   Manual: The RAM user is manually created in the RAM console.
   * *   SCIM: The RAM user is mapped by using System for Cross-domain Identity Management (SCIM).
   * *   CloudSSO: The RAM user is mapped from a CloudSSO user.
   * 
   * @example
   * CloudSSO
   */
  provisionType?: string;
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListUsersResponseBodyUsersUserTags;
  /**
   * @remarks
   * The point in time when the information about the RAM user was last modified. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-13T09:19:49Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
      status: 'Status',
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
      status: 'string',
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
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the RAM user was added to the RAM user group. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-20T06:57:00Z
   */
  joinDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@177242285274****.onaliyun.com
   */
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
  /**
   * @remarks
   * The time when the MFA device was activated.
   * 
   * @example
   * 2020-10-16T06:02:09Z
   */
  activateDate?: string;
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
   * The information of the RAM user that has an MFA device bound.
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

export class RemoveClientIdFromOIDCProviderResponseBodyOIDCProvider extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 598469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 0oa4u6l8x5WoaVbd****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 5938fd4d98bab03faadb97b34396831e3780****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 12
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * Indicates whether to disable logon after the password expires.
   * 
   * @example
   * false
   */
  hardExpire?: boolean;
  /**
   * @remarks
   * The maximum number of password retries.
   * 
   * @example
   * 0
   */
  maxLoginAttemps?: number;
  /**
   * @remarks
   * The validity period of the password.
   * 
   * @example
   * 0
   */
  maxPasswordAge?: number;
  /**
   * @remarks
   * The minimum number of unique characters in the password.
   * 
   * @example
   * 0
   */
  minimumPasswordDifferentCharacter?: number;
  /**
   * @remarks
   * The minimum number of characters in the password.
   * 
   * @example
   * 8
   */
  minimumPasswordLength?: number;
  /**
   * @remarks
   * Indicates whether to exclude the username from the password.
   * 
   * @example
   * false
   */
  passwordNotContainUserName?: boolean;
  /**
   * @remarks
   * The policy for password history check.
   * 
   * @example
   * 0
   */
  passwordReusePrevention?: number;
  /**
   * @remarks
   * Indicates whether the password must contain lowercase letters.
   * 
   * @example
   * false
   */
  requireLowercaseCharacters?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain digits.
   * 
   * @example
   * false
   */
  requireNumbers?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain special characters.
   * 
   * @example
   * false
   */
  requireSymbols?: boolean;
  /**
   * @remarks
   * Indicates whether the password must contain uppercase letters.
   * 
   * @example
   * false
   */
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
   * Indicates whether RAM users can remember the MFA devices for seven days.
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
  /**
   * @remarks
   * Indicates whether MFA is required for all RAM users when they log on to the Alibaba Cloud Management Console.
   * 
   * @example
   * adaptive
   */
  MFAOperationForLogin?: string;
  /**
   * @remarks
   * Indicates whether to enable MFA for RAM users who initiated unusual logons.
   * 
   * @example
   * autonomous
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
      MFAOperationForLogin: 'MFAOperationForLogin',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
      MFAOperationForLogin: 'string',
      operationForRiskLogin: 'string',
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays extends $tea.Model {
  maxIdleDaysForAccessKeys?: number;
  maxIdleDaysForUsers?: number;
  static names(): { [key: string]: string } {
    return {
      maxIdleDaysForAccessKeys: 'MaxIdleDaysForAccessKeys',
      maxIdleDaysForUsers: 'MaxIdleDaysForUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxIdleDaysForAccessKeys: 'number',
      maxIdleDaysForUsers: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference extends $tea.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their personal DingTalk accounts, such as binding and unbinding of the accounts.
   * 
   * @example
   * true
   */
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

export class SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference extends $tea.Model {
  /**
   * @remarks
   * The MFA methods.
   */
  verificationTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      verificationTypes: 'VerificationTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationTypes: { 'type': 'array', 'itemType': 'string' },
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
  maxIdleDays?: SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays;
  /**
   * @remarks
   * The personal information preference.
   */
  personalInfoPreference?: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference;
  /**
   * @remarks
   * The MFA method preference.
   */
  verificationPreference?: SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference;
  static names(): { [key: string]: string } {
    return {
      accessKeyPreference: 'AccessKeyPreference',
      loginProfilePreference: 'LoginProfilePreference',
      MFAPreference: 'MFAPreference',
      maxIdleDays: 'MaxIdleDays',
      personalInfoPreference: 'PersonalInfoPreference',
      verificationPreference: 'VerificationPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyPreference: SetSecurityPreferenceResponseBodySecurityPreferenceAccessKeyPreference,
      loginProfilePreference: SetSecurityPreferenceResponseBodySecurityPreferenceLoginProfilePreference,
      MFAPreference: SetSecurityPreferenceResponseBodySecurityPreferenceMFAPreference,
      maxIdleDays: SetSecurityPreferenceResponseBodySecurityPreferenceMaxIdleDays,
      personalInfoPreference: SetSecurityPreferenceResponseBodySecurityPreferencePersonalInfoPreference,
      verificationPreference: SetSecurityPreferenceResponseBodySecurityPreferenceVerificationPreference,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserSsoSettingsResponseBodyUserSsoSettings extends $tea.Model {
  /**
   * @remarks
   * The auxiliary domain name.
   * 
   * @example
   * example.com
   */
  auxiliaryDomain?: string;
  /**
   * @remarks
   * The metadata file, which is Base64-encoded.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  metadataDocument?: string;
  /**
   * @remarks
   * Indicates whether user-based SSO is enabled.
   * 
   * @example
   * true
   */
  ssoEnabled?: boolean;
  ssoLoginWithDomain?: boolean;
  static names(): { [key: string]: string } {
    return {
      auxiliaryDomain: 'AuxiliaryDomain',
      metadataDocument: 'MetadataDocument',
      ssoEnabled: 'SsoEnabled',
      ssoLoginWithDomain: 'SsoLoginWithDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxiliaryDomain: 'string',
      metadataDocument: 'string',
      ssoEnabled: 'boolean',
      ssoLoginWithDomain: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * Valid values of N: 1 to 20. You cannot specify empty strings as tag keys. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * operator
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be a up to128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * alice
   */
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

export class UnbindMFADeviceResponseBodyMFADevice extends $tea.Model {
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::151298381312****:mfa/device001
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

export class UpdateApplicationResponseBodyApplicationDelegatedScopePredefinedScopesPredefinedScope extends $tea.Model {
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtain the OpenID of the user. This is the default permission that you cannot remove.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * openid
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the permission is automatically selected by default when you install the application. Valid values:
   * 
   * *   true
   * *   false
   * 
   * `openid` is required by default.
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      required: 'boolean',
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
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
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
  /**
   * @remarks
   * The validity period of the access token. Unit: seconds.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the application belongs.
   * 
   * @example
   * 177242285274****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted on the application.
   */
  delegatedScope?: UpdateApplicationResponseBodyApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the application.
   * 
   * @example
   * NewApp
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by using other Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * The callback URLs.
   */
  redirectUris?: UpdateApplicationResponseBodyApplicationRedirectUris;
  /**
   * @remarks
   * The validity period of the refresh token. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * Indicates whether a secret is required.
   * 
   * @example
   * true
   */
  secretRequired?: boolean;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-23T08:06:57Z
   */
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test-Team
   */
  comments?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-19T16:15:17Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * 740317625433843****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-20T03:44:27Z
   */
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
  autoDisableLoginStatus?: string;
  /**
   * @remarks
   * Indicates whether MFA must be enabled.
   * 
   * @example
   * false
   */
  MFABindRequired?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM user must reset the password at the next logon.
   * 
   * @example
   * false
   */
  passwordResetRequired?: boolean;
  /**
   * @remarks
   * The status of password-based logon.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-14T07:48:41Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * test@example11.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDisableLoginStatus: 'AutoDisableLoginStatus',
      MFABindRequired: 'MFABindRequired',
      passwordResetRequired: 'PasswordResetRequired',
      status: 'Status',
      updateDate: 'UpdateDate',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDisableLoginStatus: 'string',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * @example
   * acs:ram::177242285274****:oidc-provider/TestOIDCProvider
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).
   * 
   * @example
   * 498469743454717****
   */
  clientIds?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-11T06:56:03Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the OIDC IdP.
   * 
   * @example
   * This is a new OIDC Provider.
   */
  description?: string;
  /**
   * @remarks
   * The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).
   * 
   * @example
   * 902ef2deeb3c5b13ea4c3d5193629309e231****
   */
  fingerprints?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was created.
   * 
   * @example
   * 1636613763000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the OIDC IdP was modified.
   * 
   * @example
   * 1636706309000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
   * 
   * @example
   * 6
   */
  issuanceLimitTime?: number;
  /**
   * @remarks
   * The URL of the issuer.
   * 
   * @example
   * https://dev-xxxxxx.okta.com
   */
  issuerUrl?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  /**
   * @remarks
   * The time when the OIDC IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-12T08:38:29Z
   */
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
      issuanceLimitTime: 'IssuanceLimitTime',
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
      issuanceLimitTime: 'number',
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the IdP.
   * 
   * @example
   * acs:ram::177242285274****:saml-provider/test-provider
   */
  arn?: string;
  /**
   * @remarks
   * The point in time at which the IdP was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-22T02:37:05Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the IdP.
   * 
   * @example
   * This is a new provider.
   */
  description?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The point in time at which the information about the IdP was modified. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-22T02:51:20Z
   */
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
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user was created.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user.
   * 
   * @example
   * new
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The last time when the RAM user logged on to the Alibaba Cloud Management Console.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the RAM user.
   * 
   * > This parameter is valid only on the China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The source of the RAM user. Valid values:
   * 
   * - Manual: The RAM user is manually created in the RAM console.
   * - SCIM: The RAM user is mapped by using System for Cross-domain Identity Management (SCIM).
   * - CloudSSO: The RAM user is mapped from a CloudSSO user.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when the information about the RAM user was updated.
   * 
   * @example
   * 2020-10-13T09:19:49Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the RAM user.
   * 
   * @example
   * new@example.onaliyun.com
   */
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

  /**
   * Adds a client ID to an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @param request - AddClientIdToOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddClientIdToOIDCProviderResponse
   */
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

  /**
   * Adds a client ID to an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @param request - AddClientIdToOIDCProviderRequest
   * @returns AddClientIdToOIDCProviderResponse
   */
  async addClientIdToOIDCProvider(request: AddClientIdToOIDCProviderRequest): Promise<AddClientIdToOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClientIdToOIDCProviderWithOptions(request, runtime);
  }

  /**
   * Adds a fingerprint to an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to add the fingerprint `902ef2deeb3c5b13ea4c3d5193629309e231****` to the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - AddFingerprintToOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFingerprintToOIDCProviderResponse
   */
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

  /**
   * Adds a fingerprint to an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to add the fingerprint `902ef2deeb3c5b13ea4c3d5193629309e231****` to the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - AddFingerprintToOIDCProviderRequest
   * @returns AddFingerprintToOIDCProviderResponse
   */
  async addFingerprintToOIDCProvider(request: AddFingerprintToOIDCProviderRequest): Promise<AddFingerprintToOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addFingerprintToOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 将RAM用户添加到指定的用户组
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

  /**
   * 将RAM用户添加到指定的用户组
   * 
   * @param request - AddUserToGroupRequest
   * @returns AddUserToGroupResponse
   */
  async addUserToGroup(request: AddUserToGroupRequest): Promise<AddUserToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToGroupWithOptions(request, runtime);
  }

  /**
   * Binds a multi-factor authentication (MFA) device to a RAM user.
   * 
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

  /**
   * Binds a multi-factor authentication (MFA) device to a RAM user.
   * 
   * @param request - BindMFADeviceRequest
   * @returns BindMFADeviceResponse
   */
  async bindMFADevice(request: BindMFADeviceRequest): Promise<BindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindMFADeviceWithOptions(request, runtime);
  }

  /**
   * 修改RAM用户的登录密码
   * 
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

  /**
   * 修改RAM用户的登录密码
   * 
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
   * 创建主账号或RAM用户访问密钥
   * 
   * @param request - CreateAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccessKeyResponse
   */
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

  /**
   * 创建主账号或RAM用户访问密钥
   * 
   * @param request - CreateAccessKeyRequest
   * @returns CreateAccessKeyResponse
   */
  async createAccessKey(request: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccessKeyWithOptions(request, runtime);
  }

  /**
   * Creates an application secret for the specified application.
   * 
   * @param request - CreateAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppSecretResponse
   */
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

  /**
   * Creates an application secret for the specified application.
   * 
   * @param request - CreateAppSecretRequest
   * @returns CreateAppSecretResponse
   */
  async createAppSecret(request: CreateAppSecretRequest): Promise<CreateAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppSecretWithOptions(request, runtime);
  }

  /**
   * Creates an application.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
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

    if (!Util.isUnset(request.requiredScopes)) {
      query["RequiredScopes"] = request.requiredScopes;
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

  /**
   * Creates an application.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
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
   * 开启指定RAM用户的控制台登录
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

  /**
   * 开启指定RAM用户的控制台登录
   * 
   * @param request - CreateLoginProfileRequest
   * @returns CreateLoginProfileResponse
   */
  async createLoginProfile(request: CreateLoginProfileRequest): Promise<CreateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoginProfileWithOptions(request, runtime);
  }

  /**
   * Creates an OpenID Connect (OIDC) identity provider (IdP) to configure a trust relationship between Alibaba Cloud and an external IdP. This topic provides an example on how to create an IdP named TestOIDCProvider to configure a trust relationship between the external IdP Okta and Alibaba Cloud.
   * 
   * @remarks
   * ### Prerequisites
   * Before you call this operation, make sure that the information such as the URL of the issuer, the fingerprints of HTTPS certificates, and the client IDs are obtained from an external (IdP, such as Google G Suite or Okta.
   * ### Limits
   * *   You can create a maximum of 100 OIDC IdPs in an Alibaba Cloud account.
   * *   You can add a maximum of 20 client IDs to an OIDC IdP.
   * *   You can add a maximum of five fingerprints to an OIDC IdP.
   * ###
   * This topic provides an example on how to create an IdP named `TestOIDCProvider` to configure a trust relationship between the external IdP and Alibaba Cloud.
   * 
   * @param request - CreateOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOIDCProviderResponse
   */
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

    if (!Util.isUnset(request.issuanceLimitTime)) {
      query["IssuanceLimitTime"] = request.issuanceLimitTime;
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

  /**
   * Creates an OpenID Connect (OIDC) identity provider (IdP) to configure a trust relationship between Alibaba Cloud and an external IdP. This topic provides an example on how to create an IdP named TestOIDCProvider to configure a trust relationship between the external IdP Okta and Alibaba Cloud.
   * 
   * @remarks
   * ### Prerequisites
   * Before you call this operation, make sure that the information such as the URL of the issuer, the fingerprints of HTTPS certificates, and the client IDs are obtained from an external (IdP, such as Google G Suite or Okta.
   * ### Limits
   * *   You can create a maximum of 100 OIDC IdPs in an Alibaba Cloud account.
   * *   You can add a maximum of 20 client IDs to an OIDC IdP.
   * *   You can add a maximum of five fingerprints to an OIDC IdP.
   * ###
   * This topic provides an example on how to create an IdP named `TestOIDCProvider` to configure a trust relationship between the external IdP and Alibaba Cloud.
   * 
   * @param request - CreateOIDCProviderRequest
   * @returns CreateOIDCProviderResponse
   */
  async createOIDCProvider(request: CreateOIDCProviderRequest): Promise<CreateOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 创建角色SSO身份提供商
   * 
   * @param request - CreateSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSAMLProviderResponse
   */
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

  /**
   * 创建角色SSO身份提供商
   * 
   * @param request - CreateSAMLProviderRequest
   * @returns CreateSAMLProviderResponse
   */
  async createSAMLProvider(request: CreateSAMLProviderRequest): Promise<CreateSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSAMLProviderWithOptions(request, runtime);
  }

  /**
   * Creates a RAM user.
   * 
   * @remarks
   * This topic provides an example on how to create a RAM user named `test`.
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

  /**
   * Creates a RAM user.
   * 
   * @remarks
   * This topic provides an example on how to create a RAM user named `test`.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * 创建多因素认证设备
   * 
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

  /**
   * 创建多因素认证设备
   * 
   * @param request - CreateVirtualMFADeviceRequest
   * @returns CreateVirtualMFADeviceResponse
   */
  async createVirtualMFADevice(request: CreateVirtualMFADeviceRequest): Promise<CreateVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * 删除用户的访问密钥
   * 
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

  /**
   * 删除用户的访问密钥
   * 
   * @param request - DeleteAccessKeyRequest
   * @returns DeleteAccessKeyResponse
   */
  async deleteAccessKey(request: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccessKeyWithOptions(request, runtime);
  }

  /**
   * Delete the application secret for the specified application.
   * 
   * @param request - DeleteAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppSecretResponse
   */
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

  /**
   * Delete the application secret for the specified application.
   * 
   * @param request - DeleteAppSecretRequest
   * @returns DeleteAppSecretResponse
   */
  async deleteAppSecret(request: DeleteAppSecretRequest): Promise<DeleteAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppSecretWithOptions(request, runtime);
  }

  /**
   * Deletes an application.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
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

  /**
   * Deletes an application.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * 删除指定的用户组
   * 
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

  /**
   * 删除指定的用户组
   * 
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
   * 关闭指定RAM用户的控制台登录
   * 
   * @param request - DeleteLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoginProfileResponse
   */
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

  /**
   * 关闭指定RAM用户的控制台登录
   * 
   * @param request - DeleteLoginProfileRequest
   * @returns DeleteLoginProfileResponse
   */
  async deleteLoginProfile(request: DeleteLoginProfileRequest): Promise<DeleteLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginProfileWithOptions(request, runtime);
  }

  /**
   * Deletes an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to remove the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - DeleteOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOIDCProviderResponse
   */
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

  /**
   * Deletes an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to remove the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - DeleteOIDCProviderRequest
   * @returns DeleteOIDCProviderResponse
   */
  async deleteOIDCProvider(request: DeleteOIDCProviderRequest): Promise<DeleteOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 删除指定的角色SSO身份提供商
   * 
   * @param request - DeleteSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSAMLProviderResponse
   */
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

  /**
   * 删除指定的角色SSO身份提供商
   * 
   * @param request - DeleteSAMLProviderRequest
   * @returns DeleteSAMLProviderResponse
   */
  async deleteSAMLProvider(request: DeleteSAMLProviderRequest): Promise<DeleteSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSAMLProviderWithOptions(request, runtime);
  }

  /**
   * 删除RAM用户
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
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

  /**
   * 删除RAM用户
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * 删除多因素认证设备
   * 
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

  /**
   * 删除多因素认证设备
   * 
   * @param request - DeleteVirtualMFADeviceRequest
   * @returns DeleteVirtualMFADeviceResponse
   */
  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  /**
   * 解绑并删除多因素认证设备
   * 
   * @param request - DisableVirtualMFARequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableVirtualMFAResponse
   */
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

  /**
   * 解绑并删除多因素认证设备
   * 
   * @param request - DisableVirtualMFARequest
   * @returns DisableVirtualMFAResponse
   */
  async disableVirtualMFA(request: DisableVirtualMFARequest): Promise<DisableVirtualMFAResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableVirtualMFAWithOptions(request, runtime);
  }

  /**
   * Generates a user credential report.
   * 
   * @param request - GenerateCredentialReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCredentialReportResponse
   */
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

  /**
   * Generates a user credential report.
   * @returns GenerateCredentialReportResponse
   */
  async generateCredentialReport(): Promise<GenerateCredentialReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateCredentialReportWithOptions(runtime);
  }

  /**
   * Queries the time when an AccessKey pair was used for the last time.
   * 
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

  /**
   * Queries the time when an AccessKey pair was used for the last time.
   * 
   * @param request - GetAccessKeyLastUsedRequest
   * @returns GetAccessKeyLastUsedResponse
   */
  async getAccessKeyLastUsed(request: GetAccessKeyLastUsedRequest): Promise<GetAccessKeyLastUsedResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessKeyLastUsedWithOptions(request, runtime);
  }

  /**
   * 查询主账号多因素认证设备信息
   * 
   * @param request - GetAccountMFAInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountMFAInfoResponse
   */
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

  /**
   * 查询主账号多因素认证设备信息
   * @returns GetAccountMFAInfoResponse
   */
  async getAccountMFAInfo(): Promise<GetAccountMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountMFAInfoWithOptions(runtime);
  }

  /**
   * 查询阿里云账号的安全报告
   * 
   * @param request - GetAccountSecurityPracticeReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountSecurityPracticeReportResponse
   */
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

  /**
   * 查询阿里云账号的安全报告
   * @returns GetAccountSecurityPracticeReportResponse
   */
  async getAccountSecurityPracticeReport(): Promise<GetAccountSecurityPracticeReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSecurityPracticeReportWithOptions(runtime);
  }

  /**
   * 查询主账号概览信息
   * 
   * @param request - GetAccountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountSummaryResponse
   */
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

  /**
   * 查询主账号概览信息
   * @returns GetAccountSummaryResponse
   */
  async getAccountSummary(): Promise<GetAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountSummaryWithOptions(runtime);
  }

  /**
   * Queries the details of an application secret.
   * 
   * @param request - GetAppSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppSecretResponse
   */
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

  /**
   * Queries the details of an application secret.
   * 
   * @param request - GetAppSecretRequest
   * @returns GetAppSecretResponse
   */
  async getAppSecret(request: GetAppSecretRequest): Promise<GetAppSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppSecretWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information about an application.
   * 
   * @remarks
   * This topic provides an example on how to query the configurations of an application named `472457090344041****`.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
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

  /**
   * Queries the configuration information about an application.
   * 
   * @remarks
   * This topic provides an example on how to query the configurations of an application named `472457090344041****`.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the user credential reports of an Alibaba Cloud account.
   * 
   * @param request - GetCredentialReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCredentialReportResponse
   */
  async getCredentialReportWithOptions(request: GetCredentialReportRequest, runtime: $Util.RuntimeOptions): Promise<GetCredentialReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
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

  /**
   * Queries the user credential reports of an Alibaba Cloud account.
   * 
   * @param request - GetCredentialReportRequest
   * @returns GetCredentialReportResponse
   */
  async getCredentialReport(request: GetCredentialReportRequest): Promise<GetCredentialReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCredentialReportWithOptions(request, runtime);
  }

  /**
   * Queries the default domain name of an Alibaba Cloud account.
   * 
   * @param request - GetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultDomainResponse
   */
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

  /**
   * Queries the default domain name of an Alibaba Cloud account.
   * @returns GetDefaultDomainResponse
   */
  async getDefaultDomain(): Promise<GetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDefaultDomainWithOptions(runtime);
  }

  /**
   * Queries the information about a Resource Access Management (RAM) user group.
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

  /**
   * Queries the information about a Resource Access Management (RAM) user group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Queries the logon configurations of a Resource Access Management (RAM) user.
   * 
   * @param request - GetLoginProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginProfileResponse
   */
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

  /**
   * Queries the logon configurations of a Resource Access Management (RAM) user.
   * 
   * @param request - GetLoginProfileRequest
   * @returns GetLoginProfileResponse
   */
  async getLoginProfile(request: GetLoginProfileRequest): Promise<GetLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginProfileWithOptions(request, runtime);
  }

  /**
   * Queries the information about an OIDC IdP.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to query the information about an OpenID Connect (OIDC) identity provider (IdP) named `TestOIDCProvider`.
   * 
   * @param request - GetOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOIDCProviderResponse
   */
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

  /**
   * Queries the information about an OIDC IdP.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to query the information about an OpenID Connect (OIDC) identity provider (IdP) named `TestOIDCProvider`.
   * 
   * @param request - GetOIDCProviderRequest
   * @returns GetOIDCProviderResponse
   */
  async getOIDCProvider(request: GetOIDCProviderRequest): Promise<GetOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOIDCProviderWithOptions(request, runtime);
  }

  /**
   * Queries the details of the password policy for RAM users.
   * 
   * @param request - GetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordPolicyResponse
   */
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

  /**
   * Queries the details of the password policy for RAM users.
   * @returns GetPasswordPolicyResponse
   */
  async getPasswordPolicy(): Promise<GetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordPolicyWithOptions(runtime);
  }

  /**
   * Queries the information about an identity provider (IdP) for role-based single sign-on (SSO).
   * 
   * @param request - GetSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSAMLProviderResponse
   */
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

  /**
   * Queries the information about an identity provider (IdP) for role-based single sign-on (SSO).
   * 
   * @param request - GetSAMLProviderRequest
   * @returns GetSAMLProviderResponse
   */
  async getSAMLProvider(request: GetSAMLProviderRequest): Promise<GetSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSAMLProviderWithOptions(request, runtime);
  }

  /**
   * Queries the security preferences for RAM users.
   * 
   * @param request - GetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityPreferenceResponse
   */
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

  /**
   * Queries the security preferences for RAM users.
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
   * This topic provides an example to show how to query the information about a RAM user named `test@example.onaliyun.com`.
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
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

  /**
   * Queries the information about a RAM user.
   * 
   * @remarks
   * This topic provides an example to show how to query the information about a RAM user named `test@example.onaliyun.com`.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * 查询RAM用户多因素认证设备信息
   * 
   * @param request - GetUserMFAInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserMFAInfoResponse
   */
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

  /**
   * 查询RAM用户多因素认证设备信息
   * 
   * @param request - GetUserMFAInfoRequest
   * @returns GetUserMFAInfoResponse
   */
  async getUserMFAInfo(request: GetUserMFAInfoRequest): Promise<GetUserMFAInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserMFAInfoWithOptions(request, runtime);
  }

  /**
   * 查询用户SSO身份提供商信息
   * 
   * @param request - GetUserSsoSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserSsoSettingsResponse
   */
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

  /**
   * 查询用户SSO身份提供商信息
   * @returns GetUserSsoSettingsResponse
   */
  async getUserSsoSettings(): Promise<GetUserSsoSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserSsoSettingsWithOptions(runtime);
  }

  /**
   * 获取用户安全认证的信息
   * 
   * @param request - GetVerificationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVerificationInfoResponse
   */
  async getVerificationInfoWithOptions(request: GetVerificationInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetVerificationInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userPrincipalName)) {
      query["UserPrincipalName"] = request.userPrincipalName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVerificationInfo",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVerificationInfoResponse>(await this.callApi(params, req, runtime), new GetVerificationInfoResponse({}));
  }

  /**
   * 获取用户安全认证的信息
   * 
   * @param request - GetVerificationInfoRequest
   * @returns GetVerificationInfoResponse
   */
  async getVerificationInfo(request: GetVerificationInfoRequest): Promise<GetVerificationInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVerificationInfoWithOptions(request, runtime);
  }

  /**
   * 查询主账号或RAM用户访问密钥列表
   * 
   * @param request - ListAccessKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccessKeysResponse
   */
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

  /**
   * 查询主账号或RAM用户访问密钥列表
   * 
   * @param request - ListAccessKeysRequest
   * @returns ListAccessKeysResponse
   */
  async listAccessKeys(request: ListAccessKeysRequest): Promise<ListAccessKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccessKeysWithOptions(request, runtime);
  }

  /**
   * Queries the secret IDs of an application.
   * 
   * @param request - ListAppSecretIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppSecretIdsResponse
   */
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

  /**
   * Queries the secret IDs of an application.
   * 
   * @param request - ListAppSecretIdsRequest
   * @returns ListAppSecretIdsResponse
   */
  async listAppSecretIds(request: ListAppSecretIdsRequest): Promise<ListAppSecretIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAppSecretIdsWithOptions(request, runtime);
  }

  /**
   * Lists the created applications.
   * 
   * @remarks
   * This topic provides an example on how to query the applications within the current account. The returned result shows that only one application named `myapp` belongs to the current account.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
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

  /**
   * Lists the created applications.
   * 
   * @remarks
   * This topic provides an example on how to query the applications within the current account. The returned result shows that only one application named `myapp` belongs to the current account.
   * @returns ListApplicationsResponse
   */
  async listApplications(): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(runtime);
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
   * Queries the RAM user groups to which a RAM user belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
   */
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

  /**
   * Queries the RAM user groups to which a RAM user belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries OIDC IdPs.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to query all OpenID Connect (OIDC) identity providers (IdPs) within your Alibaba Cloud account. The response shows that your Alibaba Cloud account has only one OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - ListOIDCProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOIDCProvidersResponse
   */
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

  /**
   * Queries OIDC IdPs.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to query all OpenID Connect (OIDC) identity providers (IdPs) within your Alibaba Cloud account. The response shows that your Alibaba Cloud account has only one OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - ListOIDCProvidersRequest
   * @returns ListOIDCProvidersResponse
   */
  async listOIDCProviders(request: ListOIDCProvidersRequest): Promise<ListOIDCProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOIDCProvidersWithOptions(request, runtime);
  }

  /**
   * Queries predefined application permissions.
   * 
   * @param request - ListPredefinedScopesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPredefinedScopesResponse
   */
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

  /**
   * Queries predefined application permissions.
   * 
   * @param request - ListPredefinedScopesRequest
   * @returns ListPredefinedScopesResponse
   */
  async listPredefinedScopes(request: ListPredefinedScopesRequest): Promise<ListPredefinedScopesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPredefinedScopesWithOptions(request, runtime);
  }

  /**
   * 查询角色SSO身份提供商列表
   * 
   * @param request - ListSAMLProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSAMLProvidersResponse
   */
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

  /**
   * 查询角色SSO身份提供商列表
   * 
   * @param request - ListSAMLProvidersRequest
   * @returns ListSAMLProvidersResponse
   */
  async listSAMLProviders(request: ListSAMLProvidersRequest): Promise<ListSAMLProvidersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSAMLProvidersWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added resources.
   * 
   * @remarks
   * ###
   * You must specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N.Key`
   * *   `Tag.N.Key` and `Tag.N.Value`
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourcePrincipalName)) {
      query["ResourcePrincipalName"] = request.resourcePrincipalName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added resources.
   * 
   * @remarks
   * ###
   * You must specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N.Key`
   * *   `Tag.N.Key` and `Tag.N.Value`
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about all RAM users.
   * 
   * @remarks
   * You can call the following API operations to query the information about all RAM users:
   * *   ListUsers: queries the details of all RAM users.
   * *   ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUserBasicInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserBasicInfosResponse
   */
  async listUserBasicInfosWithOptions(request: ListUserBasicInfosRequest, runtime: $Util.RuntimeOptions): Promise<ListUserBasicInfosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItems)) {
      query["MaxItems"] = request.maxItems;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
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

  /**
   * Queries the basic information about all RAM users.
   * 
   * @remarks
   * You can call the following API operations to query the information about all RAM users:
   * *   ListUsers: queries the details of all RAM users.
   * *   ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUserBasicInfosRequest
   * @returns ListUserBasicInfosResponse
   */
  async listUserBasicInfos(request: ListUserBasicInfosRequest): Promise<ListUserBasicInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserBasicInfosWithOptions(request, runtime);
  }

  /**
   * Queries the details of all RAM users.
   * 
   * @remarks
   * ### [](#)
   * You can call the following API operations to query the details of all RAM users:
   * *   ListUsers: queries the details of all RAM users.
   * *   ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
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

  /**
   * Queries the details of all RAM users.
   * 
   * @remarks
   * ### [](#)
   * You can call the following API operations to query the details of all RAM users:
   * *   ListUsers: queries the details of all RAM users.
   * *   ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries Resource Access Management (RAM) users in a RAM user group.
   * 
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

  /**
   * Queries Resource Access Management (RAM) users in a RAM user group.
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * Queries multi-factor authentication (MFA) devices.
   * 
   * @param request - ListVirtualMFADevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualMFADevicesResponse
   */
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

  /**
   * Queries multi-factor authentication (MFA) devices.
   * 
   * @param request - ListVirtualMFADevicesRequest
   * @returns ListVirtualMFADevicesResponse
   */
  async listVirtualMFADevices(request: ListVirtualMFADevicesRequest): Promise<ListVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualMFADevicesWithOptions(request, runtime);
  }

  /**
   * Removes a client ID from an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to remove the client ID `498469743454717****` from the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - RemoveClientIdFromOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClientIdFromOIDCProviderResponse
   */
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

  /**
   * Removes a client ID from an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to remove the client ID `498469743454717****` from the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - RemoveClientIdFromOIDCProviderRequest
   * @returns RemoveClientIdFromOIDCProviderResponse
   */
  async removeClientIdFromOIDCProvider(request: RemoveClientIdFromOIDCProviderRequest): Promise<RemoveClientIdFromOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeClientIdFromOIDCProviderWithOptions(request, runtime);
  }

  /**
   * Removes a fingerprint from an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to remove the fingerprint `6938fd4d98bab03faadb97b34396831e3780****` from the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - RemoveFingerprintFromOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveFingerprintFromOIDCProviderResponse
   */
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

  /**
   * Removes a fingerprint from an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to remove the fingerprint `6938fd4d98bab03faadb97b34396831e3780****` from the OIDC IdP named `TestOIDCProvider`.
   * 
   * @param request - RemoveFingerprintFromOIDCProviderRequest
   * @returns RemoveFingerprintFromOIDCProviderResponse
   */
  async removeFingerprintFromOIDCProvider(request: RemoveFingerprintFromOIDCProviderRequest): Promise<RemoveFingerprintFromOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeFingerprintFromOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 将RAM用户从用户组中移除
   * 
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

  /**
   * 将RAM用户从用户组中移除
   * 
   * @param request - RemoveUserFromGroupRequest
   * @returns RemoveUserFromGroupResponse
   */
  async removeUserFromGroup(request: RemoveUserFromGroupRequest): Promise<RemoveUserFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromGroupWithOptions(request, runtime);
  }

  /**
   * Configures the default domain name.
   * 
   * @param request - SetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultDomainResponse
   */
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

  /**
   * Configures the default domain name.
   * 
   * @param request - SetDefaultDomainRequest
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomain(request: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * Configures the password policy for RAM users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordPolicyResponse
   */
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

  /**
   * Configures the password policy for RAM users.
   * 
   * @param request - SetPasswordPolicyRequest
   * @returns SetPasswordPolicyResponse
   */
  async setPasswordPolicy(request: SetPasswordPolicyRequest): Promise<SetPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordPolicyWithOptions(request, runtime);
  }

  /**
   * Configures security preferences for a RAM user.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to enable multi-factor authentication (MFA) only for RAM users who initiated unusual logons.
   * 
   * @param tmpReq - SetSecurityPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreferenceWithOptions(tmpReq: SetSecurityPreferenceRequest, runtime: $Util.RuntimeOptions): Promise<SetSecurityPreferenceResponse> {
    Util.validateModel(tmpReq);
    let request = new SetSecurityPreferenceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.verificationTypes)) {
      request.verificationTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.verificationTypes, "VerificationTypes", "json");
    }

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

    if (!Util.isUnset(request.loginNetworkMasks)) {
      query["LoginNetworkMasks"] = request.loginNetworkMasks;
    }

    if (!Util.isUnset(request.loginSessionDuration)) {
      query["LoginSessionDuration"] = request.loginSessionDuration;
    }

    if (!Util.isUnset(request.MFAOperationForLogin)) {
      query["MFAOperationForLogin"] = request.MFAOperationForLogin;
    }

    if (!Util.isUnset(request.operationForRiskLogin)) {
      query["OperationForRiskLogin"] = request.operationForRiskLogin;
    }

    if (!Util.isUnset(request.verificationTypesShrink)) {
      query["VerificationTypes"] = request.verificationTypesShrink;
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

  /**
   * Configures security preferences for a RAM user.
   * 
   * @remarks
   * ###
   * This topic provides an example on how to enable multi-factor authentication (MFA) only for RAM users who initiated unusual logons.
   * 
   * @param request - SetSecurityPreferenceRequest
   * @returns SetSecurityPreferenceResponse
   */
  async setSecurityPreference(request: SetSecurityPreferenceRequest): Promise<SetSecurityPreferenceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSecurityPreferenceWithOptions(request, runtime);
  }

  /**
   * @param request - SetUserSsoSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserSsoSettingsResponse
   */
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

    if (!Util.isUnset(request.ssoLoginWithDomain)) {
      query["SsoLoginWithDomain"] = request.ssoLoginWithDomain;
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

  /**
   * @param request - SetUserSsoSettingsRequest
   * @returns SetUserSsoSettingsResponse
   */
  async setUserSsoSettings(request: SetUserSsoSettingsRequest): Promise<SetUserSsoSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserSsoSettingsWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourcePrincipalName)) {
      query["ResourcePrincipalName"] = request.resourcePrincipalName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * 为RAM用户解绑多因素认证设备
   * 
   * @param request - UnbindMFADeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindMFADeviceResponse
   */
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

  /**
   * 为RAM用户解绑多因素认证设备
   * 
   * @param request - UnbindMFADeviceRequest
   * @returns UnbindMFADeviceResponse
   */
  async unbindMFADevice(request: UnbindMFADeviceRequest): Promise<UnbindMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindMFADeviceWithOptions(request, runtime);
  }

  /**
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourcePrincipalName)) {
      query["ResourcePrincipalName"] = request.resourcePrincipalName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-08-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改访问密钥状态
   * 
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

  /**
   * 修改访问密钥状态
   * 
   * @param request - UpdateAccessKeyRequest
   * @returns UpdateAccessKeyResponse
   */
  async updateAccessKey(request: UpdateAccessKeyRequest): Promise<UpdateAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccessKeyWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a specified application.
   * 
   * @param request - UpdateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationResponse
   */
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

    if (!Util.isUnset(request.newRequiredScopes)) {
      query["NewRequiredScopes"] = request.newRequiredScopes;
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

  /**
   * Modifies the information about a specified application.
   * 
   * @param request - UpdateApplicationRequest
   * @returns UpdateApplicationResponse
   */
  async updateApplication(request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a RAM user group.
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

  /**
   * Modifies the information of a RAM user group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * 修改RAM用户的控制台登录信息
   * 
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

  /**
   * 修改RAM用户的控制台登录信息
   * 
   * @param request - UpdateLoginProfileRequest
   * @returns UpdateLoginProfileResponse
   */
  async updateLoginProfile(request: UpdateLoginProfileRequest): Promise<UpdateLoginProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoginProfileWithOptions(request, runtime);
  }

  /**
   * Modifies the description and client IDs of an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to change the description of the OIDC IdP named `TestOIDCProvider` to `This is a new OIDC Provider.`
   * 
   * @param request - UpdateOIDCProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOIDCProviderResponse
   */
  async updateOIDCProviderWithOptions(request: UpdateOIDCProviderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOIDCProviderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIds)) {
      query["ClientIds"] = request.clientIds;
    }

    if (!Util.isUnset(request.issuanceLimitTime)) {
      query["IssuanceLimitTime"] = request.issuanceLimitTime;
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

  /**
   * Modifies the description and client IDs of an OpenID Connect (OIDC) identity provider (IdP).
   * 
   * @remarks
   * ###
   * This topic provides an example on how to change the description of the OIDC IdP named `TestOIDCProvider` to `This is a new OIDC Provider.`
   * 
   * @param request - UpdateOIDCProviderRequest
   * @returns UpdateOIDCProviderResponse
   */
  async updateOIDCProvider(request: UpdateOIDCProviderRequest): Promise<UpdateOIDCProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOIDCProviderWithOptions(request, runtime);
  }

  /**
   * 修改角色SSO身份提供商信息
   * 
   * @remarks
   * This topic provides an example on how to change the description of an IdP named `test-provider` to `This is a new provider.`
   * 
   * @param request - UpdateSAMLProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSAMLProviderResponse
   */
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

  /**
   * 修改角色SSO身份提供商信息
   * 
   * @remarks
   * This topic provides an example on how to change the description of an IdP named `test-provider` to `This is a new provider.`
   * 
   * @param request - UpdateSAMLProviderRequest
   * @returns UpdateSAMLProviderResponse
   */
  async updateSAMLProvider(request: UpdateSAMLProviderRequest): Promise<UpdateSAMLProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSAMLProviderWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a RAM user.
   * 
   * @remarks
   * This topic provides an example to show how to modify the name of a RAM user from `test@example.onaliyun.com` to `new@example.onaliyun.com`.
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

  /**
   * Modifies the information about a RAM user.
   * 
   * @remarks
   * This topic provides an example to show how to modify the name of a RAM user from `test@example.onaliyun.com` to `new@example.onaliyun.com`.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
