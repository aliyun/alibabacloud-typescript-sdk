// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainDetailResponseBodyDomainDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * liveCert****
   */
  certName?: string;
  /**
   * @remarks
   * The CNAME that is assigned to the domain name. You must add a CNAME record in the system of your Domain Name System (DNS) service provider to map the domain name to the CNAME.
   * 
   * >  A time-to-live (TTL) value is specified in the CNAME record of a domain name to indicate how long the CNAME record can be cached on the DNS resolver. If you modify the CNAME record of the domain name, the new settings take effect after the cache expires, which takes about 10 minutes. For more information, see [CNAME resolution](https://help.aliyun.com/document_detail/362010.html).
   * 
   * @example
   * learn.developer.aliyundoc.com
   */
  cname?: string;
  /**
   * @remarks
   * The description of the domain name.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain or ingest domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **online**: The domain name is enabled.
   * *   **offline**: The domain name is disabled.
   * *   **configuring**: The domain is being configured.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the domain name was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-27T06:51:25Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain name was last modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-07T06:51Z
   */
  gmtModified?: string;
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
   * The ID of the region where the domain name resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2ogvt4nwmi7i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the SSL certificate is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * Public Key
   */
  SSLPub?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * *   **domestic**: regions in the Chinese mainland.
   * *   **overseas**: regions outside the Chinese mainland.
   * *   **global**: regions in and outside the Chinese mainland.
   * 
   * @example
   * domestic
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      liveDomainType: 'LiveDomainType',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scope: 'Scope',
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
      liveDomainType: 'string',
      region: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration details of the domain name.
   */
  domainDetail?: DescribeLiveDomainDetailResponseBodyDomainDetail;
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
      domainDetail: DescribeLiveDomainDetailResponseBodyDomainDetail,
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

