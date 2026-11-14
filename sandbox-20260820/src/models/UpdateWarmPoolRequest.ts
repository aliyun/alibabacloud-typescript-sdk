// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWarmPoolInput } from "./UpdateWarmPoolInput";


export class UpdateWarmPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The request body, which contains the warm pool configuration.
   */
  body?: UpdateWarmPoolInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateWarmPoolInput,
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

