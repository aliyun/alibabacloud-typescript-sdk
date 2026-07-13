// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers extends $dara.Model {
  /**
   * @remarks
   * The domain name or IP address of the origin server.
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
   * The maximum Time to Live (TTL) for cached data retrieved from the origin server. The value ranges from 30 to 86400.
   * 
   * @example
   * 86400
   */
  cacheTtlMax?: number;
  /**
   * @remarks
   * The minimum TTL for cached data retrieved from the origin server. The value ranges from 30 to 86400.
   * 
   * @example
   * 30
   */
  cacheTtlMin?: number;
  /**
   * @remarks
   * The time when the domain name was added.
   * 
   * @example
   * 2022-10-17T06:13Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the domain name was added.
   * 
   * @example
   * 1660546144000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the authoritative proxy domain.
   * 
   * @example
   * 00efd71a-770e-*****************
   */
  domainId?: string;
  /**
   * @remarks
   * The name of the authoritative proxy domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The expiration time of the instance.
   * 
   * @example
   * 2022-12-02T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires.
   * 
   * @example
   * 1692374400000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The ID of the authoritative proxy domain instance.
   * 
   * @example
   * i-7***
   */
  instanceId?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The list of origin DNS servers.
   */
  sourceDnsServers?: DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers[];
  /**
   * @remarks
   * Indicates whether the origin server supports Extension Mechanisms for DNS (EDNS). Valid values: NOT_SUPPORT and SUPPORT.
   * 
   * @example
   * SUPPORT
   */
  sourceEdns?: string;
  /**
   * @remarks
   * The origin protocol. Valid values: TCP and UDP. The default value is UDP.
   * 
   * @example
   * UDP
   */
  sourceProtocol?: string;
  /**
   * @remarks
   * The time when the domain name was last updated.
   * 
   * @example
   * 2023-05-22T03:40Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the domain name was last updated.
   * 
   * @example
   * 1671690491000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The version code of Alibaba Cloud DNS.
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
   * The list of domain names returned.
   */
  domains?: DescribeDnsCacheDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 57121A9C-CDCF-541F-AD39-275D89099420
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names.
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

