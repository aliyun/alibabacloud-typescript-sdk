// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo extends $dara.Model {
  allowedVerificationTypes?: string[];
  /**
   * @remarks
   * The global MFA verification policy. Valid values:
   * 
   * - Enabled: MFA verification is enabled for all users.
   * - Byuser: MFA verification depends on the independent MFA configuration of each user. For more information about user-specific MFA configuration, see [UpdateUserMFAAuthenticationSettings](https://help.aliyun.com/document_detail/450135.html).
   * - Disabled: MFA verification is disabled for all users.
   * - OnlyRiskyLogin: MFA verification is required only for unusual logon attempts.
   * 
   * @example
   * OnlyRiskyLogin
   */
  mfaAuthenticationAdvanceSettings?: string;
  /**
   * @remarks
   * The MFA verification policy for unusual logon attempts. Valid values:
   * 
   * - Autonomous: Users can skip MFA binding during unusual logon, but users who have already bound MFA must complete verification.
   * - EnforceVerify: Users are required to bind or verify MFA during unusual logon.
   * 
   * > This parameter is displayed only when MfaAuthenticationAdvanceSettings is set to Byuser or OnlyRiskyLogin.
   * 
   * @example
   * EnforceVerify
   */
  operationForRiskLogin?: string;
  static names(): { [key: string]: string } {
    return {
      allowedVerificationTypes: 'AllowedVerificationTypes',
      mfaAuthenticationAdvanceSettings: 'MfaAuthenticationAdvanceSettings',
      operationForRiskLogin: 'OperationForRiskLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedVerificationTypes: { 'type': 'array', 'itemType': 'string' },
      mfaAuthenticationAdvanceSettings: 'string',
      operationForRiskLogin: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedVerificationTypes)) {
      $dara.Model.validateArray(this.allowedVerificationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMFAAuthenticationSettingInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The global MFA verification configuration.
   */
  MFAAuthenticationSettingInfo?: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95D3B107-DA80-5B34-A3D0-9E82F8F0DA0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationSettingInfo: 'MFAAuthenticationSettingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationSettingInfo: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.MFAAuthenticationSettingInfo && typeof (this.MFAAuthenticationSettingInfo as any).validate === 'function') {
      (this.MFAAuthenticationSettingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

