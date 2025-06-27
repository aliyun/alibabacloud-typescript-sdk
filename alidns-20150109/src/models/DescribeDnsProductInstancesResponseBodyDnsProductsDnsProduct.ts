// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct extends $dara.Model {
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
   * The number of times you can change domain names that are bound to the DNS instance. It can be specified by the user who uses Alibaba Cloud DNS of the custom version.
   * 
   * @example
   * 3
   */
  bindCount?: number;
  /**
   * @remarks
   * The number of domain names that can be bound to the DNS instance.
   * 
   * @example
   * 5
   */
  bindDomainCount?: number;
  /**
   * @remarks
   * The number of domain names that have been bound to the DNS instance.
   * 
   * @example
   * 3
   */
  bindDomainUsedCount?: number;
  /**
   * @remarks
   * The number of times you have changed domain names that are bound to the DNS instance. It can be specified by the user who uses Alibaba Cloud DNS of the custom version.
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
   * The DDoS protection frequency. Unit: 10,000 QPS.
   * 
   * @example
   * 50
   */
  DDosDefendQuery?: number;
  /**
   * @remarks
   * The number of IP addresses supported by a domain name or line.
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
   * no
   */
  dnsSecurity?: string;
  /**
   * @remarks
   * The bound domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The time at which the instance expired.
   * 
   * @example
   * 2015-12-12T00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The UNIX timestamp representing the expiration time of the instance.
   * 
   * @example
   * 1474335170000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Indicates whether global server load balancing (GSLB) is supported.
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
   * The ISP resolution lines.
   * 
   * *   China Telecom
   * *   China Mobile
   * *   China Unicom
   * *   CERNET
   * *   China Broadcasting Network (CBN)
   * *   Dr Peng Telecom & Media Group
   * 
   * @example
   * China Mobile,China Unicom,China Telecom,China Edu
   */
  ISPLines?: string;
  /**
   * @remarks
   * The regional ISP resolution lines. Valid values:
   * 
   * *   China Telecom (province)
   * *   China Mobile (province)
   * *   China Unicom (province)
   * *   China Education and Research Network (CERNET) (province)
   * 
   * @example
   * Telecom (Province), Mobile (Province), Unicom (Province), Education Network (Province)
   */
  ISPRegionLines?: string;
  /**
   * @remarks
   * Indicates whether the Domain Name System (DNS) servers stopped responding to all requests. Valid values:
   * 
   * *   true: The DNS servers stopped responding to all requests.
   * *   false: The DNS servers did not stop responding to all requests.
   * 
   * @example
   * false
   */
  inBlackHole?: boolean;
  /**
   * @remarks
   * Indicates whether the request for domain name resolution was being cleared.
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
   * i-8fj
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
   * The number of monitored nodes.
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
   * DDoS protection traffic outside China. Unit: GB.
   * 
   * @example
   * 1
   */
  overseaDDosDefendFlow?: number;
  /**
   * @remarks
   * The type of the overseas line.
   * 
   * @example
   * Countries
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
   * Indicates whether the DNS request lines are regional lines.
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
   * The search engine resolution lines. Valid values:
   * 
   * *   Google
   * *   Baidu
   * *   Bing
   * *   Youdao
   * 
   * @example
   * Search Engine Robots,Google Robots,Baidu Robots,Bing Robots
   */
  searchEngineLines?: string;
  /**
   * @remarks
   * The time when the DNS instance was purchased.
   * 
   * @example
   * 2015-11-12T09:23Z
   */
  startTime?: string;
  /**
   * @remarks
   * The UNIX timestamp representing when the DNS instance was purchased.
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
   * The minimum TTL. Unit: seconds.
   * 
   * @example
   * 10
   */
  TTLMinValue?: number;
  /**
   * @remarks
   * The URL forwarding quantity.
   * 
   * @example
   * 20
   */
  URLForwardCount?: number;
  /**
   * @remarks
   * The version code of the Alibaba Cloud DNS instance.
   * 
   * @example
   * version1
   */
  versionCode?: string;
  /**
   * @remarks
   * The version name of the Alibaba Cloud DNS instance.
   * 
   * @example
   * Alibaba Cloud DNS
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
      domain: 'Domain',
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
      domain: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

