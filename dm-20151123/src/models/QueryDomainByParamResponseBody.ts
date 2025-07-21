// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainByParamResponseBodyDataDomain extends $dara.Model {
  /**
   * @remarks
   * Track verification
   * 
   * @example
   * 0
   */
  cnameAuthStatus?: string;
  /**
   * @remarks
   * CName verification status, success: 0; failure: 1
   * 
   * @example
   * 0
   */
  confirmStatus?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Domain ID
   * 
   * @example
   * 158923
   */
  domainId?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Domain record
   * 
   * @example
   * 6bd86901b9fe4618a046
   */
  domainRecord?: string;
  /**
   * @remarks
   * Domain status.
   * 
   * - 0: Available, verified
   * - 1: Unavailable, verification failed
   * 
   * @example
   * 0
   */
  domainStatus?: string;
  /**
   * @remarks
   * ICP filing status.
   * 
   * - 1 indicates filed
   * - 0 indicates not filed
   * 
   * @example
   * 1
   */
  icpStatus?: string;
  /**
   * @remarks
   * MX authentication status, success: 0, failure: 1.
   * 
   * @example
   * 0
   */
  mxAuthStatus?: string;
  /**
   * @remarks
   * SPF authentication status, success: 0, failure: 1.
   * 
   * @example
   * 0
   */
  spfAuthStatus?: string;
  /**
   * @remarks
   * Creation time in UTC format.
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cnameAuthStatus: 'CnameAuthStatus',
      confirmStatus: 'ConfirmStatus',
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainRecord: 'DomainRecord',
      domainStatus: 'DomainStatus',
      icpStatus: 'IcpStatus',
      mxAuthStatus: 'MxAuthStatus',
      spfAuthStatus: 'SpfAuthStatus',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameAuthStatus: 'string',
      confirmStatus: 'string',
      createTime: 'string',
      domainId: 'string',
      domainName: 'string',
      domainRecord: 'string',
      domainStatus: 'string',
      icpStatus: 'string',
      mxAuthStatus: 'string',
      spfAuthStatus: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainByParamResponseBodyData extends $dara.Model {
  domain?: QueryDomainByParamResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': QueryDomainByParamResponseBodyDataDomain },
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

export class QueryDomainByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8C90CCD3-627C-4F87-AD8C-2F03146071EB
   */
  requestId?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * List of domains
   */
  data?: QueryDomainByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryDomainByParamResponseBodyData,
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

