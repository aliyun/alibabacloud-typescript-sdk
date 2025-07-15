// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserDomainsResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The CNAME generated for the domain name.
   * 
   * @example
   * learn.developer.aliyundoc.com
   */
  cname?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The time when the domain name was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-08-29T12:15:36Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain name was last modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-29T12:15:36Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **online**
   * *   **offline**
   * *   **configuring**
   * 
   * @example
   * online
   */
  liveDomainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **liveVideo**: streaming domain
   * *   **liveEdge**: ingest domain
   * 
   * @example
   * liveVideo
   */
  liveDomainType?: string;
  /**
   * @remarks
   * The ID of the region in which the domain name resides.
   * 
   * @example
   * cn-beijing
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzvyjetyjjmla
   */
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
  /**
   * @remarks
   * The domain names.
   */
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

