// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class FindIdpListByLoginIdentifierResponseBodyIdpInfos extends $dara.Model {
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
  idpNameEN?: string;
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
      idpNameEN: 'IdpNameEN',
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
      idpNameEN: 'string',
      idpProvider: 'string',
      jumpSwitch: 'string',
      ssoProtocol: 'string',
      ssoServiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBodyOfficeSiteInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBodyTenantAliasInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyMfaTypeList extends $dara.Model {
  name?: string;
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      stage: 'Stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      stage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyPasswordStrategy extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tenantAlternativeChars)) {
      $dara.Model.validateArray(this.tenantAlternativeChars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyRiskVerifyInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBodyTenantInfos extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsTokenResponseBodyStsTokenModel extends $dara.Model {
  /**
   * @example
   * be4be09e-cd00-4b4c-add7-11b4d8****
   */
  sessionId?: string;
  /**
   * @example
   * sts****
   */
  stsToken?: string;
  /**
   * @example
   * 105552640689****
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'SessionId',
      stsToken: 'StsToken',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      stsToken: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierRequest extends $dara.Model {
  availableFeatures?: { [key: string]: string };
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
      availableFeatures: 'AvailableFeatures',
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
      availableFeatures: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

  validate() {
    if(this.availableFeatures) {
      $dara.Model.validateMap(this.availableFeatures);
    }
    if(Array.isArray(this.supportTypes)) {
      $dara.Model.validateArray(this.supportTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierShrinkRequest extends $dara.Model {
  availableFeaturesShrink?: string;
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
      availableFeaturesShrink: 'AvailableFeatures',
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
      availableFeaturesShrink: 'string',
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

  validate() {
    if(Array.isArray(this.supportTypes)) {
      $dara.Model.validateArray(this.supportTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.idpInfos)) {
      $dara.Model.validateArray(this.idpInfos);
    }
    if(this.officeSiteInfo && typeof (this.officeSiteInfo as any).validate === 'function') {
      (this.officeSiteInfo as any).validate();
    }
    if(this.popRegionConfig) {
      $dara.Model.validateMap(this.popRegionConfig);
    }
    if(this.tenantAliasInfo && typeof (this.tenantAliasInfo as any).validate === 'function') {
      (this.tenantAliasInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindIdpListByLoginIdentifierResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenRequest extends $dara.Model {
  /**
   * @example
   * 182901
   */
  authenticationCode?: string;
  availableFeatures?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05967f80-6f51-46cb-a27c-****
   */
  clientId?: string;
  clientName?: string;
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
  mfaType?: string;
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
  profileRegion?: string;
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
      availableFeatures: 'AvailableFeatures',
      clientId: 'ClientId',
      clientName: 'ClientName',
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
      mfaType: 'MfaType',
      networkType: 'NetworkType',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      phone: 'Phone',
      phoneVerifyCode: 'PhoneVerifyCode',
      profileRegion: 'ProfileRegion',
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
      availableFeatures: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientId: 'string',
      clientName: 'string',
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
      mfaType: 'string',
      networkType: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      phone: 'string',
      phoneVerifyCode: 'string',
      profileRegion: 'string',
      regionId: 'string',
      sessionId: 'string',
      ssoExtendsCookies: 'string',
      ssoSessionToken: 'string',
      tokenCode: 'string',
      umidToken: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.availableFeatures) {
      $dara.Model.validateMap(this.availableFeatures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenShrinkRequest extends $dara.Model {
  /**
   * @example
   * 182901
   */
  authenticationCode?: string;
  availableFeaturesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05967f80-6f51-46cb-a27c-****
   */
  clientId?: string;
  clientName?: string;
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
  mfaType?: string;
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
  profileRegion?: string;
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
      availableFeaturesShrink: 'AvailableFeatures',
      clientId: 'ClientId',
      clientName: 'ClientName',
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
      mfaType: 'MfaType',
      networkType: 'NetworkType',
      newPassword: 'NewPassword',
      officeSiteId: 'OfficeSiteId',
      oldPassword: 'OldPassword',
      password: 'Password',
      phone: 'Phone',
      phoneVerifyCode: 'PhoneVerifyCode',
      profileRegion: 'ProfileRegion',
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
      availableFeaturesShrink: 'string',
      clientId: 'string',
      clientName: 'string',
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
      mfaType: 'string',
      networkType: 'string',
      newPassword: 'string',
      officeSiteId: 'string',
      oldPassword: 'string',
      password: 'string',
      phone: 'string',
      phoneVerifyCode: 'string',
      profileRegion: 'string',
      regionId: 'string',
      sessionId: 'string',
      ssoExtendsCookies: 'string',
      ssoSessionToken: 'string',
      tokenCode: 'string',
      umidToken: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponseBody extends $dara.Model {
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
  mfaTypeList?: GetLoginTokenResponseBodyMfaTypeList[];
  /**
   * @example
   * MFABind
   */
  nextStage?: string;
  nickName?: string;
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
      mfaTypeList: 'MfaTypeList',
      nextStage: 'NextStage',
      nickName: 'NickName',
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
      mfaTypeList: { 'type': 'array', 'itemType': GetLoginTokenResponseBodyMfaTypeList },
      nextStage: 'string',
      nickName: 'string',
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

  validate() {
    if(Array.isArray(this.mfaTypeList)) {
      $dara.Model.validateArray(this.mfaTypeList);
    }
    if(Array.isArray(this.officeSites)) {
      $dara.Model.validateArray(this.officeSites);
    }
    if(this.passwordStrategy && typeof (this.passwordStrategy as any).validate === 'function') {
      (this.passwordStrategy as any).validate();
    }
    if(this.props) {
      $dara.Model.validateMap(this.props);
    }
    if(this.riskVerifyInfo && typeof (this.riskVerifyInfo as any).validate === 'function') {
      (this.riskVerifyInfo as any).validate();
    }
    if(Array.isArray(this.tenantInfos)) {
      $dara.Model.validateArray(this.tenantInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginTokenResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e4e169bea1cc48e8afac53**********
   */
  authCode?: string;
  /**
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b69****
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.**
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 6.3.0-R-20231106.210000
   */
  clientVersion?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsTokenResponseBody extends $dara.Model {
  /**
   * @example
   * CCF92035-6231-5ABB-930E-1E003C32****
   */
  requestId?: string;
  stsTokenModel?: GetStsTokenResponseBodyStsTokenModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stsTokenModel: 'StsTokenModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stsTokenModel: GetStsTokenResponseBodyStsTokenModel,
    };
  }

  validate() {
    if(this.stsTokenModel && typeof (this.stsTokenModel as any).validate === 'function') {
      (this.stsTokenModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStsTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStsTokenResponseBody;
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
      body: GetStsTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLoginTokenResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 身份认证查询接口
   * 
   * @param tmpReq - FindIdpListByLoginIdentifierRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifierWithOptions(tmpReq: FindIdpListByLoginIdentifierRequest, runtime: $dara.RuntimeOptions): Promise<FindIdpListByLoginIdentifierResponse> {
    tmpReq.validate();
    let request = new FindIdpListByLoginIdentifierShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableFeatures)) {
      request.availableFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableFeatures, "AvailableFeatures", "json");
    }

    let query = { };
    if (!$dara.isNull(request.availableFeaturesShrink)) {
      query["AvailableFeatures"] = request.availableFeaturesShrink;
    }

    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientChannel)) {
      body["ClientChannel"] = request.clientChannel;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.loginIdentifier)) {
      body["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!$dara.isNull(request.supportTypes)) {
      body["SupportTypes"] = request.supportTypes;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<FindIdpListByLoginIdentifierResponse>(await this.callApi(params, req, runtime), new FindIdpListByLoginIdentifierResponse({}));
  }

  /**
   * 身份认证查询接口
   * 
   * @param request - FindIdpListByLoginIdentifierRequest
   * @returns FindIdpListByLoginIdentifierResponse
   */
  async findIdpListByLoginIdentifier(request: FindIdpListByLoginIdentifierRequest): Promise<FindIdpListByLoginIdentifierResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findIdpListByLoginIdentifierWithOptions(request, runtime);
  }

  /**
   * GetLoginToken
   * 
   * @param tmpReq - GetLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoginTokenResponse
   */
  async getLoginTokenWithOptions(tmpReq: GetLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<GetLoginTokenResponse> {
    tmpReq.validate();
    let request = new GetLoginTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableFeatures)) {
      request.availableFeaturesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableFeatures, "AvailableFeatures", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!$dara.isNull(request.availableFeaturesShrink)) {
      query["AvailableFeatures"] = request.availableFeaturesShrink;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientName)) {
      query["ClientName"] = request.clientName;
    }

    if (!$dara.isNull(request.clientOS)) {
      query["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.currentStage)) {
      query["CurrentStage"] = request.currentStage;
    }

    if (!$dara.isNull(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.encryptedFingerPrintData)) {
      query["EncryptedFingerPrintData"] = request.encryptedFingerPrintData;
    }

    if (!$dara.isNull(request.encryptedKey)) {
      query["EncryptedKey"] = request.encryptedKey;
    }

    if (!$dara.isNull(request.encryptedPassword)) {
      query["EncryptedPassword"] = request.encryptedPassword;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.fingerPrintData)) {
      query["FingerPrintData"] = request.fingerPrintData;
    }

    if (!$dara.isNull(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.keepAliveToken)) {
      query["KeepAliveToken"] = request.keepAliveToken;
    }

    if (!$dara.isNull(request.loginIdentifier)) {
      query["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!$dara.isNull(request.loginName)) {
      query["LoginName"] = request.loginName;
    }

    if (!$dara.isNull(request.mfaType)) {
      query["MfaType"] = request.mfaType;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.newPassword)) {
      query["NewPassword"] = request.newPassword;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.oldPassword)) {
      query["OldPassword"] = request.oldPassword;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.phoneVerifyCode)) {
      query["PhoneVerifyCode"] = request.phoneVerifyCode;
    }

    if (!$dara.isNull(request.profileRegion)) {
      query["ProfileRegion"] = request.profileRegion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.ssoExtendsCookies)) {
      query["SsoExtendsCookies"] = request.ssoExtendsCookies;
    }

    if (!$dara.isNull(request.ssoSessionToken)) {
      query["SsoSessionToken"] = request.ssoSessionToken;
    }

    if (!$dara.isNull(request.tokenCode)) {
      query["TokenCode"] = request.tokenCode;
    }

    if (!$dara.isNull(request.umidToken)) {
      query["UmidToken"] = request.umidToken;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<GetLoginTokenResponse>(await this.callApi(params, req, runtime), new GetLoginTokenResponse({}));
  }

  /**
   * GetLoginToken
   * 
   * @param request - GetLoginTokenRequest
   * @returns GetLoginTokenResponse
   */
  async getLoginToken(request: GetLoginTokenRequest): Promise<GetLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoginTokenWithOptions(request, runtime);
  }

  /**
   * 获取无影StsToken
   * 
   * @param request - GetStsTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStsTokenResponse
   */
  async getStsTokenWithOptions(request: GetStsTokenRequest, runtime: $dara.RuntimeOptions): Promise<GetStsTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authCode)) {
      body["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.clientOS)) {
      body["ClientOS"] = request.clientOS;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStsToken",
      version: "2021-02-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetStsTokenResponse>(await this.callApi(params, req, runtime), new GetStsTokenResponse({}));
  }

  /**
   * 获取无影StsToken
   * 
   * @param request - GetStsTokenRequest
   * @returns GetStsTokenResponse
   */
  async getStsToken(request: GetStsTokenRequest): Promise<GetStsTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStsTokenWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginTokenWithOptions(request: RefreshLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<RefreshLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.loginIdentifier)) {
      query["LoginIdentifier"] = request.loginIdentifier;
    }

    if (!$dara.isNull(request.loginToken)) {
      query["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.profileRegion)) {
      query["ProfileRegion"] = request.profileRegion;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<RefreshLoginTokenResponse>(await this.callApi(params, req, runtime), new RefreshLoginTokenResponse({}));
  }

  /**
   * @param request - RefreshLoginTokenRequest
   * @returns RefreshLoginTokenResponse
   */
  async refreshLoginToken(request: RefreshLoginTokenRequest): Promise<RefreshLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshLoginTokenWithOptions(request, runtime);
  }

}
