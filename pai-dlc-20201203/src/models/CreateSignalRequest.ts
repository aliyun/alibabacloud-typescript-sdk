// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SignalTarget } from "./SignalTarget";


export class CreateSignalRequest extends $dara.Model {
  /**
   * @example
   * SIGUSR1
   */
  signal?: string;
  target?: SignalTarget;
  static names(): { [key: string]: string } {
    return {
      signal: 'Signal',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signal: 'string',
      target: SignalTarget,
    };
  }

  validate() {
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

