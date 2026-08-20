// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsZoneOverviewRequestNetworkParams extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf68l2l04nqoyg7ie1kaw
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 5209821778041881
   */
  vpcOwner?: string;
  /**
   * @remarks
   * The type of the VPC. Valid values:
   * 
   * - `STANDARD`: standard VPC
   * 
   * - `EDS`: Elastic Desktop Service (EDS) VPC
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

export class DescribePvtzStatisticsZoneOverviewRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - `zh-CN`: Chinese
   * 
   * - `en-US`: English
   * 
   * Default value: `en-US`.
   * 
   * > This parameter takes precedence over the `Lang` parameter.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A client token to ensure request idempotence. Your client must generate a unique token for each request. The token can contain only ASCII characters.
   * 
   * @example
   * 234534535432323...
   */
  clientToken?: string;
  /**
   * @remarks
   * The statistical module.
   * 
   * @example
   * AUTHORITY
   */
  module?: string;
  /**
   * @remarks
   * The network parameters.
   */
  networkParams?: DescribePvtzStatisticsZoneOverviewRequestNetworkParams[];
  /**
   * @remarks
   * The statistical period.
   * 
   * @example
   * DAY
   */
  overviewPeriod?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

