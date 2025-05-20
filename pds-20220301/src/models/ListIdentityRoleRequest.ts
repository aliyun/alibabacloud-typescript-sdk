// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class ListIdentityRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  identity?: Identity;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

