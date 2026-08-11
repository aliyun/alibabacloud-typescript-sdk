// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactEditRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether to asynchronously verify the email address. Set this parameter to true for API calls. Otherwise, the verification code is synchronously and strictly verified. Call SendAsyncEmailCaptcha to send a verification link.
   * 
   * @example
   * true
   */
  asyncEmailVerify?: boolean;
  /**
   * @remarks
   * Specifies whether to asynchronously verify the mobile phone number. Set this parameter to true for API calls. Otherwise, the verification code is synchronously and strictly verified. Call SendAsyncMobileCaptcha to send a verification link.
   * 
   * @example
   * true
   */
  asyncMobileVerify?: boolean;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * xxx@xxx.xx
   */
  contactEmail?: string;
  /**
   * @remarks
   * The ID of the contact to modify. You can invoke the EnterpriseContactQueryPageList operation to perform a paged query of account contact information.
   * 
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * @example
   * 1xxxxxxxxxx
   */
  contactMobile?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * xxx
   */
  contactName?: string;
  /**
   * @remarks
   * The position of the contact.
   * 
   * @example
   * 2
   */
  contactPosition?: string;
  /**
   * @remarks
   * The email verification code.
   * 
   * @example
   * null
   */
  emailCode?: string;
  /**
   * @remarks
   * The SMS verification code.
   * 
   * @example
   * null
   */
  mobileCode?: string;
  /**
   * @remarks
   * The entity ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @remarks
   * The ID of the enterprise to which you have switched.
   * 
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @remarks
   * The sales channel ID of the cross-enterprise management object.
   * 
   * @example
   * null
   */
  orientedNbId?: string;
  /**
   * @remarks
   * Specifies whether the contact is a public contact. This operation sets this parameter to true by default.
   * 
   * @example
   * true
   */
  sharedContact?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      asyncEmailVerify: 'AsyncEmailVerify',
      asyncMobileVerify: 'AsyncMobileVerify',
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      contactPosition: 'ContactPosition',
      emailCode: 'EmailCode',
      mobileCode: 'MobileCode',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      sharedContact: 'SharedContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      asyncEmailVerify: 'boolean',
      asyncMobileVerify: 'boolean',
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
      contactPosition: 'string',
      emailCode: 'string',
      mobileCode: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      sharedContact: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

