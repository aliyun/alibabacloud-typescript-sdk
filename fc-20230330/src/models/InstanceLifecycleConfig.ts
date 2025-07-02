// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LifecycleHook } from "./LifecycleHook";


export class InstanceLifecycleConfig extends $dara.Model {
  initializer?: LifecycleHook;
  preStop?: LifecycleHook;
  static names(): { [key: string]: string } {
    return {
      initializer: 'initializer',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initializer: LifecycleHook,
      preStop: LifecycleHook,
    };
  }

  validate() {
    if(this.initializer && typeof (this.initializer as any).validate === 'function') {
      (this.initializer as any).validate();
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

