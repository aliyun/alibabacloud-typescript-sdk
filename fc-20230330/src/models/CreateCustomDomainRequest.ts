// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCustomDomainInput } from "./CreateCustomDomainInput";


export class CreateCustomDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the custom domain name.
   * 
   * This parameter is required.
   */
  body?: CreateCustomDomainInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateCustomDomainInput,
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

