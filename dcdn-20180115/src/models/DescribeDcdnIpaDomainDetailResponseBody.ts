// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * xxx.oss-cn-hangzhou.aliyuncs.com
   */
  content?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * online
   */
  enabled?: string;
  /**
   * @remarks
   * The custom port. Valid values: **0** to **65535**.
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
   * 50
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server. Valid values:
   * 
   * *   **ipaddr**: an origin IP address
   * *   **domain**: a domain name.
   * *   **oss**: Object Storage Service (OSS) buckets are not supported.
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

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources extends $dara.Model {
  source?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource },
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

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the certificate if the HTTPS protocol is enabled.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The CNAME assigned to the domain name.
   * 
   * @example
   * example.com
   */
  cname?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * audit failed
   */
  description?: string;
  /**
   * @remarks
   * The accelerated domain names.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the accelerated domain name. Valid values:
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * *   **configuring**: configuring
   * *   **configure_failed**: configuration failed
   * *   **checking**: reviewing
   * *   **check_failed:** review failed
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2017-11-27T06:51:26Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain name was last modified.
   * 
   * @example
   * 2017-11-27T06:51:26Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyuji4b6xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the Security Socket Layer (SSL) certificate is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key of the certificate if HTTPS is enabled.
   * 
   * @example
   * SSLPub
   */
  SSLPub?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * *   domestic: Chinese mainland
   * *   overseas: outside the Chinese mainland
   * *   global: global
   * 
   * @example
   * overseas
   */
  scope?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
      sources: 'Sources',
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
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
      sources: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources,
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

export class DescribeDcdnIpaDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the accelerated domain name.
   */
  domainDetail?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09ABE829-6CD3-4FE0-AFEE-556113E29727
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
      domainDetail: DescribeDcdnIpaDomainDetailResponseBodyDomainDetail,
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

