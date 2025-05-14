// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateInstanceRequestAffinityCPU } from "./CreateInstanceRequestAffinityCpu";


export class CreateInstanceRequestAffinity extends $dara.Model {
  /**
   * @remarks
   * The CPU affinity configuration. Only subscription instances that use general-purpose computing resources support CPU affinity configuration.
   */
  CPU?: CreateInstanceRequestAffinityCPU;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: CreateInstanceRequestAffinityCPU,
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

