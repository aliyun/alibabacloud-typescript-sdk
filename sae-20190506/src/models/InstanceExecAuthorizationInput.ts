// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceExecAuthorizationInputOptions } from "./InstanceExecAuthorizationInputOptions";


export class InstanceExecAuthorizationInput extends $dara.Model {
  options?: InstanceExecAuthorizationInputOptions;
  static names(): { [key: string]: string } {
    return {
      options: 'options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: InstanceExecAuthorizationInputOptions,
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

