// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsGlobalOverviewRequestNetworkParams extends $dara.Model {
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
   * vpc-bp1y5y4wk5810n50cx765
   */
  vpcId?: string;
  /**
   * @example
   * 5924158341670144
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

export class DescribePvtzStatisticsGlobalOverviewRequest extends $dara.Model {
  networkParams?: DescribePvtzStatisticsGlobalOverviewRequestNetworkParams[];
  /**
   * @example
   * DAY, WEEK, MONTH
   */
  overviewPeriod?: string;
  /**
   * @example
   * cn-hangzhou
   */
  serverRegion?: string;
  static names(): { [key: string]: string } {
    return {
      networkParams: 'NetworkParams',
      overviewPeriod: 'OverviewPeriod',
      serverRegion: 'ServerRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkParams: { 'type': 'array', 'itemType': DescribePvtzStatisticsGlobalOverviewRequestNetworkParams },
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

