// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMFAAuthenticationSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether MFA is enabled for all users. Valid values:
   * 
   * *   Enabled: MFA is enabled for all users.
   * *   Byuser: User-specific settings are applied.
   * *   Disabled: MFA is disabled for all users.
   * 
   * @example
   * Enabled
   */
  MFAAuthenticationAdvanceSettings?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2BC00C5-76A2-5FFC-A340-927940A98377
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationAdvanceSettings: 'MFAAuthenticationAdvanceSettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationAdvanceSettings: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

