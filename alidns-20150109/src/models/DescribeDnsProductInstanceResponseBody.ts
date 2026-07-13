// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsProductInstanceResponseBodyDnsServers extends $dara.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dnsServer)) {
      $dara.Model.validateArray(this.dnsServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance.
   * 
   * - true: Auto-renewal is enabled.
   * 
   * - false: Auto-renewal is disabled.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The number of times the domain name can be changed for the paid DNS instance. This parameter is available for the Custom Edition.
   * 
   * @example
   * 3
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of domain names that can be attached to the paid DNS instance. This parameter is available for the Personal and Ultimate editions.
   * 
   * @example
   * 5
   */
  bindDomainCount?: number;
  /**
   * @remarks
   * The number of domain names that are attached to the paid DNS instance. This parameter is available for the Personal and Ultimate editions.
   * 
   * @example
   * 3
   */
  bindDomainUsedCount?: number;
  /**
   * @remarks
   * The number of times the domain name has been changed for the paid DNS instance. This parameter is available for the Custom Edition.
   * 
   * @example
   * 1
   */
  bindUsedCount?: number;
  /**
   * @remarks
   * The DDoS protection bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 50
   */
  DDosDefendFlow?: number;
  /**
   * @remarks
   * The DDoS protection capacity in queries per second (QPS). The unit is 10,000 QPS. This parameter is available for the Custom Edition.
   * 
   * @example
   * 50
   */
  DDosDefendQuery?: number;
  /**
   * @remarks
   * The Server Load Balancer (SLB) capacity. This is the number of IP addresses that can be configured for a domain name on a single line.
   * 
   * @example
   * 15
   */
  dnsSLBCount?: number;
  /**
   * @remarks
   * The DNS security level. Valid values:
   * 
   * - no: Not required
   * 
   * - basic: Basic DNS attack protection
   * 
   * - advanced: Advanced DNS attack protection
   * 
   * @example
   * advanced
   */
  dnsSecurity?: string;
  dnsServers?: DescribeDnsProductInstanceResponseBodyDnsServers;
  /**
   * @remarks
   * The attached domain name.
   * 
   * If this parameter is empty, no domain name is attached.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the instance:
   * 
   * - PUBLIC: An instance for an authoritative domain name.
   * 
   * - CACHE: An instance for a recursive DNS proxy.
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the instance expires. This is a UNIX timestamp.
   * 
   * @example
   * 1474335170000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Indicates whether Global Server Load Balancer (GSLB) is allowed.
   * 
   * - true: Allowed
   * 
   * - false: Not allowed
   * 
   * @example
   * true
   */
  gslb?: boolean;
  /**
   * @remarks
   * The carrier line from which the DNS request was initiated. Valid values:
   * 
   * - China Telecom
   * 
   * - China Mobile
   * 
   * - China Unicom
   * 
   * - China Education and Research Network
   * 
   * - China Broadcasting Network
   * 
   * - Dr. Peng Group
   * 
   * @example
   * 中国电信
   */
  ISPLines?: string;
  /**
   * @remarks
   * The carrier line and province from which the DNS request was initiated. Valid values:
   * 
   * - China Telecom (by province)
   * 
   * - China Mobile (by province)
   * 
   * - China Unicom (by province)
   * 
   * - China Education and Research Network (by province)
   * 
   * @example
   * 电信_浙江
   */
  ISPRegionLines?: string;
  /**
   * @remarks
   * Indicates whether the domain name is in a blackhole filtering status.
   * 
   * - true: The domain name is in a blackhole filtering status.
   * 
   * - false: The domain name is not in a blackhole filtering status.
   * 
   * @example
   * false
   */
  inBlackHole?: boolean;
  /**
   * @remarks
   * Indicates whether the domain name is undergoing traffic scrubbing.
   * 
   * - true: Traffic scrubbing is in progress.
   * 
   * - false: Traffic scrubbing is not in progress.
   * 
   * @example
   * false
   */
  inClean?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud DNS instance.
   * 
   * @example
   * i-8fxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The monitoring frequency. Unit: minutes.
   * 
   * @example
   * 50
   */
  monitorFrequency?: number;
  /**
   * @remarks
   * The number of monitoring nodes.
   * 
   * @example
   * 5
   */
  monitorNodeCount?: number;
  /**
   * @remarks
   * The number of monitoring jobs.
   * 
   * @example
   * 2
   */
  monitorTaskCount?: number;
  /**
   * @remarks
   * The DDoS protection bandwidth for regions outside China. Unit: Gbit/s.
   * 
   * @example
   * 1
   */
  overseaDDosDefendFlow?: number;
  /**
   * @remarks
   * The line for regions outside China.
   * 
   * @example
   * 海外大洲
   */
  overseaLine?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * Indicates whether regional lines are used.
   * 
   * - true: Regional lines are used.
   * 
   * - false: Regional lines are not used.
   * 
   * @example
   * true
   */
  regionLines?: boolean;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-xxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The search engine line. Valid values:
   * 
   * - Google
   * 
   * - Baidu
   * 
   * - Bing
   * 
   * - Youdao
   * 
   * @example
   * 谷歌
   */
  searchEngineLines?: string;
  /**
   * @remarks
   * The time when the instance was purchased.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the instance was purchased. This is a UNIX timestamp.
   * 
   * @example
   * 1474335170000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The number of subdomain levels.
   * 
   * @example
   * 6
   */
  subDomainLevel?: number;
  /**
   * @remarks
   * The minimum Time to Live (TTL) value. Unit: seconds.
   * 
   * @example
   * 10
   */
  TTLMinValue?: number;
  /**
   * @remarks
   * The number of URL forwards.
   * 
   * @example
   * 20
   */
  URLForwardCount?: number;
  /**
   * @remarks
   * The code of the Alibaba Cloud DNS edition.
   * 
   * @example
   * version1
   */
  versionCode?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud DNS edition.
   * 
   * @example
   * 企业旗舰版
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      bindCount: 'BindCount',
      bindDomainCount: 'BindDomainCount',
      bindDomainUsedCount: 'BindDomainUsedCount',
      bindUsedCount: 'BindUsedCount',
      DDosDefendFlow: 'DDosDefendFlow',
      DDosDefendQuery: 'DDosDefendQuery',
      dnsSLBCount: 'DnsSLBCount',
      dnsSecurity: 'DnsSecurity',
      dnsServers: 'DnsServers',
      domain: 'Domain',
      domainType: 'DomainType',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      gslb: 'Gslb',
      ISPLines: 'ISPLines',
      ISPRegionLines: 'ISPRegionLines',
      inBlackHole: 'InBlackHole',
      inClean: 'InClean',
      instanceId: 'InstanceId',
      monitorFrequency: 'MonitorFrequency',
      monitorNodeCount: 'MonitorNodeCount',
      monitorTaskCount: 'MonitorTaskCount',
      overseaDDosDefendFlow: 'OverseaDDosDefendFlow',
      overseaLine: 'OverseaLine',
      paymentType: 'PaymentType',
      regionLines: 'RegionLines',
      requestId: 'RequestId',
      searchEngineLines: 'SearchEngineLines',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      subDomainLevel: 'SubDomainLevel',
      TTLMinValue: 'TTLMinValue',
      URLForwardCount: 'URLForwardCount',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      bindCount: 'number',
      bindDomainCount: 'number',
      bindDomainUsedCount: 'number',
      bindUsedCount: 'number',
      DDosDefendFlow: 'number',
      DDosDefendQuery: 'number',
      dnsSLBCount: 'number',
      dnsSecurity: 'string',
      dnsServers: DescribeDnsProductInstanceResponseBodyDnsServers,
      domain: 'string',
      domainType: 'string',
      endTime: 'string',
      endTimestamp: 'number',
      gslb: 'boolean',
      ISPLines: 'string',
      ISPRegionLines: 'string',
      inBlackHole: 'boolean',
      inClean: 'boolean',
      instanceId: 'string',
      monitorFrequency: 'number',
      monitorNodeCount: 'number',
      monitorTaskCount: 'number',
      overseaDDosDefendFlow: 'number',
      overseaLine: 'string',
      paymentType: 'string',
      regionLines: 'boolean',
      requestId: 'string',
      searchEngineLines: 'string',
      startTime: 'string',
      startTimestamp: 'number',
      subDomainLevel: 'number',
      TTLMinValue: 'number',
      URLForwardCount: 'number',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.dnsServers && typeof (this.dnsServers as any).validate === 'function') {
      (this.dnsServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

