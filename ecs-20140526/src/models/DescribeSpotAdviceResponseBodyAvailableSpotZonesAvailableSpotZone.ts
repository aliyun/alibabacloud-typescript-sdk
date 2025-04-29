// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources } from "./DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources";


export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone extends $dara.Model {
  /**
   * @remarks
   * Details about preemptible instances in the previous 30 days, including the release rate of preemptible instances and percentages of average preemptible instance prices relative to pay-as-you-go instance prices.
   */
  availableSpotResources?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableSpotResources: 'AvailableSpotResources',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotResources: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.availableSpotResources && typeof (this.availableSpotResources as any).validate === 'function') {
      (this.availableSpotResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

