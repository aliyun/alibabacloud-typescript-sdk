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
   * The canonical name (CNAME). A CNAME is generated for the live streaming domain. You must add a CNAME record at your DNS provider to map the live streaming domain to this CNAME.
   * 
   * > Local DNS records are cached. After you add the CNAME record, it may take up to 10 minutes to take effect. For more information, see [FAQ about CNAME records](https://help.aliyun.com/document_detail/362010.html).
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
   * The ingest domain or streaming domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The status of the domain. Valid values:
   * 
   * - **online**: enabled.
   * 
   * - **offline**: disabled.
   * 
   * - **configuring**: being configured.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The time when the domain was added. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-27T06:51:25Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the domain was last modified. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-07T06:51Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * - **liveVideo**: streaming domain.
   * 
   * - **liveEdge**: ingest domain.
   * 
   * @example
   * liveVideo
   */
  liveDomainType?: string;
  /**
   * @remarks
   * The region where the domain name is added.
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
   * rg-**k3bpq2yjw22**
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether SSL is enabled. Valid values:
   * 
   * - **on**: enabled.
   * 
   * - **off**: disabled.
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
   * - **domestic**: the Chinese mainland.
   * 
   * - **overseas**: regions outside the Chinese mainland.
   * 
   * - **global**: global.
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
   * The details of the domain configuration.
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

