// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChatRecordDetailResponseBodyResultDataDataMessageList } from "./ListChatRecordDetailResponseBodyResultDataDataMessageList";


export class ListChatRecordDetailResponseBodyResultDataData extends $dara.Model {
  /**
   * @example
   * 1614578410000
   */
  endTime?: number;
  messageList?: ListChatRecordDetailResponseBodyResultDataDataMessageList[];
  /**
   * @example
   * 123@123.com
   */
  servicerName?: string;
  /**
   * @example
   * 1614578400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      messageList: 'MessageList',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      messageList: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataDataMessageList },
      servicerName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

