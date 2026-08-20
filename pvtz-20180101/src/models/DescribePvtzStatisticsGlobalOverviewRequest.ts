// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsGlobalOverviewRequestNetworkParams extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1y5y4wk5810n50cx765
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 5924158341670144
   */
  vpcOwner?: string;
  /**
   * @remarks
   * The type of the VPC. Valid values:
   * 
   * - **STANDARD**: standard VPC
   * 
   * - **EDS**: Elastic Desktop Service (EDS) VPC
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

export class DescribePvtzStatisticsGlobalOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The network parameters.
   */
  networkParams?: DescribePvtzStatisticsGlobalOverviewRequestNetworkParams[];
  /**
   * @remarks
   * The statistical period. Valid values: `DAY`, `WEEK`, and `MONTH`.
   * 
   * @example
   * DAY, WEEK, MONTH
   */
  overviewPeriod?: string;
  /**
   * @remarks
   * The region.
   * 
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

