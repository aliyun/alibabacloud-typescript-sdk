// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

