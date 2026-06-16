// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAgentRuntimeInput } from "./UpdateAgentRuntimeInput";


export class UpdateAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters for updating an agent runtime.
   * 
   * This parameter is required.
   */
  body?: UpdateAgentRuntimeInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAgentRuntimeInput,
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

