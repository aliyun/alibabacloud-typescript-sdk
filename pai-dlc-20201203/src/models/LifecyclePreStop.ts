// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LifecyclePreStopExec } from "./LifecyclePreStopExec";


export class LifecyclePreStop extends $dara.Model {
  exec?: LifecyclePreStopExec;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: LifecyclePreStopExec,
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

