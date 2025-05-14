// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTicketRequestNotify extends $dara.Model {
  groupNoticeReceiverUserIds?: string[];
  /**
   * @example
   * true
   */
  noticeAllGroupMember?: boolean;
  workNoticeReceiverUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupNoticeReceiverUserIds: 'GroupNoticeReceiverUserIds',
      noticeAllGroupMember: 'NoticeAllGroupMember',
      workNoticeReceiverUserIds: 'WorkNoticeReceiverUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNoticeReceiverUserIds: { 'type': 'array', 'itemType': 'string' },
      noticeAllGroupMember: 'boolean',
      workNoticeReceiverUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupNoticeReceiverUserIds)) {
      $dara.Model.validateArray(this.groupNoticeReceiverUserIds);
    }
    if(Array.isArray(this.workNoticeReceiverUserIds)) {
      $dara.Model.validateArray(this.workNoticeReceiverUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

