// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class FindIdpListByLoginIdentifierRequest extends $tea.Model {
  clientChannel?: string;
  clientId?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  loginIdentifier?: string;
  supportTypes?: string[];
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
  profileRegion?: string;
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
  authenticationCode?: string;
  clientId?: string;
  clientOS?: string;
  clientType?: string;
  clientVersion?: string;
  currentStage?: string;
  directoryId?: string;
  encryptedFingerPrintData?: string;
  encryptedKey?: string;
  encryptedPassword?: string;
  endUserId?: string;
  fingerPrintData?: string;
  idpId?: string;
  imageUrl?: string;
  keepAlive?: boolean;
  keepAliveToken?: string;
  loginIdentifier?: string;
  loginName?: string;
  networkType?: string;
  newPassword?: string;
  officeSiteId?: string;
  oldPassword?: string;
  password?: string;
  phone?: string;
  phoneVerifyCode?: string;
  regionId?: string;
  sessionId?: string;
  ssoExtendsCookies?: string;
  ssoSessionToken?: string;
  tokenCode?: string;
  umidToken?: string;
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
  accessType?: string;
  accountType?: string;
  adDomain?: string;
  email?: string;
  endUserId?: string;
  idpId?: string;
  industry?: string;
  keepAliveToken?: string;
  label?: string;
  loginToken?: string;
  nextStage?: string;
  officeSites?: string[];
  passwordStrategy?: GetLoginTokenResponseBodyPasswordStrategy;
  phone?: string;
  props?: { [key: string]: string };
  qrCodePng?: string;
  reason?: string;
  requestId?: string;
  riskVerifyInfo?: GetLoginTokenResponseBodyRiskVerifyInfo;
  secret?: string;
  sessionId?: string;
  tenantAlias?: string;
  tenantId?: number;
  tenantInfos?: GetLoginTokenResponseBodyTenantInfos[];
  vpcRegionId?: string;
  windowDisplayMode?: string;
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
  clientId?: string;
  clientType?: string;
  endUserId?: string;
  loginIdentifier?: string;
  loginToken?: string;
  officeSiteId?: string;
  profileRegion?: string;
  sessionId?: string;
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
  loginToken?: string;
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
  accountType?: string;
  cookies?: string;
  idpId?: string;
  idpName?: string;
  idpProvider?: string;
  jumpSwitch?: string;
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
  accessType?: string;
  officeSiteId?: string;
  providerId?: string;
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
  accessType?: string;
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
  email?: string;
  lastLockDuration?: number;
  locked?: boolean;
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
  accessType?: string;
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
   * @summary 身份认证查询接口
   *
   * @param request FindIdpListByLoginIdentifierRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FindIdpListByLoginIdentifierResponse
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
   * @summary 身份认证查询接口
   *
   * @param request FindIdpListByLoginIdentifierRequest
   * @return FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifier(request: FindIdpListByLoginIdentifierRequest): Promise<FindIdpListByLoginIdentifierResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findIdpListByLoginIdentifierWithOptions(request, runtime);
  }

  /**
   * @summary GetLoginToken
   *
   * @param request GetLoginTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLoginTokenResponse
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
   * @summary GetLoginToken
   *
   * @param request GetLoginTokenRequest
   * @return GetLoginTokenResponse
   */
  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  /**
   * @param request RefreshLoginTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RefreshLoginTokenResponse
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
   * @param request RefreshLoginTokenRequest
   * @return RefreshLoginTokenResponse
   */
  async refreshLoginToken(request: RefreshLoginTokenRequest): Promise<RefreshLoginTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

}
