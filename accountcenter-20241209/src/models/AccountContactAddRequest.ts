// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactAddRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  appName?: string;
  asyncEmailVerify?: boolean;
  asyncMobileVerify?: boolean;
  /**
   * @example
   * xxx@xxx.xxx
   */
  contactEmail?: string;
  /**
   * @example
   * 1xxxxxxxxxx
   */
  contactMobile?: string;
  /**
   * @example
   * xxx
   */
  contactName?: string;
  /**
   * @example
   * 0
   */
  contactPosition?: string;
  /**
   * @example
   * null
   */
  emailCode?: string;
  /**
   * @example
   * null
   */
  mobileCode?: string;
  /**
   * @example
   * null
   */
  orientedEcId?: string;
  /**
   * @example
   * null
   */
  orientedLeId?: string;
  /**
   * @example
   * null
   */
  orientedNbId?: string;
  /**
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

