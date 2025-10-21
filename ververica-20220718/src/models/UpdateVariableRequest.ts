// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Variable } from "./Variable";


export class UpdateVariableRequest extends $dara.Model {
  /**
   * @remarks
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

