// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityPreferenceResponseBodySecurityPreferencePublicKeyPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether RAM users can manage their public keys. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  allowUserToManagePublicKeys?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToManagePublicKeys: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

