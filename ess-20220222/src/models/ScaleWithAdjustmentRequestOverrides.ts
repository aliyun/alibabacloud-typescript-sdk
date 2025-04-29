// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScaleWithAdjustmentRequestOverridesContainerOverrides } from "./ScaleWithAdjustmentRequestOverridesContainerOverrides";


export class ScaleWithAdjustmentRequestOverrides extends $dara.Model {
  /**
   * @remarks
   * The list of parameters that you want to use to override specific configurations for containers.
   */
  containerOverrides?: ScaleWithAdjustmentRequestOverridesContainerOverrides[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the instance.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size that you want to allocate to the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      containerOverrides: 'ContainerOverrides',
      cpu: 'Cpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerOverrides: { 'type': 'array', 'itemType': ScaleWithAdjustmentRequestOverridesContainerOverrides },
      cpu: 'number',
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.containerOverrides)) {
      $dara.Model.validateArray(this.containerOverrides);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

