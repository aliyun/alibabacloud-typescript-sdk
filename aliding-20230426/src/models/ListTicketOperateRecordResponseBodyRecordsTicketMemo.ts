// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments } from "./ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments";


export class ListTicketOperateRecordResponseBodyRecordsTicketMemo extends $dara.Model {
  attachments?: ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments[];
  /**
   * @example
   * 贤文结束工单
   */
  memo?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      memo: 'Memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListTicketOperateRecordResponseBodyRecordsTicketMemoAttachments },
      memo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

