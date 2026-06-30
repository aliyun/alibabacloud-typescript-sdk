// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishTicketRequestNotify extends $dara.Model {
  groupNoticeReceiverUserIds?: string[];
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

export class FinishTicketRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishTicketRequestTicketMemoAttachments extends $dara.Model {
  fileName?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishTicketRequestTicketMemo extends $dara.Model {
  attachments?: FinishTicketRequestTicketMemoAttachments[];
  memo?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      memo: 'Memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': FinishTicketRequestTicketMemoAttachments },
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

export class FinishTicketRequest extends $dara.Model {
  notify?: FinishTicketRequestNotify;
  /**
   * @remarks
   * This parameter is required.
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openTicketId?: string;
  tenantContext?: FinishTicketRequestTenantContext;
  ticketMemo?: FinishTicketRequestTicketMemo;
  static names(): { [key: string]: string } {
    return {
      notify: 'Notify',
      openTeamId: 'OpenTeamId',
      openTicketId: 'OpenTicketId',
      tenantContext: 'TenantContext',
      ticketMemo: 'TicketMemo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notify: FinishTicketRequestNotify,
      openTeamId: 'string',
      openTicketId: 'string',
      tenantContext: FinishTicketRequestTenantContext,
      ticketMemo: FinishTicketRequestTicketMemo,
    };
  }

  validate() {
    if(this.notify && typeof (this.notify as any).validate === 'function') {
      (this.notify as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(this.ticketMemo && typeof (this.ticketMemo as any).validate === 'function') {
      (this.ticketMemo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

