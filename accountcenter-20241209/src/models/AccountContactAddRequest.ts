// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactAddRequest extends $dara.Model {
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
   * Specifies whether to asynchronously verify the email address. Set this parameter to true for API calls. Otherwise, the verification code is synchronously verified. Call the SendAsyncEmailCaptcha operation to send a verification link.
   */
  asyncEmailVerify?: boolean;
  /**
   * @remarks
   * Specifies whether to asynchronously verify the mobile number. Set this parameter to true for API calls. Otherwise, the verification code is synchronously verified. Call the SendAsyncMobileCaptcha operation to send a verification link.
   */
  asyncMobileVerify?: boolean;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * xxx@xxx.xxx
   */
  contactEmail?: string;
  /**
   * @remarks
   * The mobile number of the contact.
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
   * The position of the contact. Valid values:
   * 
   * - TECH_MANAGER: technical manager
   * - MAINTAIN_MANAGER: O&M manager
   * - PROJECT_MANAGER: project manager
   * - FINANCE_MANAGER: finance manager
   * - OTHER: other.
   * 
   * @example
   * 0
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
   * Specifies whether the contact is a shared contact. This parameter is set to false by default in this operation.
   * 
   * @example
   * false
   */
  sharedContact?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      asyncEmailVerify: 'AsyncEmailVerify',
      asyncMobileVerify: 'AsyncMobileVerify',
      contactEmail: 'ContactEmail',
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

