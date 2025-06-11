// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserMFAAuthenticationSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5B598B62-85E6-5792-9DF1-246D251B07DA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether MFA is enabled for the user. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  userMFAAuthenticationSettings?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userMFAAuthenticationSettings: 'UserMFAAuthenticationSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

