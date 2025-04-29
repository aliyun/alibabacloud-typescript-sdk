// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingRulesResponseBodyScalingRulesAlarmDimensions extends $dara.Model {
  /**
   * @remarks
   * The dimension key of the metric.
   * 
   * @example
   * rulePool
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The dimension value of the metric.
   * 
   * @example
   * sgp-l1cbirz451yxu2dxxx
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

