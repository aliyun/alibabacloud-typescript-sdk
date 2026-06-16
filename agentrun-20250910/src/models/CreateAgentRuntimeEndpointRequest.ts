// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAgentRuntimeEndpointInput } from "./CreateAgentRuntimeEndpointInput";


export class CreateAgentRuntimeEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Create agent runtime endpoint input
   * 
   * This parameter is required.
   */
  body?: CreateAgentRuntimeEndpointInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAgentRuntimeEndpointInput,
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

