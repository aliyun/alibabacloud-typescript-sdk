// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserRequestUser } from "./UpdateUserRequestUser";


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * User Information
   */
  user?: UpdateUserRequestUser;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: UpdateUserRequestUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

