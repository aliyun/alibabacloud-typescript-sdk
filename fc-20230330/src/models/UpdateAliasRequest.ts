// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAliasInput } from "./UpdateAliasInput";


export class UpdateAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias information to be updated.
   * 
   * This parameter is required.
   */
  body?: UpdateAliasInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAliasInput,
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

