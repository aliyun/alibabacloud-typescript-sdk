// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthAndRefreshLoginTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  havanaId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      havanaId: 'HavanaId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      havanaId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

