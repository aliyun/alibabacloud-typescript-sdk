// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTokenPlanInviteLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration period. Default value: DAYS_7. Valid values:
   * 
   * - DAYS_7
   * - DAYS_30
   * - MONTHS_6
   * - YEAR_1
   * 
   * @example
   * DAYS_7
   */
  expireType?: string;
  /**
   * @remarks
   * The SSO logon method bound to the invitation link. Valid values:
   * 
   * - SAML
   * - DINGTALK
   * 
   * This parameter is required.
   * 
   * @example
   * SAML
   */
  ssoSource?: string;
  static names(): { [key: string]: string } {
    return {
      expireType: 'ExpireType',
      ssoSource: 'SsoSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireType: 'string',
      ssoSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

