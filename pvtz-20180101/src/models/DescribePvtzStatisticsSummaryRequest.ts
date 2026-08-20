// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsSummaryRequestNetworkParams extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1uvv79h1t8unnzdh3nq
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the VPC.
   * 
   * @example
   * 1256177436790486
   */
  vpcOwner?: string;
  /**
   * @remarks
   * The type of the VPC.
   * 
   * - STANDARD: A standard VPC.
   * 
   * - EDS: A VPC for Elastic Desktop Service (EDS).
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcOwner: 'VpcOwner',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcOwner: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePvtzStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values: ASC and DESC.
   * 
   * @example
   * ASC
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571673600000
   */
  endTimestamp?: string;
  /**
   * @remarks
   * Specifies the type of change in request volume to report. Valid values: up (request spikes) and down (request drops).
   * 
   * @example
   * up
   */
  growType?: string;
  /**
   * @remarks
   * The statistics module. Valid values: AUTHORITY, AUTH_FAST, AUTH_SLOW, GLOBAL, CACHE, FORWARD, and RECURSION.
   * 
   * @example
   * AUTH_FAST
   */
  module?: string;
  /**
   * @remarks
   * The network parameters.
   */
  networkParams?: DescribePvtzStatisticsSummaryRequestNetworkParams[];
  /**
   * @remarks
   * The field by which to sort the results. To sort by fluctuation ratio, set this parameter to fluctuation_ratio.
   * 
   * @example
   * fluctuation_ratio
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The time granularity for the statistics.
   * 
   * @example
   * day
   */
  period?: string;
  /**
   * @remarks
   * The DNS response code.
   * 
   * @example
   * 0
   */
  rcode?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  serverRegion?: string;
  /**
   * @remarks
   * The beginning of the time range to query, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571587200000
   */
  startTimestamp?: string;
  /**
   * @remarks
   * The type of statistics to collect. Valid values: QTYPE_RATIO: The ratio of DNS request record types. NEGATIVE_RCODE: Statistics on negative DNS responses. RCODE_DOMAIN: The top domain names that receive negative responses. RCODE_SOURCE_IP: The top source IP addresses for requests to a specified domain name that receive negative responses. REQUEST_ZONE: The top zones by request volume. REQUEST_DOMAIN: The top subdomains by request volume. VPC_RATIO: The ratio of request sources. SOURCE_VPC: Analysis of high-traffic source networks. SOURCE_IP: Statistics on source IP addresses. LINE_RATIO: The percentage of traffic per resolution line. LINE_HIT: Details about resolution line hits.
   * 
   * @example
   * - QTYPE_RATIO: Distribution ratio of DNS request record types.
   * - NEGATIVE_RCODE: Negative DNS response type statistics.
   * - RCODE_DOMAIN: Top domains by negative response count
   * - RCODE_SOURCE_IP: Top source IP addresses requesting a specific domain with negative responses.
   * - REQUEST_ZONE: Domain request volume ranking (zone level).
   * - REQUEST_DOMAIN: Subdomain request volume ranking (domain name level).
   * - VPC_RATIO: Request source distribution ratio.
   * - SOURCE_VPC: Hot source network analysis for requests.
   * - SOURCE_IP: Request source IP address statistics.
   * - LINE_RATIO: Traffic distribution ratio by resolution line.
   * - LINE_HIT: Resolution line hit details.
   */
  statisticalType?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * host.local
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      growType: 'GrowType',
      module: 'Module',
      networkParams: 'NetworkParams',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      period: 'Period',
      rcode: 'Rcode',
      serverRegion: 'ServerRegion',
      startTimestamp: 'StartTimestamp',
      statisticalType: 'StatisticalType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      endTimestamp: 'string',
      growType: 'string',
      module: 'string',
      networkParams: { 'type': 'array', 'itemType': DescribePvtzStatisticsSummaryRequestNetworkParams },
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      period: 'string',
      rcode: 'string',
      serverRegion: 'string',
      startTimestamp: 'string',
      statisticalType: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkParams)) {
      $dara.Model.validateArray(this.networkParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

