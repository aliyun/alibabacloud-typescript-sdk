// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The new comments.
   * 
   * The comments must be 1 to 128 characters in length.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  newComments?: string;
  /**
   * @remarks
   * The new display name of the Resource Access Management (RAM) user.
   * 
   * The name must be 1 to 24 characters in length.
   * 
   * @example
   * new
   */
  newDisplayName?: string;
  /**
   * @remarks
   * The new email address of the Resource Access Management (RAM) user.
   * 
   * > This parameter is applicable only to China site (aliyun.com).
   * 
   * @example
   * alice@example.com
   */
  newEmail?: string;
  /**
   * @remarks
   * The new mobile phone number of the Resource Access Management (RAM) user.
   * 
   * Format: area code-phone number.
   * 
   * > This parameter is applicable only to China site (aliyun.com).
   * 
   * @example
   * 86-1868888****
   */
  newMobilePhone?: string;
  /**
   * @remarks
   * The new logon name of the Resource Access Management (RAM) user.
   * 
   * The format is `<username>@<AccountAlias>.onaliyun.com`, where `<username>` is the RAM username and `<AccountAlias>.onaliyun.com` is the default domain name.
   * 
   * The `UserPrincipalName` must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The `<username>` must be 1 to 64 characters in length.
   * 
   * @example
   * new@example.onaliyun.com
   */
  newUserPrincipalName?: string;
  /**
   * @remarks
   * The ID of the specified Resource Access Management (RAM) user.
   * > You must specify either the `UserPrincipalName` or `UserId` parameter, but not both.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the specified Resource Access Management (RAM) user.
   * 
   * > You must specify either the `UserPrincipalName` or `UserId` parameter, but not both.
   * 
   * @example
   * test@example.onaliyun.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      newComments: 'NewComments',
      newDisplayName: 'NewDisplayName',
      newEmail: 'NewEmail',
      newMobilePhone: 'NewMobilePhone',
      newUserPrincipalName: 'NewUserPrincipalName',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newComments: 'string',
      newDisplayName: 'string',
      newEmail: 'string',
      newMobilePhone: 'string',
      newUserPrincipalName: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

