// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppAuthUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * The channel information.
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * The redirect URL.
   * 
   * @example
   * null
   */
  redirectUri?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channel: 'Channel',
      redirectUri: 'RedirectUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channel: 'string',
      redirectUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

