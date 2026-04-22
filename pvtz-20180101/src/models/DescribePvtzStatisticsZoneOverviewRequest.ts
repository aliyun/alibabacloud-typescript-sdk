// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsZoneOverviewRequestNetworkParams extends $dara.Model {
  /**
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf68l2l04nqoyg7ie1kaw
   */
  vpcId?: string;
  /**
   * @example
   * 5209821778041881
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

export class DescribePvtzStatisticsZoneOverviewRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * 234534535432323...
   */
  clientToken?: string;
  /**
   * @example
   * AUTHORITY
   */
  module?: string;
  networkParams?: DescribePvtzStatisticsZoneOverviewRequestNetworkParams[];
  overviewPeriod?: string;
  /**
   * @example
   * cn-hangzhou
   */
  serverRegion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      module: 'Module',
      networkParams: 'NetworkParams',
      overviewPeriod: 'OverviewPeriod',
      serverRegion: 'ServerRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      module: 'string',
      networkParams: { 'type': 'array', 'itemType': DescribePvtzStatisticsZoneOverviewRequestNetworkParams },
      overviewPeriod: 'string',
      serverRegion: 'string',
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

