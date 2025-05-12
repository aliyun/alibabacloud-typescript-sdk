// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceAutoScalerRequestBehaviorScaleUp extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-out operation is performed. Default value: 0. The scale-out operation can be performed only if the specified metric exceeds the specified threshold in the specified time window.
   * 
   * @example
   * 0
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

