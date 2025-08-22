// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * example.com
   */
  content?: string;
  /**
   * @remarks
   * The port of the origin server.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority of the origin server.
   * 
   * @example
   * 20
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server.
   * 
   * @example
   * oss
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin server.
   * 
   * @example
   * 20
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources extends $dara.Model {
  source?: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  validate() {
    if(Array.isArray(this.source)) {
      $dara.Model.validateArray(this.source);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The CNAME of the domain.
   * 
   * @example
   * test.aliyun.com.w.alikunlun.com
   */
  cname?: string;
  /**
   * @remarks
   * The reason why the domain failed the review.
   * 
   * @example
   * audit failed
   */
  description?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 11223344
   */
  domainId?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain status.
   * 
   * *   **online**: The domain is active.
   * *   **offline**: The domain is suspended.
   * *   **configuring**: The domain is being configured.
   * *   **configure_failed**: The domain failed to be configured.
   * *   **checking**: The domain is under review.
   * *   **check_failed**: The domain failed the review.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The computing service type. Valid values:
   * 
   * *   **routine**
   * *   **image**
   * *   **cloudFunction**
   * 
   * @example
   * routine
   */
  functionType?: string;
  /**
   * @remarks
   * The time when the domain was added to DCDN.
   * 
   * @example
   * 2015-10-28T11:05:50Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain was modified.
   * 
   * @example
   * 2015-10-28T09:31:59Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmv6jutt**
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether HTTPS was enabled.
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The sandbox status.
   * 
   * @example
   * normal
   */
  sandbox?: string;
  /**
   * @remarks
   * The acceleration scenario. Valid values:
   * 
   * *   **apiscene**: accelerates response to API calls.
   * *   **webservicescene**: accelerates content delivery for websites.
   * *   **staticscene**: accelerates the delivery of videos, images, and text.
   * *   **If you leave this parameter empty, no scenarios are supported.
   * 
   * @example
   * apiscene
   */
  scene?: string;
  /**
   * @remarks
   * The information about the origin servers.
   */
  sources?: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      functionType: 'FunctionType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      sandbox: 'Sandbox',
      scene: 'Scene',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainId: 'number',
      domainName: 'string',
      domainStatus: 'string',
      functionType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      sandbox: 'string',
      scene: 'string',
      sources: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources,
    };
  }

  validate() {
    if(this.sources && typeof (this.sources as any).validate === 'function') {
      (this.sources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomains extends $dara.Model {
  pageData?: DescribeDcdnUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsResponseBodyDomainsPageData },
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

export class DescribeDcdnUserDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried domains.
   */
  domains?: DescribeDcdnUserDomainsResponseBodyDomains;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA75AADB-5E25-4970-B480-EAA1F5658483
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
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
      domains: DescribeDcdnUserDomainsResponseBodyDomains,
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

