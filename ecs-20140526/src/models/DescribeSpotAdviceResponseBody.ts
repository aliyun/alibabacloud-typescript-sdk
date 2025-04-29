// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotAdviceResponseBodyAvailableSpotZones } from "./DescribeSpotAdviceResponseBodyAvailableSpotZones";


export class DescribeSpotAdviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about preemptible instances in the zones of the specified region.
   * 
   * >  The return values are sorted based on the historical percentages of average preemptible instance prices relative to pay-as-you-go instance prices for instance types.
   */
  availableSpotZones?: DescribeSpotAdviceResponseBodyAvailableSpotZones;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableSpotZones: 'AvailableSpotZones',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotZones: DescribeSpotAdviceResponseBodyAvailableSpotZones,
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableSpotZones && typeof (this.availableSpotZones as any).validate === 'function') {
      (this.availableSpotZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

