// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Binding } from "./Binding";


export class CreateBindingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the binding.
   */
  binding?: Binding;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F74C5C9-5AC0-49F9-914D-E01589D3****
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

