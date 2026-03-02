// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangePasswordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  newPassword?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  oldPassword?: string;
  static names(): { [key: string]: string } {
    return {
      newPassword: 'NewPassword',
      oldPassword: 'OldPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newPassword: 'string',
      oldPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

