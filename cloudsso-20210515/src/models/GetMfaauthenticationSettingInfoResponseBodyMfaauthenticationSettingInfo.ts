// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo extends $dara.Model {
  /**
   * @remarks
   * The MFA policy of all users. Valid values:
   * 
   * *   Enabled: MFA is enabled for all users.
   * *   Byuser: User-specific settings are applied. For more information about how to configure MFA for a single user, see [UpdateUserMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450135.html).
   * *   Disabled: MFA is disabled for all users.
   * *   OnlyRiskyLogin: MFA is required only for unusual logons.
   * 
   * @example
   * OnlyRiskyLogin
   */
  mfaAuthenticationAdvanceSettings?: string;
  /**
   * @remarks
   * The MFA policy for unusual logons. Valid values:
   * 
   * *   Autonomous: MFA is prompted for users who initiated unusual logons. However, the users are allowed to skip MFA. If an MFA device is bound to a user who initiated an unusual logon, the user must pass MFA.
   * *   EnforceVerify: MFA is required. If no MFA devices are bound to a user who initiated an unusual logon, the user must bind an MFA device. If an MFA device is already bound to a user who initiated an unusual logon, the user must pass MFA.
   * 
   * > This parameter is displayed only when Byuser or OnlyRiskyLogin is returned for the MfaAuthenticationAdvanceSettings parameter.
   * 
   * @example
   * EnforceVerify
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      mfaAuthenticationAdvanceSettings: 'MfaAuthenticationAdvanceSettings',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaAuthenticationAdvanceSettings: 'string',
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

