// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityInfoPreferenceResponseBodySecurityInfoPreference extends $dara.Model {
  /**
   * @remarks
   * Specifies whether CloudSSO users in the directory are allowed to manage their security email addresses in the CloudSSO user portal. Valid values:
   * 
   * - true: allowed.
   * - false: not allowed.
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

export class SetSecurityInfoPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B13E4EE-3853-5852-9165-597C32AD8FB7
   */
  requestId?: string;
  /**
   * @remarks
   * The security information management preferences.
   */
  securityInfoPreference?: SetSecurityInfoPreferenceResponseBodySecurityInfoPreference;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityInfoPreference: 'SecurityInfoPreference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityInfoPreference: SetSecurityInfoPreferenceResponseBodySecurityInfoPreference,
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

