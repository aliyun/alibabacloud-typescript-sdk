// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LifecyclePostStartExec } from "./LifecyclePostStartExec";


export class LifecyclePostStart extends $dara.Model {
  exec?: LifecyclePostStartExec;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: LifecyclePostStartExec,
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

