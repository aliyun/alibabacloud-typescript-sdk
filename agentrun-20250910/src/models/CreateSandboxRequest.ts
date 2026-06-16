// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSandboxInput } from "./CreateSandboxInput";


export class CreateSandboxRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the sandbox.
   * 
   * This parameter is required.
   */
  body?: CreateSandboxInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateSandboxInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

