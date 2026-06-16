// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAgentRuntimeEndpointInput } from "./UpdateAgentRuntimeEndpointInput";


export class UpdateAgentRuntimeEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Update Agent Runtime Endpoint Input
   * 
   * This parameter is required.
   */
  body?: UpdateAgentRuntimeEndpointInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAgentRuntimeEndpointInput,
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

