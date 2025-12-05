// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateSessionInput } from "./UpdateSessionInput";


export class UpdateSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The session update configuration.
   */
  body?: UpdateSessionInput;
  /**
   * @remarks
   * The function alias or version associated with the session to be updated.
   * 
   * @example
   * aliasName1
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
      body: UpdateSessionInput,
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

