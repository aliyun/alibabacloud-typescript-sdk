// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAdvancedDomainListResponseBodyDataDomainDnsList extends $dara.Model {
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

export class QueryAdvancedDomainListResponseBodyDataDomainTagTag extends $dara.Model {
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

export class QueryAdvancedDomainListResponseBodyDataDomainTag extends $dara.Model {
  tag?: QueryAdvancedDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryAdvancedDomainListResponseBodyDataDomainTagTag },
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

export class QueryAdvancedDomainListResponseBodyDataDomain extends $dara.Model {
  dnsList?: QueryAdvancedDomainListResponseBodyDataDomainDnsList;
  /**
   * @example
   * SUCCEED
   */
  domainAuditStatus?: string;
  /**
   * @example
   * -1
   */
  domainGroupId?: string;
  domainGroupName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 5
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
   * 356
   */
  expirationCurrDateDiff?: number;
  /**
   * @example
   * 2019-04-09 17:07:03
   */
  expirationDate?: string;
  /**
   * @example
   * 1554800823000
   */
  expirationDateLong?: number;
  /**
   * @example
   * 1
   */
  expirationDateStatus?: string;
  /**
   * @example
   * S20182000000000
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  premium?: boolean;
  /**
   * @example
   * 2a
   */
  productId?: string;
  /**
   * @example
   * Tom
   */
  registrantOrganization?: string;
  /**
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 2018-04-09 17:07:03
   */
  registrationDate?: string;
  /**
   * @example
   * 1523264823000
   */
  registrationDateLong?: number;
  remark?: string;
  /**
   * @example
   * rg-aek2yyciz557g3q
   */
  resourceGroupId?: string;
  tag?: QueryAdvancedDomainListResponseBodyDataDomainTag;
  /**
   * @example
   * Tom
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
      dnsList: QueryAdvancedDomainListResponseBodyDataDomainDnsList,
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
      tag: QueryAdvancedDomainListResponseBodyDataDomainTag,
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

export class QueryAdvancedDomainListResponseBodyData extends $dara.Model {
  domain?: QueryAdvancedDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryAdvancedDomainListResponseBodyDataDomain },
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

export class QueryAdvancedDomainListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: QueryAdvancedDomainListResponseBodyData;
  /**
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @example
   * D200000-C0B9-4CD3-B92A-9B44A000000
   */
  requestId?: string;
  /**
   * @example
   * 549
   */
  totalItemNum?: number;
  /**
   * @example
   * 275
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
      data: QueryAdvancedDomainListResponseBodyData,
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

