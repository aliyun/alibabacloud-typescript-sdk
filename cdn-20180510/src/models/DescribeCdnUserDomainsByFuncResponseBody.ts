// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * 1.1.1.1
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
   * The priority of the configuration item.
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
   * ipaddr
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin server if multiple origin servers have been specified.
   * 
   * @example
   * 10
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

export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources extends $dara.Model {
  source?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource },
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

export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The type of workload accelerated by Alibaba Cloud CDN. Valid values:
   * 
   * *   **web**: image and small file distribution
   * *   **download**: large file distribution
   * *   **video**: on-demand video and audio streaming
   * *   **liveStream**: live streaming
   * 
   * @example
   * web
   */
  cdnType?: string;
  /**
   * @remarks
   * The CNAME assigned to the accelerated domain name.
   * 
   * @example
   * example.com.w.alikunlun.com
   */
  cname?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * audit failed
   */
  description?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the accelerated domain name. Valid values:
   * 
   * *   **online**: The domain name is enabled.
   * *   **offline**: The domain is disabled.
   * *   **configuring**: The endpoint group is being configured.
   * *   **configure_failed**: The domain failed to be configured.
   * *   **checking**: The domain name is under review.
   * *   **check_failed**: The domain name failed the review.
   * *   **stopping**: The domain name is be disabled.
   * *   **deleting**: being deleted
   * 
   * @example
   * configure_failed
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the accelerated domain name was added to Alibaba Cloud CDN.
   * 
   * @example
   * 2015-10-28T11:05:52Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last time when the accelerated domain was modified.
   * 
   * @example
   * 2015-10-29T10:15:31Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sources: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
      sslProtocol: 'string',
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

export class DescribeCdnUserDomainsByFuncResponseBodyDomains extends $dara.Model {
  pageData?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData },
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

export class DescribeCdnUserDomainsByFuncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the accelerated domain name.
   */
  domains?: DescribeCdnUserDomainsByFuncResponseBodyDomains;
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
   * 5
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
   * 16
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
      domains: DescribeCdnUserDomainsByFuncResponseBodyDomains,
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

