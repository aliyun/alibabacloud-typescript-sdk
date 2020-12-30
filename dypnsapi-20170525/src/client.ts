// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateVerifySchemeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeName?: string;
  appName?: string;
  osType?: string;
  packName?: string;
  packSign?: string;
  bundleId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
      appName: 'AppName',
      osType: 'OsType',
      packName: 'PackName',
      packSign: 'PackSign',
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
      appName: 'string',
      osType: 'string',
      packName: 'string',
      packSign: 'string',
      bundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  gateVerifySchemeDTO?: CreateVerifySchemeResponseBodyGateVerifySchemeDTO;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      gateVerifySchemeDTO: 'GateVerifySchemeDTO',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      gateVerifySchemeDTO: CreateVerifySchemeResponseBodyGateVerifySchemeDTO,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeCode?: string;
  customerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
      customerId: 'CustomerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
      customerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemeCode?: string;
  customerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
      customerId: 'CustomerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
      customerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  schemeQueryResultDTO?: DescribeVerifySchemeResponseBodySchemeQueryResultDTO;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      schemeQueryResultDTO: 'SchemeQueryResultDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      schemeQueryResultDTO: DescribeVerifySchemeResponseBodySchemeQueryResultDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifySchemeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifySchemeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNo?: string;
  schemeId?: number;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNo: 'PhoneNo',
      schemeId: 'SchemeId',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNo: 'string',
      schemeId: 'number',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetAuthorizationUrlResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetAuthorizationUrlResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthorizationUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthorizationUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  url?: string;
  origin?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      url: 'Url',
      origin: 'Origin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      url: 'string',
      origin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  tokenInfo?: GetAuthTokenResponseBodyTokenInfo;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      tokenInfo: 'TokenInfo',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      tokenInfo: GetAuthTokenResponseBodyTokenInfo,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertifyResultRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  productCode?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      productCode: 'ProductCode',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      productCode: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertifyResultResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetCertifyResultResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetCertifyResultResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertifyResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCertifyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCertifyResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accessToken?: string;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accessToken: 'AccessToken',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accessToken: 'string',
      outId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  getMobileResultDTO?: GetMobileResponseBodyGetMobileResultDTO;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      getMobileResultDTO: 'GetMobileResultDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
      getMobileResultDTO: GetMobileResponseBodyGetMobileResultDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMobileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMobileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwiceTelVerifyRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  since?: string;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      since: 'Since',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      since: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwiceTelVerifyResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  twiceTelVerifyResult?: TwiceTelVerifyResponseBodyTwiceTelVerifyResult;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      twiceTelVerifyResult: 'TwiceTelVerifyResult',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      twiceTelVerifyResult: TwiceTelVerifyResponseBodyTwiceTelVerifyResult,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TwiceTelVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TwiceTelVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TwiceTelVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  accessCode?: string;
  phoneNumber?: string;
  outId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      accessCode: 'AccessCode',
      phoneNumber: 'PhoneNumber',
      outId: 'OutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      accessCode: 'string',
      phoneNumber: 'string',
      outId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponseBody extends $tea.Model {
  gateVerifyResultDTO?: VerifyMobileResponseBodyGateVerifyResultDTO;
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      gateVerifyResultDTO: 'GateVerifyResultDTO',
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateVerifyResultDTO: VerifyMobileResponseBodyGateVerifyResultDTO,
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyMobileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyMobileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  phoneNumber?: string;
  spToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      phoneNumber: 'PhoneNumber',
      spToken: 'SpToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      phoneNumber: 'string',
      spToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  gateVerify?: VerifyPhoneWithTokenResponseBodyGateVerify;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      gateVerify: 'GateVerify',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      gateVerify: VerifyPhoneWithTokenResponseBodyGateVerify,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyPhoneWithTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyPhoneWithTokenResponseBody,
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

export class GetAuthTokenResponseBodyTokenInfo extends $tea.Model {
  jwtToken?: string;
  accessToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      accessToken: 'AccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      accessToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertifyResultResponseBodyData extends $tea.Model {
  materialInfo?: string;
  verifyDesc?: string;
  identityInfo?: string;
  verifyResult?: string;
  deviceToken?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      verifyDesc: 'VerifyDesc',
      identityInfo: 'IdentityInfo',
      verifyResult: 'VerifyResult',
      deviceToken: 'DeviceToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      verifyDesc: 'string',
      identityInfo: 'string',
      verifyResult: 'string',
      deviceToken: 'string',
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

export class TwiceTelVerifyResponseBodyTwiceTelVerifyResult extends $tea.Model {
  carrier?: string;
  verifyResult?: number;
  static names(): { [key: string]: string } {
    return {
      carrier: 'Carrier',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carrier: 'string',
      verifyResult: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMobileResponseBodyGateVerifyResultDTO extends $tea.Model {
  verifyResult?: string;
  verifyId?: string;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
      verifyId: 'VerifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'string',
      verifyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPhoneWithTokenResponseBodyGateVerify extends $tea.Model {
  verifyResult?: string;
  verifyId?: string;
  static names(): { [key: string]: string } {
    return {
      verifyResult: 'VerifyResult',
      verifyId: 'VerifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyResult: 'string',
      verifyId: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVerifySchemeResponse>(await this.doRPCRequest("CreateVerifyScheme", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVerifySchemeResponse({}));
  }

  async createVerifyScheme(request: CreateVerifySchemeRequest): Promise<CreateVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySchemeWithOptions(request, runtime);
  }

  async deleteVerifySchemeWithOptions(request: DeleteVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVerifySchemeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVerifySchemeResponse>(await this.doRPCRequest("DeleteVerifyScheme", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVerifySchemeResponse({}));
  }

  async deleteVerifyScheme(request: DeleteVerifySchemeRequest): Promise<DeleteVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVerifySchemeWithOptions(request, runtime);
  }

  async describeVerifySchemeWithOptions(request: DescribeVerifySchemeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySchemeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifySchemeResponse>(await this.doRPCRequest("DescribeVerifyScheme", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifySchemeResponse({}));
  }

  async describeVerifyScheme(request: DescribeVerifySchemeRequest): Promise<DescribeVerifySchemeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySchemeWithOptions(request, runtime);
  }

  async getAuthorizationUrlWithOptions(request: GetAuthorizationUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuthorizationUrlResponse>(await this.doRPCRequest("GetAuthorizationUrl", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuthorizationUrlResponse({}));
  }

  async getAuthorizationUrl(request: GetAuthorizationUrlRequest): Promise<GetAuthorizationUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationUrlWithOptions(request, runtime);
  }

  async getAuthTokenWithOptions(request: GetAuthTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAuthTokenResponse>(await this.doRPCRequest("GetAuthToken", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetAuthTokenResponse({}));
  }

  async getAuthToken(request: GetAuthTokenRequest): Promise<GetAuthTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  async getCertifyResultWithOptions(request: GetCertifyResultRequest, runtime: $Util.RuntimeOptions): Promise<GetCertifyResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCertifyResultResponse>(await this.doRPCRequest("GetCertifyResult", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetCertifyResultResponse({}));
  }

  async getCertifyResult(request: GetCertifyResultRequest): Promise<GetCertifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertifyResultWithOptions(request, runtime);
  }

  async getMobileWithOptions(request: GetMobileRequest, runtime: $Util.RuntimeOptions): Promise<GetMobileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMobileResponse>(await this.doRPCRequest("GetMobile", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new GetMobileResponse({}));
  }

  async getMobile(request: GetMobileRequest): Promise<GetMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMobileWithOptions(request, runtime);
  }

  async twiceTelVerifyWithOptions(request: TwiceTelVerifyRequest, runtime: $Util.RuntimeOptions): Promise<TwiceTelVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TwiceTelVerifyResponse>(await this.doRPCRequest("TwiceTelVerify", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new TwiceTelVerifyResponse({}));
  }

  async twiceTelVerify(request: TwiceTelVerifyRequest): Promise<TwiceTelVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.twiceTelVerifyWithOptions(request, runtime);
  }

  async verifyMobileWithOptions(request: VerifyMobileRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMobileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyMobileResponse>(await this.doRPCRequest("VerifyMobile", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyMobileResponse({}));
  }

  async verifyMobile(request: VerifyMobileRequest): Promise<VerifyMobileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMobileWithOptions(request, runtime);
  }

  async verifyPhoneWithTokenWithOptions(request: VerifyPhoneWithTokenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyPhoneWithTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyPhoneWithTokenResponse>(await this.doRPCRequest("VerifyPhoneWithToken", "2017-05-25", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyPhoneWithTokenResponse({}));
  }

  async verifyPhoneWithToken(request: VerifyPhoneWithTokenRequest): Promise<VerifyPhoneWithTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyPhoneWithTokenWithOptions(request, runtime);
  }

}
