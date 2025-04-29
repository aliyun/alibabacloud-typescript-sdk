// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingRulesResponseBodyScalingRulesAlarmsDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension that is associated with the metric. Valid values:
   * 
   * *   ScalingGroupId: the ID of the scaling group.
   * *   userId: the ID of the user account.
   * 
   * @example
   * scaling_group
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the dimension that is associated with the metric.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  dimensionValue?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionKey: 'DimensionKey',
      dimensionValue: 'DimensionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionKey: 'string',
      dimensionValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

