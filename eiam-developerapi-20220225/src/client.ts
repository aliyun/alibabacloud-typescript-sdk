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
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  password?: string;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  primaryOrganizationalUnitId?: string;
  userExternalId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      email: 'email',
      emailVerified: 'emailVerified',
      password: 'password',
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
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      password: 'string',
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
  static names(): { [key: string]: string } {
    return {
      organizationalUnitExternalId: 'organizationalUnitExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitExternalId: 'string',
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

export class GetUserIdByExternalIdHeaders extends $tea.Model {
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

export class GetUserIdByExternalIdRequest extends $tea.Model {
  userExternalId?: string;
  static names(): { [key: string]: string } {
    return {
      userExternalId: 'userExternalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userExternalId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserIdByExternalIdResponseBody extends $tea.Model {
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

export class GetUserIdByExternalIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserIdByExternalIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserIdByExternalIdResponseBody,
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

export class GetUserPasswordPolicyHeaders extends $tea.Model {
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

export class GetUserPasswordPolicyResponseBody extends $tea.Model {
  activeCycle?: number;
  instanceId?: string;
  minLength?: number;
  passwordComplexityItem?: GetUserPasswordPolicyResponseBodyPasswordComplexityItem;
  reservationCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCycle: 'activeCycle',
      instanceId: 'instanceId',
      minLength: 'minLength',
      passwordComplexityItem: 'passwordComplexityItem',
      reservationCount: 'reservationCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCycle: 'number',
      instanceId: 'string',
      minLength: 'number',
      passwordComplexityItem: GetUserPasswordPolicyResponseBodyPasswordComplexityItem,
      reservationCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserPasswordPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserPasswordPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserPasswordPolicyResponseBody,
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
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
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

export class GetUserPasswordPolicyResponseBodyPasswordComplexityItem extends $tea.Model {
  containLowerCase?: boolean;
  containNumber?: boolean;
  containSpecialChar?: boolean;
  containUpperCase?: boolean;
  displayNameCheck?: boolean;
  emailCheck?: boolean;
  phoneCheck?: boolean;
  usernameCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      containLowerCase: 'containLowerCase',
      containNumber: 'containNumber',
      containSpecialChar: 'containSpecialChar',
      containUpperCase: 'containUpperCase',
      displayNameCheck: 'displayNameCheck',
      emailCheck: 'emailCheck',
      phoneCheck: 'phoneCheck',
      usernameCheck: 'usernameCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containLowerCase: 'boolean',
      containNumber: 'boolean',
      containSpecialChar: 'boolean',
      containUpperCase: 'boolean',
      displayNameCheck: 'boolean',
      emailCheck: 'boolean',
      phoneCheck: 'boolean',
      usernameCheck: 'boolean',
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    let body : {[key: string ]: any} = { };
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
      pathname: `/v2/${instanceId}/${applicationId}/users`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    organizationalUnitId = OpenApiUtil.getEncodeParam(organizationalUnitId);
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits/${organizationalUnitId}`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    userId = OpenApiUtil.getEncodeParam(userId);
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
      pathname: `/v2/${instanceId}/${applicationId}/users/${userId}`,
      method: "DELETE",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  async generateDeviceCode(instanceId: string, applicationId: string, request: GenerateDeviceCodeRequest): Promise<GenerateDeviceCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateDeviceCodeWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async generateDeviceCodeWithOptions(instanceId: string, applicationId: string, request: GenerateDeviceCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateDeviceCodeResponse> {
    Util.validateModel(request);
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/oauth2/device/code`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/oauth2/token`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/provisioningScope`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    organizationalUnitId = OpenApiUtil.getEncodeParam(organizationalUnitId);
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits/${organizationalUnitId}`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.organizationalUnitExternalId)) {
      body["organizationalUnitExternalId"] = request.organizationalUnitExternalId;
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits/_/actions/getOrganizationalUnitIdByExternalId`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    userId = OpenApiUtil.getEncodeParam(userId);
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
      pathname: `/v2/${instanceId}/${applicationId}/users/${userId}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  async getUserIdByExternalId(instanceId: string, applicationId: string, request: GetUserIdByExternalIdRequest): Promise<GetUserIdByExternalIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserIdByExternalIdHeaders({ });
    return await this.getUserIdByExternalIdWithOptions(instanceId, applicationId, request, headers, runtime);
  }

  async getUserIdByExternalIdWithOptions(instanceId: string, applicationId: string, request: GetUserIdByExternalIdRequest, headers: GetUserIdByExternalIdHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserIdByExternalIdResponse> {
    Util.validateModel(request);
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userExternalId)) {
      body["userExternalId"] = request.userExternalId;
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
      action: "GetUserIdByExternalId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${instanceId}/${applicationId}/users/_/actions/getUserIdByExternalId`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserIdByExternalIdResponse>(await this.callApi(params, req, runtime), new GetUserIdByExternalIdResponse({}));
  }

  async getUserInfo(instanceId: string, applicationId: string): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserInfoHeaders({ });
    return await this.getUserInfoWithOptions(instanceId, applicationId, headers, runtime);
  }

  async getUserInfoWithOptions(instanceId: string, applicationId: string, headers: GetUserInfoHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/oauth2/userinfo`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async getUserPasswordPolicy(instanceId: string, applicationId: string): Promise<GetUserPasswordPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetUserPasswordPolicyHeaders({ });
    return await this.getUserPasswordPolicyWithOptions(instanceId, applicationId, headers, runtime);
  }

  async getUserPasswordPolicyWithOptions(instanceId: string, applicationId: string, headers: GetUserPasswordPolicyHeaders, runtime: $Util.RuntimeOptions): Promise<GetUserPasswordPolicyResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      action: "GetUserPasswordPolicy",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/v2/${instanceId}/${applicationId}/users/_/actions/getUserPasswordPolicy`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserPasswordPolicyResponse>(await this.callApi(params, req, runtime), new GetUserPasswordPolicyResponse({}));
  }

  async listOrganizationalUnitParentIds(instanceId: string, applicationId: string, organizationalUnitId: string): Promise<ListOrganizationalUnitParentIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListOrganizationalUnitParentIdsHeaders({ });
    return await this.listOrganizationalUnitParentIdsWithOptions(instanceId, applicationId, organizationalUnitId, headers, runtime);
  }

  async listOrganizationalUnitParentIdsWithOptions(instanceId: string, applicationId: string, organizationalUnitId: string, headers: ListOrganizationalUnitParentIdsHeaders, runtime: $Util.RuntimeOptions): Promise<ListOrganizationalUnitParentIdsResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    organizationalUnitId = OpenApiUtil.getEncodeParam(organizationalUnitId);
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits/${organizationalUnitId}/parentIds`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/users`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    organizationalUnitId = OpenApiUtil.getEncodeParam(organizationalUnitId);
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
      pathname: `/v2/${instanceId}/${applicationId}/organizationalUnits/${organizationalUnitId}`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
    userId = OpenApiUtil.getEncodeParam(userId);
    let body : {[key: string ]: any} = { };
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
      pathname: `/v2/${instanceId}/${applicationId}/users/${userId}`,
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
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    applicationId = OpenApiUtil.getEncodeParam(applicationId);
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
      pathname: `/v2/${instanceId}/${applicationId}/oauth2/revoke`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokeTokenResponse>(await this.callApi(params, req, runtime), new RevokeTokenResponse({}));
  }

}
