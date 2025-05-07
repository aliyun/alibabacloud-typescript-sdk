// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LifecyclePostStart } from "./LifecyclePostStart";
import { LifecyclePreStop } from "./LifecyclePreStop";


export class Lifecycle extends $dara.Model {
  postStart?: LifecyclePostStart;
  preStop?: LifecyclePreStop;
  static names(): { [key: string]: string } {
    return {
      postStart: 'PostStart',
      preStop: 'PreStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postStart: LifecyclePostStart,
      preStop: LifecyclePreStop,
    };
  }

  validate() {
    if(this.postStart && typeof (this.postStart as any).validate === 'function') {
      (this.postStart as any).validate();
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

