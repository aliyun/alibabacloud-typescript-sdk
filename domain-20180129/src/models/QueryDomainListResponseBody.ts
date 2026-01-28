// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListResponseBodyDataDomainDnsList extends $dara.Model {
  dnsList?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsList)) {
      $dara.Model.validateArray(this.dnsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainListResponseBodyDataDomainTagTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag added to the resource.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag added to the resource.
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

export class QueryDomainListResponseBodyDataDomainTag extends $dara.Model {
  tag?: QueryDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryDomainListResponseBodyDataDomainTagTag },
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

export class QueryDomainListResponseBodyDataDomain extends $dara.Model {
  /**
   * @remarks
   * The name of the domain name registrant.
   * 
   * @example
   * Guangzhou Forest Advertising Decoration Co., LTD
   */
  ccompany?: string;
  /**
   * @remarks
   * domain transfer status. value:
   * - 0: domain status normal.
   * - 1: domain is pending change holder.
   * - 2: change holder failed.
   * 
   * @example
   * 0
   */
  chgholderStatus?: string;
  dnsList?: QueryDomainListResponseBodyDataDomainDnsList;
  /**
   * @remarks
   * The state of real-name verification for the domain name. Valid values:
   * 
   * *   **FAILED**: Real-name verification for the domain name fails.
   * *   **SUCCEED**: Real-name verification for the domain name is successful.
   * *   **NONAUDIT**: Real-name verification for the domain name is not performed.
   * *   **AUDITING**: Real-name verification for the domain name is in progress.
   * 
   * @example
   * FAILED
   */
  domainAuditStatus?: string;
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 123456
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
   * test.com
   */
  domainName?: string;
  /**
   * @remarks
   * The state of the domain name. Valid values:
   * 
   * *   **1**: The domain name needs to be renewed.
   * *   **2**: The domain name needs to be redeemed.
   * *   **3**: The domain name is normal.
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
   * The number of days from the expiration date of the domain name to the current date.
   * 
   * @example
   * -30
   */
  expirationCurrDateDiff?: number;
  /**
   * @remarks
   * The time when the domain name expires.
   * 
   * @example
   * 2017-11-02 04:00:45
   */
  expirationDate?: string;
  /**
   * @remarks
   * The validity period of the domain name. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1522080000000
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
   * The instance ID.
   * 
   * @example
   * ST20151102120031118
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is a premium domain name.
   * 
   * @example
   * true
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
   * The registration type of the domain name. Valid values:
   * 
   * *   **1**: individual
   * *   **2**: enterprise
   * 
   * @example
   * 1
   */
  registrantType?: string;
  registrar?: string;
  /**
   * @remarks
   * The time when the domain name was registered.
   * 
   * @example
   * 2017-11-02 04:00:45
   */
  registrationDate?: string;
  /**
   * @remarks
   * Indicates how long the domain name has been registered. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1522080000000
   */
  registrationDateLong?: number;
  /**
   * @remarks
   * The remarks of the domain name.
   * 
   * @example
   * test remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the domain name belongs.
   * 
   * @example
   * rg-aek2yyciz557g3q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tag?: QueryDomainListResponseBodyDataDomainTag;
  static names(): { [key: string]: string } {
    return {
      ccompany: 'Ccompany',
      chgholderStatus: 'ChgholderStatus',
      dnsList: 'DnsList',
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      productId: 'ProductId',
      registrantType: 'RegistrantType',
      registrar: 'Registrar',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccompany: 'string',
      chgholderStatus: 'string',
      dnsList: QueryDomainListResponseBodyDataDomainDnsList,
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      productId: 'string',
      registrantType: 'string',
      registrar: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      tag: QueryDomainListResponseBodyDataDomainTag,
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

export class QueryDomainListResponseBodyData extends $dara.Model {
  domain?: QueryDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryDomainListResponseBodyDataDomain },
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

export class QueryDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 0
   */
  currentPageNum?: number;
  /**
   * @remarks
   * The domain names.
   */
  data?: QueryDomainListResponseBodyData;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page is preceded by a page.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B7AB5469-5E38-4AA9-A920-C65B7A9C8E6E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names returned.
   * 
   * @example
   * 1
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: QueryDomainListResponseBodyData,
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
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

