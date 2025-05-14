// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceRequestAffinityCPU } from "./UpdateInstanceRequestAffinityCpu";


export class UpdateInstanceRequestAffinity extends $dara.Model {
  /**
   * @remarks
   * The CPU affinity configuration. Only subscription instances that use general-purpose computing resources support CPU affinity configuration.
   */
  CPU?: UpdateInstanceRequestAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: UpdateInstanceRequestAffinityCPU,
    };
  }

  validate() {
    if(this.CPU && typeof (this.CPU as any).validate === 'function') {
      (this.CPU as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

