// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsCacheDomainRequestSourceDnsServer extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the origin server.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  host?: string;
  /**
   * @remarks
   * The port of the origin DNS server.
   * 
   * This parameter is required.
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

export class AddDnsCacheDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum TTL for cached data from an origin fetch. The value must be an integer from 30 to 86400.
   * 
   * This parameter is required.
   * 
   * @example
   * 86400
   */
  cacheTtlMax?: number;
  /**
   * @remarks
   * The minimum time-to-live (TTL) for cached data from an origin fetch. The value must be an integer from 30 to 86400.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  cacheTtlMin?: number;
  /**
   * @remarks
   * The domain name.<props="china"> Call the [DescribeDomains](https://help.aliyun.com/en/dns/api-alidns-2015-01-09-describedomains) operation to query the domain name.
   * <props="intl">Call the [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains) operation to query the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the authoritative proxy instance.<props="china"> Call the [ListCloudGtmInstances](https://help.aliyun.com/en/dns/api-alidns-2015-01-09-listcloudgtminstances) operation to query the instance ID.
   * <props="intl">Call the [ListCloudGtmInstances](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-listcloudgtminstances) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dns-cn-*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response. The default value is zh. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * A list of origin DNS servers. You can specify up to 10 servers.
   * 
   * This parameter is required.
   */
  sourceDnsServer?: AddDnsCacheDomainRequestSourceDnsServer[];
  /**
   * @remarks
   * SUPPORT: The origin server supports EDNS.
   * 
   * This parameter is required.
   * 
   * @example
   * SUPPORT
   */
  sourceEdns?: string;
  /**
   * @remarks
   * The protocol used for origin fetch. Valid values: TCP and UDP. The default value is UDP.
   * 
   * This parameter is required.
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
      remark: 'Remark',
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
      remark: 'string',
      sourceDnsServer: { 'type': 'array', 'itemType': AddDnsCacheDomainRequestSourceDnsServer },
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

