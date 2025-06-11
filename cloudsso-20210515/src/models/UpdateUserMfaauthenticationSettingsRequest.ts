// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserMFAAuthenticationSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  /**
   * @remarks
   * Specifies whether to enable MFA for the user. Valid values:
   * 
   * *   Enabled: enables MFA for the user.
   * *   Disabled: disables MFA for the user.
   * 
   * @example
   * Enabled
   */
  userMFAAuthenticationSettings?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      userId: 'UserId',
      userMFAAuthenticationSettings: 'UserMFAAuthenticationSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      userId: 'string',
      userMFAAuthenticationSettings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

