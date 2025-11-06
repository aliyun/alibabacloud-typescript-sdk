// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainByInstanceIdResponseBodyDnsList extends $dara.Model {
  dns?: string[];
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dns)) {
      $dara.Model.validateArray(this.dns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBodyTagTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBodyTag extends $dara.Model {
  tag?: QueryDomainByInstanceIdResponseBodyTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryDomainByInstanceIdResponseBodyTagTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByInstanceIdResponseBody extends $dara.Model {
  dnsList?: QueryDomainByInstanceIdResponseBodyDnsList;
  /**
   * @example
   * 1234
   */
  domainGroupId?: number;
  domainGroupName?: string;
  domainLifecycleStatus?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  domainNameProxyService?: boolean;
  /**
   * @example
   * NONAUDIT
   */
  domainNameVerificationStatus?: string;
  /**
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * false
   */
  emailVerificationClientHold?: boolean;
  /**
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @example
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @example
   * 2019-12-07 17:02:13
   */
  expirationDate?: string;
  /**
   * @example
   * 1625111915000
   */
  expirationDateLong?: number;
  /**
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  premium?: boolean;
  privacyServiceStatus?: string;
  /**
   * @example
   * NONAUDIT
   */
  realNameStatus?: string;
  /**
   * @example
   * Test litm
   */
  registrantName?: string;
  /**
   * @example
   * Test litm
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * NORMAL
   */
  registrantUpdatingStatus?: string;
  /**
   * @example
   * 2017-12-07 17:02:13
   */
  registrationDate?: string;
  /**
   * @example
   * 1625111915000
   */
  registrationDateLong?: number;
  remark?: string;
  /**
   * @example
   * 23C9B3C4-9E2C-4405-A88D-BD33E459D140
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  tag?: QueryDomainByInstanceIdResponseBodyTag;
  /**
   * @example
   * NORMAL
   */
  transferOutStatus?: string;
  /**
   * @example
   * CLOSE
   */
  transferProhibitionLock?: string;
  /**
   * @example
   * CLOSE
   */
  updateProhibitionLock?: string;
  /**
   * @example
   * 121000000****
   */
  userId?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainLifecycleStatus: 'DomainLifecycleStatus',
      domainName: 'DomainName',
      domainNameProxyService: 'DomainNameProxyService',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      privacyServiceStatus: 'PrivacyServiceStatus',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      transferOutStatus: 'TransferOutStatus',
      transferProhibitionLock: 'TransferProhibitionLock',
      updateProhibitionLock: 'UpdateProhibitionLock',
      userId: 'UserId',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryDomainByInstanceIdResponseBodyDnsList,
      domainGroupId: 'number',
      domainGroupName: 'string',
      domainLifecycleStatus: 'string',
      domainName: 'string',
      domainNameProxyService: 'boolean',
      domainNameVerificationStatus: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      privacyServiceStatus: 'string',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tag: QueryDomainByInstanceIdResponseBodyTag,
      transferOutStatus: 'string',
      transferProhibitionLock: 'string',
      updateProhibitionLock: 'string',
      userId: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    if(this.dnsList && typeof (this.dnsList as any).validate === 'function') {
      (this.dnsList as any).validate();
    }
    if(this.tag && typeof (this.tag as any).validate === 'function') {
      (this.tag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

