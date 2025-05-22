// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeUserPasswordRequest extends $dara.Model {
  /**
   * @example
   * alice***
   */
  endUserId?: string;
  /**
   * @example
   * Admin@12***
   */
  newPassword?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      newPassword: 'NewPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      newPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

