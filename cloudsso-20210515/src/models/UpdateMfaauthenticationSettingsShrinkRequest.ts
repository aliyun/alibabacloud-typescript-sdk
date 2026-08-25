// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMFAAuthenticationSettingsShrinkRequest extends $dara.Model {
  allowedVerificationTypesShrink?: string;
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
   * The global MFA settings. Valid values:
   * 
   * - Enabled: MFA verification is enabled for all users.
   * - Byuser: MFA verification depends on the individual MFA settings of each user. For more information about individual user MFA settings, see [UpdateUserMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450135.html).
   * - Disabled: MFA verification is disabled for all users.
   * - OnlyRiskyLogin: MFA verification is required only for unusual logon attempts.
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationSettings?: string;
  /**
   * @remarks
   * The action to take when the MFA settings option is set to verify only for unusual logon attempts. Valid values:
   * 
   * - Autonomous: Users can skip MFA binding during unusual logon, but users who have already bound MFA must complete MFA verification.
   * - EnforceVerify: Users who have not bound MFA are required to bind it, and users who have already bound MFA must complete verification.
   * 
   * @example
   * Autonomous
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      allowedVerificationTypesShrink: 'AllowedVerificationTypes',
      directoryId: 'DirectoryId',
      MFAAuthenticationSettings: 'MFAAuthenticationSettings',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedVerificationTypesShrink: 'string',
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

