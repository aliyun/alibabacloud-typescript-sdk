// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAliasInput } from "./CreateAliasInput";


export class CreateAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters for creating an alias.
   * 
   * This parameter is required.
   */
  body?: CreateAliasInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAliasInput,
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

