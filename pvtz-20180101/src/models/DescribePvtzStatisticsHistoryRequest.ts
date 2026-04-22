// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsHistoryRequestNetworkParams extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * vpc-bp1hneq5pcy2gv87op0uf
   */
  vpcId?: string;
  /**
   * @example
   * 1634808626233933
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

export class DescribePvtzStatisticsHistoryRequest extends $dara.Model {
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
  module?: string;
  networkParams?: DescribePvtzStatisticsHistoryRequestNetworkParams[];
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
   * 1516779348000
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

