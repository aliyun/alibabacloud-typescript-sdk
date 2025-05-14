// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatRecordDetailResponseBodyResultDataDataMessageList extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1614578400000
   */
  createTime?: number;
  /**
   * @example
   * MSG
   */
  msgType?: string;
  /**
   * @example
   * account1
   */
  senderName?: string;
  /**
   * @example
   * 2
   */
  senderType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      msgType: 'MsgType',
      senderName: 'SenderName',
      senderType: 'SenderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      msgType: 'string',
      senderName: 'string',
      senderType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

