// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Variable } from "./Variable";


export class CreateVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter that is used to create the variable.
   * 
   * This parameter is required.
   */
  body?: Variable;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Variable,
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

