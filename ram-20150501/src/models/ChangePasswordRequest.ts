// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangePasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The new password that is used to log on to the console.
   * 
   * The password must meet the complexity requirements. For more information, see [SetPasswordPolicy](https://help.aliyun.com/document_detail/28739.html).
   * 
   * @example
   * aw$2****
   */
  newPassword?: string;
  /**
   * @remarks
   * The old password that is used to log on to the console.
   * 
   * @example
   * 12****
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

