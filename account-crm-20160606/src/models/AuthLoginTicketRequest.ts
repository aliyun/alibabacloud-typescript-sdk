// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  minorAuthCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      authCode: 'AuthCode',
      minorAuthCode: 'MinorAuthCode',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authCode: 'string',
      minorAuthCode: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

