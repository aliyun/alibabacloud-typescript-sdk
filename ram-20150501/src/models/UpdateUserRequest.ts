// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the RAM user.
   * 
   * The description must be 1 to 128 characters in length.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  newComments?: string;
  /**
   * @remarks
   * The new display name of the RAM user.
   * 
   * The name must be 1 to 128 characters in length.
   * 
   * @example
   * xiaoq****
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new email address of the RAM user.
   * 
   * >  This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * xiaoq****@example.com
   */
  newEmail?: string;
  /**
   * @remarks
   * The new mobile phone number of the RAM user.
   * 
   * Format: \\<Country code>-\\<Mobile phone number>.
   * 
   * >  This parameter applies only to the China site (aliyun.com).
   * 
   * @example
   * 86-1860000****
   */
  newMobilePhone?: string;
  /**
   * @remarks
   * The new username of the RAM user.
   * 
   * The username must be 1 to 64 characters in length, and can contain letters, digits, periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * xiaoq****
   */
  newUserName?: string;
  /**
   * @remarks
   * The username of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      newEmail: 'NewEmail',
      newMobilePhone: 'NewMobilePhone',
      newUserName: 'NewUserName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newComments: 'string',
      newDisplayName: 'string',
      newEmail: 'string',
      newMobilePhone: 'string',
      newUserName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

