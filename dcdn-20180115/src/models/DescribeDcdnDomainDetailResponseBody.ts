// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * example.org
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
   * The port over which requests are redirected to the origin server. Ports 443 and 80 are supported.
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
   * *   **ipaddr**: an IP address
   * *   **domain**: an origin domain name
   * *   **oss**: the domain name of an Object Storage Service (OSS) bucket
   * 
   * @example
   * oss
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin server if multiple origin servers are specified.
   * 
   * @example
   * 20
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

export class DescribeDcdnDomainDetailResponseBodyDomainDetailSources extends $dara.Model {
  source?: DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource },
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

export class DescribeDcdnDomainDetailResponseBodyDomainDetail extends $dara.Model {
  /**
   * @remarks
   * The CNAME that is assigned to the accelerated domain name. You must add the CNAME record to the system of your Domain Name System (DNS) provider to map the accelerated domain name to the CNAME.
   * 
   * @example
   * example.aliyundoc.com
   */
  cname?: string;
  /**
   * @remarks
   * The information about the Internet content provider (ICP) filing of the domain name.
   * 
   * @example
   * Beijing ICP Filing No. 1703xxxx
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
   * *   **online**
   * *   **offline**
   * *   **configuring**
   * *   **configure_failed**
   * *   **checking**
   * *   **check_failed**
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * Computing service type. Valid values:
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
   * The time when the domain name was added.
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
   * 2017-11-27T06:51:25Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyuji4b6r4**
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the Security Socket Layer (SSL) certificate is enabled. Valid values:
   * 
   * *   **on**: **enabled**
   * *   **off**: **disabled**
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
   * xxx
   */
  SSLPub?: string;
  /**
   * @remarks
   * Acceleration scenario. Valid values:
   * 
   * *   **apiscene**: API acceleration.
   * *   **webservicescene**: website acceleration.
   * *   **staticscene**: video, image, and text acceleration.
   * *   **an empty string**: no acceleration scenario is used.
   * 
   * @example
   * apiscene
   */
  scene?: string;
  /**
   * @remarks
   * The acceleration region. Default value: domestic. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: global (excluding the Chinese mainland)
   * *   **global**: global
   * 
   * @example
   * overseas
   */
  scope?: string;
  /**
   * @remarks
   * The information about the origin server.
   */
  sources?: DescribeDcdnDomainDetailResponseBodyDomainDetailSources;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      description: 'Description',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      functionType: 'FunctionType',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      resourceGroupId: 'ResourceGroupId',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      scene: 'Scene',
      scope: 'Scope',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      description: 'string',
      domainName: 'string',
      domainStatus: 'string',
      functionType: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      resourceGroupId: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      scene: 'string',
      scope: 'string',
      sources: DescribeDcdnDomainDetailResponseBodyDomainDetailSources,
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

export class DescribeDcdnDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the accelerated domain name.
   */
  domainDetail?: DescribeDcdnDomainDetailResponseBodyDomainDetail;
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
      domainDetail: DescribeDcdnDomainDetailResponseBodyDomainDetail,
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

