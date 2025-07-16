// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * ***.oss-cn-hangzhou.aliyuncs.com
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
   * The priority.
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
   * The weight of the origin server if multiple origin servers have been specified.
   * 
   * @example
   * 15
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

export class DescribeUserDomainsResponseBodyDomainsPageDataSources extends $dara.Model {
  source?: DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageDataSourcesSource },
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

export class DescribeUserDomainsResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The type of the workload accelerated by Alibaba Cloud CDN. Valid values:
   * 
   * *   **web**: images and small files
   * *   **download**: large files
   * *   **video**: on-demand video and audio streaming
   * 
   * @example
   * download
   */
  cdnType?: string;
  /**
   * @remarks
   * The CNAME assigned to the accelerated domain name.
   * 
   * @example
   * example.com.w.alikunlun.net
   */
  cname?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **global**: global
   * *   **overseas**: outside the Chinese mainland
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The information about Internet Content Provider (ICP) filing.
   * 
   * @example
   * filing description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the accelerated domain name.
   * 
   * @example
   * 11223344
   */
  domainId?: number;
  /**
   * @remarks
   * The accelerated domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the accelerated domain name. Valid values:
   * 
   * *   **online**
   * *   **offline**
   * *   **configuring**
   * *   **configure_failed**
   * *   **checking**
   * *   **check_failed**
   * *   **stopping**
   * *   **deleting**
   * 
   * @example
   * configure_failed
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the accelerated domain name was added.
   * 
   * @example
   * 2015-10-28T09:32:51Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the accelerated domain name was modified.
   * 
   * @example
   * 2015-10-28T11:05:52Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * abcd1234abcd1234
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the accelerated domain name is in a sandbox.
   * 
   * @example
   * true
   */
  sandbox?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeUserDomainsResponseBodyDomainsPageDataSources;
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
      coverage: 'Coverage',
      description: 'Description',
      domainId: 'DomainId',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      cname: 'string',
      coverage: 'string',
      description: 'string',
      domainId: 'number',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      sources: DescribeUserDomainsResponseBodyDomainsPageDataSources,
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

export class DescribeUserDomainsResponseBodyDomains extends $dara.Model {
  pageData?: DescribeUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeUserDomainsResponseBodyDomainsPageData },
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

export class DescribeUserDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the accelerated domain names returned.
   */
  domains?: DescribeUserDomainsResponseBodyDomains;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDA62CE4-3477-439A-B52E-D2D7C829D7C1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
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
      domains: DescribeUserDomainsResponseBodyDomains,
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

