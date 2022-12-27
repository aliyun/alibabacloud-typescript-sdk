// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  url?: string;
  static names(): { [key: string]: string } {
    return {
      origin: 'Origin',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      origin: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

  async createVerifyScheme(request: CreateVerifySchemeRequest): Promise<CreateVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySchemeWithOptions(request, runtime);
  }

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

  async deleteVerifyScheme(request: DeleteVerifySchemeRequest): Promise<DeleteVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVerifySchemeWithOptions(request, runtime);
  }

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

  async describeVerifyScheme(request: DescribeVerifySchemeRequest): Promise<DescribeVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySchemeWithOptions(request, runtime);
  }

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

  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

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

  async getAuthorizationUrl(request: GetAuthorizationUrlRequest): Promise<GetAuthorizationUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationUrlWithOptions(request, runtime);
  }

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

  async getMobile(request: GetMobileRequest): Promise<GetMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMobileWithOptions(request, runtime);
  }

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

  async getPhoneWithToken(request: GetPhoneWithTokenRequest): Promise<GetPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneWithTokenWithOptions(request, runtime);
  }

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

  async getSmsAuthTokens(request: GetSmsAuthTokensRequest): Promise<GetSmsAuthTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSmsAuthTokensWithOptions(request, runtime);
  }

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

  async queryGateVerifyBillingPublic(request: QueryGateVerifyBillingPublicRequest): Promise<QueryGateVerifyBillingPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGateVerifyBillingPublicWithOptions(request, runtime);
  }

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

  async queryGateVerifyStatisticPublic(request: QueryGateVerifyStatisticPublicRequest): Promise<QueryGateVerifyStatisticPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGateVerifyStatisticPublicWithOptions(request, runtime);
  }

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

  async verifyMobile(request: VerifyMobileRequest): Promise<VerifyMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMobileWithOptions(request, runtime);
  }

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

  async verifyPhoneWithToken(request: VerifyPhoneWithTokenRequest): Promise<VerifyPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPhoneWithTokenWithOptions(request, runtime);
  }

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

  async verifySmsCode(request: VerifySmsCodeRequest): Promise<VerifySmsCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifySmsCodeWithOptions(request, runtime);
  }

}
