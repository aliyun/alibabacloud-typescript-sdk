// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * Specifies whether to automatically generate a password. Valid values:
   * 
   * - True: The password is automatically generated.
   * - False (default): The password is manually specified.
   * 
   * @example
   * True
   */
  generateRandomPassword?: boolean;
  /**
   * @remarks
   * The new password.
   * 
   * Format: The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
   * 
   * Length: 8 to 32 characters.
   * 
   * > If GenerateRandomPassword is set to False, you must specify Password.
   * 
   * @example
   * uc)XK$?ictf72CKFDy9vtWaFmISl****
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether the user must reset the password upon the next logon. Valid values:
   * 
   * - True: The user must reset the password.
   * - False (default): The user does not need to reset the password.
   * 
   * @example
   * False
   */
  requirePasswordResetForNextLogin?: boolean;
  /**
   * @example
   * DirectPassword
   */
  resetMethod?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      generateRandomPassword: 'GenerateRandomPassword',
      password: 'Password',
      requirePasswordResetForNextLogin: 'RequirePasswordResetForNextLogin',
      resetMethod: 'ResetMethod',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      generateRandomPassword: 'boolean',
      password: 'string',
      requirePasswordResetForNextLogin: 'boolean',
      resetMethod: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

