// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserDomainsResponseBodyDomainsPageData extends $dara.Model {
  cname?: string;
  description?: string;
  domainName?: string;
  gmtCreated?: string;
  gmtModified?: string;
  liveDomainStatus?: string;
  liveDomainType?: string;
  regionName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      liveDomainStatus: 'LiveDomainStatus',
      liveDomainType: 'LiveDomainType',
      regionName: 'RegionName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      liveDomainStatus: 'string',
      liveDomainType: 'string',
      regionName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponseBodyDomains extends $dara.Model {
  pageData?: DescribeLiveUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeLiveUserDomainsResponseBodyDomainsPageData },
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveUserDomainsResponseBody extends $dara.Model {
  domains?: DescribeLiveUserDomainsResponseBodyDomains;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B15267
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeLiveUserDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

