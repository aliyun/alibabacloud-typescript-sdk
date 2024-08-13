// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class FindIdpListByLoginIdentifierRequest extends $tea.Model {
  /**
   * @example
   * pc
   */
  clientChannel?: string;
  /**
   * @example
   * 370b56f8-2812-4b6c-bfa6-2560791c****
   */
  clientId?: string;
  /**
   * @example
   * 22.21.XX.XX
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Aliyun123***
   */
  loginIdentifier?: string;
  supportTypes?: string[];
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientChannel: 'ClientChannel',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      loginIdentifier: 'LoginIdentifier',
      supportTypes: 'SupportTypes',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientChannel: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      loginIdentifier: 'string',
      supportTypes: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBody extends $tea.Model {
  idpInfos?: FindIdpListByLoginIdentifierResponseBodyIdpInfos[];
  officeSiteInfo?: FindIdpListByLoginIdentifierResponseBodyOfficeSiteInfo;
  popRegionConfig?: { [key: string]: string };
  /**
   * @example
   * cn_hangzhou
   */
  profileRegion?: string;
  /**
   * @example
   * AD2D0761-1FE5-549D-B169-D3F8D19C****
   */
  requestId?: string;
  tenantAliasInfo?: FindIdpListByLoginIdentifierResponseBodyTenantAliasInfo;
  static names(): { [key: string]: string } {
    return {
      idpInfos: 'IdpInfos',
      officeSiteInfo: 'OfficeSiteInfo',
      popRegionConfig: 'PopRegionConfig',
      profileRegion: 'ProfileRegion',
      requestId: 'RequestId',
      tenantAliasInfo: 'TenantAliasInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpInfos: { 'type': 'array', 'itemType': FindIdpListByLoginIdentifierResponseBodyIdpInfos },
      officeSiteInfo: FindIdpListByLoginIdentifierResponseBodyOfficeSiteInfo,
      popRegionConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      profileRegion: 'string',
      requestId: 'string',
      tenantAliasInfo: FindIdpListByLoginIdentifierResponseBodyTenantAliasInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FindIdpListByLoginIdentifierResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FindIdpListByLoginIdentifierResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $tea.Model {
  /**
   * @example
   * 182901
   */
  authenticationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05967f80-6f51-46cb-a27c-****
   */
  clientId?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 22631)
   */
  clientOS?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * 7.3.0-20240619.143924
   */
  clientVersion?: string;
  /**
   * @example
   * SsoTokenLogin
   */
  currentStage?: string;
  /**
   * @example
   * cn-beijing+dir-j9dd****
   */
  directoryId?: string;
  /**
   * @example
   * null
   */
  encryptedFingerPrintData?: string;
  /**
   * @example
   * 4d7****8e90bb0484fc
   */
  encryptedKey?: string;
  /**
   * @example
   * 04d7****8e90bb0484fc;gJ1GLca1vQRRqQbRvByU0A==;5kOWZE7AtbQhki+4LAo69A==
   */
  encryptedPassword?: string;
  /**
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @example
   * null
   */
  fingerPrintData?: string;
  /**
   * @example
   * idp-iwntrlbb98q7v****
   */
  idpId?: string;
  /**
   * @example
   * null
   */
  imageUrl?: string;
  /**
   * @example
   * true
   */
  keepAlive?: boolean;
  /**
   * @example
   * 00ugamMAoO1+u1MlhmgCeZJ75q094x3H/4kg7ZaTI3f/joVTVPIpJgfv9JFkPLNxnQjblrvsByNas08mc6FtVWvQPOE68fqmt6QMM4UbRtahm8luxEXvicF58qSPXW1hxOtV/Ev6d92VBz2Bck/N4CYyjD0iLocfN8jkBnt231****
   */
  keepAliveToken?: string;
  /**
   * @example
   * Fe04****
   */
  loginIdentifier?: string;
  /**
   * @example
   * null
   */
  loginName?: string;
  /**
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @example
   * Admin@1234****
   */
  newPassword?: string;
  /**
   * @example
   * cn-beijing+dir-j9dd****
   */
  officeSiteId?: string;
  /**
   * @example
   * Admin@1234****
   */
  oldPassword?: string;
  /**
   * @example
   * Admin@1234****
   */
  password?: string;
  /**
   * @example
   * 1822727****
   */
  phone?: string;
  /**
   * @example
   * 321123
   */
  phoneVerifyCode?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * c6f3cd91-65fc-4c7b-b189-2a73da0****
   */
  sessionId?: string;
  /**
   * @example
   * null
   */
  ssoExtendsCookies?: string;
  /**
   * @example
   * 04d707a6-fb23-44a7-aae7-8e90****
   */
  ssoSessionToken?: string;
  /**
   * @example
   * 1234***
   */
  tokenCode?: string;
  /**
   * @example
   * 04d707a6-fb23-44a7-aae7-8e90bb04****
   */
  umidToken?: string;
  /**
   * @example
   * C50973691A6D2BE23F2CDD73B85B****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode: 'AuthenticationCode',
      clientId: 'ClientId',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      currentStage: 'CurrentStage',
      directoryId: 'DirectoryId',
      encryptedFingerPrintData: 'EncryptedFingerPrintData',
      encryptedKey: 'EncryptedKey',
      encryptedPassword: 'EncryptedPassword',
      endUserId: 'EndUserId',
      fingerPrintData: 'FingerPrintData',
      idpId: 'IdpId',
      imageUrl: 'ImageUrl',
      keepAlive: 'KeepAlive',
      keepAliveToken: 'KeepAliveToken',
      loginIdentifier: 'LoginIdentifier',
      loginName: 'LoginName',
      networkType: 'NetworkType',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      phone: 'Phone',
      phoneVerifyCode: 'PhoneVerifyCode',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      ssoExtendsCookies: 'SsoExtendsCookies',
      ssoSessionToken: 'SsoSessionToken',
      tokenCode: 'TokenCode',
      umidToken: 'UmidToken',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode: 'string',
      clientId: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      currentStage: 'string',
      directoryId: 'string',
      encryptedFingerPrintData: 'string',
      encryptedKey: 'string',
      encryptedPassword: 'string',
      endUserId: 'string',
      fingerPrintData: 'string',
      idpId: 'string',
      imageUrl: 'string',
      keepAlive: 'boolean',
      keepAliveToken: 'string',
      loginIdentifier: 'string',
      loginName: 'string',
      networkType: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      phone: 'string',
      phoneVerifyCode: 'string',
      regionId: 'string',
      sessionId: 'string',
      ssoExtendsCookies: 'string',
      ssoSessionToken: 'string',
      tokenCode: 'string',
      umidToken: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $tea.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * ad
   */
  accountType?: string;
  /**
   * @example
   * easthp***.com
   */
  adDomain?: string;
  /**
   * @example
   * alice***@aliyun.com
   */
  email?: string;
  /**
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @example
   * idp-7ttvs4ove8bo5***
   */
  idpId?: string;
  /**
   * @example
   * edu
   */
  industry?: string;
  /**
   * @example
   * 006YwvYMsesWWsDBZnVB+Wq9AvJDVIqOY3YCktvtb7+KxMb3ClnNlV8+l/knhZYrXUmeP06IzkjF+IgcZ3vZKOyMprDyFHjCy1r27FRE/U7+geWCl8iQ+yF8GaCRHfJEkC2+ROs93HkT4tfHxyY1J8W7O7ZQGUC/cdCvm+cCP6FIy73IUuPuVR6PcKYXIp***
   */
  keepAliveToken?: string;
  /**
   * @example
   * test:wuying
   */
  label?: string;
  /**
   * @example
   * v185fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d****
   */
  loginToken?: string;
  /**
   * @example
   * MFABind
   */
  nextStage?: string;
  officeSites?: string[];
  passwordStrategy?: GetLoginTokenResponseBodyPasswordStrategy;
  /**
   * @example
   * 1826717****
   */
  phone?: string;
  props?: { [key: string]: string };
  /**
   * @example
   * 5OCLLKKOJU5HPBX66H3QCTWY******
   */
  qrCodePng?: string;
  /**
   * @example
   * PasswordExpired
   */
  reason?: string;
  /**
   * @example
   * EEA72491-B731-53D6-83ED-209769D6****
   */
  requestId?: string;
  riskVerifyInfo?: GetLoginTokenResponseBodyRiskVerifyInfo;
  /**
   * @example
   * 4JZNSDHDM3T6AZ4G2O5OWXBLLE4P****
   */
  secret?: string;
  /**
   * @example
   * cc15c91c-821b-4edd-9af2-6df66cc****
   */
  sessionId?: string;
  /**
   * @example
   * Rq201***
   */
  tenantAlias?: string;
  /**
   * @example
   * 13747924304****
   */
  tenantId?: number;
  tenantInfos?: GetLoginTokenResponseBodyTenantInfos[];
  /**
   * @example
   * cn-beijing
   */
  vpcRegionId?: string;
  /**
   * @example
   * Windowed
   */
  windowDisplayMode?: string;
  /**
   * @example
   * 0aba1403b337a***
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      accountType: 'AccountType',
      adDomain: 'AdDomain',
      email: 'Email',
      endUserId: 'EndUserId',
      idpId: 'IdpId',
      industry: 'Industry',
      keepAliveToken: 'KeepAliveToken',
      label: 'Label',
      loginToken: 'LoginToken',
      nextStage: 'NextStage',
      officeSites: 'OfficeSites',
      passwordStrategy: 'PasswordStrategy',
      phone: 'Phone',
      props: 'Props',
      qrCodePng: 'QrCodePng',
      reason: 'Reason',
      requestId: 'RequestId',
      riskVerifyInfo: 'RiskVerifyInfo',
      secret: 'Secret',
      sessionId: 'SessionId',
      tenantAlias: 'TenantAlias',
      tenantId: 'TenantId',
      tenantInfos: 'TenantInfos',
      vpcRegionId: 'VpcRegionId',
      windowDisplayMode: 'WindowDisplayMode',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      accountType: 'string',
      adDomain: 'string',
      email: 'string',
      endUserId: 'string',
      idpId: 'string',
      industry: 'string',
      keepAliveToken: 'string',
      label: 'string',
      loginToken: 'string',
      nextStage: 'string',
      officeSites: { 'type': 'array', 'itemType': 'string' },
      passwordStrategy: GetLoginTokenResponseBodyPasswordStrategy,
      phone: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      qrCodePng: 'string',
      reason: 'string',
      requestId: 'string',
      riskVerifyInfo: GetLoginTokenResponseBodyRiskVerifyInfo,
      secret: 'string',
      sessionId: 'string',
      tenantAlias: 'string',
      tenantId: 'number',
      tenantInfos: { 'type': 'array', 'itemType': GetLoginTokenResponseBodyTenantInfos },
      vpcRegionId: 'string',
      windowDisplayMode: 'string',
      wyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoginTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * windows
   */
  clientType?: string;
  /**
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @example
   * Alibaba****
   */
  loginIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1046341d8d4e2f05c4aa168196009613594aaf451499bfc75e54699efa7230bc968e1debb1fa4063b01e5d327b467****
   */
  loginToken?: string;
  /**
   * @example
   * cn-shenzhen+dir-436909****
   */
  officeSiteId?: string;
  profileRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6442b2fd-ed3e-423a-8e6e-352d26a4****
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientType: 'ClientType',
      endUserId: 'EndUserId',
      loginIdentifier: 'LoginIdentifier',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      profileRegion: 'ProfileRegion',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientType: 'string',
      endUserId: 'string',
      loginIdentifier: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      profileRegion: 'string',
      sessionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponseBody extends $tea.Model {
  /**
   * @example
   * v12369636c721ba6b3ddb1683341016775c3f63e4d0e78f120f9a0544ed826b7af7daf747c402f0d0730b52f451b70****
   */
  loginToken?: string;
  /**
   * @example
   * 419F31B9-1FDF-5644-ABA3-D00026FA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginToken: 'LoginToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshLoginTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshLoginTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBodyIdpInfos extends $tea.Model {
  /**
   * @example
   * simple
   */
  accountType?: string;
  /**
   * @example
   * null
   */
  cookies?: string;
  /**
   * @example
   * idp-hlyexfvwert9m8****
   */
  idpId?: string;
  idpName?: string;
  idpProvider?: string;
  /**
   * @example
   * true
   */
  jumpSwitch?: string;
  /**
   * @example
   * SAML
   */
  ssoProtocol?: string;
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      cookies: 'Cookies',
      idpId: 'IdpId',
      idpName: 'IdpName',
      idpProvider: 'IdpProvider',
      jumpSwitch: 'JumpSwitch',
      ssoProtocol: 'SsoProtocol',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      cookies: 'string',
      idpId: 'string',
      idpName: 'string',
      idpProvider: 'string',
      jumpSwitch: 'string',
      ssoProtocol: 'string',
      ssoServiceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBodyOfficeSiteInfo extends $tea.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * cn-shanghai+dir-448204****
   */
  officeSiteId?: string;
  /**
   * @example
   * 26842
   */
  providerId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      officeSiteId: 'OfficeSiteId',
      providerId: 'ProviderId',
      regionId: 'RegionId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      officeSiteId: 'string',
      providerId: 'string',
      regionId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBodyTenantAliasInfo extends $tea.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * Or09****
   */
  tenantAlias?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      tenantAlias: 'TenantAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      tenantAlias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyPasswordStrategy extends $tea.Model {
  tenantAlternativeChars?: string[];
  /**
   * @example
   * 12
   */
  tenantPasswordLength?: number;
  static names(): { [key: string]: string } {
    return {
      tenantAlternativeChars: 'TenantAlternativeChars',
      tenantPasswordLength: 'TenantPasswordLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantAlternativeChars: { 'type': 'array', 'itemType': 'string' },
      tenantPasswordLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyRiskVerifyInfo extends $tea.Model {
  /**
   * @example
   * ppas***@aliyun.com
   */
  email?: string;
  /**
   * @example
   * 12000
   */
  lastLockDuration?: number;
  /**
   * @example
   * true
   */
  locked?: boolean;
  /**
   * @example
   * 1826717****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lastLockDuration: 'LastLockDuration',
      locked: 'Locked',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lastLockDuration: 'number',
      locked: 'boolean',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyTenantInfos extends $tea.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @example
   * Up830***
   */
  tenantAlias?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      tenantAlias: 'TenantAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      tenantAlias: 'string',
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
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 身份认证查询接口
   * 
   * @param request - FindIdpListByLoginIdentifierRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifierWithOptions(request: FindIdpListByLoginIdentifierRequest, runtime: $Util.RuntimeOptions): Promise<FindIdpListByLoginIdentifierResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!Util.isUnset(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.loginIdentifier)) {
      body["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!Util.isUnset(request.supportTypes)) {
      body["SupportTypes"] = request.supportTypes;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FindIdpListByLoginIdentifier",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FindIdpListByLoginIdentifierResponse>(await this.callApi(params, req, runtime), new FindIdpListByLoginIdentifierResponse({}));
  }

  /**
   * 身份认证查询接口
   * 
   * @param request - FindIdpListByLoginIdentifierRequest
   * @returns FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifier(request: FindIdpListByLoginIdentifierRequest): Promise<FindIdpListByLoginIdentifierResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findIdpListByLoginIdentifierWithOptions(request, runtime);
  }

  /**
   * GetLoginToken
   * 
   * @param request - GetLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginTokenResponse
   */
  async getLoginTokenWithOptions(request: GetLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.currentStage)) {
      query["CurrentStage"] = request.currentStage;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.encryptedFingerPrintData)) {
      query["EncryptedFingerPrintData"] = request.encryptedFingerPrintData;
    }

    if (!Util.isUnset(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!Util.isUnset(request.encryptedPassword)) {
      query["EncryptedPassword"] = request.encryptedPassword;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.fingerPrintData)) {
      query["FingerPrintData"] = request.fingerPrintData;
    }

    if (!Util.isUnset(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!Util.isUnset(request.keepAliveToken)) {
      query["KeepAliveToken"] = request.keepAliveToken;
    }

    if (!Util.isUnset(request.loginIdentifier)) {
      query["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!Util.isUnset(request.loginName)) {
      query["LoginName"] = request.loginName;
    }

    if (!Util.isUnset(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!Util.isUnset(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.phoneVerifyCode)) {
      query["PhoneVerifyCode"] = request.phoneVerifyCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.ssoExtendsCookies)) {
      query["SsoExtendsCookies"] = request.ssoExtendsCookies;
    }

    if (!Util.isUnset(request.ssoSessionToken)) {
      query["SsoSessionToken"] = request.ssoSessionToken;
    }

    if (!Util.isUnset(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    if (!Util.isUnset(request.umidToken)) {
      query["UmidToken"] = request.umidToken;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginToken",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginTokenResponse>(await this.callApi(params, req, runtime), new GetLoginTokenResponse({}));
  }

  /**
   * GetLoginToken
   * 
   * @param request - GetLoginTokenRequest
   * @returns GetLoginTokenResponse
   */
  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginTokenWithOptions(request: RefreshLoginTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshLoginTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.loginIdentifier)) {
      query["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!Util.isUnset(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.profileRegion)) {
      query["ProfileRegion"] = request.profileRegion;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshLoginToken",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshLoginTokenResponse>(await this.callApi(params, req, runtime), new RefreshLoginTokenResponse({}));
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginToken(request: RefreshLoginTokenRequest): Promise<RefreshLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

}
