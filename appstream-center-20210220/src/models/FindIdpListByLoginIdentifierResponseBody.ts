// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
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

