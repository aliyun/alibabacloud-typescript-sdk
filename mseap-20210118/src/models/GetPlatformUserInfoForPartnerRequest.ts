// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlatformUserInfoForPartnerRequest extends $dara.Model {
  /**
   * @example
   * app-0wceagu85ceaaais
   */
  appId?: string;
  /**
   * @example
   * MP
   */
  platformType?: string;
  /**
   * @example
   * 123153124411
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      platformType: 'PlatformType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      platformType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

