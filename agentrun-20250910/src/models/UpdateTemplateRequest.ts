// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateInput } from "./UpdateTemplateInput";


export class UpdateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for the template update.
   * 
   * This parameter is required.
   */
  body?: UpdateTemplateInput;
  /**
   * @remarks
   * A unique client token to ensure request idempotency.
   * 
   * @example
   * clientToken
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateTemplateInput,
      clientToken: 'string',
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

