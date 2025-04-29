// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource extends $dara.Model {
  /**
   * @remarks
   * The percentage of the average preemptible instance price relative to the pay-as-you-go instance price in the previous 30 days. Unit: %. Valid values: 1 to 100.
   * 
   * You can calculate the average preemptible instance price based on the return value. For example, if the pay-as-you-go instance price is 1 and the return value of this parameter is 20, the average preemptible instance price in the previous 30 days is 0.2.
   * 
   * @example
   * 20
   */
  averageSpotDiscount?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The release rate range of preemptible instances in the previous 30 days, which corresponds to the `InterruptionRate` value. Valid values:
   * 
   * *   0-3%
   * *   3-5%
   * *   5-10%
   * *   10-100%
   * 
   * @example
   * 0-3%
   */
  interruptRateDesc?: string;
  /**
   * @remarks
   * The average release rate of preemptible instances in the previous 30 days. Unit: %.
   * 
   * @example
   * 0
   */
  interruptionRate?: number;
  static names(): { [key: string]: string } {
    return {
      averageSpotDiscount: 'AverageSpotDiscount',
      instanceType: 'InstanceType',
      interruptRateDesc: 'InterruptRateDesc',
      interruptionRate: 'InterruptionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpotDiscount: 'number',
      instanceType: 'string',
      interruptRateDesc: 'string',
      interruptionRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

