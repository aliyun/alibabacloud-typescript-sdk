// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushEveryOneSellMsgRequest extends $dara.Model {
  /**
   * @example
   * ["1234567"]
   */
  dingIdList?: string[];
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
      dingIdList: 'DingIdList',
      pushMsg: 'PushMsg',
      pushType: 'PushType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingIdList: { 'type': 'array', 'itemType': 'string' },
      pushMsg: 'string',
      pushType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dingIdList)) {
      $dara.Model.validateArray(this.dingIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

