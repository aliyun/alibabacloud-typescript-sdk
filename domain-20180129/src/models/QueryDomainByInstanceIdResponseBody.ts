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
  /**
   * @example
   * UN_SUPPORT
   */
  cnnicPrivacyServiceStatus?: string;
  dnsList?: QueryDomainByInstanceIdResponseBodyDnsList;
  /**
   * @remarks
   * The ID of the domain name group. You can call the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation to obtain the ID of the domain name group.
   * 
   * @example
   * 1234
   */
  domainGroupId?: number;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * 测试分组
   */
  domainGroupName?: string;
  domainLifecycleStatus?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the domain name privacy protection service is enabled.
   * 
   * @example
   * false
   */
  domainNameProxyService?: boolean;
  /**
   * @remarks
   * The status of the domain name review. Valid values:
   * 
   * - **NONAUDIT**: The domain name is not verified.
   * 
   * - **SUCCEED**: The domain name is verified.
   * 
   * - **FAILED**: The domain name fails to be verified.
   * 
   * - **AUDITING**: The domain name is being verified.
   * 
   * @example
   * NONAUDIT
   */
  domainNameVerificationStatus?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * - 1: The domain name needs to be renewed.
   * 
   * - 2: The domain name needs to be redeemed.
   * 
   * - 3: The domain name is normal.
   * 
   * @example
   * 1
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * - New gTLD.
   * 
   * - gTLD.
   * 
   * - ccTLD.
   * 
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @remarks
   * The email address of the domain name registrant.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the DNS resolution for the domain name is suspended. Valid values:
   * 
   * - **false**: The DNS resolution for the domain name is not suspended.
   * 
   * - **true**: The DNS resolution for the domain name is suspended.
   * 
   * @example
   * false
   */
  emailVerificationClientHold?: boolean;
  /**
   * @remarks
   * Indicates whether the email address of the domain name registrant is verified. Valid values:
   * 
   * - **0**: The email address is not verified.
   * 
   * - **1**: The email address is verified.
   * 
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @remarks
   * The number of days from the expiration date to the current date.
   * 
   * @example
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The expiration date of the domain name.
   * 
   * @example
   * 2019-12-07 17:02:13
   */
  expirationDate?: string;
  /**
   * @remarks
   * The expiration timestamp of the domain name.
   * 
   * @example
   * 1625111915000
   */
  expirationDateLong?: number;
  /**
   * @remarks
   * The expiration status of the domain name. Valid values:
   * 
   * - **1**: The domain name has not expired.
   * 
   * - **2**: The domain name has expired.
   * 
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @remarks
   * The instance ID of the domain name.
   * 
   * @example
   * S20179H1BBI9test
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain name. Valid values:
   * 
   * - **true**: a premium domain name.
   * 
   * - **false**: not a premium domain name.
   * 
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @example
   * UN_SUPPORT
   */
  privacyServiceStatus?: string;
  /**
   * @remarks
   * The real-name verification status of the domain name. Valid values:
   * 
   * - **NONAUDIT**: The real-name verification is not performed.
   * 
   * - **SUCCEED**: The real-name verification is successful.
   * 
   * - **FAILED**: The real-name verification fails.
   * 
   * - **AUDITING**: The real-name verification is in progress.
   * 
   * > The real-name verification status of a domain name is a composite status of domain name review and real-name verification. The real-name verification of a domain name is successful only when both the domain name review and real-name verification are successful.
   * 
   * @example
   * NONAUDIT
   */
  realNameStatus?: string;
  /**
   * @remarks
   * The name of the contact person.
   * 
   * @example
   * Test litm
   */
  registrantName?: string;
  /**
   * @remarks
   * The registrant of the domain name.
   * 
   * @example
   * Test litm
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The type of the domain name registrant. Valid values:
   * 
   * - **1**: an individual.
   * 
   * - **2**: an enterprise.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The status of the domain name registrant. Valid values:
   * 
   * - **PENDING**: The information about the domain name registrant is being modified.
   * 
   * - **NORMAL**: The information about the domain name registrant is not being modified.
   * 
   * @example
   * NORMAL
   */
  registrantUpdatingStatus?: string;
  /**
   * @remarks
   * The registration date of the domain name.
   * 
   * @example
   * 2017-12-07 17:02:13
   */
  registrationDate?: string;
  /**
   * @remarks
   * The registration timestamp of the domain name.
   * 
   * @example
   * 1625111915000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks of the domain name.
   * 
   * @example
   * 测试备注
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23C9B3C4-9E2C-4405-A88D-BD33E459D140
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmw6bpc6n7zai
   */
  resourceGroupId?: string;
  tag?: QueryDomainByInstanceIdResponseBodyTag;
  /**
   * @remarks
   * The status of the domain name transfer. Valid values:
   * 
   * - **NORMAL**: The domain name is not being transferred out of Alibaba Cloud.
   * 
   * - **PENDING**: The domain name is being transferred out of Alibaba Cloud.
   * 
   * @example
   * NORMAL
   */
  transferOutStatus?: string;
  /**
   * @remarks
   * The status of the domain name transfer lock. Valid values:
   * 
   * - **NONE_SETTING**: The domain name transfer lock is not enabled.
   * 
   * - **OPEN**: The domain name transfer lock is enabled.
   * 
   * - **CLOSE**: The domain name transfer lock is disabled.
   * 
   * @example
   * CLOSE
   */
  transferProhibitionLock?: string;
  /**
   * @remarks
   * The status of the security lock for the domain name. Valid values:
   * 
   * - **NONE_SETTING**: The security lock is not enabled.
   * 
   * - **OPEN**: The security lock is enabled.
   * 
   * - **CLOSE**: The security lock is disabled.
   * 
   * @example
   * CLOSE
   */
  updateProhibitionLock?: string;
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 121000000****
   */
  userId?: string;
  /**
   * @remarks
   * The contact person in Chinese.
   * 
   * > This parameter is applicable only to the China site.
   * 
   * @example
   * 李四
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The registrant of the domain name in Chinese.
   * 
   * > This parameter is applicable only to the China site.
   * 
   * @example
   * 李四
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      cnnicPrivacyServiceStatus: 'CnnicPrivacyServiceStatus',
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
      cnnicPrivacyServiceStatus: 'string',
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

