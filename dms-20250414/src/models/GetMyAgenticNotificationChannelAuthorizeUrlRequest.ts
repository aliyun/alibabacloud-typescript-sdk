// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMyAgenticNotificationChannelAuthorizeUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The notification channel type. Currently, only FEISHU (the Chinese version of Lark) is supported. Specifying other values results in a parameter error.
   * 
   * This parameter is required.
   * 
   * @example
   * FEISHU
   */
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

