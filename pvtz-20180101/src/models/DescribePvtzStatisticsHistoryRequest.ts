// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsHistoryRequestNetworkParams extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1hneq5pcy2gv87op0uf
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPC owner.
   * 
   * @example
   * 1634808626233933
   */
  vpcOwner?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * - `STANDARD`: Standard VPC.
   * 
   * - `EDS`: Elastic Desktop Service VPC.
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

export class DescribePvtzStatisticsHistoryRequest extends $dara.Model {
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
   * The end of the query time range. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1571673600000
   */
  endTimestamp?: string;
  /**
   * @remarks
   * The statistics module.
   * 
   * @example
   * AUTH
   */
  module?: string;
  /**
   * @remarks
   * The network parameters.
   */
  networkParams?: DescribePvtzStatisticsHistoryRequestNetworkParams[];
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
   * The service region.
   * 
   * @example
   * cn-hangzhou
   */
  serverRegion?: string;
  /**
   * @remarks
   * The start of the query time range. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1516779348000
   */
  startTimestamp?: string;
  /**
   * @remarks
   * The type of statistics to collect.
   * 
   * @example
   * - PROTOCOL: DNS request statistics by UDP and TCP protocol (global domain statistics only).
   * - FORWARD: Forwarding resolution volume, including successful resolutions, failed resolutions, and total resolutions.
   * - RECURSION: Recursive resolution volume, including successful resolutions, failed resolutions, and total resolutions.
   * - QTYPE: Distribution of DNS request record types, such as A, AAAA, CNAME, and MX.
   * - RCODE: Negative DNS response statistics.
   * - SUCCESS_RATIO: Average resolution success rate (resolution success rate = number of valid responses matching the requested record type (QTYPE) / total number of resolutions).
   * - LATENCY: Average DNS resolution latency (ms), which is the average time elapsed from when the Alibaba Cloud DNS server receives a DNS query to when it generates and returns a response.
   * - REQUEST: DNS request volume statistics, showing QPS query trends.
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
      domainName: 'DomainName',
      endTimestamp: 'EndTimestamp',
      module: 'Module',
      networkParams: 'NetworkParams',
      rcode: 'Rcode',
      serverRegion: 'ServerRegion',
      startTimestamp: 'StartTimestamp',
      statisticalType: 'StatisticalType',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTimestamp: 'string',
      module: 'string',
      networkParams: { 'type': 'array', 'itemType': DescribePvtzStatisticsHistoryRequestNetworkParams },
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

