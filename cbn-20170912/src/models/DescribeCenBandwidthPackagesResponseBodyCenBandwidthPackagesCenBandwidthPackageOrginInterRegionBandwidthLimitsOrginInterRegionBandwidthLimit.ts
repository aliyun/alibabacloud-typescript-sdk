// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenBandwidthPackagesResponseBodyCenBandwidthPackagesCenBandwidthPackageOrginInterRegionBandwidthLimitsOrginInterRegionBandwidthLimit extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth value for the inter-region connection.
   * 
   * @example
   * 1
   */
  bandwidthLimit?: string;
  /**
   * @remarks
   * The connected regions.
   * 
   * @example
   * north-america_china
   */
  geographicSpanId?: string;
  /**
   * @remarks
   * The ID of the local region.
   * 
   * @example
   * cn-hangzhou
   */
  localRegionId?: string;
  /**
   * @remarks
   * The ID of the peer region.
   * 
   * @example
   * us-west-1
   */
  oppositeRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      geographicSpanId: 'GeographicSpanId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'string',
      geographicSpanId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

