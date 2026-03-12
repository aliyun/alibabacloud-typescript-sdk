// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainListResponseBodyDataDomain extends $dara.Model {
  deadDate?: string;
  deadDateLong?: number;
  deadDateStatus?: string;
  domainAuditStatus?: string;
  domainName?: string;
  domainRegType?: string;
  domainStatus?: string;
  domainType?: string;
  groupId?: string;
  premium?: boolean;
  productId?: string;
  regDate?: string;
  regDateLong?: number;
  remark?: string;
  saleId?: string;
  static names(): { [key: string]: string } {
    return {
      deadDate: 'DeadDate',
      deadDateLong: 'DeadDateLong',
      deadDateStatus: 'DeadDateStatus',
      domainAuditStatus: 'DomainAuditStatus',
      domainName: 'DomainName',
      domainRegType: 'DomainRegType',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      groupId: 'GroupId',
      premium: 'Premium',
      productId: 'ProductId',
      regDate: 'RegDate',
      regDateLong: 'RegDateLong',
      remark: 'Remark',
      saleId: 'SaleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadDate: 'string',
      deadDateLong: 'number',
      deadDateStatus: 'string',
      domainAuditStatus: 'string',
      domainName: 'string',
      domainRegType: 'string',
      domainStatus: 'string',
      domainType: 'string',
      groupId: 'string',
      premium: 'boolean',
      productId: 'string',
      regDate: 'string',
      regDateLong: 'number',
      remark: 'string',
      saleId: 'string',
    };
  }

  validate() {
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
   * 1
   */
  currentPageNum?: number;
  data?: QueryDomainListResponseBodyData;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page follows another page.
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 5
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

