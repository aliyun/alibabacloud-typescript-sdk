// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckSmsVerifyCodeRequest extends $tea.Model {
  caseAuthPolicy?: number;
  countryCode?: string;
  outId?: string;
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeName?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      caseAuthPolicy: 'CaseAuthPolicy',
      countryCode: 'CountryCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseAuthPolicy: 'number',
      countryCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: CheckSmsVerifyCodeResponseBodyModel;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: CheckSmsVerifyCodeResponseBodyModel,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckSmsVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckSmsVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigRequest extends $tea.Model {
  androidPackageName?: string;
  androidPackageSign?: string;
  appName?: string;
  h5Origin?: string;
  h5Url?: string;
  iosBundleId?: string;
  ownerId?: number;
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeName?: string;
  static names(): { [key: string]: string } {
    return {
      androidPackageName: 'AndroidPackageName',
      androidPackageSign: 'AndroidPackageSign',
      appName: 'AppName',
      h5Origin: 'H5Origin',
      h5Url: 'H5Url',
      iosBundleId: 'IosBundleId',
      ownerId: 'OwnerId',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPackageName: 'string',
      androidPackageSign: 'string',
      appName: 'string',
      h5Origin: 'string',
      h5Url: 'string',
      iosBundleId: 'string',
      ownerId: 'number',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: CreateSchemeConfigResponseBodyModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: CreateSchemeConfigResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSchemeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSchemeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeRequest extends $tea.Model {
  appName?: string;
  authType?: string;
  bundleId?: string;
  cmApiCode?: number;
  ctApiCode?: number;
  cuApiCode?: number;
  email?: string;
  ipWhiteList?: string;
  origin?: string;
  osType?: string;
  ownerId?: number;
  packName?: string;
  packSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneType?: string;
  schemeName?: string;
  smsSignName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      authType: 'AuthType',
      bundleId: 'BundleId',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      email: 'Email',
      ipWhiteList: 'IpWhiteList',
      origin: 'Origin',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packName: 'PackName',
      packSign: 'PackSign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      schemeName: 'SchemeName',
      smsSignName: 'SmsSignName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authType: 'string',
      bundleId: 'string',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      email: 'string',
      ipWhiteList: 'string',
      origin: 'string',
      osType: 'string',
      ownerId: 'number',
      packName: 'string',
      packSign: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'string',
      schemeName: 'string',
      smsSignName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponseBody extends $tea.Model {
  code?: string;
  gateVerifySchemeDTO?: CreateVerifySchemeResponseBodyGateVerifySchemeDTO;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifySchemeDTO: 'GateVerifySchemeDTO',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifySchemeDTO: CreateVerifySchemeResponseBodyGateVerifySchemeDTO,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeRequest extends $tea.Model {
  customerId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeRequest extends $tea.Model {
  customerId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  schemeQueryResultDTO?: DescribeVerifySchemeResponseBodySchemeQueryResultDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      schemeQueryResultDTO: 'SchemeQueryResultDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      schemeQueryResultDTO: DescribeVerifySchemeResponseBodySchemeQueryResultDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenRequest extends $tea.Model {
  origin?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneCode?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      origin: 'Origin',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      origin: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  tokenInfo?: GetAuthTokenResponseBodyTokenInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tokenInfo: 'TokenInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tokenInfo: GetAuthTokenResponseBodyTokenInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlRequest extends $tea.Model {
  endDate?: string;
  ownerId?: number;
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      ownerId: 'number',
      phoneNo: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetAuthorizationUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAuthorizationUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAuthorizationUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAuthorizationUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFusionAuthTokenRequest extends $tea.Model {
  bundleId?: string;
  durationSeconds?: number;
  ownerId?: number;
  packageName?: string;
  packageSign?: string;
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      durationSeconds: 'DurationSeconds',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
      packageSign: 'PackageSign',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      durationSeconds: 'number',
      ownerId: 'number',
      packageName: 'string',
      packageSign: 'string',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFusionAuthTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFusionAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFusionAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFusionAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileRequest extends $tea.Model {
  accessToken?: string;
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponseBody extends $tea.Model {
  code?: string;
  getMobileResultDTO?: GetMobileResponseBodyGetMobileResultDTO;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      getMobileResultDTO: 'GetMobileResultDTO',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      getMobileResultDTO: GetMobileResponseBodyGetMobileResultDTO,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMobileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  spToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spToken: 'SpToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenResponseBody extends $tea.Model {
  code?: string;
  data?: GetPhoneWithTokenResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPhoneWithTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPhoneWithTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPhoneWithTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensRequest extends $tea.Model {
  bundleId?: string;
  expire?: number;
  osType?: string;
  ownerId?: number;
  packageName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneCode?: string;
  signName?: string;
  smsCodeExpire?: number;
  smsTemplateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      expire: 'Expire',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
      signName: 'SignName',
      smsCodeExpire: 'SmsCodeExpire',
      smsTemplateCode: 'SmsTemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      expire: 'number',
      osType: 'string',
      ownerId: 'number',
      packageName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
      signName: 'string',
      smsCodeExpire: 'number',
      smsTemplateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponseBody extends $tea.Model {
  code?: string;
  data?: GetSmsAuthTokensResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmsAuthTokensResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSmsAuthTokensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSmsAuthTokensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeRequest extends $tea.Model {
  appName?: string;
  bundleId?: string;
  cmApiCode?: number;
  ctApiCode?: number;
  cuApiCode?: number;
  osType?: string;
  ownerId?: number;
  packName?: string;
  packSign?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bundleId: 'BundleId',
      cmApiCode: 'CmApiCode',
      ctApiCode: 'CtApiCode',
      cuApiCode: 'CuApiCode',
      osType: 'OsType',
      ownerId: 'OwnerId',
      packName: 'PackName',
      packSign: 'PackSign',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bundleId: 'string',
      cmApiCode: 'number',
      ctApiCode: 'number',
      cuApiCode: 'number',
      osType: 'string',
      ownerId: 'number',
      packName: 'string',
      packSign: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeResponseBody extends $tea.Model {
  code?: string;
  gateVerifySchemeData?: JyCreateVerifySchemeResponseBodyGateVerifySchemeData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifySchemeData: 'GateVerifySchemeData',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifySchemeData: JyCreateVerifySchemeResponseBodyGateVerifySchemeData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JyCreateVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JyCreateVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sceneCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneCode: 'SceneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeResponseBody extends $tea.Model {
  code?: string;
  data?: JyQueryAppInfoBySceneCodeResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: JyQueryAppInfoBySceneCodeResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: JyQueryAppInfoBySceneCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: JyQueryAppInfoBySceneCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicRequest extends $tea.Model {
  authenticationType?: number;
  month?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      month: 'Month',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      month: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBody extends $tea.Model {
  code?: string;
  data?: QueryGateVerifyBillingPublicResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryGateVerifyBillingPublicResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGateVerifyBillingPublicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGateVerifyBillingPublicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicRequest extends $tea.Model {
  authenticationType?: number;
  endDate?: string;
  osType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  sceneCode?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'AuthenticationType',
      endDate: 'EndDate',
      osType: 'OsType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sceneCode: 'SceneCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'number',
      endDate: 'string',
      osType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sceneCode: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBody extends $tea.Model {
  code?: string;
  data?: QueryGateVerifyStatisticPublicResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryGateVerifyStatisticPublicResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGateVerifyStatisticPublicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryGateVerifyStatisticPublicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsRequest extends $tea.Model {
  bizId?: string;
  currentPage?: number;
  ownerId?: number;
  pageSize?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: QuerySendDetailsResponseBodyModel[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QuerySendDetailsResponseBodyModel },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySendDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySendDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeRequest extends $tea.Model {
  codeLength?: number;
  codeType?: number;
  countryCode?: string;
  duplicatePolicy?: number;
  interval?: number;
  outId?: string;
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  returnVerifyCode?: boolean;
  schemeName?: string;
  signName?: string;
  smsUpExtendCode?: string;
  templateCode?: string;
  templateParam?: string;
  validTime?: number;
  static names(): { [key: string]: string } {
    return {
      codeLength: 'CodeLength',
      codeType: 'CodeType',
      countryCode: 'CountryCode',
      duplicatePolicy: 'DuplicatePolicy',
      interval: 'Interval',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      returnVerifyCode: 'ReturnVerifyCode',
      schemeName: 'SchemeName',
      signName: 'SignName',
      smsUpExtendCode: 'SmsUpExtendCode',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      validTime: 'ValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeLength: 'number',
      codeType: 'number',
      countryCode: 'string',
      duplicatePolicy: 'number',
      interval: 'number',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      returnVerifyCode: 'boolean',
      schemeName: 'string',
      signName: 'string',
      smsUpExtendCode: 'string',
      templateCode: 'string',
      templateParam: 'string',
      validTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: SendSmsVerifyCodeResponseBodyModel;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: SendSmsVerifyCodeResponseBodyModel,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendSmsVerifyCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendSmsVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileRequest extends $tea.Model {
  accessCode?: string;
  outId?: string;
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessCode: 'AccessCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponseBody extends $tea.Model {
  code?: string;
  gateVerifyResultDTO?: VerifyMobileResponseBodyGateVerifyResultDTO;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerifyResultDTO: 'GateVerifyResultDTO',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerifyResultDTO: VerifyMobileResponseBodyGateVerifyResultDTO,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyMobileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenRequest extends $tea.Model {
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  spToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spToken: 'SpToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBody extends $tea.Model {
  code?: string;
  gateVerify?: VerifyPhoneWithTokenResponseBodyGateVerify;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      gateVerify: 'GateVerify',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      gateVerify: VerifyPhoneWithTokenResponseBodyGateVerify,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyPhoneWithTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyPhoneWithTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeRequest extends $tea.Model {
  phoneNumber?: string;
  smsCode?: string;
  smsToken?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      smsCode: 'SmsCode',
      smsToken: 'SmsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      smsCode: 'string',
      smsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySmsCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifySmsCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifySmsCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifyToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: VerifyWithFusionAuthTokenResponseBodyModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: VerifyWithFusionAuthTokenResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyWithFusionAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: VerifyWithFusionAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSmsVerifyCodeResponseBodyModel extends $tea.Model {
  outId?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchemeConfigResponseBodyModel extends $tea.Model {
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponseBodyGateVerifySchemeDTO extends $tea.Model {
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponseBodySchemeQueryResultDTO extends $tea.Model {
  appEncryptInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appEncryptInfo: 'AppEncryptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEncryptInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBodyTokenInfo extends $tea.Model {
  accessToken?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      jwtToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponseBodyData extends $tea.Model {
  authorizationUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationUrl: 'AuthorizationUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponseBodyGetMobileResultDTO extends $tea.Model {
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneWithTokenResponseBodyData extends $tea.Model {
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsAuthTokensResponseBodyData extends $tea.Model {
  bizToken?: string;
  expireTime?: number;
  stsAccessKeyId?: string;
  stsAccessKeySecret?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      bizToken: 'BizToken',
      expireTime: 'ExpireTime',
      stsAccessKeyId: 'StsAccessKeyId',
      stsAccessKeySecret: 'StsAccessKeySecret',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizToken: 'string',
      expireTime: 'number',
      stsAccessKeyId: 'string',
      stsAccessKeySecret: 'string',
      stsToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyCreateVerifySchemeResponseBodyGateVerifySchemeData extends $tea.Model {
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JyQueryAppInfoBySceneCodeResponseBodyData extends $tea.Model {
  cmAppId?: string;
  cmAppKey?: string;
  ctAppId?: string;
  ctAppKey?: string;
  static names(): { [key: string]: string } {
    return {
      cmAppId: 'CmAppId',
      cmAppKey: 'CmAppKey',
      ctAppId: 'CtAppId',
      ctAppKey: 'CtAppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmAppId: 'string',
      cmAppKey: 'string',
      ctAppId: 'string',
      ctAppKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList extends $tea.Model {
  add?: string;
  amount?: string;
  appName?: string;
  itemName?: string;
  sceneCode?: string;
  sceneName?: string;
  singlePrice?: string;
  static names(): { [key: string]: string } {
    return {
      add: 'Add',
      amount: 'Amount',
      appName: 'AppName',
      itemName: 'ItemName',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      singlePrice: 'SinglePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      add: 'string',
      amount: 'string',
      appName: 'string',
      itemName: 'string',
      sceneCode: 'string',
      sceneName: 'string',
      singlePrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyBillingPublicResponseBodyData extends $tea.Model {
  amountSum?: string;
  sceneBillingList?: QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList[];
  static names(): { [key: string]: string } {
    return {
      amountSum: 'AmountSum',
      sceneBillingList: 'SceneBillingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountSum: 'string',
      sceneBillingList: { 'type': 'array', 'itemType': QueryGateVerifyBillingPublicResponseBodyDataSceneBillingList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic extends $tea.Model {
  statisticDateStr?: string;
  totalFail?: number;
  totalSuccess?: number;
  totalUnknown?: number;
  static names(): { [key: string]: string } {
    return {
      statisticDateStr: 'StatisticDateStr',
      totalFail: 'TotalFail',
      totalSuccess: 'TotalSuccess',
      totalUnknown: 'TotalUnknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticDateStr: 'string',
      totalFail: 'number',
      totalSuccess: 'number',
      totalUnknown: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBodyData extends $tea.Model {
  dayStatistic?: QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic[];
  total?: number;
  totalFail?: number;
  totalSuccess?: number;
  totalUnknown?: number;
  static names(): { [key: string]: string } {
    return {
      dayStatistic: 'DayStatistic',
      total: 'Total',
      totalFail: 'TotalFail',
      totalSuccess: 'TotalSuccess',
      totalUnknown: 'TotalUnknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayStatistic: { 'type': 'array', 'itemType': QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic },
      total: 'number',
      totalFail: 'number',
      totalSuccess: 'number',
      totalUnknown: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySendDetailsResponseBodyModel extends $tea.Model {
  content?: string;
  errCode?: string;
  outId?: string;
  phoneNum?: string;
  receiveDate?: string;
  sendDate?: string;
  sendStatus?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errCode: 'ErrCode',
      outId: 'OutId',
      phoneNum: 'PhoneNum',
      receiveDate: 'ReceiveDate',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errCode: 'string',
      outId: 'string',
      phoneNum: 'string',
      receiveDate: 'string',
      sendDate: 'string',
      sendStatus: 'number',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendSmsVerifyCodeResponseBodyModel extends $tea.Model {
  bizId?: string;
  outId?: string;
  requestId?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      outId: 'OutId',
      requestId: 'RequestId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      outId: 'string',
      requestId: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponseBodyGateVerifyResultDTO extends $tea.Model {
  verifyId?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyId: 'VerifyId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyId: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBodyGateVerify extends $tea.Model {
  verifyId?: string;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      verifyId: 'VerifyId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyId: 'string',
      verifyResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyWithFusionAuthTokenResponseBodyModel extends $tea.Model {
  phoneNumber?: string;
  phoneScore?: number;
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneScore: 'PhoneScore',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneScore: 'number',
      verifyResult: 'string',
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
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dypnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkSmsVerifyCodeWithOptions(request: CheckSmsVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<CheckSmsVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.caseAuthPolicy)) {
      query["CaseAuthPolicy"] = request.caseAuthPolicy;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSmsVerifyCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSmsVerifyCodeResponse>(await this.callApi(params, req, runtime), new CheckSmsVerifyCodeResponse({}));
  }

  async checkSmsVerifyCode(request: CheckSmsVerifyCodeRequest): Promise<CheckSmsVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSmsVerifyCodeWithOptions(request, runtime);
  }

  async createSchemeConfigWithOptions(request: CreateSchemeConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateSchemeConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidPackageName)) {
      query["AndroidPackageName"] = request.androidPackageName;
    }

    if (!Util.isUnset(request.androidPackageSign)) {
      query["AndroidPackageSign"] = request.androidPackageSign;
    }

    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.h5Origin)) {
      query["H5Origin"] = request.h5Origin;
    }

    if (!Util.isUnset(request.h5Url)) {
      query["H5Url"] = request.h5Url;
    }

    if (!Util.isUnset(request.iosBundleId)) {
      query["IosBundleId"] = request.iosBundleId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchemeConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSchemeConfigResponse>(await this.callApi(params, req, runtime), new CreateSchemeConfigResponse({}));
  }

  async createSchemeConfig(request: CreateSchemeConfigRequest): Promise<CreateSchemeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSchemeConfigWithOptions(request, runtime);
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateVerifySchemeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateVerifySchemeResponse
   */
  async createVerifySchemeWithOptions(request: CreateVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!Util.isUnset(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!Util.isUnset(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packName)) {
      query["PackName"] = request.packName;
    }

    if (!Util.isUnset(request.packSign)) {
      query["PackSign"] = request.packSign;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!Util.isUnset(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVerifySchemeResponse>(await this.callApi(params, req, runtime), new CreateVerifySchemeResponse({}));
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request CreateVerifySchemeRequest
    * @return CreateVerifySchemeResponse
   */
  async createVerifyScheme(request: CreateVerifySchemeRequest): Promise<CreateVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySchemeWithOptions(request, runtime);
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteVerifySchemeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteVerifySchemeResponse
   */
  async deleteVerifySchemeWithOptions(request: DeleteVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVerifySchemeResponse>(await this.callApi(params, req, runtime), new DeleteVerifySchemeResponse({}));
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DeleteVerifySchemeRequest
    * @return DeleteVerifySchemeResponse
   */
  async deleteVerifyScheme(request: DeleteVerifySchemeRequest): Promise<DeleteVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVerifySchemeWithOptions(request, runtime);
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeVerifySchemeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeVerifySchemeResponse
   */
  async describeVerifySchemeWithOptions(request: DescribeVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customerId)) {
      query["CustomerId"] = request.customerId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVerifySchemeResponse>(await this.callApi(params, req, runtime), new DescribeVerifySchemeResponse({}));
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request DescribeVerifySchemeRequest
    * @return DescribeVerifySchemeResponse
   */
  async describeVerifyScheme(request: DescribeVerifySchemeRequest): Promise<DescribeVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySchemeWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](~~169786~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetAuthTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAuthTokenResponse
   */
  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthTokenResponse>(await this.callApi(params, req, runtime), new GetAuthTokenResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](~~169786~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetAuthTokenRequest
    * @return GetAuthTokenResponse
   */
  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account and obtain an Alibaba Cloud AccessKey pair. For more information, see [Process of communication authorization](~~196922~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetAuthorizationUrlRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAuthorizationUrlResponse
   */
  async getAuthorizationUrlWithOptions(request: GetAuthorizationUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNo)) {
      query["PhoneNo"] = request.phoneNo;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeId)) {
      query["SchemeId"] = request.schemeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthorizationUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthorizationUrlResponse>(await this.callApi(params, req, runtime), new GetAuthorizationUrlResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account and obtain an Alibaba Cloud AccessKey pair. For more information, see [Process of communication authorization](~~196922~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetAuthorizationUrlRequest
    * @return GetAuthorizationUrlResponse
   */
  async getAuthorizationUrl(request: GetAuthorizationUrlRequest): Promise<GetAuthorizationUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationUrlWithOptions(request, runtime);
  }

  async getFusionAuthTokenWithOptions(request: GetFusionAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetFusionAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.durationSeconds)) {
      query["DurationSeconds"] = request.durationSeconds;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!Util.isUnset(request.packageSign)) {
      query["PackageSign"] = request.packageSign;
    }

    if (!Util.isUnset(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeCode)) {
      query["SchemeCode"] = request.schemeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFusionAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFusionAuthTokenResponse>(await this.callApi(params, req, runtime), new GetFusionAuthTokenResponse({}));
  }

  async getFusionAuthToken(request: GetFusionAuthTokenRequest): Promise<GetFusionAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFusionAuthTokenWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](~~84541~~).
    * >  This operation is applicable only to one-click logon or registration. You can call this operation only after you confirm the authorization on the authorization page provided by the SDK for one-click logon. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
    * ### [](#qps)QPS limits
    * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetMobileRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMobileResponse
   */
  async getMobileWithOptions(request: GetMobileRequest, runtime: $Util.RuntimeOptions): Promise<GetMobileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMobile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMobileResponse>(await this.callApi(params, req, runtime), new GetMobileResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](~~84541~~).
    * >  This operation is applicable only to one-click logon or registration. You can call this operation only after you confirm the authorization on the authorization page provided by the SDK for one-click logon. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
    * ### [](#qps)QPS limits
    * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetMobileRequest
    * @return GetMobileResponse
   */
  async getMobile(request: GetMobileRequest): Promise<GetMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMobileWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](~~84541~~).
    * >  This operation is applicable only to one-click logon or registration in HTML5 pages. You can call this operation only after you confirm the authorization on the authorization page provided by the JavaScript SDK. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetPhoneWithTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetPhoneWithTokenResponse
   */
  async getPhoneWithTokenWithOptions(request: GetPhoneWithTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetPhoneWithTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.spToken)) {
      query["SpToken"] = request.spToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhoneWithToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhoneWithTokenResponse>(await this.callApi(params, req, runtime), new GetPhoneWithTokenResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](~~84541~~).
    * >  This operation is applicable only to one-click logon or registration in HTML5 pages. You can call this operation only after you confirm the authorization on the authorization page provided by the JavaScript SDK. You are prohibited from simulating or bypassing the authorization process. Alibaba Cloud reserves the right to terminate our services and take legal actions against such violations.
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetPhoneWithTokenRequest
    * @return GetPhoneWithTokenResponse
   */
  async getPhoneWithToken(request: GetPhoneWithTokenRequest): Promise<GetPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneWithTokenWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](~~313209~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetSmsAuthTokensRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSmsAuthTokensResponse
   */
  async getSmsAuthTokensWithOptions(request: GetSmsAuthTokensRequest, runtime: $Util.RuntimeOptions): Promise<GetSmsAuthTokensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.smsCodeExpire)) {
      query["SmsCodeExpire"] = request.smsCodeExpire;
    }

    if (!Util.isUnset(request.smsTemplateCode)) {
      query["SmsTemplateCode"] = request.smsTemplateCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSmsAuthTokens",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSmsAuthTokensResponse>(await this.callApi(params, req, runtime), new GetSmsAuthTokensResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](~~313209~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request GetSmsAuthTokensRequest
    * @return GetSmsAuthTokensResponse
   */
  async getSmsAuthTokens(request: GetSmsAuthTokensRequest): Promise<GetSmsAuthTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmsAuthTokensWithOptions(request, runtime);
  }

  /**
    * @deprecated : JyCreateVerifyScheme is deprecated, please use Dypnsapi::2017-05-25::CreateVerifyScheme instead.
    *
    * @param request JyCreateVerifySchemeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return JyCreateVerifySchemeResponse
   */
  // Deprecated
  async jyCreateVerifySchemeWithOptions(request: JyCreateVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<JyCreateVerifySchemeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.cmApiCode)) {
      query["CmApiCode"] = request.cmApiCode;
    }

    if (!Util.isUnset(request.ctApiCode)) {
      query["CtApiCode"] = request.ctApiCode;
    }

    if (!Util.isUnset(request.cuApiCode)) {
      query["CuApiCode"] = request.cuApiCode;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.packName)) {
      query["PackName"] = request.packName;
    }

    if (!Util.isUnset(request.packSign)) {
      query["PackSign"] = request.packSign;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JyCreateVerifyScheme",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JyCreateVerifySchemeResponse>(await this.callApi(params, req, runtime), new JyCreateVerifySchemeResponse({}));
  }

  /**
    * @deprecated : JyCreateVerifyScheme is deprecated, please use Dypnsapi::2017-05-25::CreateVerifyScheme instead.
    *
    * @param request JyCreateVerifySchemeRequest
    * @return JyCreateVerifySchemeResponse
   */
  // Deprecated
  async jyCreateVerifyScheme(request: JyCreateVerifySchemeRequest): Promise<JyCreateVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.jyCreateVerifySchemeWithOptions(request, runtime);
  }

  /**
    * @deprecated : JyQueryAppInfoBySceneCode is deprecated, please use Dypnsapi::2017-05-25::QueryAppInfoBySceneCode instead.
    *
    * @param request JyQueryAppInfoBySceneCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return JyQueryAppInfoBySceneCodeResponse
   */
  // Deprecated
  async jyQueryAppInfoBySceneCodeWithOptions(request: JyQueryAppInfoBySceneCodeRequest, runtime: $Util.RuntimeOptions): Promise<JyQueryAppInfoBySceneCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "JyQueryAppInfoBySceneCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<JyQueryAppInfoBySceneCodeResponse>(await this.callApi(params, req, runtime), new JyQueryAppInfoBySceneCodeResponse({}));
  }

  /**
    * @deprecated : JyQueryAppInfoBySceneCode is deprecated, please use Dypnsapi::2017-05-25::QueryAppInfoBySceneCode instead.
    *
    * @param request JyQueryAppInfoBySceneCodeRequest
    * @return JyQueryAppInfoBySceneCodeResponse
   */
  // Deprecated
  async jyQueryAppInfoBySceneCode(request: JyQueryAppInfoBySceneCodeRequest): Promise<JyQueryAppInfoBySceneCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.jyQueryAppInfoBySceneCodeWithOptions(request, runtime);
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request QueryGateVerifyBillingPublicRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryGateVerifyBillingPublicResponse
   */
  async queryGateVerifyBillingPublicWithOptions(request: QueryGateVerifyBillingPublicRequest, runtime: $Util.RuntimeOptions): Promise<QueryGateVerifyBillingPublicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.month)) {
      query["Month"] = request.month;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGateVerifyBillingPublic",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGateVerifyBillingPublicResponse>(await this.callApi(params, req, runtime), new QueryGateVerifyBillingPublicResponse({}));
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request QueryGateVerifyBillingPublicRequest
    * @return QueryGateVerifyBillingPublicResponse
   */
  async queryGateVerifyBillingPublic(request: QueryGateVerifyBillingPublicRequest): Promise<QueryGateVerifyBillingPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGateVerifyBillingPublicWithOptions(request, runtime);
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request QueryGateVerifyStatisticPublicRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QueryGateVerifyStatisticPublicResponse
   */
  async queryGateVerifyStatisticPublicWithOptions(request: QueryGateVerifyStatisticPublicRequest, runtime: $Util.RuntimeOptions): Promise<QueryGateVerifyStatisticPublicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationType)) {
      query["AuthenticationType"] = request.authenticationType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGateVerifyStatisticPublic",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGateVerifyStatisticPublicResponse>(await this.callApi(params, req, runtime), new QueryGateVerifyStatisticPublicResponse({}));
  }

  /**
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request QueryGateVerifyStatisticPublicRequest
    * @return QueryGateVerifyStatisticPublicResponse
   */
  async queryGateVerifyStatisticPublic(request: QueryGateVerifyStatisticPublicRequest): Promise<QueryGateVerifyStatisticPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGateVerifyStatisticPublicWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request QuerySendDetailsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return QuerySendDetailsResponse
   */
  // Deprecated
  async querySendDetailsWithOptions(request: QuerySendDetailsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySendDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendDate)) {
      query["SendDate"] = request.sendDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySendDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySendDetailsResponse>(await this.callApi(params, req, runtime), new QuerySendDetailsResponse({}));
  }

  /**
    * @deprecated
    *
    * @param request QuerySendDetailsRequest
    * @return QuerySendDetailsResponse
   */
  // Deprecated
  async querySendDetails(request: QuerySendDetailsRequest): Promise<QuerySendDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySendDetailsWithOptions(request, runtime);
  }

  async sendSmsVerifyCodeWithOptions(request: SendSmsVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<SendSmsVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.codeLength)) {
      query["CodeLength"] = request.codeLength;
    }

    if (!Util.isUnset(request.codeType)) {
      query["CodeType"] = request.codeType;
    }

    if (!Util.isUnset(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!Util.isUnset(request.duplicatePolicy)) {
      query["DuplicatePolicy"] = request.duplicatePolicy;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.returnVerifyCode)) {
      query["ReturnVerifyCode"] = request.returnVerifyCode;
    }

    if (!Util.isUnset(request.schemeName)) {
      query["SchemeName"] = request.schemeName;
    }

    if (!Util.isUnset(request.signName)) {
      query["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.smsUpExtendCode)) {
      query["SmsUpExtendCode"] = request.smsUpExtendCode;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateParam)) {
      query["TemplateParam"] = request.templateParam;
    }

    if (!Util.isUnset(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendSmsVerifyCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendSmsVerifyCodeResponse>(await this.callApi(params, req, runtime), new SendSmsVerifyCodeResponse({}));
  }

  async sendSmsVerifyCode(request: SendSmsVerifyCodeRequest): Promise<SendSmsVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendSmsVerifyCodeWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](~~84541~~).
    * >  This operation is applicable to only the verification of thephone number that you use. To obtain a phone number for one-click logon, call [GetMobile](~~189865~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request VerifyMobileRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return VerifyMobileResponse
   */
  async verifyMobileWithOptions(request: VerifyMobileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMobileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessCode)) {
      query["AccessCode"] = request.accessCode;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyMobile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyMobileResponse>(await this.callApi(params, req, runtime), new VerifyMobileResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Getting Started](~~84541~~).
    * >  This operation is applicable to only the verification of thephone number that you use. To obtain a phone number for one-click logon, call [GetMobile](~~189865~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request VerifyMobileRequest
    * @return VerifyMobileResponse
   */
  async verifyMobile(request: VerifyMobileRequest): Promise<VerifyMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMobileWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](~~169786~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request VerifyPhoneWithTokenRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return VerifyPhoneWithTokenResponse
   */
  async verifyPhoneWithTokenWithOptions(request: VerifyPhoneWithTokenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyPhoneWithTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.spToken)) {
      query["SpToken"] = request.spToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyPhoneWithToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyPhoneWithTokenResponse>(await this.callApi(params, req, runtime), new VerifyPhoneWithTokenResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the phone number verification feature for HTML5 pages](~~169786~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request VerifyPhoneWithTokenRequest
    * @return VerifyPhoneWithTokenResponse
   */
  async verifyPhoneWithToken(request: VerifyPhoneWithTokenRequest): Promise<VerifyPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPhoneWithTokenWithOptions(request, runtime);
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](~~313209~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request VerifySmsCodeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return VerifySmsCodeResponse
   */
  async verifySmsCodeWithOptions(request: VerifySmsCodeRequest, runtime: $Util.RuntimeOptions): Promise<VerifySmsCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.smsCode)) {
      query["SmsCode"] = request.smsCode;
    }

    if (!Util.isUnset(request.smsToken)) {
      query["SmsToken"] = request.smsToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifySmsCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifySmsCodeResponse>(await this.callApi(params, req, runtime), new VerifySmsCodeResponse({}));
  }

  /**
    * ### [](#)Preparations
    * You must register an Alibaba Cloud account, obtain an Alibaba Cloud AccessKey pair, and create a verification service. For more information, see [Use the SMS verification feature](~~313209~~).
    * ### [](#qps)QPS limits
    * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
    *
    * @param request VerifySmsCodeRequest
    * @return VerifySmsCodeResponse
   */
  async verifySmsCode(request: VerifySmsCodeRequest): Promise<VerifySmsCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySmsCodeWithOptions(request, runtime);
  }

  async verifyWithFusionAuthTokenWithOptions(request: VerifyWithFusionAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyWithFusionAuthTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.verifyToken)) {
      query["VerifyToken"] = request.verifyToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyWithFusionAuthToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyWithFusionAuthTokenResponse>(await this.callApi(params, req, runtime), new VerifyWithFusionAuthTokenResponse({}));
  }

  async verifyWithFusionAuthToken(request: VerifyWithFusionAuthTokenRequest): Promise<VerifyWithFusionAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyWithFusionAuthTokenWithOptions(request, runtime);
  }

}
