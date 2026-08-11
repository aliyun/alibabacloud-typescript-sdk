// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactEditRequest extends $dara.Model {
  /**
   * @remarks
   * Application name.
   * 
   * @example
   * xxx
   */
  appName?: string;
  /**
   * @remarks
   * Whether to asynchronously verify the email. Must be set to true for API calls. Otherwise, the verification code will be synchronously validated. Use the SendAsyncEmailCaptcha API to send the verification link.
   * 
   * @example
   * true
   */
  asyncEmailVerify?: boolean;
  /**
   * @remarks
   * Whether to asynchronously verify the mobile number. Must be set to true for API calls. Otherwise, the verification code will be synchronously validated. Use the SendAsyncMobileCaptcha API to send the verification link.
   * 
   * @example
   * true
   */
  asyncMobileVerify?: boolean;
  /**
   * @remarks
   * Contact email
   * 
   * @example
   * xxx@xxx.xx
   */
  contactEmail?: string;
  /**
   * @remarks
   * Contact ID. You can call AccountContactQueryPageList to query account contact information by page.
   * 
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @remarks
   * Contact mobile number
   * 
   * @example
   * 1xxxxxxxxxx
   */
  contactMobile?: string;
  /**
   * @remarks
   * Contact name
   * 
   * @example
   * xxx
   */
  contactName?: string;
  /**
   * @remarks
   * Position:
   * 
   * @example
   * 0
   */
  contactPosition?: string;
  /**
   * @remarks
   * Email verification code
   * 
   * @example
   * null
   */
  emailCode?: string;
  /**
   * @remarks
   * SMS verification code
   * 
   * @example
   * null
   */
  mobileCode?: string;
  /**
   * @remarks
   * Cross-enterprise management object entity ID
   * 
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @remarks
   * Currently switched enterprise
   * 
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @remarks
   * Cross-enterprise management object marketplace ID
   * 
   * @example
   * null
   */
  orientedNbId?: string;
  /**
   * @remarks
   * Whether it is an enterprise contact. This API sets the value to false by default.
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

