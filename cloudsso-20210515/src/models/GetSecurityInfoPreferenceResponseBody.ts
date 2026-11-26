// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityInfoPreferenceResponseBodySecurityInfoPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether CloudSSO users in the directory are allowed to manage their security email addresses in the CloudSSO user portal. Valid values:
   * 
   * - true: Allowed.
   * - false: Not allowed. This is the default value.
   * 
   * @example
   * false
   */
  allowUserManageSecurityEmail?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserManageSecurityEmail: 'AllowUserManageSecurityEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserManageSecurityEmail: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityInfoPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CE8B990-193D-50CE-A604-69F3E7DCE740
   */
  requestId?: string;
  /**
   * @remarks
   * The security information management preferences.
   */
  securityInfoPreference?: GetSecurityInfoPreferenceResponseBodySecurityInfoPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityInfoPreference: 'SecurityInfoPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityInfoPreference: GetSecurityInfoPreferenceResponseBodySecurityInfoPreference,
    };
  }

  validate() {
    if(this.securityInfoPreference && typeof (this.securityInfoPreference as any).validate === 'function') {
      (this.securityInfoPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

