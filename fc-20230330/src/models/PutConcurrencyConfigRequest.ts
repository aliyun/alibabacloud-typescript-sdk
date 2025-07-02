// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutConcurrencyInput } from "./PutConcurrencyInput";


export class PutConcurrencyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrency configurations.
   * 
   * This parameter is required.
   */
  body?: PutConcurrencyInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PutConcurrencyInput,
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

