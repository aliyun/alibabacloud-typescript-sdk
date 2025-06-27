// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsProductInstanceResponseBodyDnsServers } from "./DescribeDnsProductInstanceResponseBodyDnsServers";


export class DescribeDnsProductInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal was enabled. Valid values:
   * 
   * *   true: Auto-renewal was enabled.
   * *   false: Auto-renewal was not enabled.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The number of times that you can change the domain names that are bound to the paid Alibaba Cloud DNS instance. This parameter applies to Alibaba Cloud DNS instances of the custom edition.
   * 
   * @example
   * 3
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of domain names that can be bound to the paid Alibaba Cloud DNS instance. This parameter applies to Alibaba Cloud DNS instances of Personal Edition, Enterprise Standard Edition, and Enterprise Ultimate Edition.
   * 
   * @example
   * 5
   */
  bindDomainCount?: number;
  /**
   * @remarks
   * The number of domain names that are bound to the paid Alibaba Cloud DNS instance. This parameter applies to Alibaba Cloud DNS instances of Personal Edition, Enterprise Standard Edition, and Enterprise Ultimate Edition.
   * 
   * @example
   * 3
   */
  bindDomainUsedCount?: number;
  /**
   * @remarks
   * The number of times that you have changed the domain names that are bound to the paid Alibaba Cloud DNS instance. This parameter applies to Alibaba Cloud DNS instances of the custom edition.
   * 
   * @example
   * 1
   */
  bindUsedCount?: number;
  /**
   * @remarks
   * The DDoS protection traffic. Unit: GB.
   * 
   * @example
   * 50
   */
  DDosDefendFlow?: number;
  /**
   * @remarks
   * The DDoS protection frequency. Unit: 10,000 QPS. This parameter applies to Alibaba Cloud DNS instances of the custom edition.
   * 
   * @example
   * 50
   */
  DDosDefendQuery?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that are used for load balancing in a single line of a domain name.
   * 
   * @example
   * 15
   */
  dnsSLBCount?: number;
  /**
   * @remarks
   * The level of DNS protection. Valid values:
   * 
   * *   no: No DNS protection is provided.
   * *   basic: Basic DNS protection is provided.
   * *   advanced: Advanced DNS protection is provided.
   * 
   * @example
   * advanced
   */
  dnsSecurity?: string;
  /**
   * @remarks
   * The DNS servers configured for the domain names.
   */
  dnsServers?: DescribeDnsProductInstanceResponseBodyDnsServers;
  /**
   * @remarks
   * The domain name that is bound to the paid instance.
   * 
   * If no value is returned for this parameter, no domain name is bound to the paid instance.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   PUBLIC: authoritative domain name
   * *   CACHE: cache-accelerated domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The time when the instance expired. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the instance expired. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1474335170000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Indicates whether global server load balancing (GSLB) is supported. Valid values:
   * 
   * *   true: GSLB is supported.
   * *   false: GSLB is not supported.
   * 
   * @example
   * true
   */
  gslb?: boolean;
  /**
   * @remarks
   * The ISP resolution lines. Valid values:
   * 
   * *   China Telecom
   * *   China Mobile
   * *   China Unicom
   * *   China Education and Research Network (CERNET)
   * *   China Broadcasting Network (CBN)
   * *   Dr Peng Telecom & Media Group
   */
  ISPLines?: string;
  /**
   * @remarks
   * The regional ISP resolution lines. Valid values:
   * 
   * *   China Telecom (province)
   * *   China Mobile (province)
   * *   China Unicom (province)
   * *   CERNET (province)
   */
  ISPRegionLines?: string;
  /**
   * @remarks
   * Indicates whether the Domain Name System (DNS) servers stopped responding to all DNS requests. Valid values:
   * 
   * *   true: The DNS servers stopped responding to all DNS requests.
   * *   false: The DNS servers did not stop responding to all DNS requests.
   * 
   * @example
   * false
   */
  inBlackHole?: boolean;
  /**
   * @remarks
   * Indicates whether the DNS servers stopped responding to abnormal requests sent to the domain names.
   * 
   * *   true: The DNS servers stopped responding to abnormal requests sent to the domain names.
   * *   false: The DNS servers did not stop responding to abnormal requests sent to the domain names.
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
   * The interval at which the instance is monitored. Unit: minutes.
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
   * The number of monitoring tasks.
   * 
   * @example
   * 2
   */
  monitorTaskCount?: number;
  /**
   * @remarks
   * The DDoS protection traffic outside the Chinese mainland. Unit: GB.
   * 
   * @example
   * 1
   */
  overseaDDosDefendFlow?: number;
  /**
   * @remarks
   * The line outside the Chinese mainland.
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
   * Indicates whether the DNS request lines are regional lines. Valid values:
   * 
   * *   true: The DNS request lines are regional lines.
   * *   false: The DNS request lines are not regional lines.
   * 
   * @example
   * true
   */
  regionLines?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The search engine resolution lines. Valid values:
   * 
   * *   Google
   * *   Baidu
   * *   Bing
   * *   Youdao
   */
  searchEngineLines?: string;
  /**
   * @remarks
   * The time when the instance was purchased. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the instance was purchased. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1474335170000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The number of subdomain name levels.
   * 
   * @example
   * 6
   */
  subDomainLevel?: number;
  /**
   * @remarks
   * The minimum time-to-live (TTL) period. Unit: seconds.
   * 
   * @example
   * 10
   */
  TTLMinValue?: number;
  /**
   * @remarks
   * The number of the forwarded URLs.
   * 
   * @example
   * 20
   */
  URLForwardCount?: number;
  /**
   * @remarks
   * The version code of Alibaba Cloud DNS.
   * 
   * @example
   * version1
   */
  versionCode?: string;
  /**
   * @remarks
   * The edition of Alibaba Cloud DNS.
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

