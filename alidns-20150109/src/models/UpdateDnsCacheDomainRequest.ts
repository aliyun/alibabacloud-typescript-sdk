// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDnsCacheDomainRequestSourceDnsServer } from "./UpdateDnsCacheDomainRequestSourceDnsServer";


export class UpdateDnsCacheDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum TTL period of the cached data retrieved from the origin DNS server. Unit: seconds. Valid values: 30 to 86400.
   * 
   * @example
   * 86400
   */
  cacheTtlMax?: number;
  /**
   * @remarks
   * The minimum time-to-live (TTL) period of the cached data retrieved from the origin Domain Name System (DNS) server. Unit: seconds. Valid values: 30 to 86400.
   * 
   * @example
   * 30
   */
  cacheTtlMin?: number;
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtian the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The instance ID of the cache-accelerated domain name. You can call the [ListCloudGtmInstances](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-listcloudgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * @example
   * dns-sg-l9u2ux1fw01
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English Default: **zh**
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The origin DNS servers. A maximum of 10 origin DNS servers are supported.
   */
  sourceDnsServer?: UpdateDnsCacheDomainRequestSourceDnsServer[];
  /**
   * @remarks
   * Specifies whether the origin DNS server supports Extension Mechanisms for DNS (EDNS). Valid values: NOT_SUPPORT and SUPPORT.
   * 
   * @example
   * SUPPORT
   */
  sourceEdns?: string;
  /**
   * @remarks
   * The origin protocol policy. Valid values: TCP and UDP. Default value: UDP.
   * 
   * @example
   * UDP
   */
  sourceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtlMax: 'CacheTtlMax',
      cacheTtlMin: 'CacheTtlMin',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceDnsServer: 'SourceDnsServer',
      sourceEdns: 'SourceEdns',
      sourceProtocol: 'SourceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtlMax: 'number',
      cacheTtlMin: 'number',
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      sourceDnsServer: { 'type': 'array', 'itemType': UpdateDnsCacheDomainRequestSourceDnsServer },
      sourceEdns: 'string',
      sourceProtocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceDnsServer)) {
      $dara.Model.validateArray(this.sourceDnsServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

