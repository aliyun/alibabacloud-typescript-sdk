// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * ****.oss-cn-hangzhou.aliyuncs.com
   */
  content?: string;
  /**
   * @remarks
   * The status of the origin server. Valid values:
   * *   **online**: indicates that the origin server is enabled.
   * *   **offline**: indicates that the origin server is disabled.
   * 
   * @example
   * online
   */
  enabled?: string;
  /**
   * @remarks
   * The port number. Valid values: 443 and 80.
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
   * 50
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server. Valid values:
   * *   **ipaddr**: a server that you can access by using an IP address.
   * *   **domain**: a server that you can access by using a domain name.
   * *   **oss**: the URL of an Object Storage Service (OSS) bucket.
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
   * 10
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
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

export class DescribeVodDomainDetailResponseBodyDomainDetailSources extends $dara.Model {
  source?: DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource },
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

export class DescribeVodDomainDetailResponseBodyDomainDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the certificate. The value of this parameter is returned if HTTPS is enabled.
   * 
   * @example
   * testCertName
   */
  certName?: string;
  /**
   * @remarks
   * The CNAME that is assigned to the domain name for CDN. You must add a CNAME record in the system of your Domain Name System (DNS) service provider to map the domain name for CDN to the CNAME.
   * 
   * @example
   * example.com.w.alikunlun.net
   */
  cname?: string;
  /**
   * @remarks
   * The description of the domain name for CDN.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The domain name for CDN.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the domain name for CDN. Value values:
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
   * The time when the domain name for CDN was added. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-27T06:51:26Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The last time when the domain name for CDN was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-27T06:55:26Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the Secure Sockets Layer (SSL) certificate is enabled. Valid values:
   * *   **on**: indicates that the SSL certificate is enabled.
   * *   **off**: indicates that the SSL certificate is disabled.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key of the certificate. The value of this parameter is returned if HTTPS is enabled.
   * 
   * @example
   * yourSSLPub
   */
  SSLPub?: string;
  /**
   * @remarks
   * This parameter is applicable to users of level 3 or higher in mainland China and users outside mainland China. Valid values:
   * *   **domestic**: mainland China. This is the default value.
   * *   **overseas**: outside mainland China.
   * *   **global**: regions in and outside mainland China.
   * 
   * @example
   * domestic
   */
  scope?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeVodDomainDetailResponseBodyDomainDetailSources;
  /**
   * @remarks
   * The weight of the origin server.
   * 
   * @example
   * 1
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
      sources: 'Sources',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
      sources: DescribeVodDomainDetailResponseBodyDomainDetailSources,
      weight: 'string',
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

export class DescribeVodDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information about the domain name for CDN.
   */
  domainDetail?: DescribeVodDomainDetailResponseBodyDomainDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09ABE829-6CD3-4FE0-556113E2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeVodDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainDetail && typeof (this.domainDetail as any).validate === 'function') {
      (this.domainDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

