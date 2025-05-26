// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Binding } from "./Binding";


export class GetBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the binding.
   */
  binding?: Binding;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AEFCD467-C928-4A36-951A-6EB5A592****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      binding: 'Binding',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binding: Binding,
      requestId: 'string',
    };
  }

  validate() {
    if(this.binding && typeof (this.binding as any).validate === 'function') {
      (this.binding as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

