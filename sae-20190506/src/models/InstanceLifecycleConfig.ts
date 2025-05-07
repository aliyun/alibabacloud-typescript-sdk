// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LifecycleHook } from "./LifecycleHook";


export class InstanceLifecycleConfig extends $dara.Model {
  preFreeze?: LifecycleHook;
  preStop?: LifecycleHook;
  static names(): { [key: string]: string } {
    return {
      preFreeze: 'preFreeze',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preFreeze: LifecycleHook,
      preStop: LifecycleHook,
    };
  }

  validate() {
    if(this.preFreeze && typeof (this.preFreeze as any).validate === 'function') {
      (this.preFreeze as any).validate();
    }
    if(this.preStop && typeof (this.preStop as any).validate === 'function') {
      (this.preStop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

