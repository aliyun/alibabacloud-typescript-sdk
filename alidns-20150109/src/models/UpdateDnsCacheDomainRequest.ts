// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsCacheDomainRequestSourceDnsServer extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the origin server.
   * 
   * @example
   * 192.168.0.1
   */
  host?: string;
  /**
   * @remarks
   * The port of the origin DNS server.
   * 
   * @example
   * 53
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum TTL for cached data retrieved from the origin server. The value ranges from 30 to 86400.
   * 
   * @example
   * 86400
   */
  cacheTtlMax?: number;
  /**
   * @remarks
   * The minimum time-to-live (TTL) for cached data retrieved from the origin server. The value ranges from 30 to 86400.
   * 
   * @example
   * 30
   */
  cacheTtlMin?: number;
  /**
   * @remarks
   * The domain name.<props="china"> To query the domain name, call [DescribeDomains](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c4g.11186623.help-menu-search-29697.d_0).
   * <props="intl">To query the domain name, call [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the authoritative proxy domain name instance.<props="china"> To query the instance ID, call [ListCloudGtmInstances](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-listcloudgtminstances?spm=a2c4g.11186623.help-menu-search-29697.d_0).
   * <props="intl">To query the instance ID, call [ListCloudGtmInstances](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-listcloudgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0).
   * 
   * @example
   * dns-sg-l*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * **zh**
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * A list of origin DNS servers. You can add up to 10 servers.
   */
  sourceDnsServer?: UpdateDnsCacheDomainRequestSourceDnsServer[];
  /**
   * @remarks
   * Specifies whether the origin server supports Extension Mechanisms for DNS (EDNS).
   * SUPPORT: The origin server supports EDNS.
   * NOT_SUPPORT: The origin server does not support EDNS.
   * 
   * @example
   * SUPPORT
   */
  sourceEdns?: string;
  /**
   * @remarks
   * The origin protocol. Valid values: TCP and UDP. Default value: UDP.
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

