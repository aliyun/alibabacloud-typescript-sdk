// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsSummaryRequestNetworkParams extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp1uvv79h1t8unnzdh3nq
   */
  vpcId?: string;
  /**
   * @example
   * 1256177436790486
   */
  vpcOwner?: string;
  /**
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
   * @example
   * ASC
   */
  direction?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 1571673600000
   */
  endTimestamp?: string;
  /**
   * @example
   * up
   */
  growType?: string;
  module?: string;
  networkParams?: DescribePvtzStatisticsSummaryRequestNetworkParams[];
  /**
   * @example
   * fluctuation_ratio
   */
  orderBy?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * day
   */
  period?: string;
  /**
   * @example
   * 0
   */
  rcode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  serverRegion?: string;
  /**
   * @example
   * 1571587200000
   */
  startTimestamp?: string;
  statisticalType?: string;
  /**
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

