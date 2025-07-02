// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutAsyncInvokeConfigInput } from "./PutAsyncInvokeConfigInput";


export class PutAsyncInvokeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of asynchronous function invocations.
   * 
   * This parameter is required.
   */
  body?: PutAsyncInvokeConfigInput;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PutAsyncInvokeConfigInput,
      qualifier: 'string',
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

