// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserByMobileAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The bound mobile type.
   * 
   * - DingTalk: ding
   * - WeCom: corp_weixin
   * - Lark: feishu.
   * 
   * This parameter is required.
   * 
   * @example
   * ding
   */
  mobileType?: string;
  /**
   * @remarks
   * The bound mobile user ID.
   * 
   * - DingTalk: The unionId of the DingTalk account.
   * - WeCom: The userId of the WeCom account.
   * - Lark: The userId of the Lark account.
   * >Notice: The mobileUserId must be obtained by calling the relevant DingTalk, WeCom, or Lark API operations..
   * 
   * This parameter is required.
   * 
   * @example
   * sasda
   */
  mobileUserId?: string;
  static names(): { [key: string]: string } {
    return {
      mobileType: 'MobileType',
      mobileUserId: 'MobileUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileType: 'string',
      mobileUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

