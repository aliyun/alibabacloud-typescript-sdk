// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct extends $dara.Model {
  autoRenewal?: boolean;
  bindCount?: number;
  bindDomainCount?: number;
  bindDomainUsedCount?: number;
  bindUsedCount?: number;
  DDosDefendFlow?: number;
  DDosDefendQuery?: number;
  dnsSLBCount?: number;
  dnsSecurity?: string;
  domain?: string;
  endTime?: string;
  endTimestamp?: number;
  gslb?: boolean;
  ISPLines?: string;
  ISPRegionLines?: string;
  inBlackHole?: boolean;
  inClean?: boolean;
  instanceId?: string;
  monitorFrequency?: number;
  monitorNodeCount?: number;
  monitorTaskCount?: number;
  overseaDDosDefendFlow?: number;
  overseaLine?: string;
  paymentType?: string;
  regionLines?: boolean;
  searchEngineLines?: string;
  startTime?: string;
  startTimestamp?: number;
  subDomainLevel?: number;
  TTLMinValue?: number;
  URLForwardCount?: number;
  versionCode?: string;
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

export class DescribeDnsProductInstancesResponseBodyDnsProducts extends $dara.Model {
  dnsProduct?: DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct[];
  static names(): { [key: string]: string } {
    return {
      dnsProduct: 'DnsProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsProduct: { 'type': 'array', 'itemType': DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct },
    };
  }

  validate() {
    if(Array.isArray(this.dnsProduct)) {
      $dara.Model.validateArray(this.dnsProduct);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponseBody extends $dara.Model {
  dnsProducts?: DescribeDnsProductInstancesResponseBodyDnsProducts;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   PUBLIC (default): hosted public domain name
   * *   CACHE: cached public domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
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
   * The total number of domain names.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dnsProducts: 'DnsProducts',
      domainType: 'DomainType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsProducts: DescribeDnsProductInstancesResponseBodyDnsProducts,
      domainType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dnsProducts && typeof (this.dnsProducts as any).validate === 'function') {
      (this.dnsProducts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

