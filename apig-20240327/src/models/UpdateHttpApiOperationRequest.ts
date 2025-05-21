// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiOperation } from "./HttpApiOperation";


export class UpdateHttpApiOperationRequest extends $dara.Model {
  /**
   * @remarks
   * operation definition.
   */
  operation?: HttpApiOperation;
  static names(): { [key: string]: string } {
    return {
      operation: 'operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: HttpApiOperation,
    };
  }

  validate() {
    if(this.operation && typeof (this.operation as any).validate === 'function') {
      (this.operation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

