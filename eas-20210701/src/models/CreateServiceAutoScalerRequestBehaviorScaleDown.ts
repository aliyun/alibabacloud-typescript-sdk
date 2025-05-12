// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceAutoScalerRequestBehaviorScaleDown extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-in operation is performed. The scale-in operation can be performed only if the specified metric drops below the specified threshold in the specified time window. Default value: 300.
   * 
   * @example
   * 300
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

