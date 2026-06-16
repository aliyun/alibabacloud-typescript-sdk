// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFlowEndpointInput } from "./CreateFlowEndpointInput";


export class CreateFlowEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * Request parameters for creating a flow endpoint
   * 
   * This parameter is required.
   */
  body?: CreateFlowEndpointInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateFlowEndpointInput,
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

