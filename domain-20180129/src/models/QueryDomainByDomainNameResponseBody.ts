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
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   */
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
   * The Domain Name System (DNS) servers of the domain name.
   */
  dnsList?: QueryDomainByDomainNameResponseBodyDnsList;
  /**
   * @remarks
   * The ID of the domain name group. You can call the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) operation to query the ID of the domain name group.
   * 
   * @example
   * 123456
   */
  domainGroupId?: number;
  /**
   * @remarks
   * The name of the domain name group.
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
   * Indicates whether privacy protection is enabled for the domain name.
   * 
   * @example
   * false
   */
  domainNameProxyService?: boolean;
  /**
   * @remarks
   * The status of name auditing for the domain name. Valid values:
   * 
   * *   **NONAUDIT**: The name auditing for the domain name is not performed.
   * *   **SUCCEED**: The name auditing for the domain name is successful.
   * *   **FAILED**: The name auditing for the domain name fails.
   * *   **AUDITING**: The name auditing for the domain name is in progress.
   * 
   * @example
   * SUCCEED
   */
  domainNameVerificationStatus?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   1: The domain name needs to be renewed.
   * *   2: The domain name needs to be redeemed.
   * *   3: The domain name is normal.
   * 
   * @example
   * 3
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   New gTLD
   * *   gTLD
   * *   ccTLD
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
   * Indicates whether the domain name is in the ClientHold state.
   * 
   * @example
   * false
   */
  emailVerificationClientHold?: boolean;
  /**
   * @remarks
   * Indicates whether the email address passes verification. Valid values:
   * 
   * *   **0**: The email address fails the verification.
   * *   **1**: The email address passes the verification.
   * 
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  /**
   * @remarks
   * The number of days from the expiration date of the domain name to the current date.
   * 
   * @example
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The expiration date.
   * 
   * @example
   * 2019-12-07 17:02:13
   */
  expirationDate?: string;
  /**
   * @remarks
   * The timestamp generated when the domain name expired.
   * 
   * @example
   * 1625111915000
   */
  expirationDateLong?: number;
  /**
   * @remarks
   * Indicates whether the domain name expires. Valid values:
   * 
   * *   **1**: The domain name does not expire.
   * *   **2**: The domain name expires.
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
   * Indicates whether the domain name is a premium domain name.
   * 
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @remarks
   * The status of real-name verification for the domain name. Valid values:
   * 
   * *   **NONAUDIT**: The real-name verification is not performed.
   * *   **SUCCEED**: The real-name verification is successful.
   * *   **FAILED**: The real-name verification fails.
   * *   **AUDITING**: The real-name verification is in progress.
   * 
   * @example
   * NONAUDIT
   */
  realNameStatus?: string;
  /**
   * @remarks
   * The name of the contact.
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
   * The type of contact who registers the domain name. Valid values:
   * 
   * *   **1**: individual.
   * *   **2**: enterprise.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The status of the information about the domain name registrant. Valid values:
   * 
   * *   **PENDING**: The information about the domain name registrant is being modified.
   * *   **NORMAL**: normal.
   * 
   * @example
   * NORMAL
   */
  registrantUpdatingStatus?: string;
  /**
   * @remarks
   * The time when the domain name was registered.
   * 
   * @example
   * 2017-12-07 17:02:13
   */
  registrationDate?: string;
  /**
   * @remarks
   * The timestamp generated when the domain name was registered.
   * 
   * @example
   * 1584675448000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks on the domain name.
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
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
   * The tags.
   */
  tag?: QueryDomainByDomainNameResponseBodyTag;
  /**
   * @remarks
   * The transfer status of the domain name. Valid values:
   * 
   * *   **NORMAL**: The domain name is normal.
   * *   **PENDING**: The domain name is being transferred out from Alibaba Cloud.
   * 
   * @example
   * NORMAL
   */
  transferOutStatus?: string;
  /**
   * @remarks
   * The status of the transfer lock for the domain name. Valid values:
   * 
   * *   **NONE_SETTING**: No transfer lock is configured.
   * *   **OPEN**: The transfer lock is enabled.
   * *   **CLOSE**: The transfer lock is disabled.
   * 
   * @example
   * CLOSE
   */
  transferProhibitionLock?: string;
  /**
   * @remarks
   * The status of the security lock for the domain name. Valid values:
   * 
   * *   **NONE_SETTING**: No security lock is configured.
   * *   **OPEN**: The security lock is enabled.
   * *   **CLOSE**: The security lock is disabled.
   * 
   * @example
   * CLOSE
   */
  updateProhibitionLock?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 121000000****
   */
  userId?: string;
  /**
   * @remarks
   * The Chinese name of the domain name contact.
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The Chinese name of the domain name registrant.
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
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

