// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishTicketRequestNotify extends $dara.Model {
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
  /**
   * @example
   * wahaha.txt
   */
  fileName?: string;
  /**
   * @example
   * ticket/image/44xxxx9/43003/e27xxxx1640499.txt
   */
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
   * 
   * @example
   * eKWh3xxxxiE
   */
  openTeamId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dq9hP8Sk2v6vQxxxxiE
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

