// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainListResponseBodyDomainListResponseList extends $dara.Model {
  /**
   * @remarks
   * The domain name or website name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The IP address information associated with the domain name.
   * 
   * @example
   * 1.2.XX.XX,1.0.XX.XX
   */
  ipList?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of domain names displayed on the current page in a paged query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 10
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of domain names displayed on each page in a paged query. Default value: **10**, which indicates that 10 domain names are displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of domain names returned.
   * 
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain name asset information.
   */
  domainListResponseList?: DescribeDomainListResponseBodyDomainListResponseList[];
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: DescribeDomainListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainListResponseList: 'DomainListResponseList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainListResponseList: { 'type': 'array', 'itemType': DescribeDomainListResponseBodyDomainListResponseList },
      pageInfo: DescribeDomainListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainListResponseList)) {
      $dara.Model.validateArray(this.domainListResponseList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

