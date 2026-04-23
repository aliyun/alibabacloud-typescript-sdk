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
  autoRenewEnabled?: boolean;
  ccompany?: string;
  chgholderStatus?: string;
  dnsList?: QueryDomainListResponseBodyDataDomainDnsList;
  domainAuditStatus?: string;
  domainGroupId?: string;
  domainGroupName?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  productId?: string;
  registrantType?: string;
  registrar?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  resourceGroupId?: string;
  tag?: QueryDomainListResponseBodyDataDomainTag;
  static names(): { [key: string]: string } {
    return {
      autoRenewEnabled: 'AutoRenewEnabled',
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
      autoRenewEnabled: 'boolean',
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

