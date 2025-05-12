// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateServiceAutoScalerRequestBehaviorOnZero } from "./UpdateServiceAutoScalerRequestBehaviorOnZero";
import { UpdateServiceAutoScalerRequestBehaviorScaleDown } from "./UpdateServiceAutoScalerRequestBehaviorScaleDown";
import { UpdateServiceAutoScalerRequestBehaviorScaleUp } from "./UpdateServiceAutoScalerRequestBehaviorScaleUp";


export class UpdateServiceAutoScalerRequestBehavior extends $dara.Model {
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: UpdateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: UpdateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
  scaleUp?: UpdateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: UpdateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: UpdateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: UpdateServiceAutoScalerRequestBehaviorScaleUp,
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

