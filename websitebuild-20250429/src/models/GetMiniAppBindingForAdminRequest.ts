// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMiniAppBindingForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250801152639000005
   */
  bizId?: string;
  /**
   * @remarks
   * Channel
   * 
   * @example
   * WECHAT
   */
  channel?: string;
  /**
   * @remarks
   * Miniapp ID
   * 
   * @example
   * xxxx
   */
  platformAppid?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channel: 'Channel',
      platformAppid: 'PlatformAppid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channel: 'string',
      platformAppid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

