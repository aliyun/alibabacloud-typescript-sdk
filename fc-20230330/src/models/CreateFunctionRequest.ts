// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFunctionInput } from "./CreateFunctionInput";


export class CreateFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The information about function configurations.
   * 
   * This parameter is required.
   */
  body?: CreateFunctionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateFunctionInput,
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

