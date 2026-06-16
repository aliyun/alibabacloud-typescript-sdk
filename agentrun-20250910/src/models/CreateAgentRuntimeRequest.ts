// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAgentRuntimeInput } from "./CreateAgentRuntimeInput";


export class CreateAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * Request parameters for creating an agent runtime
   * 
   * This parameter is required.
   */
  body?: CreateAgentRuntimeInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAgentRuntimeInput,
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

