// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequestHybridMetricsDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the metric dimension.
   * 
   * @example
   * queue
   */
  dimensionKey?: string;
  /**
   * @remarks
   * The value of the metric dimension.
   * 
   * @example
   * testQueue
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

