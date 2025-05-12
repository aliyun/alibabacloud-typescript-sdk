// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceAutoScalerRequestBehavior } from "./CreateServiceAutoScalerRequestBehavior";
import { CreateServiceAutoScalerRequestScaleStrategies } from "./CreateServiceAutoScalerRequestScaleStrategies";


export class CreateServiceAutoScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: CreateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances in the service. The value of max must be greater than the value of min.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances in the service.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * This parameter is required.
   */
  scaleStrategies?: CreateServiceAutoScalerRequestScaleStrategies[];
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
      behavior: CreateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': CreateServiceAutoScalerRequestScaleStrategies },
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

