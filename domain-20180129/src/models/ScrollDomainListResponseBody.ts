// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScrollDomainListResponseBodyDataDomainDnsList extends $dara.Model {
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

export class ScrollDomainListResponseBodyDataDomainTagTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * testValue
   */
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

export class ScrollDomainListResponseBodyDataDomainTag extends $dara.Model {
  tag?: ScrollDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ScrollDomainListResponseBodyDataDomainTagTag },
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

export class ScrollDomainListResponseBodyDataDomain extends $dara.Model {
  /**
   * @remarks
   * The Domain Name System (DNS) servers of the domain name.
   */
  dnsList?: ScrollDomainListResponseBodyDataDomainDnsList;
  /**
   * @remarks
   * The status of real-name verification for the domain name. Valid values:
   * 
   * *   **FAILED**: Real-name verification for the domain name fails.
   * *   **SUCCEED**: Real-name verification for the domain name is successful.
   * *   **NONAUDIT**: Real-name verification for the domain name is not performed.
   * *   **AUDITING**: Real-name verification for the domain name is in progress.
   * 
   * @example
   * NONAUDIT
   */
  domainAuditStatus?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 1234
   */
  domainGroupId?: string;
  /**
   * @remarks
   * The name of the domain name group.
   * 
   * @example
   * test group
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
   * The status of the domain name. Valid values:
   * 
   * *   **1**: The domain name needs to be renewed.
   * *   **2**: The domain name needs to be redeemed.
   * *   **3**: The domain name is normal.
   * *   **4**: The domain name is being transferred out.
   * *   **5**: The information about the domain name registrant is being modified.
   * *   **6**: Real-name verification is not performed on the domain name.
   * *   **7**: Real-name verification for the domain name fails.
   * *   **8**: The real-name verification is being reviewed.
   * 
   * @example
   * 3
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **New gTLD**
   * *   **gTLD**
   * *   **ccTLD**
   * 
   * @example
   * gTLD
   */
  domainType?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The number of days from the expiration date of the domain name to the current date.
   * 
   * @example
   * 10
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The time when the domain name expires.
   * 
   * @example
   * 2019-02-15 17:30:35
   */
  expirationDate?: string;
  /**
   * @remarks
   * The time when the domain name expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1550223035000
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
   * S1234
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
   * The service ID.
   * 
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @remarks
   * The registrant of the domain name.
   * 
   * @example
   * alibaba cloud
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The registration type of the domain name. Valid values:
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
   * The time when the domain name was registered.
   * 
   * @example
   * 2017-02-15 00:00:00
   */
  registrationDate?: string;
  /**
   * @remarks
   * The time when the domain name was registered. This value is a UNIX timestamp that indicates the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1487088000000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks on the domain name.
   * 
   * @example
   * test domain
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2yyciz557g3q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tag.
   */
  tag?: ScrollDomainListResponseBodyDataDomainTag;
  /**
   * @remarks
   * The Chinese name of the domain name registrant.
   * 
   * @example
   * 阿里云
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      productId: 'ProductId',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: ScrollDomainListResponseBodyDataDomainDnsList,
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      productId: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      tag: ScrollDomainListResponseBodyDataDomainTag,
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

export class ScrollDomainListResponseBodyData extends $dara.Model {
  domain?: ScrollDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': ScrollDomainListResponseBodyDataDomain },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  data?: ScrollDomainListResponseBodyData;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 722AB7F5-61F0-408C-A012-4784AFD34083
   */
  requestId?: string;
  /**
   * @remarks
   * The scroll ID.
   * 
   * @example
   * test
   */
  scrollId?: string;
  /**
   * @remarks
   * The number of remaining domain names to be queried.
   * 
   * @example
   * 200
   */
  totalItemNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scrollId: 'ScrollId',
      totalItemNum: 'TotalItemNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScrollDomainListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      scrollId: 'string',
      totalItemNum: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

