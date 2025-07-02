// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateFunctionInput } from "./UpdateFunctionInput";


export class UpdateFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The function information
   * 
   * This parameter is required.
   */
  body?: UpdateFunctionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateFunctionInput,
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

