// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVpcBindingInput } from "./CreateVpcBindingInput";


export class CreateVpcBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC binding configurations.
   * 
   * This parameter is required.
   */
  body?: CreateVpcBindingInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateVpcBindingInput,
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

