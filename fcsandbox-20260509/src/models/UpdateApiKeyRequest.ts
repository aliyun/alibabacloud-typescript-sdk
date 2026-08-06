// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApiKeyInput } from "./UpdateApiKeyInput";


export class UpdateApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: UpdateApiKeyInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateApiKeyInput,
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

