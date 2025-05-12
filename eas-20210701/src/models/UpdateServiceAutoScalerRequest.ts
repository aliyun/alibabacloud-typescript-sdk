// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceAutoScalerRequestBehavior } from "./UpdateServiceAutoScalerRequestBehavior";
import { UpdateServiceAutoScalerRequestScaleStrategies } from "./UpdateServiceAutoScalerRequestScaleStrategies";


export class UpdateServiceAutoScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: UpdateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances. The value must be greater than that of the min parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The auto scaling policies.
   * 
   * This parameter is required.
   */
  scaleStrategies?: UpdateServiceAutoScalerRequestScaleStrategies[];
  static names(): { [key: string]: string } {
    return {
      behavior: 'behavior',
      max: 'max',
      min: 'min',
      scaleStrategies: 'scaleStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: UpdateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': UpdateServiceAutoScalerRequestScaleStrategies },
    };
  }

  validate() {
    if(this.behavior && typeof (this.behavior as any).validate === 'function') {
      (this.behavior as any).validate();
    }
    if(Array.isArray(this.scaleStrategies)) {
      $dara.Model.validateArray(this.scaleStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

