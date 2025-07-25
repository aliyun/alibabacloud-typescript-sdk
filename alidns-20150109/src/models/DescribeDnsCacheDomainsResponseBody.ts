// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the origin DNS server.
   * 
   * @example
   * ns8.alidns.com
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

export class DescribeDnsCacheDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The maximum time-to-live (TTL) period of the cached data retrieved from the origin DNS server. Unit: seconds. Valid values: 30 to 86400.
   * 
   * @example
   * 86400
   */
  cacheTtlMax?: number;
  /**
   * @remarks
   * The minimum TTL period of the cached data retrieved from the origin DNS server. Unit: seconds. Valid values: 30 to 86400.
   * 
   * @example
   * 30
   */
  cacheTtlMin?: number;
  /**
   * @remarks
   * The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-10-17T06:13Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the domain name was added. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660546144000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the cache-accelerated domain name.
   * 
   * @example
   * 00efd71a-770e-4255-b54e-6fe5659baffe
   */
  domainId?: string;
  /**
   * @remarks
   * The cache-accelerated domain name.
   * 
   * @example
   * dns-example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1692374400000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The instance ID of the cache-accelerated domain name.
   * 
   * @example
   * i-7bg
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the domain name.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The origin DNS servers.
   */
  sourceDnsServers?: DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers[];
  /**
   * @remarks
   * Specifies whether the origin Domain Name System (DNS) server supports Extension Mechanisms for DNS (EDNS). Valid values: NOT_SUPPORT and SUPPORT.
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
  /**
   * @remarks
   * The time when the configurations of the domain name were updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T03:40Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the configurations of the domain name were updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1671690491000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The edition code of Alibaba Cloud DNS.
   * 
   * @example
   * ultimate
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtlMax: 'CacheTtlMax',
      cacheTtlMin: 'CacheTtlMin',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainId: 'DomainId',
      domainName: 'DomainName',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      remark: 'Remark',
      sourceDnsServers: 'SourceDnsServers',
      sourceEdns: 'SourceEdns',
      sourceProtocol: 'SourceProtocol',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtlMax: 'number',
      cacheTtlMin: 'number',
      createTime: 'string',
      createTimestamp: 'number',
      domainId: 'string',
      domainName: 'string',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      remark: 'string',
      sourceDnsServers: { 'type': 'array', 'itemType': DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers },
      sourceEdns: 'string',
      sourceProtocol: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      versionCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceDnsServers)) {
      $dara.Model.validateArray(this.sourceDnsServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  domains?: DescribeDnsCacheDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 57121A9C-CDCF-541F-AD39-275D89099420
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
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
      domains: { 'type': 'array', 'itemType': DescribeDnsCacheDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

