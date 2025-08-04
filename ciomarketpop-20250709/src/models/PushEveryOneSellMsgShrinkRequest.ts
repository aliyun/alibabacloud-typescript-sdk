// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushEveryOneSellMsgShrinkRequest extends $dara.Model {
  /**
   * @example
   * ["1234567"]
   */
  dingIdListShrink?: string;
  /**
   * @example
   * 推送内容
   */
  pushMsg?: string;
  /**
   * @example
   * 1
   */
  pushType?: string;
  static names(): { [key: string]: string } {
    return {
      dingIdListShrink: 'DingIdList',
      pushMsg: 'PushMsg',
      pushType: 'PushType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingIdListShrink: 'string',
      pushMsg: 'string',
      pushType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

