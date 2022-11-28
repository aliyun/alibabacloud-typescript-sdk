// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateOrganizationalUnitHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitRequest extends $tea.Model {
  description?: string;
  organizationalUnitExternalId?: string;
  organizationalUnitName?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitName: 'organizationalUnitName',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitName: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitResponseBody extends $tea.Model {
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  customFields?: CreateUserRequestCustomFields[];
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  password?: string;
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  primaryOrganizationalUnitId?: string;
  userExternalId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      password: 'password',
      passwordInitializationConfig: 'passwordInitializationConfig',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      primaryOrganizationalUnitId: 'primaryOrganizationalUnitId',
      userExternalId: 'userExternalId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': CreateUserRequestCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      password: 'string',
      passwordInitializationConfig: CreateUserRequestPasswordInitializationConfig,
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      primaryOrganizationalUnitId: 'string',
      userExternalId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

export class DeleteOrganizationalUnitHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceCodeRequest extends $tea.Model {
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceCodeResponseBody extends $tea.Model {
  deviceCode?: string;
  expiresAt?: number;
  expiresIn?: number;
  interval?: number;
  userCode?: string;
  verificationUri?: string;
  verificationUriComplete?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'device_code',
      expiresAt: 'expires_at',
      expiresIn: 'expires_in',
      interval: 'interval',
      userCode: 'user_code',
      verificationUri: 'verification_uri',
      verificationUriComplete: 'verification_uri_complete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      expiresAt: 'number',
      expiresIn: 'number',
      interval: 'number',
      userCode: 'string',
      verificationUri: 'string',
      verificationUriComplete: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDeviceCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateDeviceCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateDeviceCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTokenRequest extends $tea.Model {
  clientId?: string;
  clientSecret?: string;
  code?: string;
  codeVerifier?: string;
  deviceCode?: string;
  exclusiveTag?: string;
  grantType?: string;
  password?: string;
  redirectUri?: string;
  refreshToken?: string;
  scope?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      clientSecret: 'client_secret',
      code: 'code',
      codeVerifier: 'code_verifier',
      deviceCode: 'device_code',
      exclusiveTag: 'exclusive_tag',
      grantType: 'grant_type',
      password: 'password',
      redirectUri: 'redirect_uri',
      refreshToken: 'refresh_token',
      scope: 'scope',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      code: 'string',
      codeVerifier: 'string',
      deviceCode: 'string',
      exclusiveTag: 'string',
      grantType: 'string',
      password: 'string',
      redirectUri: 'string',
      refreshToken: 'string',
      scope: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTokenResponseBody extends $tea.Model {
  accessToken?: string;
  expiresAt?: number;
  expiresIn?: number;
  idToken?: string;
  refreshToken?: string;
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      expiresAt: 'expires_at',
      expiresIn: 'expires_in',
      idToken: 'id_token',
      refreshToken: 'refresh_token',
      tokenType: 'token_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresAt: 'number',
      expiresIn: 'number',
      idToken: 'string',
      refreshToken: 'string',
      tokenType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponseBody extends $tea.Model {
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      organizationalUnitIds: 'organizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApplicationProvisioningScopeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetApplicationProvisioningScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponseBody extends $tea.Model {
  createTime?: number;
  description?: string;
  instanceId?: string;
  organizationalUnitExternalId?: string;
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  organizationalUnitSourceId?: string;
  organizationalUnitSourceType?: string;
  parentId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitId: 'organizationalUnitId',
      organizationalUnitName: 'organizationalUnitName',
      organizationalUnitSourceId: 'organizationalUnitSourceId',
      organizationalUnitSourceType: 'organizationalUnitSourceType',
      parentId: 'parentId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOrganizationalUnitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitIdByExternalIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitIdByExternalIdRequest extends $tea.Model {
  organizationalUnitExternalId?: string;
  organizationalUnitSourceId?: string;
  organizationalUnitSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitSourceId: 'organizationalUnitSourceId',
      organizationalUnitSourceType: 'organizationalUnitSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitExternalId: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitIdByExternalIdResponseBody extends $tea.Model {
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitIdByExternalIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOrganizationalUnitIdByExternalIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOrganizationalUnitIdByExternalIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  accountExpireTime?: number;
  createTime?: number;
  customFields?: GetUserResponseBodyCustomFields[];
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  instanceId?: string;
  lockExpireTime?: number;
  organizationalUnits?: GetUserResponseBodyOrganizationalUnits[];
  passwordSet?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  primaryOrganizationalUnitId?: string;
  registerTime?: number;
  status?: string;
  updateTime?: number;
  userExternalId?: string;
  userId?: string;
  userSourceId?: string;
  userSourceType?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'accountExpireTime',
      createTime: 'createTime',
      customFields: 'customFields',
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      instanceId: 'instanceId',
      lockExpireTime: 'lockExpireTime',
      organizationalUnits: 'organizationalUnits',
      passwordSet: 'passwordSet',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      primaryOrganizationalUnitId: 'primaryOrganizationalUnitId',
      registerTime: 'registerTime',
      status: 'status',
      updateTime: 'updateTime',
      userExternalId: 'userExternalId',
      userId: 'userId',
      userSourceId: 'userSourceId',
      userSourceType: 'userSourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      customFields: { 'type': 'array', 'itemType': GetUserResponseBodyCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      lockExpireTime: 'number',
      organizationalUnits: { 'type': 'array', 'itemType': GetUserResponseBodyOrganizationalUnits },
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      primaryOrganizationalUnitId: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
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

export class GetUserIdByEmailHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByEmailRequest extends $tea.Model {
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByEmailResponseBody extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByEmailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserIdByEmailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserIdByEmailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByPhoneNumberHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByPhoneNumberRequest extends $tea.Model {
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'phoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByPhoneNumberResponseBody extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByPhoneNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserIdByPhoneNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserIdByPhoneNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUserExternalIdHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUserExternalIdRequest extends $tea.Model {
  userExternalId?: string;
  userSourceId?: string;
  userSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      userExternalId: 'userExternalId',
      userSourceId: 'userSourceId',
      userSourceType: 'userSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userExternalId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUserExternalIdResponseBody extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUserExternalIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserIdByUserExternalIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserIdByUserExternalIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUsernameHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUsernameRequest extends $tea.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUsernameResponseBody extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByUsernameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserIdByUsernameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserIdByUsernameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentIdsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentIdsResponseBody extends $tea.Model {
  parentIds?: string[];
  static names(): { [key: string]: string } {
    return {
      parentIds: 'parentIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOrganizationalUnitParentIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationalUnitParentIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      parentId: 'parentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponseBody extends $tea.Model {
  data?: ListOrganizationalUnitsResponseBodyData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOrganizationalUnitsResponseBodyData },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOrganizationalUnitsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOrganizationalUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  organizationalUnitId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  data?: ListUsersResponseBodyData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUsersResponseBodyData },
      totalCount: 'number',
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

export class PatchOrganizationalUnitHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchOrganizationalUnitRequest extends $tea.Model {
  description?: string;
  organizationalUnitName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      organizationalUnitName: 'organizationalUnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      organizationalUnitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchOrganizationalUnitResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchUserHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchUserRequest extends $tea.Model {
  customFields?: PatchUserRequestCustomFields[];
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'customFields',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': PatchUserRequestCustomFields },
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenRequest extends $tea.Model {
  clientId?: string;
  clientSecret?: string;
  token?: string;
  tokenTypeHint?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      clientSecret: 'client_secret',
      token: 'token',
      tokenTypeHint: 'token_type_hint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      token: 'string',
      tokenTypeHint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: {[key: string]: any};
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestCustomFields extends $tea.Model {
  fieldName?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestPasswordInitializationConfig extends $tea.Model {
  passwordForcedUpdateStatus?: string;
  passwordInitializationPolicyPriority?: string;
  passwordInitializationType?: string;
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'passwordForcedUpdateStatus',
      passwordInitializationPolicyPriority: 'passwordInitializationPolicyPriority',
      passwordInitializationType: 'passwordInitializationType',
      userNotificationChannels: 'userNotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordForcedUpdateStatus: 'string',
      passwordInitializationPolicyPriority: 'string',
      passwordInitializationType: 'string',
      userNotificationChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyCustomFields extends $tea.Model {
  fieldName?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyOrganizationalUnits extends $tea.Model {
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'organizationalUnitId',
      organizationalUnitName: 'organizationalUnitName',
      primary: 'primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      primary: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponseBodyData extends $tea.Model {
  createTime?: number;
  description?: string;
  instanceId?: string;
  organizationalUnitExternalId?: string;
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  organizationalUnitSourceId?: string;
  organizationalUnitSourceType?: string;
  parentId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      organizationalUnitExternalId: 'organizationalUnitExternalId',
      organizationalUnitId: 'organizationalUnitId',
      organizationalUnitName: 'organizationalUnitName',
      organizationalUnitSourceId: 'organizationalUnitSourceId',
      organizationalUnitSourceType: 'organizationalUnitSourceType',
      parentId: 'parentId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  accountExpireTime?: number;
  createTime?: number;
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  instanceId?: string;
  lockExpireTime?: number;
  passwordSet?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  registerTime?: number;
  status?: string;
  updateTime?: number;
  userExternalId?: string;
  userId?: string;
  userSourceId?: string;
  userSourceType?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'accountExpireTime',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      instanceId: 'instanceId',
      lockExpireTime: 'lockExpireTime',
      passwordSet: 'passwordSet',
      phoneNumber: 'phoneNumber',
      phoneNumberVerified: 'phoneNumberVerified',
      phoneRegion: 'phoneRegion',
      registerTime: 'registerTime',
      status: 'status',
      updateTime: 'updateTime',
      userExternalId: 'userExternalId',
      userId: 'userId',
      userSourceId: 'userSourceId',
      userSourceType: 'userSourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      lockExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PatchUserRequestCustomFields extends $tea.Model {
  fieldName?: string;
  fieldValue?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      operator: 'operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eiam-developerapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createOrganizationalUnit(instanceId: string, applicationId: string, request: CreateOrganizationalUnitRequest): Promise<CreateOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateOrganizationalUnitHeaders({ });
    return await this.createOrganizationalUnitWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async createOrganizationalUnitWithOptions(instanceId: string, applicationId: string, request: CreateOrganizationalUnitRequest, headers: CreateOrganizationalUnitHeaders, runtime: $Util.RuntimeOptions): Promise<CreateOrganizationalUnitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.organizationalUnitExternalId)) {
      body["organizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!Util.isUnset(request.organizationalUnitName)) {
      body["organizationalUnitName"] = request.organizationalUnitName;
    }

    if (!Util.isUnset(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new CreateOrganizationalUnitResponse({}));
  }

  async createUser(instanceId: string, applicationId: string, request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateUserHeaders({ });
    return await this.createUserWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async createUserWithOptions(instanceId: string, applicationId: string, request: CreateUserRequest, headers: CreateUserHeaders, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customFields)) {
      body["customFields"] = request.customFields;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.emailVerified)) {
      body["emailVerified"] = request.emailVerified;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset($tea.toMap(request.passwordInitializationConfig))) {
      body["passwordInitializationConfig"] = request.passwordInitializationConfig;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["phoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.phoneNumberVerified)) {
      body["phoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!Util.isUnset(request.phoneRegion)) {
      body["phoneRegion"] = request.phoneRegion;
    }

    if (!Util.isUnset(request.primaryOrganizationalUnitId)) {
      body["primaryOrganizationalUnitId"] = request.primaryOrganizationalUnitId;
    }

    if (!Util.isUnset(request.userExternalId)) {
      body["userExternalId"] = request.userExternalId;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  async deleteOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<DeleteOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteOrganizationalUnitHeaders({ });
    return await this.deleteOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
  }

  async deleteOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: DeleteOrganizationalUnitHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteOrganizationalUnitResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits/${OpenApiUtil.getEncodeParam(organizationalUnitId)}`,
      method: "DELETE",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new DeleteOrganizationalUnitResponse({}));
  }

  async deleteUser(instanceId: string, applicationId: string, userId: string): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteUserHeaders({ });
    return await this.deleteUserWithOptions(instanceId, applicationId, userId, headers, runtime);
  }

  async deleteUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: DeleteUserHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/${OpenApiUtil.getEncodeParam(userId)}`,
      method: "DELETE",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async disableUser(instanceId: string, applicationId: string, userId: string): Promise<DisableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DisableUserHeaders({ });
    return await this.disableUserWithOptions(instanceId, applicationId, userId, headers, runtime);
  }

  async disableUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: DisableUserHeaders, runtime: $Util.RuntimeOptions): Promise<DisableUserResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DisableUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/${OpenApiUtil.getEncodeParam(userId)}/actions/disable`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DisableUserResponse>(await this.callApi(params, req, runtime), new DisableUserResponse({}));
  }

  async enableUser(instanceId: string, applicationId: string, userId: string): Promise<EnableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new EnableUserHeaders({ });
    return await this.enableUserWithOptions(instanceId, applicationId, userId, headers, runtime);
  }

  async enableUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: EnableUserHeaders, runtime: $Util.RuntimeOptions): Promise<EnableUserResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "EnableUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/${OpenApiUtil.getEncodeParam(userId)}/actions/enable`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<EnableUserResponse>(await this.callApi(params, req, runtime), new EnableUserResponse({}));
  }

  async generateDeviceCode(instanceId: string, applicationId: string, request: GenerateDeviceCodeRequest): Promise<GenerateDeviceCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateDeviceCodeWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async generateDeviceCodeWithOptions(instanceId: string, applicationId: string, request: GenerateDeviceCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateDeviceCodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scope)) {
      query["scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDeviceCode",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/oauth2/device/code`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateDeviceCodeResponse>(await this.callApi(params, req, runtime), new GenerateDeviceCodeResponse({}));
  }

  async generateToken(instanceId: string, applicationId: string, request: GenerateTokenRequest): Promise<GenerateTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateTokenWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async generateTokenWithOptions(instanceId: string, applicationId: string, request: GenerateTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!Util.isUnset(request.clientSecret)) {
      query["client_secret"] = request.clientSecret;
    }

    if (!Util.isUnset(request.code)) {
      query["code"] = request.code;
    }

    if (!Util.isUnset(request.codeVerifier)) {
      query["code_verifier"] = request.codeVerifier;
    }

    if (!Util.isUnset(request.deviceCode)) {
      query["device_code"] = request.deviceCode;
    }

    if (!Util.isUnset(request.exclusiveTag)) {
      query["exclusive_tag"] = request.exclusiveTag;
    }

    if (!Util.isUnset(request.grantType)) {
      query["grant_type"] = request.grantType;
    }

    if (!Util.isUnset(request.password)) {
      query["password"] = request.password;
    }

    if (!Util.isUnset(request.redirectUri)) {
      query["redirect_uri"] = request.redirectUri;
    }

    if (!Util.isUnset(request.refreshToken)) {
      query["refresh_token"] = request.refreshToken;
    }

    if (!Util.isUnset(request.scope)) {
      query["scope"] = request.scope;
    }

    if (!Util.isUnset(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/oauth2/token`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateTokenResponse>(await this.callApi(params, req, runtime), new GenerateTokenResponse({}));
  }

  async getApplicationProvisioningScope(instanceId: string, applicationId: string): Promise<GetApplicationProvisioningScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetApplicationProvisioningScopeHeaders({ });
    return await this.getApplicationProvisioningScopeWithOptions(instanceId, applicationId, headers, runtime);
  }

  async getApplicationProvisioningScopeWithOptions(instanceId: string, applicationId: string, headers: GetApplicationProvisioningScopeHeaders, runtime: $Util.RuntimeOptions): Promise<GetApplicationProvisioningScopeResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationProvisioningScope",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/provisioningScope`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new GetApplicationProvisioningScopeResponse({}));
  }

  async getOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<GetOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetOrganizationalUnitHeaders({ });
    return await this.getOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
  }

  async getOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: GetOrganizationalUnitHeaders, runtime: $Util.RuntimeOptions): Promise<GetOrganizationalUnitResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits/${OpenApiUtil.getEncodeParam(organizationalUnitId)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new GetOrganizationalUnitResponse({}));
  }

  async getOrganizationalUnitIdByExternalId(instanceId: string, applicationId: string, request: GetOrganizationalUnitIdByExternalIdRequest): Promise<GetOrganizationalUnitIdByExternalIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetOrganizationalUnitIdByExternalIdHeaders({ });
    return await this.getOrganizationalUnitIdByExternalIdWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async getOrganizationalUnitIdByExternalIdWithOptions(instanceId: string, applicationId: string, request: GetOrganizationalUnitIdByExternalIdRequest, headers: GetOrganizationalUnitIdByExternalIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetOrganizationalUnitIdByExternalIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationalUnitExternalId)) {
      body["organizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!Util.isUnset(request.organizationalUnitSourceId)) {
      body["organizationalUnitSourceId"] = request.organizationalUnitSourceId;
    }

    if (!Util.isUnset(request.organizationalUnitSourceType)) {
      body["organizationalUnitSourceType"] = request.organizationalUnitSourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetOrganizationalUnitIdByExternalId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits/_/actions/getOrganizationalUnitIdByExternalId`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOrganizationalUnitIdByExternalIdResponse>(await this.callApi(params, req, runtime), new GetOrganizationalUnitIdByExternalIdResponse({}));
  }

  async getUser(instanceId: string, applicationId: string, userId: string): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserHeaders({ });
    return await this.getUserWithOptions(instanceId, applicationId, userId, headers, runtime);
  }

  async getUserWithOptions(instanceId: string, applicationId: string, userId: string, headers: GetUserHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/${OpenApiUtil.getEncodeParam(userId)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUserIdByEmail(instanceId: string, applicationId: string, request: GetUserIdByEmailRequest): Promise<GetUserIdByEmailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserIdByEmailHeaders({ });
    return await this.getUserIdByEmailWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async getUserIdByEmailWithOptions(instanceId: string, applicationId: string, request: GetUserIdByEmailRequest, headers: GetUserIdByEmailHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserIdByEmailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserIdByEmail",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/_/actions/getUserIdByEmail`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserIdByEmailResponse>(await this.callApi(params, req, runtime), new GetUserIdByEmailResponse({}));
  }

  async getUserIdByPhoneNumber(instanceId: string, applicationId: string, request: GetUserIdByPhoneNumberRequest): Promise<GetUserIdByPhoneNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserIdByPhoneNumberHeaders({ });
    return await this.getUserIdByPhoneNumberWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async getUserIdByPhoneNumberWithOptions(instanceId: string, applicationId: string, request: GetUserIdByPhoneNumberRequest, headers: GetUserIdByPhoneNumberHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserIdByPhoneNumberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.phoneNumber)) {
      body["phoneNumber"] = request.phoneNumber;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserIdByPhoneNumber",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/_/actions/getUserIdByPhoneNumber`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserIdByPhoneNumberResponse>(await this.callApi(params, req, runtime), new GetUserIdByPhoneNumberResponse({}));
  }

  async getUserIdByUserExternalId(instanceId: string, applicationId: string, request: GetUserIdByUserExternalIdRequest): Promise<GetUserIdByUserExternalIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserIdByUserExternalIdHeaders({ });
    return await this.getUserIdByUserExternalIdWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async getUserIdByUserExternalIdWithOptions(instanceId: string, applicationId: string, request: GetUserIdByUserExternalIdRequest, headers: GetUserIdByUserExternalIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserIdByUserExternalIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userExternalId)) {
      body["userExternalId"] = request.userExternalId;
    }

    if (!Util.isUnset(request.userSourceId)) {
      body["userSourceId"] = request.userSourceId;
    }

    if (!Util.isUnset(request.userSourceType)) {
      body["userSourceType"] = request.userSourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserIdByUserExternalId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/_/actions/getUserIdByExternalId`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserIdByUserExternalIdResponse>(await this.callApi(params, req, runtime), new GetUserIdByUserExternalIdResponse({}));
  }

  async getUserIdByUsername(instanceId: string, applicationId: string, request: GetUserIdByUsernameRequest): Promise<GetUserIdByUsernameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserIdByUsernameHeaders({ });
    return await this.getUserIdByUsernameWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async getUserIdByUsernameWithOptions(instanceId: string, applicationId: string, request: GetUserIdByUsernameRequest, headers: GetUserIdByUsernameHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserIdByUsernameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserIdByUsername",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/_/actions/getUserIdByUsername`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserIdByUsernameResponse>(await this.callApi(params, req, runtime), new GetUserIdByUsernameResponse({}));
  }

  async getUserInfo(instanceId: string, applicationId: string): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserInfoHeaders({ });
    return await this.getUserInfoWithOptions(instanceId, applicationId, headers, runtime);
  }

  async getUserInfoWithOptions(instanceId: string, applicationId: string, headers: GetUserInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetUserInfo",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/oauth2/userinfo`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async listOrganizationalUnitParentIds(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<ListOrganizationalUnitParentIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListOrganizationalUnitParentIdsHeaders({ });
    return await this.listOrganizationalUnitParentIdsWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
  }

  async listOrganizationalUnitParentIdsWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: ListOrganizationalUnitParentIdsHeaders, runtime: $Util.RuntimeOptions): Promise<ListOrganizationalUnitParentIdsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizationalUnitParentIds",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits/${OpenApiUtil.getEncodeParam(organizationalUnitId)}/parentIds`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationalUnitParentIdsResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitParentIdsResponse({}));
  }

  async listOrganizationalUnits(instanceId: string, applicationId: string, request: ListOrganizationalUnitsRequest): Promise<ListOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListOrganizationalUnitsHeaders({ });
    return await this.listOrganizationalUnitsWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async listOrganizationalUnitsWithOptions(instanceId: string, applicationId: string, request: ListOrganizationalUnitsRequest, headers: ListOrganizationalUnitsHeaders, runtime: $Util.RuntimeOptions): Promise<ListOrganizationalUnitsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentId)) {
      query["parentId"] = request.parentId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizationalUnits",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitsResponse({}));
  }

  async listUsers(instanceId: string, applicationId: string, request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListUsersHeaders({ });
    return await this.listUsersWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async listUsersWithOptions(instanceId: string, applicationId: string, request: ListUsersRequest, headers: ListUsersHeaders, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationalUnitId)) {
      query["organizationalUnitId"] = request.organizationalUnitId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async patchOrganizationalUnit(instanceId: string, applicationId: string, organizationalUnitId: string, request: PatchOrganizationalUnitRequest): Promise<PatchOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PatchOrganizationalUnitHeaders({ });
    return await this.patchOrganizationalUnitWithOptions(instanceId, applicationId, organizationalUnitId, request, headers, runtime);
  }

  async patchOrganizationalUnitWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, request: PatchOrganizationalUnitRequest, headers: PatchOrganizationalUnitHeaders, runtime: $Util.RuntimeOptions): Promise<PatchOrganizationalUnitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.organizationalUnitName)) {
      body["organizationalUnitName"] = request.organizationalUnitName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PatchOrganizationalUnit",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/organizationalUnits/${OpenApiUtil.getEncodeParam(organizationalUnitId)}`,
      method: "PATCH",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PatchOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new PatchOrganizationalUnitResponse({}));
  }

  async patchUser(instanceId: string, applicationId: string, userId: string, request: PatchUserRequest): Promise<PatchUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PatchUserHeaders({ });
    return await this.patchUserWithOptions(instanceId, applicationId, userId, request, headers, runtime);
  }

  async patchUserWithOptions(instanceId: string, applicationId: string, userId: string, request: PatchUserRequest, headers: PatchUserHeaders, runtime: $Util.RuntimeOptions): Promise<PatchUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customFields)) {
      body["customFields"] = request.customFields;
    }

    if (!Util.isUnset(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      body["email"] = request.email;
    }

    if (!Util.isUnset(request.emailVerified)) {
      body["emailVerified"] = request.emailVerified;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["phoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.phoneNumberVerified)) {
      body["phoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!Util.isUnset(request.phoneRegion)) {
      body["phoneRegion"] = request.phoneRegion;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = Util.toJSONString(headers.authorization);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PatchUser",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/users/${OpenApiUtil.getEncodeParam(userId)}`,
      method: "PATCH",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PatchUserResponse>(await this.callApi(params, req, runtime), new PatchUserResponse({}));
  }

  async revokeToken(instanceId: string, applicationId: string, request: RevokeTokenRequest): Promise<RevokeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeTokenWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async revokeTokenWithOptions(instanceId: string, applicationId: string, request: RevokeTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RevokeTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      query["client_id"] = request.clientId;
    }

    if (!Util.isUnset(request.clientSecret)) {
      query["client_secret"] = request.clientSecret;
    }

    if (!Util.isUnset(request.token)) {
      query["token"] = request.token;
    }

    if (!Util.isUnset(request.tokenTypeHint)) {
      query["token_type_hint"] = request.tokenTypeHint;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeToken",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${OpenApiUtil.getEncodeParam(instanceId)}/${OpenApiUtil.getEncodeParam(applicationId)}/oauth2/revoke`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokeTokenResponse>(await this.callApi(params, req, runtime), new RevokeTokenResponse({}));
  }

}
