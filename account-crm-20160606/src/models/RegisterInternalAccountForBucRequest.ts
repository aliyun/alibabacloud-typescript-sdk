// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterInternalAccountForBucRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  email?: string;
  isEmailConfirmed?: boolean;
  isMobileConfirmed?: boolean;
  isMobileLogin?: boolean;
  mobile?: string;
  nationalityCode?: string;
  plainPassword?: string;
  preferredLanguage?: string;
  accountTypeCode?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      email: 'Email',
      isEmailConfirmed: 'IsEmailConfirmed',
      isMobileConfirmed: 'IsMobileConfirmed',
      isMobileLogin: 'IsMobileLogin',
      mobile: 'Mobile',
      nationalityCode: 'NationalityCode',
      plainPassword: 'PlainPassword',
      preferredLanguage: 'PreferredLanguage',
      accountTypeCode: 'accountTypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      email: 'string',
      isEmailConfirmed: 'boolean',
      isMobileConfirmed: 'boolean',
      isMobileLogin: 'boolean',
      mobile: 'string',
      nationalityCode: 'string',
      plainPassword: 'string',
      preferredLanguage: 'string',
      accountTypeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

