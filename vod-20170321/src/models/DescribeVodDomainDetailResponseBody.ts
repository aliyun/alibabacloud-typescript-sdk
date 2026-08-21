// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainDetailResponseBodyDomainDetailSourcesSource extends $dara.Model {
  content?: string;
  enabled?: string;
  port?: number;
  priority?: string;
  type?: string;
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
   * The name of the HTTPS certificate. This parameter is returned only if HTTPS secure acceleration is enabled.
   * 
   * @example
   * testCertName
   */
  certName?: string;
  /**
   * @remarks
   * The CNAME assigned to the accelerated domain name. You must add a CNAME record with your DNS provider to map the accelerated domain name to this CNAME. For more information, see [Configure a CNAME record](https://help.aliyun.com/document_detail/86075.html).
   * 
   * @example
   * example.com.w.alikunlun.net
   */
  cname?: string;
  /**
   * @remarks
   * The description of the VOD acceleration domain name.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The VOD acceleration domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the accelerated domain name. Valid values:
   * 
   * - **online**: enabled.
   * - **offline**: disabled.
   * - **configuring**: being configured.
   * - **configure_failed**: configuration failed.
   * - **checking**: being reviewed.
   * - **check_failed**: review failed.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the domain name was created. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-27T06:51:26Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain name was last modified. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-27T06:55:26Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate is enabled. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key of the HTTPS certificate. This parameter is returned only if HTTPS secure acceleration is enabled.
   * 
   * @example
   * yourSSLPub
   */
  SSLPub?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * - **domestic** (default): the Chinese mainland only.
   * - **overseas**: global (excluding the Chinese mainland).
   * - **global**: global.
   * 
   * @example
   * domestic
   */
  scope?: string;
  sources?: DescribeVodDomainDetailResponseBodyDomainDetailSources;
  /**
   * @remarks
   * The back-to-origin weight.
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
   * The basic configuration information of the domain name.
   */
  domainDetail?: DescribeVodDomainDetailResponseBodyDomainDetail;
  /**
   * @remarks
   * The request ID.
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

