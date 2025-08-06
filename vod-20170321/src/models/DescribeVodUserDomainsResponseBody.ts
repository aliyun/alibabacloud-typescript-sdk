// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodUserDomainsResponseBodyDomainsPageDataSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * 192.168.0.1
   */
  content?: string;
  /**
   * @remarks
   * The port number. Valid values: **443** and **80**.
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
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server. Valid values:
   * 
   * *   **ipaddr**: an IP address.
   * *   **domain**: an origin domain name
   * *   **oss**: the OSS domain of an Object Storage Service (OSS) bucket
   * 
   * @example
   * oss
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodUserDomainsResponseBodyDomainsPageDataSources extends $dara.Model {
  source?: DescribeVodUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeVodUserDomainsResponseBodyDomainsPageDataSourcesSource },
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

export class DescribeVodUserDomainsResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The CNAME that is assigned to the domain name for CDN.
   * 
   * @example
   * learn.developer.aliyundoc.com
   */
  cname?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Zhejiang ICP Filing No. ****
   */
  description?: string;
  /**
   * @remarks
   * The domain name for CDN.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the domain name for CDN. Valid values:
   * 
   * *   **online**: indicates that the domain name is enabled.
   * *   **offline**: indicates that the domain name is disabled.
   * *   **configuring**: indicates that the domain name is being configured.
   * *   **configure_failed**: indicates that the domain name failed to be configured.
   * *   **checking**: indicates that the domain name is under review.
   * *   **check_failed**: indicates that the domain name failed the review.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the domain name for CDN was added. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-08-29T08:40:53Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last time when the domain name for CDN was modified. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-29T09:24:12Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the accelerated domain name was in a sandbox.
   * 
   * @example
   * normal
   */
  sandbox?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeVodUserDomainsResponseBodyDomainsPageDataSources;
  /**
   * @remarks
   * Indicates whether HTTPS is enabled.
   * 
   * *   **on**: HTTPS is enabled.
   * *   **off**: HTTPS is not eabled.
   * 
   * @example
   * on
   */
  sslProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      sandbox: 'Sandbox',
      sources: 'Sources',
      sslProtocol: 'SslProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      sandbox: 'string',
      sources: DescribeVodUserDomainsResponseBodyDomainsPageDataSources,
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

export class DescribeVodUserDomainsResponseBodyDomains extends $dara.Model {
  pageData?: DescribeVodUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeVodUserDomainsResponseBodyDomainsPageData },
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

export class DescribeVodUserDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about each domain name for CDN. The returned information is displayed in the format that is specified by the PageData parameter.
   */
  domains?: DescribeVodUserDomainsResponseBodyDomains;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-****-9D94E1B15267
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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
      domains: DescribeVodUserDomainsResponseBodyDomains,
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

