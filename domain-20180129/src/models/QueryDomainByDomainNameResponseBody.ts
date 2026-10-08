// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainByDomainNameResponseBodyDnsList extends $dara.Model {
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

export class QueryDomainByDomainNameResponseBodyTagTag extends $dara.Model {
  key?: string;
  vaue?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      vaue: 'Vaue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      vaue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByDomainNameResponseBodyTag extends $dara.Model {
  tag?: QueryDomainByDomainNameResponseBodyTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryDomainByDomainNameResponseBodyTagTag },
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

export class QueryDomainByDomainNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the privacy protection service for .cn domain names.
   * 
   * @example
   * UN_SUPPORT
   */
  cnnicPrivacyServiceStatus?: string;
  dnsList?: QueryDomainByDomainNameResponseBodyDnsList;
  /**
   * @remarks
   * The ID of the domain group. You can obtain the ID by calling the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * The name of the domain group.
   * 
   * @example
   * 测试分组
   */
  domainGroupName?: string;
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
   * Indicates whether privacy protection is enabled.
   * 
   * @example
   * false
   */
  domainNameProxyService?: boolean;
  /**
   * @remarks
   * The status of the domain name review. Valid values:
   * 
   * - **NONAUDIT**: Not reviewed.
   * 
   * - **SUCCEED**: Successful.
   * 
   * - **FAILED**: Failed.
   * 
   * - **AUDITING**: In review.
   * 
   * @example
   * SUCCEED
   */
  domainNameVerificationStatus?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * - **1**: Renewal required.
   * 
   * - **2**: Redemption required.
   * 
   * - **3**: Active.
   * 
   * @example
   * 3
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * - New gTLD
   * 
   * - gTLD
   * 
   * - ccTLD
   * 
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @remarks
   * The registrant\\"s email.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the domain name has a `clientHold` status due to email verification failure.
   * 
   * @example
   * false
   */
  emailVerificationClientHold?: boolean;
  /**
   * @remarks
   * The email verification status. Valid values:
   * 
   * - **0**: Not verified.
   * 
   * - **1**: Verified.
   * 
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @remarks
   * The number of days until the expiration date.
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
   * The timestamp of the expiration date.
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
   * S20179H1BBI9****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain.
   * 
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @remarks
   * The status of the privacy protection service.
   * 
   * @example
   * UN_SUPPORT
   */
  privacyServiceStatus?: string;
  /**
   * @remarks
   * The real-name verification status of the domain name. Valid values:
   * 
   * - **NONAUDIT**: Not verified.
   * 
   * - **SUCCEED**: Successful.
   * 
   * - **FAILED**: Failed.
   * 
   * - **AUDITING**: In review.
   * 
   * @example
   * NONAUDIT
   */
  realNameStatus?: string;
  /**
   * @remarks
   * The name of the individual registrant or the contact person for an organization.
   * 
   * @example
   * Test litm
   */
  registrantName?: string;
  /**
   * @remarks
   * The name of the registrant organization.
   * 
   * @example
   * Test litm
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The type of the registrant. Valid values:
   * 
   * - **1**: Individual.
   * 
   * - **2**: Enterprise.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The status of registrant information updates. Valid values:
   * 
   * - **PENDING**: The registrant information is being updated.
   * 
   * - **NORMAL**: No update is in progress.
   * 
   * @example
   * NORMAL
   */
  registrantUpdatingStatus?: string;
  /**
   * @remarks
   * The registrar of the domain name.
   */
  registrar?: string;
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
   * The timestamp of the registration date.
   * 
   * @example
   * 1584675448000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The user-provided remark for the domain name.
   * 
   * @example
   * 测试备注
   */
  remark?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 44101664-3E70-4F0E-89E5-CCB74BF*****
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
  /**
   * @remarks
   * The tags attached to the domain name.
   */
  tag?: QueryDomainByDomainNameResponseBodyTag;
  /**
   * @remarks
   * The status of the domain transfer out. Valid values:
   * 
   * - **NORMAL**: The domain name is not being transferred out.
   * 
   * - **PENDING**: The domain name is being transferred out from HiChina.
   * 
   * @example
   * NORMAL
   */
  transferOutStatus?: string;
  /**
   * @remarks
   * The status of the domain transfer lock. Valid values:
   * 
   * - **NONE_SETTING**: Not set.
   * 
   * - **OPEN**: Enabled.
   * 
   * - **CLOSE**: Disabled.
   * 
   * @example
   * CLOSE
   */
  transferProhibitionLock?: string;
  /**
   * @remarks
   * The status of the domain name security lock. Valid values:
   * 
   * - **NONE_SETTING**: Not set.
   * 
   * - **OPEN**: Enabled.
   * 
   * - **CLOSE**: Disabled.
   * 
   * @example
   * CLOSE
   */
  updateProhibitionLock?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 121000000****
   */
  userId?: string;
  /**
   * @remarks
   * The name of the contact person in Chinese.
   * 
   * @example
   * 王先生
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The name of the registrant in Chinese.
   * 
   * @example
   * 王先生
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      cnnicPrivacyServiceStatus: 'CnnicPrivacyServiceStatus',
      dnsList: 'DnsList',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
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
      registrar: 'Registrar',
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
      dnsList: QueryDomainByDomainNameResponseBodyDnsList,
      domainGroupId: 'number',
      domainGroupName: 'string',
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
      registrar: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tag: QueryDomainByDomainNameResponseBodyTag,
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

