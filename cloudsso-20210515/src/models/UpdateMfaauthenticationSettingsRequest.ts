// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMFAAuthenticationSettingsRequest extends $dara.Model {
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
   * Specifies whether to enable MFA for all users. Valid values:
   * 
   * *   Enabled: enables MFA for all users.
   * *   Byuser: uses user-specific settings. For more information about how to configure MFA for a single user, see [UpdateUserMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450135.html).
   * *   Disabled: disables MFA for all users.
   * *   OnlyRiskyLogin: MFA is required only for unusual logons.
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationSettings?: string;
  /**
   * @remarks
   * Specifies whether MFA is required for users who initiated unusual logons. Valid values:
   * 
   * Autonomous: MFA is prompted for users who initiated unusual logons. However, the users are allowed to skip MFA. If an MFA device is bound to a user who initiated an unusual logon, the user must pass MFA. EnforceVerify: MFA is required. If no MFA devices are bound to a user who initiated an unusual logon, the user must bind an MFA device. If an MFA device is already bound to a user who initiated an unusual logon, the user must pass MFA.
   * 
   * @example
   * Autonomous
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      MFAAuthenticationSettings: 'MFAAuthenticationSettings',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      MFAAuthenticationSettings: 'string',
      operationForRiskLogin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

