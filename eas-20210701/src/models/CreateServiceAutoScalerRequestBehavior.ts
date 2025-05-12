// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceAutoScalerRequestBehaviorOnZero } from "./CreateServiceAutoScalerRequestBehaviorOnZero";
import { CreateServiceAutoScalerRequestBehaviorScaleDown } from "./CreateServiceAutoScalerRequestBehaviorScaleDown";
import { CreateServiceAutoScalerRequestBehaviorScaleUp } from "./CreateServiceAutoScalerRequestBehaviorScaleUp";


export class CreateServiceAutoScalerRequestBehavior extends $dara.Model {
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: CreateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: CreateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
  scaleUp?: CreateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: CreateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: CreateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: CreateServiceAutoScalerRequestBehaviorScaleUp,
    };
  }

  validate() {
    if(this.onZero && typeof (this.onZero as any).validate === 'function') {
      (this.onZero as any).validate();
    }
    if(this.scaleDown && typeof (this.scaleDown as any).validate === 'function') {
      (this.scaleDown as any).validate();
    }
    if(this.scaleUp && typeof (this.scaleUp as any).validate === 'function') {
      (this.scaleUp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

